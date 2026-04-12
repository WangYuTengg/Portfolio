import Image from "next/image";
import { experiences, education } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="bg-white px-6 py-24 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-3xl font-bold tracking-tight">Experience</h2>

        <div className="relative mb-16 space-y-10 before:absolute before:left-[19px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-zinc-200 dark:before:bg-zinc-700">
          {experiences.map((exp) => (
            <div key={`${exp.company}-${exp.period}`} className="relative pl-14">
              <Image
                src={exp.logo}
                alt={exp.company}
                width={40}
                height={40}
                className="absolute left-0 top-0 rounded-lg"
              />
              <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-semibold">{exp.role}</h3>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {exp.period}
                </span>
              </div>
              <p className="mb-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                {exp.company}
              </p>
              <p className="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
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

        <h2 className="mb-8 text-3xl font-bold tracking-tight">Education</h2>
        <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
          <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="font-semibold">{education.school}</h3>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {education.period}
            </span>
          </div>
          <p className="mb-1 text-sm text-blue-600 dark:text-blue-400">
            {education.degree}
          </p>
          <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
            {education.honours} &middot; CGPA: {education.gpa}
          </p>
          <div className="flex flex-wrap gap-2">
            {education.awards.map((award) => (
              <span
                key={award}
                className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 dark:bg-amber-900/20 dark:text-amber-400"
              >
                {award}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
