"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";

const links = [{ href: "/", label: "Home" }, { href: "/products", label: "Products" }, { href: "/about-quality", label: "About & Quality" }, { href: "/dealers", label: "Dealers" }, { href: "/contact", label: "Contact" }];

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
    <div className="container-site flex min-h-[72px] items-center justify-between gap-5">
      <Logo />
      <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">{links.map((link) => <Link key={link.href} className="text-sm font-semibold text-slate-700 transition hover:text-brand" href={link.href}>{link.label}</Link>)}</nav>
      <Link className="btn-primary hidden lg:inline-flex" href="/contact#rfq">Request a Quote</Link>
      <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center border border-slate-300 text-brand lg:hidden" aria-expanded={open} aria-label="Toggle navigation"><span className="text-xl">☰</span></button>
    </div>
    {open && <nav className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden" aria-label="Mobile navigation"><div className="container-site grid gap-1">{links.map((link) => <Link onClick={() => setOpen(false)} key={link.href} className="rounded-sm px-3 py-3 font-semibold hover:bg-mist" href={link.href}>{link.label}</Link>)}<Link onClick={() => setOpen(false)} className="btn-primary mt-2" href="/contact#rfq">Request a Quote</Link></div></nav>}
  </header>;
}
