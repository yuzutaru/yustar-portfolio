# Yustar Pramudana — Portfolio

Single-page portfolio for Yustar Pramudana — Senior Full-Stack & Mobile Engineer (10+ yrs), Kotlin / Java / Swift, AI-accelerated systems architecture.

## Stack

- Next.js 15 (App Router, static prerender) · React 19
- TypeScript (strict)
- Tailwind CSS v4
- Zod (content contracts)

## Structure (clean architecture)

```
src/
  app/          routes, metadata, layout — framework wiring only
  content/      typed data files — the single source of truth for all copy
  domain/       Zod schemas + inferred types (no React)
  components/   presentational UI, data passed in via props
  lib/          pure helpers (date formatting)
```

Dependency flow is one-way: `domain ← content ← components ← app`. The UI never reads content directly.

## Editing content

All copy lives in `src/content/*.ts` and is validated at build time against the schemas in `src/domain/schemas.ts`. To add a job, project, skill or article, edit the matching content file — no component changes needed. A schema violation fails the build.

## Run locally

### 1. Prerequisites

- **Node.js 18.18+** (recommended: Node 20 LTS or newer)
- **npm** (ships with Node)

Check your versions:

```bash
node -v
npm -v
```

### 2. Install dependencies

From the project root:

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

Then open **http://localhost:3000** in your browser. The dev server:
- hot-reloads on file changes (Turbopack)
- validates content against the Zod schemas on import — schema or type errors surface in the terminal and the browser overlay

The dev server also downloads the Geist font from Google Fonts on first run, so it needs internet access.

### 4. Production build (optional)

```bash
npm run build   # typecheck + lint + optimized static build
npm start       # serve the production build at http://localhost:3000
```

`npm start` serves the already-built output — run `npm run build` again after any code/content change.

### 5. Quality checks

```bash
npm run lint    # ESLint
```

## Commands

```bash
npm install     # install dependencies
npm run dev     # local dev server (http://localhost:3000)
npm run lint    # eslint
npm run build   # production build (typecheck + lint + static prerender)
npm start       # serve production build
```

## Notes

- `src/content/site.ts` holds the canonical site URL — update `url` to your real domain before going live (also powers `metadataBase`).
- The resume CTA currently points to LinkedIn. To serve a downloadable PDF, drop the file at `public/resume.pdf` and set `resumeUrl` in `src/content/profile.ts` to `/resume.pdf`.
