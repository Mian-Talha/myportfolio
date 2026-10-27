import { Building2, Calendar, MapPin, CircleCheck } from 'lucide-react'

export default function TimelineItem({ item, index }) {
  const isRight = index % 2 === 1

  return (
    <li className="relative pl-12 md:grid md:grid-cols-2 md:gap-16 md:pl-0">
      <span
        className="absolute left-4 top-8 h-3 w-3 -translate-x-1/2 rounded-full bg-accent ring-4 ring-bg md:left-1/2"
        aria-hidden="true"
      />

      <article
        className={`rounded-2xl border border-surface bg-surface/20 p-6 transition-colors hover:border-primary glow ${
          isRight ? 'md:col-start-2' : 'md:col-start-1'
        }`}
      >
        <h3 className="text-xl font-semibold text-text">{item.role}</h3>

        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
          <span className="flex items-center gap-1.5">
            <Building2 size={14} className="text-accent" aria-hidden="true" />
            {item.company}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} className="text-accent" aria-hidden="true" />
            {item.period}
          </span>
          {item.location && (
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-accent" aria-hidden="true" />
              {item.location}
            </span>
          )}
        </div>

        <ul className="mt-5 space-y-3">
          {item.points.map((point) => (
            <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
              <CircleCheck size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </article>
    </li>
  )
}
