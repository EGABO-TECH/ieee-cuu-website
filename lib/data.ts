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
    body: "Connect with Societies, Sections and Regions, including IEEE Uganda Section and Region 8.",
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

export interface Ambassador {
  name: string;
  role: string;
  image?: string;
}

export const programs = [
  {
    tag: "Cloud & AI",
    accent: "cyan",
    title: "AWS Student Builders",
    body: "A paid, part-time campus leadership program where Student Builders promote the AWS Builder Center, host workshops and activations, and inspire peers to explore cloud, AI and data technologies. Builders receive AWS credits, 12 months of AWS Skill Builder Premium access, and hands-on training while driving real community impact on campus.",
    href: "https://aws.amazon.com/education/student-builders/",
    image: "/images/AWS_Student_Builders.png",
    ambassadors: [
      {
        name: "Niwasiima Ashelycole",
        role: "CUU Student Builder & Campus Ambassador",
        image: "/images/ambassadors/Niwasiima_Ashelycole.png",
      },
    ],
    perks: ["AWS Credits", "Skill Builder Premium", "Paid Role", "AWS Network"],
  },
  {
    tag: "Python & Open Source",
    accent: "violet",
    title: "Black Python Devs",
    body: "A global community empowering Black and Colou(u)red Pythonistas of all skill levels through mentorship, career support and financial grants. With a strong presence across Africa, supporting PyCon Africa and national events, BPD builds diverse Python leadership, advocates for Black developers in industry, and funds open-source communities in Black spaces.",
    href: "https://blackpythondevs.com",
    image: "/images/Black_Python_Devs.png",
    ambassadors: [
      {
        name: "Egabo Aaron",
        role: "CUU Campus Ambassador & Community Lead",
        image: "/images/ambassadors/EGABO_AARON.png",
      },
      {
        name: "Twikirize Achilles",
        role: "CUU Campus Ambassador & Python Advocate",
        image: "", // Place photo in /public/images/ambassadors/ and set path here
      },
    ],
    perks: ["Mentorship", "Career Support", "Grants", "Global Network"],
  },
  {
    tag: "Mentorship",
    accent: "ember",
    title: "IEEE CS SYP Micro-Mentoring",
    body: "A flagship IEEE Computer Society program connecting students and young professionals with experienced industry mentors for short-duration, goal-oriented sessions. Participants receive guidance on career planning, internship prep, leadership and networking, while mentors refine coaching skills and expand their professional reach across the global IEEE CS community.",
    href: "https://www.computer.org/communities/students-and-young-professionals",
    image: "/images/IEEE_CS_SYP_Micro_Mentoring.png",
    ambassadors: [
      {
        name: "Egabo Aaron",
        role: "CUU Lead Ambassador & SYP Mentee",
        image: "/images/ambassadors/EGABO_AARON.png",
      },
    ],
    perks: ["1-on-1 Mentoring", "Career Guidance", "IEEE CS Network", "Leadership"],
  },
] as const;

export interface Community {
  id: string;
  name: string;
  category: string;
  focus: string;
  description: string;
  impact: string;
  href: string;
  color: string;
  status: "pioneering" | "future";
  image: string;
}

