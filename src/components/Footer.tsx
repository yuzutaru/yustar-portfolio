import type { SocialLink } from "@/domain/schemas";
import {
  GithubIcon,
  LinkedinIcon,
  GitlabIcon,
  MediumIcon,
} from "@/components/BrandIcons";

const ICONS = {
  linkedin: LinkedinIcon,
  github: GithubIcon,
  gitlab: GitlabIcon,
  medium: MediumIcon,
} as const;

export function Footer({
  socials,
}: {
  socials: SocialLink[];
}) {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-5 sm:flex-row sm:px-8">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Yustar Pramudana. Built with Next.js.
        </p>

        <div className="flex items-center gap-4">
          {socials.map((social) => {
            const Icon = ICONS[social.platform];
            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-slate-500 transition-colors hover:text-accent"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>

        <a href="#top" className="text-sm text-slate-500 transition-colors hover:text-white">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
