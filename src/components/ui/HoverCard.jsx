import { AnimatedBackground } from './animated-background'

export default function HoverCard({ children, className = '' }) {
  return (
    <AnimatedBackground
      className={`h-full w-full ${className}`}
      transition={{
        type: 'spring',
        bounce: 0.2,
        duration: 0.6,
      }}
      enableHover
    >
      <div
        data-id="hover-card"
        className="h-full w-full"
      >
        {children}
      </div>
    </AnimatedBackground>
  )
}