"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { WHATSAPP_INVITE_URL } from "@/lib/data";

const LINKS = [
  { href: "#top", id: "top", label: "Home" },
  { href: "#about", id: "about", label: "About" },
  { href: "#branch", id: "branch", label: "The Branch" },
  { href: "#event", id: "event", label: "IEEE Day" },
  { href: "#xtreme", id: "xtreme", label: "IEEEXtreme" },
  { href: "#programs", id: "programs", label: "Programs" },
  { href: "#team", id: "team", label: "Team" },
  { href: "#join", id: "join", label: "Join us" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection("join");
        return;
      }

      const scrollPos = window.scrollY + 240;
      const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPos) {
          setActiveSection(section.id);
          return;
        }
      }
      setActiveSection("top");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 pt-4 sm:px-8 sm:pt-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Left: IEEE CUU Logo */}
        <a
          href="#top"
          className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition hover:scale-105"
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
        </a>

        {/* Center: Floating Pill Navigation with dynamic active CTA button */}
        <nav
          className="hidden md:flex items-center gap-1 rounded-full border border-white/15 bg-[#12141a]/85 p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          aria-label="Main Navigation"
        >
          {LINKS.map((l) => {
            const isActive = activeSection === l.id;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`rounded-full text-xs transition-all duration-300 ${
                  isActive
                    ? "bg-white px-4 py-1.5 font-semibold text-black shadow-md scale-100"
                    : "px-3.5 py-1.5 font-medium text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Floating Socials Pill */}
        <div className="hidden md:flex items-center gap-3.5 rounded-full border border-white/15 bg-[#12141a]/85 px-4 py-2 text-white/75 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/ieee-cavendish-university-uganda"
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
            href="https://x.com"
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
            href="https://tiktok.com"
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
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#12141a]/90 text-white backdrop-blur-lg md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="mt-3 mx-auto max-w-sm rounded-2xl border border-white/15 bg-[#12141a]/95 p-5 shadow-2xl backdrop-blur-2xl md:hidden animate-fadeUp">
          <div className="flex flex-col gap-2">
            {LINKS.map((l) => {
              const isActive = activeSection === l.id;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-white text-black shadow-md"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
          </div>

          {/* Mobile Socials */}
          <div className="mt-4 flex items-center justify-center gap-5 border-t border-white/10 pt-4 text-white/70">
            <a
              href="https://www.linkedin.com/company/ieee-cavendish-university-uganda"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X" className="hover:text-white">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok" className="hover:text-white">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.99v7.94c0 1.73-.55 3.48-1.61 4.81-1.39 1.77-3.6 2.77-5.87 2.72-2.3-.05-4.47-1.17-5.78-3.05-1.4-2.02-1.6-4.71-.53-6.9 1.07-2.19 3.32-3.66 5.76-3.75.46-.02.92.02 1.37.1v4.13c-.35-.11-.73-.16-1.1-.14-1.18.06-2.28.75-2.8 1.8-.52 1.05-.33 2.37.49 3.23.82.86 2.11 1.08 3.16.54.74-.38 1.22-1.14 1.25-1.98.05-3.04.02-6.09.03-9.14V.02h.3z" />
              </svg>
            </a>
            <a href={WHATSAPP_INVITE_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-white">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.44 0-2.85-.38-4.08-1.1l-.29-.17-3.04.8 1.1-2.96-.19-.31a8.214 8.214 0 0 1-1.25-4.49c0-4.54 3.7-8.24 8.24-8.24m-4.04 3.96c-.22 0-.48.08-.73.35-.25.27-.96.94-.96 2.29s.98 2.66 1.12 2.84c.14.19 1.93 2.94 4.67 4.12.65.28 1.16.45 1.56.57.66.21 1.26.18 1.73.11.53-.08 1.63-.67 1.86-1.31.23-.64.23-1.19.16-1.31-.07-.12-.26-.19-.55-.34-.29-.15-1.73-.85-2-.95-.27-.1-.47-.15-.67.15-.2.29-.77.95-.94 1.15-.17.2-.35.22-.64.08-.29-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.15-.17.2-.29.29-.48.1-.2.05-.37-.02-.52-.08-.14-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.56-.01" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
