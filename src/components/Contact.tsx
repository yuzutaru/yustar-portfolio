import { ArrowUpRight } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  GitlabIcon,
  MediumIcon,
} from "@/components/BrandIcons";
import { Eyebrow, Section, SectionTitle } from "@/components/ui";
import type { Profile, SocialLink } from "@/domain/schemas";

const ICONS = {
  linkedin: LinkedinIcon,
  github: GithubIcon,
  gitlab: GitlabIcon,
  medium: MediumIcon,
} as const;

export function Contact({
  profile,
  socials,
}: {
  profile: Profile;
  socials: SocialLink[];
}) {
  const linkedin = socials.find((s) => s.platform === "linkedin");

  return (
    <Section id="contact">
      <div className="rounded-3xl border border-line bg-gradient-to-b from-panel to-ink p-8 sm:p-12">
        <Eyebrow>Contact</Eyebrow>
        <SectionTitle>Let&apos;s build something resilient</SectionTitle>
        <p className="mt-3 max-w-2xl leading-relaxed text-slate-400">
          I&apos;m open to senior / lead full-stack, mobile, and AI-native roles —
          globally remote, or based around ID, SG, MY, JP and Saudi Arabia.
          Reach out on any channel below.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {socials.map((social) => {
            const Icon = ICONS[social.platform];
            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-line bg-panel px-5 py-4 transition-colors hover:border-accent/40"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-panel2 text-slate-300 transition-colors group-hover:text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-white">
                    {social.label}
                  </span>
                  <span className="block truncate font-mono text-xs text-slate-500">
                    {social.handle}
                  </span>
                </span>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-slate-500 transition-colors group-hover:text-accent"
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-line pt-6">
          <p className="text-sm text-slate-400">
            Want the full timeline, education and references?
          </p>
          {linkedin ? (
            <a
              href={linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-accent/50 px-5 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/10"
            >
              Full profile on LinkedIn
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : null}
          <p className="text-sm text-slate-500">
            Availability: {profile.location} · {profile.availability}
          </p>
        </div>
      </div>
    </Section>
  );
}
