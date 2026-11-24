export const profile = {
  name: "Buzau Cosmin-Ionut",
  role: "AI Software Engineer",
  location: "Iași, România",
  email: "buzaucosmin6@gmail.com",
  phone: "+40 721 850 827",
  github: "https://github.com/buzeu1",
  linkedin: "https://www.linkedin.com/in/cosmin-ionut-buzau/",
  website: "https://buzaucosmin.vercel.app",
  cvPath: "/CV_Buzau_Cosmin_Ionut.pdf",
  photo: "/profile.png",
  availability: "Open to AI Engineer / Software Engineer / Full-Stack roles",
  tagline:
    "I build AI pipelines on self-hosted LLMs, AI agents and full-stack websites that paying clients use in production.",
  bio: [
    "Computer Science student at “Gheorghe Asachi” Technical University, Iași, and AI Software Engineer. In my most recent B2B contract I built an on-premise AI medical scribe on self-hosted open-weight models and an AI email-to-article pipeline in 9 languages; as a freelancer I run 3 production websites for paying clients end-to-end.",
    "Strong with Python, TypeScript, FastAPI, Next.js and LLM integration — self-hosted LLMs (Qwen, Llama), Hugging Face, Claude API, RAG and prompt-injection defense — on AWS. Open to AI Engineer / Software Engineer / Full-Stack roles: full-time, part-time, internship or B2B collaboration, in Iași or remote.",
  ],
};

export const education = {
  school: "Technical University “Gheorghe Asachi” of Iași",
  degree: "B.Eng. in Computer Science and Information Technology",
  period: "Oct 2024 – 2028 (Expected)",
  location: "Iași, România",
};

export const achievements = [
  {
    value: "26 / 886",
    label: "Performance scholarship recipient; ranked 26th out of 886 applicants at admission",
    year: "2024",
  },
  {
    value: "3",
    label: "Production websites run end-to-end for paying clients",
    year: "2025–2026",
  },
  {
    value: "1,300+",
    label: "Tests on an on-premise AI medical scribe built on 3 self-hosted open-weight models",
    year: "2026",
  },
];
export const strengths = [
  "End-to-end ownership — from idea to production",
  "Fast learner, comfortable in new domains",
  "Real experience with real clients — I ship, then maintain",
  "Clear communication, honest estimates",
];

export const coursework = [
  "Object-Oriented Programming (Advanced)",
  "Data Structures & Algorithms",
  "Databases",
  "Computer Architecture & Assembly",
  "Operating Systems (Linux)",
];

export const interests = [
  "AI Agents & Automation",
  "Self-hosted LLMs",
  "LLM Integration",
  "AI Product Development",
];

export const languages = [
  { name: "Romanian", level: "Native" },
  { name: "English", level: "B2" },
];

