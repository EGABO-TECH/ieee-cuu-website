"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  IEEE_LINKEDIN_URL,
  IEEE_TIKTOK_URL,
  IEEE_X_URL,
  WHATSAPP_INVITE_URL,
} from "@/lib/data";
import { AnnouncementBar } from "./AnnouncementBar";

type NavItem = { href: string; label: string };

const PRIMARY: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/branch", label: "The Branch" },
  { href: "/programs", label: "Programs" },
  { href: "/cuucsa", label: "CUUCSA" },
  { href: "/volunteer", label: "Volunteer" },
];

/** Shown only in the mobile menu; on desktop they live in the footer. */
const SECONDARY: NavItem[] = [
  { href: "/team", label: "Team" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

const EVENTS: { href: string; label: string; meta: string }[] = [
  { href: "/events/branch-launch-2026", label: "Official Branch Launch", meta: "4 Nov 2026 · Cavendish University Uganda" },
  { href: "/events/ieee-day-2026", label: "IEEE Day 2026", meta: "6 Oct 2026 · Recap" },
  { href: "/events/ieeextreme-20", label: "IEEEXtreme 20.0", meta: "24-hour global programming contest" },
];

const SOCIALS = [
  {
    href: IEEE_LINKEDIN_URL,
    label: "LinkedIn",
    path: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z",
  },
  {
    href: IEEE_X_URL,
    label: "X",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    href: IEEE_TIKTOK_URL,
    label: "TikTok",
    path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.99v7.94c0 1.73-.55 3.48-1.61 4.81-1.39 1.77-3.6 2.77-5.87 2.72-2.3-.05-4.47-1.17-5.78-3.05-1.4-2.02-1.6-4.71-.53-6.9 1.07-2.19 3.32-3.66 5.76-3.75.46-.02.92.02 1.37.1v4.13c-.35-.11-.73-.16-1.1-.14-1.18.06-2.28.75-2.8 1.8-.52 1.05-.33 2.37.49 3.23.82.86 2.11 1.08 3.16.54.74-.38 1.22-1.14 1.25-1.98.05-3.04.02-6.09.03-9.14V.02h.3z",
  },
  {
    href: WHATSAPP_INVITE_URL,
    label: "WhatsApp",
    path: "M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.44 0-2.85-.38-4.08-1.1l-.29-.17-3.04.8 1.1-2.96-.19-.31a8.214 8.214 0 0 1-1.25-4.49c0-4.54 3.7-8.24 8.24-8.24m-4.04 3.96c-.22 0-.48.08-.73.35-.25.27-.96.94-.96 2.29s.98 2.66 1.12 2.84c.14.19 1.93 2.94 4.67 4.12.65.28 1.16.45 1.56.57.66.21 1.26.18 1.73.11.53-.08 1.63-.67 1.86-1.31.23-.64.23-1.19.16-1.31-.07-.12-.26-.19-.55-.34-.29-.15-1.73-.85-2-.95-.27-.1-.47-.15-.67.15-.2.29-.77.95-.94 1.15-.17.2-.35.22-.64.08-.29-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.15-.17.2-.29.29-.48.1-.2.05-.37-.02-.52-.08-.14-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.56-.01",
  },
];

function isActive(pathname: string | null, href: string) {
  if (!pathname) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const eventsRef = useRef<HTMLDivElement>(null);

  // Close everything on navigation.
  useEffect(() => {
    setMenuOpen(false);
    setEventsOpen(false);
  }, [pathname]);

  // Desktop events menu: close on outside click or Escape.
  useEffect(() => {
    if (!eventsOpen) return;
    const onPointer = (e: PointerEvent) => {
      if (!eventsRef.current?.contains(e.target as Node)) setEventsOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setEventsOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [eventsOpen]);

  // Mobile menu: lock page scroll, close on Escape or when resized to desktop.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const mq = window.matchMedia("(min-width: 1024px)");
    const onResize = () => mq.matches && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onResize);
    };
  }, [menuOpen]);

  const linkClass = (active: boolean) =>
    `relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      active ? "text-white after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-[#5fd0c6]" : "text-white/75 hover:text-white"
    }`;
  const eventsActive = isActive(pathname, "/events");

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 [&_:focus-visible]:outline-[#5fd0c6]">
        {!menuOpen && <AnnouncementBar />}

        <div className="border-b border-white/10 bg-[#0B1E2E]/95 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-8 lg:px-12">
            {/* Brand */}
            <Link href="/" className="flex min-w-0 items-center gap-3 rounded-md" aria-label="IEEE CUU Student Branch, home">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
                <Image src="/images/ieee-logo.png" alt="" width={40} height={40} className="h-full w-full object-contain p-0.5" priority />
              </span>
              <span className="min-w-0 leading-tight">
                <span className="block truncate text-sm font-semibold text-white">IEEE Student Branch</span>
                <span className="block truncate text-xs text-white/60">
                  Cavendish University<span className="hidden min-[400px]:inline"> Uganda</span>
                </span>
              </span>
            </Link>

            {/* Desktop navigation */}
            <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
              {PRIMARY.slice(0, 2).map((l) => (
                <Link key={l.href} href={l.href} aria-current={isActive(pathname, l.href) ? "page" : undefined} className={linkClass(isActive(pathname, l.href))}>
                  {l.label}
                </Link>
              ))}

              <div
                ref={eventsRef}
                className="relative"
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setEventsOpen(false);
                }}
              >
                <button
                  type="button"
                  aria-expanded={eventsOpen}
                  aria-controls="events-menu"
                  onClick={() => setEventsOpen((v) => !v)}
                  className={`${linkClass(eventsActive)} inline-flex items-center gap-1`}
                >
                  Events
                  <ChevronDown size={14} aria-hidden="true" className={`transition-transform ${eventsOpen ? "rotate-180" : ""}`} />
                </button>
                {eventsOpen && (
                  <div
                    id="events-menu"
                    className="absolute left-1/2 top-full mt-3 w-80 -translate-x-1/2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl"
                  >
                    <ul className="py-1">
                      {EVENTS.map((e) => (
                        <li key={e.href}>
                          <Link
                            href={e.href}
                            aria-current={pathname === e.href ? "page" : undefined}
                            className="block px-4 py-3 transition-colors hover:bg-slate-50 focus-visible:bg-slate-50"
                          >
                            <span className="block text-sm font-semibold text-slate-900">{e.label}</span>
                            <span className="mt-0.5 block text-xs text-slate-500">{e.meta}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/events"
                      className="block border-t border-slate-100 bg-slate-50 px-4 py-3 text-sm font-semibold text-[#0D6E6E] hover:bg-slate-100"
                    >
                      All events →
                    </Link>
                  </div>
                )}
              </div>

              {PRIMARY.slice(2).map((l) => (
                <Link key={l.href} href={l.href} aria-current={isActive(pathname, l.href) ? "page" : undefined} className={linkClass(isActive(pathname, l.href))}>
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="flex shrink-0 items-center gap-2">
              <Link
                href="/join"
                aria-current={isActive(pathname, "/join") ? "page" : undefined}
                className="inline-flex rounded-full bg-[#1A9090] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#22a5a5] sm:px-5"
              >
                Join<span className="hidden sm:inline">&nbsp;the branch</span>
              </Link>
              <button
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                onClick={() => setMenuOpen((v) => !v)}
                className="flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10 lg:hidden"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div
              id="mobile-menu"
              className="mobile-menu-panel max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-[#0B1E2E] lg:hidden"
            >
              <nav aria-label="Mobile" className="mx-auto max-w-7xl px-4 py-4 sm:px-8">
                <ul className="divide-y divide-white/10">
                  {[{ href: "/", label: "Home" }, ...PRIMARY.slice(0, 2)].map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        aria-current={(l.href === "/" ? pathname === "/" : isActive(pathname, l.href)) ? "page" : undefined}
                        className="block py-3 text-base font-medium text-white/85 hover:text-white aria-[current=page]:text-[#5fd0c6]"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                  <li className="py-3">
                    <Link href="/events" className="block text-base font-medium text-white/85 hover:text-white aria-[current=page]:text-[#5fd0c6]" aria-current={pathname === "/events" ? "page" : undefined}>
                      Events
                    </Link>
                    <ul className="mt-2 space-y-1 border-l border-white/15 pl-4">
                      {EVENTS.map((e) => (
                        <li key={e.href}>
                          <Link href={e.href} className="block py-1.5">
                            <span className="block text-sm text-white/85">{e.label}</span>
                            <span className="block text-xs text-white/50">{e.meta}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  {[...PRIMARY.slice(2), ...SECONDARY].map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        aria-current={isActive(pathname, l.href) ? "page" : undefined}
                        className="block py-3 text-base font-medium text-white/85 hover:text-white aria-[current=page]:text-[#5fd0c6]"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/join"
                  className="mt-4 flex w-full items-center justify-center rounded-full bg-[#1A9090] px-6 py-3 text-base font-semibold text-white hover:bg-[#22a5a5]"
                >
                  Join the branch
                </Link>

                <div className="mt-5 flex items-center justify-center gap-3 pb-2">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-white/70 transition hover:border-white/30 hover:text-white"
                    >
                      <svg aria-hidden="true" className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                        <path d={s.path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {!menuOpen && (
        <a
          href={WHATSAPP_INVITE_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Join the official IEEE WhatsApp group"
          title="Join the official IEEE WhatsApp group"
          className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_rgba(37,211,102,0.35)] transition duration-200 hover:scale-105"
        >
          <svg aria-hidden="true" className="h-8 w-8 fill-current" viewBox="0 0 24 24">
            <path d={SOCIALS[3].path} />
          </svg>
        </a>
      )}
    </>
  );
}
