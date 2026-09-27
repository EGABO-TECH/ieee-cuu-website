import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Sparkles, ArrowUpRight, HelpCircle, ShieldCheck } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { Membership } from "@/components/Membership";
import { JoinBanner } from "@/components/JoinBanner";
import { WHATSAPP_INVITE_URL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Join Us & Membership | IEEE Student Branch Cavendish University Uganda",
  description:
    "Become a member of the IEEE Student Branch at Cavendish University Uganda. Explore subsidized student membership tiers, benefits, and WhatsApp community access.",
};

const STEPS = [
  {
    step: "01",
    title: "Create an IEEE Account",
    desc: "Head over to IEEE.org or students.ieee.org and create your free user profile with your Cavendish University email.",
  },
  {
    step: "02",
    title: "Select Student Membership",
    desc: "Choose 'Student Member' or 'Graduate Student Member' and select Cavendish University Uganda as your Student Branch.",
  },
  {
    step: "03",
    title: "Enjoy Subsidized Rates",
    desc: "Students in Region 8 (Africa) qualify for significantly discounted annual membership rates and society addons.",
  },
  {
    step: "04",
    title: "Connect with CUU Branch",
    desc: "Join our official WhatsApp group and attend our next branch orientation or IEEE Day to receive your welcome kit.",
  },
];

const MEMBERSHIP_FAQS = [
  {
    q: "How much does IEEE Student Membership cost?",
    a: "Undergraduate and graduate students benefit from reduced dues (typically 50% discount or regional subsidies through the Future50 initiative).",
  },
  {
    q: "Can I attend Branch events without an official membership?",
    a: "Yes! Many campus workshops and general sessions (including IEEE Day 2026) are open to all CUU students. However, official membership is required for voting rights, IEEE Xplore access, and competitions like IEEEXtreme.",
  },
  {
    q: "How do I pay for my membership in Uganda?",
    a: "IEEE accepts international credit/debit cards, PayPal, and student group wire transfers organized by the Branch Treasurer.",
  },
  {
    q: "Are non-technical students eligible?",
    a: "Yes! Students studying business, public health, law, or any interdisciplinary program with interest in technology can join as Student Members or Associate Members.",
  },
];

export default function JoinPage() {
  return (
    <>
      <main className="min-h-screen bg-[#f5f5f1] text-slate-900 pt-24 sm:pt-28">
        {/* Ambient Glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[550px] w-[1100px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(ellipse at center, #0D6E6E 0%, #1A9090 40%, transparent 75%)" }}
        />

        {/* ── PAGE HERO ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-12 lg:py-16 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-[#dfeff0] px-3 py-1 text-[12px] font-medium text-[#2f5f68]">
            <span className="h-1 w-1 rounded-full bg-[#2f5f68]/50" aria-hidden="true" />
            Global credentials · subsidized student rates
          </span>

          <h1 className="mt-6 font-serif text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Join the IEEE Community at<br />
            <span className="text-[#1A9090] italic">Cavendish University</span> Uganda
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-muted">
            Supercharge your university experience. Gain access to IEEE Xplore, global scholarships,
            competitions, leadership credentials, and a worldwide network of peers.
          </p>
        </section>

        {/* ── 4-STEP ONBOARDING ROADMAP ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-700">
              Step-by-Step
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-ink">
              How to Become an Official Member
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s) => (
              <div
                key={s.step}
                className="rounded-2xl border border-ieee/10 bg-white p-6 backdrop-blur-sm transition duration-300 hover:border-[#1A9090]/50 hover:-translate-y-1"
              >
                <div className="font-serif text-3xl font-bold text-[#1A9090]/80 mb-4">{s.step}</div>
                <h3 className="font-bold text-ink text-base mb-2">{s.title}</h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CORE COMPONENT EMBED (MEMBERSHIP) ── */}
        <Membership />

        {/* ── MEMBERSHIP FAQS ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 rounded-md bg-white border border-slate-100 px-3 py-1 text-[12px] font-medium text-slate-600">
              <span className="h-1 w-1 rounded-full bg-slate-400" aria-hidden="true" />
              Clear answers
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-ink sm:text-4xl">
              Membership FAQs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {MEMBERSHIP_FAQS.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-ieee/10 bg-white/80 p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle size={18} className="text-[#E8F5F5] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-ink text-base">{faq.q}</h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CORE COMPONENT EMBED (JOIN BANNER) ── */}
        <JoinBanner />
      </main>

      <SiteFooter />
    </>
  );
}
