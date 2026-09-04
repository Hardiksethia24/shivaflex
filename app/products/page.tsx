import type { Metadata } from "next";
import { ProductCatalogue } from "@/components/ProductCatalogue";

export const metadata: Metadata = { title: "Industrial Hose Products", description: "Browse Shivaflex PVC suction, delivery, braided and specialty hose products by application." };

export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ application?: string }> }) {
  const params = await searchParams;
  return <main><section className="border-b border-slate-200 bg-mist py-16"><div className="container-site"><p className="eyebrow">Product catalogue</p><h1 className="section-title">Hoses selected for the job</h1><p className="mt-5 max-w-2xl leading-7 text-slate-600">Filter by application or construction type, then open a product page for the available specification summary and an RFQ path.</p></div></section><section className="py-16"><div className="container-site"><ProductCatalogue initialApplication={params.application || ""} /></div></section></main>;
}
