import { GraduationCap, Trophy, CheckCircle2, BookOpen, Sparkles, Languages } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  profile,
  stats,
  education,
  achievements,
  strengths,
  coursework,
  interests,
  languages,
} from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="relative border-t border-slate-200/70 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Turning AI capabilities into products people actually use."
        />

        <Reveal delay={0.05}>
          <div className="card mt-10 grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-4 py-5 sm:px-6 sm:py-6 ${i % 2 === 1 ? "border-l border-slate-100" : ""} ${
                  i >= 2 ? "border-t border-slate-100 md:border-t-0" : ""
                } ${i === 2 ? "md:border-l" : ""}`}
              >
                <p className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">{s.value}</p>
                <p className="mt-1 text-xs leading-snug text-slate-500 sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1.35fr_1fr]">
          <Reveal delay={0.05}>
            <div className="space-y-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              {profile.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div className="card mt-10 flex items-start gap-4 p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <GraduationCap size={22} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-semibold text-slate-900">{education.school}</p>
                  <p className="font-mono text-xs text-slate-400">{education.period}</p>
                </div>
                <p className="mt-1 text-sm text-slate-600">{education.degree}</p>
                <p className="mt-1 text-sm text-slate-400">{education.location}</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="card p-6">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <BookOpen size={16} className="text-indigo-600" />
                  Relevant Coursework
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {coursework.map((c) => (
                    <li key={c} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card p-6">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Sparkles size={16} className="text-indigo-600" />
                  Interests
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {interests.map((i) => (
                    <span
                      key={i}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {i}
                    </span>
                  ))}
                </div>
                <h3 className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Languages size={16} className="text-indigo-600" />
                  Languages
                </h3>
                <div className="mt-3 space-y-1.5 text-sm">
                  {languages.map((l) => (
                    <div key={l.name} className="flex justify-between">
                      <span className="text-slate-700">{l.name}</span>
                      <span className="text-slate-400">{l.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Trophy size={16} className="text-indigo-600" />
                  Achievements
                </h3>
                <div className="mt-5 space-y-5">
                  {achievements.map((a) => (
                    <div key={a.label} className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-indigo-100 bg-indigo-50/60 text-sm font-bold text-indigo-700">
                        {a.value}
                      </div>
                      <div>
                        <p className="text-sm leading-snug text-slate-700">{a.label}</p>
                        <p className="mt-1 font-mono text-xs text-slate-400">{a.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-sm font-semibold text-slate-900">How I work</h3>
                <ul className="mt-4 space-y-3">
                  {strengths.map((s) => (
                    <li key={s} className="flex gap-3 text-sm text-slate-600">
                      <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-emerald-500" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
