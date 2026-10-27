import { ArrowUp, FileText, Mail, MapPin } from 'lucide-react'
import { navLinks } from '../../data/navigation.js'
import { contactInfo } from '../../data/contact.js'
import { hero } from '../../data/home.js'
import ButtonLink from '../ui/ButtonLink.jsx'

const email = contactInfo.find((c) => c.label === 'Email')?.value
const location = contactInfo.find((c) => c.label === 'Location')?.value

const linkClass =
  'inline-flex items-center gap-2 rounded text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent'

export default function Footer() {
  const year = new Date().getFullYear()

  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <footer className="relative mt-20 border-t border-surface bg-surface/10">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent to-transparent"
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <ButtonLink href="/#home" className="text-xl font-bold tracking-tight text-text">
            Talha <span className="text-accent">Asif</span>
          </ButtonLink>
          <p className="mt-4 max-w-xs leading-relaxed text-muted">
            Frontend developer building secure, website,apps and SaaS platforms.
          </p>
          <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-accent">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            Available for new opportunities
          </span>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-text">Quick Links</h2>
          <ul className="mt-4 grid grid-cols-2 gap-3">
            <li>
              <ButtonLink href="/#home" className={linkClass}>Home</ButtonLink>
            </li>
            {navLinks.map((l) => (
              <li key={l.id}>
                <ButtonLink href={`/#${l.id}`} className={linkClass}>{l.label}</ButtonLink>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-text">Get In Touch</h2>
          <ul className="mt-4 space-y-3">
            {email && (
              <li>
                <ButtonLink href={`mailto:${email}`} className={linkClass}>
                  <Mail size={16} className="text-accent" aria-hidden="true" /> {email}
                </ButtonLink>
              </li>
            )}
            {location && (
              <li className="flex items-center gap-2 text-muted">
                <MapPin size={16} className="text-accent" aria-hidden="true" /> {location}
              </li>
            )}
            <li>
              <ButtonLink
                href={hero.resumeUrl || '/Talha%20Asif%20resume.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                <FileText size={16} className="text-accent" aria-hidden="true" /> View Resume
              </ButtonLink>
            </li>
          </ul>
          <ButtonLink
            href="/#contact"
            className="mt-6 inline-block rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Hire Me
          </ButtonLink>
        </div>
      </div>

      <div className="border-t border-surface">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-muted sm:flex-row">
          <p>© {year} Talha Asif. All rights reserved.</p>
          <button
            type="button"
            onClick={toTop}
            className="inline-flex items-center gap-2 rounded-full border border-surface px-4 py-2 transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
          >
            Back to top <ArrowUp size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}