interface LoadingStateProps {
  label?: string;
  count?: number;
}

export default function LoadingState({ label = "트렌드를 불러오는 중...", count = 6 }: LoadingStateProps) {
  return (
    <section aria-live="polite" aria-busy="true" className="space-y-4">
      <p className="text-sm text-zinc-500">{label}</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className="h-48 animate-pulse rounded-2xl border border-zinc-200 bg-zinc-100" />
        ))}
      </div>
    </section>
  );
}
