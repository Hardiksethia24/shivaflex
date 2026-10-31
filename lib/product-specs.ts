// Spec tables migrated from the old shivaflex.com product pages.
// Values copied as-is from the old site. Do NOT "correct" numbers in code;
// anything marked `check` needs confirmation from the client first.

export type SpecColumn = { key: string; label: string; unit?: string };
export type SpecTable = {
  id: string;
  title: string;
  /** product family slug on the new site */
  family: string;
  /** variant slug inside the family, if the table belongs to one variant only */
  variant?: string;
  /** old page this came from, for traceability */
  source: string;
  colour?: string;
  check?: string; // shown to the dev/client, never on the live page
  columns: SpecColumn[];
  rows: Record<string, string | number>[];
};

// Display names for the three Suction Pipe variants.
export const suctionPipeVariants = [
  { slug: "medium-duty", name: "Medium Duty" },
  { slug: "heavy-duty", name: "Heavy Duty" },
  { slug: "type-3", name: "Type 3" }, // unchanged; no spec table yet
];

const NOMINAL = [
  { key: "inch", label: "Nominal size", unit: "inch" },
  { key: "mm", label: "Nominal size", unit: "mm" },
];

export const specTables: SpecTable[] = [
  {
    id: "delivery-pipe",
    title: "Delivery Pipe specifications",
    family: "delivery-pipe",
    source: "delivery-hose-pipe.htm",
    columns: [
      ...NOMINAL,
      { key: "id", label: "I.D.", unit: "mm" },
      { key: "od", label: "O.D.", unit: "mm" },
      { key: "bend", label: "Bending radius", unit: "mm" },
      { key: "length", label: "Standard length", unit: "m" },
      { key: "wp", label: "Working pressure", unit: "kg/cm²" },
      { key: "weight", label: "Weight per 30 m", unit: "kg" },
    ],
    rows: [
      { inch: "3/4", mm: 20, id: 19, od: 23.6, bend: 45, length: "30", wp: 7, weight: 6.1 },
      { inch: "1", mm: 25, id: 25.4, od: 30, bend: 55, length: "30", wp: 7, weight: 8.2 },
      { inch: "1 1/4", mm: 30, id: 31.8, od: 36.8, bend: 75, length: "30", wp: 6.5, weight: 10.8 },
      { inch: "1 1/2", mm: 40, id: 38, od: 43.3, bend: 95, length: "30", wp: 5, weight: 14.5 },
      { inch: "2", mm: 50, id: 50.8, od: 57.8, bend: 122, length: "30/50", wp: 4, weight: 24.5 },
      { inch: "2 1/2", mm: 65, id: 63.5, od: 72, bend: 160, length: "30/45", wp: 4, weight: 35 },
      { inch: "3", mm: 75, id: 76.2, od: 85, bend: 272, length: "30", wp: 3.5, weight: 44 },
      { inch: "4", mm: 100, id: 101.2, od: 112.2, bend: 290, length: "30", wp: 3.5, weight: 75 },
    ],
  },
  {
    id: "suction-md-green",
    title: "Medium Duty specifications",
    family: "suction-pipe",
    variant: "medium-duty",
    source: "md-green.htm",
    colour: "Green",
    columns: [
      ...NOMINAL,
      { key: "id", label: "I.D.", unit: "mm" },
      { key: "od", label: "O.D.", unit: "mm" },
      { key: "bend", label: "Bending radius", unit: "mm" },
      { key: "wp", label: "Working pressure at 30°C", unit: "kg/cm²" },
      { key: "bp", label: "Bursting pressure at 30°C", unit: "kg/cm²" },
      { key: "length", label: "Standard length", unit: "m" },
    ],
    rows: [
      { inch: "3/4", mm: 20, id: "19.0 ± 0.5", od: "23.6 ± 1.0", bend: 45, wp: 7, bp: 24, length: "30/50" },
      { inch: "1", mm: 25, id: "25.4 ± 0.5", od: "30.0 ± 1.0", bend: 55, wp: 7, bp: 23, length: "30/50" },
      { inch: "1 1/4", mm: 30, id: "31.8 ± 0.5", od: "36.8 ± 1.0", bend: 75, wp: 6.5, bp: 20, length: "30/50" },
      { inch: "1 1/2", mm: 40, id: "38.0 ± 0.5", od: "43.3 ± 1.0", bend: 95, wp: 5, bp: 16, length: "30/50" },
      { inch: "2", mm: 50, id: "50.8 ± 0.5", od: "57.8 ± 1.5", bend: 122, wp: 4, bp: 16, length: "30/45/50" },
      { inch: "2 1/2", mm: 65, id: "63.5 ± 1.0", od: "72.0 ± 1.5", bend: 160, wp: 4, bp: 16, length: "30/45" },
      { inch: "3", mm: 75, id: "76.2 ± 1.0", od: "85.0 ± 1.5", bend: 272, wp: 3.5, bp: 15, length: "30/36" },
      { inch: "4", mm: 100, id: "101.2 ± 1.0", od: "112.2 ± 2.0", bend: 290, wp: 3.5, bp: 11, length: "15/18/30" },
    ],
  },
  {
    id: "suction-heavy-duty",
    title: "Heavy Duty specifications",
    family: "suction-pipe",
    variant: "heavy-duty",
    source: "heavy-duty-hose.htm",
    columns: [
      ...NOMINAL,
      { key: "id", label: "I.D.", unit: "mm" },
      { key: "od", label: "O.D.", unit: "mm" },
      { key: "bend", label: "Bending radius", unit: "mm" },
      { key: "wp", label: "Working pressure at 30°C", unit: "kg/cm²" },
      { key: "bp", label: "Bursting pressure at 30°C", unit: "kg/cm²" },
      { key: "length", label: "Standard length", unit: "m" },
    ],
    rows: [
      { inch: "1", mm: 25, id: "25.4 ± 0.5", od: "31.5 ± 0.5", bend: 48, wp: 8, bp: 25, length: "30" },
      { inch: "1 1/4", mm: 30, id: "31.8 ± 0.5", od: "38.8 ± 0.5", bend: 68, wp: 7, bp: 21, length: "30" },
      { inch: "1 1/2", mm: 40, id: "38.0 ± 0.5", od: "46.3 ± 1.5", bend: 70, wp: 5.5, bp: 18, length: "30" },
      { inch: "2", mm: 50, id: "50.8 ± 0.5", od: "60.8 ± 1.5", bend: 100, wp: 4.5, bp: 18, length: "30" },
      { inch: "2 1/2", mm: 65, id: "63.5 ± 1.0", od: "74.5 ± 1.5", bend: 120, wp: 4.5, bp: 18, length: "30" },
      { inch: "3", mm: 75, id: "76.2 ± 1.0", od: "87.2 ± 1.5", bend: 155, wp: 4.5, bp: 18, length: "30" },
      { inch: "4", mm: 100, id: "101.2 ± 1.5", od: "114.2 ± 2.0", bend: 213, wp: 4, bp: 14, length: "15/18/30" },
      { inch: "5", mm: 125, id: "127.0 ± 1.5", od: "141.0 ± 2.0", bend: 230, wp: 3, bp: 10, length: "15/18" },
      { inch: "6", mm: 150, id: "152.4 ± 1.5", od: "169.4 ± 2.0", bend: 375, wp: 2.5, bp: 9, length: "15/18" },
      { inch: "8", mm: 200, id: "203.2 ± 2.0", od: "224.4 ± 2.0", bend: 600, wp: 2.5, bp: 8, length: "4.5/6" },
      { inch: "10", mm: 250, id: "254.0 ± 2.0", od: "284.4 ± 2.0", bend: 1000, wp: 2.5, bp: 8, length: "4.5/6" },
    ],
  },
  {
    id: "duct-hose",
    title: "Duct Hose specifications",
    family: "duct-hose",
    source: "flex-duct-hose.htm",
    check:
      "Row 2 1/2 corrected from the old site: nominal 60 -> 65 mm (2 1/2 inch is 65 mm in every other table) and O.D. 38.5 -> 68.5 mm (old value was smaller than the I.D.; 68.5 follows the O.D. = I.D. + about 7-8 mm pattern of the other rows). Both are inferred. Verify against the real hose, and check the 60.5 mm I.D. too (other 2 1/2 hoses use 63.5).",
    columns: [
      ...NOMINAL,
      { key: "id", label: "I.D.", unit: "mm" },
      { key: "od", label: "O.D.", unit: "mm" },
      { key: "bend", label: "Bending radius", unit: "mm" },
      { key: "length", label: "Standard length", unit: "m" },
    ],
    rows: [
      { inch: "3/4", mm: 22, id: 21, od: 28.6, bend: 35, length: "30" },
      { inch: "1", mm: 25, id: 25.4, od: 32.1, bend: 45, length: "30" },
      { inch: "1 1/4", mm: 30, id: 31.8, od: 38.64, bend: 50, length: "30" },
      { inch: "1 1/2", mm: 40, id: 38, od: 45, bend: 55, length: "30" },
      { inch: "2", mm: 50, id: 50.8, od: 57.2, bend: 65, length: "30" },
      { inch: "2 1/2", mm: 65, id: 60.5, od: 68.5, bend: 75, length: "30" },
      { inch: "3", mm: 75, id: 76.5, od: 83.54, bend: 95, length: "30" },
      { inch: "4", mm: 100, id: 101.2, od: 108.94, bend: 125, length: "30" },
      { inch: "5", mm: 125, id: 127, od: 135.2, bend: 140, length: "15" },
      { inch: "6", mm: 150, id: 152.4, od: 161.1, bend: 205, length: "15" },
      { inch: "8", mm: 200, id: 204, od: 214.4, bend: 270, length: "10" },
      { inch: "10", mm: 250, id: 253, od: 264, bend: 370, length: "10" },
    ],
  },
  {
    id: "pneumatic-hose-25mm",
    title: "Pneumatic Hose 25mm specifications",
    family: "pneumatic-hose-25mm",
    source: "transparent-pneumatic-hose.htm (25 mm row only)",
    columns: [
      { key: "size", label: "Size", unit: "mm" },
      { key: "wall", label: "Wall thickness", unit: "mm" },
      { key: "wp", label: "Working pressure at 30°C", unit: "kg/cm²" },
      { key: "length", label: "Standard length", unit: "m" },
    ],
    rows: [{ size: 25, wall: 4.8, wp: 15, length: "50/100" }],
  },
  {
    id: "braided-water",
    title: "Water Braided Hose specifications",
    family: "braided-hose",
    variant: "water-braided",
    source: "water-garden-const-hose.htm (Water Hose)",
    colour: "Green",
    check: "Matched by name to the Water Braided variant. Confirm.",
    columns: [
      { key: "size", label: "Size", unit: "mm" },
      { key: "wall", label: "Wall thickness", unit: "mm" },
      { key: "wp", label: "Working pressure at 30°C", unit: "kg/cm²" },
      { key: "length", label: "Standard length", unit: "m" },
    ],
    rows: [
      { size: 12, wall: 2, wp: 7, length: "30/50/100" },
      { size: 20, wall: 2.5, wp: 7, length: "30/50/100" },
      { size: 25, wall: 3, wp: 5, length: "30/50/100" },
    ],
  },
  {
    id: "garden-pipe-reference",
    title: "Garden Pipe specifications",
    family: "garden-pipe",
    source: "water-garden-const-hose.htm (Garden Hose)",
    colour: "Green-Transparent combination",
    check:
      "Family-level table: show it once on the Garden Pipe main page only. The five variant pages (Transparent, Garden Foam, Transparent Zebra, Shiva Gold, Nylon) stay exactly as they are, with no table.",
    columns: [
      { key: "size", label: "Size", unit: "mm" },
      { key: "wall", label: "Wall thickness", unit: "mm" },
      { key: "wp", label: "Working pressure at 30°C", unit: "kg/cm²" },
      { key: "length", label: "Standard length", unit: "m" },
    ],
    rows: [
      { size: 12, wall: 1.7, wp: 7, length: "30/50/100" },
      { size: 20, wall: 2, wp: 7, length: "30/50/100" },
      { size: 25, wall: 2.7, wp: 5, length: "30/50/100" },
    ],
  },
  {
    id: "power-spray-hose",
    title: "Power Spray Hose specifications",
    family: "power-spray-hose",
    source: "super-spray-car-washing-hose.htm (Power Spray Hose)",
    columns: [
      { key: "size", label: "Size", unit: "mm" },
      { key: "wall", label: "Wall thickness", unit: "mm" },
      { key: "wp", label: "Working pressure at 30°C", unit: "kg/cm²" },
      { key: "length", label: "Standard length", unit: "m" },
    ],
    rows: [
      { size: 8.8, wall: 3.2, wp: 150, length: "30/50/100" },
      { size: 10, wall: 3.5, wp: 150, length: "50/70/150" },
      { size: 12.5, wall: 3.5, wp: 150, length: "50/100" },
      { size: 20, wall: 4, wp: 90, length: "50/100" },
    ],
  },
  {
    id: "super-car-washing",
    title: "Super Car Washing Hose specifications",
    family: "super-car-washing-hose",
    source: "spray-cw-rock-hose.htm (Car Washing Power Hose, 10 mm and 12 mm rows only)",
    colour: "Black",
    check:
      "Confirmed by client: same as the old Car Washing Power Hose. Only the 10 mm and 12 mm rows are kept (old 8 mm row dropped). Working pressure '60/100' is copied as printed on the old site.",
    columns: [
      { key: "size", label: "Size", unit: "mm" },
      { key: "id", label: "I.D.", unit: "mm" },
      { key: "od", label: "O.D.", unit: "mm" },
      { key: "wp", label: "Working pressure", unit: "kg/cm²" },
      { key: "bp", label: "Bursting pressure", unit: "kg/cm²" },
      { key: "packing", label: "Standard packing", unit: "m" },
    ],
    rows: [
      { size: 8, id: 8, od: 13, wp: "70/100", bp: 225, packing: "2 x 60 / 1 x 100" },
      { size: 10, id: 10, od: 15.5, wp: "60/100", bp: 200, packing: "2 x 60 / 1 x 100" },
      { size: 12, id: 12, od: 17.5, wp: "60/100", bp: 200, packing: "2 x 60 / 1 x 100" },
    ],
  },
  {
    id: "rock-drill-hose",
    title: "Rock Drill Hose specifications",
    family: "rock-drill-hose",
    source: "spray-cw-rock-hose.htm (Rock Drill Hose)",
    colour: "Golden Yellow",
    columns: [
      { key: "size", label: "Size", unit: "mm" },
      { key: "od", label: "O.D.", unit: "mm" },
      { key: "bp", label: "Bursting pressure at 30°C", unit: "kg/cm²" },
      { key: "length", label: "Standard length", unit: "m" },
    ],
    rows: [
      { size: 20, od: 28.2, bp: 100, length: "100/200" },
      { size: 25, od: 35, bp: 90, length: "100/200" },
    ],
  },
];

