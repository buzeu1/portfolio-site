import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#05050a] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-violet-400">
            Projects
          </span>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
            A selection of things I&apos;ve shipped.
          </h2>
          <p className="mt-4 max-w-2xl text-white/50">
            AI systems, full-stack platforms for real businesses, and a game built from scratch.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 4) * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
