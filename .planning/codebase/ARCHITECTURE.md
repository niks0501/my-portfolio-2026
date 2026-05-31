# Architecture

**Analysis Date:** 2026-05-31

## System Overview

```text
┌─────────────────────────────────────────────────────────────┐
│                   Astro Pages (Routes)                       │
│                 `src/pages/index.astro`                      │
└────────┬────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────┐
│                   Astro Runtime + Vite                       │
│                `astro.config.mjs`                             │
└────────┬────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────┐
│                 Static Assets / Output                       │
│                    `public/` + `dist/`                        │
└─────────────────────────────────────────────────────────────┘
```

## Component Responsibilities

| Component | Responsibility | File |
|-----------|----------------|------|
| Pages | Define route content and HTML document structure | `src/pages/index.astro` |
| Global styles | Provide Tailwind entrypoint for styling | `src/styles/global.css` |
| Build configuration | Wire Vite + Tailwind into Astro | `astro.config.mjs` |

## Pattern Overview

**Overall:** Static site generation with file-based routing

**Key Characteristics:**
- Routes are `.astro` files under `src/pages/`
- Static assets served from `public/`
- Styling centralized via Tailwind entrypoint CSS

## Layers

**Routing/Pages:**
- Purpose: Define page-level structure and metadata
- Location: `src/pages/`
- Contains: `.astro` files per route
- Depends on: Astro runtime
- Used by: Astro build/dev server

**Configuration/Tooling:**
- Purpose: Configure Astro and Vite plugins
- Location: `astro.config.mjs`
- Contains: Tailwind Vite plugin registration
- Depends on: `astro/config`, `@tailwindcss/vite`
- Used by: Astro CLI (`astro dev`, `astro build`)

**Static Assets:**
- Purpose: Serve static files
- Location: `public/`
- Contains: Favicons and other assets
- Depends on: None
- Used by: Astro static asset pipeline

## Data Flow

### Primary Request Path

1. HTTP request resolves to page route (`src/pages/index.astro`)
2. Astro renders page template (`src/pages/index.astro`)
3. Output served with static assets (`public/favicon.svg`, `public/favicon.ico`)

### Build Flow

1. Astro CLI reads config (`astro.config.mjs`)
2. Vite pipeline runs Tailwind plugin (`astro.config.mjs`)
3. Build emits static site to `dist/`

**State Management:**
- Static rendering only; no persistent state layer detected

## Key Abstractions

**Astro Page:**
- Purpose: Route + template definition
- Examples: `src/pages/index.astro`
- Pattern: File-based routing with `.astro` components

**Global Stylesheet:**
- Purpose: Tailwind entrypoint for global styles
- Examples: `src/styles/global.css`
- Pattern: CSS import of Tailwind base

## Entry Points

**Home Route (`/`):**
- Location: `src/pages/index.astro`
- Triggers: HTTP requests to root path
- Responsibilities: Page HTML, head metadata, base content

**Build/Dev Entrypoint:**
- Location: `astro.config.mjs`
- Triggers: `npm run dev`, `npm run build`
- Responsibilities: Configure Vite plugins for Astro

## Architectural Constraints

- **Threading:** Single-threaded event loop via Node.js for build/dev tooling
- **Global state:** None detected in source files
- **Circular imports:** Not detected (single-page project)
- **File-based routing:** Routes must live under `src/pages/`

## Anti-Patterns

### Hardcoding assets outside `public/`

**What happens:** Assets referenced without being placed in `public/`
**Why it's wrong:** Astro won't serve non-public files as static assets
**Do this instead:** Place static assets under `public/` (e.g., `public/favicon.svg`)

### Inline global styles in pages

**What happens:** Global styles added directly inside page markup
**Why it's wrong:** Makes styling inconsistent and harder to manage
**Do this instead:** Centralize global styles in `src/styles/global.css`

## Error Handling

**Strategy:** Rely on Astro build/runtime defaults (no custom handling detected)

**Patterns:**
- No explicit error handling in `src/pages/index.astro`

## Cross-Cutting Concerns

**Logging:** Astro CLI output only
**Validation:** Astro build-time validation
**Authentication:** Not applicable (static site)

---

*Architecture analysis: 2026-05-31*
