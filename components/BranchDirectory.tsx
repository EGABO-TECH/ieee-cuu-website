"use client";

const PORTAL_PAGES = [
  { href: "/about", title: "About IEEE", subtitle: "Global network and campus impact", desc: "Learn what IEEE is and how the branch connects student engineering to the wider global technical community.", tag: "Organization" },
  { href: "/branch", title: "The Branch", subtitle: "Student journey and structure", desc: "See how members move from first contact to technical leadership, mentorship, and project participation.", tag: "Community" },
  { href: "/events", title: "Events & competitions", subtitle: "Workshops, talks, and flagship challenges", desc: "Follow upcoming programming, campus events, and high-impact participation opportunities.", tag: "Activities" },
  { href: "/programs", title: "Programs & societies", subtitle: "Ambassadors and technical communities", desc: "Explore ambassador programs, student initiatives, and specialized IEEE communities with practical learning pathways.", tag: "Opportunities" },
  { href: "/team", title: "Leadership", subtitle: "Executive team and coordinators", desc: "Meet the student leaders guiding the branch, events, outreach, and technical direction.", tag: "Governance" },
  { href: "/join", title: "Join us", subtitle: "Membership and onboarding", desc: "Find the right route to participate, connect, and become part of the branch community.", tag: "Membership" },
  { href: "/cuucsa", title: "CUUCSA", subtitle: "Computing society partnership", desc: "Learn how the branch connects with the computing community and collaborative student initiatives.", tag: "Partnership" },
];

export function BranchDirectory() {
  return (
    <section className="bg-bg py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="mb-10 max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#0d5b8f]">Branch navigation</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-4xl">Explore the branch</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {PORTAL_PAGES.map((page, index) => (
            <a
              key={page.href}
              href={page.href}
              className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_12px_24px_rgba(15,23,42,0.04)]"
            >
              <div>
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600">
                    {page.tag}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-slate-900">{page.title}</h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#0d5b8f]">{page.subtitle}</p>
                <p className="mt-4 text-sm leading-6 text-slate-600">{page.desc}</p>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
                <span className="text-sm font-medium text-slate-600">Open page</span>
                <span className="text-sm font-medium text-slate-700">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
