import Image from "next/image";

const partners = [
  {
    name: "Cavendish University Uganda",
    src: "/images/Cavendish-University-Uganda-Logo.png",
    alt: "Cavendish University Uganda",
  },
  { name: "CUUCSA", src: "/images/cuucsa/cuucsa-emblem.png", alt: "CUUCSA" },
  { name: "Pepsi", src: "/images/Pepsi.png", alt: "Pepsi" },
  { name: "MTN", src: "/images/MTN.jpeg", alt: "MTN" },
  { name: "Kahoot", src: "/images/Kahoot.png", alt: "Kahoot" },
  { name: "IEEE", src: "/images/IEEE.webp", alt: "IEEE" },
  { name: "AWS Student Builders", src: "/images/AWS_Student_Builders.png", alt: "AWS Student Builders" },
  { name: "Black Python Devs", src: "/images/Black_Python_Devs.png", alt: "Black Python Devs" },
];

export function Partnerships() {
  return (
    <section className="bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 max-w-2xl sm:mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#1a9090]">
            Partnerships
          </p>
          <h2 className="font-display text-3xl font-bold text-[#0f172a] sm:text-4xl">
            Working with global and campus partners
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex min-h-[100px] items-center justify-center rounded-xl p-2 transition duration-300 ease-out sm:min-h-[120px]"
            >
              <div className="flex w-full flex-col items-center justify-center gap-3 text-center">
                <div className="relative flex h-16 w-full max-w-[150px] items-center justify-center overflow-hidden rounded-xl bg-transparent p-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_12px_30px_rgba(26,144,144,0.10)] sm:h-20">
                  <div className="absolute inset-3 rounded-full bg-[#dfeff0]/80 opacity-0 blur-xl transition duration-300 group-hover:opacity-100" />
                  {partner.src ? (
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      width={160}
                      height={90}
                      className="relative z-10 h-12 w-auto max-w-[120px] object-contain opacity-80 transition duration-300 group-hover:opacity-100 group-hover:scale-[1.04] sm:h-14 sm:max-w-[140px]"
                    />
                  ) : (
                    <div className="relative z-10 flex h-14 w-24 items-center justify-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#204d57] transition duration-300 group-hover:text-[#143c45]">
                      {partner.name.slice(0, 2)}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
