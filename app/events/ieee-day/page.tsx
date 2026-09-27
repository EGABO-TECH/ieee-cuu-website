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
  Share2, 
  Award,
  Coffee,
  HelpCircle,
  ExternalLink
} from "lucide-react";
import { IEEE_DAY_REGISTRATION_URL, IEEE_DAY_TARGET_ISO, WHATSAPP_INVITE_URL } from "@/lib/data";
import { Countdown } from "@/components/ui/Countdown";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "IEEE Day 2026 | CUU Student Branch Launch | Cavendish University Uganda",
  description:
    "Join us on 6 October 2026 at Siyani Campus for the official launch of the IEEE Student Branch at Cavendish University Uganda. Live countdown, program schedule, and free registration.",
};

const SCHEDULE = [
  {
    time: "09:00 AM to 10:00 AM",
    title: "Arrival, Check-in & Welcome Refreshments",
    speaker: "Branch Organizing Committee",
    desc: "Registration badge pick-up, welcome packet distribution, and informal peer networking over morning coffee.",
    icon: Coffee,
  },
  {
    time: "10:00 AM to 10:30 AM",
    title: "Opening Ceremony & Welcome Remarks",
    speaker: "Faculty Advisor & Dean of Science & Tech",
    desc: "Introductory remarks from Cavendish University leadership welcoming students, guests, and IEEE representatives.",
    icon: Award,
  },
  {
    time: "10:30 AM to 11:15 AM",
    title: "Keynote: Advancing Technology for Humanity in Africa",
    speaker: "Guest Speaker · IEEE Uganda Section",
    desc: "A vision for engineering, computing, and professional growth across Africa through IEEE societies and initiatives.",
    icon: Lightbulb,
  },
  {
    time: "11:15 AM to 12:15 PM",
    title: "Official Charter Presentation & Branch Inauguration",
    speaker: "Mulondo Andrew (Branch Chair) & Executive Committee",
    desc: "Unveiling the official IEEE Cavendish University Uganda charter, swearing-in of branch officers, and cake cutting ceremony.",
    icon: Sparkles,
  },
  {
    time: "12:15 PM to 01:30 PM",
    title: "Networking Lunch & Official Group Photography",
    speaker: "All Attendees & VIP Guests",
    desc: "Commemorative group photos in the auditorium followed by an open networking lunch with faculty and student peers.",
    icon: Users,
  },
  {
    time: "01:30 PM to 02:30 PM",
    title: "Tech Demos: Cloud, AI & Open-Source Opportunities",
    speaker: "AWS Student Builders & Black Python Devs",
    desc: "Interactive presentations by campus ambassadors showcasing real projects, free cloud credits, and global mentorship programs.",
    icon: Rocket,
  },
  {
    time: "02:30 PM to 03:15 PM",
    title: "Road to IEEEXtreme 20.0: Global Hackathon Briefing",
    speaker: "Mulo Ausi & Niwasiima Ashelycole (Technical Leads)",
    desc: "Everything you need to know about forming a 2 to 3 person team for the 24-hour virtual competitive programming challenge.",
    icon: Settings,
  },
  {
    time: "03:15 PM to 04:00 PM",
    title: "Student Membership Induction, Raffles & Wrap-Up",
    speaker: "Membership Team",
    desc: "Assisted student registration, raffle prize giveaways, and closing remarks by Branch Chair.",
    icon: CheckCircle2,
  },
];

const PERKS = [
  {
    title: "Global IEEE Credentials",
    desc: "Be officially recognized as a founding student member of the IEEE CUU Student Branch.",
  },
  {
    title: "High-Impact Workshops",
    desc: "Experience practical tech talks and masterclasses spanning cloud, artificial intelligence, and open source.",
  },
  {
    title: "Direct Professional Network",
    desc: "Interact with senior engineers, IEEE Uganda Section executives, and industry mentors.",
  },
  {
    title: "Hackathon Track Access",
    desc: "Priority onboarding and proctor support for IEEEXtreme 20.0 and regional coding contests.",
  },
];

const FAQS = [
  {
    q: "Is IEEE Day free to attend?",
    a: "Yes! Admission to IEEE Day 2026 is 100% free for all Cavendish University Uganda students, alumni, and faculty.",
  },
  {
    q: "Do I have to be a Computer Science or Engineering student?",
    a: "No. IEEE is an interdisciplinary global organization. Students from Business, Public Health, Law, and Social Sciences are warmly welcome.",
  },
  {
    q: "What should I bring with me?",
    a: "Bring your Cavendish University Student ID for badge collection, a notebook or laptop for the technical sessions, and your enthusiasm!",
  },
  {
    q: "Can I register for an official IEEE Student Membership on the day?",
    a: "Yes! Our registration desk will guide students step-by-step through subsidized student membership registration with instant perks.",
  },
];

