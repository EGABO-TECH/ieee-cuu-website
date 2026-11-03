import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Team } from "@/components/Team";
import teamData from "@/content/team.json";
import { btn, container, nudge } from "@/lib/ui";

export const metadata: Metadata = pageMetadata({
  title: "Team",
  description:
    "Meet the counselor, advisor, executive committee and coordinators of the IEEE Student Branch at Cavendish University Uganda.",
  path: "/team",
});

export default function TeamPage() {
  const count = (teamData as { consent: boolean }[]).filter((m) => m.consent).length;

  return (
    <main className="min-h-screen bg-bg text-ink">
      <PageHero
        eyebrow="Team · 2026/27"
        title={
          <>
            The people <em>running the branch</em>
          </>
        }
        lede="A faculty counselor and advisor, a student executive and coordinators across technical work, finance and outreach."
        actions={
          <Link href="/cuucsa#team" className={btn.ghost}>
            CUUCSA core team
          </Link>
        }
      >
        <dl className="flex gap-10 border-t border-white/15 pt-6">
          <div>
            <dt className="text-xs uppercase tracking-[0.16em] text-white/55">Members listed</dt>
            <dd className="mt-1 font-display text-3xl font-bold">{count}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.16em] text-white/55">Region</dt>
            <dd className="mt-1 font-display text-3xl font-bold">R8</dd>
          </div>
        </dl>
      </PageHero>

      <Team />

      <section className="border-t border-slate-200 bg-white py-14">
        <div className={`${container} flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between`}>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">Want to help run the branch?</h2>
            <p className="mt-1 text-sm text-slate-500">Students from every faculty are welcome on event and technical committees.</p>
          </div>
          <Link href="/join" className={btn.primary}>
            Register your interest
            <ArrowRight size={16} aria-hidden="true" className={nudge} />
          </Link>
        </div>
      </section>
    </main>
  );
}
