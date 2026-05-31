# Architecture Research

**Domain:** Recruiter-focused software engineer portfolio site
**Researched:** 2026-05-31
**Confidence:** MEDIUM (web sources only; no official docs)

## Standard Architecture

### System Overview

```
┌───────────────────────────────────────────────────────────────┐
│                         Presentation                           │
├───────────────────────────────────────────────────────────────┤
│  ┌──────────┐  ┌────────────┐  ┌───────────┐  ┌─────────────┐ │
│  │  Layout  │  │  Hero/AA   │  │ Projects  │  │ Contact CTA │ │
│  └────┬─────┘  └─────┬──────┘  └─────┬─────┘  └──────┬──────┘ │
│       │              │               │               │        │
├───────┴──────────────┴───────────────┴───────────────┴───────┤
│                        Composition Layer                      │
├───────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────────┐  │
│  │                 Page Sections (Astro)                   │  │
│  └─────────────────────────────────────────────────────────┘  │
├───────────────────────────────────────────────────────────────┤
│                           Content Data                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ siteConfig   │  │ projects     │  │ about/services│         │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
└───────────────────────────────────────────────────────────────┘
```

### Component Responsibilities

| Component | Responsibility | Typical Implementation |
|-----------|----------------|------------------------|
| Layout Shell | Global structure, nav, footer, SEO tags | `src/layouts/` + shared `<Head>` | 
| Hero + Featured Project | Above-the-fold clarity: name, role, strongest outcome | `src/components/Hero.astro` + `FeaturedProject.astro` |
| Projects List | 3 curated projects with concise outcome + links | `ProjectsGrid.astro` + `ProjectCard.astro` |
| About + Services | Short, scannable narrative + offerings | `About.astro`, `Services.astro` |
| Contact CTA | Email link + optional social links | `Contact.astro` |
| Content Store | Centralized copy + project metadata | `src/content/` or `src/data/` JSON/TS |

## Recommended Project Structure

```
src/
├── pages/
│   └── index.astro            # Homepage composition
├── layouts/
│   └── BaseLayout.astro        # Shared shell + SEO
├── components/
│   ├── Hero.astro              # Name/role/impact above fold
│   ├── FeaturedProject.astro   # Highlighted project
│   ├── ProjectsGrid.astro      # Project cards list
│   ├── ProjectCard.astro       # Single project preview
│   ├── About.astro             # Short bio + working style
│   ├── Services.astro          # Offerings list
│   └── Contact.astro           # Email CTA + links
├── content/
│   └── projects/               # Project data (MD/MDX/JSON)
└── styles/
    └── global.css              # Tailwind import + base styles
```

### Structure Rationale

- **pages/** centralizes route composition for the one-page layout.
- **components/** keeps each recruiter-scanned section isolated and testable.
- **content/** separates copy and metadata from layout for easy updates.

## Architectural Patterns

### Pattern 1: “Scan Layer” First Content Hierarchy

**What:** Prioritize above-the-fold content that answers “who/what/impact/stack” within 6–10 seconds.
**When to use:** Recruiter-focused portfolios where initial scan decides attention.
**Trade-offs:** Less space for narrative; requires tighter copy discipline.

**Example:**
```astro
<Hero
  name="Nikko"
  role="Full‑Stack Engineer"
  impact="Shipped 3 web apps → 40% faster onboarding"
  primaryStack={['Astro', 'TypeScript', 'Tailwind']}
/>
```

### Pattern 2: Featured Project + Curated Grid

**What:** One featured project above the fold, followed by a small curated grid (3 total).
**When to use:** Recruiters who scan quickly but still want depth signals.
**Trade-offs:** Requires a clear “best” project and concise outcomes.

**Example:**
```astro
<FeaturedProject {...featured} />
<ProjectsGrid projects={projects} />
```

### Pattern 3: One-Page Narrative Scroll

**What:** Single route with sections in strict priority order.
**When to use:** Simple portfolio with no blog or case-study subpages.
**Trade-offs:** Harder to expand later without pagination or secondary routes.

## Data Flow

### Request Flow

```
Visitor Request
    ↓
Astro route (index.astro)
    ↓
Import content data (projects/about/services)
    ↓
Render sections → static HTML
    ↓
Vercel CDN response
```

### State Management

Static content; no client state required for v1.

### Key Data Flows

1. **Content assembly:** `content/projects` → `ProjectsGrid` → `ProjectCard`.
2. **CTA routing:** `Contact` → `mailto:` link + external profiles.

## Scaling Considerations

| Scale | Architecture Adjustments |
|-------|--------------------------|
| 0-1k users | Static build; no backend needed |
| 1k-100k users | CDN + image optimization; lazy-load below fold |
| 100k+ users | Consider headless CMS + build caching |

### Scaling Priorities

1. **First bottleneck:** Above-the-fold performance (optimize images/fonts).
2. **Second bottleneck:** Content updates (introduce CMS only if needed).

## Anti-Patterns

### Anti-Pattern 1: Hero Without Outcome Signal

**What people do:** Generic tagline + decorative imagery.
**Why it's wrong:** Recruiters fail to identify role/impact in first scan.
**Do this instead:** Role + strongest measurable outcome + featured project.

### Anti-Pattern 2: Overloaded Project List

**What people do:** 8–12 projects with thin context.
**Why it's wrong:** Dilutes signal; no time to read depth.
**Do this instead:** 3 curated projects with outcome-first summaries.

## Integration Points

### External Services

| Service | Integration Pattern | Notes |
|---------|---------------------|-------|
| Vercel | Static deployment | Standard Astro static build |
| Email | `mailto:` link | Avoid contact forms for v1 |

### Internal Boundaries

| Boundary | Communication | Notes |
|----------|---------------|-------|
| `pages/index.astro` ↔ `components/*` | Direct props | Keep sections isolated |
| `content/*` ↔ `components/*` | Data import | Content-first updates |

## Suggested Build Order (Dependencies)

1. **Content model + copy draft** → defines data shape for components.
2. **Base layout + global styles** → grid, typography, spacing system.
3. **Hero + Featured Project** → passes 6–10 second scan test.
4. **Projects Grid (3 cards)** → outcome-first summaries + primary links.
5. **About + Services** → short, scannable supporting content.
6. **Contact CTA** → reliable email link.
7. **Performance + SEO pass** → meta tags, OG, image optimization.

## Sources

- https://showproof.io/guides/how-recruiters-read-developer-portfolios/ (web guide; LOW)
- https://thecrit.co/resources/portfolio-layout-examples (web guide; LOW)
- https://thecrit.co/resources/complete-portfolio-guide (web guide; LOW)
- https://www.codetalenthub.io/portfolio-layout-formula/ (web guide; LOW)

---
*Architecture research for: recruiter-focused portfolio site*
*Researched: 2026-05-31*
