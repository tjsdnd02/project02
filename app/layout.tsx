import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trend Bite",
  description: "Food/Cafe/Dessert B2B trend report service",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
