import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { Prose } from "@/components/prose";
import { getPage } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("samfunnsansvar");
  return { title: page.title, description: page.seoDescription };
}

export default async function ResponsibilityPage() {
  const page = await getPage("samfunnsansvar");

  return (
    <>
      <PageHero page={page} />
      <section>
        <div className="mx-auto max-w-3xl px-6 py-section">
          <Prose body={page.body} paragraphs={page.paragraphs} />
        </div>
      </section>
    </>
  );
}
