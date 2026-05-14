import { TrendSortOption } from "@/types/trend";

interface SortFilterProps {
  selected: TrendSortOption;
  onSelect: (value: TrendSortOption) => void;
}

const options: Array<{ label: string; value: TrendSortOption }> = [
  { label: "최신순", value: "latest" },
  { label: "점수순", value: "score" },
];

export default function SortFilter({ selected, onSelect }: SortFilterProps) {
  return (
    <section aria-label="정렬 필터" className="inline-flex rounded-full border border-zinc-200 bg-white p-1">
      {options.map((option) => {
        const active = selected === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onSelect(option.value)}
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              active ? "bg-zinc-900 text-white" : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </section>
  );
}
