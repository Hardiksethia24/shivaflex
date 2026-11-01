import type { Product, ProductVariant } from "@/lib/products";

type SpecTableProps = {
  product?: Product;
  variant?: ProductVariant;
  parentFamily?: Product;
};

export function SpecTable({ product, variant, parentFamily }: SpecTableProps) {
  const current = variant || product;
  if (!current) return null;

  const applications =
    current.applications && current.applications.length > 0
      ? current.applications
      : parentFamily?.applications || [];

  const features =
    current.features && current.features.length > 0
      ? current.features
      : parentFamily?.features || [];

  const specs: [string, string][] = [
    ["Available Sizes", current.sizes || ""],
    ["Working Pressure", current.workingPressure || ""],
    ["Bursting Pressure", current.burstingPressure || ""],
    ["Applications", applications.length > 0 ? applications.join(", ") : ""],
    ["Key Features", features.length > 0 ? features.join("; ") : ""],
  ].filter(([_, value]) => Boolean(value && value.trim() !== "" && value !== "—")) as [string, string][];

  if (specs.length === 0) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
        <p className="font-display text-base sm:text-lg uppercase text-ink">
          Specifications on request
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden border border-slate-200 bg-white">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">Specifications for {current.name}</caption>
        <tbody>
          {specs.map(([label, value]) => (
            <tr key={label} className="border-b border-slate-200 last:border-0">
              <th scope="row" className="w-2/5 bg-mist px-4 py-3.5 font-bold text-ink align-top">
                {label}
              </th>
              <td className="px-4 py-3.5 text-slate-600">
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
