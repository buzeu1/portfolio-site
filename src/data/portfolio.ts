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
  school: "Universitatea Tehnică “Gheorghe Asachi”, Iași",
  degree: "Bachelor's in Progress — Computer Science and Information Technology",
  period: "Oct 2024 – Present",
  location: "Iași, România",
};

export const achievements = [
  {
    value: "Top",
    label: "Admitted to CTI (Computer Science & IT) among the top applicants",
    year: "2024",
  },
  {
    value: "3",
    label: "Production websites built for real paying clients",
    year: "2025–2026",
  },
  {
    value: "ML",
    label: "Engineered a self-retraining ML trading system (LightGBM + PyTorch)",
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
    meta: "Remote · Project-based collaboration (1 month) · Product: CargoPlanning",
    summary:
      "Owned two pieces of the CargoPlanning website end-to-end: the rebuild of the multilingual company blog, and an AI pipeline that turns guest-post emails into publish-ready articles — from architecture to delivery, in one month.",
    metrics: [
      { value: "17 → 0", label: "Hardcoded Twig templates" },
      { value: "9", label: "Languages rendered dynamically" },
      { value: "100%", label: "Existing URLs preserved" },
      { value: "1 mo", label: "From kickoff to delivery" },
    ],
    points: [
      "Rebuilt the company blog (Symfony 6.1) from 17 hardcoded Twig templates into a flat-file Markdown system — every article is now a single Markdown file instead of a hand-written template.",
      "Articles are rendered dynamically in 9 languages from one shared layout, so adding or editing a post no longer means touching code.",
      "Preserved every existing URL during the migration — no broken links and no lost search rankings.",
      "Built the service that turns guest-post emails into publish-ready articles: AWS SES receives the mail and SNS delivers it to the service.",
      "A self-hosted LLM validates each submission, rewrites it into a clean, publish-ready article and translates it into the blog's languages.",
      "Human-in-the-loop publishing: generated articles go through Git, where an editor reviews and approves them before anything goes live.",
      "Prompt-injection hardening — incoming email content is treated as untrusted data, so a malicious submission can't hijack the model's instructions.",
    ],
    tech: ["PHP", "Symfony 6.1", "Twig", "Markdown", "AWS SES", "AWS SNS", "Self-hosted LLM", "Git"],
  },
  {
    role: "Freelance AI Software Engineer",
    company: "Self-Employed",
    period: "Jan 2025 – Present",
    meta: "Iași · Remote",
    points: [
      "Build websites and AI automations end-to-end for real clients — design, code, database, deployment, domains and ongoing maintenance, all handled by me.",
      "Automated repetitive business processes with AI: smart product search that survives typos and translations, voice requests turned into text, automatic offer and document generation (PDF), and customer-facing chat assistants.",
      "Designed, built and maintain three production websites — each with its own admin flow, so the owners update content without ever needing a developer.",
    ],
    clients: [
      {
        name: "Aeron Termosistem",
        url: "https://aerontermosistem.vercel.app",
        label: "aerontermosistem.vercel.app",
        text: "Construction & renovation company site on Next.js, MongoDB and Cloudinary — the client uploads photos himself and every lead lands in the database.",
      },
      {
        name: "Compact Drive",
        url: "https://compactdrive.ro",
        label: "compactdrive.ro",
        text: "Driving school platform on Next.js + Supabase — owner-run admin pages, instant enrollment emails, 150+ organic visits a month from Google.",
      },
      {
        name: "Boeru's Doner",
        url: "https://boerus-d.ro",
        label: "boerus-d.ro",
        text: "Fast-food chain platform with digital menu, promotions and a Leaflet map of the branches — 500+ visits in the last three months.",
      },
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "MongoDB", "Python", "FastAPI", "LLMs", "Vercel"],
  },
];

