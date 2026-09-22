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
    body: "A paid, part-time campus leadership program where Student Builders promote the AWS Builder Center, host workshops and activations, and inspire peers to explore cloud, AI and data technologies. Builders receive AWS credits, 12 months of AWS Skill Builder Premium access, and hands-on training — while driving real community impact on campus.",
    href: "https://aws.amazon.com/education/student-builders/",
    image: "/images/AWS_Student_Builders.png",
    ambassadors: [
      { name: "Niwasiima Ashelycole", role: "CUU Student Builder & Campus Ambassador" },
    ],
    perks: ["AWS Credits", "Skill Builder Premium", "Paid Role", "AWS Network"],
  },
  {
    tag: "Python & Open Source",
    accent: "violet",
    title: "Black Python Devs",
    body: "A global community empowering Black and Colou(u)red Pythonistas of all skill levels through mentorship, career support and financial grants. With a strong presence across Africa — supporting PyCon Africa and national events — BPD builds diverse Python leadership, advocates for Black developers in industry, and funds open-source communities in Black spaces.",
    href: "https://blackpythondevs.com",
    image: "/images/Black_Python_Devs.png",
    ambassadors: [
      { name: "Egabo Aaron", role: "CUU Campus Ambassador & Community Lead" },
      { name: "Twikirize Achilles", role: "CUU Campus Ambassador & Python Advocate" },
    ],
    perks: ["Mentorship", "Career Support", "Grants", "Global Network"],
  },
  {
    tag: "Mentorship",
    accent: "ember",
    title: "IEEE CS SYP Micro-Mentoring",
    body: "A flagship IEEE Computer Society program connecting students and young professionals with experienced industry mentors for short-duration, goal-oriented sessions. Participants receive guidance on career planning, internship prep, leadership and networking — while mentors refine coaching skills and expand their professional reach across the global IEEE CS community.",
    href: "https://www.computer.org/communities/students-and-young-professionals",
    image: "/images/IEEE_CS_SYP_Micro_Mentoring.png",
    ambassadors: [
      { name: "Egabo Aaron", role: "CUU Lead Ambassador & SYP Mentee" },
    ],
    perks: ["1-on-1 Mentoring", "Career Guidance", "IEEE CS Network", "Leadership"],
  },
] as const;

export const communities = [
  {
    id: "cs",
    name: "IEEE Computer Society",
    category: "Computing & AI",
    icon: "Cpu",
    focus: "Computing, Software Engineering & Cloud",
    description: "The premier global community for computer science and technology professionals, driving innovations in software, cybersecurity, cloud architecture, and open systems.",
    impact: "Digital Infrastructure",
    href: "https://www.computer.org",
    color: "sky",
  },
  {
    id: "ras",
    name: "IEEE Robotics & Automation Society",
    category: "Robotics & Hardware",
    icon: "Bot",
    focus: "Robotics, Automation & Intelligent Systems",
    description: "Pioneering the theory and application of robotics, drones, autonomous vehicles, and automated systems that enhance human capability and safety.",
    impact: "Autonomous Systems",
    href: "https://www.ieee-ras.org",
    color: "amber",
  },
  {
    id: "cis",
    name: "IEEE Computational Intelligence Society",
    category: "Computing & AI",
    icon: "Brain",
    focus: "Neural Networks, Evolutionary Computation & Deep AI",
    description: "Advancing biological and nature-inspired computational paradigms, generative algorithms, and neural networks solving previously intractable real-world problems.",
    impact: "Next-Gen AI",
    href: "https://cis.ieee.org",
    color: "violet",
  },
  {
    id: "embs",
    name: "IEEE Engineering in Medicine & Biology",
    category: "Health & Life Sciences",
    icon: "Activity",
    focus: "Biomedical Engineering & Digital Healthcare",
    description: "The world's largest international society of biomedical engineers, uniting doctors, engineers, and scientists to pioneer diagnostic devices, prosthetics, and digital health.",
    impact: "Saving Lives",
    href: "https://www.embs.org",
    color: "rose",
  },
  {
    id: "wie",
    name: "IEEE Women in Engineering (WIE)",
    category: "Equity & Leadership",
    icon: "Sparkles",
    focus: "Women Leaders in STEM & Technology",
    description: "A global network dedicated to promoting women engineers and scientists, inspiring girls around the world to follow their academic and professional interests in STEM.",
    impact: "Diversity & Equity",
    href: "https://wie.ieee.org",
    color: "fuchsia",
  },
  {
    id: "pes",
    name: "IEEE Power & Energy Society",
    category: "Robotics & Energy",
    icon: "Zap",
    focus: "Clean Energy, Smart Grids & Climate Tech",
    description: "Leading the global transition toward decarbonized electric power, solar & wind microgrids, sustainable energy storage, and resilient civic infrastructure.",
    impact: "Planet Sustainability",
    href: "https://www.ieee-pes.org",
    color: "emerald",
  },
  {
    id: "comsoc",
    name: "IEEE Communications Society",
    category: "Connectivity & Systems",
    icon: "Radio",
    focus: "5G/6G, Satellite Systems & Global Internet",
    description: "Connecting every corner of the planet through breakthroughs in wireless communication, optical networking, space telemetry, and decentralized communications.",
    impact: "Global Connectivity",
    href: "https://www.comsoc.org",
    color: "cyan",
  },
  {
    id: "edu",
    name: "IEEE Education Society",
    category: "Equity & Leadership",
    icon: "GraduationCap",
    focus: "STEM Pedagogy & Next-Generation EdTech",
    description: "Transforming how engineering and tech are taught worldwide through experiential learning, educational accessibility, and community STEM outreach programs.",
    impact: "Empowering Minds",
    href: "https://ieee-edusociety.org",
    color: "indigo",
  },
  {
    id: "sps",
    name: "IEEE Signal Processing Society",
    category: "Connectivity & Systems",
    icon: "AudioLines",
    focus: "Audio, Image, Video & Sensor Processing",
    description: "The dynamic engine behind modern digital media, speech recognition, radar imaging, biometric security, and computational vision.",
    impact: "Sensory Tech",
    href: "https://signalprocessingsociety.org",
    color: "teal",
  },
  {
    id: "sight",
    name: "IEEE Humanitarian Technology (SIGHT)",
    category: "Health & Life Sciences",
    icon: "Globe",
    focus: "Tech for Good, Clean Water & Disaster Relief",
    description: "A global grassroots network partnering with underserved communities to deploy scalable, low-cost engineering solutions for healthcare, clean water, and disaster resilience.",
    impact: "Tech for Good",
    href: "https://sight.ieee.org",
    color: "orange",
  },
] as const;

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
