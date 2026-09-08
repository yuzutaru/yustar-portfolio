# Portfolio Website — Build Plan

> **Hand-off spec.** Give this entire file to an AI coding agent (Claude Code, Cursor, Opencode, etc.) as the single source of truth for building the site. Follow it in order; do not invent data.

---

## 1. Goal & Audience

A **single-page portfolio** for **Yustar Pramudana**, positioning him as a:

> **Senior Full-Stack & Mobile Engineer (10+ Yrs) | Kotlin, Java, Swift | AI-Accelerated Systems Architecture**

**Three audiences, three jobs:**

| Audience | What they need | How the site delivers it |
|---|---|---|
| HR / Recruiter | Scan in ~30s, find proof of seniority, contact, and a "hire" signal | Clear hero, quantified success stories, downloadable resume, obvious CTA |
| Hiring Manager / Developer | Verify depth, judge architecture & AI-native chops | Success stories with real technical detail, GitHub/GitLab links, writing |
| Yustar (self) | Maintain & extend easily over years | Typed content files, clean layered code, minimal deps |

**Non-goals (explicitly out of scope):** auth/login, a CMS backend, a database, multi-tenancy, analytics dashboard.

---

## 2. Tech Stack (2026, stable, low-risk)

| Concern | Choice | Rationale |
|---|---|---|
| Framework | **Next.js 15** (App Router, React Server Components) | Standard, SEO-friendly, static-export capable, future-proof |
| Language | **TypeScript** (strict mode) | Contract-first ethos; build fails on type errors |
| UI | **React 19** | Ships with Next 15 |
| Styling | **Tailwind CSS v4** | Design tokens, dark-mode, tiny runtime |
| Content validation | **Zod** | Strict schemas — mirrors his "contract typing" philosophy |
| Icons | **lucide-react** | Tree-shakeable, consistent |
| Runtime backend | **None** | Fully static; content is compiled at build time |

**Deployment targets (either works):** Vercel (recommended) or GitHub Pages via `output: 'export'`.

---

## 3. Clean Architecture (the site's own code)

Mirror the exact principle he preaches: **one source of truth, strict contracts, unidirectional dependency flow.**

```
src/
  app/          # routes, metadata, layout (framework wiring only)
  content/      # typed data files — THE single source of truth for all copy
  domain/       # Zod schemas + derived TS types (no React here)
  components/   # presentational UI; pure props in, JSX out
  lib/          # pure helper functions (dates, formatters, cn())
```

**Dependency rule (must never be violated):**

```
domain  ←  content  ←  components  ←  app
```

- `domain/` defines schemas; imports nothing from content or UI.
- `content/` imports `domain` schemas; exports validated data.
- `components/` import types from `domain`, data passed in as props.
- UI **never** reads `content/*` directly — `app/` wires content → components.

**Benefit:** to add/change a job, project, or skill, edit one file in `content/`. No UI code changes.

---

## 4. Content Model (Zod schemas)

All copy lives in `src/content/*.ts` and is validated against these at build time. A schema violation = build error = caught before deploy.

```ts
// domain/schemas.ts (illustrative)

const Profile = z.object({
  name: z.string(),
  title: z.string(),
  tagline: z.string(),
  location: z.string(),
  availability: z.string(),
  summary: z.array(z.string()),          // About paragraphs
  resumeUrl: z.string(),
});

const Role = z.object({
  company: z.string(),
  role: z.string(),
  employmentType: z.enum(["Full-time", "Contract", "Individual Contractor", "Freelance"]),
  start: z.string(),                       // "Oct 2022"
  end: z.string(),                         // "Sep 2025" | "Present"
  location: z.string(),
  remote: z.boolean(),
  summary: z.string(),
  bullets: z.array(z.string()),
  skills: z.array(z.string()),
});

const Project = z.object({
  name: z.string(),
  description: z.string(),
  tech: z.array(z.string()),
  url: z.string().url().optional(),
  featured: z.boolean(),
});

const SuccessStory = z.object({
  title: z.string(),
  problem: z.string(),
  action: z.string(),
  result: z.string(),        // quantified where possible
  tags: z.array(z.string()),
});

const SkillGroup = z.object({
  category: z.string(),
  items: z.array(z.string()),
});

const Article = z.object({
  title: z.string(),
  url: z.string().url(),
  platform: z.string(),      // "Medium"
  date: z.string(),
});

const SocialLink = z.object({
  label: z.string(),         // "LinkedIn", "GitHub", ...
  url: z.string().url(),
});
```

**Content files (all in `src/content/`):**

- `profile.ts`
- `skills.ts`
- `experience.ts`
- `successStories.ts`
- `projects.ts`
- `articles.ts`
- `socials.ts`

