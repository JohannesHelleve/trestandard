import type { Metadata } from "next";

import { ProjectCard } from "@/components/cards";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Referanseprosjekter",
  description:
    "Et utvalg av oppdrag Trestandard har gjennomført – rehabilitering, bad, kjøkken, fasader og innredning i Oslo.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 sm:pt-24 sm:pb-16">
          <p className="eyebrow">Referanseprosjekter</p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
            Arbeid vi gjerne viser fram
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            Et utvalg oppdrag fra de siste årene. Vil du se noe som ligner ditt
            eget prosjekt, ta kontakt – vi viser gjerne mer.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-section">
          {projects.length === 0 ? (
            <p className="text-lg text-ink-soft">
              Vi legger ut prosjekter her fortløpende.
            </p>
          ) : (
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
