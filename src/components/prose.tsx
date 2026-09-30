import { PortableText, type PortableTextComponents } from "next-sanity";
import Image from "next/image";

import { imageUrl } from "@/sanity/image";
import type { PageContent } from "@/lib/types";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-5 leading-relaxed text-ink-soft">{children}</p>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 mb-4 font-serif text-2xl text-ink">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-8 mb-3 font-serif text-xl text-ink">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-2 border-wood pl-5 font-serif text-xl text-ink italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-5 list-disc space-y-2 pl-5 text-ink-soft">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-5 list-decimal space-y-2 pl-5 text-ink-soft">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className="text-wood underline underline-offset-2 hover:text-wood-dark"
        target={value?.href?.startsWith("http") ? "_blank" : undefined}
        rel={value?.href?.startsWith("http") ? "noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-ink">{children}</strong>
    ),
  },
  types: {
    image: ({ value }) => {
      const src = imageUrl(value, 1400);
      if (!src) return null;
      return (
        <figure className="my-10">
          <Image
            src={src}
            alt={value?.alt ?? ""}
            width={1400}
            height={900}
            className="w-full rounded-sm object-cover"
            sizes="(min-width: 768px) 700px, 100vw"
          />
          {value?.alt ? (
            <figcaption className="mt-2 text-sm text-ink-faint">
              {value.alt}
            </figcaption>
          ) : null}
        </figure>
      );
    },
  },
};

/**
 * Renders Sanity rich text when present, otherwise the bundled paragraphs.
 */
export function Prose({
  body,
  paragraphs = [],
}: {
  body?: PageContent["body"];
  paragraphs?: string[];
}) {
  if (body && body.length > 0) {
    return (
      <div className="text-lg">
        <PortableText value={body} components={components} />
      </div>
    );
  }

  return (
    <div className="text-lg">
      {paragraphs.map((text, i) => (
        <p key={i} className="mb-5 leading-relaxed text-ink-soft">
          {text}
        </p>
      ))}
    </div>
  );
}
