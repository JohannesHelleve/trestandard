import type { Metadata } from "next";
import Link from "next/link";

import { ServiceCard } from "@/components/cards";
import { PageHero } from "@/components/page-hero";
import { Prose } from "@/components/prose";
import { getPage, getServices } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("vi-tilbyr");
  return { title: page.title, description: page.seoDescription };
}

export default async function ServicesPage() {
  const [page, services] = await Promise.all([
    getPage("vi-tilbyr"),
    getServices(),
  ]);

  return (
    <>
      <PageHero page={page} />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-section">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-6 py-section">
          <Prose body={page.body} paragraphs={page.paragraphs} />
          <Link
            href="/kontakt"
            className="mt-4 inline-block rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-wood"
          >
            Be om befaring
          </Link>
        </div>
      </section>
    </>
  );
}
