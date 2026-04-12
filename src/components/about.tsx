import Image from "next/image";

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-3xl font-bold tracking-tight">About Me</h2>
        <div className="flex flex-col gap-10 md:flex-row md:items-start">
          <div className="flex-1 space-y-4 leading-relaxed">
            <p className="text-zinc-600 dark:text-zinc-400">
              I&apos;m a full-stack software engineer on the founding team at{" "}
              <span className="font-medium text-foreground">Voltade</span>, where
              I build production AI systems for enterprise clients. I&apos;ve worked on
              everything from{" "}
              <span className="font-semibold text-purple-500 dark:text-purple-300">supplier intelligence platforms</span> and{" "}
              <span className="font-semibold text-purple-500 dark:text-purple-300">WhatsApp-integrated chatbots</span> to{" "}
              <span className="font-semibold text-purple-500 dark:text-purple-300">OCR invoice processing</span> and a{" "}
              <span className="font-semibold text-purple-500 dark:text-purple-300">no-code AI agent builder</span>.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              My go-to stack is{" "}
              <span className="font-medium text-foreground">TypeScript everywhere</span>:{" "}
              React on the frontend, Hono on the backend, PostgreSQL + Drizzle for data,
              and OpenAI/Anthropic for AI. I care about shipping fast, writing clean code,
              and building things that actually get used.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              Currently finishing my double degree in{" "}
              <span className="font-medium text-foreground">Computer Science</span> and{" "}
              <span className="font-medium text-foreground">Economics</span> at{" "}
              <span className="font-medium text-foreground">NTU Singapore</span>
               (CGPA 4.5/5.0). When I&apos;m not coding, I&apos;m probably playing CS2
              or hunting for good food.
            </p>
          </div>
          <div className="flex shrink-0 justify-center md:justify-end">
            <div className="h-72 w-56 overflow-hidden rounded-2xl">
              <Image
                src="/profile.jpg"
                alt="Ethan Wang"
                width={224}
                height={288}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
