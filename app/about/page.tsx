import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-12 sm:px-8 sm:py-16">
      <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">ABOUT ME</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
        자기소개
      </h1>
      <div className="mt-8 space-y-6 text-base leading-8 text-zinc-600 dark:text-zinc-300">
        <p>
          웹 개발을 공부하며 배운 기술을 직접 적용해 보는 데 집중하고 있습니다.
          현재는 Next.js의 App Router를 이용한 페이지 구성, MongoDB 데이터 처리,
          그리고 Auth.js를 활용한 사용자 인증 기능을 학습했습니다.
        </p>
        <p>
          앞으로도 수업에서 배운 내용을 바탕으로 작은 기능부터 직접 구현하고,
          사용하기 편하고 안정적인 웹사이트를 만드는 것을 목표로 하고 있습니다.
        </p>
      </div>

      <section className="mt-10 rounded-2xl border border-black/[.08] p-6 dark:border-white/[.145]">
        <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">관심 분야 및 학습 내용</h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          <li>Next.js와 React를 이용한 웹 페이지 개발</li>
          <li>MongoDB와 Mongoose를 이용한 데이터베이스 활용</li>
          <li>Auth.js를 이용한 인증 기능 구현</li>
          <li>GitHub와 Vercel을 이용한 버전 관리 및 배포</li>
        </ul>
      </section>

      <Link
        href="/"
        className="mt-8 inline-block text-sm font-semibold text-blue-700 underline underline-offset-4 dark:text-blue-300"
      >
        ← 포트폴리오 홈으로 돌아가기
      </Link>
    </main>
  );
}
