import SectionHeading from '../ui/SectionHeading.jsx'
import ProjectCard from '../cards/ProjectCard.jsx'
import { projects } from '../../data/projects.js'

export default function ProjectsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16" id="projects">
      <SectionHeading title="Key" highlight="Projects" />

      <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
