"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";
import { CheckIcon, CopyIcon, GithubIcon, LinkedinIcon, MailIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timeout);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const channels = [
    { label: "LinkedIn", value: "in/franco-di-iorio", href: profile.socials.linkedin, Icon: LinkedinIcon },
    { label: "GitHub", value: "@francodiiorio", href: profile.socials.github, Icon: GithubIcon },
  ];

  return (
    <section id="contacto" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute bottom-[-30%] left-1/2 -z-10 h-[30rem] w-[50rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="section-label">03 · Contacto</p>
          <h2 className="section-title mt-3 sm:text-6xl">¿Trabajamos juntos?</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-zinc-400">
            Estoy buscando nuevos desafíos como developer. Si tenés una propuesta, un proyecto o
            simplemente querés charlar, escribime.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={`mailto:${profile.email}`} className="btn-primary px-6 py-3 text-base">
              <MailIcon className="h-5 w-5" />
              {profile.email}
            </a>
            <button type="button" onClick={copyEmail} className="btn-ghost px-5 py-3">
              {copied ? <CheckIcon className="h-4 w-4 text-emerald-400" /> : <CopyIcon className="h-4 w-4" />}
              <span aria-live="polite">{copied ? "¡Copiado!" : "Copiar email"}</span>
            </button>
          </div>
        </Reveal>

        <Reveal delay={120} className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-2">
          {channels.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-ink-900/60 p-5 transition hover:border-accent/40"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-zinc-300 transition group-hover:bg-accent group-hover:text-ink-950">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-left">
                <span className="block text-sm text-zinc-500">{label}</span>
                <span className="block font-medium text-white">{value}</span>
              </span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
