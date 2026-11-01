"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export function ProductImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const [prevSrc, setPrevSrc] = useState(src);
  const imgRef = useRef<HTMLImageElement>(null);

  // Synchronously reset failed state during render when src changes
  if (prevSrc !== src) {
    setPrevSrc(src);
    setFailed(false);
  }

  // Check the image element's complete state on mount and whenever src changes.
  // This handles cached images that complete before the onLoad handler attaches,
  // as well as broken images where naturalWidth is 0.
  useEffect(() => {
    setFailed(false);

    const checkComplete = () => {
      const img = imgRef.current;
      if (img && img.complete) {
        if (img.naturalWidth === 0) {
          setFailed(true);
        }
      }
    };

    checkComplete();
  }, [src]);

  if (failed || !src) {
    return (
      <div
        className={`grid min-h-48 place-items-center bg-slate-200 p-5 text-center text-sm font-semibold text-slate-500 ${className}`}
        role="img"
        aria-label={`${alt}. Photo coming soon`}
      >
        <span className="text-3xl">⌾</span>
        <span className="mt-2 block">Photo coming soon</span>
      </div>
    );
  }

  return (
    <Image
      ref={imgRef}
      key={src}
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className={`object-contain mix-blend-multiply ${className}`}
      onLoad={(e) => {
        const img = e.currentTarget;
        if (img.naturalWidth === 0) {
          setFailed(true);
        } else {
          setFailed(false);
        }
      }}
      onError={() => {
        setFailed(true);
      }}
    />
  );
}
