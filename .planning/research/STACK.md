# Stack Research

**Domain:** Software engineer portfolio site (Astro + Tailwind on Vercel)
**Researched:** 2026-05-31
**Confidence:** MEDIUM

## Recommended Stack

### Core Technologies

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| Astro | 6.4.2 | Static-first site framework | Current Astro major; designed for content sites with minimal JS and strong performance defaults. | 
| Tailwind CSS | 4.3.0 | Styling system | Tailwind 4 is the default in Astro v6 docs via Vite plugin, enabling fast iteration and consistent design tokens. | 
| @astrojs/vercel | 10.0.8 | Vercel adapter | Official Astro adapter for Vercel; needed for image optimization and deployment parity. | 

### Supporting Libraries

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| astro-seo | 1.1.0 | SEO + Open Graph meta tags | Use for consistent OG/Twitter metadata across pages and previews. | 
| @astrojs/sitemap | 3.7.3 | XML sitemap generation | Use once site URL is known; improves indexing for recruiter searches. | 
| @vercel/analytics | 2.0.1 | Privacy-friendly analytics | Use if you want built-in Vercel dashboard analytics without third-party cookies. | 
| @vercel/speed-insights | 2.0.0 | Real-user performance insights | Use to track Core Web Vitals in production and validate performance. | 

### Development Tools

| Tool | Purpose | Notes |
|------|---------|-------|
| Prettier + prettier-plugin-astro | Formatting | Already configured; keep to avoid formatting drift. |
| Vercel CLI | Local preview + deploy workflows | Optional for preview/deploy outside Git integration. |

## Installation

```bash
# Core
npm install astro@6.4.2 tailwindcss@4.3.0 @astrojs/vercel@10.0.8

# Supporting
npm install astro-seo@1.1.0 @astrojs/sitemap@3.7.3 @vercel/analytics@2.0.1 @vercel/speed-insights@2.0.0
```

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| @vercel/analytics | Plausible | Use if you want self-serve dashboard outside Vercel or prefer EU-hosted analytics. |
| astro-seo | Manual <meta> tags | Use if you want zero dependencies and only 1-2 pages. |
| @astrojs/sitemap | Static hand-made sitemap.xml | Use only for single-page sites with no change cadence. |

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|-------------|
| Google Analytics (GA4) | Heavy script footprint + privacy concerns for a small portfolio; adds consent overhead. | Vercel Analytics (lighter, no cookie banner). |
| Third-party image CDN for local assets | Unnecessary complexity/cost for a small site; Astro/Vercel already optimizes. | Astro <Image /> + Vercel imageService. |
| Multi-page CMS | Overkill for a single-page recruiter portfolio. | Astro content files or inline content. |

## Stack Patterns by Variant

**If you need a contact form without a custom backend:**
- Use Formspree or Tally embedded form (external service)
- Because Astro is static and you avoid building serverless endpoints

**If you want more control over forms and spam filtering:**
- Use a Vercel Serverless Function + simple honeypot
- Because you can keep control and avoid third-party branding

## Version Compatibility

| Package A | Compatible With | Notes |
|-----------|-----------------|-------|
| astro@6.4.2 | tailwindcss@4.3.0 | Tailwind 4 is supported in Astro v6 via Vite plugin (docs). |
| astro@6.4.2 | @astrojs/vercel@10.0.8 | Official adapter for Vercel; required for imageService. |

## Sources

- /withastro/docs — Astro Images & Vercel adapter docs (image optimization, adapter config)
- /withastro/docs — @astrojs/sitemap integration docs
- /jonasmerlin/astro-seo — astro-seo install + usage docs
- /websites/vercel — Vercel Analytics quickstart (script + package)
- npm registry (versions) — npm view astro/tailwindcss/@astrojs/vercel/@astrojs/sitemap/@vercel/analytics/@vercel/speed-insights/astro-seo (retrieved 2026-05-31)

---
*Stack research for: software engineer portfolio site*
*Researched: 2026-05-31*
