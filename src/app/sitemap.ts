import type { MetadataRoute } from "next";

import { getProjectSlugs } from "@/lib/content";
import { siteUrl } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths = [
    "",
    "/vi-tilbyr",
    "/referanseprosjekter",
    "/om-oss",
    "/samfunnsansvar",
    "/karriere",
    "/kontakt",
    "/personvern",
  ];

  const slugs = await getProjectSlugs();

  return [
    ...staticPaths.map((path) => ({
      url: `${siteUrl}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...slugs.map((slug) => ({
      url: `${siteUrl}/referanseprosjekter/${slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
