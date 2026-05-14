export default function TodaySummaryCard() {
  return (
    <aside className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
      <p className="text-sm font-semibold text-zinc-500">오늘의 요약</p>
      <ul className="mt-4 space-y-3 text-sm text-zinc-700">
        <li>검토 완료 트렌드 12개</li>
        <li>평균 상업성 78점</li>
        <li>신규 문의 유도 CTA 노출</li>
      </ul>
    </aside>
  );
}
