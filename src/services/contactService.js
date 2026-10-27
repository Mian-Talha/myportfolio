import { FORM_ENDPOINT, contactInfo } from '../data/contact.js'

/**
 * Validates contact form fields.
 * @param {Object} values - { name, email, message }
 * @returns {Object} errors - Field errors object
 */
export function validateContactForm(values) {
  const errors = {}
  if (!values.name?.trim()) {
    errors.name = 'Please enter your name.'
  }
  if (!values.email?.trim() || !/^\S+@\S+\.\S+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.message?.trim() || values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.'
  }
  return errors
}

/**
 * Generates a pre-filled mailto URL fallback.
 */
export function getMailtoFallback(values) {
  const emailItem = contactInfo.find((c) => c.label === 'Email')
  const to = emailItem ? emailItem.value : 'talhaasif0077@gmail.com'
  const subject = encodeURIComponent(values.subject || `Portfolio enquiry from ${values.name || 'Visitor'}`)
  const body = encodeURIComponent(
    `Hello Talha,\n\n${values.message || ''}\n\nBest regards,\n${values.name || ''}\nEmail: ${values.email || ''}`
  )
  return `mailto:${to}?subject=${subject}&body=${body}`
}

/**
 * Sends a message via FormSubmit AJAX service to deliver directly to your email inbox.
 * @param {Object} values - { name, email, subject, message, company }
 * @returns {Promise<{ ok: boolean, message: string, requiresActivation?: boolean }>}
 */
export async function sendContactMessage(values) {
  // Honeypot check - silently discard bot submissions
  if (values.company) {
    return { ok: true, message: 'Message sent successfully.' }
  }

  const endpoint = FORM_ENDPOINT || 'https://formsubmit.co/ajax/talhaasif0077@gmail.com'

  const payload = {
    name: values.name.trim(),
    email: values.email.trim(),
    subject: values.subject?.trim() || `Portfolio Contact from ${values.name.trim()}`,
    message: values.message.trim(),
    _subject: `New Portfolio Message: ${values.subject?.trim() || 'General Inquiry'} (from ${values.name.trim()})`,
    _replyto: values.email.trim(),
    _template: 'table',
  }

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })

  let data = null
  try {
    data = await res.json()
  } catch {
    data = null
  }

  if (res.ok && (data?.success === 'true' || data?.success === true)) {
    return {
      ok: true,
      message: 'Thanks! Your message has been sent directly to my email. I will reply soon.',
    }
  }

  // Handle FormSubmit first-time activation message
  if (data?.message && /activation/i.test(data.message)) {
    return {
      ok: true,
      requiresActivation: true,
      message:
        "FormSubmit activation sent! Please check talhaasif0077@gmail.com and click 'Activate Form' once. After that, all messages will land directly in your inbox.",
    }
  }

  throw new Error(data?.message || 'Failed to deliver message. Please use the direct email link.')
}
