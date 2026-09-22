"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Ticker } from "./Ticker";

const LINKS = [
  { href: "#about", label: "About IEEE" },
  { href: "#branch", label: "The Branch" },
  { href: "#event", label: "IEEE Day" },
  { href: "#xtreme", label: "IEEEXtreme" },
  { href: "#programs", label: "Ambassador Programs" },
  { href: "#team", label: "Team" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <Ticker />
      <div className="border-b border-white/10 bg-bg/80 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet to-cyan font-display text-sm font-bold text-white">
              IE
            </span>
            <span className="leading-tight">
              <span className="block font-display text-sm font-semibold text-white">IEEE — CUU</span>
              <span className="block text-[11px] text-muted">Student Branch</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-white/70 transition hover:text-white">
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="#join"
            className="hidden rounded-lg bg-gradient-to-r from-ember to-ember/80 px-4 py-2 text-sm font-semibold text-bg md:inline-block hover:brightness-110"
          >
            Join us
          </a>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 text-white md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {open && (
          <div className="flex flex-col border-t border-white/10 bg-surface md:hidden">
            {[...LINKS, { href: "#join", label: "Join us" }].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-t border-white/5 px-6 py-3.5 text-sm text-white/85 first:border-t-0"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
