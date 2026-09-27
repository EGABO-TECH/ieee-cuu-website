"use client";

import { membership } from "@/lib/data";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

export function Membership() {
  const studentTiers = membership.filter(
    (m) => m.tier === "Student Member" || m.tier === "Graduate Student Member"
  );
  const professionalTiers = membership.filter(
    (m) => m.tier !== "Student Member" && m.tier !== "Graduate Student Member"
  );

  return (
    <section id="membership" className="bg-bg py-16 text-ink sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Find the category that <em className="not-italic italic text-[#1A9090]">fits you.</em>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Membership is individual. As a Cavendish University Uganda student or scholar, you qualify for
              heavily subsidised student rates, local Branch voting rights, global research access, and entry into
              prestigious competitions like IEEEXtreme.
            </p>
          </div>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-5 xl:grid-cols-2">
          {studentTiers.map((m) => {
            const isHero = m.highlight;

            return (
              <div
                key={m.tier}
                className={`flex h-full flex-col rounded-md border border-ink/10 border-t-4 bg-white p-6 sm:p-8 ${
                  isHero
                    ? "border-t-[#0D6E6E]"
                    : "border-t-slate-400"
                }`}
              >
                <div>
                  <div className="mb-5">
                    <p className="inline-flex rounded-sm border border-[#0D6E6E]/20 bg-[#edf5f4] px-2.5 py-1 text-xs font-semibold text-[#0D6E6E]">
                      {m.badge}
                    </p>
                    <h3 className="mt-3 font-serif text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                      {m.tier}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-slate-600">
                      {isHero ? "Undergraduate / Diploma" : "Master’s and PhD candidates"}
                    </p>
                  </div>

                  <p className="mb-6 text-sm leading-relaxed text-slate-700">{m.who}</p>

                  <div className="border-t border-ink/10 pt-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                      Membership benefits
                    </p>
                    <ul className="mt-3 space-y-2.5">
                    {m.perks.map((perk) => (
                        <li key={perk} className="flex items-start gap-2.5 text-sm leading-snug text-slate-700">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#0D6E6E]" aria-hidden="true" />
                          <span>{perk}</span>
                        </li>
                    ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors ${
                    isHero
                      ? "bg-[#0D6E6E] text-white hover:bg-[#095757]"
                      : "border border-[#0D6E6E]/30 bg-white text-[#0D6E6E] hover:border-[#0D6E6E] hover:bg-[#edf5f4]"
                  }`}
                >
                  <span>{m.cta}</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            );
          })}
        </div>

        <div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {professionalTiers.map((m) => (
            <div
              key={m.tier}
              className="flex h-full flex-col rounded-md border border-ink/10 border-t-2 border-t-slate-300 bg-white p-5 sm:p-6"
            >
              <div className="flex-1">
                <p className="text-xs font-semibold text-[#0D6E6E]">{m.badge}</p>
                <h3 className="mt-2 font-serif text-xl font-bold text-ink">
                  {m.tier}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-700">{m.who}</p>

                <ul className="mt-4 space-y-2 border-t border-ink/10 pt-4">
                  {m.perks.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs leading-snug text-slate-700">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[#0D6E6E]" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md border border-[#0D6E6E]/25 px-4 py-2.5 text-xs font-semibold text-[#0D6E6E] transition-colors hover:border-[#0D6E6E] hover:bg-[#edf5f4]"
              >
                <span>{m.cta}</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          ))}
        </div>

        <div className="rounded-md border border-ink/10 bg-white p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h4 className="text-sm font-semibold text-ink sm:text-base">A direct CUU Branch affiliation strengthens your IEEE membership.</h4>
              <p className="mt-1 text-sm text-slate-600">Get local guidance with membership selection and onboarding.</p>
            </div>
            <a
              href="/join"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-[#0D6E6E] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#095757]"
            >
              See onboarding steps
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
