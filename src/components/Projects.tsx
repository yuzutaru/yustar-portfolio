import { ExternalLink, Lock } from "lucide-react";
import { ArrowLink, Eyebrow, Section, SectionTitle } from "@/components/ui";
import type { Project } from "@/domain/schemas";

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <Section id="projects">
      <Eyebrow>Selected Work</Eyebrow>
      <SectionTitle>Projects</SectionTitle>
      <p className="mt-3 max-w-2xl text-slate-400">
        A mix of client work I led end-to-end and public experiments on GitHub.
        Client work is shared at a level that respects confidentiality.
      </p>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className={`flex flex-col rounded-2xl border p-6 transition-colors ${
              project.featured
                ? "border-accent/30 bg-gradient-to-b from-accent/[0.07] to-panel"
                : "border-line bg-panel hover:border-slate-600"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-white">
                {project.name}
              </h3>
              {project.private ? (
                <span
                  className="inline-flex items-center gap-1 rounded-full border border-line bg-panel2 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-slate-400"
                  title="Confidential client work"
                >
                  <Lock className="h-3 w-3" aria-hidden="true" />
                  {project.owner}
                </span>
              ) : null}
            </div>

            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              {project.summary}
            </p>
            {project.detail ? (
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {project.detail}
              </p>
            ) : null}

            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-panel2 px-2 py-1 font-mono text-[11px] text-slate-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.url ? (
              <div className="mt-auto pt-6">
                <ArrowLink href={project.url} external>
                  View on GitHub
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </ArrowLink>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
