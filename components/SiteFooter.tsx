import Image from "next/image";
import { ArrowUpRight, Globe, Mail, MapPin, Phone } from "lucide-react";

const NAV_LINKS = {
  Explore: [
    { href: "#about", label: "What is IEEE" },
    { href: "#branch", label: "The Branch" },
    { href: "#membership", label: "Membership" },
    { href: "#team", label: "Team" },
    { href: "#faqs", label: "FAQs" },
  ],
  "Get Involved": [
    { href: "#event", label: "IEEE Day 2026" },
    { href: "#xtreme", label: "IEEEXtreme" },
    { href: "#programs", label: "Ambassador Programs" },
    { href: "#communities", label: "Specialized Societies" },
    { href: "#join", label: "Join WhatsApp Group" },
  ],
  "Official IEEE": [
    { href: "https://www.ieee.org/", label: "IEEE.org", external: true },
    { href: "https://students.ieee.org/", label: "IEEE Students", external: true },
    { href: "https://ieeer8.org/", label: "Region 8", external: true },
    { href: "https://ieeextreme.org/", label: "IEEEXtreme", external: true },
    { href: "https://ieeexplore.ieee.org/", label: "IEEE Xplore", external: true },
  ],
};

// Cavendish University Uganda — Plot 1469 Ggaba Road, Kampala
const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Plot+1469+Ggaba+Road+Kampala+Uganda+Cavendish+University&output=embed";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-[#070810]">
      {/* ── Ambient top glow ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[900px] -translate-x-1/2 rounded-full opacity-[0.05]"
        style={{
          background:
            "radial-gradient(ellipse at center, #C8A96E 0%, #00629B 50%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* ══════════════════════════════════════════
            TOP BLOCK — Logo + Nav + Map
        ══════════════════════════════════════════ */}
        <div className="grid grid-cols-1 gap-14 py-20 lg:grid-cols-12 lg:gap-10">
          {/* Brand column */}
          <div className="flex flex-col gap-7 lg:col-span-3">
            {/* Official IEEE CUU logo */}
            <a href="#" aria-label="IEEE CUU Student Branch home" className="inline-block w-fit">
              <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-white p-1 shadow-lg shadow-black/40 transition-transform duration-300 hover:scale-105">
                <Image
                  src="/images/ieee-logo.png"
                  alt="IEEE Cavendish University Student Branch"
                  fill
                  sizes="96px"
                  className="object-contain"
                  priority
                />
              </div>
            </a>

            {/* Branch description */}
            <div>
              <h3 className="mb-2 font-serif text-xl font-bold text-white">
                IEEE CUU Student Branch
              </h3>
              <p className="text-sm leading-[1.8] text-[#A8A8B3]">
                The official IEEE Student Branch at{" "}
                <span className="font-semibold text-white/80">
                  Cavendish University Uganda
                </span>
                — a member of the{" "}
                <span className="text-[#C8A96E]">IEEE Uganda Section</span> and{" "}
                <span className="text-[#C8A96E]">IEEE Region 8</span>.
              </p>
            </div>

            {/* Campus address pill */}
            <a
              href="https://www.google.com/maps/search/Plot+1469+Ggaba+Road+Kampala+Cavendish+University+Uganda"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-start gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-xs text-[#A8A8B3] transition-all duration-300 hover:border-[#C8A96E]/40 hover:bg-[#C8A96E]/[0.06] hover:text-white"
            >
              <MapPin
                size={14}
                className="mt-0.5 shrink-0 text-[#C8A96E] transition-transform duration-300 group-hover:scale-110"
              />
              <span>
                Plot 1469 Ggaba Road
                <br />
                Kampala, Uganda
              </span>
            </a>

            {/* Contact row */}
            <div className="flex flex-col gap-2">
              <a
                href="http://www.cavendish.ac.ug/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/70 transition-all duration-200 hover:border-[#00629B]/50 hover:bg-[#00629B]/10 hover:text-white w-fit"
              >
                <Globe size={11} />
                www.cavendish.ac.ug
              </a>
              <a
                href="tel:+256414531700"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/70 transition-all duration-200 hover:border-[#C8A96E]/40 hover:bg-[#C8A96E]/10 hover:text-white w-fit"
              >
                <Phone size={11} />
                +256 41 4531700
              </a>
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            {Object.entries(NAV_LINKS).map(([title, links]) => (
              <FooterCol key={title} title={title} links={links} />
            ))}
          </div>

          {/* Map column */}
          <div className="lg:col-span-4">
            <h5 className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#A8A8B3]">
              📍 Find Us on Campus
            </h5>

            {/* Map iframe */}
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] shadow-[0_0_40px_rgba(0,0,0,0.6)]">
              {/* Glowing corner accent */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-full blur-xl opacity-40"
                style={{ background: "rgba(200,169,110,0.5)" }}
              />

              <iframe
                title="Cavendish University Uganda — Siyani Campus, Kampala"
                src={MAP_EMBED_URL}
                width="100%"
                height="260"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full grayscale-[20%] contrast-[1.05]"
              />

              {/* Overlay label */}
              <div className="flex items-center justify-between border-t border-white/[0.08] bg-[#0c0d14]/95 px-4 py-2.5 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-[#C8A96E] animate-pulse" />
                  <span className="text-xs font-semibold text-white/80">
                    CUU — Plot 1469 Ggaba Road, Kampala
                  </span>
                </div>
                <a
                  href="https://www.google.com/maps/search/Plot+1469+Ggaba+Road+Kampala+Cavendish+University+Uganda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[10px] font-bold text-[#C8A96E] transition-colors hover:text-white"
                >
                  Open Maps
                  <ArrowUpRight size={11} />
                </a>
              </div>
            </div>

            {/* Map helper text */}
            <p className="mt-3 text-[11px] leading-relaxed text-[#A8A8B3]">
              Plot 1469 Ggaba Road, Kampala — look for the{" "}
              <span className="text-[#C8A96E]">IEEE CUU Student Branch pin</span> on the map above.
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            DIVIDER — Decorative accent line
        ══════════════════════════════════════════ */}
        <div className="relative">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C8A96E]/40 to-transparent" />
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <div className="h-1.5 w-1.5 rounded-full bg-[#C8A96E] shadow-[0_0_8px_rgba(200,169,110,0.8)]" />
          </div>
        </div>

        {/* ══════════════════════════════════════════
            BOTTOM BAR — Copyright + Credits
        ══════════════════════════════════════════ */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-7 text-xs text-[#5C5C7A]">
          <div className="flex flex-wrap items-center gap-4">
            <span>
              © 2026{" "}
              <span className="text-white/50">
                IEEE Student Branch, Cavendish University Uganda.
              </span>
            </span>
            <span className="hidden sm:inline text-white/10">|</span>
            <span>
              Part of{" "}
              <a
                href="https://ieeer8.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C8A96E]/70 hover:text-[#C8A96E] transition-colors"
              >
                IEEE Region 8
              </a>{" "}
              &amp;{" "}
              <a
                href="https://www.ieee.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C8A96E]/70 hover:text-[#C8A96E] transition-colors"
              >
                IEEE Uganda Section
              </a>
            </span>
          </div>

          <span className="text-[#5C5C7A]">
            Built by the Branch,{" "}
            <span className="text-[#C8A96E]/60">for the Branch.</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string; external?: boolean }[];
}) {
  return (
    <div>
      <h5 className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#A8A8B3]">
        {title}
      </h5>
      <ul className="flex flex-col gap-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              className="group inline-flex items-center gap-1.5 text-sm text-[#6B6B85] transition-all duration-200 hover:text-white"
            >
              <span>{l.label}</span>
              {l.external && (
                <ArrowUpRight
                  size={11}
                  className="opacity-0 -translate-y-px transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-px group-hover:-translate-y-px"
                />
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
