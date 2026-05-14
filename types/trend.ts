export const TREND_CATEGORIES = [
  "카페",
  "디저트",
  "식품",
  "메뉴",
  "콘텐츠",
] as const;

export type TrendCategory = (typeof TREND_CATEGORIES)[number];
export type TrendListFilter = "전체" | TrendCategory;
export type TrendSortOption = "latest" | "score";

export interface Trend {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: TrendCategory;
  score: number;
  tags: string[];
  publishedAt: string; // ISO date string (e.g. 2026-05-14)
}
