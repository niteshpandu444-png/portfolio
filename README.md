# nitesh-portfolio

Personal portfolio website for Nitesh — a 5th-semester Electronics and Computer Engineering student who is learning AI, machine learning, computer vision, and LLM applications through hands-on projects.

The purpose of this site is to present that work honestly: who I am, what I am currently learning, and the projects I have actually built. It is a student portfolio and a project builder's notebook — not a claim of senior or professional AI/LLM engineering experience. Content will only describe real skills, real project results, and real links.

## Technology stack

| Layer | Choice |
| --- | --- |
| Framework | [Next.js 16.4](https://nextjs.org/) (App Router, Turbopack) |
| Language | TypeScript 5 (strict mode) |
| UI | React 19.3 |
| Styling | Tailwind CSS 4 (via `@tailwindcss/turbopack`) |
| Linting | ESLint 9 with `eslint-config-next` (flat config) |
| Package manager | npm (lockfile: `package-lock.json`) |

No additional libraries, backend, database, authentication, or external APIs are installed at this stage.

## Local development

```bash
npm install     # install dependencies
npm run dev     # start the dev server at http://localhost:3000
```

Other available scripts:

```bash
npm run lint    # run ESLint
npm run build   # production build
npm run start   # serve the production build
```

## Repository structure

```
src/
  app/                      # Next.js App Router entry (page.tsx, layout.tsx, globals.css)
  components/
    layout/                 # structural components (header, footer, shell)
    sections/               # page sections (hero, about, projects, ...)
    ui/                     # small reusable UI elements
  content/                  # site content as typed data (no invented facts)
  lib/                      # shared helpers and utilities
public/
  images/projects/          # project screenshots / diagrams
  resume/                   # résumé / CV files
```

`src/` and `public/` subdirectories currently contain `.gitkeep` placeholders so Git tracks them until real files are added.

Note: all application source lives under `src/`, including the App Router entry at `src/app/`. The `@/*` path alias in `tsconfig.json` maps to `src/`, so imports read as `@/components/...`, `@/content/...`, `@/lib/...`, and `@/app/...`.

## Planned development phases

1. **Phase 1 — Repository organization** *(current)*: directory scaffolding, README, `.gitignore`. No frontend changes.
2. **Phase 2 — Content definition**: gather real project descriptions, skills, links, and about text into typed content in `src/content/`. Nothing invented; unknowns stay out.
3. **Phase 3 — Layout and sections**: build layout and section components in `src/components/` from the agreed content model.
4. **Phase 4 — UI refinement**: responsive behaviour, accessibility, and visual polish (design decisions deferred until explicitly approved).
5. **Phase 5 — Assets**: add project images to `public/images/projects/` and the résumé to `public/resume/`.
6. **Phase 6 — Quality checks and deployment**: lint, production build, content review, then deployment.

## Status

Early stage. The app currently renders the untouched `create-next-app` starter page; no portfolio UI has been implemented yet.
