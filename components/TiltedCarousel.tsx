"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductImage } from "./ProductImage";

// TODO: swap these src paths once real photography is dropped into /public/images/about/
const SLIDES = [
  { src: "/images/about/plant-1.jpg", alt: "Shivaflex manufacturing floor", title: "Manufacturing floor" },
  { src: "/images/about/plant-2.jpg", alt: "Extrusion line at the Nokha unit", title: "Extrusion line" },
  { src: "/images/about/plant-3.jpg", alt: "Finished hose coils ready for dispatch", title: "Finished hose coils" },
];

function circularDelta(itemIndex: number, activeIndex: number, total: number) {
  let delta = itemIndex - activeIndex;
  if (delta > total / 2) delta -= total;
  if (delta < -total / 2) delta += total;
  return delta;
}

export function TiltedCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);
  const reducedMotion = useReducedMotion();

  const toPrev = () => setActiveIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  const toNext = () => setActiveIndex((prev) => (prev + 1) % SLIDES.length);
  const toSlide = (index: number) => setActiveIndex(index);

  return (
    <div className="relative flex flex-col items-center gap-6 py-4 sm:py-6 select-none overflow-hidden">
      {/* 3D Carousel container with touch swipe navigation */}
      <div
        className="relative h-[240px] w-full sm:h-[300px] md:h-[340px] flex items-center justify-center overflow-visible"
        style={{ perspective: "1200px" }}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing"
          drag={reducedMotion ? false : "x"}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={(_, info) => {
            if (info.offset.x < -35 || info.velocity.x < -200) toNext();
            if (info.offset.x > 35 || info.velocity.x > 200) toPrev();
          }}
        >
          {SLIDES.map((item, i) => {
            const delta = circularDelta(i, activeIndex, SLIDES.length);
            const isActive = delta === 0;
            const isVisible = Math.abs(delta) <= 1;

            return (
              <motion.div
                key={item.src}
                className="absolute flex flex-col items-center gap-2 will-change-[transform,scale,opacity]"
                initial={false}
                animate={{
                  x: `${delta * 68}%`,
                  rotateY: -delta * 62,
                  scale: isActive ? 1 : 0.82,
                  opacity: isActive ? 1 : isVisible ? 0.6 : 0,
                  zIndex: isActive ? 20 : 10,
                }}
                transition={
                  reducedMotion
                    ? { duration: 0.2 }
                    : { type: "spring", bounce: 0.12, duration: 0.7 }
                }
                style={{
                  pointerEvents: isVisible ? "auto" : "none",
                }}
              >
                <button
                  type="button"
                  onClick={() => toSlide(i)}
                  className={`aspect-[4/3] w-52 overflow-hidden rounded-xl border border-slate-200 shadow-card transition-shadow sm:w-72 md:w-80 ${
                    isActive ? "ring-2 ring-brand/20 shadow-xl" : "hover:opacity-90"
                  }`}
                  aria-label={`Show ${item.title}`}
                >
                  <ProductImage src={item.src} alt={item.alt} />
                </button>

                <motion.div
                  className="whitespace-nowrap text-xs font-medium text-slate-700 md:text-sm"
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 4,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {item.title}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Navigation Controls: Hidden on mobile, visible on tablet/desktop */}
      <div className="hidden sm:flex items-center gap-4 rounded-full border border-slate-200 bg-slate-100/80 px-3 py-2 text-slate-700 backdrop-blur-sm shadow-sm">
        <button
          onClick={toPrev}
          className="p-1.5 rounded-full hover:bg-white hover:text-brand transition"
          aria-label="Previous photo"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => toSlide(i)}
              aria-label={`Go to photo ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === i ? "w-6 bg-brand" : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        <button
          onClick={toNext}
          className="p-1.5 rounded-full hover:bg-white hover:text-brand transition"
          aria-label="Next photo"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
