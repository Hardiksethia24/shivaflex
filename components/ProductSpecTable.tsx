"use client";

import { useRouter } from "next/navigation";
import { specTables, SpecTable } from "@/lib/product-specs";

type ProductSpecTableProps = {
  familySlug: string;
  variantSlug?: string;
  productName: string;
  variantName?: string;
};

import { findSpecTable } from "@/lib/spec-helpers";
export { findSpecTable };

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

function isRealValue(val: unknown): boolean {
  if (val === undefined || val === null) return false;
  const str = String(val).trim();
  if (str === "" || str === "—" || str === "-") return false;
  return true;
}

export function ProductSpecTable({
  familySlug,
  variantSlug,
  productName,
  variantName,
}: ProductSpecTableProps) {
  const router = useRouter();
  const table = findSpecTable(familySlug, variantSlug);

  // If no entry exists in specTables: show only the line "Specifications on request" without a button
  if (!table) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
        <p className="font-display text-base sm:text-lg uppercase text-ink">
          Specifications on request
        </p>
      </div>
    );
  }

  // Filter rows and columns with real values
  const validRows = table.rows.filter((row) =>
    table.columns.some((col) => isRealValue(row[col.key]))
  );

  const validColumns = table.columns.filter((col) =>
    validRows.some((row) => isRealValue(row[col.key]))
  );

  if (validRows.length === 0 || validColumns.length === 0) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
        <p className="font-display text-base sm:text-lg uppercase text-ink">
          Specifications on request
        </p>
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
    <div className="w-full max-w-full min-w-0 rounded-xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm">
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
      <div className="relative mt-4 w-full max-w-full min-w-0 overflow-hidden rounded-lg border border-slate-200">
        <div className="w-full max-w-full overflow-x-auto">
          <table className="w-full min-w-[540px] border-collapse text-left font-sans text-xs sm:text-sm">
            <caption className="sr-only">{table.title}</caption>
            <thead>
              <tr className="bg-[#084091]/[0.08] text-[#084091]">
                {validColumns.map((col, idx) => {
                  const isFirst = idx === 0;
                  return (
                    <th
                      key={col.key}
                      scope="col"
                      className={`px-3.5 py-3 align-bottom font-bold ${
                        isFirst
                          ? "sticky left-0 z-20 bg-[#F0F5FC] shadow-[1px_0_0_0_#cbd5e1]"
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
              {validRows.map((row, rIdx) => {
                const rowSize = extractRowSize(row);
                return (
                  <tr
                    key={rIdx}
                    onClick={() => handleRowClick(row)}
                    title={rowSize ? `Click to request quote for size ${rowSize}` : "Click to request quote"}
                    className="group cursor-pointer transition-colors duration-150 odd:bg-white even:bg-[#F5F8FC] hover:bg-orange-50/70"
                  >
                    {validColumns.map((col, cIdx) => {
                      const isFirst = cIdx === 0;
                      const val = row[col.key];
                      return (
                        <td
                          key={col.key}
                          className={`px-3.5 py-2.5 text-slate-700 tabular-nums ${
                            isFirst
                              ? "sticky left-0 z-10 font-semibold text-ink bg-white group-odd:bg-white group-even:bg-[#F5F8FC] group-hover:bg-[#fff7ed] shadow-[1px_0_0_0_#e2e8f0]"
                              : ""
                          }`}
                        >
                          {isRealValue(val) ? String(val) : "—"}
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
