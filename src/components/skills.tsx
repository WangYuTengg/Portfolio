"use client";

import { skills } from "@/data/portfolio";

const categories: {
  label: string;
  key: keyof typeof skills;
  icon: string;
  color: string;
}[] = [
  { label: "Languages", key: "languages", icon: "{ }", color: "from-blue-500 to-cyan-500" },
  { label: "Frameworks & Runtime", key: "frameworks", icon: "< />", color: "from-violet-500 to-purple-500" },
  { label: "AI & ML", key: "ai", icon: "AI", color: "from-amber-500 to-orange-500" },
  { label: "Databases & ORM", key: "databases", icon: "DB", color: "from-emerald-500 to-teal-500" },
  { label: "DevOps & Infra", key: "devops", icon: ">>", color: "from-rose-500 to-pink-500" },
  { label: "Tools & Testing", key: "tools", icon: "#_", color: "from-sky-500 to-indigo-500" },
];

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-3xl font-bold tracking-tight">Skills</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ label, key, icon, color }) => (
            <div
              key={key}
              className="group relative overflow-hidden rounded-xl border border-zinc-200 p-5 transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:hover:border-zinc-700"
            >
              {/* Gradient accent */}
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${color} opacity-0 transition-opacity group-hover:opacity-100`}
              />

              <div className="mb-4 flex items-center gap-3">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${color} text-xs font-bold text-white`}
                >
                  {icon}
                </div>
                <h3 className="text-[15px] font-semibold">{label}</h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {skills[key].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-zinc-50 px-2 py-0.5 text-[13px] text-zinc-600 dark:bg-zinc-800/60 dark:text-zinc-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
