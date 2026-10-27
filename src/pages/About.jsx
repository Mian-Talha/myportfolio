import { Briefcase, GraduationCap } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import InfoCard from '../components/ui/InfoCard.jsx'
import { summary, education } from '../data/about.js'

export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading title="About" highlight="Me" />

      <div className="space-y-8">
        <InfoCard title="Professional Summary" icon={Briefcase}>
          <div className="space-y-4 leading-relaxed text-muted">
            {summary.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </InfoCard>

        <InfoCard title="Education" icon={GraduationCap}>
          <ul className="grid gap-6 md:grid-cols-2">
            {education.map((edu) => (
              <li key={edu.degree + edu.institute} className="border-l-2 border-primary pl-4">
                <p className="font-semibold text-text">{edu.degree}</p>
                <p className="text-muted">{edu.institute}</p>
                <p className="mt-1 text-sm text-accent">{edu.years}</p>
              </li>
            ))}
          </ul>
        </InfoCard>
      </div>
    </section>
  )
}