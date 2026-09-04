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
- Product values marked `[TODO]` must be replaced by client-approved sizes, pressure ratings and construction details. Do not publish unconfirmed values.
- Add approved PDFs at `public/spec-sheets/{product-slug}.pdf`.
- The contact route is a safe v1 stub. Configure `app/api/contact/route.ts` with an approved email or CRM provider before launch.

## Client confirmation required

- Unit 1 pin code: current company records show **334803**, while the brochure shows **343084**.
- Actual certifications, if any.
- Exact specifications for product lines marked `[TODO]`.
- Dealer commercial terms and regional coverage.
- The site palette uses the approved logo colors: deep royal blue `#084091`, secondary blue `#5681c4`, and CTA red `#e01519`.
