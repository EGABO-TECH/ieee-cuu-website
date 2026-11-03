"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/data";
import { SectionHead } from "./SectionHead";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section aria-labelledby="faq-title" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-12">
        <div className="lg:col-span-4">
          <SectionHead id="faq-title" kicker="Questions" title="Frequently asked" />
        </div>
        <div className="divide-y divide-slate-200 border-y border-slate-200 lg:col-span-8">
          {faqs.map((f, i) => {
            const open = openIndex === i;
            return (
              <div key={f.q} className="py-5">
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  type="button"
                  className="flex min-h-11 w-full items-center justify-between gap-4 text-left"
                >
                  <span className="font-display text-base font-semibold text-ink">{f.q}</span>
                  <Plus
                    size={18}
                    aria-hidden="true"
                    className={`shrink-0 text-[#00629B] transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                  />
                </button>
                {open && <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
