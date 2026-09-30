import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { Prose } from "@/components/prose";
import { getPage, getSettings } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("kontakt");
  return { title: page.title, description: page.seoDescription };
}

export default async function ContactPage() {
  const [page, settings] = await Promise.all([
    getPage("kontakt"),
    getSettings(),
  ]);
  const { address } = settings;

  return (
    <>
      <PageHero page={page} />

      <section>
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-section lg:grid-cols-2">
          <div>
            <Prose body={page.body} paragraphs={page.paragraphs} />

            <dl className="mt-10 space-y-6">
              {settings.phone ? (
                <div>
                  <dt className="eyebrow">Telefon</dt>
                  <dd className="mt-2 font-serif text-2xl">
                    <a
                      className="text-ink hover:text-wood"
                      href={`tel:${settings.phone.replace(/\s/g, "")}`}
                    >
                      {settings.phone}
                    </a>
                  </dd>
                </div>
              ) : null}

              {settings.email ? (
                <div>
                  <dt className="eyebrow">E-post</dt>
                  <dd className="mt-2 text-lg">
                    <a
                      className="text-ink hover:text-wood"
                      href={`mailto:${settings.email}`}
                    >
                      {settings.email}
                    </a>
                  </dd>
                </div>
              ) : null}

              {address ? (
                <div>
                  <dt className="eyebrow">Besøksadresse</dt>
                  <dd className="mt-2 text-lg text-ink-soft">
                    <p>{address.street}</p>
                    <p>
                      {address.postalCode} {address.city}
                    </p>
                    {address.mapsUrl ? (
                      <a
                        className="mt-2 inline-block text-base text-wood hover:underline"
                        href={address.mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Åpne i Google Maps →
                      </a>
                    ) : null}
                  </dd>
                </div>
              ) : null}

              {settings.orgNumber ? (
                <div>
                  <dt className="eyebrow">Organisasjonsnummer</dt>
                  <dd className="mt-2 text-lg text-ink-soft">
                    {settings.orgNumber}
                  </dd>
                </div>
              ) : null}
            </dl>
          </div>

          {address?.street ? (
            <div className="min-h-[24rem] border border-line">
              <iframe
                title="Kart over besøksadressen"
                className="h-full min-h-[24rem] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  `${address.street}, ${address.postalCode ?? ""} ${address.city ?? ""}`,
                )}&output=embed`}
              />
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
