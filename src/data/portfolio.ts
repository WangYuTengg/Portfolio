export const siteConfig = {
  name: "Ethan Wang",
  title: "Full-Stack Software Engineer",
  tagline:
    "Building production AI systems, full-stack web apps, and developer tools with TypeScript across the stack.",
  email: "WANG1708@e.ntu.edu.sg",
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
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    company: "Voltade",
    role: "Software Engineer (Founding Team)",
    period: "May 2025 - Present",
    description:
      "Building production AI-powered platforms for enterprise clients at an early-stage startup. Working across the full stack — from AI pipelines and WhatsApp integrations to dashboards and internal tooling.",
    highlights: [
      "Engineered a supplier intelligence platform processing 2,000+ invoices/month with ≥99% line-item extraction accuracy via an AI-driven pipeline (OpenAI, Supabase, PostgreSQL, Zod), enabling normalized price comparisons across suppliers, entities, and time",
      "Built AI-powered WhatsApp outreach system for a real estate platform — lead qualification, group invite tracking, configurable AI reply delays, and a sandbox for testing conversation flows",
      "Developed a multi-supplier inventory system with OCR invoice processing, fuzzy supplier matching, automatic foreign currency conversion, and Google Sheets integration (Mastra, Hono, Bun)",
      "Created an AI-powered garment recognition and pricing system for a dry cleaning business — historical match testing UI, item similarity detection, and embedding-based search",
      "Built a phone repair/trade-in platform with AI chatbot (13-step conversation flow, 59 passing tests), catalog management, CSV imports, and Shopify integration",
      "Developed a Telegram bot for internal project queries using Claude Agent SDK — multi-model routing (Haiku/Sonnet), Notion + GitHub + Telegram history as context, feedback system with Notion integration",
      "Built workforce planning and talent acquisition AI pipelines — Gmail polling with intent detection, calendar integration, AI-powered resume extraction, and succession planning",
      "Led internal audit covering 80+ clients/projects, analyzing WhatsApp (~40 chats), Telegram (~58K messages), and Notion (280+ pages) data",
    ],
  },
  {
    company: "Voltade",
    role: "Software Engineer Intern",
    period: "Jan 2024 - May 2025",
    description:
      "Developed and deployed AI chatbots and internal tooling for 12+ companies, handling 10,000+ customer inquiries monthly.",
    highlights: [
      "Built customized AI chatbots integrated with mini applications for 12 companies using OpenAI, React, Deno, and TypeScript",
      "Initiated and launched an internal chatbot development tool (React, Deno, Prisma) adopted by every engineer (10+), significantly reducing development time",
      "Engineered automated web-scraping with TypeScript and AWS Event Scheduler for vector RAG-based chatbot knowledge enrichment",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  period?: string;
  context?: string;
};

export const projects: Project[] = [
  {
    title: "UML Assessment Platform",
    description:
      "Automated assessment platform for educational institutions supporting MCQ, written, coding, and UML diagram assignments with LLM-assisted grading. Features student auto-save/auto-submit with focus monitoring, staff question pool with import/export, rubric editor, AI-assisted grading with accept/reject/override workflow, batch auto-grading with queue monitoring, analytics, and AI cost tracking.",
    tags: [
      "React 19",
      "Hono",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Supabase",
      "Graphile Worker",
      "Vercel AI SDK",
      "OpenAI",
      "Anthropic",
      "Vitest",
      "Playwright",
      "Docker",
    ],
    github: "https://github.com/WangYuTengg/fyp",
    context: "Final Year Project",
    period: "2025 - 2026",
  },
  {
    title: "StackedHomes AI Outreach",
    description:
      "AI-powered WhatsApp outreach and lead qualification system for a real estate platform. Features include real-time chat sandbox for testing AI conversations, bulk simulation with scenario libraries, AI training dashboard with side-by-side prompt comparison and diff views, configurable reply delays, and group invite tracking with privacy setting handling.",
    tags: [
      "TypeScript",
      "React",
      "Hono",
      "WhatsApp API",
      "OpenAI",
      "Mastra",
      "PostgreSQL",
      "Drizzle ORM",
    ],
    context: "Voltade — Client Project",
    period: "2025 - 2026",
  },
  {
    title: "Multi-Supplier Inventory & OCR System",
    description:
      "Telegram-integrated inventory management system with AI-powered OCR invoice processing. Supports /stock, /cost, and /sales commands with fuzzy supplier matching, automatic foreign currency conversion to SGD, Google Sheets/Drive integration, and forwarded attachment handling. End-to-end test pipeline for stock updates across all suppliers.",
    tags: [
      "Mastra",
      "Hono",
      "Bun",
      "OpenAI",
      "Google Sheets API",
      "OCR",
      "Telegram Bot API",
      "PostgreSQL",
    ],
    context: "Voltade — Client Project",
    period: "2025 - 2026",
  },
  {
    title: "Mobile Life Platform",
    description:
      "Phone repair, refurbished device, trade-in, and buyback platform with an AI chatbot handling the full customer journey — from device identification to appointment booking and ticket creation. Features custom catalog columns, CSV import from Shopify, case-insensitive tokenized search, and a comprehensive 13-step conversation flow with 59 passing tests.",
    tags: [
      "TypeScript",
      "React",
      "Hono",
      "Drizzle ORM",
      "Neon Postgres",
      "OpenAI",
      "WhatsApp API",
      "Zod",
    ],
    context: "Voltade — Client Project",
    period: "2025 - 2026",
  },
  {
    title: "HR AI Agents (Workforce Planning & Talent Acquisition)",
    description:
      "AI pipeline for workforce planning and talent acquisition. Features include Gmail polling with intent detection and deduplication, end-to-end email invite flow with calendar integration, AI-powered resume extraction with parallel processing, succession plan auto-generation, and a consolidated talent acquisition dashboard.",
    tags: [
      "TypeScript",
      "React",
      "Hono",
      "Drizzle ORM",
      "PostgreSQL",
      "Better Auth",
      "pg-boss",
      "OpenAI",
      "Claude Agent SDK",
    ],
    context: "Voltade — Internal Project",
    period: "2026",
  },
  {
    title: "LineageFlow",
    description:
      "Data versioning and lineage tracking tool for the ML lifecycle, built in one week for TikTok TechJam 2024. Uses Git-like semantics — branches, commits, merges, and rollbacks for data version control. Features repositories, file/folder object views, staging area, independent branch commit histories, and detailed commit history with rollback.",
    tags: ["React", "Vite", "Django", "Supabase", "PostgreSQL", "Google Cloud Storage"],
    github: "https://github.com/WangYuTengg/LineageFlow",
    context: "TikTok TechJam 2024",
    period: "2024",
  },
  {
    title: "QuizzWhizz",
    description:
      "AI-powered quiz generator from lecture videos. Uses Amazon Transcribe and Textract to extract text from lecture content, then generates 15-20 high-quality quiz questions using Transformers. Includes a Chrome extension for downloading lecture videos, an Amazon SageMaker + OpenCV data processing pipeline, and a Streamlit frontend.",
    tags: [
      "Python",
      "Amazon Transcribe",
      "Amazon Textract",
      "Amazon SageMaker",
      "OpenCV",
      "Streamlit",
      "Express.js",
      "Amazon S3",
    ],
    github: "https://github.com/WangYuTengg/AIfinity-TeamAWSome-QuizzWhizz",
    context: "AWS AIfinity 2023 Hackathon — Top 10 Finalists",
    period: "2023",
  },
  {
    title: "Solarian",
    description:
      "Computer vision system to detect and classify commercial/industrial rooftops in Singapore for solar panel installation potential. Trained a UNet image segmentation model achieving ~87% accuracy over 100 epochs. Users input a location and receive flat roof surface area estimates and projected savings from solar installation using regional irradiance data.",
    tags: ["Python", "OpenCV", "Keras", "TensorFlow", "Streamlit", "Scikit-learn", "Geopy"],
    github: "https://github.com/WangYuTengg/MLDA-DLWHackathon-Project-Solarian",
    context: "MLDA Deep Learning Week 2022 — Winner (Best Software Application)",
    period: "2022",
  },
  {
    title: "LogiFlow",
    description:
      "Container logistics demand-supply optimization platform built for PSA (Port of Singapore Authority). Features AI-driven predictive analytics for vessel arrivals and container throughput using ARIMA time-series forecasting (MASE = 0.622), interactive dashboards, simulated cost scenario analysis, and real-time sentiment analysis of port-related news.",
    tags: ["React", "Flask", "Python", "ARIMA", "Pandas", "NumPy", "Nivo", "Recharts"],
    github: "https://github.com/WangYuTengg/LogiFlow",
    context: "NTU Techfest Hackathon 2023 — Top 10 Finalists",
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
    "MLDA Deep Learning Week 2022 Hackathon Winner — Best Software Application",
    "NTU Techfest Hackathon 2023 — Top 10 Finalists",
    "AWS AIfinity Hackathon 2023 — Top 10 Finalists",
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
  "I'm a full-stack software engineer on the founding team at Voltade, where I build production AI systems for enterprise clients — from supplier intelligence platforms and WhatsApp-integrated chatbots to OCR invoice processing and workforce planning AI pipelines.",
  "I work primarily with TypeScript across the stack: React on the frontend, Hono on the backend, PostgreSQL with Drizzle ORM for data, and OpenAI/Anthropic for AI capabilities. I've shipped production systems processing thousands of invoices, handling 10,000+ monthly customer inquiries, and powering AI-driven workflows for 12+ companies.",
  "I'm currently completing my double degree in Computer Science and Economics at NTU Singapore (CGPA 4.5/5.0), where my final year project is an AI-assisted assessment platform with LLM-powered grading.",
];
