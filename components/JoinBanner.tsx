import { MessageCircle } from "lucide-react";
import { WHATSAPP_INVITE_URL } from "@/lib/data";

export function JoinBanner() {
  return (
    <section id="join" className="px-6 pb-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-dim via-bg to-bg px-8 py-16 text-center sm:px-14">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh-violet opacity-60 blur-3xl" />
        <h2 className="mx-auto max-w-xl text-balance font-display text-3xl font-bold text-white sm:text-4xl">
          Move from awareness to participation.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-balance text-white/60">
          Learn something. Build something. Connect with someone. The IEEE CUU WhatsApp group is where
          announcements, event links and opportunities land first.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3.5">
          <a
            href={WHATSAPP_INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-ember to-[#ff9a63] px-6 py-3.5 text-sm font-semibold text-bg transition hover:-translate-y-0.5"
          >
            <MessageCircle size={18} /> Join the WhatsApp group
          </a>
          <a
            href="#event"
            className="rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/5"
          >
            Register for IEEE Day
          </a>
        </div>
      </div>
    </section>
  );
}
