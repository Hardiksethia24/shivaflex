"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { Logo } from "./Logo";

type NavFamily = {
  name: string;
  href: string;
  variants?: { name: string; href: string }[];
};

const productFamiliesNav: NavFamily[] = [
  {
    name: "Garden Pipe",
    href: "/products/garden-pipe",
    variants: [
      { name: "Transparent", href: "/products/garden-pipe?variant=transparent" },
      { name: "Garden Foam", href: "/products/garden-pipe?variant=garden-foam" },
      { name: "Transparent Zebra", href: "/products/garden-pipe?variant=transparent-zebra" },
      { name: "Shiva Gold", href: "/products/garden-pipe?variant=shiva-gold" },
      { name: "Nylon", href: "/products/garden-pipe?variant=nylon" },
    ],
  },
  {
    name: "Power Spray Hose",
    href: "/products/power-spray-hose",
  },
  {
    name: "Braided Hose",
    href: "/products/braided-hose",
    variants: [
      { name: "8mm Braided", href: "/products/braided-hose?variant=8mm-braided" },
      { name: "Coloured Braided", href: "/products/braided-hose?variant=coloured-braided" },
      { name: "Water Braided", href: "/products/braided-hose?variant=water-braided" },
      { name: "Braided AC Drainage", href: "/products/braided-hose?variant=braided-ac-drainage" },
    ],
  },
  {
    name: "Delivery Pipe",
    href: "/products/delivery-pipe",
  },
  {
    name: "25 mm Pneumatic Hose",
    href: "/products/25mm-pneumatic-hose",
  },
  {
    name: "Suction Pipe",
    href: "/products/suction-pipe",
    variants: [
      { name: "Medium Duty", href: "/products/suction-pipe?variant=medium-duty" },
      { name: "Heavy Duty", href: "/products/suction-pipe?variant=heavy-duty" },
      { name: "Type 3", href: "/products/suction-pipe?variant=type-3" },
    ],
  },
  {
    name: "Super Car Washing Hose",
    href: "/products/super-car-washing-hose",
    variants: [
      { name: "10mm", href: "/products/super-car-washing-hose?variant=10mm" },
      { name: "12mm", href: "/products/super-car-washing-hose?variant=12mm" },
    ],
  },
  {
    name: "Thunder Steel Wire Hose",
    href: "/products/thunder-steel-wire-hose",
  },
  {
    name: "Duct Hose",
    href: "/products/duct-hose",
  },
  {
    name: "5 Layer Hose",
    href: "/products/5-layer-hose",
  },
  {
    name: "Rock Drill Hose",
    href: "/products/rock-drill-hose",
  },
];

