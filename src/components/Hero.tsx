import { profile, projects } from "@/data/portfolio";
import Avatar from "./Avatar";
import { ArrowDownIcon, DownloadIcon, GithubIcon, LinkedinIcon, PinIcon } from "./Icons";

export default function Hero() {
  const liveProjects = projects.filter((project) => project.demo).length;

  return (
    <section id="inicio" className="relative isolate overflow-hidden pb-20 pt-32 sm:pt-40 lg:pb-28">
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="absolute -top-40 right-[-10%] -z-10 h-[36rem] w-[36rem] rounded-full bg-accent/20 blur-[140px]" />
      <div className="absolute left-[-15%] top-1/2 -z-10 h-80 w-80 rounded-full bg-cyan-900/30 blur-[120px]" />

      <div className="container grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <h1 className="animate-fade-up font-display text-5xl font-semibold leading-[1.02] tracking-tight text-white [animation-delay:80ms] sm:text-6xl lg:text-7xl">
            Hola, soy Franco.
            <span className="mt-2 block bg-gradient-to-r from-accent-light via-accent to-cyan-200 bg-clip-text text-transparent">
              Construyo productos web.
            </span>
          </h1>

          <p className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 [animation-delay:160ms]">
            {profile.role} en Buenos Aires. Diseño y desarrollo aplicaciones de punta a punta —
            de la interfaz a la base de datos — con foco en código tipado, testeado y fácil de
            mantener.
          </p>

          <div className="animate-fade-up mt-8 flex flex-wrap items-center gap-3 [animation-delay:240ms]">
            <a href="#proyectos" className="btn-primary">
              Ver proyectos
              <ArrowDownIcon className="h-4 w-4" />
            </a>
            <a href={profile.cv} download="Franco Di Iorio - CV.pdf" className="btn-ghost">
              <DownloadIcon className="h-4 w-4" />
              Descargar CV
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-full text-zinc-400 transition hover:bg-white/5 hover:text-white"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full text-zinc-400 transition hover:bg-white/5 hover:text-white"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <dl className="animate-fade-up mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-6 [animation-delay:320ms]">
            <div>
              <dt className="text-xs text-zinc-500">Proyectos</dt>
              <dd className="mt-1 font-display text-2xl font-semibold text-white">{projects.length}+</dd>
            </div>
            <div>
              <dt className="text-xs text-zinc-500">En producción</dt>
              <dd className="mt-1 font-display text-2xl font-semibold text-white">{liveProjects}</dd>
            </div>
            <div>
              <dt className="flex items-center gap-1 text-xs text-zinc-500">
                <PinIcon className="h-3.5 w-3.5" />
                Base
              </dt>
              <dd className="mt-1 font-display text-2xl font-semibold text-white">CABA</dd>
            </div>
          </dl>
        </div>

        <div className="animate-fade-up [animation-delay:200ms]">
          <Avatar />
        </div>
      </div>
    </section>
  );
}
