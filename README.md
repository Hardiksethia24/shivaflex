# Shivaflex corporate website

Next.js + TypeScript + Tailwind CSS catalogue and RFQ site for Shivom Rubber Products (P) Ltd. / Shivaflex.

## Run locally

1. Install Node.js 20 LTS or later.
2. Run `npm install`.
3. Run `npm run dev` and open `http://localhost:3000`.
4. Run `npm run build` before deployment to verify the production build.

## Content and image updates

- The master product list is [`lib/products.ts`](./lib/products.ts). It controls catalogue information, slugs and expected product image paths.
- Place approved images in `public/images/` using the exact names in [`PHOTO-SHOT-LIST.md`](./PHOTO-SHOT-LIST.md). The reusable image component will replace its placeholder automatically.
- The supplied Shivaflex logo is at `public/images/brand/logo.jpeg` and is rendered by `components/Logo.tsx`. Replace that file using the same name if a revised approved logo is supplied.
- The contact route is a safe v1 stub. Configure `app/api/contact/route.ts` with an approved email or CRM provider before launch.

## Mobile checks

- Verified responsive viewports across 360px, 390px, 414px, and 768px.
- Zero horizontal overflow (`document.documentElement.scrollWidth <= window.innerWidth`) on all routes, with `overflow-x: clip` applied on `html` and `body` as a safety net.
- Sticky navigation header and top utility bar are solid white with hairline borders to eliminate background logo ghosting.
- Mobile menu locks background scroll, closes upon link navigation, and features an accordion for all 11 product families with nested variant expansion.
- Product variant selectors use singular labels ("Variant 1", "Variant 2", etc.) in a clean 2-column grid with min-height 44px tap targets.
- Product specification tables scroll horizontally within their own container with sticky frozen first columns.
- Exactly one "Request this product" button per product and family page, located in the bottom inquiry section.
- Form inputs enforce 16px font-size to prevent iOS Safari auto-zooming, with full-width buttons on mobile.

## Client confirmation required

- Unit 1 pin code: current company records show **334803**, while the brochure shows **343084**.
- Actual certifications, if any.
- Dealer commercial terms and regional coverage.
- The site palette uses the approved logo colors: deep royal blue `#084091`, secondary blue `#5681c4`, and CTA red `#e01519`.
