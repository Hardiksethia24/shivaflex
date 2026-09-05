"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "/products", label: "Products" },
  { href: "/about-quality", label: "About Us" },
  { href: "/dealers", label: "Dealers" },
  { href: "/contact", label: "Contact Us" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Utility Bar */}
      <div className="bg-[#111827] py-2 px-4 text-slate-300 text-xs sm:text-sm border-b border-slate-800">
        <div className="container-site flex items-center justify-between">
          <span className="font-medium tracking-wide text-slate-300">
            Shivom Rubber Products (P) Ltd.
          </span>
          <a
            href="tel:+919414139280"
            className="flex items-center gap-1.5 font-semibold text-slate-200 hover:text-orange-400 transition"
          >
            <svg
              className="h-3.5 w-3.5 text-orange-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
            </svg>
            +91 9414139280
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="container-site flex min-h-[76px] items-center justify-between gap-5 py-3">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                className="text-sm font-bold tracking-wide text-slate-700 transition hover:text-orange-600"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            className="hidden items-center justify-center rounded-full bg-orange-500 px-6 py-2.5 text-sm font-bold text-white shadow-sm transition duration-150 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 lg:inline-flex"
            href="/contact#rfq"
          >
            Request a Quote
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-md border border-slate-300 text-slate-800 hover:border-slate-400 lg:hidden"
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            <span className="text-xl">☰</span>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {open && (
          <nav className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden" aria-label="Mobile navigation">
            <div className="container-site grid gap-1">
              {links.map((link) => (
                <Link
                  onClick={() => setOpen(false)}
                  key={link.href}
                  className="rounded-lg px-3 py-3 font-semibold text-slate-800 hover:bg-mist"
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-orange-500 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-orange-600"
                href="/contact#rfq"
              >
                Request a Quote
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
