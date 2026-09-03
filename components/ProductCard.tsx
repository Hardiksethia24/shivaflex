import Link from "next/link";
import type { Product } from "@/lib/products";
import { ProductImage } from "./ProductImage";

export function ProductCard({ product }: { product: Product }) { return <article className="group overflow-hidden border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-card"><div className="relative aspect-[16/10] overflow-hidden"><ProductImage src={product.image} alt={`${product.name} product photograph`} className="transition duration-500 group-hover:scale-105" /></div><div className="p-5"><p className="text-xs font-bold uppercase tracking-wider text-brand">{product.family}</p><h3 className="mt-2 font-display text-2xl uppercase leading-6 text-ink">{product.name}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{product.short}</p><Link href={`/products/${product.slug}`} className="mt-5 inline-block text-sm font-bold text-brand hover:underline">View specifications →</Link></div></article>; }
