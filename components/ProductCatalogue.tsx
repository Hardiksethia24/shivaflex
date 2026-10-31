"use client";

import { useMemo, useState } from "react";
import { applications, productFamilyNames, products } from "@/lib/products";
import { ProductCard } from "./ProductCard";

export function ProductCatalogue({
  initialApplication = "",
}: {
  initialApplication?: string;
}) {
  const [application, setApplication] = useState(initialApplication);
  const [family, setFamily] = useState("");

  const shown = useMemo(() => {
    return products.filter((product) => {
      const matchApp = !application || product.applications.includes(application);
      const matchFamily = !family || product.name === family;
      return matchApp && matchFamily;
    });
  }, [application, family]);

  return (
    <>
      <div className="grid gap-4 border border-slate-200 bg-mist p-4 sm:grid-cols-2">
        <label className="text-sm font-bold text-ink">
          Application
          <select
            value={application}
            onChange={(e) => setApplication(e.target.value)}
            className="field mt-1.5"
          >
            <option value="">All applications</option>
            {applications.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm font-bold text-ink">
          Product family
          <select
            value={family}
            onChange={(e) => setFamily(e.target.value)}
            className="field mt-1.5"
          >
            <option value="">All product families</option>
            {productFamilyNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-slate-500">
          Showing {shown.length} product {shown.length === 1 ? "family" : "families"}
        </p>
        {(application || family) && (
          <button
            type="button"
            onClick={() => {
              setApplication("");
              setFamily("");
            }}
            className="text-xs font-semibold text-brand hover:underline"
          >
            Reset filters
          </button>
        )}
      </div>

      <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      {shown.length === 0 && (
        <div className="mt-8 border border-dashed border-slate-300 p-8 text-center text-slate-600">
          <p>No matching product families found for your current filter.</p>
          <a className="mt-2 inline-block font-bold text-brand underline" href="/contact#rfq">
            Ask our sales team for a custom recommendation →
          </a>
        </div>
      )}
    </>
  );
}
