import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-mist py-14 text-slate-700">
      <div className="container-site grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 font-display text-sm uppercase tracking-wide text-brand">
            Ready to Challenge — Flexibility 'N' Strength
          </p>
          <p className="mt-2 max-w-xs text-sm leading-6 text-slate-600">
            PVC and braided hose manufacturer, operating since 1999. Serving agriculture, construction, industry, and infrastructure across India.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl uppercase text-brand">Quick links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["Products", "/products"],
              ["About & Quality", "/about-quality"],
              ["Dealers", "/dealers"],
              ["Request a Quote", "/contact#rfq"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link className="hover:text-secondary hover:underline" href={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl uppercase text-brand">Manufacturing</h2>
          <p className="mt-4 text-sm leading-6">
            <strong>Unit 1 (Head Office):</strong>
            <br />
            Bikaner Road, N.H.-89, Nokha (Bikaner), Rajasthan, India – 334803
            <br />
            <br />
            <strong>Unit 2:</strong> Margram, West Bengal – 731224
            <br />
            <strong>Unit 3:</strong> Howrah, West Bengal – 711409
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl uppercase text-brand">Contact Sales</h2>
          <p className="mt-4 text-sm leading-6">
            <a href="mailto:info@shivaflex.com" className="font-semibold text-brand hover:text-secondary hover:underline">
              info@shivaflex.com
            </a>
            <br />
            Tel: +91-1531-220313
            <br />
            Mob: +91-9414139280 / +91-7891515751
            <br />
            <br />
            <span className="text-xs text-slate-500">Marketing:</span>
            <br />
            Genius Marketing, Jaipur
            <br />
            Genius Polytex, Kolkata
          </p>
        </div>
      </div>

      <div className="container-site mt-12 border-t border-slate-300 pt-5 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>© {new Date().getFullYear()} Shivom Rubber Products (P) Ltd. · Trading as Shivaflex</p>
        <p className="italic">Ready to Challenge — Flexibility 'N' Strength</p>
      </div>
    </footer>
  );
}
