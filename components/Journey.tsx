import { journey } from "@/lib/data";
import { SectionHead } from "./SectionHead";

export function Journey() {
  return (
    <section id="branch" className="bg-paper py-24 text-ink">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          light
          kicker="The CUU Student Branch"
          title="A local starting point for a global journey."
          body="You don't need to know everything before you start. The Branch translates global IEEE opportunities into activities you can actually attend, build with, and grow from — one step at a time."
        />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {journey.map((s) => (
            <div key={s.step} className="bg-paper p-7">
              <div className="mb-4 font-display text-sm font-bold text-violet">{s.step}</div>
              <h3 className="mb-1.5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="text-sm text-ink/60">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
