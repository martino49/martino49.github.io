# Portfolio Hireability Research & Improvement Plan

**Date:** 2026-10-27 — **re-audited:** 2026-11-01 — **fixes applied:** 2026-11-02
**Trigger:** Software Developer/Engineer job spec (Africaworkpower — international/Finnish clients, IT Hub in Kenya) requiring 5+ years, production software, testing discipline, AI-assisted development, and a mandatory GitHub profile in the CV.
**Goal:** Determine what actually decides whether a candidate in my position passes screening for this class of role, and turn the portfolio into evidence that survives it.

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
- The recruiter's canonical failure example is a profile whose pins are an uncontributed CSS-framework fork and an abandoned old script.
- The click-through test: repo has a README (what it does, how to run, stack), commit messages carry meaning ("Fix header alignment on mobile" beats "fix"), tests exist somewhere, a CI workflow is a strong plus.
- Consistency beats volume: a few commits every week for months signals reliability; a burst followed by 4 dark months reads as a coding experiment, not a practice.
- Recruiters *search* GitHub by location, language, and repo topics. Being findable as a Nairobi Node/TypeScript developer is free positioning.

**Note (2026-11-02):** GitHub removed repository pinning from its API — only issues can be pinned programmatically now. Pinning is a manual web-UI action (profile → Customize your pins), one minute of work.

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

## 3. My portfolio vs. the screening flow (audit 2026-11-01, re-verified 2026-11-02 after fixes)

| Screening step | Current state | Verdict |
|---|---|---|
| Homepage | `martino49.github.io` live, serving the portfolio | **Pass** |
| Featured project click-through | FinMate and EduLMS both live; **EduLMS demo cleaned on 2026-11-02** — fake stats (500+/50+/100+/95%) replaced with verifiable claims (4 roles, M-Pesa Daraja STK, helmet CSP, rate-limited auth), placeholder contacts replaced with real ones, copyright year now dynamic; cdely remains source-only | **Pass** |
| Code scan | All project links resolve (fundraising-app removed from the config); FinMateV2 9.8 KB README, EduLMS 1.5 KB, cdely detailed, FSPEDX 4.6 KB; no CI in flagship repos — **the profile README no longer claims it** (claim corrected 2026-11-02; the portfolio repo itself has real lint/typecheck/test/build CI) | **Pass** — honest claims only |
| GitHub profile | **Verified 2026-11-02 after manual fixes:** 3 repos pinned (FinMateV2, EduLMS, cdely — forks fallback gone), website field fixed to `https://martino49.github.io/`, location set to "Nairobi, Kenya", bio unified with the site identity | **Pass** — nit: profile name field reads "Martin Musumba" vs "Martin Omondo" everywhere else; `martino49.github.io` repo not yet pinned (4th pin available) |
| Contactability | Email unified everywhere | **Pass** (email) — website field still wrong |

**Root cause (10-27):** severed chain between proof and profile. **Root cause (11-02), narrowed to manual-only items:** every automatable link/claim defect is fixed; what remains is 5 minutes of web-UI work only the account owner can do (pins, profile fields).

---

## 4. Improvement plan (updated 2026-11-02)

### P0 — Complete the evidence chain

- [x] Deploy the current portfolio publicly (live)
- [x] Push FinMate and EduLMS repos publicly with real READMEs
- [x] Push the portfolio repo itself
- [x] **Remove the `fundraising-app` dead link** from `portfolio.config.yaml` (2026-11-02; client claim kept as text, unlinked)
- [x] **Pin repos** — 3 of 4 done (FinMateV2, EduLMS, cdely; verified via API 2026-11-02). Remaining: pin `martino49.github.io` as the 4th — it is the only repo with CI + tests
- [x] **Fix the profile website field** — now `https://martino49.github.io/` (verified)
- [x] Location set to "Nairobi, Kenya" (verified)
- [x] Bio unified with the site identity (verified: "Full-Stack Web & Android Developer — Node.js, React, TypeScript, Kotlin…")
- [ ] **Unify the profile name field** — reads "Martin Musumba"; site/resume/README all read "Martin Omondo" (verified 2026-11-02) **(new)**

### P1 — GitHub curation

