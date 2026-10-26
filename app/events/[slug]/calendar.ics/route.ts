import { NextResponse } from "next/server";
import { getAllEvents, getEventBySlug } from "@/lib/events";
import { SITE } from "@/config/site";

export function generateStaticParams() {
  return getAllEvents().map((e) => ({ slug: e.slug }));
}

/** Escape text per RFC 5545. */
function esc(text: string) {
  return text.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
}

/** UTC timestamp, e.g. 20261104T090000Z */
function utc(iso: string) {
  return new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

/** Calendar date in Kampala, e.g. 20261104 */
function eatDate(iso: string, addDays = 0) {
  const d = new Date(new Date(iso).getTime() + 3 * 3600_000 + addDays * 86400_000);
  return d.toISOString().slice(0, 10).replace(/-/g, "");
}

export function GET(_req: Request, { params }: { params: { slug: string } }) {
  const event = getEventBySlug(params.slug);
  if (!event) return new NextResponse("Not found", { status: 404 });

  const url = `${SITE.canonicalUrl}/events/${event.slug}`;
  // All-day entry until the start time is announced.
  const when = event.timeTbc
    ? [`DTSTART;VALUE=DATE:${eatDate(event.startsAt)}`, `DTEND;VALUE=DATE:${eatDate(event.startsAt, 1)}`]
    : [`DTSTART:${utc(event.startsAt)}`, `DTEND:${utc(event.endsAt)}`];
  const location = event.online ? "Online" : [event.venue?.name, event.venue?.address].filter(Boolean).join(", ");

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//IEEE CUU Student Branch//Events//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${event.slug}@ieee-cuu-student-branch`,
    `DTSTAMP:${utc(new Date().toISOString())}`,
    ...when,
    `SUMMARY:${esc(event.title)}`,
    `DESCRIPTION:${esc(`${event.summary}\n\n${url}`)}`,
    ...(location ? [`LOCATION:${esc(location)}`] : []),
    `URL:${url}`,
    "END:VEVENT",
    "END:VCALENDAR",
    "",
  ].join("\r\n");

  return new NextResponse(ics, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `attachment; filename="${event.slug}.ics"`,
    },
  });
}
