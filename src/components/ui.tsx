import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-5xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 font-mono text-xs lowercase tracking-wider text-accent">
      <span className="text-accent-soft">$</span> {children}
    </p>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
      <span className="text-accent">{"// "}</span>
      {children}
    </h2>
  );
}

export function Terminal({
  title = "~/yustar — zsh",
  children,
  className = "",
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border border-line bg-panel/80 shadow-[0_0_40px_-12px_rgba(45,212,191,0.25)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-line bg-panel2 px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        </span>
        <span className="ml-2 font-mono text-xs text-slate-500">{title}</span>
      </div>
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-20 sm:py-28 ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center border border-line bg-panel2 px-3 py-1 font-mono text-[11px] text-slate-400">
      {children}
    </span>
  );
}

export function ArrowLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-soft"
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-0.5"
      >
        -&gt;
      </span>
    </a>
  );
}
