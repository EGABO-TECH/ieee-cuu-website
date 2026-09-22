import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { WhatIsIEEE } from "@/components/WhatIsIEEE";
import { Journey } from "@/components/Journey";
import { EventSpotlight } from "@/components/EventSpotlight";
import { IEEExtreme } from "@/components/IEEExtreme";
import { Programs } from "@/components/Programs";
import { Communities } from "@/components/Communities";
import { Membership } from "@/components/Membership";
import { Team } from "@/components/Team";
import { Faq } from "@/components/Faq";
import { Resources } from "@/components/Resources";
import { JoinBanner } from "@/components/JoinBanner";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <WhatIsIEEE />
        <Journey />
        <EventSpotlight />
        <IEEExtreme />
        <Programs />
        <Communities />
        <Membership />
        <Team />
        <Faq />
        <Resources />
        <JoinBanner />
      </main>
      <SiteFooter />
    </>
  );
}
