import Image from "next/image";
import { ArrowUpRight, ChevronDown, ChevronRight, Linkedin, MessageCircle } from "lucide-react";
import { CUUCSA_LINKEDIN_URL, CUUCSA_WHATSAPP_URL } from "@/lib/data";
import {
  cuucsaBatchReps,
  cuucsaCore,
  cuucsaFaqs,
  cuucsaFlagshipEvents,
  cuucsaGovernance,
  cuucsaIndependence,
  cuucsaJourney,
  cuucsaMembership,
  cuucsaMission,
  cuucsaMotto,
  cuucsaPillars,
  cuucsaProgrammes,
  cuucsaVision,
} from "@/content/cuucsa";

function initials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function ConnectButtons({ light = false }: { light?: boolean }) {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={CUUCSA_WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 rounded-md px-4 py-3 text-sm font-semibold transition ${
          light ? "bg-white text-[#123f45] hover:bg-[#e8f5f5]" : "bg-[#0D6E6E] text-white hover:bg-[#1A9090]"
        }`}
      >
        <MessageCircle size={17} aria-hidden="true" />
        WhatsApp community
        <ArrowUpRight size={15} aria-hidden="true" />
      </a>
      <a
        href={CUUCSA_LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 rounded-md border px-4 py-3 text-sm font-semibold transition ${
          light
            ? "border-white/35 text-white hover:border-white hover:bg-white/10"
            : "border-slate-300 bg-white text-slate-800 hover:bg-slate-50"
        }`}
      >
        <Linkedin size={17} aria-hidden="true" />
        LinkedIn
        <ArrowUpRight size={15} aria-hidden="true" />
      </a>
    </div>
  );
}

function SectionTitle({ id, children, kicker }: { id: string; children: React.ReactNode; kicker?: string }) {
  return (
    <div className="mb-7 border-b border-ink/10 pb-5">
      {kicker && <p className="text-xs font-semibold uppercase tracking-wider text-[#0D6E6E]">{kicker}</p>}
      <h2 id={id} className="mt-1 font-serif text-2xl font-bold text-ink sm:text-3xl">
        {children}
      </h2>
    </div>
  );
}

