import { ArrowUpRight } from "lucide-react";
import { resources } from "@/lib/data";
import { SectionHead } from "./SectionHead";

export function Resources() {
  return (
    <section className="bg-bg pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead kicker="Official resources" title="Straight from IEEE" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((r) => (
            <a
              key={r.href}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-surface2 px-5 py-4 text-sm font-medium text-white/85 transition hover:border-cyan/40"
            >
              {r.label}
              <ArrowUpRight size={16} className="shrink-0 text-muted" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
