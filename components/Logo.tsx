import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return <Link href="/" className="flex items-center gap-2" aria-label="Shivaflex home">
    <Image src="/images/brand/logo.jpeg" width={320} height={108} className="h-12 w-auto sm:h-14" priority alt="Shivaflex" />
  </Link>;
}
