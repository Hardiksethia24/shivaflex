import Link from "next/link";
import { ApplicationTile } from "@/components/ApplicationTile";
import { HeroCoverflow } from "@/components/HeroCoverflow";
import { ProductCard } from "@/components/ProductCard";
import { ProductImage } from "@/components/ProductImage";
import { Reveal } from "@/components/Reveal";
import { StatCounter } from "@/components/StatCounter";
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
      {/* Hero Section */}
      <section className="overflow-hidden border-b border-slate-200 bg-white">
        <div className="container-site grid min-h-[530px] items-center gap-12 py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-28">
          <Reveal>
            <p className="eyebrow">Shivom Rubber Products (P) Ltd.</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl uppercase leading-[.95] tracking-tight text-ink sm:text-7xl">
              Ready to Challenge <span className="text-brand">— Flexibility 'N' Strength</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Specification-led PVC and braided hose, manufactured in India since 1999 — built for agriculture, construction, industry, and infrastructure.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact#rfq" className="btn-primary">
                Request a Quote
              </Link>
              <Link href="/products" className="btn-secondary">
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
        <div className="container-site grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <StatCounter value={25} suffix="+" label="Years in Operation" />
          <StatCounter value={3} label="Manufacturing Units" />
          <StatCounter value={17} suffix="+" label="Product Lines" />
          <StatCounter value="Pan-India" label="Supply" />
        </div>
      </section>

      {/* Shop by Application Section */}
      <section className="border-b border-slate-200 bg-white py-24">
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

      {/* Featured Product Families Section */}
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

      {/* Manufacturing & Quality Strip */}
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

      {/* Dealer Callout Banner */}
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
