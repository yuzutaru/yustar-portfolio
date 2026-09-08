import { Eyebrow, Section, SectionTitle } from "@/components/ui";
import type { SkillGroup } from "@/domain/schemas";

export function Skills({ skillGroups }: { skillGroups: SkillGroup[] }) {
  return (
    <Section id="skills" className="border-t border-line/60 bg-panel/40">
      <Eyebrow>Skills</Eyebrow>
      <SectionTitle>What I work with</SectionTitle>
      <p className="mt-3 max-w-2xl text-slate-400">
        Grouped by discipline — no fake proficiency bars. Depth is proven in the
        stories and experience below.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-line bg-panel p-5"
          >
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              {group.category}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-line/80 bg-panel2 px-2.5 py-1 text-xs text-slate-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
