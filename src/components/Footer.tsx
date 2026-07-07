import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-300/60 bg-[#eaeaee] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-zinc-400 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js, TypeScript &amp; Tailwind CSS.
        </p>
        <p>Iași, România</p>
      </div>
    </footer>
  );
}
