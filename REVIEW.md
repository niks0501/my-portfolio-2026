---
phase: unknown
reviewed: 2026-06-03T00:00:00Z
depth: deep
files_reviewed: 7
files_reviewed_list:
  - src/styles/global.css
  - src/components/Hero.astro
  - src/components/Navbar.astro
  - src/components/ProjectCard.astro
  - src/components/AboutSection.astro
  - src/components/ServicesSection.astro
  - src/components/ContactFooter.astro
findings:
  critical: 3
  warning: 8
  info: 6
  total: 17
status: issues_found
---

# Code Review Report

**Reviewed:** 2026-06-03
**Depth:** deep (cross-file analysis, call-chain tracing, import/export verification)
**Files Reviewed:** 7 (plus 5 dependency files cross-referenced)
**Status:** issues_found — 3 blocker, 8 warning, 6 info

## Summary

Deep review of 7 core Astro components, global CSS, and their shared dependencies. Three blocking bugs found: a stale DOM reference in the navbar scroll handler that breaks after Astro client navigation, a mismatched HTML closing tag (`<h2>`/`</h3>`), and dead CSS in the project card ternary. Eight warnings cover event-handler inconsistency, unused utility exports, accessibility gaps, and `prefers-reduced-motion` violations. The Tailwind v4 usage is correct throughout, dark mode contrast is solid, and the overall component architecture is consistent.

---

## Critical Issues

### CR-01: Navbar scroll handler references stale DOM after Astro client navigation

**File:** `src/components/Navbar.astro:367-399`
**Issue:** The `initNavScroll()` function captures `navbar` (line 371) via `document.getElementById('navbar')` and stores it in a closure. When Astro's `ClientRouter` swaps page content during client-side navigation, the old DOM element is detached, but the scroll event handler still references it. On subsequent scrolls, the handler adds/removes positioning classes (`top-1.5`, `left-1.5`, etc.) on the detached element, not the new navbar rendered after navigation. The visible navbar never receives the scrolled-state classes, so the shrink-on-scroll effect stops working.

Additionally, `initNavScroll()` is NOT re-run on `astro:after-swap` (line 406-410 omits it), confirming this is a bug, not just a theoretical concern.

**Fix:**
```js
// Navbar.astro script section — replace initNavScroll() with:
function initNavScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const SCROLLED_CLASSES = [
    'top-1.5', 'left-1.5', 'right-1.5', 'lg:left-3', 'lg:right-3', 'shadow-md',
  ];
  const TOP_CLASSES = [
    'top-3', 'left-3', 'right-3', 'lg:left-6', 'lg:right-6', 'shadow-sm',
  ];

  let ticking = false;

  function update() {
    // Re-query navbar inside the handler so we always operate on the live element
    const nav = document.getElementById('navbar');
    if (!nav) return;
    if (window.scrollY > 100) {
      nav.classList.add(...SCROLLED_CLASSES);
      nav.classList.remove(...TOP_CLASSES);
    } else {
      nav.classList.remove(...SCROLLED_CLASSES);
      nav.classList.add(...TOP_CLASSES);
    }
    ticking = false;
  }

  // Remove previous scroll listener to avoid duplicates across swaps
  window.removeEventListener('scroll', handleNavScroll);
  window.addEventListener('scroll', handleNavScroll, { passive: true });

  function handleNavScroll() {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }

  // Run once immediately to set correct initial state
  update();
}

// Also add initNavScroll to the astro:after-swap handler:
document.addEventListener('astro:after-swap', () => {
  syncThemeControls();
  setupHighlighting();
  initMobileMenu();
  initNavScroll();  // <-- add this line
});
```

---

### CR-02: Mismatched HTML tags — `<h2>` opened, `</h3>` closed

**File:** `src/components/AboutSection.astro:208-213`
**Issue:** Lines 208-209 open a `<h2>` element, but line 213 closes with `</h3>`. This causes HTML parsing errors; browsers may attempt error recovery but the DOM tree will be malformed. Screen readers and SEO crawlers will see incorrect heading hierarchy.

