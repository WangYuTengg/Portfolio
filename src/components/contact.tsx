import { siteConfig } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/social-icons";

export function Contact() {
  return (
    <section id="contact" className="bg-zinc-50 px-6 py-24 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight">Get in Touch</h2>
        <p className="mb-8 text-zinc-600 dark:text-zinc-400">
          Have a project in mind or just want to say hi? Feel free to reach out.
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-block rounded-full bg-zinc-900 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          {siteConfig.email}
        </a>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            aria-label="GitHub"
          >
            <GithubIcon className="h-6 w-6" />
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-6 w-6" />
          </a>
        </div>
        <p className="mt-6 text-xs text-zinc-400 dark:text-zinc-500">
          {/* TODO: Add a contact form (Formspree/Resend) */}
          Contact form coming soon.
        </p>
      </div>
    </section>
  );
}
