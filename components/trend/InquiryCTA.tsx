import Link from "next/link";

export default function InquiryCTA() {
  return (
    <section className="rounded-2xl border border-zinc-200 bg-zinc-50 px-6 py-8">
      <h2 className="text-xl font-bold text-zinc-900">우리 브랜드에 맞는 트렌드 분석이 필요하신가요?</h2>
      <p className="mt-2 text-sm text-zinc-600">
        카테고리, 타깃, 메뉴 방향에 맞춘 맞춤 리포트 문의를 받을 수 있습니다.
      </p>
      <Link
        href="/inquiry"
        className="mt-5 inline-flex rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-700"
      >
        맞춤 리포트 문의하기
      </Link>
    </section>
  );
}
