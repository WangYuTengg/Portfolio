"use client";

import { useState } from "react";
import { siteConfig } from "@/data/portfolio";
import { ThemeToggle } from "@/components/theme-toggle";
import { GithubIcon, LinkedinIcon } from "@/components/social-icons";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-200/60 bg-white/90 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#" className="text-lg font-bold tracking-tight">
          {siteConfig.name}
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-1 border-l border-zinc-200 pl-4 dark:border-zinc-700">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <ul className="border-t border-zinc-200 bg-white px-6 py-4 dark:border-zinc-800 dark:bg-zinc-950 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="flex gap-4 pt-3 border-t border-zinc-100 mt-2 dark:border-zinc-800">
            <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-500" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
