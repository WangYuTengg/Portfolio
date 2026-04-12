export const siteConfig = {
  name: "Ethan Wang",
  title: "Full-Stack Software Engineer",
  tagline:
    "Building production AI systems, full-stack web apps, and developer tools with TypeScript across the stack.",
  email: "wyuteng123@gmail.com",
  phone: "+65 91785810",
  socials: {
    github: "https://github.com/WangYuTengg",
    linkedin: "https://www.linkedin.com/in/WangYuTeng",
  },
} as const;

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  logo: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    company: "Voltade",
    role: "Software Engineer (Founding Team)",
    period: "May 2025 - Present",
    logo: "/logos/voltade.jpg",
    description:
      "Building production AI platforms for enterprise clients at an early-stage startup. Working across the full stack, from AI pipelines and WhatsApp integrations to dashboards and internal tooling.",
    highlights: [
      "Voltade Studio: no-code AI agent builder for creating, testing, and deploying chatbots",
      "Supplier intelligence platform: 2,000+ invoices/month, ≥99% extraction accuracy",
      "WhatsApp outreach system: lead qualification, AI reply delays, conversation sandbox",
      "Inventory + OCR system: invoice processing, fuzzy matching, currency conversion, Google Sheets integration",
      "Workforce planning AI: Gmail polling, resume extraction, succession planning",
      "Internal Telegram bot: Claude Agent SDK, multi-model routing, Notion integration",
    ],
  },
  {
    company: "Voltade",
    role: "Software Engineer Intern",
    period: "Jan 2024 - May 2025",
    logo: "/logos/voltade.jpg",
    description:
      "Shipped AI chatbots for 30+ companies, handling thousands of customer inquiries monthly.",
    highlights: [
      "Built AI chatbots with mini apps for 30+ companies (OpenAI, React, Deno)",
      "Launched internal chatbot dev tool adopted by 10+ engineers",
      "Automated web-scraping for RAG-based knowledge enrichment",
    ],
  },
  {
    company: "Trilogy Technologies",
    role: "Software Engineer Intern",
    period: "May 2023 - Aug 2023",
    logo: "/logos/trilogy.png",
    description:
      "Built an internal workflow management system replacing paper-based processes for 30+ operators.",
    highlights: [
      "End-to-end JTMS with product tracking, progress bars, and route protection",
    ],
  },
];

export type ProjectCategory = "work" | "personal";

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  image?: string;
  link?: string;
  github?: string;
  period?: string;
  context?: string;
  details?: string;
};

