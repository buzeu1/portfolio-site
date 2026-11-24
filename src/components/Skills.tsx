import { Code2, Layers, Brain, Database, Cloud, Languages } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/data/portfolio";

const ICONS = [Code2, Layers, Brain, Cloud, Database, Languages];

export default function Skills() {
  return (
    <section id="skills" className="relative border-t border-slate-200/70 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          index="03"
          eyebrow="Skills"
          title="Tools I reach for when I build."
        />

        <Reveal delay={0.05}>
          <div className="card mt-12 divide-y divide-slate-100 px-5 sm:px-8">
            {skillGroups.map((group, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <div
                  key={group.title}
                  className="grid grid-cols-1 gap-4 py-6 md:grid-cols-[230px_1fr] md:items-start md:gap-8"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 md:pt-1">
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
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
