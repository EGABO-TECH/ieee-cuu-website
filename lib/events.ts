/**
 * lib/events.ts
 * ─────────────────────────────────────────────────────────────────
 * Event status computation in Africa/Kampala timezone (EAT, UTC+3).
 * All status is computed server-side so there is never a client flash.
 * ─────────────────────────────────────────────────────────────────
 */

import branchLaunchData from "@/content/events/branch-launch-2026.json";
import ieeeDayData from "@/content/events/ieee-day-2026.json";
import ieeextremeData from "@/content/events/ieeextreme-20.json";

export type EventStatus =
  | "upcoming"
  | "registration-open"
  | "registration-closed"
  | "live"
  | "ended";

export type EventAgendaItem = {
  start: string;
  end: string;
  title: string;
  host?: string;
  description?: string;
};

export type EventPhoto = {
  src: string;
  alt: string;
  caption?: string;
};

export type EventLink = {
  label: string;
  url: string;
};

export type EventRecap = {
  summary?: string | null;
  attendance?: number | null;
  photos?: EventPhoto[];
  links?: EventLink[];
};

export type EventFaq = {
  q: string;
  a: string;
};

export type EventRegistration = {
  opensAt?: string;
  closesAt?: string;
  url?: string;
  label?: string;
  membersOnly?: boolean;
};

export type EventVenue = {
  name: string;
  address?: string;
  mapUrl?: string;
};

export type EventItem = {
  slug: string;
  title: string;
  summary: string;
  kind: "flagship" | "workshop" | "competition" | "talk" | "social";
  startsAt: string;
  endsAt: string;
  /** True until the start time is announced; hide times while set. */
  timeTbc?: boolean;
  timezone: "Africa/Kampala";
  audience?: string;
  venue?: EventVenue;
  online?: boolean;
  registration?: EventRegistration;
  flyer?: string;
  agenda?: EventAgendaItem[];
  recap?: EventRecap;
  faq?: EventFaq[];
  /** Computed at load time from dates */
  status: EventStatus;
};

/**
 * Compute event status relative to the current server time.
 * All comparisons are purely numeric (ms), so timezone-safe.
 */
export function computeStatus(
  now: Date,
  event: Omit<EventItem, "status">
): EventStatus {
  const start = new Date(event.startsAt).getTime();
  const end = new Date(event.endsAt).getTime();
  const nowMs = now.getTime();

  const regOpens = event.registration?.opensAt
    ? new Date(event.registration.opensAt).getTime()
    : null;
  const regCloses = event.registration?.closesAt
    ? new Date(event.registration.closesAt).getTime()
    : null;

  if (nowMs >= end) return "ended";
  if (nowMs >= start) return "live";
  if (regCloses !== null && nowMs >= regCloses) return "registration-closed";
  if (regOpens !== null && nowMs >= regOpens) return "registration-open";
  return "upcoming";
}

/**
 * Load all events from content files and compute their status.
 * Called server-side only.
 */
export function getAllEvents(): EventItem[] {
  const now = new Date();
  const raw = [
    branchLaunchData as Omit<EventItem, "status">,
    ieeeDayData as Omit<EventItem, "status">,
    ieeextremeData as Omit<EventItem, "status">,
  ];
  return raw.map((e) => ({ ...e, status: computeStatus(now, e) }));
}

/** Get a single event by slug, with computed status. */
export function getEventBySlug(slug: string): EventItem | undefined {
  return getAllEvents().find((e) => e.slug === slug);
}

/** Separate events into upcoming/live and past groups. */
export function partitionEvents(events: EventItem[]): {
  upcoming: EventItem[];
  past: EventItem[];
} {
  const past = events
    .filter((e) => e.status === "ended")
    .sort((a, b) => new Date(b.startsAt).getTime() - new Date(a.startsAt).getTime());
  const upcoming = events
    .filter((e) => e.status !== "ended")
    .sort((a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime());
  return { upcoming, past };
}

/**
 * Format an ISO date string for display in Africa/Kampala timezone.
 * Returns a human-readable string like "6 October 2026, 12:00 EAT"
 */
export function formatEAT(iso: string, opts?: Intl.DateTimeFormatOptions): string {
  return new Date(iso).toLocaleString("en-UG", {
    timeZone: "Africa/Kampala",
    ...opts,
  });
}

export function formatDateEAT(iso: string): string {
  return formatEAT(iso, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatDateTimeEAT(iso: string): string {
  return formatEAT(iso, {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });
}

/**
 * Compute ms remaining from a target ISO string.
 * Used to seed the countdown with a server-computed initial value.
 */
export function msUntil(targetISO: string): number {
  return Math.max(0, new Date(targetISO).getTime() - Date.now());
}
