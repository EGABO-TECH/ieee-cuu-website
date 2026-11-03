import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Programs } from "@/components/Programs";
import { Communities } from "@/components/Communities";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = pageMetadata({
  title: "Programs and societies",
  description:
    "Explore campus ambassador programs and specialized technical societies at Cavendish University Uganda.",
  path: "/programs",
});

export default function ProgramsPage() {
  return (
    <>
      <main className="min-h-screen bg-bg text-ink">
        <PageHero
          eyebrow="Programs"
          title={
            <>
              Societies, ambassadors <em>and communities</em>
            </>
          }
          lede="IEEE technical societies and affinity groups, plus campus programmes with AWS Student Builders and Black Python Devs."
          photo="summitCoder"
        />

        {/* ── IEEE TECHNICAL SOCIETIES & AFFINITY GROUPS ── */}
        <Communities />

        {/* ── CAMPUS & COMMUNITY PARTNER PROGRAMS ── */}
        <Programs />
      </main>

    </>
  );
}
