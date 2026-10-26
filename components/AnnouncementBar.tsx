"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { VOLUNTEER_CALL } from "@/lib/calls";
import { callStatus, type CallStatus } from "@/lib/status";

const LAUNCH_HREF = "/events/branch-launch-2026";

/**
 * Site-wide strip above the header. Status is recomputed on the client
 * (on mount and every minute) so the message flips when the volunteer
 * call closes without needing a redeploy.
 */
export function AnnouncementBar() {
  const [status, setStatus] = useState<CallStatus | null>(null);

  useEffect(() => {
    const update = () => setStatus(callStatus(VOLUNTEER_CALL));
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  // Render nothing until mounted so server and client markup always agree.
  if (status === null) return null;

  const volunteerOpen = status === "open" || status === "closing-soon";
  const href = volunteerOpen ? VOLUNTEER_CALL.href : LAUNCH_HREF;

  return (
    <Link
      href={href}
      className="group mx-auto mb-3 flex max-w-7xl items-center justify-center gap-2 rounded-full border border-white/15 bg-[#0D6E6E] px-4 py-2 text-center text-xs font-medium text-white shadow-[0_8px_24px_rgba(5,26,26,0.3)] transition hover:bg-[#0b5f5f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      {volunteerOpen ? (
        <span>
          <strong className="font-semibold">Volunteer call:</strong> {VOLUNTEER_CALL.slots} spots
          <span className="hidden sm:inline">, closes 27 October</span>.{" "}
          <span className="underline underline-offset-2">Apply now</span>
        </span>
      ) : (
        <span>
          <strong className="font-semibold">Official Branch Launch, 4 November.</strong>{" "}
          <span className="underline underline-offset-2">Details soon</span>
        </span>
      )}
      <ArrowRight size={13} aria-hidden="true" className="shrink-0 transition group-hover:translate-x-0.5" />
    </Link>
  );
}
