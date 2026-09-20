# AGENTS.md

Context for AI agents (and humans) working in this repo. See `README.md` for the full user-facing guide.

## What this is

Single-page portfolio for **Yustar Pramudana** (Senior Full-Stack & Mobile Engineer). Next.js 15 App Router, React 19, TypeScript (strict), Tailwind CSS v4, Zod content contracts, and an embedded Gemini chatbot ("Aira") via the Vercel AI SDK.

## Commands

```bash
npm install     # install dependencies
npm run dev     # dev server at http://localhost:3000 (Turbopack)
npm run lint    # ESLint
npm run build   # typecheck + lint + optimized static build
npm start       # serve the production build
```

There is **no test runner**. Verify changes with `npm run lint`, `npm run build`, and manual checks (see "Verifying the chatbot").

## Architecture

```
src/
  app/          routes, metadata, layout — framework wiring only
    api/chat/   POST /api/chat — the Aira chatbot endpoint
  content/      typed data files — the single source of truth for all copy
  domain/       Zod schemas + inferred types (no React)
  components/   presentational UI, data passed in via props
  lib/          pure helpers (date formatting, chat knowledge base)
```

**Dependency flow is one-way:** `domain ← content ← components ← app`. Never make `content/` or `domain/` import from `components/` or `app/`. Components never read `src/content/*` directly — `app/page.tsx` imports content and passes it down as props.

- `src/app/page.tsx` composes the sections: `Nav`, `Hero`, `About`, `Skills`, `Experience`, `SuccessStories`, `Projects`, `Writing`, `Contact`, `Footer`, then the floating `<Chat />`.
- `src/components/ui.tsx` holds shared primitives (`Container`, `Section`, `SectionTitle`, `Terminal`, `Tag`, `Eyebrow`, `ArrowLink`).
- `src/components/Chat.tsx` is the **only** client component (`"use client"`).
- Theme tokens (`accent`, `panel`, `panel2`, `line`, `ink`, fonts, `animate-blink`) live in `src/app/globals.css` under `@theme`.

## Editing content

All copy is in `src/content/*.ts`, validated at build time against `src/domain/schemas.ts`. To add a job, project, skill, or article, edit the matching content file — no component changes needed. A schema violation fails the build. New content types must be added to `src/domain/schemas.ts` and re-exported from `src/content/index.ts`.

## Aira chatbot

- **UI:** `src/components/Chat.tsx` — floating button (bottom-right) + panel, `useChat` from `@ai-sdk/react`, posts to `/api/chat`.
- **Route:** `src/app/api/chat/route.ts` — validates input, rate-limits, runs the relevance pre-filter, then streams the answer.
- **Grounding:** `src/lib/chat-context.ts` serializes `src/content/*` into a knowledge base injected into the system prompts. No vector DB.
- **Model:** `MODEL` constant in `src/app/api/chat/route.ts` (currently `gemini-3.6-flash`). Google retires models; a retired model makes **every** message return the deflection. If that happens, check the server log for `[chat] relevance filter failed:` and bump `MODEL` to a current one.
- **Guardrails:** (1) pre-filter classifier deflects off-topic messages, (2) answer system prompt restricts to the knowledge base and blocks injection, (3) Gemini safety settings. If the pre-filter errors it **fails open** (logs + treats as on-topic); the answer prompt is the backstop.
- **Limits:** per-IP 12 req/min, 500-char message cap, max 20 messages.

### Environment

`GOOGLE_GENERATIVE_AI_API_KEY` is read automatically by `@ai-sdk/google`. Put it in `.env.local` or `.env` (both gitignored). Get a key at https://aistudio.google.com/apikey. Nothing passes the key in code.

### Verifying the chatbot

With `npm run dev` running:

```bash
curl -N http://localhost:3000/api/chat \
  -H 'content-type: application/json' \
  -d '{"messages":[{"id":"1","role":"user","parts":[{"type":"text","text":"What does Yustar do?"}]}]}'
```

On-topic → streamed grounded answer; off-topic / injection → canned deflection; >12 req/min → `429`. To validate a key/model directly without the app:

```bash
curl -sS -o /dev/null -w '%{http_code}\n' \
  -X POST "https://generativelanguage.googleapis.com/v1beta/models/<model>:generateContent?key=$GOOGLE_GENERATIVE_AI_API_KEY" \
  -H 'content-type: application/json' -d '{"contents":[{"parts":[{"text":"say ok"}]}]}'
```

## Conventions

- **No code comments** unless explicitly requested.
- TypeScript strict; prefer the inferred Zod types from `src/domain/schemas.ts`.
- Tailwind utility classes with the theme tokens; match the existing CRT/terminal aesthetic.
- Accessibility is expected (labels, `aria-*`, focus states).
- Commit messages use `Type(scope): subject` — `Feat`, `Fix`, `Progress`, `Setup`.
