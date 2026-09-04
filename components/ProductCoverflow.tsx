"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useState } from "react";
import type { Product } from "@/lib/products";
import { ProductImage } from "./ProductImage";

type Direction = 1 | -1;

function circularDelta(itemIndex: number, activeIndex: number, total: number) {
  let delta = itemIndex - activeIndex;
  if (delta > total / 2) delta -= total;
  if (delta < -total / 2) delta += total;
  return delta;
}

export function ProductCoverflow({ products }: { products: Product[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const total = products.length;
  const move = useCallback((direction: Direction) => setActiveIndex((current) => (current + direction + total) % total), [total]);
  const activeProduct = products[activeIndex];

  return <section className="overflow-hidden py-20" aria-roledescription="carousel" aria-label="Featured Shivaflex product families">
    <div className="container-site">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="eyebrow">Product families</p><h2 className="section-title">Built around demanding applications</h2></div>
        <div className="flex gap-2" aria-label="Carousel controls"><button onClick={() => move(-1)} className="grid h-11 w-11 place-items-center border border-slate-300 text-xl text-brand transition hover:border-secondary hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2" aria-label="Show previous product">←</button><button onClick={() => move(1)} className="grid h-11 w-11 place-items-center border border-slate-300 text-xl text-brand transition hover:border-secondary hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2" aria-label="Show next product">→</button></div>
      </div>
      <p className="mt-4 max-w-2xl text-slate-600">Browse core product families and open a detailed specification page when you are ready to discuss requirements.</p>
      <div className="relative mt-9 h-[410px] sm:h-[465px]" onKeyDown={(event) => { if (event.key === "ArrowLeft") move(-1); if (event.key === "ArrowRight") move(1); }} tabIndex={0} aria-label="Use left and right arrow keys to browse featured products">
        <motion.div className="absolute inset-0" drag={reducedMotion ? false : "x"} dragConstraints={{ left: 0, right: 0 }} dragElastic={0.12} onDragEnd={(_, info) => { if (info.offset.x < -55 || info.velocity.x < -350) move(1); if (info.offset.x > 55 || info.velocity.x > 350) move(-1); }}>
          {products.map((product, index) => {
            const delta = circularDelta(index, activeIndex, total);
            const visible = Math.abs(delta) <= 1;
            const isCurrent = delta === 0;
            return <motion.article key={product.slug} initial={false} animate={{ x: `${delta * 68}%`, scale: isCurrent ? 1 : 0.86, opacity: isCurrent ? 1 : visible ? 0.58 : 0, filter: isCurrent ? "blur(0px)" : "blur(1px)" }} transition={reducedMotion ? { duration: 0.15 } : { duration: 0.46, ease: "easeOut" }} className={`absolute left-[14%] top-0 w-[72%] overflow-hidden border bg-white shadow-card ${isCurrent ? "z-20 border-slate-200" : "z-10 cursor-pointer border-slate-300"}`} style={{ pointerEvents: visible ? "auto" : "none" }} onClick={() => { if (!isCurrent) setActiveIndex(index); }} aria-hidden={!visible}>
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-200"><ProductImage src={product.image} alt={`${product.name} product photograph`} /><div className="absolute left-0 top-0 bg-brand px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-white">{product.family}</div></div>
              <div className="p-5 sm:p-6"><h3 className="font-display text-2xl uppercase leading-6 text-ink sm:text-3xl">{product.name}</h3><p className="mt-3 hidden text-sm leading-6 text-slate-600 sm:block">{product.short}</p>{isCurrent && <Link href={`/products/${product.slug}`} onClick={(event) => event.stopPropagation()} className="mt-5 inline-flex text-sm font-bold text-brand hover:underline">View product & specifications →</Link>}{!isCurrent && <span className="mt-3 block text-xs font-bold uppercase tracking-wider text-brand">Select to preview</span>}</div>
            </motion.article>;
          })}
        </motion.div>
      </div>
      <div className="mt-1 flex items-center justify-center gap-2" aria-live="polite"><span className="text-xs font-bold uppercase tracking-[.14em] text-slate-500">{activeIndex + 1} / {total}</span><span className="sr-only">Currently showing {activeProduct.name}</span></div>
      <div className="mt-7 text-center"><Link href="/products" className="btn-secondary">Explore all products</Link></div>
    </div>
  </section>;
}