Each exports a typed constant validated by `schema.parse(...)` (or a `satisfies` + runtime parse at import).

---

## 5. Page Sections (single scroll, in this order)

1. **Nav** — sticky, name/logo left, anchor links right (About, Skills, Experience, Success Stories, Projects, Writing, Contact), resume download button.
2. **Hero** — name, full title, one-line tagline, location + availability, primary CTA ("View resume" / "Contact"), secondary CTA (GitHub).
3. **About** — 2–3 short paragraphs from the real bio below.
4. **Skills** — grouped chips/cards (no fake proficiency bars; grouping is enough).
5. **Experience** — vertical timeline, newest first, 5 roles.
6. **Success Stories** — highlighted cards (the differentiator section; see §6).
7. **Projects** — grid of featured + GitHub repos.
8. **Writing** — list of Medium articles.
9. **Contact** — social links, email, resume download.
10. **Footer** — copyright, built-with line, social icons.

---

## 6. Content (verified against real sources)

### 6.1 Hero

- **Name:** Yustar Pramudana
- **Title:** Senior Full-Stack & Mobile Engineer (10+ Yrs) | Kotlin, Java, Swift | AI-Accelerated Systems Architecture
- **Tagline (suggested):** "Enterprise-grade backend discipline × AI-accelerated shipping."
- **Location:** Medan, Indonesia (open to Global Remote / ID, SG, MY, JP, Saudi Arabia)
- **Availability:** Open to Senior/Lead Full-Stack, Mobile, or AI-Native roles.

### 6.2 About

Use these verified facts (from LinkedIn About + GitHub):

