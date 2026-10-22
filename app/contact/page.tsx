import type { Metadata } from "next";
import { MapPin, Globe, Phone, Mail, MessageCircle } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact | IEEE Student Branch Cavendish University Uganda",
  description:
    "Get in touch with the IEEE Student Branch at Cavendish University Uganda. Find our address, social links, and send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <main className="min-h-screen bg-[#f5f5f1] text-slate-900 pt-24 sm:pt-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-12 lg:py-16">
          <h1 className="font-serif text-4xl font-bold text-slate-900 sm:text-5xl">
            Contact us
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Reach out with questions about the branch, membership, events, or partnerships.
            We are a student-run organisation — please allow a few days for a response.
          </p>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact details */}
            <div className="space-y-5">
              <div className="rounded-2xl border border-slate-100 bg-white p-7 space-y-4">
                <h2 className="font-serif text-xl font-bold text-slate-900">Branch details</h2>

                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <MapPin size={16} className="text-[#0D6E6E] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-slate-500 mt-0.5">{SITE.address}</p>
                    <a
                      href={SITE.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#0D6E6E] underline underline-offset-2 hover:text-[#1A9090]"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <Globe size={16} className="text-[#0D6E6E] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">University website</p>
                    <a
                      href={SITE.universityUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 underline underline-offset-2 hover:text-slate-900"
                    >
                      {SITE.universityUrl}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <Phone size={16} className="text-[#0D6E6E] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">University switchboard</p>
                    <a href={`tel:${SITE.universityPhone}`} className="text-slate-500 hover:text-slate-900">
                      {SITE.universityPhone}
                    </a>
                  </div>
                </div>

                {SITE.email ? (
                  <div className="flex items-start gap-3 text-sm text-slate-700">
                    <Mail size={16} className="text-[#0D6E6E] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Branch email</p>
                      <a href={`mailto:${SITE.email}`} className="text-slate-500 underline underline-offset-2 hover:text-slate-900">
                        {SITE.email}
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start gap-3 text-sm text-slate-500">
                    <Mail size={16} className="shrink-0 mt-0.5" />
                    <p>
                      Branch email coming soon.{" "}
                      {/* TODO(owner): supply the official branch email address */}
                    </p>
                  </div>
                )}

                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <MessageCircle size={16} className="text-[#0D6E6E] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">WhatsApp community</p>
                    <a
                      href={SITE.whatsapp.ieee}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#0D6E6E] underline underline-offset-2 hover:text-[#1A9090]"
                    >
                      Join the branch WhatsApp group
                    </a>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="rounded-2xl border border-slate-100 bg-white p-7">
                <h2 className="font-serif text-xl font-bold text-slate-900 mb-4">Follow us</h2>
                <div className="space-y-3 text-sm">
                  <a
                    href={SITE.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-slate-100 px-4 py-3 text-slate-700 transition hover:border-[#0A66C2]/30 hover:text-[#0A66C2]"
                  >
                    LinkedIn — ieee-cavendish-university-student-branch
                  </a>
                  <a
                    href={SITE.social.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-slate-100 px-4 py-3 text-slate-700 transition hover:border-slate-300"
                  >
                    X (Twitter) — @IEEECavendish
                  </a>
                  <a
                    href={SITE.social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-slate-100 px-4 py-3 text-slate-700 transition hover:border-slate-300"
                  >
                    TikTok — @cavendishieee
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <div className="overflow-hidden rounded-2xl border border-slate-100 shadow">
                <iframe
                  title="Cavendish University Uganda location"
                  src="https://www.google.com/maps?q=Plot+1469+Ggaba+Road+Kampala+Uganda+Cavendish+University&z=15&output=embed"
                  className="h-[400px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <p className="mt-3 text-xs text-slate-400">
                Siyani Campus · Plot 1469 Ggaba Road, Kampala, Uganda
              </p>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
