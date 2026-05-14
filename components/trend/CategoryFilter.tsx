import { TREND_CATEGORIES, TrendListFilter } from "@/types/trend";

interface CategoryFilterProps {
  selected: TrendListFilter;
  onSelect: (value: TrendListFilter) => void;
}

const categories: TrendListFilter[] = ["전체", ...TREND_CATEGORIES];

export default function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <section aria-label="카테고리 필터" className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const isSelected = selected === category;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelect(category)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              isSelected ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
            }`}
          >
            {category}
          </button>
        );
      })}
    </section>
  );
}
