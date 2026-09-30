import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Prose } from "@/components/prose";
import { getProject, getProjectSlugs } from "@/lib/content";
import { imageUrl } from "@/sanity/image";

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/referanseprosjekter/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return { title: "Prosjektet finnes ikke" };
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({
  params,
}: PageProps<"/referanseprosjekter/[slug]">) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) notFound();

  const cover = imageUrl(project.coverImage, 1800, 1000);
  const facts = [
    project.client ? { label: "Oppdragsgiver", value: project.client } : null,
    project.location ? { label: "Sted", value: project.location } : null,
    project.year ? { label: "År", value: String(project.year) } : null,
    project.categories?.length
      ? { label: "Fagområder", value: project.categories.join(", ") }
      : null,
  ].filter((f): f is { label: string; value: string } => f !== null);

  return (
    <article>
      <div className="mx-auto max-w-6xl px-6 pt-10">
        <Link
          href="/referanseprosjekter"
          className="text-sm font-medium text-wood hover:underline"
        >
          ← Alle referanseprosjekter
        </Link>
      </div>

      <header className="mx-auto max-w-6xl px-6 pt-8 pb-10">
        <h1 className="max-w-3xl text-4xl leading-[1.08] sm:text-5xl">
          {project.title}
        </h1>
        {project.summary ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            {project.summary}
          </p>
        ) : null}
      </header>

      {cover ? (
        <div className="mx-auto max-w-6xl px-6">
          <Image
            src={cover}
            alt={project.coverImage?.alt ?? project.title}
            width={1800}
            height={1000}
            priority
            className="aspect-[16/9] w-full object-cover"
            sizes="(min-width: 1152px) 1088px, 100vw"
          />
        </div>
      ) : null}

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-section lg:grid-cols-[18rem_1fr]">
        {facts.length > 0 ? (
          <dl className="h-fit border-t border-line">
            {facts.map((fact) => (
              <div key={fact.label} className="border-b border-line py-4">
                <dt className="eyebrow">{fact.label}</dt>
                <dd className="mt-1.5 text-ink-soft capitalize">{fact.value}</dd>
              </div>
            ))}
          </dl>
        ) : (
          <div />
        )}

        <div className="max-w-2xl">
          <Prose body={project.body} />
        </div>
      </div>

      {project.gallery?.length ? (
        <section className="mx-auto max-w-6xl px-6 pb-section">
          <h2 className="eyebrow">Bilder</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {project.gallery.map((image, i) => {
              const src = imageUrl(image, 1000, 750);
              if (!src) return null;
              return (
                <Image
                  key={i}
                  src={src}
                  alt={image.alt ?? ""}
                  width={1000}
                  height={750}
                  className="aspect-[4/3] w-full object-cover"
                  sizes="(min-width: 640px) 45vw, 100vw"
                />
              );
            })}
          </div>
        </section>
      ) : null}
    </article>
  );
}
