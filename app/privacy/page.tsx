import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How the IEEE Student Branch at Cavendish University Uganda handles information on its website and through linked services.",
  path: "/privacy",
});

const sections = [
  {
    id: "about-this-notice",
    title: "About this notice",
    paragraphs: [
      "This notice applies to the website maintained by the IEEE Student Branch at Cavendish University Uganda (the Branch). It describes the information involved when you browse this site and how to raise a privacy request.",
      "The Branch is the contact point for the Branch-managed website activities described here. IEEE membership services, event registration providers, social networks, and other linked services operate separately and may have their own data controllers and privacy notices.",
    ],
  },
  {
    id: "information-we-handle",
    title: "Information we handle",
    paragraphs: [
      "This site has no user accounts. It has two forms operated by the Branch: the Join form and the Contact form, described in the next section. Other sign-ups, such as the volunteer application, use Google Forms; when you use a linked service, that service and the Branch receive the details you choose to share there.",
      "When a web page is requested, the hosting and delivery infrastructure may process technical information such as your IP address, the requested page, date and time, browser and device information, and security events. This processing is needed to deliver and protect the site; the hosting provider's systems determine what operational logs are kept and for how long.",
      "The Google Maps panel in the site footer is embedded content. Loading a page that contains it makes a request to Google, which can receive technical request information even if you do not interact with the map.",
    ],
  },
  {
    id: "forms-on-this-site",
    title: "Forms on this site",
    paragraphs: [
      "Join form: your full name, email address, programme of study, year of study, areas of interest and contact preferences, and optionally your student ID. We use these to contact you about branch membership and activities you said you are interested in.",
      "Contact form: your name, email address, a topic and your message. We use these only to reply to you.",
      "Submissions are stored in a storage service the Branch configures for the website, such as a Google Sheet. Only members of the branch executive committee who need them, such as the Secretary, can view or export them.",
      "Join submissions are kept while you remain interested in branch activities and are reviewed at each executive handover. Contact messages are kept for up to 12 months after we reply. You can ask us to delete your submission at any time using the contact details in the last section.",
      "Both forms include a hidden anti-spam field and a limit on how often they can be submitted.",
    ],
  },
  {
    id: "why-information-is-used",
    title: "Why information is used",
    paragraphs: [
      "Technical request information is used by the site infrastructure to deliver pages, diagnose failures, and detect abuse or security incidents. Information you submit through a form or provide when contacting the Branch is used for the purposes stated for that form, to respond to your request, or to coordinate the activity you asked about.",
      "Where applicable law requires a lawful basis, the basis depends on the activity and may include the Branch's legitimate interest in operating a secure informational website, your consent, or steps you ask us to take before participating in an activity.",
    ],
  },
  {
    id: "sharing-and-transfers",
    title: "Sharing and international services",
    paragraphs: [
      "The Branch does not sell personal information. Technical information may be processed by providers that host or secure the site, and form submissions are processed by the storage service described above. Google receives a request when its embedded map loads. When you follow a link to IEEE, Google Forms, WhatsApp, or a social platform, information is handled under that provider's own terms and privacy notice.",
      "These providers may process information in countries outside Uganda. Their safeguards, retention periods, and practices are governed by their own policies; review those policies before submitting information or using their services.",
    ],
  },
  {
    id: "retention-and-security",
    title: "Retention and security",
    paragraphs: [
      "Form submissions are retained as described in the forms section. Hosting logs are retained according to the infrastructure provider's operational and security settings. If you contact the Branch directly, information is kept only as needed to respond, coordinate the related activity, and meet applicable obligations.",
      "Reasonable measures are used to maintain the site, but internet transmission and storage cannot be guaranteed completely secure. Please do not send sensitive personal information through public community channels.",
    ],
  },
  {
    id: "your-choices-and-rights",
    title: "Your choices and rights",
    paragraphs: [
      "Depending on the circumstances and applicable law, including Uganda's Data Protection and Privacy Act, 2019 and its regulations, you may have rights to request access to or correction or deletion of personal data, object to or restrict certain processing, withdraw consent where processing relies on consent, and complain to the relevant supervisory authority.",
      "To make a request about Branch-managed activity, contact the Branch through Cavendish University Uganda's switchboard and ask for the IEEE Student Branch, or write to the Branch at the address below. Tell us what activity your request relates to, but do not include sensitive information in a public WhatsApp group. Requests about IEEE membership accounts or third-party platforms should be sent to the provider that operates that service.",
    ],
  },
  {
    id: "children",
    title: "Children and young people",
    paragraphs: [
      "This website is intended for university students, members, and visitors. It does not knowingly request personal information from children through a website form. If you believe a child has shared personal information with the Branch, contact us so we can review the situation.",
    ],
  },
  {
    id: "contact-and-changes",
    title: "Contact and changes",
    paragraphs: [
      "IEEE Student Branch, Cavendish University Uganda, Plot 1469 Ggaba Road, Kampala, Uganda. University switchboard: +256 41 4531700. Ask to be connected with the IEEE Student Branch for a privacy inquiry.",
      "We may update this notice when the site or its data practices change. The effective date at the top indicates the latest version published here.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PolicyPage
        title="Privacy Policy"
        summary="A clear account of information involved when you visit the IEEE CUU Student Branch website, contact the Branch, or continue to a service operated by someone else."
        effectiveDate="October 26, 2026"
        sections={sections}
      />
    </>
  );
}