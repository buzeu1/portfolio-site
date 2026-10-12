"use client";

import { motion } from "framer-motion";
import { ExternalLink, Check } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import type { Project } from "@/data/portfolio";

const CATEGORY_LABEL: Record<Project["category"], string> = {
  ai: "AI & ML",
  web: "Client Website",
  game: "Game Dev",
};

export default function ProjectCard({ project, wide }: { project: Project; wide?: boolean }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`card card-hover group relative flex h-full min-w-0 flex-col p-5 sm:p-7 ${
        wide ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-slate-500">
          {CATEGORY_LABEL[project.category]}
        </span>
        {project.featured && (
          <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-indigo-600">
            Featured
          </span>
        )}
        {project.live && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Live in production
          </span>
        )}
        {project.status && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-amber-700">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            {project.status}
          </span>
        )}
        {project.metric && (
          <span className="ml-auto font-mono text-xs text-slate-400">{project.metric}</span>
        )}
      </div>

      <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">{project.title}</h3>
      <p className="mt-1 text-sm font-medium text-indigo-600">{project.subtitle}</p>

      <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{project.description}</p>

      <ul className={`mt-5 flex-1 gap-x-8 gap-y-2.5 ${wide ? "grid md:grid-cols-2" : "space-y-2.5"}`}>
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-slate-500">
            <Check size={15} className="mt-[3px] shrink-0 text-indigo-500" />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-medium text-slate-600"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-600"
          >
            <ExternalLink size={14} />
            Live Site
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-900"
          >
            <GithubIcon size={14} />
            Source
          </a>
        )}
      </div>
    </motion.article>
  );
}
