import { SkillGroupSchema } from "@/domain/schemas";

export const skillGroups = [
  SkillGroupSchema.parse({
    category: "Languages & Backends",
    items: [
      "Kotlin",
      "Java",
      "Swift",
      "Python",
      "TypeScript",
      ".NET C#",
      "SQL",
      "Deno",
      "Supabase",
      "PostgreSQL",
      "REST / OpenAPI",
    ],
  }),
  SkillGroupSchema.parse({
    category: "Mobile",
    items: [
      "Android (Jetpack Compose)",
      "iOS (SwiftUI)",
      "React Native (Expo)",
      "Kotlin Coroutines / Flow",
      "RxJava",
      "Offline-first (Room, Realm)",
      "Health Connect API",
    ],
  }),
  SkillGroupSchema.parse({
    category: "Web & Frontend",
    items: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Monorepo (pnpm / Turbo)",
    ],
  }),
  SkillGroupSchema.parse({
    category: "AI & Agents",
    items: [
      "Custom MCP Servers",
      "AI-Assisted Development",
      "Claude Code",
      "Cursor",
      "Gemini / Antigravity",
      "Google Vision API",
      "OpenAPI-driven codegen pipelines",
    ],
  }),
  SkillGroupSchema.parse({
    category: "Engineering Practices",
    items: [
      "Clean Architecture",
      "Contract-first development",
      "Offline-first systems",
      "System Design",
      "CI / CD",
      "Git workflows",
    ],
  }),
];
