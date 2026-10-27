import { useState } from 'react'
import { Send, Loader2, CircleCheck, CircleAlert } from 'lucide-react'
import { FORM_ENDPOINT, contactInfo } from '../../data/contact.js'

const initial = { name: '', email: '', subject: '', message: '', company: '' }

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Please enter your name.'
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Please enter a valid email.'
  if (v.message.trim().length < 10) e.message = 'Message should be at least 10 characters.'
  return e
}

function Field({ label, name, type = 'text', textarea, required, value, onChange, error }) {
  const Tag = textarea ? 'textarea' : 'input'
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-text">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <Tag
        id={name}
        name={name}
        type={textarea ? undefined : type}
        rows={textarea ? 5 : undefined}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full rounded-xl border bg-bg/60 px-4 py-3 text-text transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
          error ? 'border-red-400' : 'border-surface hover:border-primary'
        }`}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-sm text-red-300">
          {error}
        </p>
      )}
    </div>
  )
}

export default function ContactForm() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
    if (status === 'success' || status === 'error') setStatus('idle')
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) return

    if (!FORM_ENDPOINT) {
      const to = contactInfo.find((c) => c.label === 'Email')?.value
      const subject = encodeURIComponent(values.subject || 'Portfolio enquiry')
      const body = encodeURIComponent(`${values.message}\n\n${values.name} (${values.email})`)
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setValues(initial)
    } catch {
      setStatus('error')
    }
  }

  const field = (name) => ({ name, value: values[name], onChange, error: errors[name] })

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-surface bg-surface/20 p-8">
      {/* Honeypot: hidden from humans, bots fill it and get silently ignored */}
      <input
        type="text"
        name="company"
        value={values.company}
        onChange={onChange}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <h2 className="text-2xl font-semibold text-text">Send a message</h2>
      <p className="mb-6 mt-1 text-sm text-muted">Fill in the form and I'll get back to you soon.</p>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" required {...field('name')} />
        <Field label="Email" type="email" required {...field('email')} />
      </div>
      <div className="mt-5 space-y-5">
        <Field label="Subject" {...field('subject')} />
        <Field label="Message" textarea required {...field('message')} />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-60 sm:w-auto"
      >
        {status === 'sending' ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" /> Sending...
          </>
        ) : (
          <>
            <Send size={18} aria-hidden="true" /> Send message
          </>
        )}
      </button>

      <div role="status" aria-live="polite" className="mt-4">
        {status === 'success' && (
          <p className="flex items-center gap-2 text-accent">
            <CircleCheck size={18} aria-hidden="true" /> Thanks! Your message has been sent.
          </p>
        )}
        {status === 'error' && (
          <p className="flex items-center gap-2 text-red-300">
            <CircleAlert size={18} aria-hidden="true" /> Something went wrong. Please email me directly.
          </p>
        )}
      </div>
    </form>
  )
}