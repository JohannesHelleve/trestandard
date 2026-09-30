import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Nettstedsinnstillinger",
  type: "document",
  fields: [
    defineField({
      name: "companyName",
      title: "Firmanavn",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Slagord",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Metabeskrivelse",
      type: "text",
      rows: 3,
      description: "Vises i søkeresultater og ved deling i sosiale medier.",
      validation: (rule) => rule.max(160),
    }),
    defineField({
      name: "phone",
      title: "Telefon",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "E-post",
      type: "string",
    }),
    defineField({
      name: "orgNumber",
      title: "Organisasjonsnummer",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Besøksadresse",
      type: "object",
      fields: [
        { name: "street", title: "Gate", type: "string" },
        { name: "postalCode", title: "Postnummer", type: "string" },
        { name: "city", title: "Sted", type: "string" },
        { name: "mapsUrl", title: "Google Maps-lenke", type: "url" },
      ],
    }),
    defineField({
      name: "social",
      title: "Sosiale medier",
      type: "object",
      fields: [
        { name: "facebook", title: "Facebook", type: "url" },
        { name: "instagram", title: "Instagram", type: "url" },
        { name: "linkedin", title: "LinkedIn", type: "url" },
      ],
    }),
  ],
  preview: {
    select: { title: "companyName", subtitle: "tagline" },
  },
});
