"use client";

import { useMemo, useState } from "react";
import Header from "@/components/common/Header";
import EmptyState from "@/components/common/EmptyState";
import LoadingState from "@/components/common/LoadingState";
import CategoryFilter from "@/components/trend/CategoryFilter";
import SortFilter from "@/components/trend/SortFilter";
import TrendGrid from "@/components/trend/TrendGrid";
import TodaySummaryCard from "@/components/trend/TodaySummaryCard";
import InquiryCTA from "@/components/trend/InquiryCTA";
import MobileStickyCTA from "@/components/trend/MobileStickyCTA";
import { mockTrends } from "@/data/mockTrends";
import { TrendListFilter, TrendSortOption } from "@/types/trend";

export default function TrendsPage() {
  const [selectedCategory, setSelectedCategory] = useState<TrendListFilter>("전체");
  const [sortBy, setSortBy] = useState<TrendSortOption>("latest");
  const [isLoading] = useState(false);

  const filteredAndSortedTrends = useMemo(() => {
    const filtered =
      selectedCategory === "전체" ? mockTrends : mockTrends.filter((trend) => trend.category === selectedCategory);

    return [...filtered].sort((a, b) => {
      if (sortBy === "score") {
        return b.score - a.score;
      }

      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });
  }, [selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />

      <main className="mx-auto w-full max-w-6xl px-5 pb-28 pt-10 md:px-8 md:pb-16">
        <section className="grid gap-6 md:grid-cols-[1fr_320px] md:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">MVP 첫 화면 · /trends</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">오늘의 음식·카페·디저트 트렌드</h1>
            <p className="mt-4 max-w-2xl text-sm text-zinc-600 md:text-base">
              B2B 메뉴 기획자와 마케터가 바로 활용할 수 있도록 최신 트렌드를 점수와 활용 아이디어 중심으로 정리합니다.
            </p>
          </div>

          <div className="hidden md:block">
            <TodaySummaryCard />
          </div>
        </section>

        <section className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
          <SortFilter selected={sortBy} onSelect={setSortBy} />
        </section>

        <section className="mt-8">
          {isLoading ? (
            <LoadingState />
          ) : filteredAndSortedTrends.length > 0 ? (
            <TrendGrid trends={filteredAndSortedTrends} />
          ) : (
            <EmptyState />
          )}
        </section>

        <section className="mt-10 hidden md:block">
          <InquiryCTA />
        </section>
      </main>

      <MobileStickyCTA />
    </div>
  );
}
