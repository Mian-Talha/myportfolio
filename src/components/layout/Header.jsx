import { useEffect, useState } from 'react'
import { navLinks } from '../../data/navigation.js'
import useActiveSection from '../../hooks/useActiveSection.js'
import ButtonLink from '../ui/ButtonLink.jsx'

const sectionIds = navLinks.map((l) => l.id)

const linkClass = (isActive) =>
  `rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-accent ${isActive ? 'text-accent' : 'text-muted hover:text-text'
  }`

export default function Header() {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 10)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)
  const close = () => setOpen(false)

  const onLogoClick = (e) => {
    if (window.location.pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${scrolled || open ? 'bg-surface/95 shadow-lg backdrop-blur' : 'bg-transparent'
        }`}
    >
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <ButtonLink href="/" onClick={onLogoClick} className="text-xl font-bold tracking-tight text-text glow">
          Talha <span className="text-accent">Asif</span>
        </ButtonLink>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <ButtonLink
                href={`/#${l.id}`}
                aria-current={active === l.id ? 'location' : undefined}
                className={linkClass(active === l.id)}
              >
                {l.label}
              </ButtonLink>
            </li>
          ))}
        </ul>

        <ButtonLink
          href="/#contact"
          className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:inline-block glow"
        >
          Hire Me
        </ButtonLink>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="rounded-md p-2 text-text md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <li key={l.id}>
                <ButtonLink href={`/#${l.id}`} onClick={close} className={`block ${linkClass(active === l.id)}`}>
                  {l.label}
                </ButtonLink>
              </li>
            ))}
          </ul>
          <ButtonLink
            href="/#contact"
            onClick={close}
            className="mt-4 block rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Hire Me
          </ButtonLink>
        </div>
      )}
    </header>
  )
}