import Link from "next/link";

const projects = [
  {
    title: "회원가입 · 로그인 실습",
    type: "수업 실습 프로젝트",
    description:
      "Next.js와 Auth.js를 사용해 회원가입, 로그인, 로그아웃 기능을 구현한 프로젝트입니다.",
    github: "https://github.com/ddd002236-png/my-app-1",
    demo: "https://my-app-1-beryl.vercel.app/",
    tags: ["Next.js", "Auth.js", "MongoDB"],
  },
];

const skills = [
  { name: "Next.js", description: "App Router와 파일 기반 라우팅" },
  { name: "React", description: "컴포넌트 기반 화면 구성" },
  { name: "MongoDB", description: "데이터베이스 연결 및 데이터 저장" },
  { name: "Auth.js", description: "회원가입과 로그인 인증 처리" },
  { name: "TypeScript", description: "타입을 사용한 코드 작성" },
  { name: "Tailwind CSS", description: "유틸리티 클래스를 이용한 스타일링" },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12 sm:px-8 sm:py-16">
      <section className="rounded-3xl border border-black/[.08] bg-zinc-50 px-6 py-10 dark:border-white/[.145] dark:bg-zinc-900 sm:px-10 sm:py-14">
        <p className="mb-4 text-sm font-semibold tracking-wide text-blue-700 dark:text-blue-300">
          MY DEVELOPER PORTFOLIO
        </p>
        <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
          정보보호학과
          <br />
          92513261 유한서
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:text-lg">
          Next.js와 MongoDB를 중심으로 웹 개발을 학습하고 있습니다. 수업에서
          배운 내용을 직접 구현하고, 프로젝트를 만들며 경험을 쌓고 있습니다.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            프로젝트 보기
          </a>
          <Link
            href="/about"
            className="rounded-xl border border-black/10 px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-white dark:border-white/20 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            소개 더 보기
          </Link>
        </div>
      </section>

      <section className="py-14" aria-labelledby="skills-heading">
        <div className="mb-6">
          <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">
            TECH STACK
          </p>
          <h2
            id="skills-heading"
            className="mt-2 text-2xl font-bold text-zinc-950 dark:text-zinc-50"
          >
            학습한 기술
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <article
              key={skill.name}
              className="rounded-2xl border border-black/[.08] p-5 dark:border-white/[.145]"
            >
              <h3 className="font-semibold text-zinc-950 dark:text-zinc-50">
                {skill.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {skill.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="scroll-mt-8 py-4"
        aria-labelledby="projects-heading"
      >
        <div className="mb-6">
          <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">
            MY PROJECTS
          </p>
          <h2
            id="projects-heading"
            className="mt-2 text-2xl font-bold text-zinc-950 dark:text-zinc-50"
          >
            프로젝트
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            현재까지 진행한 수업 실습 프로젝트입니다.
          </p>
        </div>
        <div className="grid gap-5">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-black/[.08] p-6 dark:border-white/[.145] sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">
                {project.type}
              </p>
              <h3 className="mt-3 text-xl font-bold text-zinc-950 dark:text-zinc-50">
                {project.title}
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-black/10 px-4 py-2 hover:bg-zinc-50 dark:border-white/20 dark:hover:bg-zinc-800"
                >
                  GitHub 저장소 →
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-blue-700 px-4 py-2 text-white hover:bg-blue-800"
                >
                  배포 사이트 보기 →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-2xl border border-black/[.08] p-6 dark:border-white/[.145] sm:p-8">
        <h2 className="text-xl font-bold text-zinc-950 dark:text-zinc-50">
          수업에서 실습한 기능
        </h2>
        <ul className="mt-4 grid gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300 sm:grid-cols-2">
          <li>• Next.js App Router와 파일 기반 라우팅</li>
          <li>• Server Component와 비동기 데이터 조회</li>
          <li>• MongoDB와 Mongoose를 이용한 데이터 처리</li>
          <li>• Route Handler를 통한 API 응답</li>
          <li>• Auth.js를 이용한 회원가입·로그인·로그아웃</li>
          <li>• 폼 액션과 서버 측 처리</li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <Link className="underline underline-offset-4" href="/notices">
            공지사항 실습 보기
          </Link>
          <Link className="underline underline-offset-4" href="/products">
            상품 목록 실습 보기
          </Link>
          <Link className="underline underline-offset-4" href="/register">
            회원가입 테스트
          </Link>
        </div>
      </section>

      <footer className="py-10 text-center text-xs text-zinc-500 dark:text-zinc-400">
        © {new Date().getFullYear()} My Portfolio. Built with Next.js.
      </footer>
    </main>
  );
}
