import { CalendarDays, ArrowUpRight } from "lucide-react";
import { Eyebrow, Section, SectionTitle } from "@/components/ui";
import { formatMonthYear } from "@/lib/format";
import type { Article } from "@/domain/schemas";

export function Writing({ articles }: { articles: Article[] }) {
  return (
    <Section id="writing" className="border-t border-line/60 bg-panel/40">
      <Eyebrow>Writing</Eyebrow>
      <SectionTitle>Articles &amp; thinking</SectionTitle>
      <p className="mt-3 max-w-2xl text-slate-400">
        Practical breakdowns from the trenches — not just code, but the why.
      </p>

      <ul className="mt-10 space-y-3">
        {articles.map((article) => (
          <li key={article.url}>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 rounded-2xl border border-line bg-panel p-5 transition-colors hover:border-accent/40 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="text-base font-medium text-slate-200 transition-colors group-hover:text-white">
                  {article.title}
                </h3>
                <p className="mt-1 flex items-center gap-4 font-mono text-xs text-slate-500">
                  <span>{article.platform}</span>
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays className="h-3 w-3" aria-hidden="true" />
                    {formatMonthYear(article.date)}
                  </span>
                </p>
              </div>
              <ArrowUpRight
                className="h-5 w-5 shrink-0 text-slate-500 transition-colors group-hover:text-accent"
                aria-hidden="true"
              />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
