/**
 * content/media.ts
 * ─────────────────────────────────────────────────────────────────
 * Every photograph used in a hero, with its source and licence.
 * Only add images that are either the branch's own, published by IEEE
 * (and credited to it), or openly licensed with a verifiable source
 * page. No generated imagery. The credit line is shown with the photo,
 * and the full list is published at /credits.
 * ─────────────────────────────────────────────────────────────────
 */

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Who made it. */
  author: string;
  /** Where it was published: the page a visitor can check. */
  sourceUrl: string;
  sourceName: string;
  /** Licence name, and its deed URL when it has one. */
  license: string;
  licenseUrl?: string;
  /** CSS object-position, to keep faces in frame when cropped. */
  focus?: string;
};

const COMMONS = "Wikimedia Commons";

const PHOTOS_RAW = {
  ghanaCoders: {
    src: "/images/hero/ghana-code-club-coders.jpg",
    alt: "Two young women from the Ghana Code Club work together on a laptop at a technology summit.",
    width: 1920,
    height: 1280,
    author: "Mwintirew",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Coders_from_the_Ghana_Code_Club_at_the_Wikipedia_workshop_at_the_2018_African_Summit_on_Women_and_Girls_in_Technology.jpg",
    sourceName: COMMONS,
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    focus: "60% 40%",
  },
  ghanaYoungCoders: {
    src: "/images/hero/ghana-code-club-young-coders.jpg",
    alt: "Young coders from the Ghana Code Club smile around a laptop at the African Summit on Women and Girls in Technology.",
    width: 1920,
    height: 1280,
    author: "Mwintirew",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Young_Coders_from_the_Ghana_Code_Club_at_the_Wikipedia_workshop_at_the_2018_African_Summit_on_Women_and_Girls_in_Technology.jpg",
    sourceName: COMMONS,
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    focus: "65% 45%",
  },
  summitCoder: {
    src: "/images/hero/summit-young-coder.jpg",
    alt: "A young coder speaks into a microphone during a workshop at the 2018 African Summit on Women and Girls in Technology.",
    width: 1920,
    height: 1280,
    author: "Mwintirew",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:A_young_coder_at_the_Wikipedia_workshop_during_the_2018_African_Summit_on_women_and_Girls_in_Technology.jpg",
    sourceName: COMMONS,
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    focus: "50% 35%",
  },
  aircraftEngineers: {
    src: "/images/hero/nigeria-aircraft-engineers.jpg",
    alt: "Women aircraft engineers service the engine of a light aircraft in a hangar in Kwara State, Nigeria.",
    width: 1920,
    height: 1111,
    author: "Eyibeauty Oyelowo",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Female_Aircraft_Engineers,_Kwara_State,_Nigeria.jpg",
    sourceName: COMMONS,
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    focus: "35% 60%",
  },
  solarTechnicians: {
    src: "/images/hero/solar-installation-technicians.jpg",
    alt: "Two technicians in hard hats lift a solar panel into place on a roof.",
    width: 1920,
    height: 1280,
    author: "SAgbley",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Solar_installation_technician.jpg",
    sourceName: COMMONS,
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    focus: "40% 60%",
  },
  epicsKenya: {
    src: "/images/hero/epics-kenya-drone-project.jpg",
    alt: "Students in school uniform gather around a solar-powered medical delivery drone built through EPICS in IEEE in Kenya.",
    width: 1080,
    height: 675,
    author: "EPICS in IEEE",
    sourceUrl: "https://epics.ieee.org/blogs/epics-in-ieee-healthcare-access-flies-high-in-kenya/",
    sourceName: "EPICS in IEEE",
    license: "© IEEE, used with credit",
    focus: "50% 55%",
  },
  r8Robotics: {
    src: "/images/hero/ieee-r8-robotics-challenge.jpg",
    alt: "Student teams take part in an IEEE Region 8 robotics challenge.",
    width: 1024,
    height: 681,
    author: "IEEE Region 8",
    sourceUrl: "https://ieeer8.org/",
    sourceName: "IEEE Region 8",
    license: "© IEEE, used with credit",
  },
  ieeeDayGroup: {
    src: "/images/events/ieee-day-2026/group-uganda-flag.jpg",
    alt: "Students and IEEE Uganda Section officials hold up the Ugandan flag at IEEE Day 2026, American Center, Kampala.",
    width: 1600,
    height: 868,
    author: "IEEE Day Uganda 2026 album",
    sourceUrl: "https://photos.app.goo.gl/sFtwdZnFuJA8nM1E8",
    sourceName: "IEEE Day Uganda 2026 album",
    license: "Event photography, used with credit",
    focus: "50% 35%",
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof PHOTOS_RAW;
export const PHOTOS: Record<PhotoKey, Photo> = PHOTOS_RAW;

/** "Photo: Mwintirew, Wikimedia Commons, CC BY-SA 4.0" */
export function creditLine(p: Photo) {
  return p.author === p.sourceName ? `Photo: ${p.author}` : `Photo: ${p.author} / ${p.sourceName}, ${p.license}`;
}
