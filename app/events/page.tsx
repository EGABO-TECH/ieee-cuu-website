import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Trophy,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { getAllEvents, partitionEvents, formatDateEAT, msUntil, type EventItem } from "@/lib/events";
import { Countdown } from "@/components/ui/Countdown";

export const metadata: Metadata = pageMetadata({
  title: "Events",
  description:
    "Explore upcoming and past events, hackathons, and celebrations hosted by the IEEE Student Branch at Cavendish University Uganda.",
  path: "/events",
});

// Re-render every 5 minutes so events move from Upcoming to Past on time.
export const revalidate = 300;

// Server component — no client flash
export default function EventsPage() {
  const events = getAllEvents();
  const { upcoming, past } = partitionEvents(events);

  return (
    <>
      <main className="min-h-screen bg-[#f5f5f1] text-slate-900 pt-24 sm:pt-28">
        {/* Ambient Glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[1100px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(ellipse at center, #0D6E6E 0%, #1A9090 50%, transparent 75%)" }}
        />

        {/* ── HERO ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-12 lg:py-16 text-center">
          <h1 className="font-serif text-4xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Branch Events
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-slate-600">
            Celebrations, global programming contests, and hands-on technical workshops
            hosted by the IEEE Student Branch at Cavendish University Uganda.
          </p>
        </section>

        {/* ── UPCOMING EVENTS ── */}
        {upcoming.length > 0 && (
          <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
              Upcoming
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcoming.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          </section>
        )}

        {/* ── PAST EVENTS ── */}
        {past.length > 0 && (
          <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-10 pb-24">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
              Past Events
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {past.map((event) => (
                <EventCard key={event.slug} event={event} past />
              ))}
            </div>
          </section>
        )}

        {/* ── UPCOMING WORKSHOPS (planned, not confirmed) ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-10 pb-24">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10">
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-2">
              Planned activities
            </h2>
            <p className="text-sm text-slate-500 mb-6">
              These sessions are in the planning stage. Dates and details will be confirmed closer to the time.
            </p>
            <ul className="space-y-4">
              {[
                {
                  category: "Cloud & AI",
                  title: "AWS Cloud Foundations & AI Builder Workshop",
                  lead: "Niwasiima Ashelycole (AWS Student Builder)",
                  date: "Planned — November 2026",
                },
                {
                  category: "Python & Open Source",
                  title: "Python for Data & Open-Source Sprints",
                  lead: "Egabo Aaron & community partners",
                  date: "Planned — November 2026",
                },
                {
                  category: "Career & Leadership",
                  title: "IEEE CS Micro-Mentoring & Portfolio Review",
                  lead: "Executive Committee & Guest Mentors",
                  date: "Planned — December 2026",
                },
              ].map((w) => (
                <li key={w.title} className="flex flex-col sm:flex-row sm:items-center gap-2 border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                  <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
                    {w.category}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-slate-900 text-sm">{w.title}</p>
                    <p className="text-xs text-slate-500">{w.lead}</p>
                  </div>
                  <span className="shrink-0 text-xs text-slate-400">{w.date}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-slate-400">
              Stay updated by joining the{" "}
              <a href="/join" className="text-[#0D6E6E] underline underline-offset-2 hover:text-[#1A9090]">
                branch WhatsApp group
              </a>
              .
            </p>
          </div>
        </section>
      </main>

    </>
  );
}

function StatusBadge({ status }: { status: EventItem["status"] }) {
  const map: Record<EventItem["status"], { label: string; className: string }> = {
    upcoming: {
      label: "Upcoming",
      className: "bg-blue-50 border-blue-200 text-blue-700",
    },
    "registration-open": {
      label: "Registration open",
      className: "bg-green-50 border-green-200 text-green-700",
    },
    "registration-closed": {
      label: "Registration closed",
      className: "bg-amber-50 border-amber-200 text-amber-700",
    },
    live: {
      label: "Happening now",
      className: "bg-red-50 border-red-200 text-red-700",
    },
    ended: {
      label: "Ended",
      className: "bg-slate-50 border-slate-200 text-slate-500",
    },
  };
  const { label, className } = map[status];
  return (
    <span className={`inline-block rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${className}`}>
      {label}
    </span>
  );
}

function EventCard({ event, past }: { event: EventItem; past?: boolean }) {
  const href = `/events/${event.slug}`;
  const msLeft = event.registration?.closesAt ? msUntil(event.registration.closesAt) : 0;

  return (
    <div className={`group flex flex-col justify-between rounded-3xl border bg-white overflow-hidden transition-all duration-300 hover:shadow-2xl ${past ? "border-slate-200" : "border-ieee/10 hover:border-[#1A9090]/50"}`}>
      <div className="p-8 sm:p-10">
        <div className="flex items-center justify-between gap-2 mb-4">
          <StatusBadge status={event.status} />
          <span className="text-xs text-slate-500">{formatDateEAT(event.startsAt)}</span>
        </div>

        {event.flyer && (
          <div className="relative h-40 w-full overflow-hidden rounded-xl mb-6 border border-white/10 shadow">
            <Image
              src={event.flyer}
              alt={`${event.title} flyer`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        <h3 className="font-serif text-2xl font-bold text-slate-900 group-hover:text-[#0D6E6E] transition-colors">
          {event.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">{event.summary}</p>

        {event.venue && (
          <div className="mt-4 flex items-center gap-2 text-xs text-slate-600">
            <MapPin size={13} className="shrink-0 text-[#0D6E6E]" />
            <span>{event.venue.name}</span>
          </div>
        )}

        {event.status === "ended" && event.recap?.summary && !event.recap.summary.startsWith("TODO") && (
          <div className="mt-5 rounded-xl bg-slate-50 border border-slate-100 p-4">
            <p className="text-xs font-semibold text-slate-700 mb-1">Recap</p>
            <p className="text-sm text-slate-600 leading-relaxed">{event.recap.summary}</p>
          </div>
        )}

        {event.status === "ended" && (!event.recap?.summary || event.recap.summary.startsWith("TODO")) && (
          <div className="mt-5 rounded-xl bg-slate-50 border border-dashed border-slate-200 p-4">
            <p className="text-xs text-slate-400">Recap coming soon.</p>
          </div>
        )}

        {/* Countdown for upcoming/registration-open events */}
        {(event.status === "registration-open" || event.status === "upcoming") && event.registration?.closesAt && (
          <div className="mt-6">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-3">
              Registration closes
            </p>
            <Countdown
              targetISO={event.registration.closesAt}
              initialMs={msLeft}
              showSeconds={false}
              hideWhenExpired
            />
          </div>
        )}
      </div>

      <div className="border-t border-slate-100 bg-slate-50 p-6 flex items-center justify-between">
        <Link
          href={href}
          className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold transition ${
            past
              ? "bg-slate-200 text-slate-700 hover:bg-slate-300"
              : "bg-[#0D6E6E] text-white hover:bg-[#1A9090]"
          }`}
        >
          {past ? "View recap" : "View details"}
          <ArrowUpRight size={14} />
        </Link>
        {event.status === "registration-open" && event.registration?.url && (
          <a
            href={event.registration.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#0D6E6E] hover:text-[#1A9090] transition"
          >
            {event.registration.label ?? "Register"} ↗
          </a>
        )}
      </div>
    </div>
  );
}
