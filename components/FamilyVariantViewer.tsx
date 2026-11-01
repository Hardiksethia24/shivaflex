"use client";

import { useState, useTransition, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { ProductImage } from "./ProductImage";
import { ProductSpecTable } from "./ProductSpecTable";
import { findSpecTable } from "@/lib/spec-helpers";

export function FamilyVariantViewer({ family }: { family: Product }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const variants = family.variants || [];
  const variantLabel = family.variantLabel || "Variants";
  const itemLabel = variantLabel === "Sizes" ? "Size" : "Variant";

  // URL query parameter for active variant (e.g. ?variant=heavy-duty)
  const variantParam = searchParams.get("variant");

  // Determine initial selected index from URL parameter
  const getIndexFromParam = (param: string | null): number => {
    if (!param) return 0;
    const match = variants.findIndex(
      (v) =>
        v.slug.toLowerCase() === param.toLowerCase() ||
        v.name.toLowerCase() === param.toLowerCase()
    );
    return match >= 0 ? match : 0;
  };

  const [selectedIndex, setSelectedIndex] = useState<number>(() =>
    getIndexFromParam(variantParam)
  );

  // Sync state if URL changes externally (e.g. back/forward navigation)
  useEffect(() => {
    const idx = getIndexFromParam(variantParam);
    setSelectedIndex(idx);
  }, [variantParam]);

  // Handle user clicking a variant chip/tab
  const handleSelectVariant = (index: number) => {
    setSelectedIndex(index);
    const selected = variants[index];
    if (!selected) return;

    startTransition(() => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("variant", selected.slug);
      router.replace(`?${params.toString()}`, { scroll: false });
    });
  };

  const activeVariant = variants[selectedIndex] || variants[0];
  if (!activeVariant) return null;

  const isGardenPipe = family.slug === "garden-pipe";
  const activeHasSpecTable = Boolean(findSpecTable(family.slug, activeVariant.slug));

  return (
    <div className="w-full max-w-full min-w-0 space-y-10">
      {/* Garden Pipe Main Family Specification Table (shows once on main page) */}
      {isGardenPipe && (
        <div className="w-full max-w-full min-w-0">
          <ProductSpecTable
            familySlug="garden-pipe"
            productName={family.name}
          />
        </div>
      )}

      {/* Variant Selector Tabs / Cards */}
      <div className="w-full max-w-full min-w-0">
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold uppercase tracking-wider text-brand">
            Select {itemLabel} ({variants.length} available)
          </p>
          <span className="text-xs text-slate-500 hidden sm:inline">
            Click to view specifications & imagery
          </span>
        </div>

        {/* Responsive Variant Chips: clean 2-column grid on mobile with min 44px tap targets */}
        <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {variants.map((variant, index) => {
            const isSelected = index === selectedIndex;
            return (
              <button
                key={variant.slug}
                type="button"
                onClick={() => handleSelectVariant(index)}
                className={`group relative flex min-h-[44px] flex-col items-start justify-center rounded-lg border p-3 text-left transition duration-150 ${
                  isSelected
                    ? "border-orange-500 bg-orange-50/50 shadow-sm ring-2 ring-orange-500/20"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                }`}
                aria-pressed={isSelected}
              >
                <div className="flex w-full items-center justify-between">
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider ${
                      isSelected ? "text-orange-600" : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  >
                    {itemLabel} {index + 1}
                  </span>
                  {isSelected && (
                    <span className="h-2 w-2 rounded-full bg-orange-500" aria-hidden="true" />
                  )}
                </div>
                <span
                  className={`mt-1 font-display text-sm sm:text-base font-bold uppercase leading-snug ${
                    isSelected ? "text-ink" : "text-slate-700"
                  }`}
                >
                  {variant.name}
                </span>
                {variant.sizes && (
                  <span className="mt-1 inline-block rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-semibold text-slate-600">
                    {variant.sizes}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Variant Showcase */}
      <div className="w-full max-w-full min-w-0 rounded-xl border border-slate-200 bg-white p-4 sm:p-6 md:p-8 shadow-sm">
        <div className="grid min-w-0 gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Left Column: Image & Overview */}
          <div className="min-w-0">
            <div className="relative aspect-[16/11] w-full overflow-hidden bg-white flex items-center justify-center">
              <ProductImage
                key={activeVariant.image}
                src={activeVariant.image}
                alt={`${family.name} — ${activeVariant.name} variant coil, flexible PVC`}
                className="transition duration-300 hover:scale-102"
              />
            </div>

            <div className="mt-6">
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-orange-700">
                {activeVariant.name}
              </span>
              <h2 className="mt-3 font-display text-2xl uppercase text-ink sm:text-3xl">
                {family.name} — {activeVariant.name}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                {activeVariant.short || family.short}
              </p>

              {/* Key Features for Variant */}
              <div className="mt-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-brand">
                  Key Specifications & Highlights
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {(activeVariant.features || family.features).map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <span className="font-bold text-orange-500">—</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`/contact?product=${encodeURIComponent(family.name)}&variant=${encodeURIComponent(
                    activeVariant.name
                  )}#rfq`}
                  className="btn-primary text-xs sm:text-sm"
                >
                  Request this product
                </Link>
                <a
                  className="btn-secondary text-xs sm:text-sm"
                  href={`/spec-sheets/${family.slug}-${activeVariant.slug}.pdf`}
                  aria-label={`Download ${family.name} ${activeVariant.name} spec sheet`}
                >
                  Download spec sheet <span className="ml-1 text-xs">[PDF]</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Spec Table & Applications */}
          <div className="flex min-w-0 flex-col justify-between gap-8">
            <div className="min-w-0">
              <p className="eyebrow">Specifications</p>

              {/* Spec Table strictly rendered from product-specs.ts */}
              <div className="mt-3 min-w-0">
                <ProductSpecTable
                  familySlug={family.slug}
                  variantSlug={activeVariant.slug}
                  productName={family.name}
                  variantName={activeVariant.name}
                />
              </div>

              {/* Applications Badges */}
              <div className="mt-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Recommended Applications
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(activeVariant.applications || family.applications).map((app) => (
                    <span
                      key={app}
                      className="rounded-full bg-[#E7F1F7] px-3 py-1 text-xs font-semibold text-brand"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Inquire Box: Only show if the active variant has a spec table to avoid duplicate RFQ blocks */}
            {activeHasSpecTable && (
              <div className="rounded-lg border border-brand/20 bg-mist p-5 sm:p-6">
                <h4 className="font-display text-lg uppercase text-ink">
                  Need a custom size, length, or pressure rating?
                </h4>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                  Shivom Rubber Products manufactures to your operational parameters across India.
                </p>
                <Link
                  href={`/contact?product=${encodeURIComponent(family.name)}&variant=${encodeURIComponent(
                    activeVariant.name
                  )}#rfq`}
                  className="btn-primary mt-4 inline-flex text-xs sm:text-sm"
                >
                  Request this product
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
