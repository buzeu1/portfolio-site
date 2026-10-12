import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#f7f8fb] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-slate-400 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js, TypeScript &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-5">
          <a href="#top" className="transition-colors hover:text-slate-700">
            Back to top ↑
          </a>
          <span>{profile.location}</span>
        </div>
      </div>
    </footer>
  );
}