export const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Python", "TypeScript", "JavaScript", "PHP", "Java", "C", "C++", "MQL5"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Next.js", "React", "FastAPI", "Flask", "Symfony", "Tailwind CSS", "LangChain", "Microsoft Bot Framework", "sentence-transformers"],
  },
  {
    title: "Machine Learning",
    skills: ["PyTorch", "LightGBM", "XGBoost", "scikit-learn", "Optuna", "OpenCV", "pandas", "TensorFlow"],
  },
  {
    title: "AI & Automation",
    skills: ["LLM Integration", "Anthropic Claude", "Amazon Bedrock", "RAG Pipelines", "Whisper", "Workflow Automation", "Trading Automation"],
  },
  {
    title: "Databases & Backend",
    skills: ["Supabase", "MongoDB", "PostgreSQL", "pgvector", "SQLite", "REST APIs", "Mongoose", "boto3"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["AWS Lambda", "AWS S3", "AWS SAM", "Amazon Bedrock", "AWS SES / SNS", "CloudWatch", "Docker", "Git", "GitHub", "Vercel", "Railway", "Linux", "OAuth2", "Azure AD"],
  },
  {
    title: "Integrations & Services",
    skills: ["Cloudinary", "EmailJS", "Resend", "Leaflet", "ReportLab", "Telegram Bot API", "ngrok"],
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
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "AI Trading Bot",
    subtitle: "Self-Retraining ML System for MetaTrader 5",
    description:
      "A trading bot for MetaTrader 5 that runs and improves itself, built on multi-year price history and engineered market features. Every night it backtests trading strategies against fresh market data to generate labeled trade signals and retrains two competing models on them — LightGBM followed by a PyTorch neural network — both periodically tuned with Optuna.",
    highlights: [
      "Honest validation: models are tested only on data they have never seen, with realistic hour-of-day spread and slippage costs.",
      "A new model replaces the live one only if it genuinely outperforms it out-of-sample — no bad training run can silently degrade production.",
      "Every trade needs a minimum expected profit after costs; a kill switch stops everything if losses or model drift grow.",
      "Weekly backups of database, models and reports to AWS S3; live monitoring via a Flask dashboard and daily Telegram status messages.",
      "Next step: extending the ML layer from entry filtering to active trade management — when to hold, trail or exit an open position.",
    ],
    tech: ["Python", "PyTorch", "LightGBM", "scikit-learn", "Optuna", "Flask", "SQLite", "MQL5", "MetaTrader 5", "AWS S3"],
    category: "ai",
    github: "https://github.com/buzeu1/mt5-ai-trader",
    metric: "Retrains nightly",
    featured: true,
  },
  {
    title: "AI Chat Assistant",
    subtitle: "Serverless AI on AWS with Amazon Bedrock",
    description:
      "Two AWS builds around Amazon Bedrock. First, a serverless chat API — a Python Lambda behind API Gateway calls Claude, with the whole infrastructure written as code. Second, a Next.js 15 chat app that streams Claude's answer word-by-word into the browser, with the same instant feel as ChatGPT.",
    highlights: [
      "Infrastructure as code with AWS SAM; the IAM role has exactly one permission — invoking the model.",
      "Token-by-token streaming rendered as formatted Markdown with syntax-highlighted code.",
      "CloudWatch wired in for observability.",
    ],
    tech: ["Python", "AWS Lambda", "AWS SAM", "API Gateway", "Amazon Bedrock (Claude)", "Next.js 15", "TypeScript"],
    category: "ai",
    github: "https://github.com/buzeu1/ai-chat-bedrock-demo",
    metric: "Least-privilege IAM",
    featured: true,
  },
  {
    title: "Sales Assistant Bot",
    subtitle: "AI Sales Bot for Microsoft Teams & Web",
    description:
      "A sales bot for Microsoft Teams and web that answers questions about products, prices and offers — by text or voice. It finds the right product even with typos, synonyms or translated names.",
    highlights: [
      "Three-step search: exact code match, fuzzy scoring, then an LLM double-check — backed by multilingual embeddings.",
      "When a request is unclear, it detects what is ambiguous (category, size or variant) and asks one short question to settle it.",
      "Voice notes transcribed with Whisper large-v3; confirmed offers come back as PDFs generated on the spot.",
      "Connects natively to Microsoft 365 through Azure AD (OAuth2).",
    ],
    tech: ["Python", "FastAPI", "Microsoft Bot Framework", "Azure AD (OAuth2)", "Groq (Llama 3.1)", "Whisper", "sentence-transformers", "ReportLab"],
    category: "ai",
    github: "https://github.com/buzeu1",
    metric: "Text + voice",
    featured: true,
  },
  {
    title: "Fără Agenții",
    subtitle: "Commission-Free Real Estate Marketplace",
    description:
      "A real estate platform where owners sell or rent directly to people — no agents, no commissions. Listings cover apartments, houses, land and commercial spaces across Iași, with search and filters by neighborhood, category and type.",
    highlights: [
      "Owners manage everything from a personal dashboard and chat live with interested buyers (Supabase Realtime).",
      "Buyers save favorites and follow listing statistics.",
      "AI assistant answers questions about the catalog using RAG (LangChain + Supabase pgvector).",
      "Every database table protected with Row Level Security.",
    ],
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Supabase", "Realtime", "pgvector", "Claude API", "LangChain", "Vercel"],
    category: "ai",
    github: "https://github.com/buzeu1/faraagentii",
    metric: "RAG + Realtime",
    featured: true,
  },
  {
    title: "EmotionCamera",
    subtitle: "Real-Time Emotion Recognition",
    description:
      "A web app that reads emotions from the webcam in real time. The browser captures ~30 frames per second, shrinks each one on a hidden canvas and sends it to a Python backend that recognizes 7 facial expressions.",
    highlights: [
      "OpenCV + FER (TensorFlow) classify happy, sad, angry, fearful, surprised, disgusted and neutral.",
      "Emotion, confidence and face position drawn live over the video as a colored overlay.",
      "Backend containerized with Docker on Railway, frontend on Vercel.",
    ],
    tech: ["Next.js 14", "TypeScript", "FastAPI", "Python", "OpenCV", "FER (TensorFlow)", "Docker", "Railway", "Vercel"],
    category: "ai",
    github: "https://github.com/buzeu1/emotion-detector",
    metric: "~30 FPS",
  },
  {
    title: "Compact Drive",
    subtitle: "Driving School Platform",
    description:
      "A platform for a driving school in Roman, Neamț. The owner manages the gallery and promotions alone from three simple admin pages, and enrollment requests arrive instantly by email.",
    highlights: [
      "Live gallery and promotions system backed by Supabase (PostgreSQL) — no developer needed for updates.",
      "Complete local SEO: JSON-LD (AutomotiveBusiness, FAQPage, BreadcrumbList), per-page Open Graph, sitemap and robots.txt.",
      "Technical SEO drives 150+ organic visits a month straight from Google Search.",
    ],
    tech: ["Next.js 14", "React 18", "Supabase", "PostgreSQL", "EmailJS", "Tailwind CSS"],
    category: "web",
    github: "https://github.com/buzeu1/compactdrive",
    live: "https://compactdrive.ro",
    metric: "150+ visits / month",
  },
  {
    title: "Boeru's Doner",
    subtitle: "Fast-Food Chain Web Platform",
    description:
      "A marketing and ordering platform for a fast-food chain with 5 locations across Moldova, Romania — digital menu, promotions page and an interactive map of the branches.",
    highlights: [
      "50+ item digital menu across 9 categories with variants and badges.",
      "Interactive Leaflet map, per-location Glovo / Wolt ordering links and a franchise funnel via Resend.",
      "Open Graph + JSON-LD on every page (Restaurant schema per location, FAQ schema).",
      "Bringing in real customers — 500+ visits in the last three months.",
    ],
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS", "React-Leaflet", "Resend", "Vercel"],
    category: "web",
    github: "https://github.com/buzeu1/boerusdoner",
    live: "https://boerus-d.ro",
    metric: "500+ visits / 3 mo",
  },
  {
    title: "Aeron Termosistem",
    subtitle: "Construction & Renovation Company Website",
    description:
      "A business website for a construction and renovation company in Roman, Neamț. The client uploads photos himself and the gallery updates automatically; the contact form saves every lead straight to the database.",
    highlights: [
      "Photo uploads stream to Cloudinary, URLs persisted in MongoDB Atlas.",
      "Gallery falls back gracefully to static images, with a keyboard-navigable lightbox.",
      "Every contact-form lead stored in MongoDB.",
    ],
    tech: ["Next.js 15", "TypeScript", "MongoDB Atlas", "Mongoose", "Cloudinary", "Vercel"],
    category: "web",
    github: "https://github.com/buzeu1/aerontermosistem",
    live: "https://aerontermosistem.vercel.app",
    metric: "Self-managed gallery",
  },
  {
    title: "Trapped in the Server",
    subtitle: "2D Java Game, No Engine",
    description:
      "A 2D action-adventure game written in pure Java — custom game loop, rendering and physics at 60 FPS across three levels with different mechanics. Built in a two-person team for a university course.",
    highlights: [
      "Side-scrolling platformer, top-down exploration with fog-of-war and a button/door puzzle, and a final boss fight.",
      "OOP design patterns end-to-end: Singleton, State, Abstract Factory; levels built in Tiled.",
      "Progress (position, score, inventory, boss state) saved to SQLite and loaded back across sessions.",
    ],
    tech: ["Java", "Java2D / AWT", "Tiled (TMX)", "SQLite", "JDBC", "Design Patterns"],
    category: "game",
    github: "https://github.com/buzeu1/Trapped-In-The-Server",
    metric: "60 FPS",
  },
];
