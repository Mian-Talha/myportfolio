# Progress

Status snapshot of the `talha-portfolio` project as of 2026-09-24.

## Overview

A personal portfolio site for Mian Talha Asif (Python Backend Developer), built with React 19, Vite, React Router, Tailwind CSS v4, and Framer Motion. Single git history so far: one commit, "personal portfolio".

## What's done

- **Layout & shell** — `RootLayout` with sticky `Header` (scroll-aware, mobile menu, active-section highlighting via `useActiveSection`), `Footer` (quick links, contact info, back-to-top), and `ScrollToTop` on route change.
- **One-page structure** — `Home.jsx` renders all sections (`Hero`, `About`, `Experience`, `Skills`, `Projects`, `Contact`) stacked on a single route (`/`), with in-page hash scrolling (`/#about`, `/#projects`, etc.).
- **Content sections implemented**:
  - Hero — name, title, stack, summary, stats (data in `src/data/home.js`)
  - About — summary + education (`src/data/about.js`)
  - Experience — timeline via `TimelineItem` (`src/data/experience.js`), 4 roles (Devverx, InfoTech, WISEMARKET, IBEX)
  - Skills — grouped skill cards with `lucide-react` icons (`src/data/skills.js`)
  - Projects — `ProjectCard` grid, 5 projects with tech tags and live links (`src/data/projects.js`)
  - Contact — `ContactForm` with client-side validation, honeypot spam field, mailto fallback when no endpoint is configured
- **UI kit** — reusable `ButtonLink`, `HoverCard`, `InfoCard`, `SectionHeading`, `animated-background` in `src/components/ui/`.
- **Serverless contact endpoint** — `api/contact.js` (Vercel function) using `nodemailer` to send mail via SMTP, with input validation and a honeypot check.
- **Styling** — Tailwind v4 via `@tailwindcss/vite` plugin, custom theme tokens in `src/index.css` (accent/primary/surface colors, glow utility, page-enter transition).
- **Tooling** — ESLint 10 flat config, Vite 8, React Compiler not enabled.

## In progress / not wired up

- **Standalone page routes are disabled** — `App.jsx` only mounts `/`. Routes for `/about`, `/experience`, `/skills`, `/projects`, `/contact`, and the `*` catch-all (`NotFound`) exist as components but are commented out, so they're currently unreachable as dedicated URLs (content is only visible via the one-page scroll/hash layout).
- **Contact form endpoint is a placeholder** — `src/data/contact.js` sets `FORM_ENDPOINT = 'https://formspree.io/f/yourFormId'`, a non-functional Formspree placeholder. The commented-out alternative (`/api/contact`) would route to the working `api/contact.js` SMTP handler instead, but that's not currently active.
- **SMTP env vars incomplete** — `.env` currently defines only `SMTP_PASS`. `api/contact.js` also needs `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, and `CONTACT_TO` to function.
- **`tsc -b` in the build script** — `package.json`'s `build` script runs `tsc -b && vite build`, but the project has no `tsconfig.json` and is plain `.jsx` (not TypeScript). This will likely fail or no-op until a TS config is added or the script is simplified.

## Known placeholders / cleanup candidates

- Default Vite/React assets still present: `src/assets/react.svg`, `src/assets/vite.svg`.
- `README.md` was still the unmodified Vite template text before this update.
- `favicon`/public assets: only `Python_favicon.png` and `resume.pdf` in `public/`.

## Suggested next steps

1. Decide whether the site should stay a single scrolling page or expose real sub-routes, then either delete the unused page-route code or uncomment/wire it in `App.jsx`.
2. Point `FORM_ENDPOINT` at a real Formspree form ID, or switch it to `/api/contact` and fill in the remaining SMTP env vars for the serverless function.
3. Fix or remove the `tsc -b` step in `npm run build` since the codebase is JavaScript, not TypeScript.
4. Remove unused default Vite assets (`react.svg`, `vite.svg`) if not referenced.
