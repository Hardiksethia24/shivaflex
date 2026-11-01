"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// Known unphotographed slots that should immediately display the placeholder without a 404 network flash
const KNOWN_PLACEHOLDER_IMAGES = new Set([
  "/images/manufacturing/plant-floor.jpg",
  "/images/manufacturing/extrusion-line.jpg",
  "/images/about/team-leadership.jpg",
  "/images/about/plant-1.jpg",
  "/images/about/plant-2.jpg",
  "/images/about/plant-3.jpg",
  "/images/products/rock-drill-hose.jpg",
]);

export function ProductImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const isKnownMissing = Boolean(!src || KNOWN_PLACEHOLDER_IMAGES.has(src));
  const [failed, setFailed] = useState(isKnownMissing);
  const [prevSrc, setPrevSrc] = useState(src);
  const imgRef = useRef<HTMLImageElement>(null);

  // Synchronously reset failed state during render when src changes
  if (prevSrc !== src) {
    setPrevSrc(src);
    setFailed(Boolean(!src || KNOWN_PLACEHOLDER_IMAGES.has(src)));
  }

  // Check the image element's complete state on mount and whenever src changes.
  useEffect(() => {
    if (isKnownMissing) {
      setFailed(true);
      return;
    }
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
  }, [src, isKnownMissing]);

  if (failed || !src) {
    return (
      <div
        className={`flex h-full w-full min-h-48 flex-col items-center justify-center bg-slate-100 p-5 text-center text-sm font-semibold text-slate-500 ${className}`}
        role="img"
        aria-label={`${alt}. Photo coming soon`}
      >
        <span className="text-3xl text-slate-400">⌾</span>
        <span className="mt-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">
          Photo coming soon
        </span>
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
