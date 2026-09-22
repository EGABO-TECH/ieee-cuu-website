import { Calendar, MapPin, Users } from "lucide-react";
import { IEEE_DAY_REGISTRATION_URL, IEEE_DAY_TARGET_ISO } from "@/lib/data";
import { Countdown } from "./ui/Countdown";
import { SectionHead } from "./SectionHead";

export function EventSpotlight() {
  return (
    <section id="event" className="bg-bg py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          kicker="Upcoming · flagship event"
          title="IEEE Day 2026: IEEE CUU Student Branch Launch"
          body="Registration is open for the official launch of the IEEE Student Branch at Cavendish University Uganda, held in celebration of IEEE Day."
        />

        <div className="grid overflow-hidden rounded-3xl border border-white/10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="bg-surface2 p-9 sm:p-11">
            <div className="mb-6 inline-flex flex-col items-center rounded-xl bg-gradient-to-br from-violet to-cyan px-5 py-2.5 text-white">
              <span className="font-display text-2xl font-extrabold leading-none">06</span>
              <span className="text-[10px] tracking-wide">OCT 2026</span>
            </div>
            <h3 className="mb-3 font-display text-2xl font-bold text-white">IEEE CUU Student Branch Launch</h3>
            <p className="mb-7 max-w-md text-white/60">
              Meet the Branch, learn what IEEE membership can open up for you, and be part of the first
              cohort of students building this community from day one.
            </p>
            <ul className="mb-8 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3"><Calendar size={18} className="mt-0.5 text-cyan" /> Tuesday, 6 October 2026</li>
              <li className="flex items-start gap-3"><MapPin size={18} className="mt-0.5 text-cyan" /> Cavendish University Uganda</li>
              <li className="flex items-start gap-3"><Users size={18} className="mt-0.5 text-cyan" /> Open to all CUU students</li>
            </ul>
            <a
              href={IEEE_DAY_REGISTRATION_URL}
              className="inline-block rounded-xl bg-white px-6 py-3 text-sm font-semibold text-bg transition hover:-translate-y-0.5"
            >
              Scan or tap to register →
            </a>
          </div>

          <div className="flex flex-col items-center justify-center gap-5 bg-gradient-to-br from-violet-dim to-bg p-9 text-center">
            <span className="text-xs uppercase tracking-wide text-white/50">Counting down to IEEE Day</span>
            <Countdown targetISO={IEEE_DAY_TARGET_ISO} />
          </div>
        </div>
      </div>
    </section>
  );
}
