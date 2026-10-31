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
    ["Available Sizes", current.sizes || "[TODO: confirm spec]"],
    ["Working Pressure", current.workingPressure || "[TODO: confirm spec]"],
    ["Bursting Pressure", current.burstingPressure || "[TODO: confirm spec]"],
    ["Applications", applications.length > 0 ? applications.join(", ") : "[TODO: confirm spec]"],
    ["Key Features", features.length > 0 ? features.join("; ") : "[TODO: confirm spec]"],
  ];

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
