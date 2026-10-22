import Image from "next/image";
import { ArrowUpRight, Globe, MapPin, Phone, Mail, Linkedin, Twitter } from "lucide-react";
import { SITE } from "@/config/site";

const NAV_LINKS = {
  Explore: [
    { href: "/about", label: "What is IEEE" },
    { href: "/branch", label: "The Branch" },
    { href: "/join", label: "Membership" },
    { href: "/team", label: "Team" },
    { href: "/programs", label: "Programs" },
    { href: "/join#faqs", label: "FAQs" },
  ],
  "Get Involved": [
    { href: "/events/ieee-day-2026", label: "IEEE Day 2026" },
    { href: "/events/ieeextreme-20", label: "IEEEXtreme 20.0" },
    { href: "/events", label: "All Events" },
    { href: "/gallery", label: "Gallery" },
    { href: "/join", label: "Join the Branch" },
    { href: "/contact", label: "Contact Us" },
  ],
  "Official IEEE": [
    { href: SITE.ieee.org, label: "IEEE.org", external: true },
    { href: SITE.ieee.students, label: "IEEE Students", external: true },
    { href: SITE.ieee.region8, label: "Region 8", external: true },
    { href: SITE.ieee.extreme, label: "IEEEXtreme", external: true },
    { href: SITE.ieee.xplore, label: "IEEE Xplore", external: true },
  ],
};

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Plot+1469+Ggaba+Road+Kampala+Uganda+Cavendish+University&z=15&output=embed";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#061821] text-white">
      {/* Non-endorsement disclaimer */}
      <div className="border-b border-white/10 bg-white/5 px-4 py-3 sm:px-6 lg:px-10">
        <p className="mx-auto max-w-[1280px] text-[11px] leading-5 text-white/60">
          <strong className="font-semibold text-white/80">Partner disclaimer:</strong>{" "}
          AWS Student Builders, Black Python Devs, and CUUCSA are campus and community partners.
          Their inclusion on this site is not an IEEE endorsement of their products or services.
        </p>
      </div>

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

            <h3 className="max-w-md text-[1.6rem] font-bold leading-[1.1] tracking-[-0.04em] text-white sm:text-[1.8rem]">
              IEEE Student Branch,<br />Cavendish University Uganda
            </h3>

            <p className="mt-4 max-w-md text-[0.95rem] leading-7 text-white/70">
              Part of the{" "}
              <a
                href={SITE.ieee.region8}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-white"
              >
                IEEE Uganda Section and IEEE Region 8
              </a>
              .
            </p>

            <div className="mt-7 flex flex-col gap-3">
              <a
                href={SITE.mapUrl}
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
                href={SITE.universityUrl}
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
                href={`tel:${SITE.universityPhone}`}
                className="inline-flex w-fit max-w-full items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/90 transition duration-200 hover:bg-white/10"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[#dfeff0]">
                  <Phone size={13} />
                </span>
                <span className="truncate">+256 41 4531700</span>
              </a>

              {SITE.email ? (
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex w-fit max-w-full items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/90 transition duration-200 hover:bg-white/10"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[#dfeff0]">
                    <Mail size={13} />
                  </span>
                  <span className="truncate">{SITE.email}</span>
                </a>
              ) : null}

              {/* Social links */}
              <div className="mt-1 flex gap-2">
                <a
                  href={SITE.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                  <Linkedin size={15} />
                </a>
                <a
                  href={SITE.social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                  <Twitter size={15} />
                </a>
              </div>
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
              Plot 1469 Ggaba Road, Kampala —{" "}
              <a
                href={SITE.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-white"
              >
                Open in Maps
              </a>
            </p>

            {/* Stay in the loop */}
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-[12px] font-semibold text-white/80">Stay in the loop</p>
              <p className="mt-1 text-[11px] text-white/50">
                Follow us on social media or{" "}
                <a href="/join" className="underline underline-offset-2 hover:text-white">
                  join the branch
                </a>{" "}
                to get updates.
              </p>
            </div>
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
            <a href="/governance" className="transition hover:text-white">Governance</a>
            <span className="text-white/40">Built by the Branch, for the Branch.</span>
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
