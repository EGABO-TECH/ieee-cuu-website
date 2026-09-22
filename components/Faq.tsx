"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/data";
import { SectionHead } from "./SectionHead";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-bg py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHead kicker="Questions" title="Frequently asked" />
        <div className="divide-y divide-white/10 border-y border-white/10">
          {faqs.map((f, i) => {
            const open = openIndex === i;
            return (
              <div key={f.q} className="py-5">
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="font-display text-base font-semibold text-white">{f.q}</span>
                  <Plus
                    size={18}
                    className={`shrink-0 text-cyan transition-transform ${open ? "rotate-45" : ""}`}
                  />
                </button>
                {open && <p className="mt-3 max-w-xl text-sm text-white/60">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
