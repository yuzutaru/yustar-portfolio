import Image from "next/image";
import { Eyebrow, Section, SectionTitle } from "@/components/ui";
import type { Profile } from "@/domain/schemas";

const STATS = [
  { value: "10+", label: "Years shipping software" },
  { value: "3", label: "National banks served" },
  { value: "5", label: "Platforms (Web · iOS · Android · API · AI)" },
  { value: "3", label: "Countries: ID, SG, PH (+ AU clients)" },
];

export function About({ profile }: { profile: Profile }) {
  return (
    <Section id="about">
      <Eyebrow>About</Eyebrow>
      <SectionTitle>Enterprise discipline. AI-native delivery.</SectionTitle>

      <div className="mt-8 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="space-y-4">
            {profile.about.map((paragraph, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-lg leading-relaxed text-slate-200"
                    : "leading-relaxed text-slate-400"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-line bg-panel p-4"
              >
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-xs leading-snug text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="overflow-hidden rounded-2xl border border-line bg-panel">
            <Image
              src={profile.avatar}
              alt={`${profile.name} portrait`}
              width={900}
              height={1600}
              className="aspect-[9/14] w-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Key Engineering Highlights
        </h3>
        <ul className="mt-5 space-y-4">
          {profile.highlights.map((highlight) => (
            <li
              key={highlight.title}
              className="rounded-2xl border border-line bg-panel/60 p-5"
            >
              <p className="font-semibold text-white">{highlight.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                {highlight.text}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* <div className="mt-12">
        <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Technical Stack
        </h3>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {profile.techStack.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-line bg-panel p-5"
            >
              <h4 className="text-sm font-semibold text-white">
                {group.category}
              </h4>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-line/80 bg-panel2 px-2 py-1 font-mono text-[11px] text-slate-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div> */}
    </Section>
  );
}
