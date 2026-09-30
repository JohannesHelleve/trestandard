import type { Metadata } from "next";

import { getSettings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Personvern",
  description:
    "Hvordan Trestandard AS behandler personopplysninger på dette nettstedet.",
};

export default async function PrivacyPage() {
  const settings = await getSettings();

  return (
    <section>
      <div className="mx-auto max-w-3xl px-6 py-section">
        <p className="eyebrow">Personvern</p>
        <h1 className="mt-4 text-4xl sm:text-5xl">Personvernerklæring</h1>

        <div className="mt-10 space-y-5 text-lg leading-relaxed text-ink-soft">
          <p>
            {settings.companyName} er behandlingsansvarlig for
            personopplysninger som samles inn gjennom dette nettstedet.
          </p>

          <h2 className="mt-10 font-serif text-2xl text-ink">
            Hva vi samler inn
          </h2>
          <p>
            Nettstedet bruker ingen sporings- eller markedsføringsinformasjons­kapsler.
            Vi samler ikke inn personopplysninger om deg når du kun leser
            sidene.
          </p>
          <p>
            Tar du kontakt på telefon eller e-post, lagrer vi
            kontaktopplysningene og innholdet i henvendelsen så lenge det er
            nødvendig for å følge opp saken din.
          </p>

          <h2 className="mt-10 font-serif text-2xl text-ink">
            Hvem har tilgang
          </h2>
          <p>
            Opplysningene deles ikke med andre enn dem som trenger dem for å
            utføre oppdraget. Nettstedet driftes hos Vercel, og innholdet lagres
            hos Sanity. Begge behandler data på våre vegne.
          </p>

          <h2 className="mt-10 font-serif text-2xl text-ink">Dine rettigheter</h2>
          <p>
            Du har rett til innsyn i, retting av og sletting av opplysninger vi
            har om deg. Ta kontakt
            {settings.email ? (
              <>
                {" "}
                på{" "}
                <a
                  className="text-wood hover:underline"
                  href={`mailto:${settings.email}`}
                >
                  {settings.email}
                </a>
              </>
            ) : null}
            , så ordner vi det.
          </p>
          <p>
            Mener du at vi behandler opplysninger i strid med regelverket, kan
            du klage til Datatilsynet.
          </p>
        </div>
      </div>
    </section>
  );
}
