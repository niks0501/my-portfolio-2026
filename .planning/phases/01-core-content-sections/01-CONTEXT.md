# Phase 1: Core Content Sections - Context

**Gathered:** 2026-06-01
**Status:** Ready for planning

<domain>
## Phase Boundary

Deliver the homepage sections (hero, projects, about, services, contact/footer) so recruiters can quickly understand role, proof, and contact path. This phase focuses on content and structure only; responsiveness and performance hardening happen in Phase 2.

</domain>

<decisions>
## Implementation Decisions

### Hero copy
- **D-01:** Headline uses the structure "Name + role + focus" and includes the primary stack per HERO-01.
- **D-02:** Email CTA appears directly under the headline.

### Project cards
- **D-03:** Exactly three cards in this order: Pig-Sikap, Dirty2Data, LumbanganSystem.
- **D-04:** Card content includes name, one-line summary, 3 highlight bullets, tag list, 3-image strip, and links row (GitHub + Live demo).
- **D-05:** If a live demo URL is missing, show a disabled "Live demo" button labeled "Coming soon".
- **D-06:** Keep long descriptions in data for future expansions; do not display them on cards in Phase 1.

### Project data (v1)
- **Pig-Sikap**
  - Summary: A web-based system that helps pig farmers manage inventory, health records, expenses, sales, reports, and profitability insights.
  - GitHub: https://github.com/niks0501/pig-sikap
  - Live demo: Coming soon
  - Highlights: Pig inventory and cycle management; Health records and health task tracking; Profitability and profit-sharing reports
  - Tags: Laravel, Vue, Tailwind, MySQL, Analytics, Livestock Management
  - Screenshots: /images/projects/pig-sikap/dashboard.png; /images/projects/pig-sikap/inventory.png; /images/projects/pig-sikap/profitability.png
- **Dirty2Data**
  - Summary: A Laravel + Inertia + React data cleaning and analytics system for uploading, profiling, cleaning, analyzing, and visualizing datasets.
  - GitHub: https://github.com/niks0501/dirty2data
  - Live demo: Coming soon
  - Highlights: Dataset upload and profiling; Cleaning workflow with recommendations and undo; Analytics dashboards, visualizations, and insights
  - Tags: Laravel, Inertia, React, TypeScript, Tailwind, Data Analytics
  - Screenshots: /images/projects/dirty2data/dashboard.png; /images/projects/dirty2data/dataset-cleaning.png; /images/projects/dirty2data/visualization.png
- **LumbanganSystem**
  - Summary: A web-based Barangay Management Information System for resident records, document requests, approvals, and barangay service workflows.
  - GitHub: https://github.com/alfredD-12/LumbanganSystem
  - Live demo: Coming soon
  - Highlights: Document requests with status tracking; Document types/templates and proof uploads; Admin dashboard and statistics
  - Tags: PHP, MySQL, MVC, Bootstrap, Barangay System
  - Screenshots: /images/projects/lumbangan-system/dashboard.png; /images/projects/lumbangan-system/document-requests.png; /images/projects/lumbangan-system/document-types.png

### About + Services
- **D-07:** About copy: "I'm a student developer focused on full-stack web development with clean UI implementation and analytics-driven features. I build practical web apps and internal tools that keep workflows simple and decisions clear."
- **D-08:** Services list (4): Full-stack web application development; Clean UI implementation; Analytics dashboards and reporting; Internal tools and workflow automation.

### Contact + resume
- **D-09:** Contact section includes email CTA with mailto link; footer shows visible email address and links to GitHub, LinkedIn, and resume.
- **D-10:** Use email `nikkocausapin61@gmail.com` and GitHub `https://github.com/niks0501`.
- **D-11:** LinkedIn and resume are placeholders labeled "LinkedIn (coming soon)" and "Resume (coming soon)" until real links/files are available.

### Claude's Discretion
- Hero subline emphasis (design + engineering craft vs stack + outcomes vs availability) is open to implementation choice.

</decisions>

<specifics>
## Specific Ideas

- Project screenshots will be added later at the provided paths under `public/images/projects/`.
- LinkedIn and resume remain placeholders until the user provides actual links/files.

</specifics>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Phase scope and requirements
- `.planning/ROADMAP.md` — Phase 1 goal, requirements, and success criteria
- `.planning/REQUIREMENTS.md` — HERO/PROJ/ABOUT/SERV/CONT requirement details
- `.planning/PROJECT.md` — project constraints and overall direction

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/pages/index.astro` — homepage route where all Phase 1 sections will be implemented.
- `src/styles/global.css` — global Tailwind entrypoint for base styling.

### Established Patterns
- Astro page-based routing under `src/pages/` and assets in `public/`.

### Integration Points
- Project screenshots should live under `public/images/projects/...` and be referenced from the homepage section code.

</code_context>

<deferred>
## Deferred Ideas

None — discussion stayed within Phase 1 scope.

</deferred>

---

*Phase: 01-core-content-sections*
*Context gathered: 2026-06-01*
