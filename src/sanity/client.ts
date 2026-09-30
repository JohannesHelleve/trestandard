import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, sanityConfigured } from "./env";

export const client = sanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      perspective: "published",
    })
  : null;

type FetchOptions = {
  /** Cache tag so `revalidateTag` from the webhook can purge this query. */
  tags?: string[];
};

/**
 * Runs a GROQ query, falling back to `fallback` whenever Sanity is not
 * configured or the request fails. This keeps the marketing site up even if
 * the CMS is unreachable.
 */
export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  fallback: T,
  options: FetchOptions = {},
): Promise<T> {
  if (!client) return fallback;

  try {
    const result = await client.fetch<T>(query, params, {
      next: { revalidate: 60, tags: options.tags },
    });
    // An empty result means the dataset has no content yet; prefer the seed.
    if (result === null || result === undefined) return fallback;
    if (Array.isArray(result) && result.length === 0) return fallback;
    return result;
  } catch (error) {
    console.error("Sanity query failed, using fallback content:", error);
    return fallback;
  }
}
