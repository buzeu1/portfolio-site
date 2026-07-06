"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import type { Project } from "@/data/portfolio";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`group relative flex h-full flex-col rounded-2xl border p-6 backdrop-blur-sm ${
        project.featured
          ? "border-violet-400/30 bg-gradient-to-b from-violet-500/[0.08] to-transparent"
          : "border-white/10 bg-white/[0.03]"
      }`}
    >
      {project.featured && (
        <div className="mb-3 flex items-center gap-1.5 text-xs font-medium text-violet-300">
          <Star size={12} fill="currentColor" />
          Featured
        </div>
      )}

      <h3 className="text-lg font-semibold leading-snug text-white">{project.title}</h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/55"
          >
            {t}
          </span>
        ))}
      </div>

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
        >
          <GithubIcon size={16} />
          View on GitHub
        </a>
      )}
    </motion.div>
  );
}