export function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [expandedMobileFamilies, setExpandedMobileFamilies] = useState<Record<string, boolean>>({});
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredFamily, setHoveredFamily] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
      setHoveredFamily(null);
    }, 150);
  };

  const toggleMobileFamily = (familyName: string) => {
    setExpandedMobileFamilies((prev) => ({
      ...prev,
      [familyName]: !prev[familyName],
    }));
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Top Utility Bar */}
      <div className="border-b border-slate-800 bg-[#111827] px-4 py-2 text-xs sm:text-sm text-slate-300">
        <div className="container-site flex items-center justify-between">
          <span className="font-medium tracking-wide text-slate-300">
            Shivom Rubber Products (P) Ltd.
          </span>
          <a
            href="tel:+919414139280"
            className="flex items-center gap-1.5 font-semibold text-slate-200 transition hover:text-orange-400"
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
            {/* Products with Hover Dropdown and Flyout Variants */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/products"
                className="flex items-center gap-1.5 py-2 text-sm font-bold tracking-wide text-slate-700 transition hover:text-orange-600"
              >
                Products
                <svg
                  className={`h-4 w-4 transition-transform duration-200 text-slate-400 ${
                    dropdownOpen ? "rotate-180 text-orange-600" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute left-0 top-full pt-2 w-[340px]">
                  <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-2xl ring-1 ring-black/5">
                    <div className="mb-2 flex items-center justify-between border-b border-slate-100 px-2 pb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        11 Product Families
                      </span>
                      <Link
                        href="/products"
                        onClick={() => setDropdownOpen(false)}
                        className="text-xs font-bold text-orange-600 hover:text-orange-700 hover:underline"
                      >
                        Browse all families →
                      </Link>
                    </div>

                    <div className="space-y-0.5">
                      {productFamiliesNav.map((family) => {
                        const hasVariants = Boolean(family.variants && family.variants.length > 0);
                        const isHovered = hoveredFamily === family.name;

                        return (
                          <div
                            key={family.name}
                            className="relative"
                            onMouseEnter={() => setHoveredFamily(family.name)}
                          >
                            <div className="group flex items-center justify-between rounded-md px-3 py-2 text-sm text-slate-700 transition hover:bg-orange-50 hover:text-orange-700">
                              <Link
                                href={family.href}
                                onClick={() => setDropdownOpen(false)}
                                className="flex-1 font-medium group-hover:font-semibold"
                              >
                                {family.name}
                              </Link>
                              {hasVariants && (
                                <span className="ml-2 flex items-center gap-1 text-[11px] font-semibold text-slate-400 group-hover:text-orange-600">
                                  <span>{family.variants!.length}</span>
                                  <span className="text-xs">›</span>
                                </span>
                              )}
                            </div>

                            {/* Flyout Submenu for Variants */}
                            {hasVariants && isHovered && (
                              <div
                                className="absolute left-full top-0 ml-1.5 w-[230px] rounded-xl border border-slate-200 bg-white p-2.5 shadow-2xl ring-1 ring-black/5"
                                onMouseEnter={() => setHoveredFamily(family.name)}
                              >
                                <div className="mb-1.5 border-b border-slate-100 px-2 pb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                  {family.name} Variants
                                </div>
                                <div className="space-y-0.5">
                                  {family.variants!.map((v) => (
                                    <Link
                                      key={v.name}
                                      href={v.href}
                                      onClick={() => setDropdownOpen(false)}
                                      className="flex items-center justify-between rounded px-2.5 py-1.5 text-xs text-slate-700 transition hover:bg-orange-50 hover:text-orange-700"
                                    >
                                      <span className="font-medium">{v.name}</span>
                                      <span className="text-slate-300">→</span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              className="text-sm font-bold tracking-wide text-slate-700 transition hover:text-orange-600"
              href="/about-quality"
            >
              About Us
            </Link>

            <Link
              className="text-sm font-bold tracking-wide text-slate-700 transition hover:text-orange-600"
              href="/dealers"
            >
              Dealers
            </Link>

            <Link
              className="text-sm font-bold tracking-wide text-slate-700 transition hover:text-orange-600"
              href="/contact"
            >
              Contact Us
            </Link>
          </nav>

          <Link
            className="hidden items-center justify-center rounded-full bg-orange-500 px-6 py-2.5 text-sm font-bold text-white shadow-sm transition duration-150 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 lg:inline-flex"
            href="/contact#rfq"
          >
            Request a Quote
          </Link>

          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="grid h-10 w-10 place-items-center rounded-md border border-slate-300 text-slate-800 hover:border-slate-400 lg:hidden"
            aria-expanded={mobileNavOpen}
            aria-label="Toggle navigation"
          >
            <span className="text-xl">☰</span>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileNavOpen && (
          <nav className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden" aria-label="Mobile navigation">
            <div className="container-site grid gap-1">
              <div>
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-3 font-semibold text-slate-800 hover:bg-mist"
                >
                  <span>Products (11 Families)</span>
                  <span className="text-xs text-slate-500">
                    {mobileProductsOpen ? "▲" : "▼"}
                  </span>
                </button>
                {mobileProductsOpen && (
                  <div className="ml-3 mt-1 space-y-1 border-l-2 border-orange-200 pl-3">
                    <Link
                      onClick={() => setMobileNavOpen(false)}
                      className="block py-1.5 text-sm font-bold text-orange-600 hover:underline"
                      href="/products"
                    >
                      All 11 Families Overview →
                    </Link>
                    {productFamiliesNav.map((family) => {
                      const hasVariants = Boolean(family.variants && family.variants.length > 0);
                      const isExpanded = Boolean(expandedMobileFamilies[family.name]);

                      return (
                        <div key={family.name} className="py-1">
                          <div className="flex items-center justify-between">
                            <Link
                              onClick={() => setMobileNavOpen(false)}
                              className="text-sm font-medium text-slate-700 hover:text-orange-600"
                              href={family.href}
                            >
                              {family.name}
                            </Link>
                            {hasVariants && (
                              <button
                                type="button"
                                onClick={() => toggleMobileFamily(family.name)}
                                className="px-2 py-0.5 text-xs text-slate-400 hover:text-orange-600"
                                aria-label={`Toggle ${family.name} variants`}
                              >
                                {isExpanded ? "▲" : "▼"}
                              </button>
                            )}
                          </div>
                          {hasVariants && isExpanded && (
                            <div className="ml-3 mt-1 space-y-1 border-l border-slate-200 pl-2">
                              {family.variants!.map((v) => (
                                <Link
                                  key={v.name}
                                  onClick={() => setMobileNavOpen(false)}
                                  className="block py-1 text-xs text-slate-600 hover:text-orange-600"
                                  href={v.href}
                                >
                                  • {v.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link
                onClick={() => setMobileNavOpen(false)}
                className="rounded-lg px-3 py-3 font-semibold text-slate-800 hover:bg-mist"
                href="/about-quality"
              >
                About Us
              </Link>
              <Link
                onClick={() => setMobileNavOpen(false)}
                className="rounded-lg px-3 py-3 font-semibold text-slate-800 hover:bg-mist"
                href="/dealers"
              >
                Dealers
              </Link>
              <Link
                onClick={() => setMobileNavOpen(false)}
                className="rounded-lg px-3 py-3 font-semibold text-slate-800 hover:bg-mist"
                href="/contact"
              >
                Contact Us
              </Link>
              <Link
                onClick={() => setMobileNavOpen(false)}
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
