import { ArrowLeft } from 'lucide-react'
import ButtonLink from '../components/ui/ButtonLink.jsx'
import AboutSection from '../components/sections/AboutSection.jsx'

export default function About() {
  return (
    <div className="py-8">
      <div className="mx-auto max-w-5xl px-6">
        <ButtonLink
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-accent"
        >
          <ArrowLeft size={16} aria-hidden="true" /> Back to Home
        </ButtonLink>
      </div>
      <AboutSection />
    </div>
  )
}