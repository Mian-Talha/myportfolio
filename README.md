# Talha Portfolio

Personal portfolio site for **Mian Talha Asif** — built with React 19, Vite, React Router 8, and Tailwind CSS v4.

## Tech Stack

- **React 19** + **React Router 8** — Full single-page landing + dedicated page routes
- **Vite 8** — dev server & build tooling
- **Tailwind CSS v4** (`@tailwindcss/vite`) — utility-first styling with custom theme tokens
- **Framer Motion** — animations & micro-interactions
- **lucide-react** — modern icons
- **FormSubmit AJAX / SMTP** — Direct contact email delivery to `talhaasif0077@gmail.com`
- **ESLint 10** — linting

## Professional 2026 Project Structure

```
talha-portfolio/
├── api/
│   └── contact.js          # Vercel serverless function (SMTP alternative)
├── public/
│   ├── favicon.png
│   └── resume.pdf          # Resume PDF accessible at /resume.pdf
├── src/
│   ├── assets/             # Static images
│   ├── components/
│   │   ├── cards/          # Reusable domain cards: ProjectCard, SkillCard, TimelineItem
│   │   ├── layout/         # RootLayout, Header, Footer, ScrollToTop
│   │   ├── sections/       # HeroSection, AboutSection, ExperienceSection, SkillsSection, ProjectsSection, ContactSection, ContactForm
│   │   └── ui/             # ButtonLink, HoverCard, InfoCard, SectionHeading, AnimatedBackground
│   ├── data/               # Content data: home, about, experience, skills, projects, contact, navigation
│   ├── hooks/              # Custom React hooks (useActiveSection)
│   ├── pages/              # Route pages: Home, About, Experience, Skills, Projects, Contact, Resume, NotFound
│   ├── services/           # Services: contactService (email delivery, validation, fallback)
│   ├── App.jsx             # Active route definitions
│   ├── main.jsx            # App entry point
│   └── index.css           # Tailwind + theme tokens
├── vite.config.js
└── package.json
```

## Routes

| Path | Description |
|------|-------------|
| `/` | Full landing page with smooth scroll & hash links (`/#about`, `/#projects`, etc.) |
| `/about` | Standalone About page |
| `/experience` | Standalone Experience page |
| `/skills` | Standalone Skills page |
| `/projects` | Standalone Projects page |
| `/contact` | Standalone Contact page |
| `/resume` | Standalone Resume view/download page |
| `*` | Custom styled 404 Not Found page |

## Getting Started

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

## Contact Form & Email Delivery

Submitting the form delivers messages directly to `talhaasif0077@gmail.com`:
- **FormSubmit AJAX service** delivers form data directly to your inbox without requiring a separate backend server.
- **Client validation & Honeypot** filters spam submissions automatically.
- **Direct Mailto Fallback** ensures visitors can always reach you even if they are offline.
