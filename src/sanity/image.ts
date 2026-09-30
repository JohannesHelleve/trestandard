import { createImageUrlBuilder } from "@sanity/image-url";

import { dataset, projectId, sanityConfigured } from "./env";
import type { SanityImage } from "@/lib/types";

const builder = sanityConfigured
  ? createImageUrlBuilder({ projectId, dataset })
  : null;

export function urlForImage(source: SanityImage | undefined | null) {
  if (!source?.asset || !builder) return null;
  return builder.image(source).auto("format").fit("max");
}

export function imageUrl(
  source: SanityImage | undefined | null,
  width: number,
  height?: number,
): string | null {
  const url = urlForImage(source);
  if (!url) return null;
  const sized = height ? url.width(width).height(height) : url.width(width);
  return sized.url();
}
