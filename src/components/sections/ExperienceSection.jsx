import SectionHeading from '../ui/SectionHeading.jsx'
import TimelineItem from '../cards/TimelineItem.jsx'
import { experience } from '../../data/experience.js'

export default function ExperienceSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16" id="experience">
      <SectionHeading title="Professional" highlight="Experience" />

      <div className="relative">
        <div
          className="absolute left-4 top-0 h-full w-px bg-surface md:left-1/2 md:-translate-x-1/2"
          aria-hidden="true"
        />
        <ol className="space-y-12">
          {experience.map((item, i) => (
            <TimelineItem key={item.role + item.company} item={item} index={i} />
          ))}
        </ol>
      </div>
    </section>
  )
}
