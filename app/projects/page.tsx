import type { Metadata } from "next";
import Link from "next/link";
import { FolderGit2, PlusCircle, Github, Globe, CheckCircle2, ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Projects Showcase | IEEE Student Branch Cavendish University Uganda",
  description:
    "Showcase of student-built engineering, software, and hardware projects from Cavendish University Uganda. Submit your project to get featured.",
};

// Seed with zero fake projects.
// TODO(owner): Populate this list when CUU students submit verified projects.
interface Project {
  title: string;
  slug: string;
  summary: string;
  team: string[];
  tags: string[];
  status: "In Development" | "Completed" | "Prototype";
  github?: string;
  demo?: string;
}

const PROJECTS: Project[] = [];

export default function ProjectsPage() {
  return (
    <>
      <main className="min-h-screen bg-[#f5f5f1] text-slate-900 pt-24 sm:pt-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-12 lg:py-16">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl font-bold text-slate-900 sm:text-5xl">
              Student Projects Showcase
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
              Technical work built by Cavendish University students across software engineering,
              data science, embedded systems, and humanitarian tech.
            </p>
          </div>

          {PROJECTS.length === 0 ? (
            <div className="mt-12 rounded-3xl border border-dashed border-slate-300 bg-white p-8 sm:p-14 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400 mb-5">
                <FolderGit2 size={32} />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-800">
                Be the first to feature your project
              </h2>
              <p className="mt-3 max-w-lg mx-auto text-sm sm:text-base text-slate-500 leading-relaxed">
                We are actively collecting projects built by CUU students. Whether it is a class capstone,
                an IEEEXtreme hackathon solution, an open source library, or an IoT prototype — submit it below!
              </p>
              <div className="mt-8">
                <a
                  href="#how-to-submit"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0D6E6E] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1A9090]"
                >
                  <PlusCircle size={16} />
                  See submission guide
                </a>
              </div>
            </div>
          ) : (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map((proj) => (
                <div
                  key={proj.slug}
                  className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                        {proj.status}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-slate-900">{proj.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{proj.summary}</p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {proj.tags.map((t) => (
                        <span key={t} className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] text-slate-600 font-medium">
                          {t}
                        </span>
                      ))}
                    </div>

                    <p className="mt-4 text-xs text-slate-400">
                      Team: {proj.team.join(", ")}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-3 pt-4 border-t border-slate-100">
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-[#0D6E6E]"
                      >
                        <Github size={14} /> Code
                      </a>
                    )}
                    {proj.demo && (
                      <a
                        href={proj.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-[#0D6E6E]"
                      >
                        <Globe size={14} /> Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Submission Guide */}
          <section id="how-to-submit" className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              How to get your project featured
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-2xl">
              Any Cavendish University Uganda student can submit their project for review and inclusion in the showcase.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <span className="font-serif text-2xl font-bold text-[#0D6E6E]">01</span>
                <h3 className="font-semibold text-slate-900 mt-2 mb-1">Working prototype or code</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Your project should have a publicly accessible GitHub/GitLab repository or a live demo URL.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <span className="font-serif text-2xl font-bold text-[#0D6E6E]">02</span>
                <h3 className="font-semibold text-slate-900 mt-2 mb-1">Clear README</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Describe what the project solves, technologies used, instructions to run locally, and team credits.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <span className="font-serif text-2xl font-bold text-[#0D6E6E]">03</span>
                <h3 className="font-semibold text-slate-900 mt-2 mb-1">Submit to the Branch</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Send your project details via our contact page or to the technical coordinators in the branch WhatsApp.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact?topic=Project+Submission"
                className="inline-flex items-center gap-2 rounded-full bg-[#0D6E6E] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1A9090]"
              >
                Submit your project
                <ArrowRight size={14} />
              </Link>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
