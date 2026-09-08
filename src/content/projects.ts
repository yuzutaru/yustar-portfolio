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
    name: "Sosmed",
    summary:
      "Test harness for reels infinite scrolling and a short-video player with like and comment support.",
    tech: ["Kotlin", "Jetpack Compose"],
    url: "https://github.com/yuzutaru/Sosmed",
    featured: false,
    private: false,
    owner: "personal",
  }),
  ProjectSchema.parse({
    name: "PokemonApp_JetpackCompose",
    summary: "Pokémon app backed by a public API, built with Jetpack Compose.",
    tech: ["Kotlin", "Jetpack Compose", "REST API"],
    url: "https://github.com/yuzutaru/PokemonApp_JetpackCompose",
    featured: false,
    private: false,
    owner: "personal",
  }),
];