export type ExperienceProject = {
  name: string;
  client: string;
  period: string;
  stack: string;
  points: string[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  meta: string;
  summary?: string;
  metrics?: { value: string; label: string }[];
  points: string[];
  projects?: ExperienceProject[];
  clients?: { name: string; url: string; label: string; text: string }[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    role: "AI Software Engineer",
    company: "NIMA Software",
    period: "Aug 2026 – Nov 2026",
    meta: "Iași · Remote · Project-based contract — 2 projects",
    points: [],
    projects: [
      {
        name: "AI Medical Scribe",
        client: "Physiotherapy clinic",
        period: "Oct 2026 – Nov 2026",
        stack: "Python, FastAPI, Hugging Face, AWS (SageMaker, EC2, S3), Dramatiq, Redis, PostgreSQL, Docker",
        points: [
          "Built an on-premise AI pipeline that turns a recorded Romanian therapy session into a pre-filled patient record, so the therapist reviews a draft instead of writing it from scratch.",
          "Self-hosted 3 open-weight models from Hugging Face: Whisper large-v3 (transcription), pyannote (speaker diarization) and Qwen3.8 27B via LiteLLM (data extraction); no patient data reaches third-party AI APIs.",
          "Designed a multi-round LLM extraction pipeline for an 8k context window: it indexes the transcript by topic, extracts each field group from only the relevant turns and keeps the patient's final, corrected answer.",
          "FastAPI backend with a Dramatiq/Redis GPU job queue and PostgreSQL for job state and results; crash-safe checkpoints, signed callbacks with retries, 1,300+ tests and CI.",
          "Recordings pulled from Amazon S3 via short-lived presigned URLs, with no AWS credentials on the service.",
          "Tested the pipeline on AWS SageMaker, an EC2 g6.xlarge (NVIDIA L4 GPU) and the client's own virtual machine, comparing several open-weight LLMs to pick the best fit.",
        ],
      },
      {
        name: "Multilingual Blog & AI Email-to-Article Pipeline",
        client: "CargoPlanning",
        period: "Aug 2026 – Sep 2026",
        stack: "PHP, Symfony 6.4, Twig, Python, Ollama (Qwen), AWS (SES, S3, SNS), Docker, Git",
        points: [
          "Re-architected the company blog into a flat-file Markdown system in 9 languages: new articles ship without code changes and every existing URL was preserved for SEO.",
          "Built an event-driven pipeline (AWS SES → S3 → SNS) that turns each email, with its Word/PDF attachments and images, into a structured article draft for the blog.",
          "Used a self-hosted LLM (Qwen) to classify each email and check its links and images, with no third-party AI API; the text is translated into all 9 languages and goes live only after an editor reviews it.",
          "Hardened the pipeline against prompt injection (unforgeable data markers, strict output schema) and verified it with 790 adversarial tests; none altered the pipeline's outcome.",
        ],
      },
    ],
    tech: ["Python", "FastAPI", "Hugging Face", "Whisper", "pyannote", "Qwen", "LiteLLM", "Dramatiq", "Redis", "PostgreSQL", "AWS", "PHP", "Symfony 6.4", "Ollama", "Docker"],
  },
  {
    role: "Full-Stack & AI Developer",
    company: "Self-Employed",
    period: "Jan 2025 – Present",
    meta: "Iași · Remote",
    points: [
      "Build custom AI automations and run 3 production websites for paying clients end-to-end — design, code, database, deployment, domains and ongoing maintenance — each with an admin panel for content updates.",
    ],
    clients: [
      {
        name: "Compact Drive",
        url: "https://compactdrive.ro",
        label: "compactdrive.ro",
        text: "Driving school platform on Next.js + Supabase with automated email notifications for new enrollments; technical SEO drives 150+ organic visits/month from Google.",
      },
      {
        name: "Boeru's Doner",
        url: "https://boerus-d.ro",
        label: "boerus-d.ro",
        text: "Website for a fast-food chain on Next.js + Tailwind with digital menu, promotions and a Leaflet map of branches.",
      },
      {
        name: "Aeron Termosistem",
        url: "https://aerontermosistem.vercel.app",
        label: "aerontermosistem.vercel.app",
        text: "Website for a construction company on Next.js, MongoDB and Cloudinary; client-managed gallery.",
      },
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "MongoDB", "Cloudinary", "Python", "Vercel"],
  },
];

export const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Python", "TypeScript", "JavaScript", "PHP", "Java", "C", "C++"],
  },
  {
    title: "Frameworks",
    skills: ["Next.js", "React", "FastAPI", "Flask", "Symfony", "Tailwind CSS", "LangChain", "Dramatiq"],
  },
  {
    title: "AI & ML",
    skills: ["LLM integration", "AI agents", "RAG", "Self-hosted LLMs (Qwen, Llama)", "Ollama", "LiteLLM", "Prompt-injection defense", "LLM evaluation", "Claude API", "Hugging Face", "Whisper", "pyannote"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS S3", "AWS EC2", "AWS SageMaker", "AWS IAM", "AWS Lambda", "AWS SES", "AWS SNS", "AWS SAM", "Amazon Bedrock", "Docker", "Git", "GitHub Actions", "Linux", "Vercel"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "Redis", "Supabase", "MongoDB", "SQLite", "MariaDB", "Oracle Database"],
  },
  {
    title: "Spoken Languages",
    skills: ["Romanian (native)", "English (B2)"],
  },
];
export type ProjectCategory = "ai" | "web" | "game";

