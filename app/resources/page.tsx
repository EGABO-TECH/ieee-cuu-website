import type { Metadata } from "next";
import { ExternalLink, BookOpen, Code, GraduationCap, Award, Cpu, Users } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Resources | IEEE Student Branch Cavendish University Uganda",
  description:
    "Curated technical and academic resources for Cavendish University students: IEEE Xplore, IEEEXtreme preparation, IEEE societies, scholarships, and member benefits.",
};

interface ResourceLink {
  title: string;
  desc: string;
  url: string;
  badge?: string;
}

interface ResourceSection {
  title: string;
  icon: any;
  desc: string;
  links: ResourceLink[];
}

const RESOURCE_SECTIONS: ResourceSection[] = [
  {
    title: "Research & Academic Publishing",
    icon: BookOpen,
    desc: "Digital libraries, search tools, and author resources directly from IEEE.",
    links: [
      {
        title: "IEEE Xplore Digital Library",
        desc: "Over 5 million technical articles, conference papers, and standards. Student members get digital subscription access.",
        url: SITE.ieee.xplore,
        badge: "Member Access",
      },
      {
        title: "IEEE Author Center",
        desc: "Guidelines, templates (LaTeX & MS Word), and peer review processes for publishing papers in IEEE journals and conferences.",
        url: "https://authorcenter.ieee.org/",
      },
      {
        title: "IEEE Collabratec",
        desc: "An integrated online community where technology professionals and students network, collaborate, and share research.",
        url: "https://ieee-collabratec.ieee.org/",
      },
    ],
  },
  {
    title: "IEEEXtreme & Coding Preparation",
    icon: Code,
    desc: "Guides, past problems, and platforms to train for the annual 24-hour virtual programming challenge.",
    links: [
      {
        title: "Official IEEEXtreme Portal",
        desc: "Rules, competition format, and eligibility requirements for teams of 2-3 IEEE Student Members.",
        url: SITE.ieee.extreme,
        badge: "Annual Contest",
      },
      {
        title: "IEEEXtreme Practice Community (CS Academy)",
        desc: "Solve archived problems from past competitions to sharpen algorithms, data structures, and team strategy.",
        url: "https://csacademy.com/ieeextreme-practice/",
      },
      {
        title: "HackerRank & LeetCode Practice Tracks",
        desc: "Foundational problem sets recommended for speed and algorithm fluency during competitive programming.",
        url: "https://www.hackerrank.com/domains/algorithms",
      },
    ],
  },
  {
    title: "Student Membership & Career Advancement",
    icon: GraduationCap,
    desc: "Official IEEE student member portals, discounts, and professional tools.",
    links: [
      {
        title: "IEEE Students Hub",
        desc: "Global gateway for student branches, awards, competitions, and regional student activities.",
        url: SITE.ieee.students,
      },
      {
        title: "IEEE Region 8 Student Activities (SAC)",
        desc: "Programs, congresses, and funding opportunities for student branches across Europe, the Middle East, and Africa.",
        url: "https://sac.ieeer8.org/",
      },
      {
        title: "IEEE Job Site & Mentoring",
        desc: "Explore global engineering job postings, internships, and career webinars tailored to emerging technologists.",
        url: "https://jobs.ieee.org/",
      },
    ],
  },
  {
    title: "Societies & Affinity Groups",
    icon: Cpu,
    desc: "Specialized technical communities within IEEE open to student members.",
    links: [
      {
        title: "IEEE Computer Society",
        desc: "The premier source for information, inspiration, and collaboration in computer science and engineering.",
        url: "https://www.computer.org/",
        badge: "Forming at CUU",
      },
      {
        title: "IEEE Women in Engineering (WIE)",
        desc: "A global network of IEEE members and volunteers dedicated to promoting women engineers and scientists.",
        url: "https://wie.ieee.org/",
        badge: "Forming at CUU",
      },
      {
        title: "Directory of all 39 IEEE Technical Societies",
        desc: "From Robotics & Automation to Power & Energy — explore the full spectrum of specialized IEEE disciplines.",
        url: "https://www.ieee.org/communities/societies/index.html",
      },
    ],
  },
  {
    title: "Scholarships, Grants & Awards",
    icon: Award,
    desc: "Financial awards, travel assistance, and competition prizes provided by IEEE foundations and societies.",
    links: [
      {
        title: "IEEE Student Scholarships & Fellowships",
        desc: "Official registry of undergraduate scholarships and graduate fellowships awarded annually by IEEE societies.",
        url: "https://www.ieee.org/about/awards/index.html",
      },
      {
        title: "IEEE Foundation Student Grants",
        desc: "Funding opportunities for humanitarian technology initiatives and student branch projects.",
        url: "https://www.ieeefoundation.org/",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <main className="min-h-screen bg-[#f5f5f1] text-slate-900 pt-24 sm:pt-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-12 lg:py-16">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl font-bold text-slate-900 sm:text-5xl">
              Curated Resources
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
              Essential technical references, competition preparation portals, academic archives,
              and career tools for Cavendish University students. All links connect to official, verified sources.
            </p>
          </div>

          <div className="mt-12 space-y-12">
            {RESOURCE_SECTIONS.map((sec) => {
              const Icon = sec.icon;
              return (
                <section key={sec.title} className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0D6E6E]/10 text-[#0D6E6E]">
                      <Icon size={20} />
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-slate-900">{sec.title}</h2>
                  </div>
                  <p className="text-sm text-slate-500 mb-6 max-w-2xl">{sec.desc}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {sec.links.map((link) => (
                      <a
                        key={link.title}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50/50 p-5 transition hover:border-[#1A9090]/40 hover:bg-white hover:shadow-md"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="font-semibold text-slate-900 text-sm group-hover:text-[#0D6E6E] transition">
                              {link.title}
                            </h3>
                            <ExternalLink size={14} className="text-slate-400 shrink-0 mt-0.5 group-hover:text-[#0D6E6E]" />
                          </div>
                          <p className="text-xs text-slate-500 leading-relaxed">{link.desc}</p>
                        </div>
                        {link.badge && (
                          <div className="mt-4 pt-2">
                            <span className="inline-block rounded-full bg-[#0D6E6E]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#0D6E6E]">
                              {link.badge}
                            </span>
                          </div>
                        )}
                      </a>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
