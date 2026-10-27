import { useEffect } from 'react'
import { useLocation } from 'react-router'
import Hero from '../components/sections/Hero.jsx'
import About from './About.jsx'
import Experience from './Experience.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'

const sections = [
  ['about', About],
  ['experience', Experience],
  ['skills', Skills],
  ['projects', Projects],
  ['contact', Contact],
]

export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
  }, [hash])

  return (
    <>
      <div id="home">
        <Hero />
      </div>
      {sections.map(([id, Section]) => (
        <div key={id} id={id} className="scroll-mt-20">
          <Section />
        </div>
      ))}
    </>
  )
} 