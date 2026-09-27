import Image from "next/image";
import {
  ArrowUpRight,
  Briefcase,
  ChevronDown,
  Cpu,
  Linkedin,
  MessageCircle,
  Terminal,
  Users2,
} from "lucide-react";
import { CUUCSA_LINKEDIN_URL, CUUCSA_WHATSAPP_URL } from "@/lib/data";

const PILLARS = [
  {
    icon: Terminal,
    title: "Academy & CodeLab",
    subtitle: "Hands-on Engineering",
    desc: "Intensive coding bootcamps, algorithmic problem solving, modern web/cloud architectures, and open-source contributions.",
    tag: "Core Technical",
  },
  {
    icon: Cpu,
    title: "Innovation & Research Hub",
    subtitle: "Applied Problem Solving",
    desc: "Hackathon strike teams, AI & data science projects, hardware tinkering, and student-led tech research papers.",
    tag: "Applied Tech",
  },
  {
    icon: Briefcase,
    title: "Techpreneur & Industry Connect",
    subtitle: "Career & Venture Building",
    desc: "Direct recruitment pipelines, industry speaker sessions, portfolio teardowns, and tech founder venture incubation.",
    tag: "Industry Link",
  },
  {
    icon: Users2,
    title: "Guild & Student Representation",
    subtitle: "Advocacy & Community",
    desc: "Unified computing student voice, peer study circles, women-in-tech initiatives, and Students' Guild alignment.",
    tag: "Ecosystem",
  },
];

const FAQS = [
  {
    question: "Who is CUUCSA?",
    answer:
      "CUUCSA is the Cavendish University Uganda Computing Students’ Association, a student-led community for computing students across the university.",
  },
  {
    question: "Where is it going?",
    answer:
      "CUUCSA is building a connected, practical computing community that links academic learning with innovation, research, industry, and student representation.",
  },
  {
    question: "What will it do?",
    answer:
      "It will provide hands-on technical learning, support student projects and research, connect students with industry, and represent computing students across campus.",
  },
  {
    question: "How will it deliver?",
    answer:
      "Through CodeLab sessions, collaborative project and research teams, industry events, peer learning, and student-led initiatives across its four focus areas.",
  },
  {
    question: "What impact will it bring?",
    answer:
      "Students will have more opportunities to develop practical skills, build work they can demonstrate, make professional connections, and contribute to a stronger computing community.",
  },
];

export function CUUCSA() {
  return (
    <>
      <section id="cuucsa" className="bg-bg py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-[5rem_minmax(0,1fr)] items-center gap-5 rounded-lg border border-ink/10 bg-white p-5 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-8 sm:p-8">
            <div className="relative h-20 w-20 sm:h-32 sm:w-32">
              <Image
                src="/images/cuucsa/cuucsa-emblem.png"
                alt="Official CUUCSA seal"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 80px, 128px"
                priority
              />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold leading-tight text-ink sm:text-3xl lg:text-4xl">
                Welcome to <span className="text-[#0D6E6E]">CUUCSA</span>
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                A disciplined student technology ecosystem arriving to ignite builders and innovators at Cavendish University Uganda, with the purpose of equipping computing students to meet industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="cuucsa-expect-title" className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="mb-7 flex flex-col gap-2 border-b border-ink/10 pb-5 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
            <h2 id="cuucsa-expect-title" className="font-serif text-2xl font-bold text-ink sm:text-3xl">
              WHAT TO EXPECT FROM CUUCSA?
            </h2>
            <p className="text-sm text-muted">Four areas of student development</p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {PILLARS.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <article key={pillar.title} className="rounded-md border border-ink/10 bg-[#fafaf8] p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <Icon size={19} strokeWidth={1.8} className="text-[#0D6E6E]" aria-hidden="true" />
                    <span className="font-mono text-xs text-muted">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-base font-semibold leading-snug text-ink">{pillar.title}</h3>
                  <p className="mt-1 text-xs font-medium text-[#0D6E6E]">{pillar.subtitle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="cuucsa-faq-title" className="bg-bg py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:px-10 lg:grid-cols-12 lg:gap-12 lg:px-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#0D6E6E]">CUUCSA</p>
            <h2 id="cuucsa-faq-title" className="mt-2 font-serif text-2xl font-bold text-ink sm:text-3xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="lg:col-span-8">
            {FAQS.map((faq, index) => (
              <details key={faq.question} className="group border-t border-ink/15 py-4" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <ChevronDown
                    size={16}
                    className="shrink-0 text-[#0D6E6E] transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 max-w-2xl pr-8 text-sm leading-relaxed text-muted">{faq.answer}</p>
              </details>
            ))}
            <div className="border-t border-ink/15" />
          </div>
        </div>
      </section>

      <section aria-labelledby="cuucsa-connect-title" className="bg-[#123f45] py-10 text-white sm:py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-12">
          <div className="max-w-xl">
            <h2 id="cuucsa-connect-title" className="font-serif text-2xl font-bold sm:text-3xl">
              Connect with CUUCSA
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              Join the official student community or follow CUUCSA for updates.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={CUUCSA_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-semibold text-[#123f45] transition hover:bg-[#e8f5f5]"
            >
              <MessageCircle size={17} aria-hidden="true" />
              Official WhatsApp Community
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a
              href={CUUCSA_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/35 px-4 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              <Linkedin size={17} aria-hidden="true" />
              Official LinkedIn
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
