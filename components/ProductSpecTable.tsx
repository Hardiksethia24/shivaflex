"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { specTables, SpecTable } from "@/lib/product-specs";

type ProductSpecTableProps = {
  familySlug: string;
  variantSlug?: string;
  productName: string;
  variantName?: string;
};

// Map variant slugs, including backwards compatibility for type-1 / type-2
function normalizeVariantSlug(slug?: string): string | undefined {
  if (!slug) return undefined;
  if (slug === "type-1") return "medium-duty";
  if (slug === "type-2") return "heavy-duty";
  return slug;
}

// Find matching spec table strictly from product-specs.ts
export function findSpecTable(
  familySlug: string,
  variantSlug?: string
): SpecTable | undefined {
  const normFamily = (slug: string) => {
    if (slug === "25mm-pneumatic-hose") return "pneumatic-hose-25mm";
    return slug;
  };

  const targetFamily = normFamily(familySlug);
  const targetVariant = normalizeVariantSlug(variantSlug);

  // If a variant is specified:
  if (targetVariant) {
    // 1. Check for exact variant match (e.g. suction-pipe medium-duty, braided-hose water-braided)
    const exact = specTables.find(
      (t) => normFamily(t.family) === targetFamily && t.variant === targetVariant
    );
    if (exact) return exact;

    // 2. For Super Car Washing Hose, the single table covers both 10mm and 12mm sizes
    if (targetFamily === "super-car-washing-hose") {
      return specTables.find((t) => normFamily(t.family) === targetFamily);
    }

    // 3. For Garden Pipe, five variants explicitly have no spec table
    if (targetFamily === "garden-pipe") {
      return undefined;
    }

    return undefined;
  }

  // Family-level match (no variant specified):
  return specTables.find(
    (t) => normFamily(t.family) === targetFamily && !t.variant
  );
}

function getColourChipStyle(colour: string) {
  const c = colour.toLowerCase();
  if (c.includes("green")) return "#15803d";
  if (c.includes("black")) return "#0f172a";
  if (c.includes("yellow") || c.includes("golden")) return "#eab308";
  if (c.includes("blue")) return "#084091";
  return "#64748b";
}

function extractRowSize(row: Record<string, string | number>): string {
  if (row.inch && row.mm) {
    return `${row.inch}" (${row.mm} mm)`;
  }
  if (row.inch) return `${row.inch}"`;
  if (row.size) return `${row.size} mm`;
  if (row.mm) return `${row.mm} mm`;
  return "";
}

export function ProductSpecTable({
  familySlug,
  variantSlug,
  productName,
  variantName,
}: ProductSpecTableProps) {
  const router = useRouter();
  const table = findSpecTable(familySlug, variantSlug);

  // If no entry exists in specTables: show "Specifications on request" with "Request this product" button
  if (!table) {
    const quoteHref = `/contact?product=${encodeURIComponent(productName)}${
      variantName ? `&variant=${encodeURIComponent(variantName)}` : ""
    }#rfq`;

    return (
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
        <div>
          <p className="font-display text-lg uppercase text-ink">
            Specifications on request
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Custom lengths, pressure ratings, and fittings are built to your operational requirements.
          </p>
        </div>
        <Link href={quoteHref} className="btn-primary shrink-0 text-xs sm:text-sm">
          Request this product
        </Link>
      </div>
    );
  }

  const handleRowClick = (row: Record<string, string | number>) => {
    const size = extractRowSize(row);
    const params = new URLSearchParams();
    params.set("product", productName);
    if (variantName) params.set("variant", variantName);
    if (size) params.set("size", size);
    router.push(`/contact?${params.toString()}#rfq`);
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
      {/* Title & Colour Chip */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="font-display text-xl uppercase tracking-tight text-ink sm:text-2xl">
            {table.title}
          </h3>
          {table.colour && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: getColourChipStyle(table.colour) }}
                aria-hidden="true"
              />
              {table.colour}
            </span>
          )}
        </div>
        <span className="text-[11px] font-semibold text-brand hidden sm:inline-block">
          Click any row to request quote for that size →
        </span>
      </div>

      {/* Responsive Table Container: horizontal scroll inside, first column sticky */}
      <div className="relative mt-4 w-full overflow-hidden rounded-lg border border-slate-200">
        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[580px] border-collapse text-left font-sans text-xs sm:text-sm">
            <caption className="sr-only">{table.title}</caption>
            <thead>
              <tr className="bg-[#084091]/[0.08] text-[#084091]">
                {table.columns.map((col, idx) => {
                  const isFirst = idx === 0;
                  return (
                    <th
                      key={col.key}
                      scope="col"
                      className={`px-3.5 py-3 align-bottom font-bold ${
                        isFirst
                          ? "sticky left-0 z-20 bg-[#084091]/[0.08] backdrop-blur-md shadow-[1px_0_0_0_#cbd5e1]"
                          : ""
                      }`}
                    >
                      <div className="font-bold text-[#084091]">{col.label}</div>
                      {col.unit && (
                        <div className="mt-0.5 text-[10px] sm:text-[11px] font-normal text-slate-500">
                          {col.unit}
                        </div>
                      )}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {table.rows.map((row, rIdx) => {
                const rowSize = extractRowSize(row);
                return (
                  <tr
                    key={rIdx}
                    onClick={() => handleRowClick(row)}
                    title={rowSize ? `Click to request quote for size ${rowSize}` : "Click to request quote"}
                    className="group cursor-pointer transition-colors duration-150 odd:bg-white even:bg-[#F5F8FC] hover:bg-orange-50/70"
                  >
                    {table.columns.map((col, cIdx) => {
                      const isFirst = cIdx === 0;
                      const val = row[col.key];
                      return (
                        <td
                          key={col.key}
                          className={`px-3.5 py-2.5 text-slate-700 tabular-nums ${
                            isFirst
                              ? "sticky left-0 z-10 font-semibold text-ink group-odd:bg-white group-even:bg-[#F5F8FC] group-hover:bg-orange-50/70 shadow-[1px_0_0_0_#e2e8f0]"
                              : ""
                          }`}
                        >
                          {val !== undefined && val !== null ? String(val) : "—"}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <p className="mt-2 text-[11px] text-slate-400 sm:hidden">
        Swipe sideways to view all columns. Tap any row to request a quote.
      </p>
    </div>
  );
}
