import type { Metadata } from "next";
import { RFQForm } from "@/components/RFQForm";

export const metadata: Metadata = {
  title: "Contact & Request a Quote",
  description:
    "Get a quote or talk to our team. Tell us what you need — product, spec, and quantity — and we'll get back to you with pricing and lead time.",
};

const locations = [
  {
    title: "Head Office / Unit 1",
    address: "Bikaner Road, N.H.-89, Nokha (Bikaner), Rajasthan, India – 334803",
    contactDetails: "Tel: +91-1531-220313 · Mobile: +91-9414139280 / +91-7891515751",
    contactPerson: "Mr. Mitesh Maheshwari",
  },
  {
    title: "Manufacturing Unit 2",
    address: "Lakhibati More, RO-Maillickpur, PS-Margram, West Bengal – 731224",
    contactDetails: "",
    contactPerson: "",
  },
  {
    title: "Manufacturing Unit 3",
    address: "Kantalia Road, Howrah, West Bengal – 711409",
    contactDetails: "",
    contactPerson: "",
  },
  {
    title: "Marketing Offices",
    address: "Genius Marketing, Jaipur, Rajasthan\nGenius Polytex, Kolkata, West Bengal",
    contactDetails: "info.geniuspolytex@gmail.com",
    contactPerson: "",
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="border-b border-slate-200 bg-mist py-16">
        <div className="container-site">
          <p className="eyebrow">Contact & RFQ</p>
          <h1 className="section-title">Get a Quote or Talk to Our Team</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Tell us what you need — product, spec, and quantity — and we'll get back to you with pricing and lead time.
          </p>
        </div>
      </section>

      {/* RFQ & Direct Contact Section */}
      <section id="rfq" className="scroll-mt-24 py-20">
        <div className="container-site grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <aside>
            <p className="eyebrow">Direct Contact</p>
            <h2 className="section-title">Talk to Our Team</h2>

            <div className="mt-6 space-y-6 text-slate-700">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-brand">
                  Contact Person
                </p>
                <p className="mt-1 text-lg font-bold text-ink">
                  Mr. Mitesh Maheshwari
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-brand">
                  Email
                </p>
                <a
                  href="mailto:info@shivaflex.com"
                  className="mt-1 block text-lg font-bold text-ink transition hover:text-brand hover:underline"
                >
                  info@shivaflex.com
                </a>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-brand">
                  Phone Numbers
                </p>
                <p className="mt-1 font-semibold text-slate-700">
                  <a href="tel:+911531220313" className="hover:text-brand">
                    +91-1531-220313
                  </a>
                </p>
                <p className="mt-1 font-semibold text-slate-700">
                  <a href="tel:+919414139280" className="hover:text-brand">
                    +91-9414139280
                  </a>{" "}
                  /{" "}
                  <a href="tel:+917891515751" className="hover:text-brand">
                    +91-7891515751
                  </a>
                </p>
              </div>
            </div>
          </aside>

          <div className="border border-slate-200 bg-mist p-7 shadow-card sm:p-9">
            <p className="eyebrow">Request for Quotation</p>
            <h2 className="mt-2 font-display text-3xl uppercase text-ink">
              Share Your Requirement
            </h2>
            <div className="mt-7">
              <RFQForm />
            </div>
            <p className="mt-4 text-xs text-slate-500">
              [TODO: connect form to the approved email/CRM service before launch.]
            </p>
          </div>
        </div>
      </section>

      {/* Locations & Manufacturing Units */}
      <section className="border-t border-slate-200 bg-mist py-20">
        <div className="container-site">
          <p className="eyebrow">Locations</p>
          <h2 className="section-title">Manufacturing & Marketing Offices</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {locations.map((loc) => (
              <article key={loc.title} className="border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-display text-2xl uppercase text-brand">
                  {loc.title}
                </h3>
                <p className="mt-3 whitespace-pre-line text-sm leading-6 text-slate-600">
                  {loc.address}
                </p>
                {loc.contactPerson && (
                  <p className="mt-2 text-sm font-medium text-slate-700">
                    Contact: {loc.contactPerson}
                  </p>
                )}
                {loc.contactDetails && (
                  <p className="mt-2 text-sm font-semibold text-slate-800">
                    {loc.contactDetails}
                  </p>
                )}
                <div className="mt-5 grid h-32 place-items-center bg-slate-100 text-center text-xs font-semibold text-slate-500">
                  Map placeholder
                  <br />
                  [TODO: add approved embedded map]
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
