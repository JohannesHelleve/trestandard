import Link from "next/link";

import { ProjectCard, ServiceCard } from "@/components/cards";
import { Prose } from "@/components/prose";
import { getPage, getProjects, getServices, getSettings } from "@/lib/content";

export default async function HomePage() {
  const [page, services, projects, settings] = await Promise.all([
    getPage("forside"),
    getServices(),
    getProjects(),
    getSettings(),
  ]);

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
          <p className="eyebrow">Entreprenør i Oslo siden 1946</p>
          <h1 className="mt-5 max-w-4xl text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl">
            {page.heroHeading}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            {page.heroIntro}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/kontakt"
              className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-wood"
            >
              Be om befaring
            </Link>
            <Link
              href="/vi-tilbyr"
              className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-wood hover:text-wood"
            >
              Se hva vi tilbyr
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-section lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="eyebrow">Om Trestandard</h2>
            <p className="mt-4 font-serif text-3xl leading-snug text-ink sm:text-4xl">
              Tre generasjoner, samme målestokk.
            </p>
          </div>
          <div>
            <Prose body={page.body} paragraphs={page.paragraphs} />
            <Link
              href="/om-oss"
              className="mt-2 inline-block text-sm font-medium text-wood hover:underline"
            >
              Les historien vår →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-section">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="eyebrow">Vi tilbyr</h2>
              <p className="mt-4 font-serif text-3xl text-ink sm:text-4xl">
                Fagene vi har i eget hus
              </p>
            </div>
            <Link
              href="/vi-tilbyr"
              className="text-sm font-medium text-wood hover:underline"
            >
              Alle tjenester →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-section">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="eyebrow">Referanseprosjekter</h2>
              <p className="mt-4 font-serif text-3xl text-ink sm:text-4xl">
                Noe av det vi har bygget
              </p>
            </div>
            <Link
              href="/referanseprosjekter"
              className="text-sm font-medium text-wood hover:underline"
            >
              Alle prosjekter →
            </Link>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-20 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl">
              Har du et prosjekt på gang?
            </h2>
            <p className="mt-3 max-w-xl text-paper/70">
              Ring oss, så avtaler vi en uforpliktende befaring.
            </p>
          </div>
          {settings.phone ? (
            <a
              href={`tel:${settings.phone.replace(/\s/g, "")}`}
              className="shrink-0 rounded-full bg-paper px-7 py-3.5 text-base font-medium text-ink transition-colors hover:bg-wood hover:text-paper"
            >
              {settings.phone}
            </a>
          ) : null}
        </div>
      </section>
    </>
  );
}