export const categories: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI & ML" },
  { id: "web", label: "Client Websites" },
  { id: "game", label: "Game Dev" },
];

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tech: string[];
  category: ProjectCategory;
  github?: string;
  live?: string;
  metric?: string;
  status?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "AI Trading Bot",
    subtitle: "AI Agents & Data Pipeline for MetaTrader 5",
    description:
      "Two-person project: my teammate builds the ML models and strategy; I own the AI agents, data pipeline and infrastructure.",
    highlights: [
      "Built two exit agents that manage open trades: an AI agent that reads the Forex Factory calendar and closes positions exposed to high-impact news, and a rule-based agent that reviews each trade at a configurable interval against algorithmic exit rules and holds it unless one triggers.",
      "Nightly data and backtest pipeline for model retraining.",
      "Weekly backups to AWS S3, live monitoring via a Flask dashboard and daily Telegram reports.",
    ],
    tech: ["Python", "MQL5", "MetaTrader 5", "AWS S3", "Flask", "Telegram Bot API"],
    category: "ai",
    github: "https://github.com/buzeu1/mt5-ai-trader",
    metric: "2 exit agents",
    featured: true,
  },
  {
    title: "AI Sales Agent",
    subtitle: "Microsoft Teams & Web",
    description:
      "AI agent that answers sales staff's questions about products, prices and offers inside Microsoft Teams or on the web, by text or voice note (Whisper large-v3), connected to Microsoft 365 via Azure AD (OAuth2).",
    highlights: [
      "Three-step product search robust to typos, synonyms and translated names — exact code match, fuzzy scoring (sentence-transformers), then an LLM double-check.",
      "Asks a clarifying question when a request is ambiguous.",
      "Turns a confirmed request into a ready-to-send PDF offer on the spot (ReportLab).",
    ],
    tech: ["Python", "FastAPI", "Azure AD", "Llama 3.1", "Whisper", "sentence-transformers", "ReportLab"],
    category: "ai",
    github: "https://github.com/buzeu1",
    metric: "Text + voice",
    featured: true,
  },
  {
    title: "Floraly",
    subtitle: "AI Sales Agent for Flower Shops",
    description:
      "AI agent that runs as a chat widget on a flower shop's website (in-store tablet version planned): it asks about the occasion, the recipient and the budget, then recommends matching bouquets.",
    highlights: [
      "Bouquets live in a Supabase (PostgreSQL) catalog with price, flowers, colors, occasions and stock.",
      "The LLM queries the catalog via tool calls filtered by budget and event, so it only suggests bouquets that are actually available.",
      "Each conversation is saved as a structured request (bouquet, occasion, budget, contact) in a Next.js dashboard, where the florist prepares the order or follows up with the customer.",
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "Claude API", "Tool calling"],
    category: "ai",
    status: "In development",
    featured: true,
  },
  {
    title: "Serverless Claude Chat",
    subtitle: "AWS Lambda + Amazon Bedrock",
    description:
      "Serverless chat API: a Python Lambda behind API Gateway calls Claude on Amazon Bedrock, with all infrastructure as code (AWS SAM), redeployable with one command.",
    highlights: [
      "Least-privilege IAM role whose only permission is invoking the model.",
      "A Next.js 15 client streams the answer word-by-word as formatted Markdown with highlighted code.",
    ],
    tech: ["Python", "AWS Lambda", "API Gateway", "AWS SAM", "Amazon Bedrock", "Next.js 15"],
    category: "ai",
    github: "https://github.com/buzeu1/ai-chat-bedrock-demo",
    metric: "Least-privilege IAM",
  },
  {
    title: "Fără Agenții",
    subtitle: "Commission-Free Real Estate Marketplace",
    description:
      "Full-stack marketplace where owners in Iași sell or rent directly to buyers, with no agents or commissions: search and filters by neighborhood, property type and price, an owner dashboard with listing statistics, and an admin panel to moderate listings, users and reports.",
    highlights: [
      "PostgreSQL schema of 7 tables with Row Level Security on every table — users can only access their own listings, favorites and conversations.",
      "Database triggers create profiles on signup; buyer–owner chat runs live on Supabase Realtime.",
      "AI assistant (LangChain + Llama 3.3 70B on Groq) recommends listings in Romanian — it retrieves the 6 best-matching active listings via diacritic-insensitive similarity search and answers only from them.",
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Realtime", "LangChain", "Groq (Llama 3.3)"],
    category: "ai",
    github: "https://github.com/buzeu1/faraagentii",
    live: "https://faraagentii.vercel.app",
    metric: "RLS on 7 tables",
  },
  {
    title: "EmotionCamera",
    subtitle: "Real-Time Emotion Recognition",
    description:
      "Full-stack computer-vision web app that detects faces in a live webcam stream and classifies 7 facial expressions in real time, overlaying the emotion, its confidence and the face box directly on the video.",
    highlights: [
      "Frames are downscaled on a hidden canvas before upload, cutting payload size so the FastAPI backend keeps up at about 30 FPS.",
      "OpenCV finds faces and a FER (TensorFlow) CNN classifies them.",
      "Split deployment: containerized Python backend on Railway (Docker), Next.js 14 frontend on Vercel.",
    ],
    tech: ["Next.js 14", "FastAPI", "OpenCV", "TensorFlow", "Docker", "Railway", "Vercel"],
    category: "ai",
    github: "https://github.com/buzeu1/emotion-detector",
    metric: "~30 FPS",
  },
  {
    title: "Compact Drive",
    subtitle: "Driving School Platform",
    description:
      "Driving school platform on Next.js + Supabase. The owner manages the gallery and promotions alone from simple admin pages, and enrollment requests arrive instantly by email.",
    highlights: [
      "Technical SEO drives 150+ organic visits a month from Google.",
      "JSON-LD schemas, per-page Open Graph metadata, sitemap and robots.txt.",
      "Admin flow so the owner updates content without a developer.",
    ],
    tech: ["Next.js", "Supabase", "PostgreSQL", "EmailJS", "Tailwind CSS"],
    category: "web",
    github: "https://github.com/buzeu1/compactdrive",
    live: "https://compactdrive.ro",
    metric: "150+ visits / month",
  },
  {
    title: "Boeru's Doner",
    subtitle: "Fast-Food Chain Web Platform",
    description:
      "Fast-food chain platform on Next.js + Tailwind with a digital menu, promotions and a Leaflet map of the branches.",
    highlights: [
      "Digital menu with categories, variants and badges.",
      "Interactive Leaflet map to find the nearest branch.",
      "Open Graph + JSON-LD structured data on every page.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React-Leaflet", "Resend", "Vercel"],
    category: "web",
    github: "https://github.com/buzeu1/boerusdoner",
    live: "https://boerus-d.ro",
  },
  {
    title: "Aeron Termosistem",
    subtitle: "Construction Company Website",
    description:
      "Construction company site on Next.js, MongoDB and Cloudinary — the client manages the gallery himself and every contact-form lead is saved to the database.",
    highlights: [
      "Client-managed gallery: photos upload to Cloudinary, URLs stored in MongoDB.",
      "Leads saved straight to the database.",
    ],
    tech: ["Next.js", "TypeScript", "MongoDB", "Cloudinary", "Vercel"],
    category: "web",
    github: "https://github.com/buzeu1/aerontermosistem",
    live: "https://aerontermosistem.vercel.app",
  },
  {
    title: "Trapped in the Server",
    subtitle: "2D Java Game, No Engine",
    description:
      "Pure-Java game with a custom 60 FPS loop, three levels and a boss fight, built on OOP design patterns (Singleton, State, Abstract Factory) with SQLite save/load; two-person university project.",
    highlights: [
      "Custom game loop, rendering and physics — no engine.",
      "Levels built in Tiled; progress saved to SQLite and loaded back across sessions.",
    ],
    tech: ["Java", "Java2D / AWT", "Tiled", "SQLite"],
    category: "game",
    github: "https://github.com/buzeu1/Trapped-In-The-Server",
    metric: "60 FPS",
  },
];