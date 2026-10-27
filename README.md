# Talha Portfolio

Personal portfolio site for **Mian Talha Asif**, Python Backend Developer — built with React, Vite, and Tailwind CSS.

## Tech Stack

- **React 19** + **React Router 8** — SPA with in-page hash routing
- **Vite 8** — dev server & build tooling
- **Tailwind CSS v4** (`@tailwindcss/vite`) — utility-first styling with custom theme tokens
- **Framer Motion** — animations
- **lucide-react** — icons
- **nodemailer** — SMTP email sending for the serverless contact endpoint
- **ESLint 10** — linting

## Project Structure

```
talha-portfolio/
├── api/
│   └── contact.js          # Vercel serverless function: sends contact form emails via SMTP
├── public/
│   ├── Python_favicon.png
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── layout/          # RootLayout, Header, Footer, ScrollToTop
│   │   ├── sections/        # Hero, ContactForm, ProjectCard, SkillCard, TimelineItem
│   │   └── ui/               # ButtonLink, HoverCard, InfoCard, SectionHeading, animated-background
│   ├── data/                # Content: home, about, experience, skills, projects, contact, navigation
│   ├── hooks/
│   │   └── useActiveSection.js
│   ├── pages/                # Home (active), About/Experience/Skills/Projects/Contact/NotFound (page-level, currently unmounted)
│   ├── App.jsx               # Route definitions
│   ├── main.jsx               # App entry point
│   └── index.css             # Tailwind + theme tokens
├── vite.config.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (recent LTS)
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server with HMR.

### Lint

```bash
npm run lint
```

### Build

```bash
npm run build
```

> Note: the current `build` script runs `tsc -b && vite build`, but this project is plain JavaScript (no `tsconfig.json`). See [PROGRESS.md](./PROGRESS.md) for details.

### Preview production build

```bash
npm run preview
```

## Content

All page copy (hero text, about summary, experience timeline, skills, projects, contact info) lives in `src/data/*.js` — update those files to change site content without touching components.

## Contact Form

The contact form (`src/components/sections/ContactForm.jsx`) posts to `FORM_ENDPOINT`, defined in `src/data/contact.js`. A Vercel serverless function at `api/contact.js` is available as an SMTP-based alternative and requires these environment variables:

| Variable      | Description                          |
|---------------|---------------------------------------|
| `SMTP_HOST`   | SMTP server host                      |
| `SMTP_PORT`   | SMTP server port                      |
| `SMTP_USER`   | SMTP auth username                    |
| `SMTP_PASS`   | SMTP auth password                    |
| `CONTACT_TO`  | Destination address for messages      |

See [PROGRESS.md](./PROGRESS.md) for current setup status and what's still pending.

## Project Status

See [PROGRESS.md](./PROGRESS.md) for a full breakdown of what's implemented, what's in progress, and suggested next steps.
