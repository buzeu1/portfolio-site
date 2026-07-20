export const profile = {
  name: "Buzau Cosmin-Ionut",
  role: "AI Software Engineer",
  location: "Iași, România",
  email: "buzaucosmin6@gmail.com",
  phone: "+40 721 850 827",
  github: "https://github.com/buzeu1",
  linkedin: "https://www.linkedin.com/in/cosmin-ionut-buzau/",
  cvPath: "/CV_Buzau_Cosmin_Ionut.pdf",
  photo: "/profile.png",
  tagline:
    "Building AI-powered products end-to-end — from LLM integration and machine learning to production-grade full-stack platforms.",
  bio: "Computer Science student at “Gheorghe Asachi” Technical University, Iași, building and shipping real products since 2024 — not side projects that stay on GitHub, but systems actual businesses and users run daily. Skilled in LLM integration, RAG pipelines, machine learning and workflow automation, deploying production systems with Python, Next.js, TypeScript, FastAPI and Supabase. A fast learner who thrives in new environments and adapts quickly across domains — always delivering results.",
};

export const education = {
  school: "Universitatea Tehnică “Gheorghe Asachi”, Iași",
  degree: "Bachelor's in Progress — Computer Science and Information Technology",
  period: "Oct 2024 – Present",
};

export const achievements = [
  {
    value: "Top",
    label: "Admitted to CTI (Computer Science & IT) among the top applicants",
    year: "2024",
  },
  {
    value: "3+",
    label: "Production websites & AI systems shipped for real clients",
    year: "2024–2026",
  },
  {
    value: "24/7",
    label: "Engineered a self-retraining ML trading system (LightGBM + PyTorch)",
    year: "2026",
  },
];

export const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C", "C++", "MQL5"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Next.js", "React", "FastAPI", "Flask", "Tailwind CSS", "LangChain", "Microsoft Bot Framework", "sentence-transformers"],
  },
  {
    title: "Machine Learning",
    skills: ["PyTorch", "LightGBM", "XGBoost", "scikit-learn", "Optuna", "OpenCV", "pandas", "TensorFlow"],
  },
  {
    title: "Databases & Backend",
    skills: ["Supabase", "MongoDB", "Mongoose", "PostgreSQL", "pgvector", "SQLite", "REST APIs", "boto3"],
  },
  {
    title: "AI & Automation",
    skills: ["LLM Integration", "RAG Pipelines", "Whisper", "Trading Automation", "Workflow Automation", "Anthropic Claude", "Amazon Bedrock"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Git", "GitHub", "Vercel", "Railway", "Linux", "AWS Lambda", "AWS S3", "AWS SAM", "CloudWatch", "OAuth2", "Azure AD"],
  },
  {
    title: "Integrations & Services",
    skills: ["Cloudinary", "EmailJS", "Resend", "Leaflet", "ReportLab", "ngrok"],
  },
];

export type ProjectCategory = "ai" | "web" | "game";

