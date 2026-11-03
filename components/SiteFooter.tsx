import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ArrowUp, Globe, MapPin, Phone, Mail } from "lucide-react";
import { SITE } from "@/config/site";
import { SOCIAL_CHANNELS } from "@/components/SocialIcons";
import { btn, nudge } from "@/lib/ui";

type FooterLink = { href: string; label: string; external?: boolean };

const NAV: Record<string, FooterLink[]> = {
  Explore: [
    { href: "/about", label: "About IEEE" },
    { href: "/branch", label: "The Branch" },
    { href: "/team", label: "Team" },
    { href: "/news", label: "News" },
    { href: "/programs", label: "Programs" },
    { href: "/cuucsa", label: "CUUCSA" },
  ],
  "Get involved": [
    { href: "/events", label: "Events" },
    { href: "/volunteer", label: "Volunteer" },
    { href: "/join", label: "Join the Branch" },
    { href: "/resources", label: "Resources" },
    { href: "/partners", label: "Partners" },
    { href: "/contact", label: "Contact" },
  ],
  "Official IEEE": [
    { href: SITE.ieee.org, label: "IEEE.org", external: true },
    { href: SITE.ieee.students, label: "IEEE Students", external: true },
    { href: SITE.ieee.region8, label: "Region 8", external: true },
    { href: SITE.ieee.extreme, label: "IEEEXtreme", external: true },
    { href: SITE.ieee.xplore, label: "IEEE Xplore", external: true },
  ],
};

const LEGAL: FooterLink[] = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
  { href: "/governance", label: "Governance" },
  { href: "/credits", label: "Photo credits" },
];

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Plot+1469+Ggaba+Road+Kampala+Uganda+Cavendish+University&z=15&output=embed";

const eyebrow = "text-[11px] font-semibold uppercase tracking-[0.2em] text-[#CADCEA]";

