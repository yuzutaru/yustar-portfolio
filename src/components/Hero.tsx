import { MapPin, ArrowUpRight } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/BrandIcons";
import type { Profile, SocialLink } from "@/domain/schemas";

export function Hero({
  profile,
  socials,
}: {
  profile: Profile;
  socials: SocialLink[];
}) {
  const linkedin = socials.find((s) => s.platform === "linkedin");
  const github = socials.find((s) => s.platform === "github");

  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3.5 py-1.5 text-xs text-slate-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open to Senior / Lead & AI-Native roles
        </p>

        <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
          {profile.name}
          <span className="mt-3 block bg-gradient-to-r from-accent via-accent-soft to-cyan-300 bg-clip-text text-transparent">
            {profile.title}
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          {profile.positioning}
        </p>

        <p className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-slate-500" aria-hidden="true" />
            {profile.location}
          </span>
          <span className="inline-flex items-center gap-1.5 text-emerald-400">
            {profile.availability}
          </span>
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {linkedin ? (
            <a
              href={linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-soft px-6 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
            >
              <LinkedinIcon className="h-4 w-4" />
              Let&apos;s connect
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : null}
          {github ? (
            <a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-600 hover:bg-panel2"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          ) : null}
        </div>

        <ul className="mt-10 flex max-w-2xl flex-wrap gap-2" aria-label="Focus areas">
          {profile.areaFocus.map((area) => (
            <li
              key={area}
              className="rounded-full border border-line bg-panel px-3.5 py-1.5 font-mono text-xs text-slate-300"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
