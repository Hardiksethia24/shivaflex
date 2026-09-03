"use client";

import { FormEvent, useState } from "react";
import { products } from "@/lib/products";

type Mode = "rfq" | "dealer";
export function RFQForm({ mode = "rfq" }: { mode?: Mode }) {
  const [status, setStatus] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("Sending…");
    const data = Object.fromEntries(new FormData(event.currentTarget));
    try { const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, formType: mode }) }); setStatus(response.ok ? "Thank you. Your inquiry has been recorded; our sales team will contact you." : "Unable to send right now. Please email info@shivaflex.com."); if (response.ok) event.currentTarget.reset(); } catch { setStatus("Unable to send right now. Please email info@shivaflex.com."); }
  }
  const dealer = mode === "dealer";
  return <form onSubmit={submit} className="grid gap-5" noValidate>
    <div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-bold">{dealer ? "Contact name" : "Your name"}<input required name="name" className="field" autoComplete="name" /></label><label className="text-sm font-bold">Company name<input required name="company" className="field" autoComplete="organization" /></label></div>
    <div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-bold">Email<input required type="email" name="email" className="field" autoComplete="email" /></label><label className="text-sm font-bold">Phone<input required type="tel" name="phone" className="field" autoComplete="tel" /></label></div>
    {dealer ? <div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-bold">Region / city<input required name="region" className="field" /></label><label className="text-sm font-bold">Business type<select required name="businessType" className="field" defaultValue=""><option value="" disabled>Select type</option><option>Dealer</option><option>Distributor</option><option>Trader</option><option>Other</option></select></label></div> : <><label className="text-sm font-bold">Product interest<select required name="product" className="field" defaultValue=""><option value="" disabled>Select a product family or product</option><option>Not sure — need selection support</option>{products.map((product) => <option key={product.slug}>{product.name}</option>)}</select></label><label className="text-sm font-bold">Quantity / specification needed<input name="quantity" className="field" placeholder="e.g. 100 m, 50 mm I.D., working pressure" /></label></>}
    {dealer && <label className="text-sm font-bold">Expected purchase volume<input name="volume" className="field" placeholder="Monthly / annual estimate" /></label>}
    <label className="text-sm font-bold">{dealer ? "Tell us about your business" : "Message"}<textarea required name="message" rows={5} className="field resize-y" placeholder={dealer ? "Territory, current lines, customer base…" : "Application, medium, operating conditions or any question…"} /></label>
    <div><button type="submit" className="btn-primary">{dealer ? "Send dealer inquiry" : "Send RFQ"}</button>{status && <p className="mt-3 text-sm text-slate-600" role="status">{status}</p>}</div>
  </form>;
}
