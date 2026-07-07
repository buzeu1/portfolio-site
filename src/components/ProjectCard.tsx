"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import type { Project } from "@/data/portfolio";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`group relative flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-lg ${
        project.featured ? "border-violet-300" : "border-zinc-200"
      }`}
    >
      {project.featured && (
        <div className="mb-3 flex items-center gap-1.5 text-xs font-medium text-violet-600">
          <Star size={12} fill="currentColor" />
          Featured
        </div>
      )}

      <h3 className="text-lg font-semibold leading-snug text-zinc-900">{project.title}</h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-1 text-[11px] text-zinc-500"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-5">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-violet-700 transition-colors hover:text-violet-900"
          >
            <ExternalLink size={15} />
            Live Site
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
          >
            <GithubIcon size={15} />
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
}