export const communities = [
  {
    id: "cs",
    name: "IEEE Computer Society",
    category: "Computing & AI",
    focus: "Computing, Software Engineering & Cloud",
    description: "The premier global community for computer science and technology professionals, driving innovations in software, cybersecurity, cloud architecture, and open systems.",
    impact: "Digital Infrastructure",
    href: "https://www.computer.org",
    color: "sky",
    status: "pioneering",
    image: "/images/societies/cs.jpg",
  },
  {
    id: "ras",
    name: "IEEE Robotics & Automation Society",
    category: "Robotics & Hardware",
    focus: "Robotics, Automation & Intelligent Systems",
    description: "Pioneering the theory and application of robotics, drones, autonomous vehicles, and automated systems that enhance human capability and safety.",
    impact: "Autonomous Systems",
    href: "https://www.ieee-ras.org",
    color: "amber",
    status: "future",
    image: "/images/societies/ras.jpg",
  },
  {
    id: "cis",
    name: "IEEE Computational Intelligence Society",
    category: "Computing & AI",
    focus: "Neural Networks, Evolutionary Computation & Deep AI",
    description: "Advancing biological and nature-inspired computational paradigms, generative algorithms, and neural networks solving previously intractable real-world problems.",
    impact: "Next-Gen AI",
    href: "https://cis.ieee.org",
    color: "violet",
    status: "future",
    image: "/images/societies/cis.jpg",
  },
  {
    id: "embs",
    name: "IEEE Engineering in Medicine & Biology",
    category: "Health & Life Sciences",
    focus: "Biomedical Engineering & Digital Healthcare",
    description: "The world's largest international society of biomedical engineers, uniting doctors, engineers, and scientists to pioneer diagnostic devices, prosthetics, and digital health.",
    impact: "Saving Lives",
    href: "https://www.embs.org",
    color: "rose",
    status: "future",
    image: "/images/societies/embs.jpg",
  },
  {
    id: "wie",
    name: "IEEE Women in Engineering (WIE)",
    category: "Equity & Leadership",
    focus: "Women Leaders in STEM & Technology",
    description: "A global network dedicated to promoting women engineers and scientists, inspiring girls around the world to follow their academic and professional interests in STEM.",
    impact: "Diversity & Equity",
    href: "https://wie.ieee.org",
    color: "fuchsia",
    status: "pioneering",
    image: "/images/societies/wie.jpg",
  },
  {
    id: "pes",
    name: "IEEE Power & Energy Society",
    category: "Robotics & Energy",
    focus: "Clean Energy, Smart Grids & Climate Tech",
    description: "Leading the global transition toward decarbonized electric power, solar & wind microgrids, sustainable energy storage, and resilient civic infrastructure.",
    impact: "Planet Sustainability",
    href: "https://www.ieee-pes.org",
    color: "emerald",
    status: "future",
    image: "/images/societies/pes.jpg",
  },
  {
    id: "comsoc",
    name: "IEEE Communications Society",
    category: "Connectivity & Systems",
    focus: "5G/6G, Satellite Systems & Global Internet",
    description: "Connecting every corner of the planet through breakthroughs in wireless communication, optical networking, space telemetry, and decentralized communications.",
    impact: "Global Connectivity",
    href: "https://www.comsoc.org",
    color: "cyan",
    status: "future",
    image: "/images/societies/comsoc.jpg",
  },
  {
    id: "edu",
    name: "IEEE Education Society",
    category: "Equity & Leadership",
    focus: "STEM Pedagogy & Next-Generation EdTech",
    description: "Transforming how engineering and tech are taught worldwide through experiential learning, educational accessibility, and community STEM outreach programs.",
    impact: "Empowering Minds",
    href: "https://ieee-edusociety.org",
    color: "indigo",
    status: "future",
    image: "/images/societies/edu.jpg",
  },
  {
    id: "sps",
    name: "IEEE Signal Processing Society",
    category: "Connectivity & Systems",
    focus: "Audio, Image, Video & Sensor Processing",
    description: "The dynamic engine behind modern digital media, speech recognition, radar imaging, biometric security, and computational vision.",
    impact: "Sensory Tech",
    href: "https://signalprocessingsociety.org",
    color: "teal",
    status: "future",
    image: "/images/societies/sps.jpg",
  },
  {
    id: "sight",
    name: "IEEE Humanitarian Technology (SIGHT)",
    category: "Health & Life Sciences",
    focus: "Tech for Good, Clean Water & Disaster Relief",
    description: "A global grassroots network partnering with underserved communities to deploy scalable, low-cost engineering solutions for healthcare, clean water, and disaster resilience.",
    impact: "Tech for Good",
    href: "https://sight.ieee.org",
    color: "orange",
    status: "future",
    image: "/images/societies/sight.jpg",
  },
] as const;

