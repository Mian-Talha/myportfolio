import { Code, Server, Database, Cloud, ShieldCheck, Sparkles, Wrench } from 'lucide-react'

export const skillGroups = [
  { title: 'Languages', icon: Code, skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js', 'Next.js', 'Nodejs','Typescript'] },
  // { title: 'Backend & Frameworks', icon: Server, skills: ['Django', 'FastAPI','Flask', 'Django REST Framework', 'RESTful API Design'] },
  { title: 'Databases', icon: Database, skills: ['MongoDB', 'Rest API', 'Express', 'MySQL', 'SQLite'] },
  // { title: 'DevOps & Deployment', icon: Cloud, skills: ['Docker', 'Nginx', 'Linux', 'CI/CD'] },
  { title: 'Security & Auth', icon: ShieldCheck, skills: ['JWT Auth', 'Role-Based Access', 'API Security', 'OAuth 2.0'] },
  { title: 'Integrations', icon: Sparkles, skills: ['Stripe', 'Paddle', 'Google Drive API', 'Third-Party APIs', 'Webhooks'] },
  { title: 'Tools', icon: Wrench, skills: ['Git', 'GitHub', 'Postman', 'VS Code'] },
]