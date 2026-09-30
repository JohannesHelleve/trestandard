import type {
  JobPosting,
  PageContent,
  Project,
  Service,
  SiteSettings,
} from "@/lib/types";

/**
 * Bundled content. Everything here is overridden by Sanity as soon as the
 * matching document exists, but it keeps the site complete and deployable
 * before an editor has touched the CMS.
 */

export const seedSettings: SiteSettings = {
  companyName: "Trestandard AS",
  tagline: "Godt håndverk siden 1946",
  description:
    "Trestandard AS er en Oslo-basert entreprenør med egne tømrere, malere, murere, møbelsnekkere og gulvleggere. Vi har levert godt håndverk siden 1946.",
  phone: "+47 934 95 376",
  email: "trestandard@trestandard.no",
  address: {
    street: "Stålfjæra 9",
    postalCode: "0975",
    city: "Oslo",
    mapsUrl: "https://maps.google.com/?q=St%C3%A5lfj%C3%A6ra+9,+0975+Oslo",
  },
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
};

export const seedPages: Record<string, PageContent> = {
  forside: {
    title: "Forside",
    heroHeading: "Godt håndverk siden 1946",
    heroIntro:
      "Trestandard er en komplett entreprenør i Oslo. Vi tar på oss både små og store oppdrag, og utfører det meste med eget fagpersonell.",
    paragraphs: [
      "Alf Bakken startet Trestandard på Løren i 1946. Han var kjent for sitt gode håndverk og sin store medmenneskelighet, og bygget et selskap der både kunder og ansatte skulle bli tatt godt vare på. Den arven forvalter vi fortsatt.",
      "I dag holder vi til på Kalbakken, og selskapet drives av Alf Bakkens barnebarn. Vi har tømrere, malere, murere, møbelsnekkere og gulvleggere på laget, slik at vi kan ta ansvar for hele prosjektet fra første befaring til siste finish.",
    ],
    seoDescription:
      "Trestandard AS er en Oslo-basert entreprenør med egne fagfolk innen tømrer, maler, mur, møbelsnekker og gulv. Godt håndverk siden 1946.",
  },
  "vi-tilbyr": {
    title: "Vi tilbyr",
    heroHeading: "Ett firma, alle fagene",
    heroIntro:
      "Vi utfører større og mindre oppdrag med eget fagpersonell. Det gir deg én kontaktperson, én framdriftsplan og ett ansvar.",
    paragraphs: [
      "Fordi vi har de fleste fagene i eget hus, slipper du å koordinere mellom flere underleverandører. Vi planlegger rekkefølgen selv, og kan justere raskt når noe endrer seg underveis.",
      "Ta kontakt for en uforpliktende befaring, så gir vi deg et tilbud basert på hva oppdraget faktisk krever.",
    ],
    seoDescription:
      "Tjenester fra Trestandard: bygg og tømrerarbeid, malermester, mur og flis, møbelsnekker og gulvlegging.",
  },
  "om-oss": {
    title: "Om oss",
    heroHeading: "Fra Løren til Kalbakken",
    heroIntro:
      "Åtte tiår med håndverk i Oslo, tre generasjoner i samme familie.",
    paragraphs: [
      "Trestandard ble grunnlagt av Alf Bakken på Løren i 1946. Selskapet vokste raskt til å bli en betydelig aktør i markedet, og de første kjøkkenseriene kom allerede i 1949 under navnet «Moderne kjøkken».",
      "Senere kom «Nordia», selskapets første systemkjøkken. I 1970 ble Trestandard slått sammen med Emaljeverket, og resultatet ble NOREMA – et merkenavn mange fortsatt kjenner igjen.",
      "I dag drives selskapet av Alf Bakkens barnebarn fra lokalene på Kalbakken. Vi er blitt mindre enn vi var på kjøkkenfabrikkens tid, men prinsippet er det samme: dyktige fagfolk, ryddige avtaler og arbeid som står seg over tid.",
    ],
    seoDescription:
      "Trestandard AS ble grunnlagt av Alf Bakken i 1946 og drives i dag av hans barnebarn fra Kalbakken i Oslo.",
  },
  samfunnsansvar: {
    title: "Samfunnsansvar",
    heroHeading: "Ansvar for folk og omgivelser",
    heroIntro:
      "Alf Bakken var opptatt av at de ansatte skulle ha det godt. Det er fortsatt målestokken vår.",
    paragraphs: [
      "Vi tar inn lærlinger og lærer opp nye fagarbeidere. Håndverksfagene overlever bare hvis noen tar ansvar for neste generasjon, og det er en jobb vi mener er vår.",
      "Alle som jobber for oss skal ha ordnede lønns- og arbeidsvilkår, norsk arbeidskontrakt og et trygt sted å være. Vi bruker ikke useriøse underleverandører.",
      "På byggeplassen sorterer vi avfall, gjenbruker materialer der det er forsvarlig, og velger produkter med lavest mulig miljøbelastning når alternativene ellers er likeverdige.",
      "Vi er opptatt av å være en ryddig nabo. Støy, støv og anleggstrafikk varsles i god tid, og vi rydder etter oss hver dag.",
    ],
    seoDescription:
      "Trestandard tar ansvar for lærlinger, ordnede arbeidsvilkår, avfallssortering og et godt forhold til naboer.",
  },
  karriere: {
    title: "Karriere",
    heroHeading: "Vil du jobbe med oss?",
    heroIntro:
      "Vi er alltid interessert i å høre fra dyktige fagfolk – og fra deg som vil bli det.",
    paragraphs: [
      "Hos oss jobber du i et lite selskap med korte beslutningsveier og lang erfaring. Du får varierte oppdrag, kolleger som kan faget sitt, og mulighet til å følge prosjekter fra start til slutt.",
      "Finner du ingen aktuell stilling under? Send oss gjerne en åpen søknad på trestandard@trestandard.no. Vi leser alt vi får inn.",
    ],
    seoDescription:
      "Ledige stillinger og åpen søknad hos Trestandard AS i Oslo.",
  },
  kontakt: {
    title: "Kontakt",
    heroHeading: "Ta kontakt",
    heroIntro:
      "Ring, send en e-post eller stikk innom på Kalbakken. Vi svarer så raskt vi kan.",
    paragraphs: [
      "Skal du ha et tilbud, er det ofte raskest å ringe. Da får vi avtalt en befaring med én gang, og du slipper å beskrive oppdraget i skriftlig form.",
    ],
    seoDescription:
      "Kontakt Trestandard AS: Stålfjæra 9, 0975 Oslo. Telefon +47 934 95 376.",
  },
};

