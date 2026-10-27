import SectionHeading from '../components/ui/SectionHeading.jsx'
import SkillCard from '../components/sections/SkillCard.jsx'
import { skillGroups } from '../data/skills.js'

export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16" id="skills">
      <SectionHeading title="Technical" highlight="Skills" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <SkillCard key={group.title} {...group} />
        ))}
      </div>
    </section>
  )
}