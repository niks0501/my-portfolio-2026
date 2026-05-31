# Coding Conventions

**Analysis Date:** 2026-05-31

## Naming Patterns

**Files:**
- Use lowercase file names for routes and styles (e.g., `src/pages/index.astro`, `src/styles/global.css`).

**Functions:**
- Not detected (no function declarations in `src/pages/index.astro`).

**Variables:**
- Not detected (no variable declarations in `src/pages/index.astro`).

**Types:**
- Not detected (no type definitions in `src/pages/index.astro`).

## Code Style

**Formatting:**
- Prettier via `prettier-plugin-astro` (`.prettierrc`)
- Key settings: `semi: true`, `singleQuote: true` (`.prettierrc`)

**Linting:**
- Not detected (no ESLint/Biome config files found).

## Import Organization

**Order:**
1. Third-party imports at top of file (`astro.config.mjs`).

**Path Aliases:**
- None detected (`tsconfig.json` has no `paths`).

## Error Handling

**Patterns:**
- Not detected (no error-handling logic in `src/pages/index.astro`).

## Logging

**Framework:** None detected.

**Patterns:**
- Not detected (no logging statements in `src/pages/index.astro`).

## Comments

**When to Comment:**
- Use comments sparingly; only file-level directive is `// @ts-check` in `astro.config.mjs`.

**JSDoc/TSDoc:**
- Not detected.

## Function Design

**Size:** Not detected.

**Parameters:** Not detected.

**Return Values:** Not detected.

## Module Design

**Exports:**
- Use ES module syntax with default export for config objects (`astro.config.mjs`).

**Barrel Files:**
- Not detected.

---

*Convention analysis: 2026-05-31*
