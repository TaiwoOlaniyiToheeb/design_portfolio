"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types/project";

export default function CategoryFilter({
  categories,
  active,
  onChange,
}: {
  categories: Category[];
  active: string;
  onChange: (value: string) => void;
}) {
  const all = ["All", ...categories];
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
      {all.map((c) => (
        <button
          key={c}
          onClick={() => onChange(c)}
          aria-pressed={active === c}
          className={cn(
            "focus-ring rounded-full border px-4 py-2 text-sm transition-colors",
            active === c
              ? "border-ink bg-ink text-paper"
              : "border-line text-ink/75 hover:border-ink/40"
          )}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
