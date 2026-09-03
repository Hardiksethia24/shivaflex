"use client";

import Image from "next/image";
import { useState } from "react";

export function ProductImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className={`grid min-h-48 place-items-center bg-slate-200 p-5 text-center text-sm font-semibold text-slate-500 ${className}`} role="img" aria-label={`${alt}. Photo coming soon`}><span className="text-3xl">⌾</span><span className="mt-2 block">Photo coming soon</span></div>;
  return <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className={`object-cover ${className}`} onError={() => setFailed(true)} />;
}
