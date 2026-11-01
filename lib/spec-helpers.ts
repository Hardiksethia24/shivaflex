import { specTables, type SpecTable } from "@/lib/product-specs";

// Map variant slugs, including backwards compatibility for type-1 / type-2
export function normalizeVariantSlug(slug?: string): string | undefined {
  if (!slug) return undefined;
  if (slug === "type-1") return "medium-duty";
  if (slug === "type-2") return "heavy-duty";
  return slug;
}

// Find matching spec table strictly from product-specs.ts
export function findSpecTable(
  familySlug: string,
  variantSlug?: string
): SpecTable | undefined {
  const normFamily = (slug: string) => {
    if (slug === "25mm-pneumatic-hose") return "pneumatic-hose-25mm";
    return slug;
  };

  const targetFamily = normFamily(familySlug);
  const targetVariant = normalizeVariantSlug(variantSlug);

  // If a variant is specified:
  if (targetVariant) {
    // 1. Check for exact variant match (e.g. suction-pipe medium-duty, braided-hose water-braided)
    const exact = specTables.find(
      (t) => normFamily(t.family) === targetFamily && t.variant === targetVariant
    );
    if (exact) return exact;

    // 2. For Super Car Washing Hose, the single table covers both 10mm and 12mm sizes
    if (targetFamily === "super-car-washing-hose") {
      return specTables.find((t) => normFamily(t.family) === targetFamily);
    }

    // 3. For Garden Pipe, five variants explicitly have no spec table
    if (targetFamily === "garden-pipe") {
      return undefined;
    }

    return undefined;
  }

  // Family-level match (no variant specified):
  return specTables.find(
    (t) => normFamily(t.family) === targetFamily && !t.variant
  );
}