export default function IEEEDayPage() {
  return (
    <>
      <main className="min-h-screen bg-[#f5f5f1] text-slate-900 pt-24 sm:pt-28">
        {/* Ambient Top Glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[1000px] rounded-full opacity-[0.14]"
          style={{ background: "radial-gradient(ellipse at center, #0D6E6E 0%, #1A9090 45%, transparent 75%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-48 right-0 h-[450px] w-[450px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(ellipse at center, #1A9090 0%, transparent 70%)" }}
        />

        {/* ── EVENT STATUS & REGISTRATION ── */}
        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 pt-4 pb-2">
          <div className="flex flex-wrap items-center justify-end gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                Registrations Open
              </span>
              <a
                href={IEEE_DAY_REGISTRATION_URL}
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#0D6E6E] px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-[#1A9090]"
              >
                RSVP Now
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* ── HERO BANNER ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-12 lg:py-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-md bg-[#dfeff0] px-3 py-1 text-[12px] font-medium text-[#2f5f68]">
              <span className="h-1 w-1 rounded-full bg-[#2f5f68]/50" aria-hidden="true" />
              Flagship branch launch &amp; celebration
            </span>

            <h1 className="mt-6 font-serif text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              IEEE Day 2026<br />
              <span className="text-[#1A9090] italic">CUU Student Branch</span> Launch
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted">
              Together for a Brighter Future. Join us as Cavendish University Uganda officially inaugurates
              its IEEE Student Branch. Experience inspiring tech keynotes, hands-on workshops, and celebrate
              the founding cohort of future technology leaders.
            </p>

            {/* Quick Meta Strip */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-700">
              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 backdrop-blur-md">
                <Calendar size={17} className="text-[#0D6E6E]" />
                <span className="font-semibold">6th October 2026</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 backdrop-blur-md">
                <Clock size={17} className="text-[#0D6E6E]" />
                <span>09:00 AM to 04:00 PM EAT</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 backdrop-blur-md">
                <MapPin size={17} className="text-[#0D6E6E]" />
                <span>Siyani Campus, Kampala</span>
              </div>
            </div>

            {/* Live Countdown Box */}
            <div className="mt-10 mx-auto max-w-md rounded-2xl border border-white/10 bg-gradient-to-b from-[#E0DDD5]/90 to-[#0B0F19]/90 p-6 shadow-2xl backdrop-blur-xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-200">
                Official Countdown to Event Kickoff
              </p>
              <div className="flex justify-center">
                <Countdown targetISO={IEEE_DAY_TARGET_ISO} />
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={IEEE_DAY_REGISTRATION_URL}
                  className="group inline-flex items-center gap-2 rounded-full bg-[#0D6E6E] px-7 py-3 text-sm font-bold text-ink shadow-lg shadow-[#0D6E6E]/30 transition hover:bg-[#1A9090] hover:-translate-y-0.5"
                >
                  <span>Register Free Seat</span>
                  <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="/images/IEEE-Flyer.png"
                  download="IEEE-Day-2026-CUU-Flyer.png"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  <Download size={15} />
                  <span>Download Flyer</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FLYER & HIGHLIGHTS SPLIT SECTION ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center rounded-3xl border border-ieee/10 bg-white overflow-hidden p-8 sm:p-12">
            {/* Left: Flyer Showcase */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[340px] overflow-hidden rounded-2xl border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.7)] group">
                <Image
                  src="/images/IEEE-Flyer.png"
                  alt="Official IEEE Day 2026 Flyer"
                  width={500}
                  height={700}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                  <a
                    href="/images/IEEE-Flyer.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-black shadow-lg"
                  >
                    View Full Resolution
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
              <p className="mt-3 text-xs text-muted text-center">
                Scan QR code on flyer or use direct links above
              </p>
            </div>

            {/* Right: Key Highlights */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-700">
                  Event Experience
                </span>
                <h2 className="mt-2 font-serif text-3xl font-bold text-ink sm:text-4xl">
                  What IEEE Day 2026 Unlocks For You
                </h2>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted">
                  IEEE Day is celebrated annually by hundreds of thousands of engineers, researchers, and students
                  in over 160 countries. This year marks a historic milestone as Cavendish University Uganda
                  inaugurates its official Student Branch charter.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {PERKS.map((p) => (
                  <div key={p.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-center gap-2 font-semibold text-slate-900 text-base">
                      <CheckCircle2 size={18} className="text-[#1A9090] shrink-0" />
                      <h4>{p.title}</h4>
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Callout Box */}
              <div className="rounded-2xl border border-[#1A9090]/40 bg-[#0D6E6E]/20 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">Want to join the WhatsApp organizing group?</h4>
                  <p className="text-xs text-slate-600 mt-1">Get real-time announcements, speaker reveal alerts, and transport coordination.</p>
                </div>
                <a
                  href={WHATSAPP_INVITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  Join Community
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── INTERACTIVE TIMELINE / SCHEDULE ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-16">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 rounded-md bg-[#dfeff0] px-3 py-1 text-[12px] font-medium text-[#2f5f68]">
              <span className="h-1 w-1 rounded-full bg-[#2f5f68]/50" aria-hidden="true" />
              Full day agenda
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-ink sm:text-4xl">
              Program Schedule & Sessions
            </h2>
            <p className="mt-3 text-sm text-muted">
              A packed, inspiring day featuring technical masterclasses, leadership talks, ceremonial launches, and networking.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {SCHEDULE.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col sm:flex-row items-start gap-5 rounded-2xl border border-ieee/10 bg-white p-6 backdrop-blur-sm transition duration-300 hover:border-[#1A9090]/50 hover:bg-white"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-ieee/10 text-ieee group-hover:scale-105 group-hover:bg-[#1A9090]/30 transition-all">
                    <Icon size={22} />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        {item.time}
                      </span>
                      <span className="rounded-full border border-ieee/10 bg-white px-2.5 py-0.5 text-[11px] text-muted">
                        {item.speaker}
                      </span>
                    </div>

                    <h3 className="mt-2 text-lg font-bold text-ink group-hover:text-ieee transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── VENUE & CAMPUS MAP ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-16">
          <div className="rounded-3xl border border-white/[0.08] bg-[#0c0e17] p-8 sm:p-12 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-5">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
                  Event Location
                </span>
                <h2 className="font-serif text-3xl font-bold text-ink">
                  Cavendish University Uganda · Siyani Campus
                </h2>
                <p className="text-sm leading-relaxed text-muted">
                  The inaugural ceremony will take place at the Siyani Campus Main Auditorium, located along Ggaba Road in Kampala. Free security-controlled parking and campus Wi-Fi will be available for all registered participants.
                </p>

                <div className="space-y-3 text-sm text-slate-300">
                  <div className="flex items-center gap-3">
                    <MapPin size={17} className="text-[#E8F5F5] shrink-0" />
                    <span>Plot 1469 Ggaba Road, Nsambya / Kansanga, Kampala</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={17} className="text-[#1A9090] shrink-0" />
                    <span>Doors open at 08:30 AM · Registration starts 09:00 AM</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://www.google.com/maps/search/Plot+1469+Ggaba+Road+Kampala+Cavendish+University+Uganda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold text-slate-800 transition hover:bg-slate-50"
                  >
                    Open in Google Maps
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* Map embed */}
              <div className="lg:col-span-7 h-[320px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
                <iframe
                  title="Cavendish University Uganda Map"
                  src="https://www.google.com/maps?q=Plot+1469+Ggaba+Road+Kampala+Uganda+Cavendish+University&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full grayscale-[20%]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── EVENT FAQS ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 rounded-md bg-white border border-slate-100 px-3 py-1 text-[12px] font-medium text-slate-600">
              <span className="h-1 w-1 rounded-full bg-slate-400" aria-hidden="true" />
              Got questions?
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-ink sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-ieee/10 bg-white/80 p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle size={18} className="text-[#E8F5F5] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-ink text-base">{faq.q}</h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FINAL CTA BANNER ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 pb-24 pt-10">
          <div className="relative overflow-hidden rounded-3xl border border-[#1A9090]/40 bg-gradient-to-r from-[#E0DDD5] via-[#E8F0F0] to-[#F7F4EF] p-10 sm:p-14 text-center shadow-2xl">
            <h2 className="font-serif text-3xl font-bold text-ink sm:text-4xl">
              Reserve Your Place at the Launch
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base text-muted">
              Seats inside the Siyani Auditorium are allocated on a first-registered basis. Don&apos;t miss being in the inaugural room.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={IEEE_DAY_REGISTRATION_URL}
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-black shadow-xl transition hover:bg-neutral-200 hover:scale-105"
              >
                Register Free Now
                <ArrowUpRight size={16} />
              </a>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                Explore Other Events
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
