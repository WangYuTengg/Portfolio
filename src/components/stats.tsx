"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 498, suffix: "+", label: "Commits (2026)" },
  { value: 12, suffix: "+", label: "Companies Served" },
  { value: 10, suffix: "K+", label: "Monthly Inquiries" },
  { value: 4.5, suffix: "/5.0", label: "CGPA" },
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
        setValue(Number.isInteger(target) ? Math.floor(current) : Math.round(current * 10) / 10);
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
    <section ref={ref} className="border-y border-zinc-200 bg-zinc-50/50 px-6 py-16 dark:border-zinc-800 dark:bg-zinc-900/30">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4">
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
