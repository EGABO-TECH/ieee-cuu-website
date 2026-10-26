import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Users, ArrowUpRight } from "lucide-react";
import { VOLUNTEER_CALL as CALL } from "@/lib/calls";
import { msUntil } from "@/lib/events";
import { Countdown } from "./ui/Countdown";

/** Home-page card for the volunteer call. The page hides it once the call closes. */
export function EventSpotlight() {
  return (
    <section id="event" className="relative overflow-hidden bg-bg py-10 sm:py-14">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-stretch overflow-hidden rounded-3xl border border-ink/[0.08] lg:grid-cols-2 bg-white">

          {/* ── LEFT: Flyer ── */}
          {CALL.flyer && (
            <div className="relative flex items-center justify-center bg-[#0d1424] p-8 sm:p-12 lg:p-14 border-b border-ink/[0.08] lg:border-b-0 lg:border-r">
              <div className="relative w-full max-w-[340px] overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                <Image
                  src={CALL.flyer}
                  alt="Call for volunteers flyer for the IEEE CUU Student Branch launch on 4 November 2026"
                  width={1024}
                  height={1536}
                  sizes="(max-width: 1024px) 90vw, 340px"
                  className="h-auto w-full"
                />
              </div>
            </div>
          )}

          {/* ── RIGHT: Details ── */}
          <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-14">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2f5f68]">Call for volunteers</p>
              <h2 className="mt-3 font-serif text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl">
                Help run the Official Branch Launch
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                We&apos;re looking for {CALL.slots} student volunteers. Open to every Cavendish University
                Uganda student, any faculty, any year. No IEEE membership or technical skills needed.
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-center gap-3 text-slate-700">
                  <Calendar size={16} className="shrink-0 text-[#2f5f68]" aria-hidden="true" />
                  Launch on Wednesday 4 November 2026
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <MapPin size={16} className="shrink-0 text-[#2f5f68]" aria-hidden="true" />
                  Cavendish University Uganda
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <Users size={16} className="shrink-0 text-[#2f5f68]" aria-hidden="true" />
                  {CALL.slots} spots
                </li>
              </ul>
            </div>

            <div className="mt-10 border-t border-ink/[0.08] pt-8">
              <p className="mb-4 text-sm font-semibold text-[#234a52]">
                Applications close 27 October 2026, 11:59 PM EAT
              </p>
              <Countdown targetISO={CALL.closes} initialMs={msUntil(CALL.closes)} showSeconds={false} hideWhenExpired />

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={CALL.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#2f5f68] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#2f5f68]/25 transition hover:bg-[#234a52]"
                >
                  Apply now
                  <ArrowUpRight size={15} aria-hidden="true" className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <Link
                  href={CALL.href}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  Roles and details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
