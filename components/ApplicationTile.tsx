import Link from "next/link";

const icons: Record<string, string> = { "Agriculture & Irrigation": "⌁", Construction: "▥", Industrial: "◈", "Mining & Quarry": "◆", "Welding & Gas": "✦", "Spraying & Agrochemical": "◌", "Automotive/Car Wash": "◒", "Fire & Safety": "✚" };
export function ApplicationTile({ name }: { name: string }) { return <Link href={`/products?application=${encodeURIComponent(name)}`} className="group flex min-h-36 flex-col justify-between border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand hover:shadow-card"><span className="text-2xl text-brand">{icons[name] || "○"}</span><span className="font-display text-xl uppercase leading-5 text-ink group-hover:text-brand">{name}</span></Link>; }
