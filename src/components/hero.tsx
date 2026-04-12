"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/data/portfolio";

const roles = [
  "Full-Stack Engineer",
  "AI Systems Builder",
  "TypeScript Developer",
  "Startup Engineer",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 30 : 60;

    if (!deleting && text === current) {
      const pause = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(pause);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setText(
        deleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-6 pt-16 text-center">
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-400/15 blur-3xl dark:bg-blue-500/10" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-violet-400/15 blur-3xl dark:bg-violet-500/10" />

      <div className="relative mx-auto max-w-2xl">
        <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl">
          Hi, I&apos;m{" "}
          <span className="animated-gradient bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 bg-clip-text text-transparent">
            {siteConfig.name}
          </span>
        </h1>

        <div className="mb-8 h-8 text-xl font-medium text-zinc-500 dark:text-zinc-400">
          <span>{text}</span>
          <span className="cursor-blink ml-0.5 text-blue-600">|</span>
        </div>

        <p className="mb-10 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          {siteConfig.tagline}
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#projects"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-zinc-700 hover:shadow-lg dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
          >
            Get in Touch
          </a>
          <a
            href="/resume.pdf"
            download="Wang_Yu_Teng_Resume.pdf"
            className="flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 18h16" />
            </svg>
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
