import { NextStudio } from "next-sanity/studio";

import { sanityConfigured } from "@/sanity/env";
import config from "~/sanity.config";

export const dynamic = "force-static";

export default function StudioPage() {
  // Without a project id the Studio throws on mount, so show what to do instead.
  if (!sanityConfigured) {
    return (
      <div
        style={{
          fontFamily: "system-ui, sans-serif",
          maxWidth: "42rem",
          margin: "0 auto",
          padding: "4rem 1.5rem",
          lineHeight: 1.6,
        }}
      >
        <h1 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
          Studio er ikke konfigurert
        </h1>
        <p style={{ marginBottom: "1rem" }}>
          Miljøvariabelen <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> mangler.
          Nettstedet kjører i mellomtiden på innebygd innhold fra{" "}
          <code>src/content/seed.ts</code>.
        </p>
        <p>Slik kobler du til Sanity:</p>
        <ol style={{ paddingLeft: "1.25rem", marginTop: "0.5rem" }}>
          <li>
            Opprett et prosjekt på{" "}
            <a href="https://www.sanity.io/manage">sanity.io/manage</a>
          </li>
          <li>
            Sett <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> i Vercel og i{" "}
            <code>.env.local</code>
          </li>
          <li>Deploy på nytt</li>
        </ol>
      </div>
    );
  }

  return <NextStudio config={config} />;
}
