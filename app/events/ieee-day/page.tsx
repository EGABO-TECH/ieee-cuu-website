import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Lightbulb,
  Settings,
  Network,
  Rocket,
  ArrowUpRight,
  Download,
  CheckCircle2,
  Sparkles,
  Award,
  Coffee,
  HelpCircle,
  ExternalLink,
  ImageIcon,
} from "lucide-react";
import { getEventBySlug, formatDateEAT, msUntil } from "@/lib/events";
import { Countdown } from "@/components/ui/Countdown";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "IEEE Day 2026 | CUU Student Branch Launch | Cavendish University Uganda",
  description:
    "The official launch of the IEEE Student Branch at Cavendish University Uganda, held on 6 October 2026 at Siyani Campus.",
};

const SCHEDULE = [
  {
    time: "12:00 PM – 12:30 PM",
    title: "Arrival, Check-in & Welcome Refreshments",
    speaker: "Branch Organizing Committee",
    desc: "Registration badge pick-up, welcome packet distribution, and informal peer networking over refreshments.",
    icon: Coffee,
  },
  {
    time: "12:30 PM – 12:50 PM",
    title: "Opening Ceremony & Welcome Remarks",
    speaker: "Faculty Advisor & Dean of Science & Tech",
    desc: "Introductory remarks from Cavendish University leadership welcoming students, guests, and IEEE representatives.",
    icon: Award,
  },
  {
    time: "12:50 PM – 1:30 PM",
    title: "Keynote: Advancing Technology for Humanity in Africa",
    speaker: "Guest Speaker · IEEE Uganda Section",
    desc: "A vision for engineering, computing, and professional growth across Africa through IEEE societies and initiatives.",
    icon: Lightbulb,
  },
  {
    time: "1:30 PM – 2:15 PM",
    title: "Official Charter Presentation & Branch Inauguration",
    speaker: "Mulondo Andrew (Branch Chair) & Executive Committee",
    desc: "Unveiling the official IEEE CUU Student Branch charter, swearing-in of branch officers, and cake cutting ceremony.",
    icon: Sparkles,
  },
  {
    time: "2:15 PM – 3:00 PM",
    title: "Networking Break & Group Photography",
    speaker: "All Attendees & VIP Guests",
    desc: "Commemorative group photos followed by time to connect with faculty, guests, and fellow students.",
    icon: Users,
  },
  {
    time: "3:00 PM – 4:00 PM",
    title: "Tech Demos: Cloud, AI & Open-Source",
    speaker: "AWS Student Builders & community partners",
    desc: "Interactive presentations by campus ambassadors showcasing real projects, free cloud credits, and global programs.",
    icon: Rocket,
  },
  {
    time: "4:00 PM – 4:45 PM",
    title: "Road to IEEEXtreme 20.0: Global Hackathon Briefing",
    speaker: "Mulo Ausi & Niwasiima Ashelycole (Technical Coordinators)",
    desc: "Everything you need to know about forming a 2–3 person team for the 24-hour virtual programming challenge.",
    icon: Settings,
  },
  {
    time: "4:45 PM – 6:00 PM",
    title: "Membership Induction & Closing Remarks",
    speaker: "Membership Team",
    desc: "Assisted student registration, closing remarks by the Branch Chair, and farewell.",
    icon: CheckCircle2,
  },
];

const FAQS = [
  {
    q: "Was IEEE Day free to attend?",
    a: "Yes. Admission was free for all Cavendish University Uganda students, alumni, and faculty.",
  },
  {
    q: "Do I have to be a Computer Science or Engineering student?",
    a: "No. IEEE is an interdisciplinary organisation. Students from Business, Public Health, Law, and Social Sciences are warmly welcome.",
  },
  {
    q: "Can I still join the IEEE Student Branch?",
    a: "Absolutely. Visit the Join page to register your interest, then follow the steps to become an IEEE Student Member.",
  },
  {
    q: "When is the next branch event?",
    a: "Check the Events page for planned upcoming activities. Follow us on social media for the latest announcements.",
  },
];

