import { sanityFetch } from "@/sanity/client";
import {
  jobPostingsQuery,
  pageBySlugQuery,
  projectBySlugQuery,
  projectSlugsQuery,
  projectsQuery,
  servicesQuery,
  siteSettingsQuery,
} from "@/sanity/queries";
import {
  seedJobPostings,
  seedPages,
  seedProjects,
  seedServices,
  seedSettings,
} from "@/content/seed";
import type {
  JobPosting,
  PageContent,
  Project,
  Service,
  SiteSettings,
} from "@/lib/types";

export async function getSettings(): Promise<SiteSettings> {
  const remote = await sanityFetch<SiteSettings | null>(
    siteSettingsQuery,
    {},
    null,
    { tags: ["siteSettings"] },
  );
  // Merge so a partially filled settings document still renders completely.
  return remote ? { ...seedSettings, ...stripEmpty(remote) } : seedSettings;
}

export async function getPage(slug: keyof typeof seedPages | string): Promise<PageContent> {
  const fallback = seedPages[slug];
  const remote = await sanityFetch<Partial<PageContent> | null>(
    pageBySlugQuery,
    { slug },
    null,
    { tags: ["page", `page:${slug}`] },
  );

  if (!fallback) {
    // Unknown slug: only Sanity can answer, and the caller handles null-ish.
    return (remote as PageContent) ?? notFoundPage(slug);
  }
  return remote ? { ...fallback, ...stripEmpty(remote) } : fallback;
}

export async function getServices(): Promise<Service[]> {
  return sanityFetch<Service[]>(servicesQuery, {}, seedServices, {
    tags: ["service"],
  });
}

export async function getProjects(): Promise<Project[]> {
  return sanityFetch<Project[]>(projectsQuery, {}, seedProjects, {
    tags: ["project"],
  });
}

export async function getProject(slug: string): Promise<Project | null> {
  const fallback = seedProjects.find((p) => p.slug === slug) ?? null;
  return sanityFetch<Project | null>(projectBySlugQuery, { slug }, fallback, {
    tags: ["project", `project:${slug}`],
  });
}

export async function getProjectSlugs(): Promise<string[]> {
  return sanityFetch<string[]>(
    projectSlugsQuery,
    {},
    seedProjects.map((p) => p.slug),
    { tags: ["project"] },
  );
}

export async function getJobPostings(): Promise<JobPosting[]> {
  return sanityFetch<JobPosting[]>(jobPostingsQuery, {}, seedJobPostings, {
    tags: ["jobPosting"],
  });
}

/** Drops null/undefined/empty keys so a merge never blanks out seed values. */
function stripEmpty<T extends object>(input: T): Partial<T> {
  return Object.fromEntries(
    Object.entries(input).filter(
      ([, value]) =>
        value !== null &&
        value !== undefined &&
        !(typeof value === "string" && value.trim() === "") &&
        !(Array.isArray(value) && value.length === 0),
    ),
  ) as Partial<T>;
}

function notFoundPage(slug: string): PageContent {
  return {
    title: slug,
    heroHeading: slug,
    heroIntro: "",
    paragraphs: [],
  };
}
