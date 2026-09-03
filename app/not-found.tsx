import Link from "next/link";
export default function NotFound() { return <main className="container-site py-28"><p className="eyebrow">404</p><h1 className="section-title">Page not found</h1><p className="mt-5 text-slate-600">The product or page you requested is not available.</p><Link href="/products" className="btn-primary mt-7">Browse products</Link></main>; }
