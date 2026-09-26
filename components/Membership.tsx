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
    <section id="membership" className="relative overflow-hidden bg-bg py-28 sm:py-36 text-ink">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-[0.14]"
        style={{
          background: "radial-gradient(ellipse at center, #0D6E6E 0%, #1A9090 50%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1A9090]/40 bg-[#0D6E6E]/20 px-4 py-1.5 text-[11px] font-bold tracking-[0.22em] uppercase text-[#E8F5F5]">
              IEEE Global Membership
            </span>
            <h2 className="font-serif text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Find the category that <em className="not-italic italic text-[#1A9090]">fits you.</em>
            </h2>
            <div className="mt-6 h-[3px] w-16 rounded-full bg-[#0D6E6E]" />
          </div>

          <div className="lg:col-span-5">
            <p className="text-base leading-[1.8] text-muted sm:text-lg">
              Membership is individual. As a Cavendish University Uganda student or scholar, you qualify for
              heavily subsidised student rates, local Branch voting rights, global research access, and entry into
              prestigious competitions like IEEEXtreme.
            </p>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {studentTiers.map((m) => {
            const isHero = m.highlight;

            return (
              <div
                key={m.tier}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border p-8 sm:p-10 transition-all duration-500 hover:-translate-y-1 ${
                  isHero
                    ? "border-[#1A9090]/60 bg-white shadow-[0_0_50px_rgba(26,144,144,0.22)] hover:border-[#E8F5F5]/70"
                    : "border-ieee/15 bg-[#0A1B2A] hover:border-[#1A9090]/50 hover:shadow-[0_0_50px_rgba(13,110,110,0.2)]"
                }`}
              >
                <div>
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold tracking-wide ${
                        isHero
                          ? "border-[#1A9090]/50 bg-[#0D6E6E]/40 text-[#FFFFFF]"
                          : "border-[#B0CCCC]/30 bg-[#1A9090]/20 text-[#E8F5F5]"
                      }`}
                    >
                      {m.badge}
                    </span>

                    <span className="text-[11px] font-semibold uppercase tracking-wider text-muted/70">
                      Academic Grade
                    </span>
                  </div>

                  <div className="mb-4 flex items-center gap-3">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${isHero ? "border-[#1A9090]/50 bg-[#0D6E6E]/50 text-[#FFFFFF]" : "border-[#B0CCCC]/25 bg-[#1A9090]/25 text-[#E8F5F5]"}`}>
                      {m.tier.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold tracking-tight text-ink group-hover:text-ieee transition-colors">
                        {m.tier}
                      </h3>
                      <p className="mt-0.5 text-xs font-semibold text-muted">
                        {isHero ? "Undergraduate / Diploma" : "Master's & PhD Candidates"}
                      </p>
                    </div>
                  </div>

                  <p className="mb-6 text-sm leading-relaxed text-muted">{m.who}</p>

                  <div className="mb-8 space-y-2.5 border-t border-ieee/10 pt-6">
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted/70 block mb-3">
                      Key Branch & Global Perks
                    </span>
                    {m.perks.map((perk) => (
                      <div key={perk} className="flex items-center gap-2.5 text-xs font-medium text-ink/90">
                        <CheckCircle2 size={14} className={`shrink-0 ${isHero ? "text-[#E8F5F5]" : "text-[#1A9090]"}`} />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold shadow-md transition-all duration-300 hover:-translate-y-0.5 ${
                    isHero
                      ? "bg-[#FFFFFF] hover:bg-[#E8F5F5] text-[#0D6E6E]"
                      : "border border-[#B0CCCC]/30 bg-[#0D6E6E] hover:bg-[#1A9090] text-[#FFFFFF]"
                  }`}
                >
                  <span>{m.cta}</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            );
          })}
        </div>

        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {professionalTiers.map((m) => (
            <div
              key={m.tier}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-ieee/10 bg-white p-6 transition-all duration-300 hover:border-[#1A9090]/40 hover:bg-white hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full border border-ieee/15 bg-[#1A9090]/15 px-2.5 py-0.5 text-[10px] font-semibold text-muted">
                    {m.badge}
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-ieee/15 bg-[#0D6E6E]/30 text-[#E8F5F5] transition-transform duration-300 group-hover:scale-110 group-hover:text-ink">
                    {m.tier.slice(0, 2).toUpperCase()}
                  </div>
                </div>

                <h4 className="font-serif text-lg font-bold text-ink group-hover:text-ieee transition-colors mb-2">
                  {m.tier}
                </h4>

                <p className="text-xs leading-relaxed text-muted/85 mb-4">{m.who}</p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {m.perks.map((p) => (
                    <span
                      key={p}
                      className="rounded-md border border-ieee/10 bg-bg/60 px-2 py-0.5 text-[10px] font-medium text-muted"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-muted hover:text-[#FFFFFF] transition-colors pt-3 border-t border-ieee/10"
              >
                <span>{m.cta}</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-[#1A9090]/40 bg-gradient-to-r from-[#0D6E6E]/20 via-[#E0DDD5] to-[#F7F4EF] p-6 sm:p-7 shadow-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h4 className="text-sm font-bold tracking-tight text-white sm:text-base">A direct CUU branch affiliation strengthens your profile across every tier.</h4>
              <p className="mt-1 text-xs text-muted">Local membership, official branch support, and a stronger professional record.</p>
            </div>
            <a
              href="/join"
              className="inline-flex items-center gap-2 rounded-full bg-[#0D6E6E] px-5 py-2.5 text-xs font-bold text-ink transition hover:bg-[#1A9090]"
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
