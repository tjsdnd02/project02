import Link from "next/link";

export default function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-200 bg-white p-4 md:hidden">
      <Link
        href="/inquiry"
        className="flex h-12 items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-white"
      >
        맞춤 리포트 문의하기
      </Link>
    </div>
  );
}
