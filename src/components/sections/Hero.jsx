import { ArrowRight, FileText, Mail } from 'lucide-react'
import { hero, stats } from '../../data/home.js'
import ButtonLink from '../ui/ButtonLink.jsx'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
        <span className="glow inline-flex items-center gap-2 rounded-full border border-primary bg-surface/40 px-4 py-1.5 text-sm font-medium text-accent">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 motion-safe:animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Available for new opportunities
        </span>

        <h1 className="mt-8">
          <span className="block text-5xl font-bold tracking-tight text-text md:text-7xl">{hero.name}</span>
          <span className="mt-3 block bg-linear-to-r from-accent to-primary bg-clip-text text-2xl font-bold text-transparent md:text-4xl">
            {hero.title}
          </span>
        </h1>
        <p className="mt-3 text-sm font-medium uppercase tracking-[0.3em] text-muted">{hero.stack}</p>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted">{hero.summary}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink
            href="#projects"
            className="glow inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            View Projects <ArrowRight size={18} aria-hidden="true" />
          </ButtonLink>

          <ButtonLink
            href="/resume"
            className="glow inline-flex items-center gap-2 rounded-full border border-primary bg-surface/40 px-7 py-3.5 font-semibold text-accent transition hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <FileText size={18} aria-hidden="true" /> View Resume
          </ButtonLink>

          <ButtonLink
            href="#contact"
            aria-label="Contact me"
            className="glow flex h-13 w-13 items-center justify-center rounded-full border border-surface bg-surface/20 text-text transition hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <Mail size={20} aria-hidden="true" />
          </ButtonLink>
        </div>

        <ul className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3">
          {stats.map((s) => (
            <li key={s.label} className="glow rounded-2xl border border-surface bg-surface/20 p-6">
              <p className="text-3xl font-bold text-text">{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted">{s.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}