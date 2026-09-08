import { ProfileSchema } from "@/domain/schemas";

export const profile = ProfileSchema.parse({
  name: "Yustar Pramudana",
  firstName: "Yustar",
  title: "Senior Full-Stack & Mobile Engineer",
  positioning:
    "10+ years shipping banking-grade backends and AI-native products across Web, Android & iOS.",
  location: "Medan, Indonesia",
  availability:
    "Open to Senior / Lead Full-Stack, Mobile & AI-Native roles · Global Remote · ID, SG, MY, JP, SA",
  resumeUrl: "https://www.linkedin.com/in/yustar-pramudana/",
  areaFocus: [
    "Android · Kotlin + Jetpack Compose",
    "iOS · SwiftUI",
    "Web · React / TypeScript",
    "Backend · Deno / Supabase / .NET / Java",
    "AI-Native Architecture · MCP / OpenAPI",
  ],
  about: [
    "Full-stack & mobile engineer (10+ years) with a dual background: enterprise backend experience in banking (.NET C#, Java) combined with modern AI-native product development across Web, Android, and iOS.",
    "I design and deliver software where AI models and autonomous agents (Claude Code, Cursor, Opencode) are built directly into the architectural fabric — backed by deterministic guardrails, clean domain layers, and strict contract typing.",
    "The result: enterprise-grade backend discipline with AI-accelerated workflows, shipping production software at ~3x velocity without compromising architectural rigor.",
  ],
  keywords: [
    "Senior Full-Stack Engineer",
    "Senior Mobile Engineer",
    "Android Engineer",
    "iOS Engineer",
    "Kotlin",
    "Java",
    "Swift",
    "Jetpack Compose",
    "SwiftUI",
    "React",
    "TypeScript",
    "Supabase",
    "OpenAPI",
    "MCP",
    "AI Agents",
    "Clean Architecture",
  ],
});
