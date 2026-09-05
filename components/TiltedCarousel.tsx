"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductImage } from "./ProductImage"; // reuse existing placeholder/fallback image component

// TODO: swap these src paths once real photography is dropped into /public/images/about/
const SLIDES = [
  { src: "/images/about/plant-1.jpg", alt: "Shivaflex manufacturing floor", title: "Manufacturing floor" },
  { src: "/images/about/plant-2.jpg", alt: "Extrusion line at the Nokha unit", title: "Extrusion line" },
  { src: "/images/about/plant-3.jpg", alt: "Finished hose coils ready for dispatch", title: "Finished hose coils" },
];

export function TiltedCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);

  const toPrev = () => setActiveIndex((prev) => Math.max(0, prev - 1));
  const toNext = () => setActiveIndex((prev) => Math.min(SLIDES.length - 1, prev + 1));
  const toSlide = (index: number) => setActiveIndex(index);

  return (
    <div className="relative flex flex-col items-center gap-6 py-6 select-none">
      <div className="w-full overflow-visible" style={{ perspective: "1200px" }}>
        <motion.div
          className="mx-auto flex w-fit"
          animate={{ x: `${(-activeIndex * 100) / SLIDES.length}%` }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
        >
          {SLIDES.map((item, i) => {
            const isActive = activeIndex === i;
            return (
              <div key={item.src} className="px-2" style={{ perspective: "1200px" }}>
                <motion.div
                  className="flex aspect-[4/3] w-56 flex-col items-center gap-2 will-change-[transform,scale] md:w-80"
                  animate={{ rotateY: (activeIndex - i) * 45, scale: isActive ? 1 : 0.85 }}
                  transition={{ type: "spring", bounce: 0.1, duration: 1 }}
                >
                  <button
                    type="button"
                    onClick={() => toSlide(i)}
                    className="h-full w-full overflow-hidden rounded-lg"
                    aria-label={`Show ${item.title}`}
                  >
                    <ProductImage src={item.src} alt={item.alt} />
                  </button>

                  <motion.div
                    className="whitespace-nowrap text-xs text-slate-600 will-change-[opacity,filter] md:text-sm"
                    animate={{ filter: isActive ? "blur(0px)" : "blur(2px)", opacity: isActive ? 1 : 0 }}
                  >
                    {item.title}
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className="flex items-center gap-4 rounded-full border border-slate-200 bg-slate-100/70 px-3 py-2 text-slate-700 backdrop-blur-sm">
        <button onClick={toPrev} className="p-2" aria-label="Previous photo">
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => toSlide(i)}
              aria-label={`Go to photo ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === i ? "w-6 bg-brand" : "w-2 bg-slate-300"
              }`}
            />
          ))}
        </div>

        <button onClick={toNext} className="p-2" aria-label="Next photo">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
