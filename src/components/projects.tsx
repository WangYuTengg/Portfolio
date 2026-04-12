"use client";

import { useState } from "react";
import { projects, type ProjectCategory } from "@/data/portfolio";
import { ProjectCard } from "@/components/project-card";

const MOBILE_INITIAL = 3;

const filters: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Work", value: "work" },
  { label: "Personal", value: "personal" },
];

export function Projects() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");
  const [expanded, setExpanded] = useState(false);

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  const hasMore = filtered.length > MOBILE_INITIAL;

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <div className="flex gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => {
                  setActive(f.value);
                  setExpanded(false);
                }}
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

        {/* Desktop: show all */}
        <div className="hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* Mobile: show 3 initially, expand on click */}
        <div className="grid gap-6 sm:hidden">
          {(expanded ? filtered : filtered.slice(0, MOBILE_INITIAL)).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {hasMore && !expanded && (
          <div className="mt-6 text-center sm:hidden">
            <button
              onClick={() => setExpanded(true)}
              className="rounded-full border border-zinc-300 px-6 py-2.5 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
            >
              View {filtered.length - MOBILE_INITIAL} more projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
