import Reveal from "@/components/Reveal";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="relative bg-white py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-violet-600">
            Skills
          </span>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold text-zinc-900 sm:text-4xl">
            Tools I reach for when I build.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-zinc-200 bg-zinc-50/60 p-6 transition-shadow hover:shadow-sm">
                <h3 className="text-sm font-semibold text-zinc-800">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600 transition-colors hover:border-violet-400 hover:text-violet-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
