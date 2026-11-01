import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center py-1" aria-label="Shivaflex home">
      <Image
        src="/images/brand/logo.png"
        width={1024}
        height={373}
        className="h-8 w-auto object-contain sm:h-10"
        priority
        alt="Shivaflex"
      />
    </Link>
  );
}
