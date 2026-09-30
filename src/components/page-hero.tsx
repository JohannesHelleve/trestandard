import Image from "next/image";

import { imageUrl } from "@/sanity/image";
import type { PageContent } from "@/lib/types";

export function PageHero({ page }: { page: PageContent }) {
  const src = imageUrl(page.heroImage, 1800, 900);

  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 sm:pt-24 sm:pb-16">
        <p className="eyebrow">{page.title}</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
          {page.heroHeading}
        </h1>
        {page.heroIntro ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            {page.heroIntro}
          </p>
        ) : null}
      </div>

      {src ? (
        <div className="mx-auto max-w-6xl px-6 pb-12">
          <Image
            src={src}
            alt={page.heroImage?.alt ?? ""}
            width={1800}
            height={900}
            priority
            className="aspect-[2/1] w-full rounded-sm object-cover"
            sizes="(min-width: 1152px) 1088px, 100vw"
          />
        </div>
      ) : null}
    </section>
  );
}
