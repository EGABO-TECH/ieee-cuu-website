import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, HelpCircle, ArrowUpRight, ExternalLink } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { JoinBanner } from "@/components/JoinBanner";
import { JoinForm } from "@/components/JoinForm";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Join Us & Membership | IEEE Student Branch Cavendish University Uganda",
  description:
    "Become a member of the IEEE Student Branch at Cavendish University Uganda. Learn about IEEE Student Membership, the join process, and what you can do with or without a membership.",
};

const STEPS = [
  {
    step: "01",
    title: "Create an IEEE Account",
    desc: "Go to students.ieee.org and create a free profile using your Cavendish University email address.",
  },
  {
    step: "02",
    title: "Select Student Membership",
    desc: 'Choose "Student Member" or "Graduate Student Member" during checkout. Select Cavendish University Uganda as your student branch. TODO(owner): confirm the exact branch name as it appears on the IEEE form.',
  },
  {
    step: "03",
    title: "Pay the Current Dues",
    desc: 'Check current rates on students.ieee.org/membership — fees are set by IEEE and may change. TODO(owner): confirm how Ugandan students can pay (including whether mobile money or local transfers are available).',
  },
  {
    step: "04",
    title: "Connect with the CUU Branch",
    desc: "Join the branch WhatsApp group and attend the next branch event to meet other members.",
  },
];

const MEMBERSHIP_VS_OPEN = [
  {
    activity: "Attend branch events and workshops",
    members: true,
    open: true,
  },
  {
    activity: "Join the branch WhatsApp community",
    members: true,
    open: true,
  },
  {
    activity: "Volunteer and take on branch roles",
    members: true,
    open: true,
  },
  {
    activity: "Access IEEE Xplore digital library",
    members: true,
    open: false,
  },
  {
    activity: "Compete in IEEEXtreme (requires IEEE student membership)",
    members: true,
    open: false,
  },
  {
    activity: "Vote in branch elections",
    members: true,
    open: false,
  },
  {
    activity: "Access IEEE member-only resources",
    members: true,
    open: false,
  },
];

