import { ProfileSchema } from "@/domain/schemas";

export const profile = ProfileSchema.parse({
  name: "Yustar Pramudana",
  firstName: "Yustar",
  title: "Senior Mobile & Full-Stack Engineer",
  positioning:
    "10+ years building mobile-first startup apps and AI-native products, grounded in banking-grade backend engineering.",
  location: "Medan, Indonesia",
  availability:
    "Open to Senior / Lead Mobile, Full-Stack & AI-Native roles · Global Remote · ID, SG, MY, JP, SA",
  avatar: "/me.jpg",
  heroAvatar: "/avatar.jpg",
  resumeUrl: "https://www.linkedin.com/in/yustar-pramudana/",
  areaFocus: [
    "Android · Kotlin + Jetpack Compose",
    "iOS · SwiftUI",
    "Web · React / TypeScript",
    "Backend · Deno / Supabase / .NET / Java",
    "AI-Native Architecture · MCP / OpenAPI",
  ],
  about: [
    "Mobile & full-stack engineer (10+ years) specializing in mobile-first startup delivery and modern AI-native products across Android, iOS, and Web — backed by enterprise backend experience in banking (Java, .NET C#).",
    "I design and deliver software where AI models and autonomous agents (Claude Code, Cursor, Kilo, Opencode) are built directly into the architectural fabric — backed by deterministic guardrails, clean domain layers, and strict contract typing.",
    "I combine enterprise-grade backend discipline with AI-accelerated workflows to ship production software at 3x velocity without compromising architectural rigor.",
  ],
  highlights: [
    {
      title: "Modern Full-Stack & Mobile",
      text: "End-to-end delivery across React, Kotlin (Android), and Swift (iOS) driven by a unified OpenAPI spec, Supabase/PostgreSQL backends (RLS, RPCs), and Deno Edge Functions.",
    },
    {
      title: "Custom Agent Tooling & MCP",
      text: "Architected custom Model Context Protocol (MCP) servers to automate multi-language client codegen (Kotlin/Swift/TS) and enforce monorepo contract integrity across platforms.",
    },
    {
      title: "Applied Computer Vision & ML",
      text: "Designed a scale-invariant facial search engine using Google Cloud Vision and hand-designed geometric scoring algorithms (inter-eye landmarks + exponential decay weighting).",
    },
    {
      title: "Payments & Webhooks",
      text: "Integrated Airwallex marketplace payments featuring HMAC-SHA256 signature verification, KYC onboarding, and idempotent event handling.",
    },
    {
      title: "Enterprise & Banking Backends",
      text: "Proven track record in banking environments managing mission-critical Java, .NET C#, and SQL backend infrastructure built for security, high availability, and compliance.",
    }
  ],
  techStack: [
    {
      category: "Languages & Backends",
      items: [
        "Kotlin",
        "Swift",
        "TypeScript",
        "Python",
        "Java",
        ".NET C#",
        "SQL",
        "Deno",
        "Supabase",
        "PostgreSQL",
        "REST/OpenAPI",
      ],
    },
    {
      category: "Mobile & Web",
      items: [
        "Jetpack Compose",
        "SwiftUI",
        "React",
        "Monorepo (pnpm/Turbo)",
      ],
    },
    {
      category: "AI & Agents",
      items: [
        "Custom MCP",
        "Google Vision API",
        "Gemini API",
        "Opencode",
        "Antigravity",
        "Claude Code",
        "Codex",
        "Cursor",
        "Kilo",
      ],
    }
  ],
  keywords: [
    "Senior Mobile & Full-Stack Engineer",
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
