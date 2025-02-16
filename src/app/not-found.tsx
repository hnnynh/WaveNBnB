import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh] text-center text-black pt-20">
      <h2 className="text-4xl font-bold mb-4">페이지를 찾을 수 없습니다.</h2>
      <p className="mb-4">요청하신 페이지는 존재하지 않습니다.</p>
      <Link href="/" className="text-blue-500 hover:underline">
        홈으로 돌아가기
      </Link>
    </div>
  );
}
