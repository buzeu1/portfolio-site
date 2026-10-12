import { Mail, Phone, MapPin, ArrowUpRight, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const channels = [
    { icon: <Mail size={18} />, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    {
      icon: <Phone size={18} />,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
    },
    { icon: <LinkedinIcon size={18} />, label: "LinkedIn", value: "cosmin-ionut-buzau", href: profile.linkedin },
    { icon: <GithubIcon size={18} />, label: "GitHub", value: "buzeu1", href: profile.github },
  ];

  return (
    <section id="contact" className="relative border-t border-slate-200/70 bg-white py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          title="Let's build something together."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_1fr]">
          <Reveal delay={0.05}>
            <div className="relative h-full overflow-hidden rounded-[1.25rem] bg-slate-900 p-8 text-white sm:p-10">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl" />
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Available immediately
              </span>
              <p className="mt-6 text-2xl font-semibold leading-snug">
                Open to Full Stack / Software Engineer / AI Engineer roles.
              </p>
              <p className="mt-4 leading-relaxed text-slate-300">
                Full-time, part-time or internship — on-site in Iași or remote. If you&apos;re
                working on something interesting, I&apos;d love to hear about it.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-indigo-50"
                >
                  <Mail size={16} />
                  Send an email
                </a>
                <a
                  href={profile.cvPath}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Download size={16} />
                  Download CV
                </a>
              </div>
              <p className="mt-8 flex items-center gap-2 text-sm text-slate-400">
                <MapPin size={14} />
                {profile.location}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="card card-hover group flex items-center gap-4 p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition-colors group-hover:bg-indigo-50 group-hover:text-indigo-600">
                    {c.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-wider text-slate-400">{c.label}</p>
                    <p className="truncate text-sm font-medium text-slate-900">{c.value}</p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-slate-300 transition-colors group-hover:text-indigo-600"
                  />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
