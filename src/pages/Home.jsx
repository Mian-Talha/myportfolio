import { useEffect } from 'react'
import { useLocation } from 'react-router'
import HeroSection from '../components/sections/HeroSection.jsx'
import AboutSection from '../components/sections/AboutSection.jsx'
import ExperienceSection from '../components/sections/ExperienceSection.jsx'
import SkillsSection from '../components/sections/SkillsSection.jsx'
import ProjectsSection from '../components/sections/ProjectsSection.jsx'
import ContactSection from '../components/sections/ContactSection.jsx'

const sections = [
  ['about', AboutSection],
  ['experience', ExperienceSection],
  ['skills', SkillsSection],
  ['projects', ProjectsSection],
  ['contact', ContactSection],
]

export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [hash])

  return (
    <div className="flex flex-col gap-12">
      <HeroSection />
      {sections.map(([id, Section]) => (
        <div key={id} id={id} className="scroll-mt-24">
          <Section />
        </div>
      ))}
    </div>
  )
}