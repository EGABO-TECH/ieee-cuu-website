"use client";

import { useEffect, useState } from "react";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function msToTimeLeft(ms: number): TimeLeft {
  const clamped = Math.max(0, ms);
  return {
    days: Math.floor(clamped / 86400000),
    hours: Math.floor((clamped % 86400000) / 3600000),
    minutes: Math.floor((clamped % 3600000) / 60000),
    seconds: Math.floor((clamped % 60000) / 1000),
  };
}

export function Countdown({
  targetISO,
  /** ms remaining as computed on the server — prevents a flash of 00 */
  initialMs,
  showSeconds = true,
  /** If true, renders nothing once the target time has passed */
  hideWhenExpired = false,
}: {
  targetISO: string;
  initialMs?: number;
  showSeconds?: boolean;
  hideWhenExpired?: boolean;
}) {
  const [left, setLeft] = useState<TimeLeft>(() => {
    const seed = initialMs !== undefined ? initialMs : Math.max(0, new Date(targetISO).getTime() - Date.now());
    return msToTimeLeft(seed);
  });
  const [expired, setExpired] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const target = new Date(targetISO).getTime();
    let id: ReturnType<typeof setInterval> | undefined;

    const tick = () => {
      const ms = target - Date.now();
      if (ms <= 0) {
        setLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setExpired(true);
        if (id !== undefined) {
          clearInterval(id);
        }
        return;
      }
      setLeft(msToTimeLeft(ms));
    };

    tick();
    if (target > Date.now()) {
      // With reduced motion, seconds are hidden, so a minute tick is enough.
      id = setInterval(tick, reducedMotion ? 60_000 : 1000);
    }

    return () => {
      if (id !== undefined) {
        clearInterval(id);
      }
    };
  }, [targetISO, reducedMotion]);

  if (hideWhenExpired && expired) return null;

  const cells = [
    { value: left.days, label: "days" },
    { value: left.hours, label: "hrs" },
    { value: left.minutes, label: "min" },
    ...(showSeconds && !reducedMotion ? [{ value: left.seconds, label: "sec" }] : []),
  ];

  const deadline = new Date(targetISO).toLocaleString("en-GB", {
    timeZone: "Africa/Kampala",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="flex gap-3" role="timer" aria-label={`Countdown to ${deadline} EAT`}>
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
