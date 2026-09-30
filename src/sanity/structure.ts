import type { StructureResolver } from "sanity/structure";

/**
 * Site settings is a singleton, so it gets a fixed document id and is pulled
 * out of the generic document list.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Innhold")
    .items([
      S.listItem()
        .title("Nettstedsinnstillinger")
        .id("siteSettings")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .title("Nettstedsinnstillinger"),
        ),
      S.divider(),
      S.documentTypeListItem("page").title("Sider"),
      S.documentTypeListItem("service").title("Tjenester"),
      S.documentTypeListItem("project").title("Referanseprosjekter"),
      S.documentTypeListItem("jobPosting").title("Stillingsannonser"),
    ]);
