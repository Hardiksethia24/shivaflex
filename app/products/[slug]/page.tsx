import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { FamilyVariantViewer } from "@/components/FamilyVariantViewer";
import { ProductImage } from "@/components/ProductImage";
import { SpecTable } from "@/components/SpecTable";
import { products, getProduct } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return {
    title: product ? `${product.name} | Shivaflex` : "Product Not Found",
    description: product?.short,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const hasVariants = Boolean(product.variants && product.variants.length > 0);

  return (
    <main>
      {/* Hero / Header Section */}
      <section className="border-b border-slate-200 bg-mist">
        <div className="container-site grid gap-10 py-12 lg:grid-cols-2 lg:py-16">
          <div>
            <div className="flex items-center gap-2">
              <Link href="/products" className="text-xs font-semibold text-slate-500 hover:text-brand">
                Products
              </Link>
              <span className="text-xs text-slate-400">/</span>
              <p className="eyebrow !m-0">
                {hasVariants ? `Product Family · ${product.variants!.length} ${product.variantLabel || "Variants"}` : "Industrial Hose"}
              </p>
            </div>
            <h1 className="section-title mt-2">{product.name}</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              {product.short}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/contact?product=${encodeURIComponent(product.name)}#rfq`}
                className="btn-primary"
              >
                Request This Product
              </Link>
              <a
                className="btn-secondary"
                href={`/spec-sheets/${product.slug}.pdf`}
                aria-label={`Download ${product.name} spec sheet`}
              >
                Download spec sheet <span className="ml-1 text-xs">[PDF]</span>
              </a>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              [TODO: add approved product spec-sheet PDF at /public/spec-sheets/{product.slug}.pdf]
            </p>
          </div>

          <div className="relative min-h-72 overflow-hidden rounded-lg bg-slate-200 shadow-card">
            <ProductImage src={product.image} alt={`${product.name} product photo`} />
            <span className="absolute bottom-2 right-2 rounded bg-black/60 px-2 py-0.5 text-[10px] text-white">
              Slot: {product.image}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container-site">
          {hasVariants ? (
            /* Variant Family View: Selectable cards / tabs with image slot and spec table */
            <Suspense fallback={<div className="py-12 text-center text-slate-500">Loading variant viewer…</div>}>
              <FamilyVariantViewer family={product} />
            </Suspense>
          ) : (
            /* Single-Product Family View: Normal product page */
            <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
              <div>
                <p className="eyebrow">Product Overview</p>
                <h2 className="section-title">Key Features</h2>
                <ul className="mt-6 space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-slate-700">
                      <span className="font-bold text-brand">—</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="mt-10 font-display text-2xl uppercase text-ink">
                  Applications
                </h2>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {product.applications.map((application) => (
                    <li
                      key={application}
                      className="rounded-full bg-[#E7F1F7] px-3.5 py-1.5 text-sm font-semibold text-brand"
                    >
                      {application}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="eyebrow">Specification Summary</p>
                <h2 className="section-title">Available Configuration</h2>
                <div className="mt-6">
                  <SpecTable product={product} />
                </div>

                {/* RFQ Prompt Box */}
                <div className="mt-8 border border-brand/20 bg-mist p-6">
                  <h3 className="font-display text-xl uppercase text-ink">
                    Need a custom size, length, or pressure rating? Tell us your spec.
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Final configuration, material suitability and ratings must be confirmed with Shivaflex for your operating conditions. Fields marked [TODO: confirm spec] await client-confirmed product data.
                  </p>
                  <Link
                    href={`/contact?product=${encodeURIComponent(product.name)}#rfq`}
                    className="btn-primary mt-5 inline-flex"
                  >
                    Request This Product
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
