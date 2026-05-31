# Pitfalls Research

**Domain:** Recruiter-focused software engineer portfolio site
**Researched:** 2026-05-31
**Confidence:** MEDIUM

## Critical Pitfalls

### Pitfall 1: Vague hero that hides role + stack

**What goes wrong:**
Recruiters can’t identify your role or primary stack in the first scan, so they bounce before reading projects.

**Why it happens:**
Developers write friendly introductions (“Hi, I’m…”) and assume recruiters will scroll to find details.

**How to avoid:**
Write a one-line headline with **role + domain + primary stack**. Surface 3–5 core technologies directly under the hero. Keep it above the fold on desktop and mobile.

**Warning signs:**
- Hero starts with greetings or values instead of role.
- Stack appears only in a “Skills” section far below.
- First screen does not answer “what do they do?”

**Phase to address:**
Content strategy + hero copywriting

---

### Pitfall 2: Broken or unreliable project demos

**What goes wrong:**
Recruiters click a demo and hit a 404, long cold-start, or missing test credentials. The project is dismissed as unmaintained.

**Why it happens:**
Free-tier hosting sleeps, expired domains, or demos require auth with no test login.

**How to avoid:**
Audit every link before launch; use uptime checks; add a “demo takes 30s to wake” note; provide test credentials or a short video demo fallback.

**Warning signs:**
- Live links time out in incognito.
- Demo requires sign-up with no test account.
- No screenshots or video alternative.

**Phase to address:**
Project curation + QA/launch checks

---

### Pitfall 3: Project cards list tech, not outcomes

**What goes wrong:**
Projects read like tutorial clones (“Built with React, Node”), so recruiters can’t see impact or problem-solving.

**Why it happens:**
Engineers describe implementations instead of outcomes; no metrics are captured during the build.

**How to avoid:**
Use a **Problem → Approach → Result** micro-structure. Lead with outcome or user benefit, then stack.

**Warning signs:**
- Descriptions contain only tools, no problem or result.
- Multiple projects read identical except for the stack.

**Phase to address:**
Project storytelling + copywriting

---

### Pitfall 4: Over-designed portfolio that blocks content

**What goes wrong:**
Animations, scroll-jacking, and heavy assets delay content and tank performance; recruiters leave.

**Why it happens:**
Portfolio is treated as a “showpiece” instead of a fast, scannable document.

**How to avoid:**
Performance budget (LCP < 2.5s), avoid intro animations, reduce JS, optimize images, and favor simple interactions.

**Warning signs:**
- Loading animation before any text.
- Lighthouse mobile performance < 80.
- Custom cursors/scroll effects impacting readability.

**Phase to address:**
Visual system + performance optimization

---

### Pitfall 5: Too many shallow or tutorial projects

**What goes wrong:**
Recruiters see quantity without depth; signal becomes “can follow tutorials” rather than “can ship.”

**Why it happens:**
Desire to appear versatile leads to listing every project ever built.

**How to avoid:**
Curate 2–5 projects you can discuss deeply, and remove tutorial clones unless they are uniquely extended and framed with decisions.

**Warning signs:**
- 6+ projects with one-line descriptions.
- Multiple “todo/weather/clone” projects.
- You can’t explain tradeoffs for a listed project.

**Phase to address:**
Project selection + pruning

---

### Pitfall 6: Stale content signals inactivity

**What goes wrong:**
Old projects, outdated “currently learning” tags, or old copyright years imply no recent shipping.

**Why it happens:**
Portfolios require manual updates and are forgotten between job searches.

**How to avoid:**
Quarterly audit checklist; automate what can be automated (project data, contribution widgets); keep hero + featured project curated manually.

**Warning signs:**
- Last project >12 months old.
- Footer year is outdated.
- Pinned repos are stale.

**Phase to address:**
Launch checklist + maintenance plan

---

### Pitfall 7: Contact path is hidden or friction-heavy

**What goes wrong:**
Recruiters can’t quickly reach you (form-only, buried contact, or unclear CTA), so they move on.

**Why it happens:**
Design prioritizes minimalism over direct contact; fear of spam leads to hiding email.

**How to avoid:**
Make email visible and copyable in the hero or contact section; include LinkedIn/GitHub next to it; provide a single primary CTA.

**Warning signs:**
- No email address visible without scrolling.
- Only a generic contact form is offered.
- Multiple CTAs compete (“Hire me,” “Collaborate,” “Subscribe”).

**Phase to address:**
Information architecture + CTA design

---

### Pitfall 8: Mobile layout breaks or hides key content

**What goes wrong:**
Important text/CTA is clipped or requires horizontal scrolling; recruiters on mobile bounce.

**Why it happens:**
Testing only in desktop browsers; heavy grid layouts don’t adapt.

**How to avoid:**
Test on real devices; prioritize vertical reading; keep hero, projects, and CTA within the first two screens.

**Warning signs:**
- Horizontal scrollbars on phones.
- Buttons overlap or are off-screen.
- Text becomes too small to read at 375px.

**Phase to address:**
Responsive QA

---

### Pitfall 9: Skills list is inflated or uses % bars

**What goes wrong:**
Long, unfocused skill lists or “95%” bars reduce credibility and signal superficial exposure.

**Why it happens:**
Desire to look versatile; borrowed patterns from templates.

**How to avoid:**
List 4–6 core technologies you can defend in depth; group secondary tools separately; remove skill meters entirely.

**Warning signs:**
- 20+ tools listed with no hierarchy.
- Skill bars or proficiency percentages.

**Phase to address:**
Content strategy + skills curation

---

### Pitfall 10: No evidence of how you think

**What goes wrong:**
Live demos + GitHub links show the result and code, but not the reasoning. Recruiters can’t assess judgment.

