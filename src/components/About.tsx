import { GraduationCap } from "lucide-react";
import Reveal from "@/components/Reveal";
import { profile, education, achievements } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="relative bg-[#eaeaee] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-violet-600">
            About
          </span>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold text-zinc-900 sm:text-4xl">
            Turning AI capabilities into products people actually use.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr]">
          <Reveal delay={0.05}>
            <p className="text-lg leading-relaxed text-zinc-600">{profile.bio}</p>

            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <GraduationCap className="mt-0.5 shrink-0 text-violet-600" size={22} />
              <div>
                <p className="font-medium text-zinc-900">{education.school}</p>
                <p className="mt-1 text-sm text-zinc-600">{education.degree}</p>
                <p className="mt-1 text-sm text-zinc-400">{education.period}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-1 gap-4">
              {achievements.map((a) => (
                <div
                  key={a.label}
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-3xl font-bold text-transparent">
                      {a.value}
                    </span>
                    <span className="text-xs text-zinc-400">{a.year}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{a.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
