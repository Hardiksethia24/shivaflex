import type { Product } from "@/lib/products";

export function SpecTable({ product }: { product: Product }) {
  const specs = [
    ["Available Sizes", product.sizes],
    ["Working Pressure", product.workingPressure],
    ["Bursting Pressure", product.burstingPressure],
    ["Applications", product.applications.join(", ")],
    ["Key Features", product.features.join("; ")],
  ];

  return (
    <div className="overflow-hidden border border-slate-200 bg-white">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">Specifications for {product.name}</caption>
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
