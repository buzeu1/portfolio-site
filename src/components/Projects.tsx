"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects, categories, type ProjectCategory } from "@/data/portfolio";

export default function Projects() {
  const [active, setActive] = useState<"all" | ProjectCategory>("all");

  const visible =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  const count = (id: "all" | ProjectCategory) =>
    id === "all" ? projects.length : projects.filter((p) => p.category === id).length;

  return (
    <section id="projects" className="relative border-t border-slate-200/70 bg-[#f7f8fb] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          index="04"
          eyebrow="Projects"
          title="A selection of things I've built and shipped."
          description="Machine-learning systems, LLM-powered apps, production platforms for real businesses — and a game written from scratch."
        />

        <Reveal delay={0.08}>
          <div className="mt-10 inline-flex flex-wrap gap-1 rounded-2xl border sm:rounded-full border-slate-200 bg-slate-50 p-1">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-all sm:px-4 ${
                  active === c.id
                    ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {c.label}
                <span className="ml-1.5 font-mono text-xs text-slate-400">{count(c.id)}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                wide={i === 0 && visible.length % 2 === 1}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
