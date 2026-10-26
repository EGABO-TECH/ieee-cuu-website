import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { Handshake, ArrowRight, ShieldCheck, Mail } from "lucide-react";
import { SITE } from "@/config/site";

export const metadata: Metadata = pageMetadata({
  title: "Partners and sponsors",
  description:
    "Learn about our institutional, academic, and community partners, and how external organizations can collaborate with the IEEE Student Branch at Cavendish University Uganda.",
  path: "/partners",
});

const PARTNERS = [
  {
    name: "Cavendish University Uganda",
    category: "Host Institution",
    description:
      "Our founding university host, providing facilities at Siyani Campus, academic advisory oversight, and institutional support.",
    logo: "/images/partners/cuu.png",
    url: SITE.universityUrl,
    official: true,
  },
  {
    name: "IEEE & IEEE Region 8 / Uganda Section",
    category: "Parent Organization",
    description:
      "The world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.",
    logo: "/images/ieee-logo.png",
    url: SITE.ieee.org,
    official: true,
  },
  {
    name: "CUUCSA",
    category: "Campus Partner",
    description:
      "Cavendish University Uganda Computing Students' Association — collaborating on student outreach, coding sessions, and campus tech initiatives.",
    logo: "/images/partners/cuucsa.png",
    url: "/cuucsa",
    official: false,
  },
  {
    name: "AWS Student Builders",
    category: "Community Partner",
    description:
      "Student cloud computing initiative offering cloud literacy and builder skills workshops to university students.",
    logo: "/images/partners/aws.png",
    url: "https://aws.amazon.com/developer/community/students/",
    official: false,
  },
  {
    name: "Black Python Devs",
    category: "Community Partner",
    description:
      "Global community elevating black Python developers and learners through training, mentorship, and conference representation.",
    logo: "/images/partners/black-python-devs.png",
    url: "https://blackpythondevs.com/",
    official: false,
  },
  {
    name: "Kahoot!",
    category: "Event Technology Partner",
    description:
      "Interactive game-based learning platform utilized during branch workshops and launch event quizzes.",
    logo: "/images/partners/kahoot.png",
    url: "https://kahoot.com/",
    official: false,
  },
];

export default function PartnersPage() {
  return (
    <>
      <main className="min-h-screen bg-[#f5f5f1] text-slate-900 pt-24 sm:pt-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-12 lg:py-16">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl font-bold text-slate-900 sm:text-5xl">
              Partners &amp; Collaborators
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
              We collaborate with academic departments, global technical organizations, and industry initiatives
              to create real opportunities for Cavendish University students.
            </p>
          </div>

          {/* Disclaimer box */}
          <div className="mt-8 rounded-2xl border border-amber-200/80 bg-amber-50/60 p-4 sm:p-5 flex items-start gap-3">
            <ShieldCheck size={20} className="text-amber-700 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              <strong>Non-endorsement disclaimer:</strong> AWS Student Builders, Black Python Devs, CUUCSA, and other community or event tools
              are campus and community partners. Their inclusion on this site indicates collaborative student activities and does not constitute an IEEE endorsement of their commercial products or services.
            </p>
          </div>

          {/* Partner Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm transition hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="relative h-14 w-28 flex items-center">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        width={112}
                        height={56}
                        className="max-h-12 w-auto object-contain"
                      />
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600">
                      {partner.category}
                    </span>
                  </div>

                  <h2 className="font-serif text-xl font-bold text-slate-900">{partner.name}</h2>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{partner.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href={partner.url}
                    target={partner.url.startsWith("http") ? "_blank" : undefined}
                    rel={partner.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D6E6E] hover:underline"
                  >
                    Learn more <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Partner with us CTA */}
          <section className="mt-16 rounded-3xl bg-[#061821] p-8 sm:p-12 text-white">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-[#dfeff0] mb-4">
                <Handshake size={14} />
                Collaborate with us
              </span>
              <h2 className="font-serif text-3xl font-bold sm:text-4xl text-white">
                Partner with the Student Branch
              </h2>
              <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
                Whether you represent a tech company looking to mentor emerging talent, an IEEE society chapter,
                or a student organization seeking joint hackathons and seminars — we welcome meaningful collaborations.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact?topic=Partnership"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0D6E6E] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1A9090]"
                >
                  <Mail size={16} />
                  Get in touch
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  About the branch
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
