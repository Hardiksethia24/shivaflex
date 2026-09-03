"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function StatCounter({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef(null); const inView = useInView(ref, { once: true, amount: 0.6 }); const reduced = useReducedMotion(); const [count, setCount] = useState(0);
  useEffect(() => { if (!inView) return; if (reduced) { setCount(value); return; } const start = performance.now(); const id = requestAnimationFrame(function update(now) { const p = Math.min((now - start) / 900, 1); setCount(Math.floor(value * p)); if (p < 1) requestAnimationFrame(update); }); return () => cancelAnimationFrame(id); }, [inView, value, reduced]);
  return <div ref={ref}><motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="font-display text-4xl text-white">{count}{suffix}</motion.p><p className="mt-1 text-sm text-blue-100">{label}</p></div>;
}
