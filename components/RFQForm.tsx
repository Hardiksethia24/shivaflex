"use client";

import { FormEvent, useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products, productFamilyNames } from "@/lib/products";

type Mode = "rfq" | "dealer";

function RFQFormInner({ mode = "rfq" }: { mode?: Mode }) {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState("");

  const urlProduct = searchParams.get("product") || "";
  const urlVariant = searchParams.get("variant") || "";
  const urlSize = searchParams.get("size") || "";

  const [selectedProduct, setSelectedProduct] = useState(urlProduct);
  const [selectedVariant, setSelectedVariant] = useState(urlVariant);
  const [quantityOrSpec, setQuantityOrSpec] = useState(urlSize ? `Size: ${urlSize}` : "");

  useEffect(() => {
    if (urlProduct) setSelectedProduct(urlProduct);
    if (urlVariant) setSelectedVariant(urlVariant);
    if (urlSize) setQuantityOrSpec(`Size: ${urlSize}`);
  }, [urlProduct, urlVariant, urlSize]);

  const activeFamily = products.find(
    (p) => p.name.toLowerCase() === selectedProduct.toLowerCase()
  );
  const hasVariants = Boolean(activeFamily?.variants && activeFamily.variants.length > 0);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Sending…");
    const data = Object.fromEntries(new FormData(event.currentTarget));
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formType: mode }),
      });
      setStatus(
        response.ok
          ? "Thank you. Your inquiry has been recorded; our sales team will contact you."
          : "Unable to send right now. Please email info@shivaflex.com."
      );
      if (response.ok) event.currentTarget.reset();
    } catch {
      setStatus("Unable to send right now. Please email info@shivaflex.com.");
    }
  }

  const dealer = mode === "dealer";

  return (
    <form onSubmit={submit} className="grid gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-bold text-ink">
          {dealer ? "Contact name" : "Your name"}
          <input required name="name" className="field mt-1.5" autoComplete="name" />
        </label>
        <label className="text-sm font-bold text-ink">
          Company name
          <input required name="company" className="field mt-1.5" autoComplete="organization" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-bold text-ink">
          Email
          <input required type="email" name="email" className="field mt-1.5" autoComplete="email" />
        </label>
        <label className="text-sm font-bold text-ink">
          Phone
          <input required type="tel" name="phone" className="field mt-1.5" autoComplete="tel" />
        </label>
      </div>

      {dealer ? (
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="text-sm font-bold text-ink">
            Region / city
            <input required name="region" className="field mt-1.5" />
          </label>
          <label className="text-sm font-bold text-ink">
            Business type
            <select required name="businessType" className="field mt-1.5" defaultValue="">
              <option value="" disabled>Select type</option>
              <option>Dealer</option>
              <option>Distributor</option>
              <option>Trader</option>
              <option>Other</option>
            </select>
          </label>
        </div>
      ) : (
        <>
          <div className={`grid gap-5 ${hasVariants ? "sm:grid-cols-2" : "grid-cols-1"}`}>
            <label className="text-sm font-bold text-ink">
              Product interest
              <select
                required
                name="product"
                className="field mt-1.5"
                value={selectedProduct}
                onChange={(e) => {
                  setSelectedProduct(e.target.value);
                  setSelectedVariant("");
                }}
              >
                <option value="" disabled>
                  Select a product family
                </option>
                <option value="Not sure — need selection support">
                  Not sure — need selection support
                </option>
                {productFamilyNames.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </label>

            {hasVariants && (
              <label className="text-sm font-bold text-ink">
                {activeFamily?.variantLabel || "Variant"} / Size
                <select
                  name="variant"
                  className="field mt-1.5"
                  value={selectedVariant}
                  onChange={(e) => setSelectedVariant(e.target.value)}
                >
                  <option value="">
                    Select {activeFamily?.variantLabel?.toLowerCase() || "variant"} (or leave open)
                  </option>
                  {activeFamily!.variants!.map((v) => (
                    <option key={v.slug} value={v.name}>
                      {v.name}
                      {v.sizes && v.sizes !== "[TODO: confirm spec]" ? ` (${v.sizes})` : ""}
                    </option>
                  ))}
                </select>
              </label>
            )}
          </div>

          <label className="text-sm font-bold text-ink">
            Quantity / specification needed
            <input
              name="quantity"
              className="field mt-1.5"
              value={quantityOrSpec}
              onChange={(e) => setQuantityOrSpec(e.target.value)}
              placeholder="e.g. 200 m, 50 mm I.D., working pressure rating, or custom reel length"
            />
          </label>
        </>
      )}

      {dealer && (
        <label className="text-sm font-bold text-ink">
          Expected purchase volume
          <input name="volume" className="field mt-1.5" placeholder="Monthly / annual estimate" />
        </label>
      )}

      <label className="text-sm font-bold text-ink">
        {dealer ? "Tell us about your business" : "Message / application details"}
        <textarea
          required
          name="message"
          rows={4}
          className="field mt-1.5 resize-y"
          placeholder={
            dealer
              ? "Territory, current product lines, customer base…"
              : "Tell us about the working medium, environment, operating pressure, or any questions…"
          }
        />
      </label>

      <div>
        <button type="submit" className="btn-primary w-full sm:w-auto text-base font-bold min-h-[48px]">
          {dealer ? "Send dealer inquiry" : "Send RFQ"}
        </button>
        {status && (
          <div
            className={`mt-4 rounded-lg p-4 text-sm font-semibold ${
              status.startsWith("Thank you")
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-amber-50 text-amber-800 border border-amber-200"
            }`}
            role="status"
          >
            {status}
          </div>
        )}
      </div>
    </form>
  );
}

export function RFQForm({ mode = "rfq" }: { mode?: Mode }) {
  return (
    <Suspense fallback={<div className="text-sm text-slate-500">Loading form…</div>}>
      <RFQFormInner mode={mode} />
    </Suspense>
  );
}
