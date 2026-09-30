import Image from "next/image";
import Link from "next/link";

import { imageUrl } from "@/sanity/image";
import type { Project, Service } from "@/lib/types";

export function ServiceCard({ service }: { service: Service }) {
  const src = imageUrl(service.image, 800, 600);

  return (
    <article className="group flex flex-col border border-line bg-paper transition-colors hover:border-wood">
      {src ? (
        <Image
          src={src}
          alt={service.image?.alt ?? ""}
          width={800}
          height={600}
          className="aspect-[4/3] w-full object-cover"
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 100vw"
        />
      ) : (
        <div className="aspect-[4/3] w-full bg-paper-dim" aria-hidden="true" />
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-2xl text-ink">{service.title}</h3>
        <p className="mt-3 flex-1 text-ink-soft">{service.summary}</p>
      </div>
    </article>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const src = imageUrl(project.coverImage, 900, 700);

  return (
    <article className="group">
      <Link href={`/referanseprosjekter/${project.slug}`} className="block">
        {src ? (
          <Image
            src={src}
            alt={project.coverImage?.alt ?? project.title}
            width={900}
            height={700}
            className="aspect-[9/7] w-full object-cover transition-opacity group-hover:opacity-90"
            sizes="(min-width: 1024px) 350px, (min-width: 640px) 45vw, 100vw"
          />
        ) : (
          <div
            className="aspect-[9/7] w-full bg-paper-dim"
            aria-hidden="true"
          />
        )}
        <h3 className="mt-4 font-serif text-xl text-ink group-hover:text-wood">
          {project.title}
        </h3>
      </Link>
      <p className="mt-1 text-sm text-ink-faint">
        {[project.location, project.year].filter(Boolean).join(" · ")}
      </p>
      {project.summary ? (
        <p className="mt-2 text-ink-soft">{project.summary}</p>
      ) : null}
    </article>
  );
}
