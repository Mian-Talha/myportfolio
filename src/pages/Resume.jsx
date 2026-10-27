import { Clock, ArrowLeft, Mail } from 'lucide-react'
import ButtonLink from '../components/ui/ButtonLink.jsx'

export default function Resume() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-2xl items-center px-6 py-16">
      <div className="glow w-full rounded-2xl border border-surface bg-surface/20 p-10 text-center">
        <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-bg text-accent">
          <Clock size={40} aria-hidden="true" />
        </span>

        <h1 className="mt-6 text-3xl font-bold text-text md:text-4xl">
          Resume <span className="text-accent">Update in Progress</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted">
          I'm updating my resume with my latest work and experience. It will be available here soon.
          In the meantime, feel free to reach out directly.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <ButtonLink
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-primary bg-surface/40 px-6 py-3 font-semibold text-accent transition hover:bg-surface"
          >
            <ArrowLeft size={18} aria-hidden="true" /> Back to Home
          </ButtonLink>
          <ButtonLink
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition hover:brightness-110"
          >
            <Mail size={18} aria-hidden="true" /> Contact Me
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}