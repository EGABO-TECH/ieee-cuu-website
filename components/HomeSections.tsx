import Link from "next/link";
import { ArrowRight, ArrowUpRight, Calendar, MapPin } from "lucide-react";
import { Countdown } from "./ui/Countdown";
import { SectionHead } from "./SectionHead";
import { PersonCard } from "./PersonCard";
import { NewsCard } from "./news/NewsCard";
import { getEventBySlug, msUntil } from "@/lib/events";
import { VOLUNTEER_CALL } from "@/lib/calls";
import { callStatus } from "@/lib/status";
import { getAllNews } from "@/lib/news";
import teamData from "@/content/team.json";
import { btn, container, nudge } from "@/lib/ui";

const LAUNCH_SLUG = "branch-launch-2026";

/** Next flagship event, driven by content/events/branch-launch-2026.json. Hidden once it has ended. */
export function LaunchBlock() {
  const launch = getEventBySlug(LAUNCH_SLUG);
  if (!launch || launch.status === "ended") return null;
  const live = launch.status === "live";

  return (
    <section aria-labelledby="launch-title" className="bg-[#00629B] text-white [&_:focus-visible]:outline-white">
      <div className={`${container} grid gap-8 py-12 lg:grid-cols-12 lg:items-center`}>
        <div className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FFC72C]">
            {live ? "Happening today" : "Next flagship event"}
          </p>
          <h2 id="launch-title" className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            {launch.title}
          </h2>
          <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/85">
            <li className="flex items-center gap-2">
              <Calendar size={16} aria-hidden="true" className="text-[#FFC72C]" />
              Wednesday 4 November 2026
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} aria-hidden="true" className="text-[#FFC72C]" />
              {launch.venue?.name}
              {launch.venue?.detail && `, ${launch.venue.detail}`}
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5 lg:col-span-5 lg:items-end">
          {!live && <Countdown targetISO={launch.startsAt} initialMs={msUntil(launch.startsAt)} showSeconds={false} hideWhenExpired />}
          <div className="flex flex-wrap gap-3">
            <Link href={`/events/${LAUNCH_SLUG}`} className={btn.accent}>
              {live ? "Live details" : "Launch details"}
              <ArrowRight size={16} aria-hidden="true" className={nudge} />
            </Link>
            {!launch.timeTbc && (
              <a href={`/events/${LAUNCH_SLUG}/calendar.ics`} className={btn.ghost}>
                Add to calendar
              </a>
            )}
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
      title: "Join",
      body: "Register your interest with the branch, then become an IEEE Student Member when you are ready.",
      href: "/join",
      cta: "Join the branch",
    },
    {
      title: "Volunteer",
      body: volunteerOpen
        ? `${VOLUNTEER_CALL.slots} spots to help run the Official Branch Launch. No experience needed.`
        : "Help run workshops and events. Register your interest and we'll contact you for the next call.",
      href: volunteerOpen ? VOLUNTEER_CALL.href : "/join",
      cta: volunteerOpen ? "Apply to volunteer" : "Register interest",
    },
    {
      title: "Compete",
      body: "IEEEXtreme is IEEE's 24-hour global programming contest for teams of Student Members.",
      href: "/events/ieeextreme-20",
      cta: "About IEEEXtreme",
    },
  ];

  return (
    <section aria-labelledby="ways-title" className="bg-white py-20 sm:py-28">
      <div className={container}>
        <SectionHead id="ways-title" kicker="Get involved" title="Three ways in" />
        <ol className="grid border-t border-slate-200 md:grid-cols-3">
          {ways.map((w, i) => (
            <li key={w.title} className="group border-b border-slate-200 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
              <span className="font-display text-sm font-bold tabular-nums text-[#00629B]">0{i + 1}</span>
              <h3 className="mt-3 font-display text-2xl font-bold text-ink">{w.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{w.body}</p>
              <Link href={w.href} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#00629B] hover:text-[#002855]">
                {w.cta}
                <ArrowRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const BENEFITS = [
  { title: "IEEE Xplore", body: "Search IEEE's research library. Full-text access depends on your institution or membership.", href: "/resources" },
  { title: "Competitions", body: "IEEEXtreme and other IEEE student contests.", href: "/events/ieeextreme-20" },
  { title: "Technical societies", body: "Computer Society, Women in Engineering, Robotics and more.", href: "/programs" },
  { title: "Leadership", body: "Volunteer, take on branch roles and run events.", href: "/team" },
  { title: "A global network", body: "Students and professionals across the Uganda Section and Region 8.", href: "/about" },
  { title: "Mentoring", body: "Industry speakers, IEEE Young Professionals and peer learning.", href: "/programs" },
];

export function WhatYouGet() {
  return (
    <section aria-labelledby="benefits-title" className="bg-bg py-20 sm:py-28">
      <div className={container}>
        <SectionHead id="benefits-title" kicker="Membership" title="What being part of IEEE gives you" />
        <ul className="grid gap-px border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <li key={b.title}>
              <Link href={b.href} className="group flex h-full flex-col bg-white p-7 transition-colors hover:bg-[#F5F8FB]">
                <h3 className="flex items-center justify-between font-display text-lg font-bold text-ink group-hover:text-[#00629B]">
                  {b.title}
                  <ArrowUpRight size={17} aria-hidden="true" className="text-slate-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#00629B]" />
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.body}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Recognition() {
  return (
    <section aria-labelledby="recognition-title" className="bg-white py-20 sm:py-24">
      <div className={`${container} grid gap-8 lg:grid-cols-12 lg:items-end`}>
        <div className="lg:col-span-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00629B]">IEEE Day · 6 October 2026</p>
          <h2 id="recognition-title" className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Officially recognised, with a certificate of approval
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            At the American Center in Kabalagala, student branches from across Uganda celebrated IEEE Day together.
            Cavendish University Uganda was recognised as one of the branches being reborn.
          </p>
        </div>
        <div className="lg:col-span-4 lg:text-right">
          <Link href="/events/ieee-day-2026" className={btn.primary}>
            Read the recap
            <ArrowRight size={16} aria-hidden="true" className={nudge} />
          </Link>
        </div>
      </div>
    </section>
  );
}

type TeamMember = { id: string; name: string; role: string; group: string; photo?: string; linkedin?: string; consent: boolean };
const LEADERSHIP_IDS = ["mulondo-andrew", "dr-john-bosco-ssemakula", "tabingwa-evans-maganda"];

export function LeadershipStrip() {
  const team = teamData as TeamMember[];
  const leaders = LEADERSHIP_IDS.map((id) => team.find((m) => m.id === id && m.consent)).filter((m): m is TeamMember => Boolean(m));

  return (
    <section aria-labelledby="leaders-title" className="bg-bg py-20 sm:py-28">
      <div className={container}>
        <SectionHead id="leaders-title" kicker="Leadership" title="Who leads the branch" href="/team" linkLabel="Meet the full team" />
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {leaders.map((m) => (
            <li key={m.id}>
              <PersonCard person={{ name: m.name, role: m.role, photo: m.photo, linkedin: m.linkedin }} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function LatestNews() {
  const posts = getAllNews().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section aria-labelledby="news-title" className="bg-white py-20 sm:py-28">
      <div className={container}>
        <SectionHead id="news-title" kicker="News" title="Latest from the branch" href="/news" linkLabel="All stories" />
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <li key={p.slug}>
              <NewsCard post={p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
