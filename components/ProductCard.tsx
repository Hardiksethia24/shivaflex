import Link from "next/link";
import type { Product } from "@/lib/products";
import { ProductImage } from "./ProductImage";

export function ProductCard({ product }: { product: Product }) {
  const hasVariants = Boolean(product.variants && product.variants.length > 0);
  const variantBadge = hasVariants
    ? `${product.variants!.length} ${product.variantLabel || "Variants"}`
    : "Single Product";

  return (
    <article className="group flex flex-col justify-between overflow-hidden border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-card">
      <div>
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <ProductImage
            src={product.image}
            alt={`${product.name} coil, ${product.applications[0] || "industrial PVC hose"}`}
            className="transition duration-500 group-hover:scale-105"
          />
          {hasVariants && (
            <span className="absolute top-2.5 right-2.5 rounded-full bg-slate-900/85 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-white backdrop-blur">
              {variantBadge}
            </span>
          )}
        </div>
        <div className="p-4 sm:p-5">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand">
            {product.applications[0] || "Industrial Hose"}
          </p>
          <h3 className="mt-1 sm:mt-1.5 font-display text-lg sm:text-2xl uppercase leading-snug text-ink">
            {product.name}
          </h3>
          <p className="mt-1.5 sm:mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600 line-clamp-2">
            {product.short}
          </p>
        </div>
      </div>
      <div className="px-4 pb-4 sm:px-5 sm:pb-5">
        <Link
          href={`/products/${product.slug}`}
          className="inline-block text-xs sm:text-sm font-bold text-brand hover:underline"
        >
          {hasVariants ? "View variants & specs →" : "View specifications →"}
        </Link>
      </div>
    </article>
  );
}
