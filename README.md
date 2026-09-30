# Trestandard AS

Nettsted for Trestandard AS — entreprenør i Oslo siden 1946.

- **Rammeverk:** Next.js 16 (App Router, Turbopack) + React 19 + Tailwind CSS 4
- **CMS:** Sanity, med Studio innebygd på `/studio`
- **Hosting:** Vercel

## Kom i gang

```bash
npm install
cp .env.example .env.local   # fyll inn verdiene under
npm run dev
```

Nettstedet kjører på http://localhost:3000, og Studio på http://localhost:3000/studio.

## Miljøvariabler

| Variabel | Påkrevd | Beskrivelse |
| --- | --- | --- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | nei\* | Prosjekt-ID fra sanity.io/manage |
| `NEXT_PUBLIC_SANITY_DATASET` | nei | Standard `production` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | nei | Standard `2024-10-01` |
| `SANITY_REVALIDATE_SECRET` | nei | Delt hemmelighet for publiseringswebhooken |
| `NEXT_PUBLIC_SITE_URL` | nei | Kanonisk domene for `sitemap.xml` og `robots.txt` |

\* Uten prosjekt-ID rendrer nettstedet det innebygde innholdet i
`src/content/seed.ts`. Det gjør at siden alltid bygger og alltid viser noe,
også før CMS-et er fylt ut. Så snart en `NEXT_PUBLIC_SANITY_PROJECT_ID` er satt
og dokumentene finnes, overstyrer Sanity-innholdet dette felt for felt.

## Innholdsmodell

| Dokumenttype | Bruk |
| --- | --- |
| `siteSettings` | Firmanavn, kontaktinfo, adresse, sosiale medier (singleton) |
| `page` | Tekstinnhold for de faste sidene. Slug må være én av `forside`, `vi-tilbyr`, `om-oss`, `samfunnsansvar`, `karriere`, `kontakt` |
| `service` | Tjenestene under «Vi tilbyr» |
| `project` | Referanseprosjekter, med egen underside per prosjekt |
| `jobPosting` | Stillingsannonser på karrieresiden |

## Revalidering

`/api/revalidate` tar imot webhooks fra Sanity og tømmer bare de cache-taggene
dokumentet påvirker. Sett opp i Sanity under **Manage → API → Webhooks**:

- URL: `https://<domene>/api/revalidate`
- Dataset: `production`
- Trigger: create, update, delete
- Secret: samme verdi som `SANITY_REVALIDATE_SECRET`
- Filter: `_type in ["siteSettings","page","service","project","jobPosting"]`

## Kommandoer

```bash
npm run dev      # utviklingsserver
npm run build    # produksjonsbygg
npm run start    # kjør produksjonsbygget lokalt
npm run lint     # eslint
```
