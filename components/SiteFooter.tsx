import Image from "next/image";
import { ArrowUpRight, Globe, MapPin, Phone } from "lucide-react";

const NAV_LINKS = {
  Explore: [
    { href: "/#about", label: "What is IEEE" },
    { href: "/#branch", label: "The Branch" },
    { href: "/#membership", label: "Membership" },
    { href: "/#team", label: "Team" },
    { href: "/#faqs", label: "FAQs" },
  ],
  "Get Involved": [
    { href: "/events/ieee-day", label: "IEEE Day 2026", external: true },
    { href: "/events/ieeextreme", label: "IEEEXtreme 20.0", external: true },
    { href: "/events", label: "All Events Hub", external: true },
    { href: "/#programs", label: "Ambassador Programs" },
    { href: "/#communities", label: "Specialized Societies" },
    { href: "/#join", label: "Join WhatsApp Group" },
  ],
  "Official IEEE": [
    { href: "https://www.ieee.org/", label: "IEEE.org", external: true },
    { href: "https://students.ieee.org/", label: "IEEE Students", external: true },
    { href: "https://ieeer8.org/", label: "Region 8", external: true },
    { href: "https://ieeextreme.org/", label: "IEEEXtreme", external: true },
    { href: "https://ieeexplore.ieee.org/", label: "IEEE Xplore", external: true },
  ],
};

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Plot+1469+Ggaba+Road+Kampala+Uganda+Cavendish+University&z=15&output=embed";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#061821] text-white">
      <div className="mx-auto max-w-[1280px] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
        <div className="grid gap-10 md:gap-8 lg:grid-cols-[1.2fr_1.2fr_1fr] lg:gap-12">
          <div className="pr-0 md:pr-4 lg:border-r lg:border-white/10 lg:pr-8">
            <div className="mb-5 flex w-full max-w-[180px] items-center justify-center sm:mb-6">
              <div className="relative h-[110px] w-[110px] overflow-hidden bg-transparent p-0">
                <Image
                  src="/images/ieee-logo.png"
                  alt="IEEE logo"
                  fill
                  sizes="110px"
                  className="object-contain"
                />
              </div>
            </div>

            <h3 className="max-w-md text-[2rem] font-bold leading-[1.05] tracking-[-0.055em] text-white sm:text-[2.15rem]">
              IEEE CUU Student Branch
            </h3>

            <p className="mt-4 max-w-md text-[0.98rem] leading-7 text-white/70">
              The official IEEE Student Branch at <span className="font-semibold text-white">Cavendish University Uganda</span> — a member of the IEEE Uganda Section and IEEE Region 8.
            </p>

            <div className="mt-7 flex flex-col gap-3">
              <a
                href="https://www.google.com/maps/search/Plot+1469+Ggaba+Road+Kampala+Cavendish+University+Uganda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit max-w-full items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/90 transition duration-200 hover:bg-white/10"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[#dfeff0]">
                  <MapPin size={13} />
                </span>
                <span className="truncate">Plot 1469 Ggaba Road, Kampala, Uganda</span>
              </a>

              <a
                href="http://www.cavendish.ac.ug/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit max-w-full items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/90 transition duration-200 hover:bg-white/10"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[#dfeff0]">
                  <Globe size={13} />
                </span>
                <span className="truncate">www.cavendish.ac.ug</span>
              </a>

              <a
                href="tel:+256414531700"
                className="inline-flex w-fit max-w-full items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/90 transition duration-200 hover:bg-white/10"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[#dfeff0]">
                  <Phone size={13} />
                </span>
                <span className="truncate">+256 41 4531700</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-3 md:gap-6 lg:col-span-1 lg:gap-8 lg:pl-1">
            {Object.entries(NAV_LINKS).map(([title, links]) => (
              <FooterCol key={title} title={title} links={links} />
            ))}
          </div>

          <div className="lg:pl-4 lg:pt-0.5">
            <div className="overflow-hidden rounded-[1.15rem] border border-white/10 bg-[#dfe7e8] shadow-[0_18px_34px_rgba(0,0,0,0.18)]">
              <div className="relative h-[200px] w-full overflow-hidden bg-[#ebf0f2] sm:h-[220px] lg:h-[230px]">
                <iframe
                  title="Cavendish University Uganda location"
                  src={MAP_EMBED_URL}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            <p className="mt-3 text-sm leading-6 text-white/70 sm:mt-4">
              Plot 1469 Ggaba Road, Kampala — look for the <span className="font-semibold text-white">IEEE CUU Student Branch pin</span> on the map above.
            </p>
          </div>
        </div>

        <div className="mt-8 h-px w-full bg-white/10 sm:mt-10" />

        <div className="mt-4 flex flex-col gap-3 pt-2 text-[12px] text-white/60 sm:mt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <span>© 2026 IEEE Student Branch, Cavendish University Uganda.</span>
            <span className="hidden text-white/25 sm:inline">|</span>
            <span>Part of IEEE Region 8 &amp; IEEE Uganda Section</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <a href="/privacy" className="transition hover:text-white">Privacy</a>
            <a href="/terms" className="transition hover:text-white">Terms</a>
            <a href="/cookies" className="transition hover:text-white">Cookies</a>
            <span className="text-white/70">Built by the Branch, for the Branch.</span>
          </div>
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
    <div className="min-w-0 md:pr-2 lg:pr-3">
      <h5 className="mb-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#dfeff0] md:mb-4 md:text-[10px]">{title}</h5>
      <ul className="space-y-2 md:space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              className="inline-flex w-full items-center gap-1 rounded-md px-2 py-1.5 text-[0.9rem] leading-[1.5] text-white/75 transition-all duration-200 hover:bg-white/5 hover:text-white md:px-2.5 md:text-[0.95rem]"
            >
              <span className="whitespace-normal break-words">{l.label}</span>
              {l.external && <ArrowUpRight size={12} className="ml-0.5 shrink-0 opacity-70" />}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
