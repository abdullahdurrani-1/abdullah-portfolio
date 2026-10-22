# Abdullah Durrani — Portfolio

Personal portfolio for Abdullah Durrani (Data Scientist & AI Engineer), built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4 and Motion.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Quality checks:

```bash
npm run lint
npx tsc --noEmit
npm run build && npm run start
```

## Editing content

All copy lives in `data/` — components only render it.

| File | Contents |
| --- | --- |
| `data/site.ts` | Name, intro, email, social links, nav items, site URL |
| `data/experience.ts` | Roles (add dates here once confirmed) |
| `data/projects.ts` | Project cards and the Ozone model scores used in the chart |
| `data/skills.ts` | Skill categories; `icon` keys map to logos in `components/ui/TechIcon.tsx` |
| `data/education.ts` | Degrees (dates/status intentionally omitted until confirmed) |
| `data/certifications.ts` | Certificates — add `url` when you have the official verification link |

Project figures (R², accuracy, F1, record counts) are copied from each repository's README. Update them there and here together.

## Theming

Colours are CSS variables in `app/globals.css` (`[data-theme="dark"]` / `[data-theme="light"]`) exposed to Tailwind as `bg-bg`, `text-fg`, `text-muted`, `text-accent`, `bg-wine`, etc. Dark is the default; the choice is stored in `localStorage` and applied by an inline script in `app/layout.tsx` before first paint.

## Deploy to Vercel

1. Push this folder to GitHub.
2. In Vercel, **Add New → Project**, import the repo. If the repo root is the parent folder, set **Root Directory** to `portfolio-app`.
3. Framework preset: Next.js (defaults are fine).
4. Optional: set `NEXT_PUBLIC_SITE_URL` (e.g. `https://your-domain.com`) once a custom domain is attached. Without it, the Vercel production URL is used for canonical/OG/sitemap URLs.