export function SiteFooter() {
  const contacts = [
    { icon: MapPin, label: "Plot 1469 Ggaba Road, Kampala", href: SITE.mapUrl, external: true },
    { icon: Phone, label: "+256 41 4531700", href: `tel:${SITE.universityPhone}` },
    ...(SITE.email ? [{ icon: Mail, label: SITE.email, href: `mailto:${SITE.email}` }] : []),
    { icon: Globe, label: "cavendish.ac.ug", href: SITE.universityUrl, external: true },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#002855] text-white [&_:focus-visible]:outline-[#FFC72C]">
      {/* Brand stripe */}
      <div aria-hidden="true" className="flex h-1">
        <span className="flex-[5] bg-[#00629B]" />
        <span className="flex-[2] bg-[#007DAF]" />
        <span className="flex-1 bg-[#FFC72C]" />
      </div>

      <div className="sheet-grid">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
          {/* Call to action + socials */}
          <section
            aria-labelledby="footer-cta"
            className="grid gap-10 border-b border-white/10 py-14 sm:py-16 lg:grid-cols-12 lg:items-end lg:gap-12"
          >
            <div className="lg:col-span-6">
              <p className={eyebrow}>Stay connected</p>
              <h2
                id="footer-cta"
                className="mt-4 text-balance font-display text-3xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-4xl lg:text-[2.75rem]"
              >
                Build what&rsquo;s next with IEEE at Cavendish.
              </h2>
              <p className="mt-4 max-w-md text-[0.95rem] leading-7 text-white/70">
                Events, competitions and mentoring for students from every faculty. Follow along, or join the branch.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/join" className={btn.accent}>
                  Join the branch
                  <ArrowRight size={16} aria-hidden="true" className={nudge} />
                </Link>
                <Link href="/events" className={btn.ghost}>
                  See upcoming events
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
            <p id="footer-follow" className={eyebrow}>Follow the branch</p>
            <ul aria-labelledby="footer-follow" className="mt-4 grid gap-3 sm:grid-cols-2">
              {SOCIAL_CHANNELS.map(({ name, handle, href, Icon, brand }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ ["--brand" as string]: brand }}
                    className="group flex min-h-[4.25rem] items-center gap-4 border border-white/10 bg-white/[0.04] px-4 py-3 transition-colors duration-200 hover:border-white/30 hover:bg-white/[0.08]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-white text-[#002855] transition-colors duration-200 group-hover:bg-[var(--brand)] group-hover:text-white">
                      <Icon size={19} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-white">{name}</span>
                      <span className="block truncate text-[13px] text-white/60">{handle}</span>
                    </span>
                    <ArrowUpRight
                      size={16}
                      aria-hidden="true"
                      className="shrink-0 text-white/40 transition-[transform,color] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#FFC72C]"
                    />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
            </div>
          </section>

          {/* Brand, navigation, location */}
          <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <Link href="/" className="inline-flex items-center gap-4" aria-label="IEEE CUU Student Branch, home">
                <span className="relative h-16 w-16 shrink-0">
                  <Image src="/images/ieee-logo.png" alt="" fill sizes="64px" className="object-contain" />
                </span>
                <span className="font-display text-lg font-bold leading-tight tracking-[-0.02em]">
                  IEEE Student Branch
                  <span className="block text-sm font-medium tracking-normal text-white/65">Cavendish University Uganda</span>
                </span>
              </Link>
              <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">
                A member of the{" "}
                <a href={SITE.ieee.region8} target="_blank" rel="noopener noreferrer" className="text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-[#FFC72C]">
                  IEEE Uganda Section and Region 8
                </a>
                . {SITE.tagline}
              </p>

              <ul className="mt-8 space-y-1">
                {contacts.map(({ icon: Icon, label, href, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group -mx-2 flex min-h-11 items-center gap-3 px-2 text-sm text-white/80 transition-colors hover:text-white"
                    >
                      <Icon size={16} aria-hidden="true" className="shrink-0 text-[#FFC72C]" />
                      <span className="truncate underline-offset-4 group-hover:underline">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-5">
              {Object.entries(NAV).map(([title, links]) => (
                <div key={title} className="min-w-0">
                  <h3 className={eyebrow}>{title}</h3>
                  <ul className="mt-4 space-y-0.5">
                    {links.map((l) => (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="group inline-flex min-h-10 items-center gap-1 text-[0.95rem] text-white/75 transition-colors hover:text-white"
                        >
                          <span className="bg-[linear-gradient(#FFC72C,#FFC72C)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
                            {l.label}
                          </span>
                          {l.external && <ArrowUpRight size={13} aria-hidden="true" className="shrink-0 opacity-60" />}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>

            <div className="lg:col-span-3">
              <h3 className={eyebrow}>Visit us</h3>
              <div className="mt-4 overflow-hidden border border-white/10 bg-[#E6EFF6]">
                <iframe
                  title="Map of Cavendish University Uganda, Ggaba Road"
                  src={MAP_EMBED_URL}
                  className="block h-44 w-full border-0 grayscale-[0.35] transition duration-300 hover:grayscale-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={SITE.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-3 inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-white"
              >
                Get directions
                <ArrowUpRight size={14} aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-[#001F42]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-[13px] text-white/60 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <p>
            © {new Date().getFullYear()} IEEE Student Branch, Cavendish University Uganda.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            {LEGAL.map((l) => (
              <Link key={l.href} href={l.href} className="inline-flex min-h-9 items-center transition-colors hover:text-white">
                {l.label}
              </Link>
            ))}
            <a
              href="#top"
              className="inline-flex min-h-9 items-center gap-1.5 font-semibold text-white transition-colors hover:text-[#FFC72C]"
            >
              Back to top
              <ArrowUp size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
        <p className="mx-auto max-w-7xl px-4 pb-6 text-[11px] leading-5 text-white/45 sm:px-8 lg:px-12">
          AWS Student Builders, Black Python Devs and CUUCSA are campus and community partners. Their inclusion on
          this site is not an IEEE endorsement of their products or services.
        </p>
      </div>
    </footer>
  );
}
