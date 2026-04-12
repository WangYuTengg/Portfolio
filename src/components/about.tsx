import Image from "next/image";
import { aboutText } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-3xl font-bold tracking-tight">About Me</h2>
        <div className="flex flex-col gap-10 md:flex-row md:items-start">
          <div className="flex-1 space-y-4 text-zinc-600 leading-relaxed dark:text-zinc-400">
            {aboutText.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
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
