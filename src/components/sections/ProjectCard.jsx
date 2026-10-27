import { FolderGit2, ExternalLink } from 'lucide-react'
import HoverCard from '../ui/HoverCard.jsx'

export default function ProjectCard({ title, role, description, tech, link }) {
  return (
    <HoverCard className="h-full">
      <article className="group flex h-full min-h-full flex-col rounded-2xl border border-surface bg-surface/10 p-8 transition-colors hover:border-primary glow">
        <div className="mb-6 flex items-start justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-bg text-accent">
            <FolderGit2 size={24} aria-hidden="true" />
          </span>

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${title} (opens in a new tab)`}
              className="rounded-lg p-2 text-muted transition-colors hover:bg-bg hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
            >
              <ExternalLink size={20} aria-hidden="true" />
            </a>
          )}
        </div>

        <h2 className="text-2xl font-bold text-text transition-colors group-hover:text-accent">
          {title}
        </h2>

        <p className="mt-1 text-sm font-medium text-accent">
          {role}
        </p>

        <p className="mt-4 flex-1 leading-relaxed text-muted">
          {description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-surface bg-bg/60 px-3 py-1 text-xs font-medium text-text"
            >
              {t}
            </li>
          ))}
        </ul>
      </article>
    </HoverCard>
  )
}