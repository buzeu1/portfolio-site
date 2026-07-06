import { Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#070710] py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[140px]" />

      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-violet-400">
            Contact
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s build something together.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/55">
            Actively looking for an AI Software Engineer role — reach out if you&apos;re working
            on something interesting.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
            >
              <Mail size={16} />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm text-white/80 transition-colors hover:bg-white/10"
            >
              <Phone size={16} />
              {profile.phone}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-white/40">
            <MapPin size={14} />
            {profile.location}
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 p-3 text-white/70 transition-colors hover:border-white/40 hover:text-white"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 p-3 text-white/70 transition-colors hover:border-white/40 hover:text-white"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
