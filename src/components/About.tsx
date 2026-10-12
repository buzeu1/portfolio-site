import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  profile,
  education,
  achievements,
  strengths,
  coursework,
  interests,
  languages,
} from "@/data/portfolio";

export default function About() {
  const facts = [
    { label: "Based in", value: `${profile.location} · Remote` },
    { label: "Education", value: "BSc Computer Science & IT", sub: `TU “Gheorghe Asachi” Iași · ${education.period}` },
    { label: "Focus", value: "AI agents, LLM integration, ML", sub: interests.join(" · ") },
    { label: "Languages", value: languages.map((l) => `${l.name} (${l.level})`).join(" · ") },
    { label: "Available", value: "Immediately", sub: "Full-time, part-time or internship" },
  ];

  const columns = [
    { title: "Achievements", items: achievements.map((a) => ({ text: a.label, meta: a.year })) },
    { title: "How I work", items: strengths.map((s) => ({ text: s, meta: "" })) },
    { title: "Coursework", items: coursework.map((c) => ({ text: c, meta: "" })) },
  ];

  return (
    <section id="about" className="relative border-t border-slate-200/70 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Turning AI capabilities into products people actually use."
        />

        <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal delay={0.05}>
            <div className="space-y-5 text-base leading-[1.8] text-slate-600 sm:text-[17px] lg:-mt-1">
              {profile.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <dl className="divide-y divide-slate-200 border-b border-slate-200">
              {facts.map((f) => (
                <div key={f.label} className="grid grid-cols-[100px_1fr] gap-4 py-3.5 first:pt-0 sm:grid-cols-[120px_1fr] sm:gap-6">
                  <dt className="text-xs font-medium uppercase tracking-wider text-slate-400 sm:pt-0.5">
                    {f.label}
                  </dt>
                  <dd className="text-[15px] leading-relaxed text-slate-800">
                    {f.value}
                    {f.sub && <span className="mt-0.5 block text-[13px] text-slate-400">{f.sub}</span>}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 grid grid-cols-1 gap-10 border-t border-slate-200 pt-10 md:grid-cols-3 md:gap-0">
            {columns.map((col, i) => (
              <div key={col.title} className={i > 0 ? "md:border-l md:border-slate-200 md:pl-10" : "md:pr-10"}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-900">
                  {col.title}
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {col.items.map((item) => (
                    <li key={item.text} className="text-[15px] leading-snug text-slate-600">
                      {item.text}
                      {item.meta && (
                        <span className="ml-2 font-mono text-xs text-slate-400">{item.meta}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