export function CUUCSA() {
  return (
    <>
      {/* 1. Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-12 py-10 lg:py-14">
        <div className="grid grid-cols-1 items-center gap-8 rounded-2xl border border-ink/10 bg-white p-6 sm:p-10 md:grid-cols-[10rem_minmax(0,1fr)]">
          <div className="relative mx-auto h-32 w-32 md:h-40 md:w-40">
            <Image
              src="/images/cuucsa/cuucsa-emblem.png"
              alt="CUUCSA seal"
              fill
              className="object-contain"
              sizes="160px"
              priority
            />
          </div>
          <div>
            <h1 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
              Cavendish University Uganda Computing Students&apos; Association
            </h1>
            <p className="mt-3 text-sm font-bold tracking-[0.2em] text-[#0D6E6E]">{cuucsaMotto}</p>
            <div className="mt-6">
              <ConnectButtons />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Independence statement */}
      <section className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-12 pb-6">
        <p className="rounded-xl border-l-4 border-[#0D6E6E] bg-white p-5 text-sm leading-relaxed text-slate-700 sm:text-base">
          {cuucsaIndependence}
        </p>
      </section>

      {/* 3. Vision and mission, 4. Journey */}
      <section aria-labelledby="cuucsa-vision" className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-12 py-10">
        <h2 id="cuucsa-vision" className="sr-only">Vision and mission</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-xl border border-ink/10 bg-white p-6">
            <h3 className="font-serif text-xl font-bold text-ink">Vision</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{cuucsaVision}</p>
          </div>
          <div className="rounded-xl border border-ink/10 bg-white p-6">
            <h3 className="font-serif text-xl font-bold text-ink">Mission</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{cuucsaMission}</p>
          </div>
        </div>
        <ol aria-label="Student journey" className="mt-6 flex flex-wrap items-center gap-x-1 gap-y-2 text-sm font-semibold text-[#123f45]">
          {cuucsaJourney.map((step, i) => (
            <li key={step} className="flex items-center gap-1">
              <span className="rounded-full bg-[#dfeff0] px-3 py-1">{step}</span>
              {i < cuucsaJourney.length - 1 && <ChevronRight size={14} aria-hidden="true" className="text-[#0D6E6E]" />}
            </li>
          ))}
        </ol>
      </section>

      {/* 5. Pillars */}
      <section aria-labelledby="cuucsa-pillars" className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-12">
          <SectionTitle id="cuucsa-pillars">Six pillars</SectionTitle>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {cuucsaPillars.map((p) => (
              <li key={p.title} className="rounded-md border border-ink/10 bg-[#fafaf8] p-5">
                <h3 className="text-base font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.outcome}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Programmes, 7. Flagship events */}
      <section aria-labelledby="cuucsa-programmes" className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-12">
          <SectionTitle id="cuucsa-programmes">Eight flagship programmes</SectionTitle>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {cuucsaProgrammes.map((p) => (
              <li key={p.name} className="rounded-md border border-ink/10 bg-white p-5">
                <h3 className="text-base font-semibold text-ink">CUUCSA {p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.purpose}</p>
                <p className="mt-3 text-xs font-medium text-[#0D6E6E]">Led by {p.lead}</p>
              </li>
            ))}
          </ul>

          <h3 className="mt-10 font-serif text-xl font-bold text-ink">Flagship events</h3>
          <p className="mt-1 text-sm text-muted">Dates will be announced.</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {cuucsaFlagshipEvents.map((e) => (
              <li key={e} className="rounded-full border border-[#9dbdc1] bg-[#edf7f8] px-3.5 py-1.5 text-xs font-medium text-[#244b52]">
                {e}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. Core team */}
      <section aria-labelledby="cuucsa-team" className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-12">
          <SectionTitle id="cuucsa-team">Core team</SectionTitle>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {cuucsaCore.map((m) => (
              <li key={m.office} className="flex items-start gap-3 rounded-md border border-ink/10 bg-[#fafaf8] p-4">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e8f0ee] font-serif text-sm font-semibold text-[#0D6E6E]"
                >
                  {initials(m.name)}
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#0D6E6E]">{m.office}</p>
                  <p className="mt-0.5 font-semibold leading-snug text-ink">{m.name}</p>
                  <p className="text-xs text-muted">
                    {m.programme}
                    {m.note && <span className="block">{m.note}</span>}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <h3 className="mt-10 text-base font-semibold text-ink">Batch representatives</h3>
          <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 text-sm text-muted sm:grid-cols-2 lg:grid-cols-4">
            {cuucsaBatchReps.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 9. Membership, 10. Governance */}
      <section aria-labelledby="cuucsa-membership" className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-10 lg:grid-cols-2 lg:px-12">
          <div>
            <SectionTitle id="cuucsa-membership">Membership</SectionTitle>
            <dl className="space-y-3">
              {cuucsaMembership.map((m) => (
                <div key={m.name} className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
                  <dt className="w-36 shrink-0 text-sm font-semibold text-ink">{m.name}</dt>
                  <dd className="text-sm text-muted">{m.desc}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <SectionTitle id="cuucsa-governance">Governance in brief</SectionTitle>
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted">
              {cuucsaGovernance.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section aria-labelledby="cuucsa-faq-title" className="bg-white py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-10 lg:grid-cols-12 lg:gap-12 lg:px-12">
          <div className="lg:col-span-4">
            <h2 id="cuucsa-faq-title" className="font-serif text-2xl font-bold text-ink sm:text-3xl">
              Frequently asked questions
            </h2>
          </div>
          <div className="lg:col-span-8">
            {cuucsaFaqs.map((faq, index) => (
              <details key={faq.question} className="group border-t border-ink/15 py-4" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <ChevronDown size={16} className="shrink-0 text-[#0D6E6E] transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="mt-3 max-w-2xl pr-8 text-sm leading-relaxed text-muted">{faq.answer}</p>
              </details>
            ))}
            <div className="border-t border-ink/15" />
          </div>
        </div>
      </section>

      <section aria-labelledby="cuucsa-connect-title" className="bg-[#123f45] py-10 text-white sm:py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-12">
          <div className="max-w-xl">
            <h2 id="cuucsa-connect-title" className="font-serif text-2xl font-bold sm:text-3xl">
              Connect with CUUCSA
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              Join the student community or follow CUUCSA for updates.
            </p>
          </div>
          <ConnectButtons light />
        </div>
      </section>
    </>
  );
}
