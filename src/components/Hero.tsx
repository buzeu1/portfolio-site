"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Download, MapPin, Briefcase } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile, stats, experience } from "@/data/portfolio";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  const latest = experience[0];

  return (
    <section id="top" className="relative overflow-hidden bg-[#fbfbfd] pb-20 pt-32 sm:pt-36">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="dot-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
        <div className="absolute left-[10%] top-[-12rem] h-[32rem] w-[32rem] rounded-full bg-indigo-100/70 blur-[120px]" />
        <div className="absolute right-[-6rem] top-[8rem] h-[26rem] w-[26rem] rounded-full bg-sky-100/70 blur-[120px]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-[1.25fr_0.75fr]">
        <div>
          <motion.p
            {...fade(0)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-700 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </motion.p>

          <motion.h1
            {...fade(0.05)}
            className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-[3.6rem] md:leading-[1.05]"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            {...fade(0.12)}
            className="mt-4 text-xl font-medium text-indigo-600 sm:text-2xl"
          >
            {profile.role}
          </motion.p>

          <motion.p
            {...fade(0.2)}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div {...fade(0.26)} className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} className="text-slate-400" />
              {profile.location} · Remote
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Briefcase size={15} className="text-slate-400" />
              Recently: {latest.role} @ {latest.company}
            </span>
          </motion.div>

          <motion.div {...fade(0.32)} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-600"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.cvPath}
              download
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:border-slate-400"
            >
              <Download size={16} />
              Download CV
            </a>

            <div className="flex items-center gap-2 sm:ml-2">
              {[
                { href: profile.github, label: "GitHub", icon: <GithubIcon size={18} />, ext: true },
                { href: profile.linkedin, label: "LinkedIn", icon: <LinkedinIcon size={18} />, ext: true },
                { href: `mailto:${profile.email}`, label: "Email", icon: <Mail size={18} />, ext: false },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  {...(s.ext ? { target: "_blank", rel: "noreferrer" } : {})}
                  aria-label={s.label}
                  className="rounded-full border border-slate-200 bg-white p-2.5 text-slate-500 shadow-sm transition-colors hover:border-indigo-200 hover:text-indigo-600"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[340px]"
        >
          <div className="absolute -inset-3 -z-10 rounded-[2.2rem] bg-gradient-to-br from-indigo-200/60 via-white to-sky-200/60 blur-xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem] border border-white bg-white p-2 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.35)]">
            <div className="relative h-full w-full overflow-hidden rounded-[1.4rem]">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                priority
                sizes="(max-width: 768px) 90vw, 340px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg sm:block">
            <p className="text-[11px] uppercase tracking-wider text-slate-400">Stack</p>
            <p className="text-sm font-semibold text-slate-800">Python · TypeScript · Next.js</p>
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div {...fade(0.4)} className="mx-auto mt-20 max-w-6xl px-6">
        <div className="card grid grid-cols-2 divide-slate-100 md:grid-cols-4 md:divide-x">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-6 text-center md:text-left">
              <p className="text-3xl font-semibold tracking-tight text-slate-900">{s.value}</p>
              <p className="mt-1 text-sm text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
