import Link from "next/link";
import { Trend } from "@/types/trend";

interface TrendCardProps {
  trend: Trend;
}

export default function TrendCard({ trend }: TrendCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center justify-between gap-2">
        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">{trend.category}</span>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">{trend.score}점</span>
      </div>

      <h3 className="mt-4 line-clamp-2 text-lg font-bold text-zinc-900">{trend.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm text-zinc-600">{trend.summary}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {trend.tags.map((tag) => (
          <li key={tag} className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-700">
            #{tag}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <Link href={`/trends/${trend.slug}`} className="text-sm font-semibold text-zinc-900 hover:underline">
          자세히 보기 →
        </Link>
        <p className="mt-2 text-xs text-zinc-500">발행일 {trend.publishedAt}</p>
      </div>
    </article>
  );
}
