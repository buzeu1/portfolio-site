import { GraduationCap } from "lucide-react";
import Reveal from "@/components/Reveal";
import { profile, education, achievements } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="relative bg-[#05050a] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-violet-400">
            About
          </span>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
            Turning AI capabilities into products people actually use.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr]">
          <Reveal delay={0.05}>
            <p className="text-lg leading-relaxed text-white/65">{profile.bio}</p>

            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <GraduationCap className="mt-0.5 shrink-0 text-violet-400" size={22} />
              <div>
                <p className="font-medium text-white">{education.school}</p>
                <p className="mt-1 text-sm text-white/55">{education.degree}</p>
                <p className="mt-1 text-sm text-white/40">{education.period}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-1 gap-4">
              {achievements.map((a) => (
                <div
                  key={a.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-violet-400/30"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-3xl font-bold text-transparent">
                      {a.value}
                    </span>
                    <span className="text-xs text-white/40">{a.year}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{a.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