- [x] Rewrite the profile README as an elevator pitch
- [x] **Repair encoding damage** in the profile README (double-encoded em-dashes rendered as garbage on GitHub; fixed 2026-11-02) **(new)**
- [x] **Remove unbacked claims**: "Jest + supertest suite" (no test files exist in EduLMS — verified) and "CI on every push" (no workflows in flagship repos — verified) rewritten to truthful scope (2026-11-02) **(new)**
- [x] **Correct inflated claims in the portfolio config**: EduLMS "5-role" → **4 roles** (verified in code: admin/instructor/student/finance_officer), Jest clause removed, repoUrl corrected to the repo that actually backs the live demo (2026-11-02) **(new)**
- [ ] Pin repos (tracked in P0, manual)
- [ ] Fill profile metadata: location (Nairobi, Kenya), website — manual or after `gh auth refresh -s user`; the bio unification is part of the same PATCH **(new)**
- [ ] Unify wording: profile bio vs site title (one identity) — manual or with the same PATCH **(new)**
- [ ] Repo topics — partially present (FinMateV2: nodejs/express/rbac/fintech/mysql; portfolio: react/typescript/vite), add to the rest
- [x] Consolidate duplicate repos: `edu-lms` (the divergent Jan–Apr copy) archived 2026-11-02; `EduLMS` — the repo that actually backs the live demo — kept and verified live (200)
- [ ] Keep the contribution graph alive — uneven: portfolio 10-27/11-02, EduLMS 11-02, FinMateV2 08-31, FSPEDX 08-15, cdely stale since 02-06

### P2 — One flagship, senior-shaped project

- [x] Case-study posts exist (building-finmate / building-edu-lms / building-cdely)
- [ ] **Reshape them**: currently "Idea → Tech Stack → Key Features"; the screening lens wants problem → approach → **tradeoffs → outcome → known limitations**
- [ ] Public maintenance cadence: FinMateV2 last pushed 2026-08-31 — releases or real bug-fix commits, not a burst

### P3 — Close the cheap spec gaps

- [ ] Docker: no Dockerfile in FinMateV2 (verified) — still open
- [ ] OOP/design patterns: refactor one backend into explicit layers, documented
- [ ] AI-assisted development: post on where AI genuinely helped vs cost time
- [ ] Data structures & algorithms: own public solutions repo — none exists yet
- [ ] Open source: 1–2 merged external PRs

### P4 — Credibility fixes

- [x] **Remove EduLMS template placeholders from the live demo** — fake stats, © 2024, "123 Education St / +1 (555) / info@edulms.edu", dead social links; deployed and verified live 2026-11-02
- [x] Unify email across surfaces
- [x] **Retire the "65+ repos" stat** from `portfolio.config.yaml` (2 places) — replaced with count-free wording
- [ ] Confirm the avatar photo is a real portrait (214 KB file present; config TODO comment stale)

### P5 — Application strategy

- [ ] CV with GitHub URL directly under the name; two-sentence framing of the years gap: evidence, not adjectives
- [ ] Salary expectation positioned below 5-year market rate (documented edge)
- [ ] Referral path: Nairobi developer community, Finland–Kenya IT hub channels, informational interviews
- [ ] Interview prep: rehearse walking through decisions, constraints, and alternatives on FinMate/Cdely

---

## 5. What changed since the 2026-10-27 audit (delta)

| Item | 10-27 | 11-01 | 11-02 |
|---|---|---|---|
| Portfolio deployed | No | **Live** | **Live** |
| Project repos public | No | Yes (fundraising-app 404) | **All resolve** |
| Profile README | Links to dead account | Rewritten pitch | **Claims true, encoding repaired** |
| EduLMS demo | Template, fake stats | Same fake stats live | **Cleaned, verified live** |
| Email identity | Two emails | Unified | Unified |
| Pins | None | None | **3 of 4 — forks fallback gone** |
| Link health | Unverified | Two 404s | **All clean (website field fixed)** |
| Flagship CI | None | None, claimed | **Claim removed, scope corrected** |
| Profile fields | Empty | Empty | **Location, website, bio all set (verified)** |
| Inflated claims | Unknown | Several found | **Fixed in config + README** |

**Read on the current state:** the portfolio no longer claims anything it can't prove. The remaining failures are two manual profile actions (pins, website/location fields) and content work (P2 case studies, P3 spec gaps). Those are the only things between the current profile and a clean pass of the 60-second scan.

---

## 6. Pre-application self-audit (run before every submission)

1. Open the portfolio on a phone — does it hold up?
2. Click every live demo link — all working?
3. Open the best repo — README present and skimmable in 30s?
4. GitHub profile — are the right 4 repos pinned, activity current?
5. Show a stranger the homepage: can they say what I do in one sentence?
6. Every requirement on the target spec maps to a clickable piece of evidence?
7. **Does anything on the site or README claim something the linked artifact doesn't back? (numbers, CI, stats, roles)**

---

## 7. Standing rule

The must-haves checklist blog post (`blog/must-haves-roadmap.mdx`) stays public and dated — gaps close with evidence, never with adjectives. The same rule applies to the profile README: if the flagship repos don't have CI, the README doesn't say CI. (Applied in practice on 2026-11-02: two unbacked claims removed rather than dressed up.)
