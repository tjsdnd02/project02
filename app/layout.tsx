import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trend Bite",
  description: "음식·카페·디저트 트렌드 B2B 리포트 서비스",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
