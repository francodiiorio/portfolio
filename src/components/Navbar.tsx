"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/portfolio";
import { CloseIcon, DownloadIcon, GithubIcon, LinkedinIcon, MenuIcon } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(navLinks[0].id);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Marca en el menú la sección que ocupa el centro de la pantalla.
  useEffect(() => {
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/5 bg-ink-950/75 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="container flex h-16 items-center justify-between" aria-label="Principal">
        <a
          href="#inicio"
          className="group flex items-center gap-2 font-display text-lg font-semibold text-white"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent/15 font-mono text-sm text-accent ring-1 ring-accent/30 transition group-hover:bg-accent group-hover:text-ink-950">
            FD
          </span>
          <span className="hidden sm:inline">Franco Di Iorio</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                  active === id ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {active === id && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-white/[0.07] ring-1 ring-white/10" />
                )}
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-zinc-400 transition hover:text-white"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-400 transition hover:text-white"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a href={profile.cv} download="Franco Di Iorio - CV.pdf" className="btn-ghost ml-2 py-2">
            <DownloadIcon className="h-4 w-4" />
            CV
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg text-zinc-200 ring-1 ring-white/10 md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/5 bg-ink-950 transition duration-300 md:hidden ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <ul className="container flex flex-col gap-1 pb-10 pt-6">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className={`block rounded-xl px-4 py-3 font-display text-2xl ${
                  active === id ? "bg-white/[0.06] text-white" : "text-zinc-400"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="mt-4 flex items-center gap-3 px-4">
            <a href={profile.cv} download="Franco Di Iorio - CV.pdf" tabIndex={open ? 0 : -1} className="btn-primary">
              <DownloadIcon className="h-4 w-4" />
              Descargar CV
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              tabIndex={open ? 0 : -1}
              className="grid h-10 w-10 place-items-center rounded-full text-zinc-300 ring-1 ring-white/10"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              tabIndex={open ? 0 : -1}
              className="grid h-10 w-10 place-items-center rounded-full text-zinc-300 ring-1 ring-white/10"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
