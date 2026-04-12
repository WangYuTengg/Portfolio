"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/social-icons";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xzaborvq", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-white px-6 py-24 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-xl">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight">Get in Touch</h2>
        <p className="mb-8 text-center text-[15px] text-zinc-600 dark:text-zinc-400">
          Have a project in mind or just want to say hi? Drop me a message.
        </p>

        {status === "sent" ? (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center dark:border-emerald-800 dark:bg-emerald-900/20">
            <div className="mb-3 text-3xl">&#10003;</div>
            <p className="font-medium text-emerald-700 dark:text-emerald-400">
              Message sent! I&apos;ll get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-900"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-900"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-900"
                placeholder="What's on your mind?"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 disabled:opacity-50 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "error" && (
              <p className="text-center text-sm text-red-500">
                Something went wrong. Try emailing me directly at{" "}
                <a href={`mailto:${siteConfig.email}`} className="underline">
                  {siteConfig.email}
                </a>
              </p>
            )}
          </form>
        )}

        <div className="mt-10 flex justify-center gap-4">
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
      </div>
    </section>
  );
}