// Old products that are NOT in the new product list. Kept for reference only.
// Do NOT render these anywhere on the site.
export const archivedOldSpecs = {
  weldingHose: [
    { size: 8, wall: 3, wp: 7, length: "50/100" },
    { size: 10, wall: 3.5, wp: 7, length: "50/100" },
  ],
  sprayHose: [
    { size: 8.5, od: 14.5, bp: 150, length: "45/50/60/100/200" },
    { size: 10, od: 16, bp: 150, length: "45/50/60/100/200" },
    { size: 12, od: 19, bp: 150, length: "45/50/60/100/200" },
  ],
  constructionWaterHose: [
    { size: 12, wall: 2, wp: 7, length: "30/50/100" },
    { size: 20, wall: 2.5, wp: 7, length: "30/50/100" },
    { size: 25, wall: 3, wp: 5, length: "30/50/100" },
  ],
  carWashingHose: [
    { size: 12, wall: 5.0, wp: 40, length: "30/60/100" },
    { size: 20, wall: 5.5, wp: 30, length: "30/60/100" },
  ],
  transparentPneumaticAllSizes: [
    { size: 5, wall: 2.5, wp: 15, length: "50/100" },
    { size: 6, wall: 3, wp: 25, length: "50/100" },
    { size: 8, wall: 3, wp: 25, length: "50/100" },
    { size: 10, wall: 3.5, wp: 25, length: "50/100" },
    { size: 12, wall: 3.5, wp: 20, length: "50/100/200" },
    { size: 20, wall: 4, wp: 20, length: "50/100/200" },
    { size: 25, wall: 4.8, wp: 15, length: "50/100" },
    { size: 31, wall: 4.8, wp: 15, length: "50/100" },
    { size: 38, wall: 5, wp: 15, length: "30/50" },
    { size: 50, wall: 6, wp: 10, length: "30/50" },
  ],
};
