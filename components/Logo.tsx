import Link from "next/link";

export function Logo() {
  return <Link href="/" className="flex items-center gap-2" aria-label="Shivaflex home">
    <img src="/images/brand/logo.svg" width="180" height="48" className="h-10 w-auto" alt="Shivaflex — Shivom Group" />
  </Link>;
}
