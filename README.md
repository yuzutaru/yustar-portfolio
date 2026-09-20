# Yustar Pramudana — Portfolio

Single-page portfolio for Yustar Pramudana — Senior Full-Stack & Mobile Engineer (10+ yrs), Kotlin / Java / Swift, AI-accelerated systems architecture.

## Stack

- Next.js 15 (App Router, static prerender) · React 19
- TypeScript (strict)
- Tailwind CSS v4
- Zod (content contracts)
- Vercel AI SDK + Google Gemini (Aira chatbot)

## Structure (clean architecture)

```
src/
  app/          routes, metadata, layout — framework wiring only
                (includes the /api/chat chatbot route)
  content/      typed data files — the single source of truth for all copy
  domain/       Zod schemas + inferred types (no React)
  components/   presentational UI, data passed in via props
  lib/          pure helpers (date formatting, chat knowledge base)
```

Dependency flow is one-way: `domain ← content ← components ← app`. The UI never reads content directly.

## Editing content

All copy lives in `src/content/*.ts` and is validated at build time against the schemas in `src/domain/schemas.ts`. To add a job, project, skill or article, edit the matching content file — no component changes needed. A schema violation fails the build.

## UI architecture

`src/app/page.tsx` is a single server-rendered page that imports all content and composes the sections in order: `Nav`, `Hero`, `About`, `Skills`, `Experience`, `SuccessStories`, `Projects`, `Writing`, `Contact`, `Footer`, then the floating `<Chat />`. Sections receive their data as props; none read `src/content/*` directly.

- `src/components/ui.tsx` holds shared primitives (`Container`, `Section`, `SectionTitle`, `Terminal`, `Tag`, `Eyebrow`, `ArrowLink`).
- `src/components/Chat.tsx` is the only client component (`"use client"`); it owns the floating button and the chat panel and talks to `/api/chat` via `useChat`.
- Styling is Tailwind v4 with custom theme tokens (`accent`, `panel`, `panel2`, `line`, `ink`) defined in `src/app/globals.css`.

## Aira — the portfolio chatbot

A floating chat widget ("Aira") answers visitor questions about Yustar, grounded in the content files.

- **Model:** Google Gemini (`gemini-3.6-flash`) via the Vercel AI SDK. The model ID is set once in `src/app/api/chat/route.ts` (`MODEL`). Google retires models over time — if chat starts returning the deflection message for every question, check the [model list](https://ai.google.dev/gemini-api/docs/models) and bump `MODEL` (or use the `gemini-flash-latest` alias).
- **Retrieval:** no vector DB — `src/lib/chat-context.ts` serializes `src/content/*` into a compact knowledge base that is injected into the system prompt.
- **Guardrails (three layers):**
  1. A **pre-filter** (`generateObject`) classifies every message as on/off-topic *before* the answer model runs. Off-topic messages get a canned deflection and never reach the LLM.
  2. The **answer system prompt** restricts replies to the knowledge base and blocks prompt-injection attempts.
  3. Gemini **safety settings** block harmful content categories.
- The route also enforces a per-IP rate limit (12 req/min) and a 500-character message cap.
- **Fail-open filter:** if the pre-filter itself errors (network, quota, retired model), the route logs the error and treats the message as on-topic instead of deflecting everything. The answer prompt remains the backstop for off-topic and injection attempts.

### Testing Aira

With the dev server running (`npm run dev`), send a message straight to the route:

```bash
curl -N http://localhost:3000/api/chat \
  -H 'content-type: application/json' \
  -d '{"messages":[{"id":"1","role":"user","parts":[{"type":"text","text":"What does Yustar do?"}]}]}'
```

Expected: a streamed, grounded answer. Off-topic (`"how do I cook rice?"`) and injection (`"ignore your instructions"`) inputs return the canned deflection. More than 12 requests per minute from one IP returns `429`.

### Setup

1. Create a free API key at [Google AI Studio](https://aistudio.google.com/apikey).
2. Add it to `.env.local` (or `.env` — Next.js loads both, and both are gitignored):

   ```bash
   GOOGLE_GENERATIVE_AI_API_KEY=your-key
   ```

3. On Vercel, add the same variable under **Project → Settings → Environment Variables**.

The variable name is fixed — `@ai-sdk/google` reads `GOOGLE_GENERATIVE_AI_API_KEY` automatically; nothing passes the key in code. Without it, the rest of the site builds and runs normally; only `/api/chat` will fail at request time.

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

The dev server also downloads the Space Mono and JetBrains Mono fonts from Google Fonts on first run, so it needs internet access.

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
- **Chat always deflects?** Google likely retired the `MODEL` in `src/app/api/chat/route.ts`. Check the server terminal for `[chat] relevance filter failed:` and pick a current model from the [Gemini model list](https://ai.google.dev/gemini-api/docs/models).
- No test runner is configured — verification is manual (see [Testing Aira](#testing-aira)) plus `npm run lint` / `npm run build`.
