import { team } from "@/lib/data";
import { SectionHead } from "./SectionHead";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Team() {
  return (
    <section id="team" className="border-t border-white/5 bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          kicker="Who runs the Branch"
          title="Meet the CUU Student Branch team"
          body="The Branch runs on technical, administrative, financial, mobilisation and communication roles working together."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/8 bg-surface2 p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet to-cyan font-display text-sm font-bold text-white">
                {initials(t.name)}
              </div>
              <h4 className="mb-0.5 font-display text-base font-semibold text-white">{t.name}</h4>
              <span className="text-sm font-medium text-cyan">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
