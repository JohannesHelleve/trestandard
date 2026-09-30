import { defineField, defineType } from "sanity";

/**
 * Editorial content for the fixed top-level pages. The slug is constrained to
 * the routes that exist in the app so an editor cannot orphan a page.
 */
export const page = defineType({
  name: "page",
  title: "Side",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Tittel",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Side",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      description:
        "Må være én av: forside, vi-tilbyr, om-oss, samfunnsansvar, karriere, kontakt",
      validation: (rule) =>
        rule.required().custom((value) => {
          const allowed = [
            "forside",
            "vi-tilbyr",
            "om-oss",
            "samfunnsansvar",
            "karriere",
            "kontakt",
          ];
          if (!value?.current) return "Påkrevd";
          return allowed.includes(value.current)
            ? true
            : `Må være én av: ${allowed.join(", ")}`;
        }),
    }),
    defineField({
      name: "heroHeading",
      title: "Overskrift i toppseksjon",
      type: "string",
    }),
    defineField({
      name: "heroIntro",
      title: "Ingress i toppseksjon",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "heroImage",
      title: "Toppbilde",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alternativ tekst" }],
    }),
    defineField({
      name: "body",
      title: "Brødtekst",
      type: "blockContent",
    }),
    defineField({
      name: "seoDescription",
      title: "Metabeskrivelse",
      type: "text",
      rows: 2,
      validation: (rule) => rule.max(160),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "slug.current", media: "heroImage" },
  },
});
