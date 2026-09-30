import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Referanseprosjekt",
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
      name: "client",
      title: "Oppdragsgiver",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Sted",
      type: "string",
    }),
    defineField({
      name: "year",
      title: "År",
      type: "number",
      validation: (rule) => rule.min(1946).max(2100),
    }),
    defineField({
      name: "categories",
      title: "Fagområder",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Bygg", value: "bygg" },
          { title: "Maler", value: "maler" },
          { title: "Mur", value: "mur" },
          { title: "Møbelsnekker", value: "snekker" },
          { title: "Gulv", value: "gulv" },
        ],
      },
    }),
    defineField({
      name: "summary",
      title: "Kort beskrivelse",
      type: "text",
      rows: 3,
      validation: (rule) => rule.max(240),
    }),
    defineField({
      name: "body",
      title: "Beskrivelse",
      type: "blockContent",
    }),
    defineField({
      name: "coverImage",
      title: "Hovedbilde",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alternativ tekst" }],
    }),
    defineField({
      name: "gallery",
      title: "Bildegalleri",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", type: "string", title: "Alternativ tekst" }],
        },
      ],
    }),
  ],
  orderings: [
    {
      title: "Nyeste først",
      name: "yearDesc",
      by: [{ field: "year", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "location", media: "coverImage" },
  },
});
