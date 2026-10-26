/**
 * lib/status.ts
 * ─────────────────────────────────────────────────────────────────
 * Pure, date-driven status rules for events and calls.
 * No imports, so the unit tests in tests/status.test.ts can compile
 * this file on its own. All comparisons are in milliseconds, so they
 * are timezone-safe as long as every ISO string carries an offset.
 * ─────────────────────────────────────────────────────────────────
 */

/** Where an event sits relative to now. `end` is exclusive. */
export type EventPhase = "upcoming" | "live" | "past";

export type CallStatus = "upcoming" | "open" | "closing-soon" | "closed";

/** Event status including its registration window, used on event cards. */
export type EventStatus =
  | "upcoming"
  | "registration-open"
  | "registration-closed"
  | "live"
  | "ended";

const CLOSING_SOON_MS = 48 * 3600 * 1000;

export function eventStatus(e: { start: string; end?: string }, now = new Date()): EventPhase {
  const start = new Date(e.start).getTime();
  const end = new Date(e.end ?? e.start).getTime();
  const t = now.getTime();
  if (t < start) return "upcoming";
  if (t < end) return "live";
  return "past";
}

export function callStatus(c: { opens?: string; closes: string }, now = new Date()): CallStatus {
  const t = now.getTime();
  if (c.opens && t < new Date(c.opens).getTime()) return "upcoming";
  const closes = new Date(c.closes).getTime();
  if (t > closes) return "closed";
  return closes - t < CLOSING_SOON_MS ? "closing-soon" : "open";
}

export function computeStatus(
  now: Date,
  event: {
    startsAt: string;
    endsAt: string;
    registration?: { opensAt?: string; closesAt?: string };
  }
): EventStatus {
  const phase = eventStatus({ start: event.startsAt, end: event.endsAt }, now);
  if (phase === "past") return "ended";
  if (phase === "live") return "live";

  const t = now.getTime();
  const { opensAt, closesAt } = event.registration ?? {};
  if (closesAt && t >= new Date(closesAt).getTime()) return "registration-closed";
  if (opensAt && t >= new Date(opensAt).getTime()) return "registration-open";
  return "upcoming";
}
