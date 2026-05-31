# Project Research Summary

**Project:** My Portfolio 2026
**Domain:** Recruiter-focused software engineer portfolio site
**Researched:** 2026-05-31
**Confidence:** MEDIUM

## Executive Summary

This project is a recruiter-first portfolio built to pass a 6–10 second scan: clear role + stack above the fold, 3–4 curated projects with outcomes, and a direct contact path. The research converges on a static-first, fast-loading site where content hierarchy matters more than visual complexity. The recommended approach is an Astro + Tailwind build on Vercel with a one-page structure, content separated from layout, and a featured project that anchors the story.

Key risks are mostly content and UX: vague hero copy, shallow project descriptions, broken demo links, and performance regressions from over-design. Mitigate by locking the content model first, curating 2–4 projects with outcomes and working demos, keeping email visible in the hero/first scroll, and enforcing a performance budget (LCP < 2.5s, Lighthouse mobile ≥ 80). Reserve advanced features (case studies, GitHub activity, video demos) for post-launch once core content is stable.

## Key Findings

### Recommended Stack

Astro + Tailwind is the right fit for a static, content-heavy portfolio that needs strong performance defaults and easy composition. Vercel remains the target host; the official adapter enables image optimization and production parity. Supporting libraries are optional and should be added only where they measurably improve search and credibility.

**Core technologies:**
- **Astro 6.4.2:** static-first framework for content sites with minimal JS and strong performance defaults.
- **Tailwind CSS 4.3.0:** fast iteration with consistent design tokens via Astro’s Vite plugin.
- **@astrojs/vercel 10.0.8:** required for Vercel deployment + image optimization parity.

### Expected Features

Recruiter expectations center on clarity, proof, and reachability. The MVP must deliver a strong hero, curated projects with working links, concise about/services content, and direct contact. Differentiators can be layered once core content is validated.

**Must have (table stakes):**
- Clear hero positioning (name, role, focus, primary stack)
- 3–4 curated project cards with live demo + GitHub
- About summary + Services list
- Visible email CTA (hero and/or contact section)
- Responsive, fast layout
- GitHub + LinkedIn links

**Should have (competitive):**
- Mini case studies (Problem → Approach → Result)
- Featured project above the fold
- Impact metrics per project
- ATS-friendly resume download

**Defer (v2+):**
- Testimonial (only if credible)
- Optional demo video (user-initiated)

### Architecture Approach

Use a single-page, sectioned layout in Astro with a small component library and a centralized content store. Keep data in `src/content/` or `src/data/` and pass props into isolated sections (Hero, Featured Project, Projects Grid, About, Services, Contact). This supports quick iteration on copy and avoids repeated layout work.

**Major components:**
1. **Layout Shell** — global structure, nav/footer, SEO tags.
2. **Hero + Featured Project** — above-the-fold clarity: role, impact, best project.
3. **Projects Grid + Card** — curated proof with outcomes and links.
4. **About + Services** — scannable narrative and offerings.
5. **Contact CTA** — visible email + social links.
6. **Content Store** — centralized project and copy data.

### Critical Pitfalls

1. **Vague hero (role + stack unclear)** — fix with explicit role, domain, and stack above the fold.
2. **Broken or slow demos** — audit links, provide fallback video or credentials, and note cold-starts.
3. **Tech-only project descriptions** — use Problem → Approach → Result with outcome-first copy.
4. **Over-designed / slow UI** — avoid heavy animations; enforce performance budget.
5. **Hidden contact path** — make email visible and copyable in first scroll.

## Implications for Roadmap

Based on research, suggested phase structure:

### Phase 1: Content Model + Copy Foundation
**Rationale:** Everything else depends on project data, outcomes, and hero clarity.
**Delivers:** Content schema, curated project list (3–4), hero copy, outcomes/metrics draft.
**Addresses:** Hero positioning, project cards, about summary, services list.
**Avoids:** Vague hero, tech-only descriptions, too many shallow projects.

### Phase 2: Core Layout + MVP Sections
**Rationale:** Build the recruiter scan path: hero → featured project → project grid → about/services → contact.
**Delivers:** Astro page composition, BaseLayout, section components, responsive layout, visible CTA.
**Uses:** Astro 6.4.2, Tailwind 4.3.0, Vercel adapter.
**Implements:** Scan-first hierarchy, featured project + curated grid patterns.
**Avoids:** Hidden contact path, mobile layout breaks.

### Phase 3: Performance + SEO + Launch QA
**Rationale:** Performance and credibility checks are critical for recruiter trust and search visibility.
**Delivers:** Image optimization, SEO/OG meta tags, sitemap (if domain known), analytics optional, QA checklist.
**Addresses:** Fast load performance, working demos, mobile QA, anti-animation guardrails.
**Avoids:** Over-designed slow UI, broken demo links, stale launch signals.

### Phase Ordering Rationale

- Content and project data must be finalized before UI components can be designed meaningfully.
- The architecture favors a one-page composition with isolated sections, so UI build can be sequenced by sections.
- Performance and QA are last because they validate the final build and protect against known pitfalls.

### Research Flags

Phases likely needing deeper research during planning:
- **Phase 3:** SEO/analytics integration decisions (choose astro-seo vs manual meta, sitemap timing, analytics privacy tradeoffs).

Phases with standard patterns (skip research-phase):
- **Phase 2:** Astro section composition + Tailwind layout (well-documented, common pattern).
- **Phase 1:** Content model + copywriting (content-driven, not technical research).

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | MEDIUM | Based on official Astro/Vercel docs + npm versions, but no live validation in this repo. |
| Features | MEDIUM | Multiple web sources align on recruiter scan behavior; not validated with user testing. |
| Architecture | LOW-MEDIUM | Derived from web guides; needs validation against actual project goals and codebase. |
| Pitfalls | MEDIUM | Consistent across sources; still anecdotal without local testing. |

**Overall confidence:** MEDIUM

### Gaps to Address

- **Copy quality and outcomes:** Need real project metrics and problem/impact framing before UI is finalized.
- **SEO/analytics choices:** Decide whether to add astro-seo, sitemap, and Vercel analytics based on deployment needs.
- **Performance budget validation:** Run Lighthouse on actual build and enforce LCP/CLS targets.

## Sources

### Primary (HIGH confidence)
- /withastro/docs — Astro adapter + image optimization + sitemap guidance
- /websites/vercel — Vercel analytics + deployment guidance

### Secondary (MEDIUM confidence)
- https://dev.to/_d7eb1c1703182e3ce1782/developer-portfolio-checklist-20-things-hiring-managers-look-for-388p — recruiter expectations checklist
- https://showproof.io/guides/how-recruiters-read-developer-portfolios/ — scan behavior and content priorities
- https://showproof.io/guides/developer-portfolio-mistakes/ — common pitfalls and fixes
- https://www.popout.page/blog/portfolio-features-distracting-recruiters-2026 — feature anti-patterns

### Tertiary (LOW confidence)
- https://thecrit.co/resources/portfolio-layout-examples — layout inspiration (needs validation)
- https://www.codetalenthub.io/portfolio-layout-formula/ — architecture heuristics (needs validation)

---
*Research completed: 2026-05-31*
*Ready for roadmap: yes*
