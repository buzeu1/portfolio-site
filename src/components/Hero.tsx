"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, ArrowDown, ArrowRight, Download, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#fbfbfd] pb-16 pt-28 md:pb-0 md:pt-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-indigo-100/80 blur-[120px] sm:h-[36rem] sm:w-[36rem]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[18rem] w-[18rem] rounded-full bg-sky-100/80 blur-[120px] sm:h-[28rem] sm:w-[28rem]" />
        <div className="dot-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_72%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-6 md:grid-cols-[1.2fr_0.8fr] md:gap-14">
        <div className="min-w-0">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[11px] font-medium leading-snug text-slate-700 shadow-sm sm:px-4 sm:text-xs"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-[clamp(2.1rem,9vw,3.75rem)] font-semibold leading-[1.08] tracking-tight text-slate-900"
          >
            {profile.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-3 text-xl font-medium text-indigo-600 sm:text-3xl"
          >
            {profile.role}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-4 inline-flex items-center gap-1.5 text-sm text-slate-500"
          >
            <MapPin size={15} className="text-slate-400" />
            {profile.location} · Remote
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-8 flex flex-col gap-4 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3"
          >
            <div className="grid grid-cols-2 gap-3 sm:flex">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-600 sm:px-6"
              >
                View Projects
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={profile.cvPath}
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:border-slate-400 sm:px-6"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>

            <div className="flex items-center gap-3 sm:ml-2">
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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[300px] sm:max-w-sm"
        >
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-indigo-200/70 via-white to-sky-200/70 blur-2xl" />
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-white bg-white p-2 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.35)]">
            <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                priority
                sizes="(max-width: 768px) 300px, 400px"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-400 md:flex"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
