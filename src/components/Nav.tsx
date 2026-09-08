"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { Profile, SocialLink } from "@/domain/schemas";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#stories", label: "Stories" },
  { href: "#projects", label: "Projects" },
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

export function Nav({
  profile,
  socials,
}: {
  profile: Profile;
  socials: SocialLink[];
}) {
  const [open, setOpen] = useState(false);
  const linkedIn = socials.find((s) => s.platform === "linkedin");

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-transparent backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="border-b border-line/60 bg-ink/70"
      >
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
          <a
            href="#top"
            className="font-mono text-sm font-semibold tracking-tight text-white"
          >
            <span className="text-accent">yp</span>.dev
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-accent to-accent-soft px-4 py-1.5 text-sm font-medium text-ink transition-opacity hover:opacity-90"
            >
              Resume
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 hover:bg-panel md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open ? (
          <div id="mobile-menu" className="border-t border-line bg-ink px-5 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-panel hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={linkedIn?.url ?? profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-full bg-gradient-to-r from-accent to-accent-soft px-4 py-2 text-center text-sm font-medium text-ink"
              >
                Resume
              </a>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
