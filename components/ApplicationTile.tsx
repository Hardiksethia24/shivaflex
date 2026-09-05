import Link from "next/link";

const defaultIcons: Record<string, string> = {
  "Agriculture & Irrigation": "⌁",
  Construction: "▥",
  "Mining & Quarry": "◆",
  "Welding & Gas": "✦",
  "Automotive & Car Wash": "◒",
  "Fire & Safety": "✚",
};

export function ApplicationTile({
  name,
  description,
  icon,
}: {
  name: string;
  description?: string;
  icon?: string;
}) {
  return (
    <Link
      href={`/products?application=${encodeURIComponent(name)}`}
      className="group flex flex-col justify-between border border-slate-200 bg-white p-3.5 sm:p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-brand hover:shadow-card"
    >
      <div>
        <span className="text-xl sm:text-3xl text-brand">
          {icon || defaultIcons[name] || "○"}
        </span>
        <h3 className="mt-2.5 sm:mt-4 font-display text-base sm:text-xl uppercase leading-snug text-ink group-hover:text-brand">
          {name}
        </h3>
        {description && (
          <p className="mt-1.5 sm:mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600 line-clamp-1 sm:line-clamp-none">
            {description}
          </p>
        )}
      </div>
      <div className="mt-3 sm:mt-5 pt-2 sm:pt-3 border-t border-slate-100 flex items-center text-[11px] sm:text-xs font-bold uppercase tracking-wider text-brand group-hover:text-secondary">
        Browse <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
      </div>
    </Link>
  );
}
