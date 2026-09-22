export const pillars = [
  {
    title: "Technology & innovation",
    body: "Explore emerging technologies through projects, labs and challenges built by the Branch.",
    accent: "cyan",
  },
  {
    title: "Research & publications",
    body: "Access IEEE Xplore, learn literature-search skills and find routes to present technical work.",
    accent: "violet",
  },
  {
    title: "Professional development",
    body: "Build leadership, communication and technical skills through talks, mentorship and practice.",
    accent: "ember",
  },
  {
    title: "Global technical communities",
    body: "Connect with Societies, Sections and Regions — including IEEE Uganda Section and Region 8.",
    accent: "mint",
  },
] as const;

export const journey = [
  { step: "01", title: "Learn", body: "Understand IEEE and find the technical or interdisciplinary areas you care about." },
  { step: "02", title: "Join", body: "Check eligibility and become an IEEE Student or Graduate Student Member where eligible." },
  { step: "03", title: "Participate", body: "Attend Branch activities, workshops, talks, challenges and professional sessions." },
  { step: "04", title: "Build", body: "Develop projects, research and the practical skills that come from making something real." },
  { step: "05", title: "Connect", body: "Meet peers, professionals, academics, Societies, Sections, Regions and wider communities." },
  { step: "06", title: "Grow", body: "Keep learning, contributing and building a professional record of participation." },
];

export const programs = [
  {
    tag: "Cloud & AI",
    accent: "cyan",
    title: "AWS Student Builders",
    body: "Formerly AWS Cloud Clubs — student-led communities where members explore cloud technology, build projects and grow technical skills, with support from AWS. Each group is led by a Student Builder Group Leader who organises events and drives local initiatives.",
    href: "https://aws.amazon.com/education/student-builders/",
  },
  {
    tag: "Python & open source",
    accent: "violet",
    title: "Black Python Devs",
    body: "A global community supporting Black and Colo(u)red Pythonistas of all skill levels — offering mentorship, career support and spaces to connect, learn and share, alongside existing Python communities and events across Africa and beyond.",
    href: "https://blackpythondevs.com",
  },
  {
    tag: "Developer relations",
    accent: "ember",
    title: "GitHub Campus Experts",
    body: "A global network of student technology leaders who receive training and mentorship from GitHub to build diverse, inclusive developer communities on their own campus — a strong complement to running Branch activities at CUU.",
    href: "https://github.com/education",
  },
] as const;

export const communities = [
  { name: "IEEE Computer Society", focus: "Computing, software engineering, architecture" },
  { name: "IEEE Communications Society", focus: "Telecommunications & networking" },
  { name: "IEEE Robotics & Automation", focus: "Robotics & intelligent systems" },
  { name: "IEEE Computational Intelligence", focus: "Neural networks, evolutionary computation" },
  { name: "IEEE Signal Processing Society", focus: "Signal, image & speech processing" },
  { name: "IEEE Engineering in Medicine & Biology", focus: "Health tech & biomedical engineering" },
  { name: "IEEE Education Society", focus: "Education theory & practice" },
  { name: "IEEE Women in Engineering", focus: "Advancing women in engineering & science" },
];

export const membership = [
  { tier: "Student Member", who: "Eligible students enrolled in programmes within IEEE fields of interest." },
  { tier: "Graduate Student Member", who: "Eligible postgraduate students within IEEE fields of interest." },
  { tier: "Associate Member", who: "Anyone interested in or working in an IEEE field who doesn't yet meet Member-grade requirements." },
  { tier: "Member", who: "Individuals who meet the applicable educational or professional requirements." },
  { tier: "Senior Member", who: "A higher grade attained through applicable experience and review." },
];

export const team = [
  { name: "Mulondo Andrew", role: "Chair" },
  { name: "Basiima Nicholas", role: "General Secretary" },
  { name: "Sadiyo Abdullahi Hussen", role: "Assistant Secretary" },
  { name: "Makhoha Joanita", role: "Treasurer" },
  { name: "Kasongo Kamwankana Dondi", role: "Assistant Treasurer" },
  { name: "Mulo Ausi", role: "Technical Coordinator" },
  { name: "Niwasiima Ashelycole", role: "Technical Coordinator" },
  { name: "Dahomey Mortifer", role: "Mobilizer" },
  { name: "Biyinzika Daniel", role: "Mobilizer" },
];

export const faqs = [
  {
    q: "Is IEEE only for engineering students?",
    a: "No. IEEE covers fields beyond engineering, including computing, sciences, mathematics, education, management, law and technical communication.",
  },
  {
    q: "Can Business, Health Sciences, Law or Social Sciences students take part?",
    a: "Yes — students from any discipline can join suitable interdisciplinary activities where their studies intersect with technology. Membership eligibility is checked separately.",
  },
  {
    q: "Can I participate without holding a leadership position?",
    a: "Yes. You can attend, volunteer, learn and contribute to activities and projects at any stage — leadership is one option among many.",
  },
  {
    q: "Where do I check current membership requirements?",
    a: "Always use the official IEEE Students membership page linked in the resources section — fees and eligibility rules can change.",
  },
];

export const resources = [
  { label: "IEEE Students", href: "https://students.ieee.org/" },
  { label: "Student Membership", href: "https://students.ieee.org/membership/" },
  { label: "IEEE Xplore", href: "https://ieeexplore.ieee.org/" },
  { label: "IEEE Standards", href: "https://standards.ieee.org/" },
  { label: "IEEE Computer Society", href: "https://www.computer.org/" },
  { label: "IEEE Region 8", href: "https://ieeer8.org/" },
  { label: "IEEEXtreme", href: "https://ieeextreme.org/" },
  { label: "IEEE.org", href: "https://www.ieee.org/" },
  { label: "Student Branches", href: "https://students.ieee.org/student-branches/" },
];

// ⚠️ Replace with the real invite link before shipping.
export const WHATSAPP_INVITE_URL = "https://chat.whatsapp.com/REPLACE-WITH-IEEE-CUU-INVITE-LINK";
// ⚠️ Replace with the real registration URL once available (the flyer only has a QR code).
export const IEEE_DAY_REGISTRATION_URL = "#";

export const IEEE_DAY_TARGET_ISO = "2026-10-06T09:00:00+03:00";
export const IEEEXTREME_DEADLINE_ISO = "2026-10-17T23:59:00Z";
