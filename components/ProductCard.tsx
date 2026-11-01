"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Product } from "@/lib/products";
import { ProductImage } from "./ProductImage";

export function ProductCard({ product }: { product: Product }) {
  const isFamilyWithVariants = [
    "garden-pipe",
    "braided-hose",
    "suction-pipe",
    "super-car-washing-hose",
  ].includes(product.slug);

  const rawVariants = product.variants || [];
  const hasVariants = rawVariants.length > 0;
  const variantBadge = hasVariants
    ? `${rawVariants.length} ${product.variantLabel || "Variants"}`
    : "Single Product";

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const cardRef = useRef<HTMLElement>(null);

  // Filter out any variants without photos or that failed loading
  const validSlides = isFamilyWithVariants
    ? rawVariants.filter((v) => Boolean(v.image) && !failedImages.has(v.image))
    : [];

  // Listen to prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // IntersectionObserver to avoid running timers offscreen
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Deterministic timing offset based on slug so cards don't crossfade simultaneously
  const slugHash = product.slug
    .split("")
    .reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const intervalMs = 3400 + (slugHash % 700);

  // Automatic slideshow cycling
  useEffect(() => {
    if (
      !isFamilyWithVariants ||
      validSlides.length <= 1 ||
      isPaused ||
      !isVisible ||
      prefersReducedMotion
    ) {
      return;
    }

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % validSlides.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [
    isFamilyWithVariants,
    validSlides.length,
    isPaused,
    isVisible,
    prefersReducedMotion,
    intervalMs,
  ]);

  return (
    <article
      ref={cardRef}
      onPointerEnter={() => setIsPaused(true)}
      onPointerLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      className="group flex flex-col justify-between overflow-hidden bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-[1.015]"
    >
      <div>
        {/* Photo Container: No border, no outline, no box-shadow, no rounded corners */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-white flex items-center justify-center">
          {validSlides.length > 1 ? (
            // Variant Slideshow with crossfade
            validSlides.map((slide, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={slide.slug || slide.image}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    isActive ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
                  }`}
                >
                  <ProductImage
                    src={slide.image}
                    alt={`${product.name} — ${slide.name} variant coil`}
                    className="h-full w-full object-contain mix-blend-multiply p-2"
                  />
                </div>
              );
            })
          ) : (
            // Single Still Photo (or placeholder if missing)
            <div className="h-full w-full">
              <ProductImage
                src={
                  validSlides.length === 1
                    ? validSlides[0].image
                    : product.image
                }
                alt={`${product.name} coil, ${product.applications[0] || "industrial PVC hose"}`}
                className="h-full w-full object-contain mix-blend-multiply p-2 transition duration-500 group-hover:scale-102"
              />
            </div>
          )}

          {/* Variant Badge */}
          {hasVariants && (
            <span className="absolute top-2.5 right-2.5 z-20 rounded-full bg-slate-900/80 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-white backdrop-blur transition-all duration-300">
              {validSlides.length > 1 ? validSlides[activeIndex]?.name : variantBadge}
            </span>
          )}
        </div>

        {/* Variant Indicator Dots (borderless) */}
        {validSlides.length > 1 && (
          <div
            className="flex items-center justify-center gap-1.5 py-2 bg-white"
            aria-label={`${product.name} variant selection`}
          >
            {validSlides.map((slide, idx) => (
              <button
                key={slide.slug}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveIndex(idx);
                }}
                aria-label={`View ${slide.name} variant`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? "w-4 bg-brand"
                    : "w-1.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        )}

        {/* Text Area: Visually separate from the photo */}
        <div className="p-4 sm:p-5 bg-white border-t border-slate-100">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand">
            {product.applications[0] || "Industrial Hose"}
          </p>
          <h3 className="mt-1 sm:mt-1.5 font-display text-lg sm:text-2xl uppercase leading-snug text-ink transition-colors duration-200 group-hover:text-brand">
            {product.name}
          </h3>
          <p className="mt-1.5 sm:mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600 line-clamp-2">
            {product.short}
          </p>
        </div>
      </div>

      <div className="px-4 pb-4 sm:px-5 sm:pb-5 bg-white">
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
