# Portfolio Hireability Research & Improvement Plan

**Date:** 2026-10-27 — **re-audited and updated:** 2026-11-01
**Trigger:** Software Developer/Engineer job spec (Africaworkpower — international/Finnish clients, IT Hub in Kenya) requiring 5+ years, production software, testing discipline, AI-assisted development, and a mandatory GitHub profile in the CV.
**Goal:** Determine what actually decides whether a candidate in my position passes screening for this class of role, and turn the portfolio into evidence that survives it.
**Change since first version:** the evidence chain is no longer severed — the portfolio is deployed, the project repos are public with READMEs, and the profile was rewritten. What remains is a narrower, sharper list: pins, dead links, one fabricated demo, and unbacked claims.

---

## 1. Sources

| Source | Perspective | What it informed |
|---|---|---|
| [DevPlaybook — Developer Portfolio Checklist: 20 Things Hiring Managers Look For](https://devplaybook.cc/blog/developer-portfolio-checklist-20-things-hiring-managers/) | Hiring-manager screening behavior | The 60-second review flow; project card requirements; README/commit/test expectations |
| [ReadmeDesign — What Recruiters Actually Look For on Your GitHub Profile](https://readmedesign.com/blog/what-recruiters-look-for) | Technical recruiter | The 15–30 second GitHub review; pinned-repo-first behavior; click-through test; searchability |
| [SOLTECH — How to Evaluate Software Engineering Talent (HR guide)](https://soltech.net/what-do-hiring-managers-actually-look-for-in-a-github-portfolio/) | Staffing-industry HR director | Years-vs-capability; must-haves vs transferable vs preferences; evidence-over-keywords; AI-as-judgment |
| [Dice — Tips for Landing an "Entry-Level" Job that Requires Experience](https://www.dice.com/career-advice/tips-for-landing-an-entry-level-job-that-requires-experience/) | Career coaching / staffing | Apply-anywhere doctrine; cumulative experience; high-potential candidates campaign rather than blast applications |
| EU Delegation / TRIFIC Nairobi tech-hub coverage, 2026 (via [OutsourceAccelerator](https://news.outsourceaccelerator.com/europe-turns-to-kenya/)) | Market context | European firms are actively recruiting in Nairobi — competition for this exact role is structural, not incidental |

---

## 2. Key findings

### 2.1 A fixed 60-second review decides everything

Screening is not a read; it is a sequence with hard cutoffs:

1. Homepage skim (~10s) — what you do, headline stack, availability
2. One featured project click (~20s) — live demo, looks real
3. Code scan (~20s) — readable, has a README
4. GitHub profile (~10s) — recent activity

Any single failure filters the candidate out. Busy reviewers apply this mechanically after ~40 portfolios a day.

### 2.2 On GitHub, pinned repositories are checked first — within 15–30 seconds total

- If nothing is pinned, GitHub shows your most recent/popular repos — which for my profile means tutorial forks.
- The recruiter's canonical failure example is a profile whose pins are an uncontributed CSS-framework fork and an abandoned old script. My profile currently matches that failure mode exactly (12 public repos, 11 forks, plus a README full of links to a nonexistent account).
- The click-through test: repo has a README (what it does, how to run, stack), commit messages carry meaning ("Fix header alignment on mobile" beats "fix"), tests exist somewhere, a CI workflow is a strong plus.
- Consistency beats volume: a few commits every week for months signals reliability; a burst followed by 4 dark months (my current state) reads as a coding experiment, not a practice.
- Recruiters *search* GitHub by location, language, and repo topics. Being findable as a Nairobi Node/TypeScript developer is free positioning I currently waste.

### 2.3 Years of experience is context, not capability — and job specs are known to inflate

- Staffing insiders separate true must-haves from *transferable capabilities* and *preferences*; specs creep as stakeholders add requirements, so a stated "5 years" is not proof the manager enforces it.
- The decisive lens: **capability → evidence → evaluation**. Evidence for capabilities comes from problems solved, decisions made, tradeoffs, iteration — explicitly *not* repo count or keyword density.
- On the AI requirement: the question is not whether you use AI tools (84% of developers do), it is whether you can validate what they produce — catch hallucinations, security and maintainability issues, and explain why a solution is right.
- Communication is treated as part of technical credibility: explaining decisions, constraints, and what you'd do differently today.

### 2.4 The response to an experience gap: apply anyway, and campaign instead of blasting

- Requirement inflation is standard practice (some postings inflate to see who they attract); cumulative experience — side projects, client work, paid or unpaid — counts toward years.
- A lower salary expectation is an explicit edge against 5-year candidates who demand more.
- Volume applications lose. High-potential candidates get introductions and referrals, request informational interviews, and can articulate *why* this employer. Spending an hour on company research beats ten generic submissions.

### 2.5 Market context

Nairobi is being actively recruited by European firms right now, so "available, English-fluent, affordable Nairobi developer" is table stakes — the differentiator is the evidence chain, not geography or rate.

---

## 3. My portfolio vs. the screening flow (audit, 2026-11-01)

All checks below were verified directly on 2026-11-01 (live HTTP fetches + GitHub API), not assumed.

| Screening step | Current state (2026-11-01) | Verdict |
|---|---|---|
| Homepage | `martino49.github.io` is live and serves the site ("Martin Omondo — Full-Stack Web & Android Developer") | **Pass** |
| Featured project click-through | FinMate (fin-mate-three.vercel.app) and EduLMS (edulms-iota.vercel.app) both live and reachable; cdely is source-only (no live demo); **EduLMS still shows fabricated numbers — "500+ Active Students", "50+ Instructors", "100+ Courses", "95% Success Rate", "© 2024", and placeholder contact "123 Education St, +1 (555) 123-4567, info@edulms.edu"** | **Partial / risk** — the fabricated demo is the single worst artifact a screened candidate can own |
| Code scan | All 7 project links resolve except **fundraising-app (404 — a dead link sitting on the live portfolio site)**; READMEs are real: FinMateV2 9.8 KB, EduLMS 1.5 KB, cdely present (roles/tracking/payments/setup), FSPEDX 4.6 KB | **Partial** — readable but one dead link, and **no CI workflow exists in any flagship repo** while the profile README claims "lint and typecheck wired into CI on every push" |
| GitHub profile | Profile README rewritten into a proper pitch (name, role, Nairobi · open to work, 4-project "Shipped to production" table, contact email). But: **still zero pinned repos** — the overview falls back to "Popular repositories", which are tutorial forks; website field points to `matino.vercel.app` which **404s**; location and email profile fields are empty; bio wording ("Full-Stack JavaScript Developer · React & Node.js") contradicts the site title (Web & Android) | **Partial** — the pitch is right, the first-glance layout is still the old failure mode |
| Contactability | Email unified everywhere: `omondo906@gmail.com` on site, resume, and profile README | **Pass** on email — **Fail** on the profile website link (404) |

**Root cause (10-27):** severed link between proof and profile. **Root cause (11-01), narrowed:** the chain exists, but three of its links still fail on contact — dead fundraising-app link on the live site, dead website field on the profile, and zero pins so forks are what a reviewer actually sees first.

---

## 4. Improvement plan (updated 2026-11-01)

Checkbox key: done / verified against the plan, undone. New items introduced by this re-audit are marked **(new)**.

### P0 — Complete the evidence chain

- [x] Deploy the current portfolio publicly (`martino49.github.io` live — verified 2026-11-01)
- [x] Push FinMate and EduLMS repos publicly with real READMEs (both 200, with stack/setup/features)
- [x] Push the portfolio repo itself
- [ ] **Verify every link monthly** — re-broke immediately: `fundraising-app` 404 from `portfolio.config.yaml` project list; `matino.vercel.app` 404 in the profile website field **(new)**
- [ ] Pin the 4 repos: FinMateV2, EduLMS, cdely (or LiteLink), martino49.github.io — **still zero pinned; GitHub is showing tutorial forks on first look** (moved up here because it is the last hard cutoff that still fails)

### P1 — GitHub curation

- [x] Rewrite the profile README as an elevator pitch (done — verified on the live profile: shipped-to-production table, "no tutorial clones", contact email)
- [ ] Pin repos (tracked in P0)
- [ ] Fill profile metadata: location (Nairobi, Kenya), email field, website field with the *working* URL — recruiters search by location; the fields are empty even though the README carries the text **(new)**
- [ ] Unify wording: profile bio says "Full-Stack JavaScript Developer · React & Node.js Engineer", site and README say "Full-Stack Web & Android Developer" — pick one identity **(new)**
- [ ] Repo topics — partially present (FinMateV2: nodejs/express/rbac/fintech/mysql; portfolio: react/typescript/vite), add to the rest
- [ ] **Ship CI in the flagship repos, or delete the claim from the profile README** — none of FinMateV2/EduLMS/cdely/FSPEDX has a workflow, while the README advertises CI on every push. An unbacked claim is worse than no claim **(new)**
- [ ] Consolidate duplicate repos: `EduLMS` (Jan 2026) and `edu-lms` (Apr 2026) both exist with divergent content — keep the one the site links, delete/archive the other **(new)**
- [ ] Keep the contribution graph alive — improved but uneven: portfolio 10-27, FinMateV2 08-31, FSPEDX 08-15, EduLMS/AgroLink 04-17, cdely stale since 02-06

### P2 — One flagship, senior-shaped project

- [x] Case-study posts exist (building-finmate / building-edu-lms / building-cdely)
- [ ] **Reshape them**: the current shape is "Idea → Tech Stack → Key Features"; the screening lens wants problem → approach → **tradeoffs → outcome → known limitations / what I'd do differently** (edits and refactors are small; this is the cheapest senior signal available) **(new)**
- [ ] Public maintenance cadence: FinMateV2 last pushed 2026-08-31 (2 months dark) — releases or real bug-fix commits, not a burst

### P3 — Close the cheap spec gaps

- [ ] Docker: no Dockerfile in FinMateV2 (verified 404) — still open
- [ ] OOP/design patterns: refactor one backend into explicit layers, documented
- [ ] AI-assisted development: post on where AI genuinely helped vs cost time
- [ ] Data structures & algorithms: own public solutions repo — none exists yet
- [ ] Open source: 1–2 merged external PRs

### P4 — Credibility fixes

- [ ] **Remove EduLMS template placeholders from the live demo** — "© 2024", "500+ Active Students" and friends, "123 Education St, +1 (555) 123-4567" are still live on edulms-iota.vercel.app and the profile README lists it as shipped-to-production
- [x] Unify email across surfaces (done: omondo906@gmail.com everywhere)
- [ ] **Retire the "65+ repos" stat** — still in `portfolio.config.yaml` (2 places) while the real count is 20 public repos, 11 of them forks; the number contradicts the profile at a glance **(new)**
- [ ] Confirm the avatar photo is a real portrait (file is 214 KB, config comment still carries a stale TODO)

### P5 — Application strategy

- [ ] CV with GitHub URL directly under the name; two-sentence framing of the years gap: evidence, not adjectives
- [ ] Salary expectation positioned below 5-year market rate (documented edge)
- [ ] Referral path: Nairobi developer community, Finland–Kenya IT hub channels, informational interviews
- [ ] Interview prep: rehearse walking through decisions, constraints, and alternatives on FinMate/Cdely

---

## 5. What changed since the 2026-10-27 audit (delta)

| Item | 10-27 | 11-01 |
|---|---|---|
| Portfolio deployed | No — homepage 404 | **Yes — live** |
| Project repos public | No — unreachable | **Yes — 7/7 resolve (fundraising-app newly dead)** |
| Profile README | Links to nonexistent account | **Rewritten pitch, verified live** |
| Email identity | Two different emails | **Unified** |
| Pins | None | **None — still the fork fallback** |
| EduLMS demo | Template with fake stats | **Same fake stats still live** |
| Link health | Unverified | **Two verified 404s (site + profile)** |
| Flagship CI | None | **None, but now claimed — needs the claim removed or the CI shipped** |

**Read on the current state:** the profile and site now make a credible *claim* about production experience; the remaining failures are all claim-vs-evidence mismatches (pins showing forks, a 404 marketed as a project, a fake-stats LMS marketed as shipped, CI advertised but absent, "65+ repos" vs 20). Those are hours of work, not weeks — and they are exactly the mismatches a reviewer probing for "5+ years" is trained to catch.

---

## 6. Pre-application self-audit (run before every submission)

1. Open the portfolio on a phone — does it hold up?
2. Click every live demo link — all working? (fundraising-app and matino.vercel.app both failed on 2026-11-01)
3. Open the best repo — README present and skimmable in 30s?
4. GitHub profile — are the right 4 repos pinned, activity current?
5. Show a stranger the homepage: can they say what I do in one sentence?
6. Every requirement on the target spec maps to a clickable piece of evidence?
7. **Does anything on the site or README claim something the linked artifact doesn't back? (numbers, CI, stats)** — added 2026-11-01

---

## 7. Standing rule

The must-haves checklist blog post (`blog/must-haves-roadmap.mdx`) stays public and dated — gaps close with evidence, never with adjectives. The same rule applies to the profile README: if the flagship repos don't have CI, the README doesn't say CI.
