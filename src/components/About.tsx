import { education, skillGroups } from "@/data/portfolio";
import { CapIcon } from "./Icons";
import Reveal from "./Reveal";

const principles = [
  {
    title: "Tipado y testeado",
    body: "TypeScript estricto y tests con Vitest y Playwright para poder cambiar código sin miedo.",
  },
  {
    title: "Local-first cuando suma",
    body: "Apps que funcionan offline y dejan los datos del usuario en su dispositivo.",
  },
  {
    title: "De punta a punta",
    body: "Me muevo entre la interfaz, la API y la base de datos, en JavaScript o en .NET.",
  },
];

export default function About() {
  return (
    <section id="sobre-mi" className="relative border-y border-white/5 bg-ink-900/40 py-24 sm:py-32">
      <div className="container grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="section-label">02 · Sobre mí</p>
          <h2 className="section-title mt-3">Developer curioso, de los que terminan lo que empiezan.</h2>
          <div className="mt-6 space-y-4 leading-relaxed text-zinc-400">
            <p>
              Soy Franco, desarrollador Full Stack de Buenos Aires. Empecé con el stack MERN y
              después sumé .NET, Java y Python, así que me adapto rápido a distintos lenguajes y
              desafíos.
            </p>
            <p>
              Hoy me enfoco en React y TypeScript: construyo apps propias de punta a punta, desde
              el modelo de datos hasta el deploy. Trabajé en equipo en varios proyectos y me
              integro bien a cualquier grupo. En mis ratos libres me gusta el análisis de datos
              con Pandas, R y Matplotlib.
            </p>
          </div>

          <ol className="mt-8 space-y-3">
            {education.map((item) => (
              <li
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-ink-950/60 p-5"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                  <CapIcon className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <p className="font-medium text-white">{item.title}</p>
                    <span
                      className={`rounded-full px-2 py-0.5 font-mono text-[11px] ${
                        item.current
                          ? "bg-accent/15 text-accent-light ring-1 ring-accent/30"
                          : "bg-white/5 text-zinc-400 ring-1 ring-white/10"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm text-zinc-400">{item.place}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="space-y-10">
          <div className="grid gap-4 sm:grid-cols-3">
            {principles.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 90}
                className="rounded-2xl border border-white/[0.08] bg-ink-950/60 p-5"
              >
                <p className="font-mono text-xs text-accent">0{index + 1}</p>
                <p className="mt-3 font-medium text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="rounded-2xl border border-white/[0.08] bg-ink-950/60 p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-white">Stack y herramientas</h3>
            <dl className="mt-6 space-y-6">
              {skillGroups.map((group) => (
                <div key={group.title} className="grid gap-3 sm:grid-cols-[10rem_1fr]">
                  <dt className="pt-1 font-mono text-xs uppercase tracking-[0.15em] text-zinc-500">
                    {group.title}
                  </dt>
                  <dd className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-200 transition hover:border-accent/40 hover:text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 border-t border-white/5 pt-5 text-sm text-zinc-500">
              Idiomas: español nativo · inglés intermedio
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
