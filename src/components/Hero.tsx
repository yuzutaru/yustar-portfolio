import Image from "next/image";
import { MapPin, ArrowUpRight } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/BrandIcons";
import { Container, Terminal } from "@/components/ui";
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
    <section id="top" className="relative pt-32 pb-10 sm:pt-40 sm:pb-16">
      <Container>
        <Terminal>
          <div className="p-6 sm:p-10">
            <p className="mb-8 font-mono text-xs text-slate-500">
              <span className="text-accent-soft">$</span> whoami
            </p>

            <div className="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-3xl">
                <p className="mb-5 inline-flex items-center gap-2 font-mono text-xs text-accent">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  online — open to Senior / Lead &amp; AI-Native roles
                </p>

                <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
                  {profile.name}
                  <span className="mt-3 block text-accent">
                    {profile.title}
                    <span
                      aria-hidden="true"
                      className="ml-1 inline-block h-[0.9em] w-[0.5ch] translate-y-[0.06em] animate-blink bg-accent align-baseline"
                    />
                  </span>
                </h1>
              </div>

              <div className="relative shrink-0 border-2 border-accent/50 bg-panel2 p-1.5">
                <Image
                  src={profile.heroAvatar}
                  alt={`${profile.name} portrait`}
                  width={144}
                  height={144}
                  priority
                  className="h-28 w-28 object-cover object-[center_20%] sm:h-36 sm:w-36"
                />
              </div>
            </div>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              {profile.positioning}
            </p>

            <p className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-slate-500" aria-hidden="true" />
                {profile.location}
              </span>
              <span className="inline-flex items-center gap-1.5 text-accent">
                {profile.availability}
              </span>
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {linkedin ? (
                <a
                  href={linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent-soft"
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
                  className="inline-flex items-center gap-2 border border-line bg-panel px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-accent/60 hover:text-white"
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
                  className="border border-line bg-panel px-3.5 py-1.5 font-mono text-xs text-slate-300"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </Terminal>
      </Container>
    </section>
  );
}
