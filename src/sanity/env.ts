/**
 * Values pasted into a dashboard or piped through a shell routinely arrive
 * with stray whitespace, and Sanity rejects a projectId that has any. Trim
 * everything on the way in.
 */
const read = (value: string | undefined, fallback = "") =>
  value?.trim() || fallback;

export const apiVersion = read(
  process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  "2024-10-01",
);

export const dataset = read(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "production",
);

export const projectId = read(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);

/**
 * The site is designed to render from bundled seed content when Sanity has not
 * been wired up yet, so a missing project id is a soft condition rather than a
 * build error. Everything that touches the Sanity client checks this first.
 */
export const sanityConfigured = projectId.length > 0;
