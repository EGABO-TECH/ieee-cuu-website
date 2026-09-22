import { ArrowUpRight } from "lucide-react";
import { programs } from "@/lib/data";
import { SectionHead } from "./SectionHead";

const BORDER = {
  cyan: "hover:border-cyan/40",
  violet: "hover:border-violet/40",
  ember: "hover:border-ember/40",
} as const;
const TAG = {
  cyan: "text-cyan bg-cyan/10",
  violet: "text-violet-soft bg-violet/10",
  ember: "text-ember-soft bg-ember/10",
} as const;

export function Programs() {
  return (
    <section id="programs" className="border-t border-white/5 bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          kicker="Beyond the Branch"
          title="Ambassadorial & community programs worth exploring"
          body="IEEE is one part of a much bigger student-tech landscape. These are independent, well-known programs that CUU students can apply to alongside their IEEE involvement — the Branch will share application windows and info sessions as they open."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {programs.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col rounded-2xl border border-white/8 bg-surface2 p-7 transition ${BORDER[p.accent]}`}
            >
              <span className={`mb-5 inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold ${TAG[p.accent]}`}>
                {p.tag}
              </span>
              <h3 className="mb-2.5 font-display text-lg font-semibold text-white">{p.title}</h3>
              <p className="mb-6 flex-1 text-sm text-white/55">{p.body}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-white/80 group-hover:text-white">
                Learn more <ArrowUpRight size={15} />
              </span>
            </a>
          ))}
        </div>
        <div className="mt-6 rounded-xl border-l-2 border-ember bg-ember/5 px-6 py-4 text-sm text-white/60">
          And more on the way. As new ambassador and campus programs open applications — cloud, AI, open
          source or otherwise — the Branch will post them here and in the WhatsApp group first.
        </div>
      </div>
    </section>
  );
}
