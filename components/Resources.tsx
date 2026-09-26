import { ArrowUpRight } from "lucide-react";
import { resources } from "@/lib/data";
import { SectionHead } from "./SectionHead";

export function Resources() {
  return (
    <section className="bg-bg pb-14 sm:pb-18">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead kicker="Official resources" title="Straight from IEEE" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((r) => (
            <a
              key={r.href}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 rounded-xl border border-ieee/10 bg-white px-5 py-4 text-sm font-semibold text-ink shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition hover:border-[#1A9090]/60 hover:text-ieee hover:-translate-y-0.5"
            >
              {r.label}
              <ArrowUpRight size={16} className="shrink-0 text-ieee" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
