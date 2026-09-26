"use client";

import { useCountdown } from "@/lib/useCountdown";

export function Countdown({
  targetISO,
  showSeconds = true,
}: {
  targetISO: string;
  showSeconds?: boolean;
}) {
  const { days, hours, minutes, seconds } = useCountdown(targetISO);
  const cells = [
    { value: days, label: "days" },
    { value: hours, label: "hrs" },
    { value: minutes, label: "min" },
    ...(showSeconds ? [{ value: seconds, label: "sec" }] : []),
  ];

  return (
    <div className="flex gap-3">
      {cells.map((c) => (
        <div
          key={c.label}
          className="min-w-[58px] rounded-xl border border-ieee/10 bg-slate-50 px-3 py-2 text-center shadow-[0_4px_12px_rgba(15,23,42,0.03)]"
        >
          <b className="block font-display text-xl text-slate-900">
            {String(c.value).padStart(2, "0")}
          </b>
          <span className="text-[10px] uppercase tracking-[0.18em] text-slate-500">{c.label}</span>
        </div>
      ))}
    </div>
  );
}