**Fix:**
```astro
<!-- Line 213: change </h3> to </h2> -->
<h2
  class="text-3xl lg:text-4xl font-semibold leading-tight text-foreground text-balance"
>
  Software developer building business systems, analytics platforms,
  and data-driven applications.
</h2>
```

---

### CR-03: Dead ternary — both branches produce identical output

**File:** `src/components/ProjectCard.astro:58`
**Issue:** The ternary `isFeatured ? 'aspect-[16/9]' : 'aspect-[16/9]'` returns the same value regardless of condition. This is either a copy-paste oversight (the standard variant should have a different aspect ratio, e.g., `aspect-[4/3]` or `aspect-[3/2]`) or dead code that should be simplified.

**Fix:**
```astro
<!-- If the aspect ratio should differ by variant: -->
class:list={[
  'w-full object-cover',
  isFeatured ? 'aspect-[16/9]' : 'aspect-[4/3]',
]}

<!-- If they should always be 16/9 (remove the ternary): -->
class="w-full object-cover aspect-[16/9]"
```

---

## Warnings

### WR-01: Mobile menu nav numbers missing `.nav-num` class — hover color doesn't change

**File:** `src/components/Navbar.astro:210`
**Issue:** Desktop nav links have `<span class="nav-num ...">` so the CSS rules at lines 244-247 (`.nav-link:hover .nav-num`, `.nav-link:focus-visible .nav-num`) apply hover/active color transitions. The mobile menu links (lines 210, but also the repeated pattern at line 47 for all link numbers) lack the `.nav-num` class, so their numbers stay at `text-muted-foreground/60` regardless of interaction state.

**Fix:** Add `nav-num` to the mobile menu number spans:
```astro
<span class="nav-num font-heading text-[10px] tabular-nums text-muted-foreground/60">
  {link.num}
</span>
```

---

### WR-02: `statusDotClasses` exported from `projectUtils.ts` but never imported

**File:** `src/lib/projectUtils.ts:16-20`
**Issue:** The `statusDotClasses` mapping is exported but never consumed by any component. ProjectCard.astro (lines 98-103) re-implements the same dot-color logic inline. This is dead code and a DRY violation.

**Fix:** Either remove the export from `projectUtils.ts`, or import and use it in `ProjectCard.astro`:
```astro
---
import { statusDotClasses } from '../lib/projectUtils';
---
<!-- Replace lines 98-103 with: -->
<span
  class:list={['w-1.5 h-1.5 rounded-full', statusDotClasses[status]]}
  aria-hidden="true"
/>
```

---

### WR-03: Dead CSS utility classes — `.section-eyebrow`, `.section-container`, `.focus-ring` defined but unused

**File:** `src/styles/global.css:231-233, 239-241, 227-229`
**Issue:** Three utility classes are defined in `@layer utilities` but never referenced by any component:
- `.section-container` (line 232) — all sections use inline `max-w-*` classes instead
- `.section-eyebrow` (line 239) — all eyebrow labels use inline `text-xs font-medium uppercase tracking-[0.18em] text-primary`
- `.focus-ring` (line 227) — all interactive elements use inline `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background`

This is dead CSS that increases bundle size and maintenance surface. Either adopt these utilities consistently across components or remove them.

---

### WR-04: Duplicate section number "05" across AboutSection and ContactFooter

**File:** `src/components/AboutSection.astro:326` and `src/components/ContactFooter.astro:46`
**Issue:** AboutSection uses "05 — Current focus" and ContactFooter uses "05 — Contact". Duplicate section numbers confuse users scanning the page and break the sequential numbering pattern (About section uses 01-05 internally, Contact uses 05 again).

**Fix:** Renumber ContactFooter to "06 — Contact" or remove the numbering scheme from one section.

---

### WR-05: Back-to-top button ignores `prefers-reduced-motion`