export interface MembershipTier {
  tier: string;
  badge: string;
  who: string;
  perks: string[];
  highlight?: boolean;
  href: string;
  cta: string;
}

export const membership: MembershipTier[] = [
  {
    tier: "Student Member",
    badge: "Recommended for CUU Undergrads",
    who: "Eligible students enrolled in diploma or undergraduate programmes within IEEE fields of interest.",
    perks: ["Subsidised Student Rates", "CUU Branch Voting Rights", "Competitions & Hackathons", "IEEE Xplore Access"],
    highlight: true,
    href: "https://students.ieee.org/membership/",
    cta: "Join as Student",
  },
  {
    tier: "Graduate Student Member",
    badge: "Postgraduate & Researchers",
    who: "Eligible postgraduate students enrolled in master's, doctoral, or advanced technical degree programmes.",
    perks: ["Graduate Subsidies", "Research Paper Publishing", "Conference Travel Grants", "Global Mentorship"],
    highlight: false,
    href: "https://students.ieee.org/membership/",
    cta: "Join as Graduate",
  },
  {
    tier: "Associate Member",
    badge: "Open to All Disciplines",
    who: "Anyone interested in or working in an IEEE field who doesn't yet meet Member-grade requirements.",
    perks: ["Non-STEM Friendly", "Society Access", "Lifelong Learning"],
    highlight: false,
    href: "https://www.ieee.org/membership/join/index.html",
    cta: "Explore Grade",
  },
  {
    tier: "Member",
    badge: "Practicing Professionals",
    who: "Individuals who meet the applicable educational, degree, or professional engineering practice requirements.",
    perks: ["Full Voting Rights", "Chapter Leadership", "Professional Elevation"],
    highlight: false,
    href: "https://www.ieee.org/membership/join/index.html",
    cta: "Explore Grade",
  },
  {
    tier: "Senior Member",
    badge: "Highest Branch Honor",
    who: "A higher professional grade attained through 10+ years of active practice and peer review.",
    perks: ["Peer-Reviewed Elevation", "Fellowship Nomination", "Executive Distinction"],
    highlight: false,
    href: "https://www.ieee.org/membership/senior/index.html",
    cta: "Learn Elevation",
  },
];

export interface TeamMember {
  name: string;
  role: string;
  department: string;
  description: string;
  linkedin: string; // Replace "#" with the actual LinkedIn profile URL
  image: string;    // Place photo in /public/images/team/<filename>.jpg
}

