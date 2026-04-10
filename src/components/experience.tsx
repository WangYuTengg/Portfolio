import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="bg-zinc-50 px-6 py-24 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-3xl font-bold tracking-tight">Experience</h2>
        <div className="relative space-y-12 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-zinc-200 dark:before:bg-zinc-700">
          {experiences.map((exp) => (
            <div key={`${exp.company}-${exp.period}`} className="relative pl-10">
              <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-zinc-300 bg-white dark:border-zinc-600 dark:bg-zinc-900" />
              <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-semibold">{exp.role}</h3>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {exp.period}
                </span>
              </div>
              <p className="mb-3 text-sm font-medium text-blue-600 dark:text-blue-400">
                {exp.company}
              </p>
              <p className="mb-3 text-zinc-600 dark:text-zinc-400">
                {exp.description}
              </p>
              <ul className="space-y-1 text-sm text-zinc-500 dark:text-zinc-400">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
