export default function SectionHeading({ title, highlight }) {
  return (
    <div className="mb-14 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-text md:text-5xl">
        {title} <span className="text-accent">{highlight}</span>
      </h1>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" aria-hidden="true" />
    </div>
  )
}