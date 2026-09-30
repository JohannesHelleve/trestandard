import "../globals.css";

/**
 * Root layout for the embedded Sanity Studio. It deliberately skips the
 * marketing chrome — the Studio renders its own full-page UI.
 */
export const metadata = {
  title: "Trestandard Studio",
  robots: { index: false, follow: false },
};

export default function StudioRootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nb" className="h-full">
      <body className="h-full">{children}</body>
    </html>
  );
}
