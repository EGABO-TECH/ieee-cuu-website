"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  IEEE_LINKEDIN_URL,
  IEEE_TIKTOK_URL,
  IEEE_X_URL,
  WHATSAPP_INVITE_URL,
} from "@/lib/data";

interface NavLink {
  href: string;
  id: string;
  label: string;
  isEvents?: boolean;
  isExternalTab?: boolean;
}

const LINKS: NavLink[] = [
  { href: "/", id: "top", label: "Home" },
  { href: "/about", id: "about", label: "About", isExternalTab: true },
  { href: "/branch", id: "branch", label: "The Branch", isExternalTab: true },
  { href: "/events", id: "events", label: "Events", isEvents: true },
  { href: "/cuucsa", id: "cuucsa", label: "CUUCSA", isExternalTab: true },
  { href: "/programs", id: "programs", label: "Programs", isExternalTab: true },
  { href: "/team", id: "team", label: "Team", isExternalTab: true },
  { href: "/join", id: "join", label: "Join us", isExternalTab: true },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setEventsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setEventsDropdownOpen(false);
    }, 150);
  };

  const isLinkActive = (link: NavLink) => {
    if (link.isEvents) {
      return pathname?.startsWith("/events") || pathname === "/ieee-day" || pathname === "/ieeextreme";
    }
    if (link.href === "/") {
      return pathname === "/";
    }
    return pathname === link.href;
  };

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 pt-4 sm:px-8 sm:pt-6">
      <div className="relative z-50 mx-auto flex max-w-7xl items-center justify-between">
        {/* Left: IEEE CUU Logo */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          style={open ? { left: "calc(25vw + 1rem)", top: "1rem" } : undefined}
          className={`group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition hover:scale-105 ${
            open ? "fixed z-[60]" : ""
          }`}
          aria-label="IEEE Student Branch CUU Home"
        >
          <Image
            src="/images/ieee-logo.png"
            alt="IEEE CUU Student Branch Logo"
            width={44}
            height={44}
            className="h-full w-full object-contain p-1"
            priority
          />
        </Link>

        {/* Center: Floating Pill Navigation */}
        <nav
          className="hidden md:flex items-center gap-1 rounded-full border border-ieee/10 bg-[#0B1E2E]/90 p-1.5 shadow-[0_8px_32px_rgba(5,26,26,0.35)] backdrop-blur-xl max-[1023px]:gap-0.5 max-[1023px]:p-1 max-[1023px]:px-1.5 max-[1023px]:text-[10px]"
          aria-label="Main Navigation"
        >
          {LINKS.map((l) => {
            const active = isLinkActive(l);

            if (l.isEvents) {
              return (
                <div
                  key="events-dropdown"
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href="/events"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 rounded-full text-xs transition-all duration-300 max-[1023px]:gap-1 max-[1023px]:px-2.5 max-[1023px]:py-1 max-[1023px]:text-[10px] ${
                      active || eventsDropdownOpen
                        ? "bg-[#FFFFFF] px-3.5 py-1.5 font-semibold text-[#0D6E6E] shadow-md scale-100"
                        : "px-3.5 py-1.5 font-medium text-muted hover:text-[#FFFFFF] hover:bg-ieee/10"
                    }`}
                  >
                    <span>{l.label}</span>
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-200 ${
                        eventsDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </a>

                  {/* Events menu */}
                  {eventsDropdownOpen && (
                    <div className="absolute right-0 top-full z-[80] mt-2 w-72 max-w-[calc(100vw-2rem)] overflow-hidden rounded-lg border border-white/15 bg-[#071722] py-1 shadow-[0_12px_32px_rgba(0,0,0,0.3)]">
                        <a
                          href="/events/ieee-day"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-3 transition-colors hover:bg-white/[0.05]"
                        >
                          <span className="flex items-baseline justify-between gap-4">
                            <span className="text-sm font-semibold text-white">IEEE Day 2026</span>
                            <span className="shrink-0 text-xs text-slate-400">6 Oct</span>
                          </span>
                          <span className="mt-1 block text-xs leading-5 text-slate-300">Student Branch launch · 12–6 PM EAT</span>
                        </a>

                        <div className="mx-4 border-t border-white/10" />

                        <a
                          href="/events/ieeextreme"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-3 transition-colors hover:bg-white/[0.05]"
                        >
                          <span className="flex items-baseline justify-between gap-4">
                            <span className="text-sm font-semibold text-white">IEEEXtreme 20.0</span>
                            <span className="shrink-0 text-xs text-slate-400">17 Oct</span>
                          </span>
                          <span className="mt-1 block text-xs leading-5 text-slate-300">24-hour global programming contest</span>
                        </a>

                      <div className="mx-4 border-t border-white/10" />

                      <a
                        href="/events"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-3 text-xs font-medium text-slate-300 transition-colors hover:bg-white/[0.05] hover:text-white"
                      >
                        All events
                      </a>
                    </div>
                  )}
                </div>
              );
            }

            if (l.isExternalTab) {
              return (
                <a
                  key={l.id}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1 rounded-full text-xs transition-all duration-300 max-[1023px]:gap-0.5 max-[1023px]:px-2.5 max-[1023px]:py-1 max-[1023px]:text-[10px] ${
                    active
                      ? "bg-[#FFFFFF] px-4 py-1.5 font-semibold text-[#0D6E6E] shadow-md scale-100"
                      : "px-3.5 py-1.5 font-medium text-muted hover:text-[#FFFFFF] hover:bg-ieee/10"
                  }`}
                >
                  <span>{l.label}</span>
                </a>
              );
            }

            return (
              <Link
                key={l.id}
                href={l.href}
                className={`rounded-full text-xs transition-all duration-300 max-[1023px]:px-2.5 max-[1023px]:py-1 max-[1023px]:text-[10px] ${
                  active
                    ? "bg-[#FFFFFF] px-4 py-1.5 font-semibold text-[#0D6E6E] shadow-md scale-100"
                    : "px-3.5 py-1.5 font-medium text-muted hover:text-[#FFFFFF] hover:bg-ieee/10"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Floating Socials Pill */}
        <div className="hidden md:flex items-center gap-3.5 rounded-full border border-ieee/10 bg-[#0B1E2E]/90 px-4 py-2 text-muted shadow-[0_8px_32px_rgba(5,26,26,0.35)] backdrop-blur-xl max-[1023px]:gap-2.5 max-[1023px]:px-3 max-[1023px]:py-1.5">
          {/* LinkedIn */}
          <a
            href={IEEE_LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition hover:text-white hover:scale-110"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>

          {/* X / Twitter */}
          <a
            href={IEEE_X_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="X"
            className="transition hover:text-white hover:scale-110"
          >
            <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* TikTok */}
          <a
            href={IEEE_TIKTOK_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
            className="transition hover:text-white hover:scale-110"
          >
            <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.99v7.94c0 1.73-.55 3.48-1.61 4.81-1.39 1.77-3.6 2.77-5.87 2.72-2.3-.05-4.47-1.17-5.78-3.05-1.4-2.02-1.6-4.71-.53-6.9 1.07-2.19 3.32-3.66 5.76-3.75.46-.02.92.02 1.37.1v4.13c-.35-.11-.73-.16-1.1-.14-1.18.06-2.28.75-2.8 1.8-.52 1.05-.33 2.37.49 3.23.82.86 2.11 1.08 3.16.54.74-.38 1.22-1.14 1.25-1.98.05-3.04.02-6.09.03-9.14V.02h.3z" />
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href={WHATSAPP_INVITE_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp Community"
            className="transition hover:text-white hover:scale-110"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.44 0-2.85-.38-4.08-1.1l-.29-.17-3.04.8 1.1-2.96-.19-.31a8.214 8.214 0 0 1-1.25-4.49c0-4.54 3.7-8.24 8.24-8.24m-4.04 3.96c-.22 0-.48.08-.73.35-.25.27-.96.94-.96 2.29s.98 2.66 1.12 2.84c.14.19 1.93 2.94 4.67 4.12.65.28 1.16.45 1.56.57.66.21 1.26.18 1.73.11.53-.08 1.63-.67 1.86-1.31.23-.64.23-1.19.16-1.31-.07-.12-.26-.19-.55-.34-.29-.15-1.73-.85-2-.95-.27-.1-.47-.15-.67.15-.2.29-.77.95-.94 1.15-.17.2-.35.22-.64.08-.29-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.15-.17.2-.29.29-.48.1-.2.05-.37-.02-.52-.08-.14-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.56-.01" />
            </svg>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((v) => !v)}
          className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-[#12141a]/90 text-white backdrop-blur-lg md:hidden ${
            open ? "fixed right-4 top-4 z-[60]" : ""
          }`}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Full-screen mobile navigation */}
      {open && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-30 bg-black/60 md:hidden"
          />
          <div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            onClick={(event) => event.stopPropagation()}
            className="mobile-menu-panel fixed inset-y-0 right-0 z-40 flex h-[100dvh] w-[75vw] flex-col overflow-y-auto overscroll-contain border-l border-white/10 bg-[#09090f] px-7 pb-7 pt-24 text-white shadow-[-20px_0_60px_rgba(0,0,0,0.35)] md:hidden animate-fadeUp sm:px-9"
          >
          <nav aria-label="Mobile navigation" className="flex w-full flex-1 flex-col justify-center gap-5 py-6">
            {LINKS.map((l) => {
              if (l.isEvents) {
                return (
                  <div key={l.id}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className={`block font-serif text-3xl italic transition-colors sm:text-4xl ${
                        isLinkActive(l) ? "text-white" : "text-white/65 hover:text-white"
                      }`}
                    >
                      {l.label}
                    </a>
                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 pl-1 text-sm text-white/45">
                      <a
                        href="/events/ieee-day"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        className="transition-colors hover:text-white"
                      >
                        IEEE Day 2026
                      </a>
                      <span aria-hidden="true">·</span>
                      <a
                        href="/events/ieeextreme"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        className="transition-colors hover:text-white"
                      >
                        IEEEXtreme 20.0
                      </a>
                    </div>
                  </div>
                );
              }

              const active = isLinkActive(l);

              if (l.isExternalTab) {
                return (
                  <a
                    key={l.id}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className={`block font-serif text-3xl italic transition-colors sm:text-4xl ${
                      active
                        ? "text-white"
                        : "text-white/65 hover:text-white"
                    }`}
                  >
                    {l.label}
                  </a>
                );
              }

              return (
                <Link
                  key={l.id}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block font-serif text-3xl italic transition-colors sm:text-4xl ${
                    active
                      ? "text-white"
                      : "text-white/65 hover:text-white"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto border-t border-white/10 pt-6">
            <a
              href={WHATSAPP_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-semibold text-[#09090f] transition hover:bg-white/90"
            >
              Contact
            </a>

            <div className="mt-6 flex items-center justify-center gap-4 text-white/70">
            <a
              href={IEEE_LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-colors hover:border-white/25 hover:text-white"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            <a href={IEEE_X_URL} target="_blank" rel="noreferrer" aria-label="X" className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-colors hover:border-white/25 hover:text-white">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href={IEEE_TIKTOK_URL} target="_blank" rel="noreferrer" aria-label="TikTok" className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-colors hover:border-white/25 hover:text-white">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.99v7.94c0 1.73-.55 3.48-1.61 4.81-1.39 1.77-3.6 2.77-5.87 2.72-2.3-.05-4.47-1.17-5.78-3.05-1.4-2.02-1.6-4.71-.53-6.9 1.07-2.19 3.32-3.66 5.76-3.75.46-.02.92.02 1.37.1v4.13c-.35-.11-.73-.16-1.1-.14-1.18.06-2.28.75-2.8 1.8-.52 1.05-.33 2.37.49 3.23.82.86 2.11 1.08 3.16.54.74-.38 1.22-1.14 1.25-1.98.05-3.04.02-6.09.03-9.14V.02h.3z" />
              </svg>
            </a>
            <a href={WHATSAPP_INVITE_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-colors hover:border-white/25 hover:text-white">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.44 0-2.85-.38-4.08-1.1l-.29-.17-3.04.8 1.1-2.96-.19-.31a8.214 8.214 0 0 1-1.25-4.49c0-4.54 3.7-8.24 8.24-8.24m-4.04 3.96c-.22 0-.48.08-.73.35-.25.27-.96.94-.96 2.29s.98 2.66 1.12 2.84c.14.19 1.93 2.94 4.67 4.12.65.28 1.16.45 1.56.57.66.21 1.26.18 1.73.11.53-.08 1.63-.67 1.86-1.31.23-.64.23-1.19.16-1.31-.07-.12-.26-.19-.55-.34-.29-.15-1.73-.85-2-.95-.27-.1-.47-.15-.67.15-.2.29-.77.95-.94 1.15-.17.2-.35.22-.64.08-.29-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.15-.17.2-.29.29-.48.1-.2.05-.37-.02-.52-.08-.14-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.56-.01" />
              </svg>
            </a>
            </div>
          </div>
          </div>
        </>
      )}
    </header>
    {!open && (
      <a
        href={WHATSAPP_INVITE_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Join the official IEEE WhatsApp group"
        title="Join the official IEEE WhatsApp group"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_rgba(37,211,102,0.35)] transition duration-200 hover:scale-105 hover:shadow-[0_16px_32px_rgba(37,211,102,0.45)]"
      >
        <svg aria-hidden="true" className="h-8 w-8 fill-current" viewBox="0 0 24 24">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.44 0-2.85-.38-4.08-1.1l-.29-.17-3.04.8 1.1-2.96-.19-.31a8.214 8.214 0 0 1-1.25-4.49c0-4.54 3.7-8.24 8.24-8.24m-4.04 3.96c-.22 0-.48.08-.73.35-.25.27-.96.94-.96 2.29s.98 2.66 1.12 2.84c.14.19 1.93 2.94 4.67 4.12.65.28 1.16.45 1.56.57.66.21 1.26.18 1.73.11.53-.08 1.63-.67 1.86-1.31.23-.64.23-1.19.16-1.31-.07-.12-.26-.19-.55-.34-.29-.15-1.73-.85-2-.95-.27-.1-.47-.15-.67.15-.2.29-.77.95-.94 1.15-.17.2-.35.22-.64.08-.29-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.15-.17.2-.29.29-.48.1-.2.05-.37-.02-.52-.08-.14-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.56-.01" />
        </svg>
      </a>
    )}
    </>
  );
}
