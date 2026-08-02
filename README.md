# Mohammad Ali Shkeir — Portfolio

Personal portfolio site built with React, Vite, and Tailwind CSS.

**Live site:** [react-portfolio-two-rose-10.vercel.app](https://react-portfolio-two-rose-10.vercel.app/)

## Features

- Hero, About, Experience timeline, Projects, Skills, Certifications, and Contact sections
- Project cards with a detail modal (tech stack, description, GitHub links)
- Live GitHub activity feed (contribution graph + latest repos, pulled from the GitHub REST API)
- Working contact form via EmailJS
- Scroll-spy navigation with a mobile dropdown menu
- Framer Motion animations throughout, respecting `prefers-reduced-motion`
- Fully responsive (desktop, tablet, mobile)

## Tech Stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [EmailJS](https://www.emailjs.com/) for the contact form
- Deployed on [Vercel](https://vercel.com/)

## Getting Started

```bash
npm install
npm run dev
```

The contact form requires EmailJS credentials. Copy `.env.example` to `.env` and fill in:

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── components/
│   ├── layout/      # Navbar, Footer, ScrollProgressBar
│   ├── sections/    # Hero, About, Experience, Projects, Skills, Certifications, Contact
│   ├── shared/       # TypingText, ParticleBackground, AnimatedCounter
│   └── ui/           # Button, Modal, SectionHeading
├── data/             # Site content (profile, experience, projects, skills, certifications)
├── hooks/            # useActiveSection, useGithubRepos
├── lib/              # GitHub API client, icon registry, constants
└── types/            # Shared TypeScript types
```