export const categories: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI & LLM" },
  { id: "web", label: "Client Websites" },
  { id: "game", label: "Game Dev" },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  category: ProjectCategory;
  github?: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Fără Agenții — Commission-Free Real Estate Marketplace",
    description:
      "A marketplace that lets buyers and renters deal directly with property owners across Iași — no agents, no commissions. Owners and tenants message each other in real time, manage listings from their own dashboard, and can ask an AI assistant anything about the available properties — answers come from a LangChain RAG pipeline over the live listings database, not from the model's imagination. Every table is locked down with Row Level Security, so access control lives in the database itself.",
    tech: ["Next.js 14", "TypeScript", "Supabase", "Claude API", "LangChain", "RAG", "pgvector"],
    category: "ai",
    github: "https://github.com/buzeu1/faraagentii",
    featured: true,
  },
  {
    title: "AI Trading Bot — Self-Retraining ML System for MetaTrader 5",
    description:
      "A trading bot for MetaTrader 5 that runs and improves itself, built on multi-year price history and engineered market features. Every night it backtests trading strategies against fresh market data to generate labeled trade signals and retrains two competing models on them — LightGBM followed by a PyTorch neural network — both periodically tuned with Optuna. Models are validated the honest way: only on data they have never seen, with realistic hour-of-day spread and slippage costs included. A new model only replaces the live one if it genuinely outperforms it out-of-sample — a safeguard against a bad training run silently degrading production — every trade needs a minimum expected profit after costs, and a kill switch stops everything if losses or model drift grow. The database, trained models and reports are backed up weekly to AWS S3, and live monitoring comes through a Flask dashboard plus daily Telegram status messages. Next step: extending the ML layer from entry filtering to active trade management — deciding when to hold, trail or exit an open position as market conditions evolve.",
    tech: ["Python", "PyTorch", "LightGBM", "scikit-learn", "Optuna", "Flask", "SQLite", "MQL5", "MetaTrader 5", "AWS S3"],
    category: "ai",
    github: "https://github.com/buzeu1/mt5-ai-trader",
    featured: true,
  },
  {
    title: "Sales Assistant Bot — Microsoft Teams",
    description:
      "A Microsoft Teams bot that lets sales agents find the right product by describing it in plain language — or just saying it out loud. Queries resolve through three passes (exact SKU match, weighted fuzzy scoring, LLM verification) backed by multilingual semantic embeddings, so typos, synonyms and translated product names still land on the right item. Ambiguous matches trigger one smart clarifying question, confirmed offers export as ready-made PDFs, and Azure AD plugs it straight into the company's Microsoft 365 environment.",
    tech: ["Python", "FastAPI", "Bot Framework SDK", "Azure AD", "Whisper", "RapidFuzz"],
    category: "ai",
    github: "https://github.com/buzeu1",
    featured: true,
  },
  {
    title: "AI Chat Assistant — AWS Lambda, API Gateway & Amazon Bedrock",
    description:
      "Two hands-on AWS builds. First, a serverless chat API: a Lambda function behind a single API Gateway route calls Claude through Amazon Bedrock, with the whole stack declared as infrastructure-as-code via AWS SAM and locked to a least-privilege IAM role, with CloudWatch wired in for observability. Second, a full Next.js website connected directly to Bedrock — a real-time chat interface that streams the model's answer token-by-token and renders it as formatted Markdown with syntax-highlighted code blocks.",
    tech: ["Python", "AWS Lambda", "AWS SAM", "API Gateway", "Amazon Bedrock", "Next.js"],
    category: "ai",
    github: "https://github.com/buzeu1/ai-chat-bedrock-demo",
    featured: true,
  },
  {
    title: "EmotionCamera — Real-Time AI Emotion Recognition",
    description:
      "A web app that reads facial expressions live from your webcam — happy, sad, angry, fearful, surprised, disgusted or neutral. Each frame is downscaled, base64-encoded and streamed to a Python backend that classifies all 7 emotions with OpenCV and FER (TensorFlow), drawing bounding boxes and per-emotion probability bars straight back onto the video feed. The backend runs containerized on Railway, fully decoupled from the Next.js frontend on Vercel.",
    tech: ["Next.js 14", "FastAPI", "OpenCV", "FER (TensorFlow)", "Docker", "Railway"],
    category: "ai",
    github: "https://github.com/buzeu1/emotion-detector",
  },
  {
    title: "Aerontermosistem — Construction & Renovation Company Website",
    description:
      "A business website for a construction and renovation company in Roman, Neamț. Uploaded project photos stream directly to Cloudinary with their URLs persisted in MongoDB Atlas, the public gallery updates automatically — falling back gracefully to static images if the database is empty — and features a keyboard-navigable lightbox. Contact form submissions land straight in MongoDB.",
    tech: ["Next.js 15", "TypeScript", "MongoDB Atlas", "Mongoose", "Cloudinary", "Vercel"],
    category: "web",
    github: "https://github.com/buzeu1/aerontermosistem",
    live: "https://aerontermosistem.vercel.app",
  },
  {
    title: "Boeru's Doner — Fast-Food Chain Web Platform",
    description:
      "A marketing and ordering platform for a fast-food chain with 5 locations across Moldova, Romania. A 50+ item digital menu across 9 categories with variants and badges, an interactive Leaflet map for finding the nearest branch, per-location Glovo/Wolt ordering links, and a franchise funnel with a routed contact form delivering via Resend. Every page ships its own Open Graph metadata and JSON-LD structured data — Restaurant schema per location plus a FAQ schema. Now bringing in real customers — 500+ visits in the last three months.",
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS", "React-Leaflet", "Resend", "Vercel"],
    category: "web",
    github: "https://github.com/buzeu1/boerusdoner",
    live: "https://boerus-d.ro",
  },
  {
    title: "Compact Drive — Driving School Platform",
    description:
      "A platform for a driving school in Roman, Neamț — a live gallery and promotions system backed by Supabase that the owner updates independently, without a developer involved. Enrollment forms deliver instantly via EmailJS, and the local SEO stack is genuinely complete: JSON-LD schemas (AutomotiveBusiness, FAQPage, BreadcrumbList), per-page Open Graph metadata, sitemap and robots.txt. Technical SEO now drives 150+ organic visits a month straight from Google Search.",
    tech: ["Next.js 14", "React 18", "Supabase", "EmailJS", "Tailwind CSS"],
    category: "web",
    github: "https://github.com/buzeu1/compactdrive",
    live: "https://compactdrive.ro",
  },
  {
    title: "Trapped in the Server — 2D Java Adventure Game",
    description:
      "A 2D action-adventure game built entirely from scratch in Java, no engine underneath — the rendering pipeline, game loop and physics are all hand-written, running triple-buffered at 60 FPS. Across 3 levels the player fights through a side-scrolling platformer, a fog-of-war top-down maze and a final boss arena, on an architecture built with Singleton, State and Abstract Factory patterns, plus a SQLite save system that auto-migrates its schema.",
    tech: ["Java", "Java2D / AWT", "Tiled (TMX)", "SQLite", "JDBC"],
    category: "game",
    github: "https://github.com/buzeu1/Trapped-In-The-Server",
  },
];
