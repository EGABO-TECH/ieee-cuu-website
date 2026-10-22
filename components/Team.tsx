import Image from "next/image";
import { Linkedin } from "lucide-react";
import teamData from "@/content/team.json";

type Member = {
  id: string;
  name: string;
  role: string;
  group: string;
  bio?: string;
  photo?: string;
  linkedin?: string;
  email?: string;
  consent: boolean;
  order: number;
};

const GROUP_LABELS: Record<string, string> = {
  leadership: "Leadership",
  administration: "Administration",
  finance: "Finance",
  technical: "Technical",
  programs: "Programs & Outreach",
  outreach: "Outreach",
};

// Placeholder SVG for members without photos — consistent, not random colors
function PhotoPlaceholder({ name }: { name: string }) {
  const initials = name
    .trim()
    .split(/\s+/)
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="flex h-full w-full items-center justify-center bg-[#e8f0ee]">
      <span className="font-serif text-2xl font-semibold text-[#0D6E6E]">{initials}</span>
    </div>
  );
}

function MemberCard({ member }: { member: Member }) {
  const hasPhoto = Boolean(member.photo);
  const hasLinkedin =
    Boolean(member.linkedin) &&
    /^https?:\/\//.test(member.linkedin ?? "") &&
    member.linkedin !== "#";

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white overflow-hidden">
      {/* Photo */}
      <div className="relative h-40 w-full bg-[#e8f0ee]">
        {hasPhoto ? (
          <Image
            src={member.photo!}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 25vw"
            className="object-cover object-top"
          />
        ) : (
          <PhotoPlaceholder name={member.name} />
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-[#0D6E6E]">
          {GROUP_LABELS[member.group] ?? member.group}
        </p>
        <h3 className="mt-1.5 font-serif text-lg font-bold leading-snug text-slate-900">
          {member.name}
        </h3>
        <p className="mt-0.5 text-sm font-medium text-slate-600">{member.role}</p>
        {member.bio && (
          <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">{member.bio}</p>
        )}

        {hasLinkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="mt-4 inline-flex items-center gap-2 self-start rounded border border-[#0A66C2]/25 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-[#0A66C2] hover:text-[#0A66C2]"
          >
            <Linkedin size={14} className="text-[#0A66C2]" />
            LinkedIn profile
          </a>
        )}
      </div>
    </article>
  );
}

export function Team() {
  const members: Member[] = (teamData as Member[])
    .filter((m) => m.consent)
    .sort((a, b) => a.order - b.order);

  // Group by function
  const grouped = members.reduce<Record<string, Member[]>>((acc, m) => {
    if (!acc[m.group]) acc[m.group] = [];
    acc[m.group].push(m);
    return acc;
  }, {});

  const groupOrder = ["leadership", "administration", "finance", "technical", "programs", "outreach"];

  return (
    <section id="team" className="border-t border-slate-100 bg-[#f5f5f1] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 space-y-14">
        {groupOrder.map((group) => {
          const groupMembers = grouped[group];
          if (!groupMembers?.length) return null;
          return (
            <div key={group}>
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6">
                {GROUP_LABELS[group]}
              </h2>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {groupMembers.map((member) => (
                  <MemberCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          );
        })}

        <p className="text-xs text-slate-400">
          {/* TODO(owner): Supply headshots for all team members and LinkedIn profile URLs where consent is given. */}
          Photos for most team members are pending. LinkedIn links will appear once real profile URLs are supplied.
        </p>
      </div>
    </section>
  );
}
