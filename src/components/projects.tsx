"use client";

import { useState } from "react";
import { projects, type ProjectCategory } from "@/data/portfolio";

const filters: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Work", value: "work" },
  { label: "Personal", value: "personal" },
];

export function Projects() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <div className="flex gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  active === f.value
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-xl border border-zinc-200 p-6 transition-shadow hover:shadow-lg dark:border-zinc-800"
            >
              {(project.context || project.period) && (
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  {project.context && (
                    <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/20 dark:text-blue-400">
                      {project.context}
                    </span>
                  )}
                  {project.period && (
                    <span className="text-xs text-zinc-400 dark:text-zinc-500">
                      {project.period}
                    </span>
                  )}
                </div>
              )}
              <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
              <p className="mb-4 flex-1 text-sm text-zinc-600 leading-relaxed dark:text-zinc-400">
                {project.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm font-medium">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  >
                    GitHub
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 transition-colors hover:text-blue-500 dark:text-blue-400"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
