import { Eyebrow, Section, SectionTitle } from "@/components/ui";
import type { SuccessStory } from "@/domain/schemas";

export function SuccessStories({
  successStories,
}: {
  successStories: SuccessStory[];
}) {
  return (
    <Section id="stories" className="border-t border-line/60 bg-panel/40">
      <Eyebrow>Success Stories</Eyebrow>
      <SectionTitle>Proof, not just job descriptions</SectionTitle>
      <p className="mt-3 max-w-2xl text-slate-400">
        Every story follows the same structure — the problem, what I did, and the
        outcome. This is how I actually work.
      </p>

      <div className="mt-12 space-y-5">
        {successStories.map((story, index) => (
          <article
            key={story.title}
            className="rounded-2xl border border-line bg-panel p-6 sm:p-8"
          >
            <div className="flex items-start gap-5">
              <span className="hidden font-mono text-4xl font-bold leading-none text-line sm:block">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {story.title}
                </h3>

                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  <div>
                    <h4 className="font-mono text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                      The problem
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {story.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                      What I did
                    </h4>
                    <ul className="mt-2 space-y-2">
                      {story.action.map((step, i) => (
                        <li
                          key={i}
                          className="flex gap-2.5 text-sm leading-relaxed text-slate-400"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-mono text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                      Outcome
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {story.result}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {story.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line bg-panel2 px-3 py-1 font-mono text-[11px] text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
