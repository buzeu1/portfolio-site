export const profile = {
  name: "Buzau Cosmin-Ionut",
  role: "AI Software Engineer",
  location: "Iași, România",
  email: "buzaucosmin6@gmail.com",
  phone: "+40 721 850 827",
  github: "https://github.com/buzeu1",
  linkedin: "https://www.linkedin.com/in/cosmin-ionut.buzau",
  cvPath: "/CV_Buzau_Cosmin_Ionut.pdf",
  photo: "/profile.png",
  tagline:
    "Building AI-powered products end-to-end — from LLM integration and RAG pipelines to production-grade full-stack platforms.",
  bio: "Computer Science student at “Gheorghe Asachi” Technical University, Iași, with hands-on experience building AI-powered apps and full-stack platforms. Skilled in LLM API integration, workflow automation, and deploying production systems with Python, Next.js, TypeScript, FastAPI and Supabase. A fast learner who thrives in new environments and adapts quickly across domains — always delivering results.",
};

export const education = {
  school: "Universitatea Tehnică “Gheorghe Asachi”, Iași",
  degree: "Bachelor's in Progress — Computer Science and Information Technology",
  period: "Oct 2023 – Present",
};

export const achievements = [
  {
    value: "Top",
    label: "Admitted to CTI (Computer Science & IT) among the top applicants",
    year: "2024",
  },
  {
    value: "9+",
    label: "Production websites & AI systems shipped for real clients",
    year: "2024–2026",
  },
  {
    value: "24/7",
    label: "Autonomous AI trading bot integrating multiple LLM APIs",
    year: "2026",
  },
];

export const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C", "C++", "Verilog", "MQL5", "Assembly"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Next.js", "React", "FastAPI", "Tailwind CSS", "Microsoft Bot Framework", "sentence-transformers"],
  },
  {
    title: "Databases & Backend",
    skills: ["Supabase", "MongoDB", "PostgreSQL", "REST APIs", "boto3"],
  },
  {
    title: "AI & Automation",
    skills: ["Groq API", "LLaMA", "OpenCV", "LLM Integration", "Trading Automation", "Gemini API", "Anthropic Claude", "Amazon Bedrock"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Git", "GitHub", "Vercel", "Railway", "Linux", "AWS Lambda", "AWS SAM", "CloudWatch", "Azure AD"],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Fără Agenții — Commission-Free Real Estate Marketplace",
    description:
      "Full-stack marketplace connecting buyers and renters directly with property owners across Iași — no agents, no commissions. Real-time chat between parties, a role-gated admin panel, and an AI chatbot powered by Claude + LangChain RAG over a pgvector-backed listings database, all secured with Row Level Security.",
    tech: ["Next.js 14", "TypeScript", "Supabase", "Claude API", "LangChain", "RAG", "pgvector"],
    github: "https://github.com/buzeu1/faraagentii",
    featured: true,
  },
  {
    title: "AI Trading Bot MT5 — Autonomous Trading System",
    description:
      "Fully autonomous MetaTrader 5 bot scanning forex, indices and crypto every 30 seconds, deciding BUY/SELL/HOLD/CLOSE via a Groq LLaMA model. A custom RAG pipeline (ChromaDB + LangChain) gives it contextual memory of past market situations, with ATR-based risk sizing, trailing stop-loss and a high-impact news filter.",
    tech: ["Python", "Flask", "MQL5", "Groq API", "ChromaDB", "LangChain"],
    github: "https://github.com/buzeu1/mt5-ai-trader",
    featured: true,
  },
  {
    title: "Sales Assistant Bot — Microsoft Teams",
    description:
      "Teams bot for sales agents processing natural-language queries against a product catalog through a three-tier search engine — exact SKU match, fuzzy lexical scoring, then LLM semantic verification — with multilingual embeddings, Whisper voice input, and automated PDF offer generation.",
    tech: ["Python", "FastAPI", "Bot Framework SDK", "Azure AD", "Whisper", "Groq API"],
    github: "https://github.com/buzeu1",
    featured: true,
  },
  {
    title: "AI Chat Assistant — AWS Lambda, API Gateway & Amazon Bedrock",
    description:
      "Serverless chat API defined as infrastructure-as-code with AWS SAM: a least-privilege Lambda function invokes Claude via Amazon Bedrock behind a single API Gateway route. Paired with a Next.js app that streams Bedrock responses token-by-token straight to the browser, rendered as formatted Markdown.",
    tech: ["Python", "AWS Lambda", "AWS SAM", "API Gateway", "Amazon Bedrock", "Next.js"],
    github: "https://github.com/buzeu1/ai-chat-bedrock-demo",
    featured: true,
  },
  {
    title: "Aerontermosistem — Construction & Renovation Company Website",
    description:
      "Business website for a construction and renovation company in Roman, Neamț, with a dynamic image gallery managed through a custom admin panel, a MongoDB-backed contact form, and full local SEO with Open Graph metadata and JSON-LD structured data.",
    tech: ["Next.js 15", "TypeScript", "MongoDB Atlas", "Cloudinary", "Vercel"],
    github: "https://github.com/buzeu1/aerontermosistem",
  },
  {
    title: "Boeru's Doner — Fast-Food Chain Web Platform",
    description:
      "Platform for a 5-location fast-food chain: a full digital menu with 50+ items across 9 categories, Supabase-driven live promotions, multi-location ordering linked to Glovo/Wolt, and a franchise-inquiry funnel with a branded design system.",
    tech: ["Next.js 16", "TypeScript", "Supabase", "Tailwind CSS"],
    github: "https://github.com/buzeu1/boerusdoner",
  },
  {
    title: "Compact Drive — Driving School Platform",
    description:
      "Platform for a driving school in Roman, Neamț, with an admin dashboard the client uses to manage the student gallery and promotions independently, EmailJS-connected enrollment forms, and advanced local SEO with structured data schemas.",
    tech: ["Next.js 14", "Supabase", "EmailJS", "Tailwind CSS"],
    github: "https://github.com/buzeu1/compactdrive",
  },
  {
    title: "EmotionCamera — Real-Time AI Emotion Recognition",
    description:
      "Real-time facial emotion detection from a live webcam feed, classifying 7 expressions via OpenCV and FER at ~30fps, with results overlaid live as bounding boxes and per-emotion probability bars. Backend containerized with Docker on Railway; frontend on Vercel.",
    tech: ["Next.js 14", "FastAPI", "OpenCV", "FER (TensorFlow)", "Docker", "Railway"],
    github: "https://github.com/buzeu1/emotion-detector",
  },
  {
    title: "Trapped in the Server — 2D Java Adventure Game",
    description:
      "A 2D action-adventure game built entirely from scratch in Java, no external engine — 3 levels spanning platforming, top-down exploration and a boss fight, with a triple-buffered 60 FPS render loop, custom Tiled map parsing, and Singleton/State/Abstract-Factory design patterns throughout.",
    tech: ["Java", "Java2D / AWT", "Tiled (TMX)", "SQLite", "JDBC"],
    github: "https://github.com/buzeu1/Trapped-In-The-Server",
  },
];
