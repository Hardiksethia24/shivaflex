import type { Metadata } from "next";
import { ProductImage } from "@/components/ProductImage";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About & Quality",
  description:
    "Shivom Rubber Products (P) Ltd. was established in 1999. 25+ years of manufacturing flexible hose under the Shivaflex brand across Rajasthan and West Bengal.",
};

const machinery = [
  "4 Soft Extruders",
  "2 Braided-Machine Plants",
  "Compounding Plant",
  "Cooling / Mixing Units",
  "In-House High-Tensile Testing",
  "In-House Pressure-Testing Machines",
];

const whyChooseUs = [
  {
    title: "Experience",
    description: "In continuous operation since 1999.",
  },
  {
    title: "Capacity",
    description: "Three manufacturing units across two states.",
  },
  {
    title: "Consistency",
    description: "In-house testing on every production batch.",
  },
  {
    title: "Reach",
    description: "Supplying industrial buyers and dealers across India.",
  },
  {
    title: "Flexibility",
    description: "Custom packaging and specifications available on request.",
  },
];

export default function AboutQuality() {
  return (
    <main>
      {/* Hero Section */}
      <section className="border-b border-slate-200 bg-mist py-16">
        <div className="container-site">
          <p className="eyebrow">About Shivaflex</p>
          <h1 className="section-title">
            25+ Years of Manufacturing Flexible Hose
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Shivom Rubber Products (P) Ltd. was established in 1999 under the guidance of Mr. Mitesh Maheshwari. Today the company is led by Mr. Lalit Maheshwari, Mr. Shyam Sunder Maheshwari, and Mr. Sitaram Maheshwari, operating under the Shivaflex brand across three manufacturing units in Rajasthan and West Bengal.
          </p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Company Story</p>
            <h2 className="section-title">
              Manufacturing Flexible Hose Since 1999
            </h2>
            <p className="mt-6 text-base leading-7 text-slate-600">
              Shivom Rubber Products (P) Ltd. was established in 1999 under the guidance of Mr. Mitesh Maheshwari. Today the company is led by Mr. Lalit Maheshwari, Mr. Shyam Sunder Maheshwari, and Mr. Sitaram Maheshwari, operating under the Shivaflex brand across three manufacturing units in Rajasthan and West Bengal.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Our products serve high-demand agricultural, industrial, construction, and infrastructure operations nationwide with a commitment to engineering integrity and dependable supply.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden border border-slate-200 shadow-card">
              <ProductImage
                src="/images/about/team-leadership.jpg"
                alt="Shivaflex team and leadership"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="border-t border-slate-200 bg-mist py-20">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Infrastructure</p>
            <h2 className="section-title">In-House Production Capability</h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Our production lines run on 4 soft extruders and 2 braided-machine plants, supported by our own compounding plant and cooling/mixing units. Every batch is checked on in-house high-tensile and pressure-testing equipment before it leaves the facility.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {machinery.map((item) => (
                <li
                  key={item}
                  className="border-l-4 border-brand bg-white p-4 font-semibold text-slate-800 shadow-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden border border-slate-200 shadow-card">
              <ProductImage
                src="/images/manufacturing/extrusion-line.jpg"
                alt="Shivaflex extrusion and braiding equipment"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quality Section */}
      <section className="border-t border-slate-200 bg-white py-20">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">Quality Assurance</p>
            <h2 className="section-title">Built-In Quality at Every Stage</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 font-medium">
              [TODO: insert actual certifications, if any exist] Quality isn't a final check — it's built into every stage, from raw material compounding to the pressure test before packaging.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why Choose Shivaflex Grid */}
      <section className="border-t border-slate-200 bg-mist py-20">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">Why Choose Shivaflex</p>
            <h2 className="section-title">Why Choose Shivaflex</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="h-full border border-slate-200 bg-white p-7 shadow-sm transition hover:border-brand hover:shadow-card">
                  <h3 className="font-display text-2xl uppercase text-brand">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
