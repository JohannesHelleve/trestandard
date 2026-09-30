import Link from "next/link";

import type { SiteSettings } from "@/lib/types";

export function SiteFooter({ settings }: { settings: SiteSettings }) {
  const { address, social } = settings;
  const year = 2026;

  return (
    <footer className="mt-auto border-t border-line bg-paper-dim">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-serif text-xl text-ink">{settings.companyName}</p>
          {settings.tagline ? (
            <p className="mt-2 text-sm text-ink-faint">{settings.tagline}</p>
          ) : null}
        </div>

        <div>
          <h2 className="eyebrow">Kontakt</h2>
          <ul className="mt-4 space-y-2 text-sm text-ink-soft">
            {settings.phone ? (
              <li>
                <a
                  className="hover:text-wood"
                  href={`tel:${settings.phone.replace(/\s/g, "")}`}
                >
                  {settings.phone}
                </a>
              </li>
            ) : null}
            {settings.email ? (
              <li>
                <a className="hover:text-wood" href={`mailto:${settings.email}`}>
                  {settings.email}
                </a>
              </li>
            ) : null}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">Besøk oss</h2>
          <address className="mt-4 space-y-1 text-sm not-italic text-ink-soft">
            {address?.street ? <p>{address.street}</p> : null}
            {address?.postalCode || address?.city ? (
              <p>
                {address?.postalCode} {address?.city}
              </p>
            ) : null}
            {address?.mapsUrl ? (
              <p>
                <a
                  className="text-wood hover:underline"
                  href={address.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Veibeskrivelse
                </a>
              </p>
            ) : null}
          </address>
        </div>

        <div>
          <h2 className="eyebrow">Følg oss</h2>
          <ul className="mt-4 space-y-2 text-sm text-ink-soft">
            {social?.facebook ? (
              <li>
                <a
                  className="hover:text-wood"
                  href={social.facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
            ) : null}
            {social?.instagram ? (
              <li>
                <a
                  className="hover:text-wood"
                  href={social.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
            ) : null}
            {social?.linkedin ? (
              <li>
                <a
                  className="hover:text-wood"
                  href={social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {settings.companyName}
            {settings.orgNumber ? ` · Org.nr. ${settings.orgNumber}` : ""}
          </p>
          <p className="flex gap-4">
            <Link className="hover:text-wood" href="/personvern">
              Personvern
            </Link>
            {/* Plain anchor: the Studio has its own root layout, so a full
                document load is what we want here. */}
            <a className="hover:text-wood" href="/studio">
              Redigér innhold
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
