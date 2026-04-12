"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 498, suffix: "+", label: "Commits" },
  { value: 30, suffix: "+", label: "Companies Served" },
  { value: 3, suffix: "", label: "Hackathon Wins" },
  { value: 2, suffix: "+", label: "Years Experience" },
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
    <div ref={ref} className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="mb-0.5 text-2xl font-bold tracking-tight sm:text-3xl">
            <AnimatedNumber target={stat.value} suffix={stat.suffix} inView={inView} />
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
