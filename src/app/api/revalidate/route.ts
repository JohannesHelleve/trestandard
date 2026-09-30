import { parseBody } from "next-sanity/webhook";
import { revalidateTag } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";

type WebhookPayload = {
  _type?: string;
  slug?: { current?: string };
};

/**
 * Sanity webhook target. Publishing a document purges only the tags that
 * document feeds, so the rest of the site keeps its cache.
 *
 * Configure in Sanity: Manage → API → Webhooks
 *   URL:     https://<domain>/api/revalidate
 *   Dataset: production
 *   Trigger: create, update, delete
 *   Secret:  same value as SANITY_REVALIDATE_SECRET
 *   Filter:  _type in ["siteSettings","page","service","project","jobPosting"]
 */
export async function POST(request: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<WebhookPayload>(
      request,
      process.env.SANITY_REVALIDATE_SECRET,
    );

    if (!isValidSignature) {
      return NextResponse.json(
        { message: "Invalid signature" },
        { status: 401 },
      );
    }

    if (!body?._type) {
      return NextResponse.json(
        { message: "Missing _type in payload" },
        { status: 400 },
      );
    }

    const tags = [body._type];
    if (body.slug?.current) tags.push(`${body._type}:${body.slug.current}`);

    // "max" expires the entry outright so the next request refetches.
    for (const tag of tags) revalidateTag(tag, "max");

    return NextResponse.json({ revalidated: true, tags });
  } catch (error) {
    console.error("Revalidation webhook failed:", error);
    return NextResponse.json(
      { message: "Revalidation failed" },
      { status: 500 },
    );
  }
}