const MEMBERSHIP_FAQS = [
  {
    q: "How much does IEEE Student Membership cost?",
    a: `Current rates are published on the official IEEE Students membership page. Check students.ieee.org/membership for up-to-date pricing. TODO(owner): the branch will confirm the exact USD and UGX cost, and any regional discount scheme available to Ugandan students.`,
  },
  {
    q: "Can I attend Branch events without an official membership?",
    a: "Yes. Many campus workshops and general sessions are open to all CUU students. IEEE membership is required for voting rights, IEEE Xplore access, and competitions like IEEEXtreme.",
  },
  {
    q: "How do I pay for my membership in Uganda?",
    a: "IEEE accepts major international credit and debit cards and PayPal. The branch is confirming whether other payment methods (such as mobile money) are available — check with the Treasurer for the latest guidance.",
  },
  {
    q: "Are non-technical students eligible?",
    a: "Students from any discipline — including Business, Public Health, Law, or Social Sciences — can join branch activities and, where eligible under IEEE rules, apply for Student or Associate membership.",
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
          <h1 className="font-serif text-4xl font-bold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Join the IEEE Community at<br />
            Cavendish University Uganda
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-slate-600">
            Access IEEE Xplore, global competitions, leadership opportunities, and a worldwide
            network of engineers and technologists.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#register"
              className="inline-flex items-center gap-2 rounded-full bg-[#0D6E6E] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1A9090]"
            >
              Register with Branch
              <ArrowUpRight size={14} />
            </a>
            <a
              href={SITE.ieee.membership}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Apply on IEEE Students
              <ExternalLink size={14} />
            </a>
          </div>

          <p className="mt-3 text-xs text-slate-400">
            Joining the WhatsApp group is not the same as IEEE membership.
          </p>
        </section>

        {/* ── REGISTRATION FORM SECTION ── */}
        <section id="register" className="relative mx-auto max-w-4xl px-6 sm:px-10 lg:px-12 py-8">
          <JoinForm />
        </section>

        {/* ── MEMBERSHIP GRADES ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-10">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-2">IEEE membership grades</h2>
          <p className="text-sm text-slate-500 mb-8">
            For most CUU students, the relevant grades are Student Member and Graduate Student Member.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Student Member */}
            <div className="rounded-2xl border-2 border-[#0D6E6E] bg-white p-7 relative">
              <span className="absolute -top-3 left-6 bg-[#0D6E6E] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Recommended for CUU students
              </span>
              <h3 className="font-serif text-xl font-bold text-slate-900 mt-2">Student Member</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                For students enrolled in an undergraduate programme related to IEEE fields of interest.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {["IEEE Xplore digital library access", "Compete in IEEEXtreme", "Branch voting rights", "Global student community"].map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#0D6E6E] mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <p className="text-xs text-slate-400 mb-2">
                  Current rates: see{" "}
                  <a href={SITE.ieee.membership} target="_blank" rel="noopener noreferrer" className="text-[#0D6E6E] underline underline-offset-2">
                    students.ieee.org/membership
                  </a>
                </p>
                <a
                  href={SITE.ieee.membership}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0D6E6E] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#1A9090]"
                >
                  Apply as Student Member
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Graduate Student Member */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <h3 className="font-serif text-xl font-bold text-slate-900">Graduate Student Member</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                For students enrolled in a master&apos;s, doctoral, or other advanced technical programme.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {["All Student Member benefits", "Research and publishing support", "Graduate-level network"].map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#0D6E6E] mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <a
                  href={SITE.ieee.membership}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 transition hover:bg-slate-50"
                >
                  Apply as Graduate Student Member
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Collapsed other grades */}
          <details className="rounded-xl border border-slate-100 bg-white p-5">
            <summary className="cursor-pointer text-sm font-semibold text-slate-700 list-none flex items-center justify-between">
              Other IEEE membership grades (Associate, Member, Senior Member)
              <span className="text-[#0D6E6E] text-xl leading-none group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
              These grades are for practicing professionals and do not apply to most university students.
              For full details, visit{" "}
              <a href={SITE.ieee.org} target="_blank" rel="noopener noreferrer" className="text-[#0D6E6E] underline underline-offset-2">
                ieee.org/membership
              </a>
              .
            </p>
          </details>
        </section>

        {/* ── MEMBERSHIP VS. OPEN TABLE ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-10">
          <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6">
            What you can do, with or without membership
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-100">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <th className="px-5 py-3 text-left font-semibold text-slate-700">Activity</th>
                  <th className="px-5 py-3 text-center font-semibold text-slate-700">IEEE Members</th>
                  <th className="px-5 py-3 text-center font-semibold text-slate-700">Open to all CUU students</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {MEMBERSHIP_VS_OPEN.map((row) => (
                  <tr key={row.activity}>
                    <td className="px-5 py-3 text-slate-700">{row.activity}</td>
                    <td className="px-5 py-3 text-center">
                      {row.members ? <CheckCircle2 size={16} className="text-[#0D6E6E] mx-auto" /> : <span className="text-slate-300">—</span>}
                    </td>
                    <td className="px-5 py-3 text-center">
                      {row.open ? <CheckCircle2 size={16} className="text-[#0D6E6E] mx-auto" /> : <span className="text-slate-300">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 4-STEP PROCESS ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl font-bold text-slate-900">
              How to become an official IEEE member
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s) => (
              <div
                key={s.step}
                className="rounded-2xl border border-slate-100 bg-white p-6 transition duration-300 hover:border-[#1A9090]/50 hover:-translate-y-1"
              >
                <div className="font-serif text-3xl font-bold text-[#1A9090]/60 mb-4">{s.step}</div>
                <h3 className="font-bold text-slate-900 text-base mb-2">{s.title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-16" id="faqs">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Membership FAQs
            </h2>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-slate-100 border-y border-slate-100">
            {MEMBERSHIP_FAQS.map((faq, i) => (
              <details key={i} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-left list-none">
                  <span className="font-semibold text-slate-900">{faq.q}</span>
                  <span className="shrink-0 text-[#1A9090] transition-transform group-open:rotate-45 text-xl leading-none">+</span>
                </summary>
                <p className="mt-3 max-w-xl text-sm text-slate-500 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── JOIN BANNER ── */}
        <JoinBanner />
      </main>

      <SiteFooter />
    </>
  );
}
