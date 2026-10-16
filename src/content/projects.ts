import { ProjectSchema } from "@/domain/schemas";

export const projects = [
  ProjectSchema.parse({
    name: "Cross-platform Marketplace",
    summary:
      "End-to-end marketplace shipped across iOS, Android, and Web from a single OpenAPI + design-token source of truth.",
    detail:
      "A custom build pipeline generates native Swift, Kotlin and React code from centralized contracts — the project that became my AI-native monorepo blueprint.",
    tech: ["SwiftUI", "Jetpack Compose", "React", "Supabase", "Deno", "OpenAPI", "Airwallex"],
    featured: true,
    private: true,
    owner: "client",
  }),
  ProjectSchema.parse({
    name: "Scale-invariant facial search",
    summary:
      "Facial search using Google Cloud Vision plus hand-designed geometric scoring (inter-eye landmarks + exponential decay).",
    detail:
      "Matches faces across photos regardless of scale or distance in frame, backed by an AI processing workflow.",
    tech: ["Google Vision API", "TypeScript", "Deno", "Supabase"],
    featured: true,
    private: true,
    owner: "client",
  }),
  ProjectSchema.parse({
    name: "MayaAgentJob Web Portal",
    summary:
      "React admin dashboard for Maya, an AI career agent — job search with AI-scored matches, category filters, and a candidate profile manager.",
    detail:
      "Desktop companion to the native iOS and Android clients, sharing synchronized domain contracts with the Supabase backend.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router", "Supabase"],
    url: "https://github.com/yuzutaru/mayaagentjob-web",
    featured: false,
    private: false,
    owner: "personal",
  }),
  ProjectSchema.parse({
    name: "Yustar Portfolio",
    summary:
      "This single-page portfolio — Next.js 15 App Router with Zod-validated content contracts and an embedded Gemini chatbot (Aira).",
    detail:
      "All copy lives in schema-validated data files that fail the build on violation; the chatbot grounds its answers in that content instead of a vector DB.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS v4", "Zod", "Vercel AI SDK", "Gemini"],
    url: "https://github.com/yuzutaru/yustar-portfolio",
    featured: false,
    private: false,
    owner: "personal",
  }),
  ProjectSchema.parse({
    name: "Levela",
    summary:
      "Cross-platform mobile app — Android in Kotlin + Jetpack Compose and iOS in SwiftUI + SwiftData.",
    tech: ["Kotlin", "Jetpack Compose", "SwiftUI", "SwiftData", "Android", "iOS"],
    url: "https://github.com/yuzutaru/levela",
    featured: false,
    private: false,
    owner: "personal",
  }),
  ProjectSchema.parse({
    name: "Lapor Bot",
    summary:
      "WhatsApp activity-tracking bot in Go — self-reporting, streak leaderboards, and a web dashboard.",
    detail:
      "Built on whatsmeow with SQLite persistence; tracks daily group check-ins like '30 Days of Sweat'.",
    tech: ["Go", "whatsmeow", "SQLite", "WhatsApp"],
    url: "https://github.com/swegrowthid/lapor-bot",
    featured: false,
    private: false,
    owner: "personal",
  }),
  ProjectSchema.parse({
    name: "Dev Knowledge Base",
    summary:
      "Centralized, multi-platform knowledge base of architectural patterns, configs, and AI integrations.",
    detail:
      "A reference/boilerplate sandbox covering Web, iOS, Android, Supabase backend, and Gemini workflows.",
    tech: ["React", "TypeScript", "SwiftUI", "Jetpack Compose", "Supabase", "Gemini"],
    url: "https://github.com/yuzutaru/dev-knowledge-base",
    featured: false,
    private: false,
    owner: "personal",
  }),
];
