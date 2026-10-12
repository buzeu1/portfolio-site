import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative border-t border-slate-200/70 bg-[#f7f8fb] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="Shipping for companies and real clients."
          description="From rebuilding a multilingual company blog with an LLM publishing pipeline, to designing, building and maintaining production websites for paying clients."
        />

        <div className="relative mt-14">
          <div className="absolute bottom-0 left-[7px] top-2 hidden w-px bg-slate-200 md:block" />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.08}>
                <div className="relative md:pl-12">
                  <span className="absolute left-0 top-8 hidden h-[15px] w-[15px] rounded-full border-[3px] border-white bg-indigo-600 shadow-[0_0_0_1px_rgba(79,70,229,0.35)] md:block" />

                  <article className="card card-hover p-5 sm:p-8">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900">{job.role}</h3>
                        <p className="mt-1 font-medium text-indigo-600">{job.company}</p>
                      </div>
                      <span className="w-fit shrink-0 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-xs text-slate-600">
                        {job.period}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-slate-400">{job.meta}</p>

                    {job.summary && (
                      <p className="mt-5 text-[15px] leading-relaxed text-slate-700">{job.summary}</p>
                    )}

                    {job.metrics && (
                      <div className="mt-6 grid grid-cols-2 overflow-hidden rounded-xl border border-slate-200 bg-slate-50/60 md:grid-cols-4">
                        {job.metrics.map((m, idx) => (
                          <div
                            key={m.label}
                            className={`px-4 py-4 ${idx % 2 === 1 ? "border-l border-slate-200" : ""} ${
                              idx >= 2 ? "border-t border-slate-200 md:border-t-0" : ""
                            } ${idx === 2 ? "md:border-l" : ""}`}
                          >
                            <p className="text-xl font-semibold tracking-tight text-slate-900">{m.value}</p>
                            <p className="mt-0.5 text-xs leading-snug text-slate-500">{m.label}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    <ul className={`mt-6 ${job.points.length > 4 ? "grid gap-x-8 gap-y-3 md:grid-cols-2" : "space-y-3"}`}>
                      {job.points.map((p) => (
                        <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-slate-600">
                          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                          {p}
                        </li>
                      ))}
                    </ul>

                    {job.clients && (
                      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                        {job.clients.map((c) => (
                          <a
                            key={c.name}
                            href={c.url}
                            target="_blank"
                            rel="noreferrer"
                            className="group rounded-xl border border-slate-200 bg-slate-50/60 p-4 transition-colors hover:border-indigo-200 hover:bg-white"
                          >
                            <div className="flex items-center justify-between">
                              <p className="font-semibold text-slate-900">{c.name}</p>
                              <ArrowUpRight
                                size={16}
                                className="text-slate-400 transition-colors group-hover:text-indigo-600"
                              />
                            </div>
                            <p className="mt-0.5 text-xs text-indigo-600">{c.label}</p>
                            <p className="mt-2 text-sm leading-relaxed text-slate-500">{c.text}</p>
                          </a>
                        ))}
                      </div>
                    )}

                    <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-5">
                      {job.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </article>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
