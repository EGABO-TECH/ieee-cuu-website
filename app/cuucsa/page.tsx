import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { CUUCSA } from "@/components/CUUCSA";

export const metadata: Metadata = pageMetadata({
  title: "CUUCSA: Computing Students' Association",
  description:
    "CUUCSA is the Cavendish University Uganda Computing Students' Association, an independent student association of the Faculty of Science and Technology that collaborates with the IEEE CUU Student Branch.",
  path: "/cuucsa",
});

export default function CUUCSAPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f1] text-slate-900 pt-28 sm:pt-32">
      <CUUCSA />
    </main>
  );
}
