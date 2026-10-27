import { useState } from 'react'
import { Send, Loader2, CircleCheck, CircleAlert, Mail, Info } from 'lucide-react'
import {
  validateContactForm,
  sendContactMessage,
  getMailtoFallback,
} from '../../services/contactService.js'

const initial = { name: '', email: '', subject: '', message: '', company: '' }

function Field({ label, name, type = 'text', textarea, required, value, onChange, error, placeholder }) {
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
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full rounded-xl border bg-bg/60 px-4 py-3 text-text placeholder-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
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
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'activation' | 'error'
  const [statusMessage, setStatusMessage] = useState('')

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
    if (status !== 'idle' && status !== 'sending') setStatus('idle')
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const foundErrors = validateContactForm(values)
    setErrors(foundErrors)
    if (Object.keys(foundErrors).length > 0) return

    setStatus('sending')
    setStatusMessage('')

    try {
      const result = await sendContactMessage(values)
      if (result.requiresActivation) {
        setStatus('activation')
        setStatusMessage(result.message)
      } else {
        setStatus('success')
        setStatusMessage(result.message)
        setValues(initial)
      }
    } catch (err) {
      setStatus('error')
      setStatusMessage(err.message || 'Something went wrong while sending your message.')
    }
  }

  const field = (name, placeholder) => ({
    name,
    value: values[name],
    onChange,
    error: errors[name],
    placeholder,
  })

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-surface bg-surface/20 p-8 glow">
      {/* Honeypot field for bot protection */}
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
      <p className="mb-6 mt-1 text-sm text-muted">
        Fill in the form and your message will be delivered directly to my email inbox.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" required {...field('name', 'Your name')} />
        <Field label="Email" type="email" required {...field('email', 'you@example.com')} />
      </div>
      <div className="mt-5 space-y-5">
        <Field label="Subject" {...field('subject', 'Project discussion / inquiry')} />
        <Field label="Message" textarea required {...field('message', 'Tell me about your project or opportunity...')} />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-semibold text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === 'sending' ? (
            <>
              <Loader2 size={18} className="animate-spin" aria-hidden="true" /> Sending Message...
            </>
          ) : (
            <>
              <Send size={18} aria-hidden="true" /> Send Message
            </>
          )}
        </button>

        {status === 'error' && (
          <a
            href={getMailtoFallback(values)}
            className="inline-flex items-center gap-2 rounded-xl border border-primary bg-surface/40 px-5 py-3 text-sm font-semibold text-accent transition hover:bg-surface focus-visible:outline-2 focus-visible:outline-accent"
          >
            <Mail size={16} aria-hidden="true" /> Open Mail Client Directly
          </a>
        )}
      </div>

      <div role="status" aria-live="polite" className="mt-5">
        {status === 'success' && (
          <div className="flex items-start gap-3 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-300">
            <CircleCheck size={20} className="shrink-0 text-green-400" aria-hidden="true" />
            <p>{statusMessage || 'Thanks! Your message has been sent successfully. I will get back to you soon.'}</p>
          </div>
        )}

        {status === 'activation' && (
          <div className="flex items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-300">
            <Info size={20} className="shrink-0 text-amber-400" aria-hidden="true" />
            <p>{statusMessage}</p>
          </div>
        )}

        {status === 'error' && (
          <div className="flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
            <CircleAlert size={20} className="shrink-0 text-red-400" aria-hidden="true" />
            <div>
              <p>{statusMessage}</p>
              <p className="mt-1 text-xs text-muted">
                You can also email me directly at{' '}
                <a href="mailto:talhaasif0077@gmail.com" className="text-accent underline">
                  talhaasif0077@gmail.com
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </form>
  )
}