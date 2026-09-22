import { pillars } from "@/lib/data";
import { SectionHead } from "./SectionHead";
import { Cpu, BookOpenText, Users2, Globe2 } from "lucide-react";

const ICONS = { cyan: Cpu, violet: BookOpenText, ember: Users2, mint: Globe2 } as const;
const RING = {
  cyan: "text-cyan bg-cyan/10 ring-cyan/30",
  violet: "text-violet-soft bg-violet/10 ring-violet/30",
  ember: "text-ember-soft bg-ember/10 ring-ember/30",
  mint: "text-mint bg-mint/10 ring-mint/30",
} as const;

export function WhatIsIEEE() {
  return (
    <section id="about" className="border-t border-white/5 bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          kicker="What is IEEE"
          title="A global professional community advancing technology for humanity."
          body="IEEE brings together students, engineers, researchers and computing professionals to learn, build and share knowledge — from local student branches to a worldwide network spanning Societies, Sections and Regions."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => {
            const Icon = ICONS[p.accent];
            return (
              <div
                key={p.title}
                className="rounded-2xl border border-white/8 bg-surface2 p-6 transition hover:border-white/20"
              >
                <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ring-1 ${RING[p.accent]}`}>
                  <Icon size={20} />
                </div>
                <h3 className="mb-2 font-display text-base font-semibold text-white">{p.title}</h3>
                <p className="text-sm text-white/55">{p.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
