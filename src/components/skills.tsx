import { skills } from "@/data/portfolio";

const categories: { label: string; key: keyof typeof skills }[] = [
  { label: "Languages", key: "languages" },
  { label: "Frameworks & Runtime", key: "frameworks" },
  { label: "AI & ML", key: "ai" },
  { label: "Databases & ORM", key: "databases" },
  { label: "DevOps & Infra", key: "devops" },
  { label: "Tools & Testing", key: "tools" },
];

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-3xl font-bold tracking-tight">Skills</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {categories.map(({ label, key }) => (
            <div key={key}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                {label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills[key].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
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
