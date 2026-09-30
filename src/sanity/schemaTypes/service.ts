import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Tjeneste",
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
      title: "URL-navn",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Kort beskrivelse",
      type: "text",
      rows: 3,
      description: "Vises i oversikten over tjenester.",
      validation: (rule) => rule.required().max(240),
    }),
    defineField({
      name: "body",
      title: "Beskrivelse",
      type: "blockContent",
    }),
    defineField({
      name: "image",
      title: "Bilde",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alternativ tekst" }],
    }),
    defineField({
      name: "order",
      title: "Rekkefølge",
      type: "number",
      description: "Lavere tall vises først.",
      initialValue: 100,
    }),
  ],
  orderings: [
    {
      title: "Rekkefølge",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "summary", media: "image" },
  },
});
