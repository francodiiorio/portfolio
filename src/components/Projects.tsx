"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

const ALL = "Todos";
const filters = [ALL, "React", "TypeScript", "React Native", ".NET", "Node"];

export default function Projects() {
  const [filter, setFilter] = useState(ALL);

  const visible = useMemo(
    () => (filter === ALL ? projects : projects.filter((project) => project.tags.includes(filter))),
    [filter],
  );

  return (
    <section id="proyectos" className="relative py-24 sm:py-32">
      <div className="container">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="section-label">01 · Proyectos</p>
            <h2 className="section-title mt-3">Cosas que construí</h2>
            <p className="mt-4 text-zinc-400">
              De apps local-first en TypeScript a sistemas en .NET y mobile con React Native. Los
              que tienen demo están online y se pueden probar ahora.
            </p>
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por tecnología">
            {filters.map((tech) => {
              const count =
                tech === ALL ? projects.length : projects.filter((project) => project.tags.includes(tech)).length;
              const selected = filter === tech;
              return (
                <button
                  key={tech}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setFilter(tech)}
                  className={`rounded-full px-3.5 py-1.5 text-sm transition ${
                    selected
                      ? "bg-accent text-ink-950"
                      : "bg-white/[0.04] text-zinc-400 ring-1 ring-white/10 hover:text-white"
                  }`}
                >
                  {tech}
                  <span className={`ml-1.5 font-mono text-xs ${selected ? "text-ink-950/60" : "text-zinc-600"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          {visible.map((project, index) => (
            <Reveal key={`${filter}-${project.slug}`} delay={(index % 3) * 90} className="h-full">
              <ProjectCard project={project} priority={index < 3 && filter === ALL} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
