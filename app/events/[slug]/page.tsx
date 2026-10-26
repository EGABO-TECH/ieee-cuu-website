import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
  Share2,
} from "lucide-react";
import { getEventBySlug, getAllEvents, formatDateEAT, formatDateTimeEAT, msUntil } from "@/lib/events";
import { Countdown } from "@/components/ui/Countdown";
import { SITE } from "@/config/site";
import { IEEEDayRecap } from "@/components/events/IEEEDayRecap";
import { IEEExtremeDetail } from "@/components/events/IEEExtremeDetail";
import { pageMetadata } from "@/lib/metadata";
import { calls } from "@/lib/calls";
import { callStatus } from "@/lib/status";

// Re-render every 5 minutes so status labels follow the clock.
export const revalidate = 300;

const STATUS_LABEL: Record<string, string> = {
  upcoming: "Upcoming",
  "registration-open": "Registration open",
  "registration-closed": "Registration closed",
  live: "Happening today",
  ended: "Past event",
};

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllEvents().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const event = getEventBySlug(params.slug);
  if (!event) return { title: "Event not found" };

  return pageMetadata({
    title: event.title,
    description: event.summary,
    path: `/events/${event.slug}`,
    image: event.flyer,
    imageAlt: event.flyer ? `${event.title} flyer` : undefined,
  });
}

