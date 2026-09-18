import {
  articles,
  profile,
  projects,
  roles,
  skillGroups,
  successStories,
} from "@/content";

export function buildKnowledgeBase(): string {
  const sections: string[] = [];

  sections.push(
    [
      `# ${profile.name} — Knowledge Base`,
      "",
      `- Title: ${profile.title}`,
      `- Positioning: ${profile.positioning}`,
      `- Location: ${profile.location}`,
      `- Availability: ${profile.availability}`,
      `- Focus areas: ${profile.areaFocus.join("; ")}`,
      `- Keywords: ${profile.keywords.join(", ")}`,
      "",
      "## About",
      ...profile.about.map((paragraph) => `- ${paragraph}`),
    ].join("\n"),
  );

  sections.push(
    [
      "## Highlights",
      ...profile.highlights.map((highlight) => `- **${highlight.title}:** ${highlight.text}`),
    ].join("\n"),
  );

  sections.push(
    [
      "## Skills",
      ...skillGroups.map((group) => `- **${group.category}:** ${group.items.join(", ")}`),
    ].join("\n"),
  );

  sections.push(
    [
      "## Experience",
      ...roles.flatMap((role) => {
        const meta = [
          role.employmentType,
          `${role.start} → ${role.end}`,
          role.location,
          role.workModel,
          role.client ? `Client: ${role.client}` : null,
        ]
          .filter(Boolean)
          .join(" | ");

        return [
          `### ${role.company} — ${role.role}`,
          `- ${meta}`,
          role.summary,
          ...role.bullets.map((bullet) => `- ${bullet}`),
          `- Skills: ${role.skills.join(", ")}`,
          role.storeUrl ? `- App store: ${role.storeUrl}` : null,
        ].filter((line): line is string => Boolean(line));
      }),
    ].join("\n"),
  );

  sections.push(
    [
      "## Success stories",
      ...successStories.flatMap((story) => [
        `### ${story.title}`,
        `- Problem: ${story.problem}`,
        ...story.action.map((step) => `- Action: ${step}`),
        `- Result: ${story.result}`,
        `- Tags: ${story.tags.join(", ")}`,
      ]),
    ].join("\n"),
  );

  sections.push(
    [
      "## Projects",
      ...projects.flatMap((project) => {
        const labels = [
          project.owner,
          project.featured ? "featured" : "other",
          project.private ? "private" : "public",
        ];
        return [
          `### ${project.name} (${labels.join(", ")})`,
          project.summary,
          project.detail,
          `- Tech: ${project.tech.join(", ")}`,
          project.url ? `- URL: ${project.url}` : null,
        ].filter((line): line is string => Boolean(line));
      }),
    ].join("\n"),
  );

  if (articles.length > 0) {
    sections.push(
      [
        "## Writing",
        ...articles.map(
          (article) =>
            `- ${article.title} — ${article.platform} (${article.date}): ${article.url}`,
        ),
      ].join("\n"),
    );
  }

  return sections.join("\n\n");
}
