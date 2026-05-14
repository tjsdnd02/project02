interface EmptyStateProps {
  title?: string;
  description?: string;
}

export default function EmptyState({
  title = "조건에 맞는 트렌드가 없습니다.",
  description = "카테고리 또는 정렬 기준을 변경해 다시 확인해보세요.",
}: EmptyStateProps) {
  return (
    <section className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 px-6 py-12 text-center">
      <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
      <p className="mt-2 text-sm text-zinc-600">{description}</p>
    </section>
  );
}
