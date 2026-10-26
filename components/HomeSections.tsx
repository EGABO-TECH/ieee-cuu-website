import Link from "next/link";
import { ArrowUpRight, Award, BookOpen, Calendar, Code2, Globe2, HandHeart, MapPin, Trophy, UserPlus, Users2 } from "lucide-react";
import { Countdown } from "./ui/Countdown";
import { getEventBySlug, msUntil } from "@/lib/events";
import { VOLUNTEER_CALL } from "@/lib/calls";
import { callStatus } from "@/lib/status";
import { journey } from "@/lib/data";
import { cuucsaIndependence } from "@/content/cuucsa";
import teamData from "@/content/team.json";

const LAUNCH_SLUG = "branch-launch-2026";

/** Next flagship event, driven by content/events/branch-launch-2026.json. */
export function LaunchBlock() {
  const launch = getEventBySlug(LAUNCH_SLUG);
  if (!launch || launch.status === "ended") return null;
  const live = launch.status === "live";

  return (
    <section aria-labelledby="launch-title" className="bg-bg py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-8 rounded-3xl bg-[#0B1E2E] p-8 text-white sm:p-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300/90">
              {live ? "Happening today" : "Next flagship event"}
            </p>
            <h2 id="launch-title" className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl">
              {launch.title}
            </h2>
            <ul className="mt-6 space-y-2 text-sm text-white/85">
              <li className="flex items-center gap-3">
                <Calendar size={16} aria-hidden="true" className="shrink-0 text-cyan-300" />
                Wednesday 4 November 2026
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} aria-hidden="true" className="shrink-0 text-cyan-300" />
                {launch.venue?.name}
                {launch.venue?.detail && `, ${launch.venue.detail}`}
              </li>
            </ul>
            {launch.timeTbc && <p className="mt-4 text-sm text-white/70">Time and venue details coming soon.</p>}
          </div>
          <div className="lg:justify-self-end">
            {!live && (
              <div className="[&_b]:text-slate-900">
                <Countdown targetISO={launch.startsAt} initialMs={msUntil(launch.startsAt)} showSeconds={false} hideWhenExpired />
              </div>
            )}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/events/${LAUNCH_SLUG}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#0B1E2E] transition hover:bg-[#dfeff0]"
              >
                {live ? "Live details" : "Launch details"}
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
              {!launch.timeTbc && (
                <a
                  href={`/events/${LAUNCH_SLUG}/calendar.ics`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Add to calendar
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WaysIn() {
  const volunteerOpen = callStatus(VOLUNTEER_CALL) !== "closed";
  const ways = [
    {
      icon: UserPlus,
      title: "Join",
      body: "Register your interest, then become an IEEE Student Member when you are ready.",
      href: "/join",
      cta: "Join the branch",
    },
    {
      icon: HandHeart,
      title: "Volunteer",
      body: volunteerOpen
        ? `${VOLUNTEER_CALL.slots} spots to help run the Official Branch Launch. No experience needed.`
        : "Help run branch events. Register your interest for the next call.",
      href: volunteerOpen ? VOLUNTEER_CALL.href : "/join",
      cta: volunteerOpen ? "Apply to volunteer" : "Register interest",
    },
    {
      icon: Code2,
      title: "Compete",
      body: "IEEEXtreme is IEEE's 24-hour global programming contest for teams of Student Members.",
      href: "/events/ieeextreme-20",
      cta: "About IEEEXtreme",
    },
  ];

  return (
    <section aria-labelledby="ways-title" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-12">
        <h2 id="ways-title" className="mb-8 font-serif text-3xl font-bold text-ink sm:text-4xl">
          Three ways in
        </h2>
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {ways.map(({ icon: Icon, ...w }) => (
            <li key={w.title} className="flex flex-col rounded-2xl border border-ink/10 bg-[#fafaf8] p-6">
              <Icon size={22} aria-hidden="true" className="text-[#0D6E6E]" />
              <h3 className="mt-4 text-xl font-semibold text-ink">{w.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{w.body}</p>
              <Link href={w.href} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0D6E6E] hover:text-[#1A9090]">
                {w.cta}
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const BENEFITS = [
  { icon: BookOpen, title: "IEEE Xplore", body: "IEEE Student Members can use the IEEE Xplore digital library for research.", href: "/resources" },
  { icon: Trophy, title: "Competitions", body: "Take part in IEEEXtreme and other IEEE student contests.", href: "/events/ieeextreme-20" },
  { icon: Users2, title: "Societies", body: "Explore IEEE technical societies such as the Computer Society and Women in Engineering.", href: "/programs" },
  { icon: Award, title: "Leadership", body: "Volunteer, take on branch roles and help run events.", href: "/team" },
  { icon: Globe2, title: "A global network", body: "Connect with students and professionals across the IEEE Uganda Section and Region 8.", href: "/about" },
];

export function WhatYouGet() {
  return (
    <section aria-labelledby="benefits-title" className="bg-bg py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-12">
        <h2 id="benefits-title" className="mb-8 font-serif text-3xl font-bold text-ink sm:text-4xl">
          What you get
        </h2>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {BENEFITS.map(({ icon: Icon, ...b }) => (
            <li key={b.title}>
              <Link href={b.href} className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-5 transition hover:border-[#1A9090]/50">
                <Icon size={20} aria-hidden="true" className="text-[#0D6E6E]" />
                <h3 className="mt-3 font-semibold text-ink group-hover:text-[#0D6E6E]">{b.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{b.body}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function StudentJourney() {
  return (
    <section aria-labelledby="journey-title" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-12">
        <h2 id="journey-title" className="mb-8 font-serif text-3xl font-bold text-ink sm:text-4xl">
          Your journey with the branch
        </h2>
        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {journey.map((j) => (
            <li key={j.step} className="flex gap-4 rounded-2xl border border-ink/10 bg-[#fafaf8] p-5">
              <span className="font-display text-2xl font-bold text-[#1A9090]" aria-hidden="true">
                {j.step}
              </span>
              <div>
                <h3 className="font-semibold text-ink">{j.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{j.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Recognition() {
  return (
    <section aria-labelledby="recognition-title" className="bg-bg py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-6 rounded-3xl border border-[#9dbdc1] bg-white p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#dfeff0] px-3 py-1 text-xs font-semibold text-[#234a52]">
              <Award size={14} aria-hidden="true" />
              Recognised on IEEE Day 2026
            </p>
            <h2 id="recognition-title" className="mt-4 font-serif text-2xl font-bold text-ink sm:text-3xl">
              Certificate of approval, 6 October 2026
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              At the American Center in Kabalagala, student branches from across Uganda celebrated IEEE Day together.
              Cavendish University Uganda was recognised as one of the branches being reborn and received its official
              certificate of approval.
            </p>
          </div>
          <Link
            href="/events/ieee-day-2026"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#0D6E6E] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1A9090]"
          >
            Read the recap
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

type TeamMember = { id: string; name: string; role: string; group: string; consent: boolean };
const LEADERSHIP_IDS = ["mulondo-andrew", "dr-john-bosco-ssemakula", "tabingwa-evans-maganda"];

export function LeadershipStrip() {
  const team = teamData as TeamMember[];
  const leaders = LEADERSHIP_IDS.map((id) => team.find((m) => m.id === id && m.consent)).filter(
    (m): m is TeamMember => Boolean(m)
  );

  return (
    <section aria-labelledby="leaders-title" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-12">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 id="leaders-title" className="font-serif text-3xl font-bold text-ink sm:text-4xl">
            Branch leadership
          </h2>
          <Link href="/team" className="text-sm font-semibold text-[#0D6E6E] hover:text-[#1A9090]">
            Meet the full team →
          </Link>
        </div>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {leaders.map((m) => (
            <li key={m.id} className="rounded-2xl border border-ink/10 bg-[#fafaf8] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#0D6E6E]">{m.role}</p>
              <p className="mt-1 font-serif text-lg font-bold text-ink">{m.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CuucsaTieIn() {
  return (
    <section aria-labelledby="cuucsa-tie-title" className="bg-bg py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-4 rounded-2xl border border-ink/10 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-3xl">
            <h2 id="cuucsa-tie-title" className="font-semibold text-ink">
              Working with CUUCSA
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-muted">{cuucsaIndependence}</p>
          </div>
          <Link href="/cuucsa" className="shrink-0 text-sm font-semibold text-[#0D6E6E] hover:text-[#1A9090]">
            About CUUCSA →
          </Link>
        </div>
      </div>
    </section>
  );
}