export default function EventDetailPage({ params }: Props) {
  const { slug } = params;

  // Render the bespoke rich layouts for the flagship launch and IEEEXtreme
  if (slug === "ieee-day-2026") return <IEEEDayRecap />;
  if (slug === "ieeextreme-20") return <IEEExtremeDetail />;

  const event = getEventBySlug(slug);
  if (!event) {
    notFound();
  }

  const isPast = event.status === "ended";
  const openCall = calls.find((c) => c.forEvent === event.slug && callStatus(c) !== "closed");

  // schema.org Event. A date-only startDate is valid while the time is unannounced.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.summary,
    startDate: event.timeTbc ? event.startsAt.slice(0, 10) : event.startsAt,
    ...(!event.timeTbc && { endDate: event.endsAt }),
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: event.online
      ? "https://schema.org/OnlineEventAttendanceMode"
      : "https://schema.org/OfflineEventAttendanceMode",
    location: event.online
      ? { "@type": "VirtualLocation", url: `${SITE.canonicalUrl}/events/${event.slug}` }
      : {
          "@type": "Place",
          name: event.venue?.name,
          address: { "@type": "PostalAddress", streetAddress: event.venue?.address, addressCountry: "UG" },
        },
    organizer: { "@type": "Organization", name: SITE.name, url: SITE.canonicalUrl },
    url: `${SITE.canonicalUrl}/events/${event.slug}`,
  };

  return (
    <>
      <main className="min-h-screen bg-[#f5f5f1] text-slate-900 pt-28 sm:pt-32">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div className="mx-auto max-w-5xl px-4 sm:px-10 lg:px-12 py-12">
          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#0D6E6E] mb-8"
          >
            <ArrowLeft size={14} /> Back to all events
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-slate-200/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-700">
              {event.kind}
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
              {STATUS_LABEL[event.status] ?? event.status}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            {event.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            {event.summary}
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <Calendar size={18} className="text-[#0D6E6E] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-slate-400">Date &amp; Time</p>
                <p className="text-sm font-semibold text-slate-800">
                  {event.timeTbc ? formatDateEAT(event.startsAt) : formatDateTimeEAT(event.startsAt)}
                </p>
                {event.timeTbc && event.status !== "ended" && (
                  <p className="text-xs text-slate-500 mt-0.5">Time to be announced</p>
                )}
              </div>
            </div>

            {event.venue && (
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#0D6E6E] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-400">Location</p>
                  <p className="text-sm font-semibold text-slate-800">{event.venue.name}</p>
                  {event.venue.detail ? (
                    <p className="text-xs text-slate-500 mt-0.5">{event.venue.detail}</p>
                  ) : (
                    !isPast && <p className="text-xs text-slate-500 mt-0.5">Exact location to be announced</p>
                  )}
                </div>
              </div>
            )}

            <div className="flex items-start gap-3">
              <Users size={18} className="text-[#0D6E6E] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-slate-400">Who can attend</p>
                <p className="text-sm font-semibold text-slate-800">
                  {event.audience ??
                    (event.registration?.membersOnly ? "IEEE Student Members" : "Open to all CUU students")}
                </p>
              </div>
            </div>
          </div>

          {/* Countdown and actions */}
          {!isPast && (
            <div className="mt-8 flex flex-col gap-6 rounded-2xl border border-[#9dbdc1] bg-white p-6 sm:flex-row sm:items-end sm:justify-between">
              {event.status === "live" ? (
                <p className="text-lg font-semibold text-[#0D6E6E]">Happening today</p>
              ) : (
                <div>
                  <p className="mb-3 text-sm font-semibold text-[#234a52]">
                    {event.timeTbc ? `Counting down to ${formatDateEAT(event.startsAt)}` : "Starts in"}
                  </p>
                  <Countdown targetISO={event.startsAt} initialMs={msUntil(event.startsAt)} showSeconds={false} hideWhenExpired />
                </div>
              )}
              <div className="flex flex-wrap gap-3">
                {event.registration?.url && (
                  <a
                    href={event.registration.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0D6E6E] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1A9090]"
                  >
                    {event.registration.label ?? "RSVP"}
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                )}
                {openCall && (
                  <Link
                    href={openCall.href}
                    className="inline-flex items-center gap-2 rounded-full bg-[#0D6E6E] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1A9090]"
                  >
                    Volunteer at this event
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </Link>
                )}
                <a
                  href={`/events/${event.slug}/calendar.ics`}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  <Calendar size={14} aria-hidden="true" />
                  Add to calendar
                </a>
              </div>
            </div>
          )}

          {/* Agenda */}
          {event.agenda && event.agenda.length > 0 && (
            <div className="mt-12">
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6">Event Schedule</h2>
              <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white overflow-hidden">
                {event.agenda.map((item, i) => (
                  <div key={i} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <p className="text-xs font-semibold text-[#0D6E6E]">{item.start} – {item.end}</p>
                      <h3 className="font-semibold text-slate-900 text-sm mt-0.5">{item.title}</h3>
                      {item.description && <p className="text-xs text-slate-500 mt-1">{item.description}</p>}
                    </div>
                    {item.host && <p className="text-xs text-slate-400 shrink-0">{item.host}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Programme not yet published */}
          {(!event.agenda || event.agenda.length === 0) && event.status !== "ended" && (
            <div className="mt-12 rounded-2xl border border-dashed border-slate-300 bg-white p-6">
              <h2 className="font-serif text-2xl font-bold text-slate-900">Programme</h2>
              <p className="mt-2 text-sm text-slate-600">
                Programme to be announced. Follow the branch on{" "}
                <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#0D6E6E] underline underline-offset-2">
                  LinkedIn
                </a>{" "}
                or{" "}
                <a href={SITE.social.x} target="_blank" rel="noopener noreferrer" className="text-[#0D6E6E] underline underline-offset-2">
                  X
                </a>{" "}
                for updates.
              </p>
            </div>
          )}

          {/* Recap */}
          {event.status === "ended" && (
            <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8">
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Event recap</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {event.recap?.summary && !event.recap.summary.startsWith("TODO")
                  ? event.recap.summary
                  : "A recap with photos is on its way."}
              </p>
              {typeof event.recap?.attendance === "number" && (
                <p className="mt-4 text-sm font-semibold text-slate-800">{event.recap.attendance} people attended.</p>
              )}
              {event.recap?.photos && event.recap.photos.length > 0 && (
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {event.recap.photos.map((photo) => (
                    <figure key={photo.src}>
                      <div className="relative aspect-square overflow-hidden rounded-xl border border-slate-100">
                        <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="(max-width: 640px) 50vw, 280px" />
                      </div>
                      {photo.caption && <figcaption className="mt-1.5 text-xs text-slate-500">{photo.caption}</figcaption>}
                    </figure>
                  ))}
                </div>
              )}
              {event.recap?.links && event.recap.links.length > 0 && (
                <ul className="mt-6 flex flex-wrap gap-3">
                  {event.recap.links.map((l) => (
                    <li key={l.url}>
                      <a href={l.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0D6E6E] hover:text-[#1A9090]">
                        {l.label}
                        <ExternalLink size={13} aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* FAQ */}
          {event.faq && event.faq.length > 0 && (
            <div className="mt-12">
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Questions</h2>
              <div className="divide-y divide-slate-200 border-y border-slate-200">
                {event.faq.map((f) => (
                  <details key={f.q} className="group py-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                      {f.q}
                      <span aria-hidden="true" className="text-xl leading-none text-[#1A9090] transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
