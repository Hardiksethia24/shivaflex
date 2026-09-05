import type { Metadata } from "next";
import { RFQForm } from "@/components/RFQForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Dealers & Distributors",
  description:
    "Shivaflex sells directly to industrial buyers and through a network of dealers and distributors across India. Partner with us for consistent, on-spec hose supply.",
};

const partnerBullets = [
  {
    title: "Direct-from-manufacturer pricing at volume",
    description: "Competitive pricing structures designed to support healthy dealer margins and volume purchasing.",
  },
  {
    title: "Consistent specification across every batch",
    description: "Strict in-house quality testing ensures reliable tensile strength, burst rating, and dimensional accuracy.",
  },
  {
    title: "Three manufacturing units for reliable lead times",
    description: "Strategic production in Rajasthan and West Bengal delivers dependable dispatch and fulfillment across India.",
  },
  {
    title: "Support for regional stock planning",
    description: "Dedicated assistance to align seasonal agricultural demands and industrial project requirements with your inventory.",
  },
];

export default function DealersPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="border-b border-slate-200 bg-mist py-16">
        <div className="container-site">
          <p className="eyebrow">Dealers & Distributors</p>
          <h1 className="section-title">
            Built for Reliable Supply, Not Just a One-Time Order
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Shivaflex sells directly to industrial buyers and through a network of dealers and distributors across India. If you're supplying hose to agriculture, construction, or industrial customers, we can be your consistent, on-spec source.
          </p>
        </div>
      </section>

      {/* Why Partner With Us Section */}
      <section className="py-20">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">Why Partner With Us</p>
            <h2 className="section-title">Why Partner With Us</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partnerBullets.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="h-full border-t-4 border-brand bg-mist p-7 shadow-sm">
                  <h3 className="font-display text-xl uppercase leading-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footprint & Dealer Inquiry Form */}
      <section className="border-t border-slate-200 bg-mist py-20">
        <div className="container-site grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Current Footprint</p>
            <h2 className="section-title">Regional Presence</h2>
            <div className="mt-7 space-y-4">
              <div className="border-l-4 border-brand bg-white p-5 shadow-sm">
                <strong className="text-ink">Rajasthan</strong>
                <p className="mt-1 text-sm text-slate-600">
                  Nokha manufacturing unit (Unit 1) and Genius Marketing, Jaipur.
                </p>
              </div>
              <div className="border-l-4 border-brand bg-white p-5 shadow-sm">
                <strong className="text-ink">West Bengal</strong>
                <p className="mt-1 text-sm text-slate-600">
                  Manufacturing units in Margram (Unit 2) and Howrah (Unit 3); Genius Polytex, Kolkata.
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              [TODO: add active dealer territories and coverage map.]
            </p>
          </div>

          <div className="border border-slate-200 bg-white p-7 shadow-card sm:p-9">
            <p className="eyebrow">Dealer Inquiry</p>
            <h2 className="mt-2 font-display text-3xl uppercase text-ink">
              Partner With Us
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Tell us about your business and region — we'll follow up with pricing and terms.
            </p>
            <div className="mt-7">
              <RFQForm mode="dealer" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
