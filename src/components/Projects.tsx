"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects, categories, type ProjectCategory } from "@/data/portfolio";

export default function Projects() {
  const [active, setActive] = useState<"all" | ProjectCategory>("all");

  const visible =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative bg-zinc-50 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-violet-600">
            Projects
          </span>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold text-zinc-900 sm:text-4xl">
            A selection of things I&apos;ve shipped.
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-500">
            AI systems, production platforms for real businesses, and a game built from scratch.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === c.id
                    ? "bg-zinc-900 text-white"
                    : "border border-zinc-300 bg-white text-zinc-600 hover:border-zinc-500 hover:text-zinc-900"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
