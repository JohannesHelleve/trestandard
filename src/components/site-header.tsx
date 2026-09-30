"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/vi-tilbyr", label: "Vi tilbyr" },
  { href: "/referanseprosjekter", label: "Referanseprosjekter" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/samfunnsansvar", label: "Samfunnsansvar" },
  { href: "/karriere", label: "Karriere" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader({ phone }: { phone?: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever navigation happens.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link
          href="/"
          className="font-serif text-xl tracking-tight text-ink sm:text-2xl"
        >
          Trestandard
          <span className="ml-1 align-super text-[0.55em] text-ink-faint">AS</span>
        </Link>

        <nav className="hidden lg:block" aria-label="Hovedmeny">
          <ul className="flex items-center gap-7">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`text-[0.8rem] font-medium uppercase tracking-[0.12em] transition-colors hover:text-wood ${
                      active ? "text-wood" : "text-ink-soft"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {phone ? (
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="hidden rounded-full bg-ink px-5 py-2 text-sm font-medium text-paper transition-colors hover:bg-wood sm:inline-block"
            >
              {phone}
            </a>
          ) : null}

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobilmeny"
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink lg:hidden"
          >
            {open ? "Lukk" : "Meny"}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobilmeny"
          aria-label="Hovedmeny"
          className="border-t border-line bg-paper lg:hidden"
        >
          <ul className="mx-auto max-w-6xl px-6 py-3">
            {NAV.map((item) => (
              <li key={item.href} className="border-b border-line/60 last:border-0">
                <Link
                  href={item.href}
                  className="block py-3 text-sm font-medium uppercase tracking-[0.12em] text-ink-soft"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
