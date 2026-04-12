"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 498, suffix: "+", label: "Commits (2026)" },
  { value: 30, suffix: "+", label: "Companies Served" },
];

function AnimatedNumber({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="border-y border-zinc-200/80 bg-white px-6 py-16 dark:border-zinc-800 dark:bg-zinc-900/30">
      <div className="mx-auto flex max-w-2xl justify-center gap-16 sm:gap-24">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="mb-1 text-3xl font-bold tracking-tight sm:text-4xl">
              <AnimatedNumber target={stat.value} suffix={stat.suffix} inView={inView} />
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
