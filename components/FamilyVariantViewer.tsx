"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { Product, ProductVariant } from "@/lib/products";
import { ProductImage } from "./ProductImage";
import { ProductSpecTable } from "./ProductSpecTable";

function mapVariantSlug(slug: string | null): string | null {
  if (!slug) return null;
  if (slug === "type-1") return "medium-duty";
  if (slug === "type-2") return "heavy-duty";
  return slug;
}

export function FamilyVariantViewer({ family }: { family: Product }) {
  const searchParams = useSearchParams();
  const variants = family.variants || [];

  // Map legacy slugs (type-1, type-2) to the new ones (medium-duty, heavy-duty)
  const initialSlug = mapVariantSlug(searchParams.get("variant"));
  const initialIndex = variants.findIndex((v) => v.slug === initialSlug);
  const [selectedIndex, setSelectedIndex] = useState(initialIndex >= 0 ? initialIndex : 0);

  useEffect(() => {
    const slug = mapVariantSlug(searchParams.get("variant"));
    if (slug) {
      const idx = variants.findIndex((v) => v.slug === slug);
      if (idx >= 0) setSelectedIndex(idx);
    }
  }, [searchParams, variants]);

  const activeVariant: ProductVariant | undefined = variants[selectedIndex] || variants[0];
  if (!activeVariant) return null;

  const variantLabel = family.variantLabel || "Variant";
  const isGardenPipe = family.slug === "garden-pipe";

  return (
    <div className="space-y-10">
      {/* Garden Pipe Main Family Specification Table (shows once on main page) */}
      {isGardenPipe && (
        <div>
          <ProductSpecTable
            familySlug="garden-pipe"
            productName={family.name}
          />
        </div>
      )}

      {/* Variant Selector Tabs / Cards */}
      <div>
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold uppercase tracking-wider text-brand">
            Select {variantLabel} ({variants.length} available)
          </p>
          <span className="text-xs text-slate-500">
            Click to view specifications & imagery
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {variants.map((variant, index) => {
            const isSelected = index === selectedIndex;
            return (
              <button
                key={variant.slug}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`group relative flex flex-col items-start rounded-lg border p-3.5 text-left transition duration-150 ${
                  isSelected
                    ? "border-orange-500 bg-orange-50/50 shadow-sm ring-2 ring-orange-500/20"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                }`}
                aria-pressed={isSelected}
              >
                <div className="flex w-full items-center justify-between">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${
                      isSelected ? "text-orange-600" : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  >
                    {variantLabel} {index + 1}
                  </span>
                  {isSelected && (
                    <span className="h-2 w-2 rounded-full bg-orange-500" aria-hidden="true" />
                  )}
                </div>
                <span
                  className={`mt-1 font-display text-base font-bold uppercase leading-snug sm:text-lg ${
                    isSelected ? "text-ink" : "text-slate-700"
                  }`}
                >
                  {variant.name}
                </span>
                {variant.sizes && (
                  <span className="mt-1 inline-block rounded bg-slate-100 px-1.5 py-0.5 text-[11px] font-semibold text-slate-600">
                    {variant.sizes}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Variant Showcase */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left Column: Image & Overview */}
          <div>
            <div className="relative aspect-[16/11] overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-inner">
              <ProductImage
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
                  Variant Features
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
                  className="btn-primary"
                >
                  Request This {variantLabel}
                </Link>
                <a
                  className="btn-secondary"
                  href={`/spec-sheets/${family.slug}-${activeVariant.slug}.pdf`}
                  aria-label={`Download ${family.name} ${activeVariant.name} spec sheet`}
                >
                  Download spec sheet <span className="ml-1 text-xs">[PDF]</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Spec Table & Applications */}
          <div className="flex flex-col justify-between gap-8">
            <div>
              <p className="eyebrow">Specifications</p>

              {/* Spec Table strictly rendered from product-specs.ts */}
              <div className="mt-3">
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

            {/* Direct Inquire Box */}
            <div className="rounded-lg border border-brand/20 bg-mist p-6">
              <h4 className="font-display text-lg uppercase text-ink">
                Need a specific length, custom fitting, or custom requirement?
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Shivom Rubber Products manufactures to your operational parameters across India.
              </p>
              <Link
                href={`/contact?product=${encodeURIComponent(family.name)}&variant=${encodeURIComponent(
                  activeVariant.name
                )}#rfq`}
                className="btn-primary mt-4 inline-flex text-xs"
              >
                Inquire About {activeVariant.name}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
