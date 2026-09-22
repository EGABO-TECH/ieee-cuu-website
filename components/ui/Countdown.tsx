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
          className="min-w-[58px] rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center"
        >
          <b className="block font-display text-xl text-white">
            {String(c.value).padStart(2, "0")}
          </b>
          <span className="text-[10px] uppercase tracking-wide text-muted">{c.label}</span>
        </div>
      ))}
    </div>
  );
}
