import Link from "next/link";
import { ApplicationTile } from "@/components/ApplicationTile";
import { HeroCoverflow } from "@/components/HeroCoverflow";
import { ProductCard } from "@/components/ProductCard";
import { ProductImage } from "@/components/ProductImage";
import { Reveal } from "@/components/Reveal";
import { StatCounter } from "@/components/StatCounter";
import { TiltedCarousel } from "@/components/TiltedCarousel";
import { applicationDetails, products } from "@/lib/products";

export default function Home() {
  const featured = products.filter((p) =>
    [
      "medium-duty-green-hose",
      "transparent-pneumatic-hose",
      "delivery-hose-pipe",
      "flex-duct-hose",
    ].includes(p.slug)
  );

  return (
    <main>
      {/* 1. Hero Section */}
      <section className="overflow-hidden border-b border-slate-200 bg-white">
        <div className="container-site grid min-h-[500px] items-center gap-12 py-14 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
          <Reveal>
            <p className="eyebrow">Shivom Rubber Products (P) Ltd.</p>
            <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold uppercase leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
              Ready to Challenge — Flexibility 'N' Strength
            </h1>
            <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-slate-700">
              Specification-led PVC and braided hose, manufactured in India since 1999 — built for agriculture, construction, industry, and infrastructure.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact#rfq"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-orange-500 px-7 text-sm font-bold text-white shadow-sm transition duration-150 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:text-base"
              >
                Request a Quote
              </Link>
              <Link
                href="/products"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border-2 border-slate-300 bg-white px-7 text-sm font-bold text-slate-800 shadow-sm transition duration-150 hover:border-slate-800 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 sm:text-base"
              >
                Browse Products
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="relative">
            <HeroCoverflow />
          </Reveal>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-slate-200 bg-mist">
        <div className="container-site grid grid-cols-2 gap-x-4 gap-y-4 py-4 sm:gap-6 sm:py-8 lg:grid-cols-4">
          <StatCounter value={25} suffix="+" label="Years in Operation" />
          <StatCounter value={3} label="Manufacturing Units" />
          <StatCounter value={17} suffix="+" label="Product Lines" />
          <StatCounter value="Pan-India" label="Supply" />
        </div>
      </section>

      {/* 2. New About Us Section (Homepage Teaser) */}
      <section className="border-b border-slate-200 bg-white py-20">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="eyebrow">About Us</p>
              <h2 className="section-title">
                25+ Years of Manufacturing Flexible Hose
              </h2>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-700">
                Since 1999, Shivom Rubber Products (P) Ltd. has been manufacturing PVC and braided hose from three facilities across Rajasthan and West Bengal, under the Shivaflex brand. Every batch runs through our own high-tensile and pressure-testing equipment before it leaves the plant — built to spec, not just built to sell.
              </p>
              <div className="mt-6">
                <Link
                  href="/about-quality"
                  className="inline-flex items-center gap-1.5 font-bold text-orange-600 transition hover:text-orange-700 hover:underline"
                >
                  Learn more about us <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="mt-8">
            <Reveal delay={0.15}>
              <TiltedCarousel />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Shop by Application Section (Moved below About Us) */}
      <section className="border-b border-slate-200 bg-mist py-24">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">Shop by Application</p>
            <h2 className="section-title">Shop by Application</h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">
              Find the right hose by what you're using it for — not just by name.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {applicationDetails.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.06}>
                <ApplicationTile
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Product Families Section */}
      <section className="border-b border-slate-200 bg-[#F0F5FC] py-24">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">Featured Product Families</p>
            <h2 className="section-title">
              Built to spec, tested for pressure, engineered to last.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featured.map((product, index) => (
              <Reveal key={product.slug} delay={index * 0.08}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/products" className="btn-secondary">
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Manufacturing & Quality Strip */}
      <section className="border-b border-slate-200 bg-white py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Manufacturing & Quality</p>
            <h2 className="section-title">
              Three manufacturing units. One standard.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              Every hose is built on fully automatic extrusion and braiding lines, checked on our own high-tensile and pressure-testing equipment before it ships.
            </p>
            <Link href="/about-quality" className="btn-secondary mt-7 inline-flex">
              About our quality process
            </Link>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            <div className="relative aspect-video overflow-hidden border border-slate-200 shadow-card">
              <ProductImage
                src="/images/manufacturing/plant-floor.jpg"
                alt="Shivaflex manufacturing plant floor"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. Dealer Callout Banner */}
      <section className="border-b border-slate-200 bg-mist py-20">
        <div className="container-site flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-3xl">
            <p className="eyebrow">Dealers & Distributors</p>
            <h2 className="section-title">
              Supplying dealers and distributors across India.
            </h2>
            <p className="mt-3 text-base text-slate-600">
              We work with agricultural equipment dealers, industrial distributors, and traders who need consistent supply and pricing they can build a business on.
            </p>
          </div>
          <Link href="/dealers" className="btn-primary shrink-0">
            Partner With Us
          </Link>
        </div>
      </section>
    </main>
  );
}
