import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { FamilyVariantViewer } from "@/components/FamilyVariantViewer";
import { ProductImage } from "@/components/ProductImage";
import { ProductSpecTable } from "@/components/ProductSpecTable";
import { findSpecTable } from "@/lib/spec-helpers";
import { getProduct, products } from "@/lib/products";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | Shivaflex`,
    description: product.short,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const hasVariants = Boolean(product.variants && product.variants.length > 0);
  const hasSpecTable = Boolean(findSpecTable(product.slug));

  return (
    <main className="w-full max-w-full overflow-x-clip">
      {/* Product Hero Section */}
      <section className="border-b border-slate-200 bg-mist py-12 sm:py-16">
        <div className="container-site grid min-w-0 gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href="/products"
                className="text-xs font-bold uppercase tracking-wider text-brand hover:underline"
              >
                ← All Products
              </Link>
              <span className="text-xs text-slate-400">/</span>
              <p className="eyebrow">
                {hasVariants
                  ? `Product Family · ${product.variants!.length} ${product.variantLabel || "Variants"}`
                  : "Industrial Hose"}
              </p>
            </div>
            <h1 className="section-title mt-2">{product.name}</h1>
            <p className="mt-4 sm:mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-slate-600">
              {product.short}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={`/contact?product=${encodeURIComponent(product.name)}#rfq`}
                className="btn-primary text-xs sm:text-sm"
              >
                Request this product
              </Link>
              <a
                className="btn-secondary text-xs sm:text-sm"
                href={`/spec-sheets/${product.slug}.pdf`}
                aria-label={`Download ${product.name} spec sheet`}
              >
                Download spec sheet <span className="ml-1 text-xs">[PDF]</span>
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] sm:aspect-[16/11] min-h-72 w-full overflow-hidden flex items-center justify-center">
            <ProductImage
              src={product.detailImage || product.image}
              alt={product.detailImage ? `${product.name} closeup detail view` : `${product.name} coil, high-grade flexible PVC`}
            />
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 sm:py-16">
        <div className="container-site">
          {hasVariants ? (
            /* Variant Family View: Selectable cards / tabs with image slot and spec table */
            <Suspense fallback={<div className="py-12 text-center text-slate-500">Loading variant viewer…</div>}>
              <FamilyVariantViewer family={product} />
            </Suspense>
          ) : (
            /* Single-Product Family View: Normal product page */
            <div className="grid min-w-0 gap-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-12">
              <div className="min-w-0">
                <p className="eyebrow">Product Overview</p>
                <h2 className="section-title">Key Features</h2>
                <ul className="mt-6 space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm sm:text-base text-slate-700">
                      <span className="font-bold text-brand">—</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="mt-10 font-display text-xl sm:text-2xl uppercase text-ink">
                  Applications
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {product.applications.map((application) => (
                    <li
                      key={application}
                      className="rounded-full bg-[#E7F1F7] px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-brand"
                    >
                      {application}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="min-w-0">
                <p className="eyebrow">Specification Summary</p>
                <div className="mt-4 min-w-0">
                  <ProductSpecTable
                    familySlug={product.slug}
                    productName={product.name}
                  />
                </div>

                {/* RFQ Prompt Box: Only rendered if product has a spec table to avoid duplicate RFQ blocks */}
                {hasSpecTable && (
                  <div className="mt-8 border border-brand/20 bg-mist p-5 sm:p-6 rounded-lg">
                    <h3 className="font-display text-lg sm:text-xl uppercase text-ink">
                      Need a custom size, length, or pressure rating?
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Final configuration, material suitability, and ratings can be tailored for your specific operating conditions.
                    </p>
                    <Link
                      href={`/contact?product=${encodeURIComponent(product.name)}#rfq`}
                      className="btn-primary mt-4 inline-flex text-xs sm:text-sm"
                    >
                      Request this product
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
