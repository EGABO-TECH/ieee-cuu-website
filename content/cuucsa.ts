/**
 * content/cuucsa.ts
 * ─────────────────────────────────────────────────────────────────
 * CUUCSA page content. Edit here; the page layout reads from this file.
 * Never add phone numbers or personal emails for individuals.
 * ─────────────────────────────────────────────────────────────────
 */

export const cuucsaIndependence =
  "CUUCSA is the Cavendish University Uganda Computing Students' Association, an independent student association of the Faculty of Science and Technology. IEEE CUU Student Branch collaborates with CUUCSA by mutual agreement. Each keeps its own membership, funds and records.";

export const cuucsaMotto = "LEARN. BUILD. INNOVATE. IMPACT.";

export const cuucsaVision =
  "To be a leading student computing community that develops innovative, skilled and entrepreneurial technology creators capable of solving real-world challenges and driving digital transformation.";

export const cuucsaMission =
  "To unite and empower computing students at Cavendish University Uganda through academic support, practical technical training, research, innovation, entrepreneurship, professional mentorship, interdisciplinary collaboration and technology-driven community engagement.";

export const cuucsaJourney = ["Join", "Learn", "Practise", "Build", "Innovate", "Connect", "Launch", "Impact"];

export const cuucsaPillars = [
  { title: "Academic Excellence", outcome: "Mentorship, clinics, resources and representation" },
  { title: "Technical Excellence", outcome: "Labs, code-alongs, challenges and projects" },
  { title: "Research and Innovation", outcome: "Research pipeline, Innovation Hub, prototypes, demos" },
  { title: "Entrepreneurship and Careers", outcome: "Mentors, industry exposure, portfolios, internships, pitch pathways" },
  { title: "Digital Impact", outcome: "Documented campus solutions and community digital-literacy work" },
  { title: "Representation and Governance", outcome: "Regular forums, responsive representation, records and handover" },
];

export const cuucsaProgrammes = [
  { name: "Academy", purpose: "Structured learning and study support for computing courses.", lead: "Academic Affairs + Technical Lead" },
  { name: "CodeLab", purpose: "Hands-on coding sessions, code-alongs and challenges.", lead: "Technical Lead" },
  { name: "Innovation Hub", purpose: "A home for student prototypes and product ideas.", lead: "Vice President + Technical Lead" },
  { name: "Research Lab", purpose: "Guided student research from question to write-up.", lead: "Technical Lead + Academic Affairs + Legal" },
  { name: "Techpreneur", purpose: "Turning student projects into ventures and pitches.", lead: "Vice President + PR and Partnerships" },
  { name: "Industry Connect", purpose: "Mentors, speakers and internship pathways from industry.", lead: "PR and Partnerships" },
  { name: "Digital Impact", purpose: "Technology projects that serve the campus and community.", lead: "Vice President + Technical Lead" },
  { name: "Representation Forum", purpose: "A regular channel for computing students' concerns.", lead: "President + Academic Affairs + Batch Reps" },
];

/** Names only until dates are set. */
export const cuucsaFlagshipEvents = [
  "Tech Week",
  "Hackathon",
  "Career and Industry Day",
  "Research and Innovation Expo",
  "Startup Challenge",
  "Solve a Cavendish Problem",
];

/** All listed members have agreed to be listed. */
export const cuucsaCore: { office: string; name: string; programme: string; note?: string }[] = [
  { office: "President", name: "Ausi Mulo", programme: "BSE" },
  { office: "Vice President", name: "Nakanjako Victoria", programme: "BSE" },
  { office: "Secretary General", name: "Nuwasiima Libby", programme: "BSE" },
  { office: "Assistant Secretary", name: "Ekalam Joshua", programme: "BCS" },
  { office: "Junior Treasurer", name: "Ntambi Calvin", programme: "BSE" },
  { office: "Technical Lead", name: "Egabo Aaron", programme: "BSE" },
  { office: "Academic Affairs Officer", name: "Rwothomio Evans E.", programme: "BSE" },
  { office: "PR and Partnerships Officer", name: "Niwasiima Ashelycole", programme: "BSE" },
  { office: "Legal and Compliance Officer", name: "Bamidele-Oseni Oyindamola Abigail", programme: "LLB" },
  { office: "Advisor", name: "Kayizzi Sadat", programme: "BIT", note: "Outgoing Minister of ICT and Innovation" },
];

export const cuucsaBatchReps = [
  "Maha Ahmed Farah",
  "Onyango John Steven",
  "Namusana Rebecca",
  "Kawuma Michael",
  "Natozo Patience Martha",
  "Nassuna Marsha Favour Ntale",
  "Olubwar Stephen",
  "Shambe Andrew",
  "Naume Catherine",
  "Atukwatse Arnold",
  "Dahomey Mortifer",
];

export const cuucsaMembership = [
  { name: "Ordinary", desc: "Computing students of the Faculty of Science and Technology." },
  { name: "Associate", desc: "Students from other faculties." },
  { name: "Alumni", desc: "Former members who have graduated." },
  { name: "Staff or Faculty", desc: "University staff who support the association." },
  { name: "Honorary", desc: "People recognised for exceptional contribution." },
  { name: "Founding", desc: "Members who helped establish the association." },
];

export const cuucsaGovernance = [
  "Executive meetings twice a month",
  "A general meeting every month",
  "An annual general meeting",
  "A documented handover between executives",
];

export const cuucsaFaqs = [
  {
    question: "How does CUUCSA relate to the IEEE Student Branch?",
    answer: cuucsaIndependence,
  },
  {
    question: "Who is CUUCSA?",
    answer:
      "CUUCSA is the Cavendish University Uganda Computing Students' Association, a student-led community for computing students across the university.",
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
      "Through its eight flagship programmes, collaborative project and research teams, industry events, peer learning, and student-led initiatives.",
  },
  {
    question: "What impact will it bring?",
    answer:
      "Students will have more opportunities to develop practical skills, build work they can demonstrate, make professional connections, and contribute to a stronger computing community.",
  },
];
