import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="container flex flex-col items-center justify-between gap-3 text-sm text-zinc-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs">Hecho con Next.js y Tailwind CSS · {profile.location}</p>
      </div>
    </footer>
  );
}
