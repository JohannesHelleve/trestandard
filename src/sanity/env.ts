export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

/**
 * The site is designed to render from bundled seed content when Sanity has not
 * been wired up yet, so a missing project id is a soft condition rather than a
 * build error. Everything that touches the Sanity client checks this first.
 */
export const sanityConfigured = projectId.length > 0;
