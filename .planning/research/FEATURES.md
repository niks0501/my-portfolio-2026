# Feature Research

**Domain:** Recruiter-focused software engineer portfolio site
**Researched:** 2026-05-31
**Confidence:** MEDIUM

## Feature Landscape

### Table Stakes (Users Expect These)

Features users assume exist. Missing these = product feels incomplete.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Clear hero positioning (name, role, focus, primary stack) | Recruiters scan in seconds; need immediate role + stack signal | LOW | One concise headline + short subline; front-load role + domain + stack. |
| Curated project showcase (3–4 strong projects) | Recruiters expect proof of real work, not long lists | MEDIUM | Keep to 3–4; each project must be shipped/deployed. |
| Project cards with: name, one-line description, stack, live demo, GitHub link | Quick evaluation of relevance and credibility | MEDIUM | Links must be working; demo is critical for credibility. |
| About/summary paragraph | Gives context on strengths and working style | LOW | Short, specific, avoids generic “passionate” language. |
| Contact CTA (email visible + easy to reach) | Recruiters need low-friction outreach | LOW | Place in hero and footer; direct email preferred for recruiter flow. |
| Responsive + mobile-friendly layout | Recruiters view on mobile; broken layouts get closed | MEDIUM | Test on real phone; avoid layout shifts. |
| Fast load performance | A slow portfolio is a negative signal for engineers | MEDIUM | Optimize images, limit heavy scripts, target <2s load. |
| Professional links (GitHub + LinkedIn) | Standard validation path for recruiters | LOW | Link to profiles with relevant pins and activity. |

### Differentiators (Competitive Advantage)

Features that set the product apart. Not required, but valuable.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Mini case studies (Problem → Approach → Result) per project | Shows engineering judgment and impact | MEDIUM | 2–4 bullets with quantified outcomes where possible. |
| Visible impact metrics (performance, scale, revenue, time saved) | Makes outcomes credible and memorable | MEDIUM | Add “Impact highlights” block per project. |
| Live GitHub activity or pinned repo highlights | Signals current, consistent shipping | MEDIUM | Prefer live data over static screenshots. |
| Single “featured project” above the fold | Guides recruiter to best evidence first | MEDIUM | One project with outcome line + links. |
| Short video or interactive demo (optional) | Adds clarity for complex projects | MEDIUM | Must be user-initiated (no autoplay). |
| Social proof (one strong testimonial) | Adds trust signal for senior roles | LOW | One quote only; avoid carousel. |
| ATS-friendly resume download | Supports recruiter workflow | LOW | Keep as secondary CTA; ensure updated. |

### Anti-Features (Commonly Requested, Often Problematic)

Features that seem good but create problems.

| Feature | Why Requested | Why Problematic | Alternative |
|---------|---------------|-----------------|-------------|
| Auto-play video / animated hero | “Looks dynamic” | Increases bounce, delays content visibility | Static hero + optional play button for demos |
| Skill meters / percent bars | “Quick skill summary” | Unverifiable, wastes space, signals fluff | Simple, honest skill list tied to projects |
| Too many projects (8–15) | “Show breadth” | Dilutes strongest work; increases scan time | Curate to 3–4 best projects |
| Novel navigation (scroll-jacking, hidden menus) | “Stand out” | Slows evaluation, hurts usability | Standard nav + clear section anchors |
| Blog feed on homepage | “Show thought leadership” | Dates quickly, distracts from projects | Link to writing page or external posts |
| Contact forms only (no visible email) | “Reduce spam” | Recruiters want direct contact; friction kills | Show email + optional simple form |

## Feature Dependencies

```
Clear hero positioning
    └──requires──> Primary stack definition

Project cards
    └──requires──> Project data (title, stack, summary, links)

Mini case studies
    └──requires──> Project cards
            └──requires──> Project data

Impact metrics
    └──enhances──> Mini case studies

Featured project above the fold
    └──requires──> Project cards

Live GitHub activity
    └──requires──> GitHub profile setup + pinned repos
```

### Dependency Notes

- **Clear hero positioning requires primary stack definition:** The hero needs explicit role + stack to pass recruiter scan.
- **Project cards require project data:** Each card depends on stable demo and repo links.
- **Mini case studies require project cards:** Case studies extend each card with context and outcomes.
- **Impact metrics enhance mini case studies:** Numbers make the narrative credible and memorable.
- **Featured project requires project cards:** Featured item is a curated, elevated card.
- **Live GitHub activity requires GitHub setup:** Pinned repos + recent activity underpin the signal.

## MVP Definition

### Launch With (v1)

- [ ] Clear hero positioning (name, role, focus, stack) — essential for recruiter scan.
- [ ] 3–4 curated project cards with live demo + GitHub — core proof of competence.
- [ ] About summary — adds context and voice.
- [ ] Contact CTA with visible email — recruiter conversion path.
- [ ] Responsive, fast layout — credibility and usability baseline.

### Add After Validation (v1.x)

- [ ] Mini case studies with outcomes — add once core content is stable.
- [ ] Featured project block — optimize above-the-fold conversion.
- [ ] ATS-friendly resume download — support recruiter workflow.

### Future Consideration (v2+)

- [ ] One strong testimonial — only if credible source exists.
- [ ] Optional demo video — only if it clarifies complex projects.

## Feature Prioritization Matrix

| Feature | User Value | Implementation Cost | Priority |
|---------|------------|---------------------|----------|
| Clear hero positioning | HIGH | LOW | P1 |
| Project cards (3–4) | HIGH | MEDIUM | P1 |
| Contact CTA with email | HIGH | LOW | P1 |
| Responsive + fast layout | HIGH | MEDIUM | P1 |
| About summary | MEDIUM | LOW | P1 |
| Mini case studies | HIGH | MEDIUM | P2 |
| Featured project | MEDIUM | MEDIUM | P2 |
| ATS resume download | MEDIUM | LOW | P2 |
| Live GitHub activity | MEDIUM | MEDIUM | P2 |
| Testimonial | LOW | LOW | P3 |

**Priority key:**
- P1: Must have for launch
- P2: Should have, add when possible
- P3: Nice to have, future consideration

## Competitor Feature Analysis

| Feature | Competitor A | Competitor B | Our Approach |
|---------|--------------|--------------|--------------|
| Hero positioning | ShowProof guide: role + stack above the fold | Popout templates emphasize headline + stack | Use strong headline with role + stack + focus |
| Project curation | ShowProof: 3–4 projects max | Dev.to checklist: featured projects visible early | Keep 3–4 curated projects at top |
| Contact visibility | Dev.to: email easy to find | ShowProof: contact visible after scan | Put email CTA in hero + footer |
| Case studies | Popout/ShowProof: problem–solution–result | Popout examples emphasize metrics | Add short outcome bullets per project |

## Sources

- https://dev.to/_d7eb1c1703182e3ce1782/developer-portfolio-checklist-20-things-hiring-managers-look-for-388p (2026-03-25)
- https://showproof.io/guides/developer-portfolio/ (2026-04-17)
- https://showproof.io/guides/how-recruiters-read-developer-portfolios/ (2026-04-22)
- https://showproof.io/guides/what-to-include-in-developer-portfolio/ (2026-04-21)
- https://showproof.io/guides/developer-portfolio-mistakes/ (2026-04-22)
- https://www.popout.page/blog/portfolio-features-distracting-recruiters-2026 (2026-03-13)
- https://www.wix.com/blog/how-to-build-a-software-engineering-portfolio (2026-03-25)

---
*Feature research for: recruiter-focused software engineer portfolio*
*Researched: 2026-05-31*
