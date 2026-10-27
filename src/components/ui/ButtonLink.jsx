import { createElement } from 'react'

export default function ButtonLink({ children, ...props }) {
  return createElement('a', props, children)
}