export const seedServices: Service[] = [
  {
    _id: "seed-bygg",
    title: "Bygg",
    slug: "bygg",
    summary:
      "Vi er entreprenør for større og mindre oppdrag – fra tilbygg og totalrehabilitering til mindre tømrerarbeid.",
  },
  {
    _id: "seed-malermester",
    title: "Malermester",
    slug: "malermester",
    summary:
      "Innvendig og utvendig maling, sparkling, tapetsering og overflatebehandling utført av egne malere.",
  },
  {
    _id: "seed-mobelsnekker",
    title: "Møbelsnekker",
    slug: "mobelsnekker",
    summary:
      "Spesialtilpassede innredninger, kjøkken og møbler bygget på mål i vårt eget verksted.",
  },
  {
    _id: "seed-mur",
    title: "Mur og flis",
    slug: "mur-og-flis",
    summary:
      "Murarbeid, puss, flislegging og membran på bad og våtrom – med dokumentasjon i orden.",
  },
  {
    _id: "seed-gulv",
    title: "Gulvlegging",
    slug: "gulvlegging",
    summary:
      "Parkett, heltre, belegg og avretting. Vi legger nytt og setter i stand gamle gulv.",
  },
];

export const seedProjects: Project[] = [
  {
    _id: "seed-prosjekt-1",
    title: "Totalrehabilitering av bygård",
    slug: "totalrehabilitering-bygard",
    location: "Grünerløkka, Oslo",
    year: 2024,
    categories: ["bygg", "maler", "gulv"],
    summary:
      "Full oppgradering av en bygård fra 1899: nye bad, kjøkken, overflater og oppussing av trapperom.",
  },
  {
    _id: "seed-prosjekt-2",
    title: "Nytt kjøkken på mål",
    slug: "nytt-kjokken-pa-mal",
    location: "Nordstrand, Oslo",
    year: 2024,
    categories: ["snekker"],
    summary:
      "Spesialbygget kjøkken i eik, tilpasset skjeve vegger i en enebolig fra 1930-tallet.",
  },
  {
    _id: "seed-prosjekt-3",
    title: "Rehabilitering av fasade og trapperom",
    slug: "fasade-og-trapperom",
    location: "Sagene, Oslo",
    year: 2023,
    categories: ["mur", "maler"],
    summary:
      "Pussreparasjon, nytt fargeoppsett og full oppussing av trapperom for et borettslag.",
  },
  {
    _id: "seed-prosjekt-4",
    title: "Baderomsoppussing",
    slug: "baderomsoppussing",
    location: "Kalbakken, Oslo",
    year: 2023,
    categories: ["mur", "bygg"],
    summary:
      "Komplett bad med membran, varmekabler og flislagte vegger – utført etter våtromsnormen.",
  },
];

export const seedJobPostings: JobPosting[] = [
  {
    _id: "seed-jobb-1",
    title: "Tømrer",
    slug: "tomrer",
    employmentType: "Fast, heltid",
    location: "Oslo",
    summary:
      "Vi søker en tømrer med fagbrev og noen års erfaring fra rehabilitering av eldre bygg.",
  },
  {
    _id: "seed-jobb-2",
    title: "Lærling i tømrerfaget",
    slug: "laerling-tomrer",
    employmentType: "Lærling",
    location: "Oslo",
    summary:
      "Har du fullført Vg2 byggteknikk? Vi tar inn lærling og gir deg varierte oppdrag fra dag én.",
  },
];
