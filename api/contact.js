import nodemailer from 'nodemailer'

const clean = (s = '') => String(s).replace(/[\r\n]+/g, ' ').trim()
const escapeHtml = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { name = '', email = '', subject = '', message = '', company = '' } = req.body || {}

  // Honeypot: bots fill this hidden field, humans don't
  if (company) return res.status(200).json({ ok: true })

  if (!clean(name) || !/^\S+@\S+\.\S+$/.test(email) || message.trim().length < 10) {
    return res.status(400).json({ error: 'Invalid input' })
  }

  const port = Number(process.env.SMTP_PORT)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  })

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: clean(email),
      subject: `Portfolio: ${clean(subject) || 'New message'} (from ${clean(name)})`,
      text: `Name: ${clean(name)}\nEmail: ${clean(email)}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p>
             <p><strong>Email:</strong> ${escapeHtml(email)}</p>
             <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
    })
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Failed to send' })
  }
}