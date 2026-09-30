import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { Prose } from "@/components/prose";
import { getJobPostings, getPage, getSettings } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("karriere");
  return { title: page.title, description: page.seoDescription };
}

function formatDeadline(value?: string) {
  if (!value) return null;
  const [y, m, d] = value.split("-");
  return y && m && d ? `${d}.${m}.${y}` : value;
}

export default async function CareersPage() {
  const [page, jobs, settings] = await Promise.all([
    getPage("karriere"),
    getJobPostings(),
    getSettings(),
  ]);

  return (
    <>
      <PageHero page={page} />

      <section className="border-b border-line">
        <div className="mx-auto max-w-3xl px-6 py-section">
          <Prose body={page.body} paragraphs={page.paragraphs} />
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-6 py-section">
          <h2 className="eyebrow">Ledige stillinger</h2>

          {jobs.length === 0 ? (
            <p className="mt-6 text-lg text-ink-soft">
              Vi har ingen utlyste stillinger akkurat nå, men send gjerne en åpen
              søknad.
            </p>
          ) : (
            <ul className="mt-8 border-t border-line">
              {jobs.map((job) => {
                const deadline = formatDeadline(job.deadline);
                return (
                  <li key={job._id} className="border-b border-line py-7">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="font-serif text-2xl text-ink">{job.title}</h3>
                      <p className="text-sm text-ink-faint">
                        {[job.employmentType, job.location]
                          .filter(Boolean)
                          .join(" · ")}
                      </p>
                    </div>
                    {job.summary ? (
                      <p className="mt-3 text-ink-soft">{job.summary}</p>
                    ) : null}
                    <p className="mt-4 text-sm">
                      {deadline ? (
                        <span className="mr-4 text-ink-faint">
                          Søknadsfrist {deadline}
                        </span>
                      ) : null}
                      {settings.email ? (
                        <a
                          className="font-medium text-wood hover:underline"
                          href={`mailto:${settings.email}?subject=${encodeURIComponent(
                            `Søknad: ${job.title}`,
                          )}`}
                        >
                          Søk på stillingen →
                        </a>
                      ) : null}
                    </p>
                  </li>
                );
              })}
            </ul>
          )}

          {settings.email ? (
            <div className="mt-12 border border-line bg-paper-dim p-8">
              <h3 className="font-serif text-2xl text-ink">Åpen søknad</h3>
              <p className="mt-3 text-ink-soft">
                Send CV og noen ord om deg selv til{" "}
                <a
                  className="text-wood hover:underline"
                  href={`mailto:${settings.email}`}
                >
                  {settings.email}
                </a>
                .
              </p>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