// Server component — status computed at render time
export default function IEEEDayPage() {
  const event = getEventBySlug("ieee-day-2026");
  const isEnded = !event || event.status === "ended";
  const hasRecap =
    event?.recap?.summary && !event.recap.summary.startsWith("TODO");

  return (
    <>
      <main className="min-h-screen bg-[#f5f5f1] text-slate-900 pt-24 sm:pt-28">
        {/* Ambient glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[1000px] rounded-full opacity-[0.14]"
          style={{ background: "radial-gradient(ellipse at center, #0D6E6E 0%, #1A9090 45%, transparent 75%)" }}
        />

        {/* ── STATUS BANNER ── */}
        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 pt-4 pb-2">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-600">
              {isEnded ? "Event ended" : "Upcoming"}
            </span>
            <Link
              href="/events"
              className="text-xs text-[#0D6E6E] hover:text-[#1A9090] transition"
            >
              ← All events
            </Link>
          </div>
        </div>

        {/* ── HERO ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-12 lg:py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl font-bold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              IEEE Day 2026<br />
              <span className="text-[#1A9090]">CUU Student Branch</span> Launch
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600">
              The official inaugural celebration of the IEEE Student Branch at Cavendish University Uganda —
              keynotes, workshops, branch charter presentation, and community onboarding.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-700">
              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5">
                <Calendar size={17} className="text-[#0D6E6E]" />
                <span className="font-semibold">6 October 2026</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5">
                <Clock size={17} className="text-[#0D6E6E]" />
                <span>12:00 PM – 6:00 PM EAT</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5">
                <MapPin size={17} className="text-[#0D6E6E]" />
                <span>Siyani Campus, Kampala</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── RECAP (if ended) ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-2">
              {isEnded ? "Event recap" : "About this event"}
            </h2>

            {hasRecap ? (
              <p className="text-base text-slate-600 leading-relaxed">{event?.recap?.summary}</p>
            ) : (
              <p className="text-sm text-slate-400 italic">
                {/* TODO(owner): Photos and recap paragraph coming soon */}
                A recap will be added once the branch team supplies photos, the attendance count, and a summary paragraph.
              </p>
            )}

            {/* Photo gallery — empty state */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-slate-700 mb-4">Photos</h3>
              {event?.recap?.photos && event.recap.photos.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {event.recap.photos.map((photo, i) => (
                    <div key={i} className="relative aspect-square rounded-xl overflow-hidden border border-slate-100">
                      <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="200px" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-12 text-center">
                  <ImageIcon size={32} className="text-slate-300 mb-3" />
                  <p className="text-sm text-slate-400">
                    Photos from IEEE Day 2026 are coming soon.
                  </p>
                  <p className="text-xs text-slate-300 mt-1">
                    {/* TODO(owner): Upload event photos to /public/images/events/ieee-day-2026/ */}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/join"
                className="inline-flex items-center gap-2 rounded-full bg-[#0D6E6E] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#1A9090]"
              >
                Join the branch
                <ArrowUpRight size={14} />
              </Link>
              <a
                href="/images/IEEE-Flyer.png"
                download="IEEE-Day-2026-CUU-Flyer.png"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                <Download size={14} />
                Download flyer
              </a>
            </div>
          </div>
        </section>

        {/* ── FLYER & HIGHLIGHTS ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center rounded-3xl border border-slate-100 bg-white overflow-hidden p-8 sm:p-12">
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[320px] overflow-hidden rounded-2xl border border-slate-100 shadow-xl group">
                <Image
                  src="/images/IEEE-Flyer.png"
                  alt="Official IEEE Day 2026 flyer"
                  width={500}
                  height={700}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                  sizes="(max-width: 1024px) 90vw, 320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                  <a
                    href="/images/IEEE-Flyer.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-black shadow-lg"
                  >
                    View full resolution
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <div>
                <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
                  What IEEE Day 2026 Covered
                </h2>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                  IEEE Day is celebrated annually by hundreds of thousands of engineers, researchers, and students
                  in over 160 countries. This year marked a historic milestone as Cavendish University Uganda
                  inaugurated its official Student Branch charter.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Founding student member recognition", desc: "Be part of the first cohort of IEEE CUU Student Branch members." },
                  { title: "Tech workshops", desc: "Practical sessions spanning cloud, AI, and open-source software." },
                  { title: "Professional networking", desc: "Meet senior engineers, IEEE Uganda Section executives, and mentors." },
                  { title: "IEEEXtreme briefing", desc: "Onboarding and proctor support for the 24-hour global programming contest." },
                ].map((p) => (
                  <div key={p.title} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-[#1A9090] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">{p.title}</p>
                        <p className="mt-1 text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SCHEDULE (what happened) ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-16">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Programme — what happened
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              The full agenda as it ran on 6 October 2026.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {SCHEDULE.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col sm:flex-row items-start gap-5 rounded-2xl border border-slate-100 bg-white p-6 transition duration-300 hover:border-[#1A9090]/40"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-[#eaf2f4] text-[#0D5B8F]">
                    <Icon size={22} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                        {item.time}
                      </span>
                      <span className="rounded-full border border-slate-100 bg-slate-50 px-2.5 py-0.5 text-[11px] text-slate-500">
                        {item.speaker}
                      </span>
                    </div>
                    <h3 className="mt-2 text-lg font-bold text-slate-900 group-hover:text-[#0D6E6E] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── VENUE ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-16">
          <div className="rounded-3xl border border-white/10 bg-[#0c0e17] p-8 sm:p-12 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-5">
                <h2 className="font-serif text-3xl font-bold text-white">
                  Cavendish University Uganda{" "}
                  <span className="text-[#62c9c0]">· Siyani Campus</span>
                </h2>
                <div className="space-y-3 text-sm text-slate-300">
                  <div className="flex items-center gap-3">
                    <MapPin size={17} className="text-white/60 shrink-0" />
                    <span>Plot 1469 Ggaba Road, Kampala, Uganda</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={17} className="text-[#1A9090] shrink-0" />
                    <span>12:00 PM – 6:00 PM EAT</span>
                  </div>
                </div>
                <a
                  href={SITE.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  Open in Google Maps
                  <ArrowUpRight size={14} />
                </a>
              </div>
              <div className="lg:col-span-7 h-[320px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <iframe
                  title="Cavendish University Uganda Map"
                  src="https://www.google.com/maps?q=Plot+1469+Ggaba+Road+Kampala+Uganda+Cavendish+University&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQS ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto divide-y divide-slate-100 border-y border-slate-100">
            {FAQS.map((faq, i) => (
              <details key={i} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-left list-none">
                  <span className="font-semibold text-slate-900">{faq.q}</span>
                  <span className="shrink-0 text-[#1A9090] transition-transform group-open:rotate-45 text-xl leading-none">+</span>
                </summary>
                <p className="mt-3 max-w-xl text-sm text-slate-500 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 pb-24 pt-8">
          <div className="relative overflow-hidden rounded-3xl border border-[#1A9090]/30 bg-gradient-to-r from-[#E0DDD5] via-[#E8F0F0] to-[#F7F4EF] p-10 sm:p-14 text-center">
            <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Missed IEEE Day? Join the branch now.
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base text-slate-600">
              The branch is open year-round. Register your interest on the join page and become part of the community.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/join"
                className="inline-flex items-center gap-2 rounded-full bg-[#0D6E6E] px-8 py-3.5 text-sm font-bold text-white shadow-xl transition hover:bg-[#1A9090]"
              >
                Join the branch
                <ArrowUpRight size={16} />
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                See all events
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
