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
    value: "3+",
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
      "A marketplace that lets buyers and renters deal directly with property owners across Iași — no agents, no commissions. Owners and tenants message each other in real time, manage listings from their own dashboard, and can ask an AI assistant anything about the available properties and get answers grounded in the actual listings database. Every table is locked down with Row Level Security, so access control is enforced at the database level, not just in the UI.",
    tech: ["Next.js 14", "TypeScript", "Supabase", "Claude API", "LangChain", "RAG", "pgvector"],
    github: "https://github.com/buzeu1/faraagentii",
    featured: true,
  },
  {
    title: "AI Trading Bot MT5 — Autonomous Trading System",
    description:
      "An autonomous trading system for MetaTrader 5 that scans forex pairs, indices and crypto every 30 seconds and trades around the clock without supervision. Every buy, sell, hold or close call is made by an AI model that also draws on a memory of past market situations through a retrieval-augmented pipeline, so its judgment improves the more it trades. Position sizing adapts to account equity and volatility, losses are capped with trailing stops, and it automatically sits out high-impact news events.",
    tech: ["Python", "Flask", "MQL5", "Groq API", "ChromaDB", "LangChain"],
    github: "https://github.com/buzeu1/mt5-ai-trader",
    featured: true,
  },
  {
    title: "Sales Assistant Bot — Microsoft Teams",
    description:
      "A Microsoft Teams bot that lets sales agents find the right product just by describing what they need in plain language. It searches in three passes — exact SKU match, fuzzy text scoring, then AI semantic verification — and understands product names across languages, so a misspelled or informal query still finds the right item. Agents can ask by voice, get a clarifying question when a match is ambiguous, and walk away with a ready-made PDF offer.",
    tech: ["Python", "FastAPI", "Bot Framework SDK", "Azure AD", "Whisper", "Groq API"],
    github: "https://github.com/buzeu1",
    featured: true,
  },
  {
    title: "AI Chat Assistant — AWS Lambda, API Gateway & Amazon Bedrock",
    description:
      "A serverless AI chat backend built the way production infrastructure should be: fully defined as code with AWS SAM, running on a Lambda function that holds only the one permission it needs to call Claude through Amazon Bedrock. Paired with a Next.js frontend that streams the answer back token by token, so replies feel instant instead of arriving all at once, and render as clean, formatted Markdown as they come in.",
    tech: ["Python", "AWS Lambda", "AWS SAM", "API Gateway", "Amazon Bedrock", "Next.js"],
    github: "https://github.com/buzeu1/ai-chat-bedrock-demo",
    featured: true,
  },
  {
    title: "Aerontermosistem — Construction & Renovation Company Website",
    description:
      "A business website for a construction and renovation company in Roman, Neamț, built so the client can run it without ever calling a developer. Project photos are managed through a custom admin panel, every inquiry lands straight in a MongoDB database, and the whole site is tuned for local search with structured data and Open Graph metadata.",
    tech: ["Next.js 15", "TypeScript", "MongoDB Atlas", "Cloudinary", "Vercel"],
    github: "https://github.com/buzeu1/aerontermosistem",
  },
  {
    title: "Boeru's Doner — Fast-Food Chain Web Platform",
    description:
      "A web platform for a 5-location fast-food chain that works both as a customer-facing menu and a franchise recruitment tool. Over 50 items across 9 categories are backed by live, Supabase-driven pricing and promotions, ordering links out to Glovo and Wolt for whichever location is closest, and the whole experience carries a distinct branded look with smooth scroll animations.",
    tech: ["Next.js 16", "TypeScript", "Supabase", "Tailwind CSS"],
    github: "https://github.com/buzeu1/boerusdoner",
  },
  {
    title: "Compact Drive — Driving School Platform",
    description:
      "A website for a driving school in Roman, Neamț, with an admin dashboard that hands full control back to the owner — updating the student gallery or launching a new promotion needs no developer involved. Enrollment forms deliver straight to email through EmailJS, and structured data, a sitemap and Open Graph tags take care of the local SEO groundwork.",
    tech: ["Next.js 14", "Supabase", "EmailJS", "Tailwind CSS"],
    github: "https://github.com/buzeu1/compactdrive",
  },
  {
    title: "EmotionCamera — Real-Time AI Emotion Recognition",
    description:
      "A web app that reads facial expressions live from your webcam — happy, sad, angry, fearful, surprised, disgusted or neutral — at roughly 30 frames a second. Each frame is analyzed by a computer-vision backend and the result is drawn straight onto the video feed as bounding boxes and per-emotion probability bars, with the backend containerized and deployed independently from the frontend.",
    tech: ["Next.js 14", "FastAPI", "OpenCV", "FER (TensorFlow)", "Docker", "Railway"],
    github: "https://github.com/buzeu1/emotion-detector",
  },
  {
    title: "Trapped in the Server — 2D Java Adventure Game",
    description:
      "A 2D adventure game built entirely from scratch in Java, with no engine underneath it — the rendering pipeline, the game loop and the physics are all hand-written. Across 3 levels, the player fights through a side-scrolling platformer, a fog-of-war top-down maze and a final boss arena, all running on architecture built the right way, with Singleton, State and Abstract Factory patterns doing the structural work a real codebase needs.",
    tech: ["Java", "Java2D / AWT", "Tiled (TMX)", "SQLite", "JDBC"],
    github: "https://github.com/buzeu1/Trapped-In-The-Server",
  },
];
