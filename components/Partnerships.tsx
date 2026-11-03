import Image from "next/image";
import Link from "next/link";
import { SectionHead } from "./SectionHead";
import { container } from "@/lib/ui";

const partners = [
  { name: "IEEE", src: "/images/IEEE.webp" },
  { name: "Cavendish University Uganda", src: "/images/Cavendish-University-Uganda-Logo.png" },
  { name: "CUUCSA", src: "/images/cuucsa/cuucsa-emblem.png", href: "/cuucsa" },
  { name: "AWS Student Builders", src: "/images/AWS_Student_Builders.png" },
  { name: "Black Python Devs", src: "/images/Black_Python_Devs.png" },
  { name: "Kahoot", src: "/images/Kahoot.png" },
];

export function Partnerships() {
  return (
    <section aria-labelledby="partners-title" className="border-t border-slate-200 bg-white py-20">
      <div className={container}>
        <SectionHead id="partners-title" kicker="Partners" title="Working with campus and global partners" href="/partners" linkLabel="All partners" />
        <ul className="grid grid-cols-2 gap-px border border-slate-200 bg-slate-200 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((p) => {
            const logo = (
              <Image
                src={p.src}
                alt={p.name}
                width={160}
                height={90}
                className="h-12 w-auto max-w-[120px] object-contain opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 sm:h-14"
              />
            );
            return (
              <li key={p.name} className="group flex h-28 items-center justify-center bg-white p-4">
                {p.href ? <Link href={p.href}>{logo}</Link> : logo}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
