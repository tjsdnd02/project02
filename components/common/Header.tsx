import Link from "next/link";

const menus = [
  { label: "오늘의 트렌드", href: "/trends" },
  { label: "리포트", href: "/reports" },
  { label: "샘플 리포트", href: "/sample-report" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="text-lg font-bold tracking-tight text-zinc-900">
          Trend Bite
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {menus.map((menu) => (
            <Link key={menu.href} href={menu.href} className="text-sm font-medium text-zinc-700 hover:text-zinc-900">
              {menu.label}
            </Link>
          ))}
          <Link
            href="/inquiry"
            className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-700"
          >
            맞춤 리포트 문의
          </Link>
        </nav>

        <button
          type="button"
          aria-label="모바일 메뉴 열기"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-300 text-zinc-700 md:hidden"
        >
          <span className="text-lg">☰</span>
        </button>
      </div>
    </header>
  );
}
