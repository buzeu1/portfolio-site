import Reveal from "@/components/Reveal";

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal>
      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
        <span className="font-mono text-slate-400">{index}</span>
        <span className="h-px w-8 bg-indigo-200" />
        {eyebrow}
      </div>
      <h2 className="mt-4 max-w-3xl text-[1.75rem] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[2.6rem] sm:leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500">{description}</p>
      )}
    </Reveal>
  );
}
