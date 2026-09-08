import Image from "next/image";
import { Eyebrow, Section, SectionTitle, Tag } from "@/components/ui";
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
        <div className="space-y-4 lg:col-span-3">
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
          <div className="mt-4 grid grid-cols-2 gap-3">
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
      </div>

      <div className="mt-10 flex flex-wrap gap-2">
        {profile.keywords.map((keyword) => (
          <Tag key={keyword}>{keyword}</Tag>
        ))}
      </div>
    </Section>
  );
}
