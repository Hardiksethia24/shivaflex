import Link from "next/link";
import type { Product } from "@/lib/products";
import { ProductImage } from "./ProductImage";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col justify-between overflow-hidden border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-card">
      <div>
        <div className="relative aspect-[16/10] overflow-hidden">
          <ProductImage
            src={product.image}
            alt={`${product.name} product photograph`}
            className="transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-3 sm:p-5">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand">
            {product.family}
          </p>
          <h3 className="mt-1 sm:mt-2 font-display text-base sm:text-2xl uppercase leading-snug text-ink">
            {product.name}
          </h3>
          <p className="mt-1.5 sm:mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 line-clamp-1 sm:line-clamp-none">
            {product.short}
          </p>
        </div>
      </div>
      <div className="px-3 pb-3 sm:px-5 sm:pb-5">
        <Link
          href={`/products/${product.slug}`}
          className="inline-block text-xs sm:text-sm font-bold text-brand hover:underline"
        >
          View specifications →
        </Link>
      </div>
    </article>
  );
}
