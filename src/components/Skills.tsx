import { Code2, Layers, Brain, Database, Cloud, Plug } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/data/portfolio";

const ICONS = [Code2, Layers, Brain, Cloud, Database, Plug];

export default function Skills() {
  return (
    <section id="skills" className="relative border-t border-slate-200/70 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          index="03"
          eyebrow="Skills"
          title="Tools I reach for when I build."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal
                key={group.title}
                delay={i * 0.05}
                className={i === skillGroups.length - 1 && skillGroups.length % 3 === 1 ? "lg:col-span-3" : ""}
              >
                <div className="card card-hover h-full p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900">{group.title}</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 transition-colors hover:border-indigo-300 hover:text-indigo-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
