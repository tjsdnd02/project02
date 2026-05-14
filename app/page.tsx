import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col items-start justify-center px-6 py-16">
      <p className="text-sm font-medium text-zinc-500">Trend Bite MVP</p>
      <h1 className="mt-3 text-3xl font-bold text-zinc-900">트렌드 목록 화면이 준비되었습니다.</h1>
      <p className="mt-3 text-zinc-600">아래 링크에서 오늘의 트렌드 목록 페이지를 확인하세요.</p>
      <Link href="/trends" className="mt-6 rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white">
        /trends 바로가기
      </Link>
    </main>
  );
}
