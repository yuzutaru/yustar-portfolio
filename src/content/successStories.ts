import { SuccessStorySchema } from "@/domain/schemas";

export const successStories = [
  SuccessStorySchema.parse({
    title: "One monorepo, four platforms, ~3x shipping velocity",
    problem:
      "Building backend, iOS, Android and web apps meant manually translating the exact same logic into three different languages. Repetitive boilerplate was the bottleneck — and AI agents without strict boundaries hallucinated diverging data models and layouts across platforms.",
    action: [
      "Centralized sources of truth: one OpenAPI spec for every API, and platform-neutral design tokens for the UI.",
      "Declared iOS the design benchmark, then made Android and web mirror it 1:1 instead of guessing.",
      "Built a custom pipeline that auto-generates native Swift, Kotlin and React code from those contracts.",
      "Enforced an agent workflow: schema → types → iOS → Android → web.",
    ],
    result:
      "Zero visual drift, compile-time safety across platform boundaries, and time spent building features instead of writing boilerplate network code.",
    tags: ["Monorepo", "OpenAPI", "Codegen", "iOS · Android · Web"],
  }),
  SuccessStorySchema.parse({
    title: "Custom MCP servers that keep multi-language code honest",
    problem:
      "Coordinating an AI-assisted monorepo across Kotlin, Swift and TypeScript: contract drift between platforms is invisible until runtime.",
    action: [
      "Architected custom Model Context Protocol (MCP) servers to give AI agents live project context.",
      "Automated multi-language client codegen (Kotlin / Swift / TS) from a single contract source.",
      "Enforced monorepo contract integrity across platforms at generation time.",
    ],
    result:
      "AI agents produce contract-correct clients by default — cross-platform drift is eliminated before code review.",
    tags: ["MCP", "AI Agents", "Contract-first", "Monorepo"],
  }),
  SuccessStorySchema.parse({
    title: "Scale-invariant facial search engine",
    problem:
      "Matching faces across photos at different scales and distances — naive similarity fails as the face size in the frame changes.",
    action: [
      "Designed a facial search engine on Google Cloud Vision with a hand-built geometric scoring algorithm.",
      "Scored inter-eye landmarks with exponential-decay weighting to stay invariant to face scale.",
    ],
    result:
      "A working search engine that matches faces reliably regardless of how far the subject was from the camera.",
    tags: ["Computer Vision", "Google Vision API", "Algorithms"],
  }),
  SuccessStorySchema.parse({
    title: "Marketplace payments with Airwallex",
    problem:
      "A cross-platform marketplace needed real-money flows: secure payout signing, regulated onboarding, and no double-charging on retries.",
    action: [
      "Integrated Airwallex marketplace payments across the stack.",
      "Implemented HMAC-SHA256 signature verification for webhook authenticity.",
      "Built KYC onboarding and idempotent event handling so retries never double-process.",
    ],
    result:
      "Payment processing that is authenticable, compliant, and safe under network retries — end to end.",
    tags: ["Payments", "Airwallex", "Webhooks", "Security"],
  }),
  SuccessStorySchema.parse({
    title: "Mission-critical banking backends",
    problem:
      "National-scale banking apps (OCBC NISP, BNI, BRI) demand security, high availability, and strict compliance — mistakes are not an option.",
    action: [
      "Shipped and maintained .NET C# / Java / SQL backends for FX transactions and mobile banking.",
      "Built a secure JS↔native bridge with encrypted SSL communication for a hybrid banking app.",
      "Researched biometric authentication (fingerprint & face) with bank security teams.",
    ],
    result:
      "Years of running mission-critical financial infrastructure trusted by millions of users across Indonesian banks.",
    tags: ["Banking", "Java", ".NET C#", "Security", "Compliance"],
  }),
  SuccessStorySchema.parse({
    title: "Resilience: from layoff to rebuilding like a beginner",
    problem:
      "After a layoff, interviews exposed gaps in DSA and system design fundamentals — the very things senior interviews test under pressure.",
    action: [
      "Reset with a structured daily training schedule across DSA patterns and system design.",
      "Retrained fundamentals intentionally instead of relying on past experience.",
      "Upskilled into the shifting market: cross-platform and AI-assisted workflows.",
    ],
    result:
      "A sharper, more disciplined and more resilient engineer — experience renewed into a flame instead of resting on old titles.",
    tags: ["Growth mindset", "DSA", "System Design", "Discipline"],
  }),
];
