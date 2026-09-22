export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-surface py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet to-cyan font-display text-sm font-bold text-white">
                IE
              </span>
              <span className="font-display text-sm font-semibold text-white">IEEE — CUU</span>
            </div>
            <p className="max-w-[30ch] text-sm text-muted">
              IEEE Student Branch, Cavendish University Uganda — part of the IEEE Uganda Section and IEEE
              Region 8.
            </p>
          </div>

          <FooterCol
            title="Explore"
            links={[
              { href: "#about", label: "What is IEEE" },
              { href: "#branch", label: "The Branch" },
              { href: "#membership", label: "Membership" },
              { href: "#team", label: "Team" },
            ]}
          />
          <FooterCol
            title="Get involved"
            links={[
              { href: "#event", label: "IEEE Day 2026" },
              { href: "#xtreme", label: "IEEEXtreme" },
              { href: "#programs", label: "Ambassador programs" },
              { href: "#join", label: "WhatsApp group" },
            ]}
          />
          <FooterCol
            title="Official IEEE"
            links={[
              { href: "https://www.ieee.org/", label: "IEEE.org", external: true },
              { href: "https://students.ieee.org/", label: "IEEE Students", external: true },
              { href: "https://ieeer8.org/", label: "Region 8", external: true },
            ]}
          />
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted">
          <span>© 2026 IEEE Student Branch, Cavendish University Uganda.</span>
          <span>Built by the Branch, for the Branch.</span>
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
      <h5 className="mb-3.5 font-display text-xs font-semibold uppercase tracking-wide text-white/70">
        {title}
      </h5>
      <ul className="flex flex-col gap-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              className="text-sm text-muted transition hover:text-white"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