export const projects: Project[] = [
  {
    slug: "uml-assessment-platform",
    title: "UML Assessment Platform",
    description:
      "AI-assisted assessment platform for universities. Supports MCQ, written, coding, and UML assignments with LLM-powered grading, batch auto-grading, and AI cost tracking.",
    tags: ["React 19", "Hono", "TypeScript", "PostgreSQL", "Drizzle", "Vercel AI SDK", "Docker"],
    github: "https://github.com/WangYuTengg/fyp",
    details: "Final Year Project building a full assessment platform supporting multiple question types (MCQ, written, coding, UML diagrams) with AI-assisted grading. Features auto-save/auto-submit with focus monitoring, deterministic question shuffling, rubric editor, accept/reject/override grading workflow, batch auto-grading with queue monitoring, and AI cost tracking per assignment.",
    image: "/projects/fyp.jpg",
    category: "personal",
    context: "Final Year Project",
    period: "2025 - 2026",
  },
  {
    slug: "stackedhomes",
    title: "StackedHomes AI Outreach",
    description:
      "WhatsApp outreach and lead qualification for real estate. Real-time chat sandbox, bulk simulation, AI training dashboard with prompt diff views.",
    tags: ["TypeScript", "React", "Hono", "WhatsApp API", "OpenAI", "Mastra"],
    image: "/projects/stackedhomes.jpg",
    category: "work",
    context: "Voltade (Client Project)",
    period: "2026",
  },
  {
    slug: "inventory-ocr",
    title: "Multi-Supplier Inventory & OCR",
    description:
      "Telegram bot for inventory ops. OCR invoice processing, fuzzy supplier matching, auto currency conversion, Google Sheets integration.",
    tags: ["Mastra", "Hono", "Bun", "OpenAI", "Google Sheets API", "Telegram Bot API"],
    image: "/projects/ocr.jpg",
    category: "work",
    context: "Voltade (Client Project)",
    period: "2025",
  },
  {
    slug: "voltade-studio",
    title: "Voltade Studio",
    description:
      "No-code AI agent builder where non-technical users create, test, and deploy chatbots to WhatsApp, Web, and Telegram through a conversational \"vibe coding\" interface.",
    tags: ["TanStack Start", "Bun", "Drizzle", "E2B", "OpenCode", "Mastra", "Railway"],
    image: "/projects/studio.jpg",
    category: "work",
    context: "Voltade (Core Product)",
    period: "2025 - 2026",
  },
  {
    slug: "lineageflow",
    title: "LineageFlow",
    description:
      "Data versioning for the ML lifecycle. Git-like branches, commits, merges, and rollbacks. Built in one week.",
    tags: ["React", "Vite", "Django", "Supabase", "Google Cloud Storage"],
    github: "https://github.com/WangYuTengg/LineageFlow",
    image: "/projects/lineageflow.jpg",
    category: "personal",
    context: "TikTok TechJam 2024",
    period: "2024",
  },
  {
    slug: "quizzwhizz",
    title: "QuizzWhizz",
    description:
      "AI quiz generator from lecture videos. Amazon Transcribe + Textract pipeline, Chrome extension, Streamlit frontend.",
    tags: ["Python", "Amazon Transcribe", "Amazon Textract", "SageMaker", "OpenCV", "Streamlit"],
    github: "https://github.com/WangYuTengg/AIfinity-TeamAWSome-QuizzWhizz",
    image: "/projects/quizzwhizz.png",
    category: "personal",
    context: "AWS AIfinity 2023 (Top 10)",
    period: "2023",
  },
  {
    slug: "solarian",
    title: "Solarian",
    description:
      "CV system detecting rooftops for solar panel potential. UNet segmentation at ~87% accuracy, irradiance-adjusted savings estimates.",
    tags: ["Python", "OpenCV", "Keras", "TensorFlow", "Streamlit", "Scikit-learn"],
    github: "https://github.com/WangYuTengg/MLDA-DLWHackathon-Project-Solarian",
    image: "/projects/solarian.png",
    category: "personal",
    context: "MLDA DLW 2022 (Winner)",
    period: "2022",
  },
  {
    slug: "logiflow",
    title: "LogiFlow",
    description:
      "Logistics optimization for PSA. ARIMA forecasting for vessel arrivals, interactive dashboards, real-time port news sentiment analysis.",
    tags: ["React", "Flask", "Python", "ARIMA", "Pandas", "Nivo"],
    github: "https://github.com/WangYuTengg/LogiFlow",
    image: "/projects/logiflow.jpg",
    category: "personal",
    context: "PSA Code Sprint 2023 (Top 8)",
    period: "2023",
  },
];

export const education = {
  school: "Nanyang Technological University, Singapore",
  degree: "Bachelor of Science (Computer Science) & Bachelor of Social Science (Economics)",
  period: "Aug 2021 - Jun 2026",
  gpa: "4.5/5.00",
  honours: "Expected Double Honours (Highest Distinction)",
  awards: [
    "NTU College Scholarship",
    "MLDA Deep Learning Week 2022 Hackathon Winner (Best Software Application)",
    "PSA Code Sprint 2023 (Top 8)",
    "NTU Techfest Hackathon 2023 (Top 10)",
    "AWS AIfinity Hackathon 2023 (Top 10)",
  ],
} as const;

export const skills = {
  languages: ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"],
  frameworks: ["React", "Hono", "Next.js", "Express", "Node.js", "Deno", "Bun", "TanStack Query/Router"],
  ai: ["OpenAI", "Anthropic Claude", "Vercel AI SDK", "Mastra", "Claude Agent SDK", "RAG"],
  databases: ["PostgreSQL", "Supabase", "Neon", "Drizzle ORM", "Prisma", "MongoDB", "AWS S3", "Azure Blob Storage"],
  devops: ["GitHub Actions", "Docker", "Kubernetes", "ArgoCD", "Railway", "K9s"],
  tools: ["Git", "Bash", "Vitest", "Playwright", "Agile/Scrum"],
} as const;

export const aboutText = [
  "I'm a full-stack software engineer on the founding team at Voltade, where I build production AI systems for enterprise clients. From supplier intelligence platforms and WhatsApp-integrated chatbots to OCR invoice processing and workforce planning AI pipelines.",
  "I work primarily with TypeScript across the stack: React on the frontend, Hono on the backend, PostgreSQL with Drizzle ORM for data, and OpenAI/Anthropic for AI capabilities. I've shipped production systems processing thousands of invoices and powering AI-driven workflows for 30+ companies.",
  "I'm currently completing my double degree in Computer Science and Economics at NTU Singapore (CGPA 4.5/5.0), where my final year project is an AI-assisted assessment platform with LLM-powered grading.",
];