**File:** `src/components/ContactFooter.astro:300-302`
**Issue:** The back-to-top handler always uses `behavior: 'smooth'`. The global CSS (lines 148-156 and 285-297) disables animations and transitions when `prefers-reduced-motion: reduce` is active, but `scrollTo({ behavior: 'smooth' })` is a browser-level API not affected by CSS. Users with motion sensitivity will still experience smooth scrolling.

**Fix:**
```js
backToTop?.addEventListener('click', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'instant' : 'smooth' });
});
```

---

### WR-06: `aria-disabled` placed on non-interactive `<div>` wrapper

**File:** `src/components/ContactFooter.astro:176`
**Issue:** When a contact item has `available: false` (or no `href`), the component renders a `<div>` with `aria-disabled="true"`. However, `aria-disabled` is semantically intended for interactive elements (buttons, inputs, links). On a `<div>` that never receives focus, this attribute has no practical effect — screen readers won't announce it as disabled.

**Fix:** If the item is unavailable, either:
- Render it as a `<button disabled>` (if it would normally be interactive), or
- Simply omit the `aria-disabled` attribute and rely on the `opacity-60 cursor-not-allowed` visual treatment alone.

---

### WR-07: `.glass-card` defaults to `cursor-pointer` — overridden per-instance

**File:** `src/styles/global.css:249`
**Issue:** The `.glass-card` utility class includes `cursor-pointer`, implying every glass card is clickable. But ServicesSection cards (line 71) override with `cursor-default`, and the non-interactive contact items override with `cursor-default` or `cursor-not-allowed`. A utility default that must be overridden in most usages is a poor default. The `cursor-pointer` belongs on the individual elements that are actually interactive, not on the shared base class.

**Fix:** Remove `cursor-pointer` from `.glass-card` and add it explicitly only to interactive cards:
```css
/* .glass-card — remove cursor-pointer */
.glass-card {
  @apply bg-glass-bg backdrop-blur-xl border border-glass-border rounded-lg
         transition-[background-color,border-color,box-shadow,transform] duration-300 ease-out;
}
```
Then add `cursor-pointer` to `ProjectCard.astro` (line 41) and `AboutSection.astro` project links (line 265).

---

### WR-08: Badge images in hero use `loading="lazy"` for above-the-fold content

**File:** `src/components/Hero.astro:78, 98, 118, 138`
**Issue:** All four badge `<img>` elements use `loading="lazy"` despite being near the top of the page and in the initial viewport on most screen sizes. Lazy loading above-the-fold images defers their fetch and can cause layout shift (CLS). While the explicit `width`/`height` attributes mitigate CLS, `loading="eager"` (or omitting `loading` entirely, since eager is the default) ensures badges appear immediately without a loading flash.

**Fix:** Change `loading="lazy"` to `loading="eager"` on all four badge images (or remove the attribute since `eager` is the browser default).

---

## Info

### IN-01: Duplicate `prefers-reduced-motion` blocks in global.css

**File:** `src/styles/global.css:148-156, 285-297`
**Issue:** Two separate `@media (prefers-reduced-motion: reduce)` blocks exist. The first (line 148) globally disables all animations/transitions. The second (line 285) overrides scroll-reveal/stagger-children to show content immediately. These could be merged into a single block for maintainability.
**Fix:** Merge both into one `@media (prefers-reduced-motion: reduce)` block.

---

### IN-02: Console.info in production layout

**File:** `src/layouts/BaseLayout.astro:121-123`
**Issue:** `console.info('Nikko Causapin portfolio | Source: https://github.com/niks0501')` runs in production. While not harmful, it clutters the browser console for end users (recruiters). Consider guarding with a dev-mode check or removing it.
**Fix:** Guard with `import.meta.env.DEV` or remove.

---

### IN-03: `decoding="async"` on hero profile image is suboptimal for above-the-fold content

**File:** `src/components/Hero.astro:273`
**Issue:** The hero profile photo has both `fetchpriority="high"` and `decoding="async"`. While not strictly contradictory (high fetch priority + async decode is valid), `decoding="sync"` would prevent a flash of missing content on the most important visual element on the page. For the LCP candidate, sync decoding is preferred.
**Fix:** Change to `decoding="sync"`.

