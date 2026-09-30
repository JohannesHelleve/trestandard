"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId } from "@/sanity/env";
import { schemaTypes } from "@/sanity/schemaTypes";
import { structure } from "@/sanity/structure";

export default defineConfig({
  name: "trestandard",
  title: "Trestandard",
  basePath: "/studio",
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
  document: {
    // The settings singleton should not be duplicated or deleted from the UI.
    actions: (prev, { schemaType }) =>
      schemaType === "siteSettings"
        ? prev.filter(
            ({ action }) =>
              action !== "duplicate" && action !== "delete" && action !== "unpublish",
          )
        : prev,
  },
});
