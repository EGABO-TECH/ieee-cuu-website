type PolicySection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export function PolicyPage({
  title,
  summary,
  effectiveDate,
  sections,
}: {
  title: string;
  summary: string;
  effectiveDate: string;
  sections: PolicySection[];
}) {
  return (
    <main className="min-h-screen bg-[#f5f5f1] px-4 pb-20 pt-28 text-slate-900 sm:px-8 sm:pt-36">
      <header className="mx-auto max-w-5xl border-b border-slate-300 pb-9 sm:pb-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0d5b8f]">
          IEEE CUU Student Branch / Policies
        </p>
        <h1 className="mt-5 font-serif text-4xl font-bold leading-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-muted sm:text-lg">
          {summary}
        </p>
        <p className="mt-6 text-sm text-slate-600">
          Effective date: <time dateTime="2026-09-27">{effectiveDate}</time>
        </p>
      </header>

      <div className="mx-auto mt-10 grid max-w-5xl gap-10 lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-16">
        <nav aria-label="On this page" className="h-fit lg:sticky lg:top-28">
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
            On this page
          </h2>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3 lg:grid-cols-1">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-sm leading-6 text-slate-700 underline decoration-slate-300 underline-offset-4 transition hover:text-[#0d5b8f]"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <article className="min-w-0">
          {sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-28 border-b border-slate-200 py-7 first:pt-0 last:border-b-0"
            >
              <p className="text-xs font-semibold tabular-nums text-[#0d5b8f]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-2 font-serif text-2xl font-semibold leading-tight text-ink">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4 text-[0.97rem] leading-7 text-slate-700">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className="list-disc space-y-2 pl-5 marker:text-[#0d5b8f]">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </article>
      </div>
    </main>
  );
}