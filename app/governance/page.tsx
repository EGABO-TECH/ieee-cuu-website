import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { FileText, Download, ShieldCheck, Clock, ExternalLink } from "lucide-react";
import { SITE } from "@/config/site";

export const metadata: Metadata = pageMetadata({
  title: "Governance and transparency",
  description:
    "Official governance framework, branch constitution, code of conduct, and reporting standards for the IEEE Student Branch at Cavendish University Uganda.",
  path: "/governance",
});

interface GovernanceDoc {
  id: string;
  title: string;
  category: "Recognition" | "Constitutional" | "Ethics & Conduct" | "Reporting";
  description: string;
  fileUrl?: string; // undefined if not yet uploaded
  updatedAt?: string;
  status: "Published" | "Pending Branch Adoption" | "Upcoming";
}

// TODO(owner): Provide PDFs for the branch constitution, launch minutes and annual plan.
const GOVERNANCE_DOCS: GovernanceDoc[] = [
  {
    id: "certificate-of-approval",
    title: "IEEE certificate of approval",
    category: "Recognition",
    description:
      "Received on IEEE Day, 6 October 2026, at the American Center, Kabalagala, recognising the branch as one of Uganda's student branches being reborn.",
    fileUrl: undefined, // TODO(owner): add the certificate scan to /public/documents/governance/
    updatedAt: "6 October 2026",
    status: "Published",
  },
  {
    id: "constitution",
    title: "Student Branch Constitution & Bylaws",
    category: "Constitutional",
    description:
      "Operational framework outlining branch leadership elections, committee structures, membership criteria, and compliance with IEEE MGA guidelines.",
    fileUrl: undefined, // TODO(owner): upload constitution PDF to /public/documents/governance/
    status: "Pending Branch Adoption",
  },
  {
    id: "code-of-conduct",
    title: "IEEE Code of Ethics & Student Conduct",
    category: "Ethics & Conduct",
    description:
      "All branch members and event attendees are bound by the IEEE Code of Ethics, promoting fairness, inclusivity, and technical integrity.",
    fileUrl: "https://www.ieee.org/about/ethics.html",
    updatedAt: "Official IEEE Policy",
    status: "Published",
  },
  {
    id: "launch-minutes",
    title: "Launch minutes",
    category: "Reporting",
    description: "To be published after the 4 November launch.",
    fileUrl: undefined,
    status: "Upcoming",
  },
  {
    id: "annual-plan",
    title: "2026/2027 Branch Activity Roadmap",
    category: "Reporting",
    description:
      "Strategic milestones for technical workshops, society petitions (Computer Society & WIE), and competitive programming cohorts.",
    fileUrl: undefined, // TODO(owner): upload annual plan PDF
    status: "Pending Branch Adoption",
  },
];

export default function GovernancePage() {
  return (
    <>
      <main className="min-h-screen bg-[#f5f5f1] text-slate-900 pt-28 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-12 lg:py-16">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl font-bold text-slate-900 sm:text-5xl">
              Governance &amp; Transparency
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
              The IEEE Student Branch at Cavendish University Uganda operates in accordance with
              IEEE Member and Geographic Activities (MGA) policies, IEEE Region 8 regulations,
              and Cavendish University student leadership guidelines.
            </p>
          </div>

          {/* Pillars Box */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <ShieldCheck size={24} className="text-[#0D6E6E] mb-3" />
              <h3 className="font-semibold text-slate-900">IEEE MGA Compliance</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Operating under the IEEE Uganda Section and Region 8 oversight, ensuring all branch activities follow global IEEE standards.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <Clock size={24} className="text-[#0D6E6E] mb-3" />
              <h3 className="font-semibold text-slate-900">Democratic Elections</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Branch executive committee positions are elected annually by verified IEEE Student Members enrolled at CUU.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <FileText size={24} className="text-[#0D6E6E] mb-3" />
              <h3 className="font-semibold text-slate-900">Counselor and Advisor</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong className="font-semibold text-slate-800">Dr. John Bosco Ssemakula</strong>, Branch Counselor, is the
                faculty member who advises the branch on behalf of IEEE and the university.
              </p>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong className="font-semibold text-slate-800">Mr. Tabingwa Evans Maganda</strong>, Advisor, advises the
                branch executive.
              </p>
            </div>
          </div>

          {/* Documents Section */}
          <section className="mt-14">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
              Official Branch Documents
            </h2>

            <div className="space-y-4">
              {GOVERNANCE_DOCS.map((doc) => (
                <div
                  key={doc.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                        {doc.category}
                      </span>
                      {doc.status === "Pending Branch Adoption" && (
                        <span className="rounded-full bg-amber-50 border border-amber-200/80 px-2.5 py-0.5 text-[10px] font-semibold text-amber-700">
                          Draft in Review
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-slate-900">{doc.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {doc.description}
                    </p>
                  </div>

                  <div className="shrink-0 pt-2 sm:pt-0">
                    {doc.fileUrl ? (
                      <a
                        href={doc.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#0D6E6E] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#1A9090]"
                      >
                        {doc.fileUrl.startsWith("http") ? (
                          <>
                            View IEEE Policy <ExternalLink size={13} />
                          </>
                        ) : (
                          <>
                            Download PDF <Download size={13} />
                          </>
                        )}
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-medium bg-slate-50 border border-slate-100 rounded-full px-3 py-1.5">
                        PDF coming soon
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {/* TODO(owner): Furnish signed PDF versions of constitution and launch minutes */}
          </section>
        </div>
      </main>
    </>
  );
}
