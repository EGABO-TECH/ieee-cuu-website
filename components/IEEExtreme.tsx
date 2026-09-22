import { Clock } from "lucide-react";
import { IEEEXTREME_DEADLINE_ISO } from "@/lib/data";
import { Countdown } from "./ui/Countdown";

export function IEEExtreme() {
  return (
    <section id="xtreme" className="bg-bg pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-[#3A1B12] via-surface to-surface p-9 sm:p-11 md:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="mb-3 text-sm font-semibold text-ember-soft">Global programming challenge</p>
            <h3 className="mb-3 font-display text-2xl font-bold text-white sm:text-3xl">
              IEEEXtreme — team registration is live.
            </h3>
            <p className="max-w-xl text-white/60">
              A 24-hour, global programming challenge for teams of IEEE Student or Graduate Student Members:
              algorithmic problem solving, teamwork and coding under real time pressure. Get your team of
              two or three together and register through the official IEEEXtreme portal.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-ember/40 bg-ember/10 px-4 py-2 text-sm font-medium text-ember-soft">
              <Clock size={15} /> Deadline: 17 October 2026, 11:59 PM GMT
            </span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <a
              href="https://xtreme.vtools.ieee.org"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-xl bg-gradient-to-r from-ember to-[#ff9a63] px-6 py-3.5 text-center text-sm font-semibold text-bg transition hover:-translate-y-0.5"
            >
              Register your team
            </a>
            <Countdown targetISO={IEEEXTREME_DEADLINE_ISO} showSeconds={false} />
          </div>
        </div>
      </div>
    </section>
  );
}
