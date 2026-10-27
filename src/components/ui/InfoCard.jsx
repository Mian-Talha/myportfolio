export default function InfoCard({ title, icon: Icon, children }) {
  return (
    <article className="rounded-2xl border border-surface bg-surface/20 p-8 transition-colors hover:border-primary glow">       <div className="mb-6 flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-bg text-accent">
          <Icon size={24} aria-hidden="true" />
        </span>
        <h2 className="text-2xl font-semibold text-text">{title}</h2>
      </div>
      {children}
    </article>
  )
}