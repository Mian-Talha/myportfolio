import { ArrowLeft } from 'lucide-react'
import ButtonLink from '../components/ui/ButtonLink.jsx'
import SkillsSection from '../components/sections/SkillsSection.jsx'

export default function Skills() {
  return (
    <div className="py-8">
      <div className="mx-auto max-w-6xl px-6">
        <ButtonLink
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-accent"
        >
          <ArrowLeft size={16} aria-hidden="true" /> Back to Home
        </ButtonLink>
      </div>
      <SkillsSection />
    </div>
  )
}