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
  availability: "Open to Full Stack / Software Engineer / AI Engineer roles",
  tagline:
    "I build and ship real software — AI-powered apps, machine-learning systems and full-stack websites that paying clients use in production every day.",
  bio: [
    "Computer Science student at “Gheorghe Asachi” Technical University, Iași, who builds and ships real software: AI-powered apps, machine-learning systems and full-stack websites that paying clients use in production every day.",
    "Strong with Python, TypeScript, Next.js and LLM integrations (Claude, Amazon Bedrock, RAG). Actively seeking a Full Stack / Software Engineer / AI Engineer role where I can own features end-to-end, from idea to production.",
  ],
};

export const education = {
  school: "Technical University “Gheorghe Asachi” of Iași",
  degree: "B.Sc. in Computer Science and Information Technology",
  period: "Oct 2024 – 2027 (Expected)",
  location: "Iași, România",
};

export const achievements = [
  {
    value: "Top",
    label: "Performance scholarship recipient; admitted among the top applicants to the program",
    year: "2024",
  },
  {
    value: "3",
    label: "Production websites delivered and maintained for paying clients",
    year: "2025–2026",
  },
  {
    value: "ML",
    label: "Self-retraining ML trading system with two exit agents managing open trades",
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
  "LLM Integration",
  "AI Product Development",
  "Machine Learning for Trading",
];

export const languages = [
  { name: "Romanian", level: "Native" },
  { name: "English", level: "B2" },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  meta: string;
  summary?: string;
  metrics?: { value: string; label: string }[];
  points: string[];
  clients?: { name: string; url: string; label: string; text: string }[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    role: "AI Software Engineer",
    company: "NIMA SOFTWARE SRL",
    period: "Aug 2026 – Sep 2026",
    meta: "Remote · Project-based contract · Product: CargoPlanning",
    points: [
      "Rebuilt the company blog (Symfony 6.1) from 17 hardcoded Twig templates into a flat-file Markdown system rendered dynamically in 9 languages, with every existing URL preserved.",
      "Built an event-driven email-to-article pipeline for guest posts: an AWS SES receipt rule stores each raw email in S3 and notifies an SNS topic, triggering a service that parses the MIME message (sender, body, Word/PDF attachments, images) into a structured draft.",
      "Integrated a self-hosted LLM (Qwen) that classifies each email (submission, request, spam) and checks topic, links and images; the author's text is kept verbatim and translated into all 9 languages, with no data sent to a third-party AI API. Output goes live only after an editor reviews and commits it.",
      "Hardened the pipeline against prompt injection: email content is isolated as untrusted data behind markers the sender cannot forge, and the model's output must match a fixed format — 790 adversarial test cases confirm that even a manipulated model cannot change the outcome.",
    ],
    tech: ["PHP", "Symfony 6.1", "AWS SES", "AWS S3", "AWS SNS", "Qwen (self-hosted LLM)", "Markdown", "Git"],
  },
  {
    role: "Full-Stack & AI Developer",
    company: "Self-Employed",
    period: "Jan 2025 – Present",
    meta: "Iași · Remote",
    points: [
      "Deliver and maintain 3 production websites for paying clients end-to-end — design, code, database, deployment and domains — each with an admin flow so owners update content without a developer.",
      "Design and ship AI automations for business clients (chat assistants, voice and document processing, smart search), e.g. turning photographed receipts into accountant-ready Excel data.",
    ],
    clients: [
      {
        name: "Compact Drive",
        url: "https://compactdrive.ro",
        label: "compactdrive.ro",
        text: "Driving school platform on Next.js + Supabase; technical SEO drives 150+ organic visits/month from Google, and enrollment requests arrive instantly by email.",
      },
      {
        name: "Boeru's Doner",
        url: "https://boerus-d.ro",
        label: "boerus-d.ro",
        text: "Fast-food chain platform on Next.js + Tailwind with digital menu, promotions and a Leaflet map of branches.",
      },
      {
        name: "Aeron Termosistem",
        url: "https://aerontermosistem.vercel.app",
        label: "aerontermosistem.vercel.app",
        text: "Construction site on Next.js, MongoDB and Cloudinary; client-managed gallery, leads saved to the DB.",
      },
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "MongoDB", "Python", "LLMs", "Vercel"],
  },
];

export const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Python", "TypeScript", "JavaScript", "PHP", "Java", "C", "C++", "MQL5"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Next.js", "React", "FastAPI", "Flask", "Symfony", "Tailwind CSS", "LangChain", "Microsoft Bot Framework"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["LLM Integration", "AI Agents", "RAG", "Claude", "Qwen", "Llama (Groq)", "Whisper", "PyTorch", "LightGBM", "Optuna", "OpenCV", "TensorFlow"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS Lambda", "AWS S3", "AWS SES", "AWS SNS", "AWS SAM", "Amazon Bedrock", "Docker", "Git", "Linux", "Vercel", "Railway", "Azure AD"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "Supabase", "MongoDB", "SQLite", "Row Level Security"],
  },
  {
    title: "Integrations & Services",
    skills: ["Cloudinary", "EmailJS", "Resend", "Leaflet", "ReportLab", "Telegram Bot API"],
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
    subtitle: "Self-Retraining ML System for MetaTrader 5",
    description:
      "Self-improving MetaTrader 5 bot built on multi-year price history and engineered market features; every night it backtests strategies on fresh data to generate labeled signals and retrains two competing models (LightGBM, then a PyTorch network), periodically tuned with Optuna. Connected to two exit agents that manage open trades.",
    highlights: [
      "AI exit agent: reads the Forex Factory calendar and closes positions exposed to high-impact news.",
      "Rule-based exit agent: reviews each trade every 60s against algorithmic exit rules and holds it unless one triggers.",
      "Weekly backups to AWS S3; live monitoring via a Flask dashboard and daily Telegram reports.",
    ],
    tech: ["Python", "PyTorch", "LightGBM", "Optuna", "MQL5", "MetaTrader 5", "Flask", "AWS S3"],
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
      "Asks one short question when a request is ambiguous.",
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
      "AI agent that sits as a chat widget in the corner of a flower shop's website (and later on in-store tablets): it asks about the occasion, the recipient and the budget, then recommends matching bouquets.",
    highlights: [
      "Bouquets live in a Supabase (PostgreSQL) catalog with price, flowers, colors, occasions and stock.",
      "The LLM queries the catalog via tool calls filtered by budget and event, so it only suggests bouquets that are actually available.",
      "Each conversation is saved as a structured request (bouquet, occasion, budget, contact) in a Next.js dashboard for the florist.",
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
      "PostgreSQL schema of 7 tables with Row Level Security on every table — users only access their own listings, favorites and conversations; admins get separate policies.",
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