export const team: TeamMember[] = [
  {
    name: "Mulondo Andrew",
    role: "Chair",
    department: "Branch Leadership",
    description: "Leads the IEEE CUU Student Branch, sets strategic direction, chairs meetings, and serves as the principal liaison between the Branch, faculty advisors, and the IEEE Region 8 hierarchy.",
    linkedin: "#", // Replace with actual LinkedIn URL
    image: "",     // Place photo at /public/images/team/mulondo.jpg
  },
  {
    name: "Basiima Nicholas",
    role: "General Secretary",
    department: "Administration & Records",
    description: "Manages official Branch correspondence, maintains accurate records of proceedings, and ensures all governance documentation meets IEEE Student Branch reporting standards.",
    linkedin: "#",
    image: "",
  },
  {
    name: "Sadiyo Abdullahi Hussen",
    role: "Assistant Secretary",
    department: "Administration & Records",
    description: "Supports the General Secretary in records management, assists with scheduling, and helps coordinate meeting logistics and Branch communications.",
    linkedin: "#",
    image: "",
  },
  {
    name: "Makhoha Joanita",
    role: "Treasurer",
    department: "Finance",
    description: "Oversees all Branch finances, maintains transparent budget reporting, manages event funding allocations, and ensures compliance with IEEE financial policies.",
    linkedin: "#",
    image: "",
  },
  {
    name: "Kasongo Kamwankana Dondi",
    role: "Assistant Treasurer",
    department: "Finance",
    description: "Assists in financial record-keeping, processes reimbursements, and supports the Treasurer in all budget management and expenditure tracking activities.",
    linkedin: "#",
    image: "",
  },
  {
    name: "Mulo Ausi",
    role: "Technical Coordinator",
    department: "Technical & Projects",
    description: "Plans and executes technical workshops, hackathons, and project-based learning sessions, bridging classroom theory with real-world engineering applications at CUU.",
    linkedin: "#",
    image: "",
  },
  {
    name: "Niwasiima Ashelycole",
    role: "Technical Coordinator",
    department: "Technical & Projects",
    description: "Co-leads technical programming, supports community coding initiatives, and serves as the CUU AWS Student Builder driving cloud and AI adoption on campus.",
    linkedin: "#",
    image: "",
  },
  {
    name: "Dahomey Mortifer",
    role: "Mobilizer",
    department: "Outreach & Engagement",
    description: "Drives membership growth and student engagement, coordinates outreach efforts across disciplines, and represents the Branch at campus events and inter-faculty activities.",
    linkedin: "#",
    image: "",
  },
  {
    name: "Biyinzika Daniel",
    role: "Mobilizer",
    department: "Outreach & Engagement",
    description: "Expands the Branch's reach through targeted outreach campaigns, builds peer networks across CUU faculties, and helps onboard new members into Branch activities.",
    linkedin: "#",
    image: "",
  },
];

export const faqs = [
  {
    q: "Is IEEE only for engineering students?",
    a: "No. IEEE covers fields beyond engineering, including computing, sciences, mathematics, education, management, law and technical communication.",
  },
  {
    q: "Can Business, Health Sciences, Law or Social Sciences students take part?",
    a: "Yes, students from any discipline can join suitable interdisciplinary activities where their studies intersect with technology. Membership eligibility is checked separately.",
  },
  {
    q: "Can I participate without holding a leadership position?",
    a: "Yes. You can attend, volunteer, learn and contribute to activities and projects at any stage; leadership is one option among many.",
  },
  {
    q: "Where do I check current membership requirements?",
    a: "Always use the official IEEE Students membership page linked in the resources section; fees and eligibility rules can change.",
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

export const IEEE_LINKEDIN_URL = process.env.NEXT_PUBLIC_IEEE_LINKEDIN_URL ?? "https://www.linkedin.com/company/ieee-cavendish-university-uganda";
export const IEEE_X_URL = process.env.NEXT_PUBLIC_IEEE_X_URL ?? "https://x.com";
export const IEEE_TIKTOK_URL = process.env.NEXT_PUBLIC_IEEE_TIKTOK_URL ?? "https://www.tiktok.com";
export const WHATSAPP_INVITE_URL = process.env.NEXT_PUBLIC_IEEE_WHATSAPP_URL ?? "https://chat.whatsapp.com/REPLACE-WITH-IEEE-CUU-INVITE-LINK";
export const CUUCSA_LINKEDIN_URL = process.env.NEXT_PUBLIC_CUUCSA_LINKEDIN_URL ?? "https://www.linkedin.com";
export const CUUCSA_WHATSAPP_URL = process.env.NEXT_PUBLIC_CUUCSA_WHATSAPP_URL ?? "https://chat.whatsapp.com/REPLACE-WITH-CUUCSA-INVITE-LINK";
export const IEEE_DAY_REGISTRATION_URL = process.env.NEXT_PUBLIC_IEEE_EVENT_REGISTRATION_URL ?? "#";

export const IEEE_DAY_TARGET_ISO = "2026-10-06T12:00:00+03:00";
export const IEEE_DAY_REGISTRATION_DEADLINE_ISO = "2026-10-05T12:00:00+03:00";
export const IEEEXTREME_DEADLINE_ISO = "2026-10-17T23:59:00Z";
