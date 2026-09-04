"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { ProductImage } from "./ProductImage";

const slides = [
  { src: "/images/hero/industrial-hose-hero.jpg", alt: "Shivaflex industrial PVC hose range", label: "Industrial hose solutions" },
  { src: "/images/hero/industrial-hose-hero-2.jpg", alt: "Braided flexible hose product range", label: "Braided flexible hose" },
  { src: "/images/hero/industrial-hose-hero-3.jpg", alt: "Suction hose coil for agricultural use", label: "Suction & delivery hose" },
  { src: "/images/hero/industrial-hose-hero-4.jpg", alt: "Shivaflex hose manufacturing application", label: "Built for Indian industry" },
];

type Direction = 1 | -1;
function circularDelta(itemIndex: number, activeIndex: number) {
  let delta = itemIndex - activeIndex;
  if (delta > slides.length / 2) delta -= slides.length;
  if (delta < -slides.length / 2) delta += slides.length;
  return delta;
}

export function HeroCoverflow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();
  const move = useCallback((direction: Direction) => setActiveIndex((current) => (current + direction + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => move(1), 6000);
    return () => window.clearInterval(timer);
  }, [move, paused, reducedMotion]);

  return <div className="relative h-[310px] overflow-hidden sm:h-[390px] lg:h-[440px]" aria-roledescription="carousel" aria-label="Shivaflex product imagery" onPointerEnter={() => setPaused(true)} onPointerLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
    <motion.div className="absolute inset-0" drag={reducedMotion ? false : "x"} dragConstraints={{ left: 0, right: 0 }} dragElastic={0.12} onDragEnd={(_, info) => { if (info.offset.x < -45 || info.velocity.x < -300) move(1); if (info.offset.x > 45 || info.velocity.x > 300) move(-1); }}>
      {slides.map((slide, index) => {
        const delta = circularDelta(index, activeIndex);
        const visible = Math.abs(delta) <= 1;
        const current = delta === 0;
        return <motion.button key={slide.src} type="button" initial={false} animate={{ x: `${delta * 71}%`, scale: current ? 1 : 0.86, opacity: current ? 1 : visible ? 0.52 : 0 }} transition={reducedMotion ? { duration: 0.15 } : { duration: 0.48, ease: "easeOut" }} className={`absolute left-[14%] top-0 h-full w-[72%] overflow-hidden border bg-white text-left shadow-card ${current ? "z-20 border-slate-200" : "z-10 cursor-pointer border-slate-300"}`} style={{ pointerEvents: visible ? "auto" : "none" }} onClick={() => { if (!current) setActiveIndex(index); }} aria-label={current ? `Current slide: ${slide.label}` : `Show ${slide.label}`} aria-hidden={!visible} tabIndex={visible ? 0 : -1}>
          <span className="relative block h-full w-full"><ProductImage src={slide.src} alt={slide.alt} /><span className="absolute bottom-0 left-0 bg-white/95 px-4 py-3 text-xs font-bold uppercase tracking-wider text-brand">{slide.label}</span></span>
        </motion.button>;
      })}
    </motion.div>
    <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-2"><button type="button" onClick={() => move(-1)} className="grid h-9 w-9 place-items-center border border-slate-300 bg-white/95 text-lg text-brand shadow-sm transition hover:border-secondary hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-secondary" aria-label="Show previous hero image">←</button><button type="button" onClick={() => move(1)} className="grid h-9 w-9 place-items-center border border-slate-300 bg-white/95 text-lg text-brand shadow-sm transition hover:border-secondary hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-secondary" aria-label="Show next hero image">→</button></div>
    <span className="sr-only" aria-live="polite">Showing {slides[activeIndex].label}, image {activeIndex + 1} of {slides.length}</span>
  </div>;
}
