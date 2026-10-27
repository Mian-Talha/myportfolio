import { motion } from 'framer-motion'
import { Children, cloneElement, isValidElement, useState } from 'react'

export function AnimatedBackground({
  children,
  defaultValue,
  onValueChange,
  className = '',
  transition = {
    type: 'spring',
    bounce: 0.2,
    duration: 0.6,
  },
  enableHover = false,
}) {
  const [activeId, setActiveId] = useState(defaultValue || null)

  const handleItemClick = (id) => {
    setActiveId(id)
    onValueChange?.(id)
  }

  const handleItemHoverStart = (id) => {
    if (enableHover) {
      setActiveId(id)
    }
  }

  const handleItemHoverEnd = () => {
    if (enableHover && defaultValue) {
      setActiveId(defaultValue)
    } else if (enableHover) {
      setActiveId(null)
    }
  }

  const items = Children.map(children, (child) => {
    if (!isValidElement(child)) {
      return child
    }

    const id = child.props?.['data-id']

    if (!id) {
      console.warn(
        'Each child inside AnimatedBackground must have a unique data-id attribute.'
      )

      return child
    }

    return cloneElement(child, {
      onClick: () => handleItemClick(id),
      onHoverStart: () => handleItemHoverStart(id),
      onHoverEnd: handleItemHoverEnd,
      'data-active': activeId === id,
    })
  })

  return (
    <div className={`relative h-full w-full ${className}`}>
      {activeId && (
        <motion.div
          layoutId="animated-background"
          className="absolute inset-0 z-0 rounded-2xl bg-primary/10"
          transition={transition}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}

      <div className="relative z-10 h-full w-full">
        {items}
      </div>
    </div>
  )
}

export default AnimatedBackground
