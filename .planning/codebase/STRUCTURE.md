# Codebase Structure

**Analysis Date:** 2026-05-31

## Directory Layout

```
my-portfolio-2026/
├── public/                 # Static assets served as-is
├── src/                    # Application source
│   ├── pages/              # Astro routes (file-based)
│   └── styles/             # Global CSS entrypoint
├── astro.config.mjs        # Astro + Vite configuration
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── .prettierrc             # Prettier formatting rules
```

## Directory Purposes

**public/**
- Purpose: Static assets served directly
- Contains: Favicons and other public files
- Key files: `public/favicon.svg`, `public/favicon.ico`

**src/pages/**
- Purpose: File-based routing for Astro pages
- Contains: `.astro` page files
- Key files: `src/pages/index.astro`

**src/styles/**
- Purpose: Global styling entrypoint
- Contains: CSS files
- Key files: `src/styles/global.css`

## Key File Locations

**Entry Points:**
- `src/pages/index.astro`: Root route (`/`) page

**Configuration:**
- `astro.config.mjs`: Astro + Vite/Tailwind configuration
- `tsconfig.json`: TypeScript configuration for Astro
- `.prettierrc`: Prettier configuration

**Core Logic:**
- `src/pages/index.astro`: Current page content and HTML structure

**Testing:**
- Not detected (no test directories or config files)

## Naming Conventions

**Files:**
- Routes: `[name].astro` under `src/pages/` (e.g., `src/pages/index.astro`)
- Styles: `*.css` under `src/styles/` (e.g., `src/styles/global.css`)

**Directories:**
- Lowercase plural for grouping (e.g., `src/pages`, `src/styles`)

## Where to Add New Code

**New Feature:**
- Primary code: Add a new `.astro` page in `src/pages/`
- Tests: Not applicable (no testing setup)

**New Component/Module:**
- Implementation: Create reusable components under `src/components/` (create directory if needed)

**Utilities:**
- Shared helpers: Create `src/lib/` or `src/utils/` and keep non-UI helpers there

## Special Directories

**.planning/**
- Purpose: GSD planning artifacts
- Generated: Yes
- Committed: Yes

**node_modules/**
- Purpose: Installed dependencies
- Generated: Yes
- Committed: No

---

*Structure analysis: 2026-05-31*
