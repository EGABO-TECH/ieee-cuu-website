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
import { SiteFooter } from "@/components/SiteFooter";
import { SITE } from "@/config/site";
import IEEEDayPage from "../ieee-day/page";
import IEEExtremePage from "../ieeextreme/page";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const events = getAllEvents();
  const slugs = events.map((e) => ({ slug: e.slug }));
  // Add common aliases
  return [
    ...slugs,
    { slug: "ieee-day" },
    { slug: "ieeextreme" },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let slug = params.slug;
  if (slug === "ieee-day") slug = "ieee-day-2026";
  if (slug === "ieeextreme") slug = "ieeextreme-20";

  const event = getEventBySlug(slug);
  if (!event) return { title: "Event Not Found" };

  return {
    title: `${event.title} | IEEE Student Branch Cavendish University Uganda`,
    description: event.summary,
  };
}

export default function EventDetailPage({ params }: Props) {
  const { slug } = params;

  // Render the bespoke rich layouts for the flagship launch and IEEEXtreme
  if (slug === "ieee-day-2026" || slug === "ieee-day") {
    return <IEEEDayPage />;
  }

  if (slug === "ieeextreme-20" || slug === "ieeextreme") {
    return <IEEExtremePage />;
  }

  const event = getEventBySlug(slug);
  if (!event) {
    notFound();
  }

  const msLeft = event.registration?.closesAt ? msUntil(event.registration.closesAt) : 0;

  return (
    <>
      <main className="min-h-screen bg-[#f5f5f1] text-slate-900 pt-24 sm:pt-28">
        <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-12 py-12">
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
              Status: {event.status}
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
                <p className="text-sm font-semibold text-slate-800">{formatDateTimeEAT(event.startsAt)}</p>
              </div>
            </div>

            {event.venue && (
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#0D6E6E] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-400">Location</p>
                  <p className="text-sm font-semibold text-slate-800">{event.venue.name}</p>
                </div>
              </div>
            )}

            <div className="flex items-start gap-3">
              <Users size={18} className="text-[#0D6E6E] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-slate-400">Eligibility</p>
                <p className="text-sm font-semibold text-slate-800">
                  {event.registration?.membersOnly ? "IEEE Student Members" : "Open to all CUU students"}
                </p>
              </div>
            </div>
          </div>

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

          {/* Recap */}
          {event.status === "ended" && (
            <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8">
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Event Recap</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {event.recap?.summary && !event.recap.summary.startsWith("TODO")
                  ? event.recap.summary
                  : "Photos and detailed attendance recap for this event are currently being compiled."}
              </p>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
