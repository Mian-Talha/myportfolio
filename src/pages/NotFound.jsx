import { ArrowLeft, Home, Compass } from 'lucide-react'
import ButtonLink from '../components/ui/ButtonLink.jsx'

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-2xl items-center px-6 py-20">
      <div className="glow w-full rounded-2xl border border-surface bg-surface/20 p-10 text-center">
        <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-bg text-accent">
          <Compass size={40} aria-hidden="true" />
        </span>

        <span className="mt-6 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-semibold tracking-wider text-accent">
          404 ERROR
        </span>

        <h1 className="mt-4 text-3xl font-bold text-text md:text-5xl">
          Page <span className="text-accent">Not Found</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted">
          The page you're looking for doesn't exist or has been moved. Use the buttons below to get back on track.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <ButtonLink
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-accent"
          >
            <Home size={18} aria-hidden="true" /> Back to Home
          </ButtonLink>
          <ButtonLink
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-full border border-primary bg-surface/40 px-7 py-3.5 font-semibold text-accent transition hover:bg-surface focus-visible:outline-2 focus-visible:outline-accent"
          >
            <ArrowLeft size={18} aria-hidden="true" /> View Projects
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}