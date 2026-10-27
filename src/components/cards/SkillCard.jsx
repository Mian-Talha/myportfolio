export default function SkillCard({ title, icon: Icon, skills }) {
  return (
    <article className="rounded-2xl border border-surface bg-surface/20 p-8 transition-colors hover:border-primary glow">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-bg text-accent">
          <Icon size={20} aria-hidden="true" />
        </span>
        <h3 className="text-xl font-semibold text-text">{title}</h3>
      </div>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-surface bg-bg/60 px-3 py-1.5 text-sm text-text transition-colors hover:border-accent hover:text-accent"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  )
}
