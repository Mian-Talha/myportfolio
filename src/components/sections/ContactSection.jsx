import SectionHeading from '../ui/SectionHeading.jsx'
import ContactForm from './ContactForm.jsx'
import { contactInfo } from '../../data/contact.js'

const cardClass =
  'flex items-center gap-4 rounded-2xl border border-surface bg-surface/20 p-4 transition-all'

export default function ContactSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16" id="contact">
      <SectionHeading title="Get In" highlight="Touch" />

      <div className="grid gap-8 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl border border-surface bg-surface/20 p-8 glow">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for new opportunities
            </span>
            <h2 className="mt-5 text-2xl font-semibold text-text">Let's build something great together</h2>
            <p className="mt-3 leading-relaxed text-muted">
              Have a project, a job opportunity, or just a question? Send me a message and it will be delivered directly to my inbox.
            </p>
          </div>

          <ul className="space-y-3">
            {contactInfo.map(({ label, value, href, icon: Icon }) => {
              const inner = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bg text-accent">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-muted">{label}</span>
                    <span className="block truncate font-medium text-text">{value}</span>
                  </span>
                </>
              )
              const external = href?.startsWith('http')
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className={`${cardClass} hover:-translate-y-0.5 hover:border-primary focus-visible:outline-2 focus-visible:outline-accent`}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className={cardClass}>{inner}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
