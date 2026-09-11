import { Building2, Briefcase } from "lucide-react";
import { Eyebrow, Section, SectionTitle, Tag } from "@/components/ui";
import { PlayStoreIcon } from "@/components/BrandIcons";
import { ScreenshotGallery } from "@/components/ScreenshotGallery";
import { formatRange } from "@/lib/format";
import type { Role } from "@/domain/schemas";

export function Experience({ roles }: { roles: Role[] }) {
  return (
    <Section id="experience">
      <Eyebrow>Experience</Eyebrow>
      <SectionTitle>Where I&apos;ve shipped</SectionTitle>
      <p className="mt-3 max-w-2xl text-slate-400">
        A decade across banking, health tech and international product teams —
        Jakarta, Singapore, the Philippines, and remote.
      </p>

      <ol className="mt-12 space-y-10">
        {roles.map((role) => {
          const range = formatRange(role.start, role.end);
          return (
            <li key={`${role.company}-${role.role}`} className="relative pl-6 sm:pl-0">
              <span
                aria-hidden="true"
                className="absolute left-0 top-1.5 hidden h-full w-px bg-gradient-to-b from-accent/60 to-line sm:block"
              />
              <div className="sm:grid sm:grid-cols-[11rem_1fr] sm:gap-8">
                <div className="mb-2 font-mono text-xs uppercase tracking-wider text-slate-500 sm:mb-0 sm:pt-1.5">
                  {range}
                </div>

                <div className="rounded-2xl border border-line bg-panel p-5 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {role.role}
                      </h3>
                      <p className="mt-0.5 flex items-center gap-1.5 text-sm text-slate-400">
                        <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                        {role.company}
                        {role.client ? (
                          <span className="text-slate-500">· for {role.client}</span>
                        ) : null}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 rounded-full border border-line bg-panel2 px-2.5 py-1 text-[11px] text-slate-400">
                        <Briefcase className="h-3 w-3" aria-hidden="true" />
                        {role.employmentType}
                      </span>
                      <span className="rounded-full border border-line bg-panel2 px-2.5 py-1 text-[11px] text-slate-400">
                        {role.workModel}
                      </span>
                      {role.storeUrl ? (
                        <a
                          href={role.storeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[11px] text-accent transition-colors hover:bg-accent/20"
                        >
                          <PlayStoreIcon className="h-3 w-3" aria-hidden="true" />
                          {role.storeLabel ?? "Play Store"}
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-300">
                    {role.summary}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {role.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex gap-2.5 text-sm leading-relaxed text-slate-400"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {role.skills.map((skill) => (
                      <Tag key={skill}>{skill}</Tag>
                    ))}
                  </div>

                  {role.screenshots?.length ? (
                    <ScreenshotGallery
                      screenshots={role.screenshots}
                      altPrefix={role.company}
                    />
                  ) : null}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
