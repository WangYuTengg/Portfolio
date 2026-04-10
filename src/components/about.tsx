import { aboutText } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-3xl font-bold tracking-tight">About Me</h2>
        <div className="space-y-4 text-zinc-600 leading-relaxed dark:text-zinc-400">
          {aboutText.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
