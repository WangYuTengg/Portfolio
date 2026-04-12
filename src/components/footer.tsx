import { siteConfig } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, EmailIcon } from "@/components/social-icons";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/60 bg-white px-6 py-10 dark:border-zinc-800 dark:bg-transparent">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4">
        <div className="flex gap-4">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="rounded-lg p-2 text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            aria-label="Email"
          >
            <EmailIcon />
          </a>
        </div>
        <p className="text-center text-[15px] text-zinc-500 dark:text-zinc-400">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
