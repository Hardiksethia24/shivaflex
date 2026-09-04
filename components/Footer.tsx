import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return <footer className="border-t border-slate-200 bg-mist py-14 text-slate-700"><div className="container-site grid gap-10 md:grid-cols-2 lg:grid-cols-4">
    <div><Logo /><p className="mt-5 max-w-xs text-sm leading-6 text-slate-600">PVC and braided flexible hose solutions for Indian industry, agriculture and infrastructure since 1999.</p></div>
    <div><h2 className="font-display text-xl uppercase text-brand">Quick links</h2><ul className="mt-4 space-y-2 text-sm">{[["Products", "/products"], ["About & Quality", "/about-quality"], ["Dealers", "/dealers"], ["Request a Quote", "/contact#rfq"]].map(([label, href]) => <li key={href}><Link className="hover:text-secondary" href={href}>{label}</Link></li>)}</ul></div>
    <div><h2 className="font-display text-xl uppercase text-brand">Manufacturing</h2><p className="mt-4 text-sm leading-6">Unit 1: Bikaner Road, N.H.-89, Nokha (Bikaner), Rajasthan – 334803<br /><br />Units 2 & 3: Margram and Howrah, West Bengal.</p></div>
    <div><h2 className="font-display text-xl uppercase text-brand">Contact sales</h2><p className="mt-4 text-sm leading-6"><a href="mailto:info@shivaflex.com" className="hover:text-secondary">info@shivaflex.com</a><br />+91-1531-220313<br />+91-9414139280<br /><br />Genius Marketing, Jaipur<br />Genius Polytex, Kolkata</p></div>
  </div><div className="container-site mt-12 border-t border-slate-300 pt-5 text-xs text-slate-500">© {new Date().getFullYear()} Shivom Rubber Products (P) Ltd. · Trading as Shivaflex</div></footer>;
}
