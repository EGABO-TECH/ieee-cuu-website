"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { VOLUNTEER_CALL } from "@/lib/calls";
import { callStatus, eventStatus } from "@/lib/status";
import launch from "@/content/events/branch-launch-2026.json";

const LAUNCH_HREF = "/events/branch-launch-2026";

type Phase = "volunteer" | "pre-launch" | "launch-day" | "none";

function currentPhase(): Phase {
  const call = callStatus(VOLUNTEER_CALL);
  if (call === "open" || call === "closing-soon") return "volunteer";
  const ev = eventStatus({ start: launch.startsAt, end: launch.endsAt });
  if (ev === "upcoming") return "pre-launch";
  if (ev === "live") return "launch-day";
  return "none";
}

/**
 * Site-wide strip above the header. Status is recomputed on the client
 * (on mount and every minute) so the message follows the calendar:
 * volunteer call, then launch, then launch day, then nothing.
 */
export function AnnouncementBar() {
  const [phase, setPhase] = useState<Phase | null>(null);

  useEffect(() => {
    const update = () => setPhase(currentPhase());
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  // Render nothing until mounted so server and client markup always agree.
  if (phase === null || phase === "none") return null;

  const volunteerOpen = phase === "volunteer";
  const href = volunteerOpen ? VOLUNTEER_CALL.href : LAUNCH_HREF;
  const venueDetail = (launch.venue as { detail?: string }).detail;

  return (
    <Link
      href={href}
      className="group flex min-h-9 items-center justify-center gap-2 bg-[#0D6E6E] px-4 py-2 text-center text-xs font-medium text-white transition hover:bg-[#0b5f5f] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-white"
    >
      {volunteerOpen ? (
        <span>
          <strong className="font-semibold">Volunteer call:</strong> {VOLUNTEER_CALL.slots} spots
          <span className="hidden sm:inline">, closes 27 October</span>.{" "}
          <span className="underline underline-offset-2">Apply now</span>
        </span>
      ) : phase === "launch-day" ? (
        <span>
          <strong className="font-semibold">Launch day:</strong> {venueDetail ?? launch.venue.name}.{" "}
          <span className="underline underline-offset-2">Live details</span>
        </span>
      ) : (
        <span>
          <strong className="font-semibold">Official Branch Launch, 4 November.</strong>{" "}
          <span className="underline underline-offset-2">{launch.timeTbc ? "Details soon" : "See details"}</span>
        </span>
      )}
      <ArrowRight size={13} aria-hidden="true" className="shrink-0 transition group-hover:translate-x-0.5" />
    </Link>
  );
}