- Full-stack & mobile engineer (10+ years) with a dual background: enterprise backend in banking (.NET C#, Java) + modern AI-native product development across Web, Android, iOS.
- Designs/delivers software where AI models and autonomous agents (Claude Code, Cursor, Kilo, Opencode) are built into the architectural fabric, backed by deterministic guardrails, clean domain layers, strict contract typing.
- Combines enterprise backend discipline with AI-accelerated workflows to ship at ~3x velocity without compromising rigor.

### 6.3 Skills (grouped)

- **Languages & Backends:** TypeScript, Python, .NET C#, Java, Kotlin, Swift, SQL | Deno, Supabase, PostgreSQL, REST/OpenAPI
- **Mobile:** Android (Kotlin, Jetpack Compose), iOS (SwiftUI), React Native (Expo), MVVM, Clean Architecture, Kotlin Coroutines/Flow, Room, Hilt, RxJava, Realm
- **Web:** React, Monorepo (pnpm/Turbo)
- **AI & Agents:** Custom MCP, Google Vision API, Gemini API, Claude Code, Cursor, Kilo, Opencode
- **Tools:** Git, GitHub, GitLab, Android Studio, Xcode, Gradle, Figma

### 6.4 Experience (newest first, real bullets)

1. **Rewardz** — Senior Android Developer · Full-time · *Oct 2022 – Sep 2025* · Singapore · Remote
   - Migrated legacy Android UI to Jetpack Compose → maintainability + less boilerplate.
   - Built a Health & Fitness module (Kotlin, Flow, Room) with offline-first architecture.
   - Integrated Health Connect API (steps, sleep, activity tracking).
2. **zennya Health** — Android Mobile Application Developer · Individual Contractor · *Apr 2021 – Aug 2022* · Makati, PH · Remote
   - Healthcare app for patient services & medical data tracking.
   - Offline data via Realm for low-network reliability.
   - Built a real-time vaccination queue system during COVID-19.
3. **Bank OCBC NISP** — Software Engineer · Full-time · *Jan 2019 – Feb 2021* · Jakarta, ID · Hybrid
   - Backend services for the One Mobile banking app.
   - APIs for the FX module (real-time currency transactions).
   - Mission-critical financial systems on Java/Spring MVC + MS SQL Server.
4. **Lawencon Internasional** — Android Developer · Contract · *Jan 2018 – Jan 2019* · Jakarta, ID
   - **BRISIM** (Bank Rakyat Indonesia): internal app for real-time transaction monitoring by executives.
   - RxJava for high-frequency financial data streams; secure local caching.
5. **PT Xsis Mitra Utama** — Software Engineer · Contract · *Jan 2016 – Jan 2018* · Jakarta, ID
   - **BNI Mobile Banking v2** (Bank Negara Indonesia): hybrid Cordova app.
   - Custom native bridge (JS ↔ native Android Java) with SSL encryption.
   - Backend APIs in .NET C# + MS SQL Server; biometric auth research (fingerprint/face).
   - *(Also: Java Programmer Bootcamp, Nov–Dec 2015.)*

### 6.5 Success Stories (THE differentiator)

Frame each as **Problem → Action → Result**. Keep honest — no invented numbers.

1. **AI-Native Monorepo → ~3x velocity**
   - *Problem:* Building 4 apps (backend, iOS, Android, web) meant translating the same logic into three languages — repetitive boilerplate.
   - *Action:* Centralized sources of truth — a single OpenAPI spec for APIs, platform-neutral design tokens for UI; custom build pipeline generated Swift/Kotlin/React from them.
   - *Result:* Zero visual drift, compile-time safety across platform boundaries, time spent on features instead of boilerplate.
2. **Custom MCP servers for contract integrity**
   - *Action:* Architected custom Model Context Protocol (MCP) servers to automate multi-language client codegen (Kotlin/Swift/TS) and enforce monorepo contract integrity.
3. **Scale-invariant facial search**
   - *Action:* Designed a facial search engine using Google Cloud Vision + hand-designed geometric scoring (inter-eye landmarks + exponential-decay weighting).
4. **Payments & webhooks (Airwallex marketplace)**
   - *Action:* Integrated marketplace payments with HMAC-SHA256 signature verification, KYC onboarding, and idempotent event handling.
5. **Mission-critical banking backends**
   - *Action:* Years of .NET C# / Java / SQL infrastructure in banking, built for security, high availability, and compliance (OCBC NISP, BNI, BRI).
6. *(Optional, humanizing)* **"The Ember That Refused to Die"** — a resilience story: after a layoff, rebuilt fundamentals (DSA, system design), retrained like a beginner, kept discipline. Link to the LinkedIn post if desired.

### 6.6 Projects

- **Sosmed** — reels infinite scrolling, short-video player, like/comment (Kotlin). [github.com/yuzutaru/Sosmed](https://github.com/yuzutaru/Sosmed)
- **PokemonApp_JetpackCompose** — Pokemon API with Jetpack Compose (Kotlin). [github.com/yuzutaru/PokemonApp_JetpackCompose](https://github.com/yuzutaru/PokemonApp_JetpackCompose)
- *(Optional featured — cross-platform marketplace + facial search, described but not linked publicly.)*

### 6.7 Writing

- "Android UI in 2026: what engineers should really understand" — Medium
- "Kotlin Coroutines vs RxJava: What Android Developers Should Really Choose in 2026" — Medium

### 6.8 Contact / Socials

- **LinkedIn:** https://www.linkedin.com/in/yustar-pramudana/
- **GitHub:** https://github.com/yuzutaru
- **GitLab:** https://gitlab.com/yuzutaru
- **Resume:** bundle the local `resume-Yustar-Pramudana_2026_v4.pdf` (or `CV-Yustar-Pramudana_2026_V8.pdf`) into `public/` as `/resume.pdf`.

---

## 7. Design & Engineering Requirements

- **Design tokens** in one Tailwind theme file (colors, spacing, radius, typography). Dark-mode-first, light mode optional.
- **Responsive** mobile → desktop (single column → grid).
- **Accessibility (a11y):** semantic HTML (`header/nav/main/section/footer`), skip link, focus states, `aria` labels, keyboard-navigable, prefers-reduced-motion respected, sufficient contrast.
- **Performance:** static rendering, minimal JS, lazy-load below-the-fold images, no heavy fonts (system font stack or one variable font).
- **SEO:** per-page metadata, canonical, `og:` + `twitter:` tags, JSON-LD `Person` schema (name, jobTitle, sameAs → LinkedIn/GitHub/GitLab), semantic headings.
- **Quality gate:** `npm run lint` + `npm run typecheck` pass; Lighthouse ≥95 performance/accessibility/SEO/BP.

---

## 8. Phases & Acceptance Checklist

**Phase 0 — Scaffold.** Next 15 + TS + Tailwind v4; lint/typecheck/format wired.

**Phase 1 — Domain & content.** Write Zod schemas + all `content/*.ts` files with the real data above. ✅ builds.

**Phase 2 — Layout & sections.** Build each section component in order; wire in `app/`. ✅ responsive + a11y.

**Phase 3 — Polish.** SEO/OG/JSON-LD, resume download, favicon, meta. ✅ Lighthouse ≥95.

**Phase 4 — Deploy.** Vercel or GitHub Pages (`output: 'export'`); verify HTTPS + preview.

**Definition of done:** `lint`+`typecheck` clean; all sections render real content; links resolve; resume downloads; one content edit requires zero component changes.

---

## 9. Future Scale (design for it, don't build it yet)

- **Blog:** drop `.mdx` files into a new route; content layer already isolated.
- **i18n:** add locale to content files + `[lang]` segment; components already prop-driven.
- **CMS:** swap `content/*.ts` for a fetcher behind the same domain schemas.
- **More projects:** add an entry to `projects.ts`; grid handles overflow automatically.
