# Technology Stack

**Analysis Date:** 2026-05-31

## Languages

**Primary:**
- JavaScript (ESM) - `package.json`, `astro.config.mjs`
- Astro - `src/pages/index.astro`

**Secondary:**
- CSS - `src/styles/global.css`
- JSON - `package.json`, `package-lock.json`, `tsconfig.json`

## Runtime

**Environment:**
- Node.js >=22.12.0 - `package.json`

**Package Manager:**
- npm (lockfile v3) - `package-lock.json`
- Lockfile: present (`package-lock.json`)

## Frameworks

**Core:**
- Astro ^6.4.2 - static site framework and routing (`package.json`, `src/pages/index.astro`)

**Testing:**
- Not detected

**Build/Dev:**
- Vite via Astro - dev server/build pipeline (`package.json`, `astro.config.mjs`)
- Tailwind CSS Vite plugin - CSS pipeline (`astro.config.mjs`)

## Key Dependencies

**Critical:**
- astro ^6.4.2 - core framework (`package.json`)
- tailwindcss ^4.3.0 - utility CSS framework (`package.json`, `src/styles/global.css`)

**Infrastructure:**
- @tailwindcss/vite ^4.3.0 - Tailwind integration with Vite (`package.json`, `astro.config.mjs`)

## Configuration

**Environment:**
- No environment files detected (`.env*` not present)
- Key configs required: none detected

**Build:**
- Astro config: `astro.config.mjs`
- TypeScript config: `tsconfig.json`
- Formatting: `.prettierrc`

## Platform Requirements

**Development:**
- Node.js >=22.12.0 (`package.json`)
- npm with `package-lock.json`

**Production:**
- Astro build output to `dist/` (`package.json` scripts)

---

*Stack analysis: 2026-05-31*
