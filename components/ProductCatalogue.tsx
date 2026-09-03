"use client";

import { useMemo, useState } from "react";
import { applications, productFamilies, products } from "@/lib/products";
import { ProductCard } from "./ProductCard";

export function ProductCatalogue({ initialApplication = "" }: { initialApplication?: string }) {
  const [application, setApplication] = useState(initialApplication); const [family, setFamily] = useState("");
  const shown = useMemo(() => products.filter((product) => (!application || product.applications.includes(application)) && (!family || product.family === family)), [application, family]);
  return <><div className="grid gap-4 border border-slate-200 bg-mist p-4 sm:grid-cols-2"><label className="text-sm font-bold">Application<select value={application} onChange={(e) => setApplication(e.target.value)} className="field"><option value="">All applications</option>{applications.map((item) => <option key={item}>{item}</option>)}</select></label><label className="text-sm font-bold">Product type<select value={family} onChange={(e) => setFamily(e.target.value)} className="field"><option value="">All product types</option>{productFamilies.map((item) => <option key={item}>{item}</option>)}</select></label></div><p className="mt-6 text-sm text-slate-500">Showing {shown.length} product{shown.length === 1 ? "" : "s"}</p><div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{shown.map((product) => <ProductCard key={product.slug} product={product} />)}</div>{shown.length === 0 && <p className="mt-8 border border-dashed border-slate-300 p-8 text-center text-slate-600">No matching products yet. <a className="font-bold text-brand underline" href="/contact#rfq">Ask our sales team for a recommendation.</a></p>}</>;
}
