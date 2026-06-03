# Nikko Causapin Portfolio 2026

Personal software engineering portfolio built with Astro and Tailwind CSS. The site presents selected web app projects, current focus, certifications, and contact details for recruiters and collaborators.

## Stack

- Astro 6
- Tailwind CSS 4
- Astro Content Collections for project case studies
- Vercel Analytics and Speed Insights
- Vercel deployment

## Local Development

```bash
npm install
npm run dev
```

## Quality Checks

```bash
npm run format:check
npm run check
npm run build
```

Use the combined CI command before pushing:

```bash
npm run ci
```

## Content

Project case studies live in `src/content/projects/`. Each Markdown file defines frontmatter for cards, routes, screenshots, metrics, and Problem / Approach / Result sections.

## Deployment

The GitHub Actions workflow in `.github/workflows/ci.yml` runs format, Astro type checks, and a production build on pull requests and pushes to `main`.

Production deployment uses the Vercel CLI after CI passes. Add these repository secrets in GitHub:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

The current canonical site URL is set to `https://nikkocausapin.vercel.app` in `astro.config.mjs`.

## Assets

Publication assets live in `public/`:

- `og-image.png`
- `apple-touch-icon.png`
- `manifest.webmanifest`
- `robots.txt`
- `resume.pdf`

## Scripts

- `npm run dev` — start Astro dev server
- `npm run build` — build production site
- `npm run preview` — preview production build locally
- `npm run check` — run Astro checks
- `npm run format` — format files with Prettier
- `npm run format:check` — verify formatting
- `npm run ci` — run format check, Astro check, and production build