**Why it happens:**
Assuming the code “speaks for itself.”

**How to avoid:**
Add brief “build notes” or README links with constraints, tradeoffs, and what you’d do differently.

**Warning signs:**
- Only links are “Live Demo” and “GitHub.”
- No mention of decisions, constraints, or tradeoffs.

**Phase to address:**
Project storytelling + documentation links

---

## Technical Debt Patterns

Shortcuts that seem reasonable but create long-term problems.

| Shortcut | Immediate Benefit | Long-term Cost | When Acceptable |
|----------|-------------------|----------------|-----------------|
| Hardcoding project data in the page | Fast initial build | Painful updates, stale content | MVP only if a maintenance reminder is scheduled |
| Using heavy animation libraries for a static site | “Wow” factor | Performance regressions, jank | Never for recruiter-focused portfolios |
| Single global font with no fallbacks | Visual consistency | FOIT/FOUT, poor performance | Acceptable only if font is optimized + preloaded |

## Integration Gotchas

Common mistakes when connecting to external services.

| Integration | Common Mistake | Correct Approach |
|-------------|----------------|------------------|
| Live demos (Render/Railway/Glitch) | Sleepy apps without warning | Add wake-up note or use static demo/video fallback |
| Contact forms | No deliverability checks or spam protection | Use a reputable form backend + CAPTCHA or simple honeypot |
| GitHub widgets | Slow or broken embedded graphs | Use lightweight images or cached data with fallbacks |

## Performance Traps

Patterns that work at small scale but fail as usage grows.

| Trap | Symptoms | Prevention | When It Breaks |
|------|----------|------------|----------------|
| Unoptimized hero image | LCP > 2.5s, mobile jank | Use WebP/AVIF, proper sizing, preload | Immediately on mobile networks |
| Too many custom fonts | FOIT/FOUT, CLS | Limit to 1–2 font files, use `font-display: swap` | 3G/4G connections |
| JS-driven animations for basic interactions | Scroll lag, input delay | Prefer CSS + no JS | Mid-range phones |

## Security Mistakes

Domain-specific security issues beyond general web security.

| Mistake | Risk | Prevention |
|---------|------|------------|
| Publishing email as plain text everywhere | Spam, phishing, recruiter spoofing | Use an alias and mild obfuscation; still keep email copyable |
| Exposing API keys in client-side demos | Credential leaks | Use public-only keys or server-side proxies |
| Linking to private repos or staging URLs | Broken access, leaks | Verify public access and use production URLs |

## UX Pitfalls

Common user experience mistakes in this domain.

| Pitfall | User Impact | Better Approach |
|---------|-------------|-----------------|
| Hidden CTA | Recruiter can’t contact quickly | Single primary CTA, visible in hero or first scroll |
| Non-scannable layout | Hard to parse in 6–10 seconds | Left-aligned headings, short paragraphs, clear hierarchy |
| No visual proof of projects | Low confidence in work | Include screenshots or GIFs for each project |

## "Looks Done But Isn't" Checklist

Things that appear complete but are missing critical pieces.

- [ ] **Hero:** Role + domain + primary stack visible above the fold
- [ ] **Projects:** Each has outcome, stack, and working link or video
- [ ] **Contact:** Email is visible and copyable; CTA is unambiguous
- [ ] **Mobile:** Tested on real phone, no horizontal scroll
- [ ] **Performance:** Mobile Lighthouse score ≥ 80, no blocking animations
- [ ] **Freshness:** Featured projects updated in last 12 months

## Recovery Strategies

When pitfalls occur despite prevention, how to recover.

| Pitfall | Recovery Cost | Recovery Steps |
|---------|---------------|----------------|
| Broken demo links | MEDIUM | Replace with video demo + fix hosting + add uptime check |
| Vague hero | LOW | Rewrite headline and move stack badges above the fold |
| Stale projects | MEDIUM | Remove stale items, add one fresh case study, update pinned repos |

## Pitfall-to-Phase Mapping

How roadmap phases should address these pitfalls.

| Pitfall | Prevention Phase | Verification |
|---------|------------------|--------------|
| Vague hero | Content strategy + hero copy | 6-second scan test: role + stack visible |
| Broken demos | QA/launch checks | Incognito test of every link |
| Tech-only project descriptions | Project storytelling | Each project has Problem → Approach → Result |
| Over-designed + slow | Visual system + performance | Lighthouse mobile ≥ 80, no blocking animations |
| Too many shallow projects | Project selection | 2–5 curated projects with depth |
| Stale content | Maintenance plan | Quarterly review checklist completed |
| Hidden contact | IA + CTA design | Email visible in first scroll |
| Mobile breakage | Responsive QA | Real-device checks at 375px and 768px |
| Inflated skills | Skills curation | Core stack ≤ 6 items, no % bars |
| No thinking evidence | Project documentation | Build notes/README links included |

## Sources

- https://showproof.io/guides/how-recruiters-read-developer-portfolios/ (2026-04-22)
- https://showproof.io/guides/developer-portfolio-mistakes/ (2026-04-22)
- https://dev.to/matthewhou/ive-reviewed-200-developer-portfolios-90-make-the-same-4-mistakes-16kd (2026-02-20)
- https://solid-web.com/developer-portfolio-gets-interviews/ (2026-03-18)
- https://dev.to/zansuken/most-developer-portfolios-get-rejected-in-7-seconds-heres-what-i-learned-fixing-mine-280p (2026-05-12)
- https://molinari.dev/en/blog/most-developer-portfolios-are-broken (2026-03-07)
- https://missquibble.com/posts/developer-portfolio-guide-2026/ (2026-05-09)

---
*Pitfalls research for: recruiter-focused software engineer portfolio site*
*Researched: 2026-05-31*
