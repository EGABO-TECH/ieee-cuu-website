import teamData from "@/content/team.json";
import { PersonCard } from "./PersonCard";
import { container } from "@/lib/ui";

type Member = {
  id: string;
  name: string;
  role: string;
  group: string;
  bio?: string;
  photo?: string;
  linkedin?: string;
  consent: boolean;
  order: number;
};

const GROUPS: { id: string; label: string; blurb: string }[] = [
  { id: "governance", label: "Counselor and advisor", blurb: "Faculty guidance for the branch, on behalf of IEEE and the university." },
  { id: "leadership", label: "Executive committee", blurb: "Sets the branch's priorities and leads its work." },
  { id: "administration", label: "Secretariat", blurb: "Records, correspondence and meetings." },
  { id: "finance", label: "Finance", blurb: "Budgets, spending and financial records." },
  { id: "technical", label: "Technical", blurb: "Workshops, hackathons and student projects." },
  { id: "programs", label: "Programs", blurb: "IEEE opportunities on campus." },
  { id: "outreach", label: "Outreach", blurb: "Helping students find and join branch activities." },
];

export function Team() {
  const members = (teamData as Member[]).filter((m) => m.consent).sort((a, b) => a.order - b.order);

  return (
    <section aria-label="Branch team" className="bg-bg py-16 sm:py-24">
      <div className={`${container} space-y-16 sm:space-y-20`}>
        {GROUPS.map((g) => {
          const people = members.filter((m) => m.group === g.id);
          if (people.length === 0) return null;
          return (
            <section key={g.id} aria-labelledby={`team-${g.id}`} className="grid gap-8 lg:grid-cols-12">
              <header className="lg:col-span-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#00629B]">
                  {people.length} {people.length === 1 ? "person" : "people"}
                </p>
                <h2 id={`team-${g.id}`} className="mt-1 font-display text-2xl font-bold text-ink">
                  {g.label}
                </h2>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-500">{g.blurb}</p>
              </header>
              <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-9 xl:grid-cols-3">
                {people.map((m) => (
                  <li key={m.id}>
                    <PersonCard person={{ name: m.name, role: m.role, bio: m.bio, photo: m.photo, linkedin: m.linkedin }} />
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </section>
  );
}
