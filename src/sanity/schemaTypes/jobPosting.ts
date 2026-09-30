import { defineField, defineType } from "sanity";

export const jobPosting = defineType({
  name: "jobPosting",
  title: "Stillingsannonse",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Stillingstittel",
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
      name: "employmentType",
      title: "Stillingstype",
      type: "string",
      options: {
        list: [
          { title: "Fast, heltid", value: "Fast, heltid" },
          { title: "Fast, deltid", value: "Fast, deltid" },
          { title: "Vikariat", value: "Vikariat" },
          { title: "Lærling", value: "Lærling" },
        ],
      },
    }),
    defineField({
      name: "location",
      title: "Sted",
      type: "string",
      initialValue: "Oslo",
    }),
    defineField({
      name: "deadline",
      title: "Søknadsfrist",
      type: "date",
      options: { dateFormat: "DD.MM.YYYY" },
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
      name: "active",
      title: "Aktiv",
      type: "boolean",
      description: "Slå av for å skjule annonsen uten å slette den.",
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "employmentType" },
  },
});
