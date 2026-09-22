import { communities } from "@/lib/data";
import { SectionHead } from "./SectionHead";

export function Communities() {
  return (
    <section className="bg-bg py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          kicker="For computing students"
          title="Technical communities to go deeper"
          body="IEEE organises technical activity through Societies and Councils. Here are the ones most relevant to computing, software and data at CUU."
        />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {communities.map((c) => (
            <div key={c.name} className="flex items-baseline justify-between gap-4 bg-surface p-5">
              <h4 className="text-sm font-semibold text-white">{c.name}</h4>
              <span className="text-right text-xs text-muted">{c.focus}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
