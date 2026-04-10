import { siteConfig } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 pt-16 text-center">
      <div className="mx-auto max-w-2xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          {siteConfig.title}
        </p>
        <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            {siteConfig.name}
          </span>
        </h1>
        <p className="mb-10 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          {siteConfig.tagline}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
