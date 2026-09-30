import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <div className="mx-auto max-w-3xl px-6 py-section text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-4xl sm:text-5xl">Siden finnes ikke</h1>
        <p className="mt-6 text-lg text-ink-soft">
          Lenken kan være utdatert, eller så har vi flyttet innholdet.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-wood"
        >
          Til forsiden
        </Link>
      </div>
    </section>
  );
}