---

### IN-04: Tech stack tooltips missing `aria-describedby` association

**File:** `src/components/Hero.astro:177-258`
**Issue:** The tech stack tooltips (Laravel, React, MySQL, etc.) use `role="tooltip"` but aren't connected to their triggers via `aria-describedby`. Proper tooltip accessibility requires the trigger element to reference the tooltip's `id`, and the tooltip should have a matching `id`. Without this, screen readers won't announce the tooltip content when the user focuses the trigger.
**Fix:** Add unique `id` attributes to each tooltip span and `aria-describedby` references on the parent `<span>` elements.

---

### IN-05: SVG icons defined as raw string paths in ServicesSection and ContactFooter

**File:** `src/components/ServicesSection.astro:29-35`, `src/components/ContactFooter.astro:32-38`
**Issue:** Both components define SVG path data as raw strings and inject them via `set:html`. While safe here (hardcoded values, no user input), this pattern bypasses Astro's component model. Consider using `astro-icon` components (already imported in Hero.astro) or dedicated `.astro` icon components for consistency and reusability.
**Fix:** Use `astro-icon` `<Icon>` components where possible, or extract inline SVGs into dedicated icon components.

---

### IN-06: Hardcoded `min-height: 480px` inline style on ProjectCard

**File:** `src/components/ProjectCard.astro:44`
**Issue:** The `style="min-height: 480px;"` is hardcoded and can't be overridden by utility classes at the call site. On very small viewports, this could cause content overflow. Consider using a Tailwind utility or a responsive approach.
**Fix:** Use `class="min-h-[480px]"` or `class="min-h-[30rem]"` instead, or use a smaller value with a responsive breakpoint: `min-h-[320px] sm:min-h-[480px]`.

---

## What Looks Clean / Well Done

1. **Tailwind v4 class usage is correct throughout.** Opacity modifiers (`text-foreground/90`, `dark:text-foreground/80`), custom variants (`dark:`), and arbitrary values all use valid v4 syntax. No v3 legacy patterns detected.

2. **Dark mode contrast is solid.** Glass backgrounds in dark mode (`oklch(1 0 0 / 12%)`) with white foreground text provide sufficient contrast (4.5:1+ ratio for normal text). The `.dark` class is correctly applied to `<html>` via the inline theme script in BaseLayout.

3. **Consistent `astro:after-swap` pattern across components.** Hero.astro, Navbar.astro, ContactFooter.astro, scroll-reveal.js, and projects-filter.js all follow the same `init(); document.addEventListener('astro:after-swap', init)` pattern, which is the correct approach for Astro's client-side navigation.

4. **`prefers-reduced-motion` support is comprehensive.** Global CSS disables animations (line 148-156), scroll-reveal/stagger CSS forces immediate visibility (line 285-297), and the scroll-reveal JS checks the media query before running animations (scroll-reveal.js line 13-20). The projects-filter.js also checks for reduced motion (line 11-13).

5. **Print stylesheet is well-considered.** The print media query (global.css lines 299-339) hides navigation, theme toggles, and buttons, reveals external link URLs, and prevents page breaks inside sections. This is thoughtful for recruiter use cases (printing the portfolio).

6. **Semantic HTML structure is strong.** `<nav>` with `aria-label`, `<section>` with `id` attributes, proper heading hierarchy, `<article>` for project cards, `<dialog>` for the modal — all correct.

7. **Badge gallery modal uses native `<dialog>` element.** The `showModal()`/`close()` API provides native backdrop, focus trapping, and Escape-key dismissal. The custom click-outside detection (line 483-491) is a reasonable enhancement for broader browser support.

---

_Reviewed: 2026-06-03_
_Reviewer: the agent (gsd-code-reviewer)_
_Depth: deep (including cross-file import tracing and dependency analysis)_
