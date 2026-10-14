import Image from "next/image";
import type { Project } from "@/data/portfolio";
import { ArrowUpRightIcon, GithubIcon } from "./Icons";

export default function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  const href = project.demo ?? project.repository;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-900/60 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_60px_-20px_rgba(118,171,174,0.25)]">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.06] bg-gradient-to-br from-accent/25 via-ink-800 to-ink-900">
        <div className="bg-grid absolute inset-0 opacity-60" />
        {project.image ? (
          <div className="absolute inset-x-[7%] bottom-[-6%] top-[15%] overflow-hidden rounded-t-xl bg-ink-950 shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.6)] ring-1 ring-white/15 transition duration-500 group-hover:-translate-y-1.5">
            <Image
              src={project.image}
              alt=""
              fill
              priority={priority}
              sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 90vw"
              className="object-cover object-top"
            />
          </div>
        ) : (
          <div className="absolute inset-0 grid place-items-center">
            <span className="font-mono text-sm text-accent-light/80">~/{project.slug}</span>
          </div>
        )}
        {project.demo && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-ink-950/80 px-2.5 py-1 font-mono text-[11px] text-emerald-300 ring-1 ring-emerald-400/30 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            online
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">{project.tagline}</p>
        <h3 className="mt-2 font-display text-xl font-semibold text-white">
          <a href={href} target="_blank" rel="noreferrer" className="after:absolute after:inset-0">
            {project.title}
          </a>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tecnologías">
          {project.tags.map((tag) => (
            <li key={tag} className="chip">
              {tag}
            </li>
          ))}
        </ul>

        <div className="relative z-10 mt-auto flex items-center gap-4 pt-6 text-sm">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-medium text-accent-light transition hover:text-white"
            >
              Ver demo
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          )}
          <a
            href={project.repository}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-zinc-400 transition hover:text-white"
          >
            <GithubIcon className="h-4 w-4" />
            Código
          </a>
        </div>
      </div>
    </article>
  );
}
