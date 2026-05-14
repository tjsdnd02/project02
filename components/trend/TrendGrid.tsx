import { Trend } from "@/types/trend";
import TrendCard from "./TrendCard";

interface TrendGridProps {
  trends: Trend[];
}

export default function TrendGrid({ trends }: TrendGridProps) {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {trends.map((trend) => (
        <TrendCard key={trend.id} trend={trend} />
      ))}
    </section>
  );
}
