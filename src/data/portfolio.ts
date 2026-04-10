export const siteConfig = {
  name: "Ethan",
  title: "Full-Stack Developer",
  tagline: "Building modern web experiences with TypeScript, React, and Node.js",
  email: "hello@example.com",
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  },
} as const;

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    company: "Voltade",
    role: "Full-Stack Developer",
    period: "2024 - Present",
    description:
      "Building production web applications and backend workflow systems for clients.",
    highlights: [
      "Developed full-stack TypeScript applications with Hono, React, and PostgreSQL",
      "Built AI-powered workflow automation systems using Mastra framework",
      "Deployed and maintained services on Railway with Neon Postgres",
    ],
  },
  {
    company: "Your Previous Company",
    role: "Your Role",
    period: "2023 - 2024",
    description: "Brief description of what you did here.",
    highlights: [
      "Highlight 1",
      "Highlight 2",
      "Highlight 3",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A brief description of your best project. What problem does it solve?",
    tags: ["TypeScript", "React", "Hono", "PostgreSQL"],
    github: "https://github.com/yourusername/project-one",
    link: "https://project-one.example.com",
  },
  {
    title: "Project Two",
    description:
      "Another project description. Keep it concise and impactful.",
    tags: ["Next.js", "Tailwind CSS", "Drizzle ORM"],
    github: "https://github.com/yourusername/project-two",
  },
  {
    title: "Project Three",
    description:
      "A third project. Showcase variety in your skills.",
    tags: ["Node.js", "AI/ML", "Vercel AI SDK"],
    github: "https://github.com/yourusername/project-three",
    link: "https://project-three.example.com",
  },
];

export const aboutText = [
  "I'm a full-stack developer who enjoys building clean, performant web applications. I work primarily with TypeScript across the stack — React on the frontend, Hono and Node.js on the backend, and PostgreSQL for data.",
  "Currently working at Voltade building production systems for clients, and pursuing my final year project as a student. I'm passionate about developer experience, type safety, and shipping software that works.",
];
