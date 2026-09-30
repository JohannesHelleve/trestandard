import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { Prose } from "@/components/prose";
import { getPage } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("om-oss");
  return { title: page.title, description: page.seoDescription };
}

const MILESTONES = [
  { year: "1946", text: "Alf Bakken grunnlegger Trestandard på Løren i Oslo." },
  { year: "1949", text: "De første kjøkkenseriene lanseres som «Moderne kjøkken»." },
  { year: "1960-tallet", text: "«Nordia» blir selskapets første systemkjøkken." },
  { year: "1970", text: "Sammenslåing med Emaljeverket – merkenavnet NOREMA blir til." },
  { year: "I dag", text: "Drives av Alf Bakkens barnebarn fra lokalene på Kalbakken." },
];

export default async function AboutPage() {
  const page = await getPage("om-oss");

  return (
    <>
      <PageHero page={page} />

      <section className="border-b border-line">
        <div className="mx-auto max-w-3xl px-6 py-section">
          <Prose body={page.body} paragraphs={page.paragraphs} />
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-section">
          <h2 className="eyebrow">Tidslinje</h2>
          <ol className="mt-8 border-t border-line">
            {MILESTONES.map((m) => (
              <li
                key={m.year}
                className="grid gap-2 border-b border-line py-6 sm:grid-cols-[10rem_1fr] sm:gap-8"
              >
                <span className="font-serif text-xl text-wood">{m.year}</span>
                <span className="text-lg text-ink-soft">{m.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
