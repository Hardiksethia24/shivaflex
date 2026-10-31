import type { NextConfig } from "next";

const removedProductSlugs = [
  "suction-hose",
  "medium-duty-green-hose",
  "heavy-duty-hose",
  "flex-duct-hose",
  "transparent-pneumatic-hose",
  "water-hose",
  "garden-hose",
  "construction-water-hose",
  "welding-hose",
  "super-spray-hose",
  "car-washing-power-hose",
  "five-layer-hose",
  "delivery-hose-pipe",
  "car-washing-hose",
  "thunder-hose",
  "garden-tubing",
];

const nextConfig: NextConfig = {
  images: { localPatterns: [{ pathname: "/images/**" }] },
  async redirects() {
    const baseRedirects = removedProductSlugs.map((slug) => ({
      source: `/products/${slug}`,
      destination: "/products",
      permanent: true,
    }));

    const suctionRedirects = [
      {
        source: "/products/type-1",
        destination: "/products/suction-pipe?variant=medium-duty",
        permanent: true,
      },
      {
        source: "/products/type-2",
        destination: "/products/suction-pipe?variant=heavy-duty",
        permanent: true,
      },
      {
        source: "/products/suction-pipe/type-1",
        destination: "/products/suction-pipe?variant=medium-duty",
        permanent: true,
      },
      {
        source: "/products/suction-pipe/type-2",
        destination: "/products/suction-pipe?variant=heavy-duty",
        permanent: true,
      },
      {
        source: "/products/suction-pipe-type-1",
        destination: "/products/suction-pipe?variant=medium-duty",
        permanent: true,
      },
      {
        source: "/products/suction-pipe-type-2",
        destination: "/products/suction-pipe?variant=heavy-duty",
        permanent: true,
      },
    ];

    return [...baseRedirects, ...suctionRedirects];
  },
};

export default nextConfig;
