import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { CUUCSA_LINKEDIN_URL, CUUCSA_WHATSAPP_URL } from "@/lib/data";
import teamData from "@/content/team.json";
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
  cuucsaPillars,
  cuucsaProgrammes,
  cuucsaVision,
} from "@/content/cuucsa";
import { PageHero } from "./PageHero";
import { PersonCard, PersonRow } from "./PersonCard";
import { btn, container, nudge } from "@/lib/ui";

/** People who sit on both teams share one photo and LinkedIn URL, kept in content/team.json. */
const branchProfiles = new Map(
  (teamData as { name: string; photo?: string; linkedin?: string }[]).map((m) => [m.name.toLowerCase(), m])
);
function profileFor(name: string) {
  return branchProfiles.get(name.toLowerCase());
}

function Head({ id, index, title, body }: { id: string; index: string; title: string; body?: string }) {
  return (
    <header className="mb-10 max-w-3xl">
      <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#00629B]">
        <span className="font-display tabular-nums">{index}</span>
        <span aria-hidden="true" className="h-0.5 w-8 bg-[#00629B]" />
      </p>
      <h2 id={id} className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {body && <p className="mt-3 text-base leading-relaxed text-slate-500">{body}</p>}
    </header>
  );
}

export function CUUCSA() {
  return (
    <>
      <PageHero
        eyebrow="CUUCSA · Computing Students' Association"
        title={
          <>
            Learn. Build. <em>Innovate. Impact.</em>
          </>
        }
        lede="The Cavendish University Uganda Computing Students' Association: an independent student community of the Faculty of Science and Technology."
        actions={
          <>
            <a href={CUUCSA_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={btn.accent}>
              Join the WhatsApp community
              <ArrowUpRight size={16} aria-hidden="true" className={nudge} />
            </a>
            <a href={CUUCSA_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={btn.ghost}>
              Follow on LinkedIn
            </a>
          </>
        }
        aside={
          <div className="mx-auto flex aspect-square w-full max-w-sm items-center justify-center bg-white p-10 lg:ml-auto">
            <div className="relative h-full w-full">
              <Image src="/images/cuucsa/cuucsa-emblem.png" alt="CUUCSA seal" fill sizes="320px" className="object-contain" priority />
            </div>
          </div>
        }
      />

      <div className="border-b border-slate-200 bg-white">
        <p className={`${container} py-5 text-sm leading-relaxed text-slate-600`}>{cuucsaIndependence}</p>
      </div>

      {/* Vision, mission, journey */}
      <section aria-labelledby="cuucsa-vision" className="bg-bg py-16 sm:py-24">
        <div className={container}>
          <Head id="cuucsa-vision" index="01" title="Where CUUCSA is going" />
          <div className="grid gap-px bg-slate-200 md:grid-cols-2">
            {[
              ["Vision", cuucsaVision],
              ["Mission", cuucsaMission],
            ].map(([label, text]) => (
              <div key={label} className="bg-white p-7 sm:p-10">
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#00629B]">{label}</h3>
                <p className="mt-4 text-pretty font-display text-lg font-semibold leading-snug text-ink sm:text-xl">{text}</p>
              </div>
            ))}
          </div>
          <ol aria-label="The student journey" className="mt-8 grid grid-cols-2 gap-px bg-slate-200 sm:grid-cols-4 lg:grid-cols-8">
            {cuucsaJourney.map((step, i) => (
              <li key={step} className="bg-bg px-4 py-4">
                <span className="block font-display text-xs font-bold tabular-nums text-[#00629B]">{String(i + 1).padStart(2, "0")}</span>
                <span className="mt-1 block text-sm font-semibold text-ink">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pillars */}
      <section aria-labelledby="cuucsa-pillars" className="bg-white py-16 sm:py-24">
        <div className={container}>
          <Head id="cuucsa-pillars" index="02" title="Six pillars" />
          <ul className="grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {cuucsaPillars.map((p) => (
              <li key={p.title} className="bg-white p-6 transition-colors hover:bg-bg">
                <h3 className="font-display text-lg font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.outcome}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Programmes and events */}
      <section aria-labelledby="cuucsa-programmes" className="bg-bg py-16 sm:py-24">
        <div className={container}>
          <Head id="cuucsa-programmes" index="03" title="Eight flagship programmes" />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cuucsaProgrammes.map((p) => (
              <li key={p.name} className="flex flex-col border border-slate-200 bg-white p-6">
                <h3 className="font-display text-lg font-bold text-ink">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{p.purpose}</p>
                <p className="mt-4 border-t border-slate-100 pt-3 text-xs text-slate-500">Led by {p.lead}</p>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-baseline">
            <h3 className="shrink-0 font-display text-lg font-bold text-ink">Flagship events</h3>
            <p className="text-sm text-slate-500">Dates to be announced.</p>
          </div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {cuucsaFlagshipEvents.map((e) => (
              <li key={e} className="border border-slate-300 bg-white px-3.5 py-1.5 text-sm text-slate-700">
                {e}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Core team */}
      <section id="team" aria-labelledby="cuucsa-team" className="bg-white py-16 sm:py-24">
        <div className={container}>
          <Head id="cuucsa-team" index="04" title="Core team" body="The executive that runs CUUCSA's programmes, records and representation." />
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {cuucsaCore.map((m) => {
              const shared = profileFor(m.name);
              return (
                <li key={m.office}>
                  <PersonCard
                    person={{
                      name: m.name,
                      role: m.office,
                      meta: [m.programme, m.note].filter(Boolean).join(" · "),
                      photo: shared?.photo || undefined,
                      linkedin: m.linkedin || shared?.linkedin,
                    }}
                  />
                </li>
              );
            })}
          </ul>

          <h3 className="mt-16 font-display text-xl font-bold text-ink">Batch representatives</h3>
          <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {cuucsaBatchReps.map((r) => (
              <li key={r.name}>
                <PersonRow person={{ name: r.name, role: "Batch representative", linkedin: r.linkedin || profileFor(r.name)?.linkedin }} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Membership and governance */}
      <section aria-labelledby="cuucsa-membership" className="bg-bg py-16 sm:py-24">
        <div className={container}>
          <Head id="cuucsa-membership" index="05" title="Membership and governance" />
          <div className="grid gap-12 lg:grid-cols-12">
            <dl className="divide-y divide-slate-200 border-y border-slate-200 lg:col-span-7">
              {cuucsaMembership.map((m) => (
                <div key={m.name} className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
                  <dt className="text-sm font-semibold text-ink">{m.name}</dt>
                  <dd className="text-sm text-slate-600">{m.desc}</dd>
                </div>
              ))}
            </dl>
            <div className="lg:col-span-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#00629B]">How it is run</h3>
              <ul className="mt-4 space-y-3">
                {cuucsaGovernance.map((g) => (
                  <li key={g} className="flex gap-3 text-sm text-slate-700">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#00629B]" />
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="cuucsa-faq" className="bg-white py-16 sm:py-24">
        <div className={container}>
          <Head id="cuucsa-faq" index="06" title="Questions" />
          <div className="max-w-4xl">
            {cuucsaFaqs.map((faq, i) => (
              <details key={faq.question} className="group border-b border-slate-200 py-5 first:border-t" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <ChevronDown size={18} aria-hidden="true" className="shrink-0 text-[#00629B] transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
