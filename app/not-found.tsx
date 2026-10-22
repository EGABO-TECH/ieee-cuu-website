import Link from "next/link";
import { ArrowLeft, Home, Calendar, Users, HelpCircle } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <>
      <main className="min-h-screen bg-[#f5f5f1] text-slate-900 pt-28 sm:pt-36 pb-16 flex items-center">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <span className="font-mono text-sm font-bold tracking-widest text-[#0D6E6E] uppercase">
            Error 404
          </span>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl font-bold text-slate-900">
            Page not found
          </h1>
          <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-md mx-auto">
            The link you followed may be broken or the page may have been moved.
            Here are helpful places to go:
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <Link
              href="/"
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:border-[#0D6E6E] transition"
            >
              <Home size={18} className="text-[#0D6E6E] shrink-0" />
              <div>
                <p className="text-xs font-bold text-slate-900">Homepage</p>
                <p className="text-[11px] text-slate-500">Back to start</p>
              </div>
            </Link>

            <Link
              href="/events"
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:border-[#0D6E6E] transition"
            >
              <Calendar size={18} className="text-[#0D6E6E] shrink-0" />
              <div>
                <p className="text-xs font-bold text-slate-900">Events</p>
                <p className="text-[11px] text-slate-500">See what&apos;s on</p>
              </div>
            </Link>

            <Link
              href="/join"
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:border-[#0D6E6E] transition"
            >
              <Users size={18} className="text-[#0D6E6E] shrink-0" />
              <div>
                <p className="text-xs font-bold text-slate-900">Join Us</p>
                <p className="text-[11px] text-slate-500">Become a member</p>
              </div>
            </Link>
          </div>

          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-[#0D6E6E] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1A9090]"
            >
              <ArrowLeft size={15} />
              Return to Homepage
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
