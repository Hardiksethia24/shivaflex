import type { Metadata } from "next";
import { ProductCatalogue } from "@/components/ProductCatalogue";

export const metadata: Metadata = {
  title: "Industrial Hose Products | Shivaflex",
  description:
    "11 product families across garden, power spray, braided, delivery, pneumatic, suction, car washing, and specialty industrial lines. Filter by application to find the right spec — or browse everything below.",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ application?: string }>;
}) {
  const params = await searchParams;
  return (
    <main>
      <section className="border-b border-slate-200 bg-mist py-16">
        <div className="container-site">
          <p className="eyebrow">Product Catalogue</p>
          <h1 className="section-title">Industrial Hose Products</h1>
          <p className="mt-5 max-w-3xl text-lg leading-7 text-slate-600">
            11 product families across garden, power spray, braided, delivery, pneumatic, suction, car washing, and specialty industrial lines. Filter by application to find the right spec — or browse everything below.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-site">
          <ProductCatalogue initialApplication={params.application || ""} />
        </div>
      </section>
    </main>
  );
}
