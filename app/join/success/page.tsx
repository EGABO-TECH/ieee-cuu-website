import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ExternalLink, ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Registration Received | IEEE Student Branch Cavendish University Uganda",
  description: "Next steps for joining the IEEE Student Branch community at Cavendish University Uganda.",
};

export default function JoinSuccessPage() {
  return (
    <>
      <main className="min-h-screen bg-[#f5f5f1] text-slate-900 pt-24 sm:pt-28">
        <div className="mx-auto max-w-3xl px-6 sm:px-10 lg:px-12 py-16 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-6">
            <CheckCircle2 size={36} />
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Registration Received!
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
            Thank you for registering your interest with the IEEE Student Branch at Cavendish University Uganda.
            Here are your two key next steps:
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {/* Step 1: Official IEEE Membership */}
            <div className="rounded-3xl border-2 border-[#0D6E6E] bg-white p-7 flex flex-col justify-between shadow-sm">
              <div>
                <span className="inline-block rounded-full bg-[#0D6E6E]/10 px-3 py-1 text-xs font-bold text-[#0D6E6E] mb-3">
                  Step 1 (Official)
                </span>
                <h2 className="font-serif text-xl font-bold text-slate-900">
                  Official IEEE Student Membership
                </h2>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  To access IEEE Xplore, vote in branch elections, and compete in IEEEXtreme, register your student membership on the global IEEE portal.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={SITE.ieee.membership}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0D6E6E] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1A9090]"
                >
                  Apply on students.ieee.org
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Step 2: Branch WhatsApp Community */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 flex flex-col justify-between shadow-sm">
              <div>
                <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 mb-3">
                  Step 2 (Community)
                </span>
                <h2 className="font-serif text-xl font-bold text-slate-900">
                  Join Branch WhatsApp Group
                </h2>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Connect with fellow CUU tech students, organizers, and committee leads for day-to-day announcements and workshop reminders.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={SITE.whatsapp.ieee}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
                >
                  <MessageCircle size={15} className="text-emerald-600" />
                  Join WhatsApp Group
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Important note */}
          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50/80 p-4 text-xs sm:text-sm text-amber-900">
            <strong>Please note:</strong> Joining the WhatsApp community is for informal campus discussions and announcements. It is not an official IEEE membership. Official membership requires registration via students.ieee.org.
          </div>

          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-slate-900"
            >
              Return to Homepage <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
