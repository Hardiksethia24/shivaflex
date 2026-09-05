"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function StatCounter({
  value,
  suffix = "",
  label,
}: {
  value: number | string;
  suffix?: string;
  label: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduced = useReducedMotion();
  const isNumeric = typeof value === "number";
  const [count, setCount] = useState(isNumeric ? 0 : value);

  useEffect(() => {
    if (!inView || !isNumeric) return;
    if (reduced) {
      setCount(value);
      return;
    }
    const num = value as number;
    const start = performance.now();
    const id = requestAnimationFrame(function update(now) {
      const p = Math.min((now - start) / 900, 1);
      setCount(Math.floor(num * p));
      if (p < 1) requestAnimationFrame(update);
    });
    return () => cancelAnimationFrame(id);
  }, [inView, value, reduced, isNumeric]);

  return (
    <div ref={ref} className="border-l-2 border-brand/30 pl-3 sm:pl-5">
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className="font-display text-2xl uppercase tracking-tight text-brand sm:text-4xl lg:text-5xl"
      >
        {count}
        {suffix}
      </motion.p>
      <p className="mt-0.5 text-xs font-semibold tracking-wide text-slate-700 sm:mt-1.5 sm:text-sm">
        {label}
      </p>
    </div>
  );
}
