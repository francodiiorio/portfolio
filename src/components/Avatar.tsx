"use client";

import { useEffect, useRef, useState } from "react";
import { CoffeeIcon } from "./Icons";

const greetings = [
  "¡Hola!",
  "¿Un café?",
  "Funciona en mi máquina™",
  "git push y a dormir",
  "¿Arrancamos un proyecto?",
];

const terminalScript = [
  { command: "whoami", output: "franco · full stack dev" },
  { command: "cat stack.txt", output: "react · ts · node · .net" },
  { command: "uptime", output: "cafés: 3 · bugs: 0" },
];

// Todas las posiciones están en % de la ilustración original (2448×2064).
const LAPTOP = "polygon(50% 37.8%, 72.9% 51.2%, 64.1% 73.4%, 44.4% 65.3%, 40.4% 57.1%)";

const lineArt: React.CSSProperties = {
  WebkitMaskImage: "url(/perfil2.png)",
  maskImage: "url(/perfil2.png)",
  WebkitMaskSize: "100% 100%",
  maskSize: "100% 100%",
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const onChange = () => setReduced(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

export default function Avatar() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [greeting, setGreeting] = useState(0);
  const reducedMotion = usePrefersReducedMotion();

  // Inclina la escena hacia el puntero (solo con mouse y si no se pidió reducir movimiento).
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || reducedMotion || !window.matchMedia("(pointer: fine)").matches) return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = stage.getBoundingClientRect();
        const x = (event.clientX - (rect.left + rect.width / 2)) / window.innerWidth;
        const y = (event.clientY - (rect.top + rect.height / 2)) / window.innerHeight;
        stage.style.setProperty("--tilt-x", `${Math.max(-1, Math.min(1, x * 2)) * 7}deg`);
        stage.style.setProperty("--tilt-y", `${Math.max(-1, Math.min(1, y * 2)) * -7}deg`);
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, [reducedMotion]);

  return (
    <div className="relative mx-auto w-full max-w-[20rem] [container-type:inline-size] sm:max-w-md lg:max-w-none">
      <div ref={stageRef} className="relative aspect-square [perspective:1200px]">
        {/* Fondo: anillo con gradiente que gira y una órbita punteada con un satélite. */}
        <div className="absolute inset-[7%] animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(163,208,210,0.7)_70deg,transparent_140deg,transparent_220deg,rgba(103,232,249,0.45)_290deg,transparent_360deg)] p-px">
          <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_30%_25%,#1c3436_0%,#0b1416_55%,#05090a_100%)]" />
        </div>
        <div className="absolute inset-[1%] animate-spin-slower rounded-full border border-dashed border-white/10">
          <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-light shadow-[0_0_14px_3px_rgba(163,208,210,0.7)]" />
        </div>

        <div
          className="absolute inset-0 transition-transform duration-300 ease-out [transform-style:preserve-3d]"
          style={{ transform: "rotateY(var(--tilt-x, 0deg)) rotateX(var(--tilt-y, 0deg))" }}
        >
          <button
            type="button"
            onClick={() => setGreeting((value) => (value + 1) % greetings.length)}
            aria-label="Saludar a Franco"
            className="group absolute inset-x-0 bottom-0 aspect-[2448/2064] cursor-pointer rounded-none [transform-style:preserve-3d] focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <span className="absolute inset-0 animate-float [transform-style:preserve-3d]">
              {/* Pantalla de la laptop con un leve brillo. */}
              <span
                className="absolute inset-0 bg-gradient-to-br from-accent/40 via-ink-800/90 to-ink-900/90"
                style={{ clipPath: LAPTOP }}
              />

              {/* Trazo: glow difuso + línea con gradiente, usando la ilustración como máscara. */}
              <span
                className="absolute inset-0 bg-accent opacity-70 blur-[6px]"
                style={lineArt}
              />
              <span
                className="absolute inset-0 bg-gradient-to-b from-white via-[#d4f1f2] to-accent"
                style={lineArt}
              />

              {/* Stickers pegados en la laptop. */}
              <span className="absolute inset-0 [transform:translateZ(24px)]">
                <span className="absolute left-[50%] top-[44%] origin-center rotate-[27deg] rounded-full bg-accent px-[0.9cqw] py-[0.35cqw] font-mono text-[3.2cqw] font-bold leading-none text-ink-950 shadow-lg transition-transform group-hover:rotate-[20deg]">
                  {"</>"}
                </span>
                <span className="absolute left-[59.5%] top-[55%] grid h-[6.4cqw] w-[6.4cqw] origin-center rotate-[19deg] place-items-end rounded-[1cqw] bg-[#3178c6] p-[0.6cqw] font-sans text-[2.4cqw] font-bold leading-none text-white shadow-lg transition-transform group-hover:rotate-[30deg]">
                  TS
                </span>
                <span className="absolute left-[49%] top-[56%] grid h-[7.6cqw] w-[7.6cqw] origin-center -rotate-[8deg] place-items-center rounded-full bg-[#f5e9c8] text-[#6f4e37] shadow-lg ring-[0.4cqw] ring-white transition-transform group-hover:-rotate-[20deg]">
                  <CoffeeIcon className="h-[4.4cqw] w-[4.4cqw]" />
                </span>
              </span>

              {/* Destello del guiño. */}
              <span className="absolute left-[34.5%] top-[9%] text-[4cqw] leading-none text-accent-light [transform:translateZ(30px)]">
                <span className="block animate-twinkle">✦</span>
              </span>
              <span className="absolute left-[31.5%] top-[16%] text-[2.2cqw] leading-none text-cyan-200 [transform:translateZ(30px)]">
                <span className="block animate-twinkle [animation-delay:0.8s]">✦</span>
              </span>
            </span>

            {/* Globo de diálogo: cambia de frase con cada click. */}
            <span className="absolute left-[60%] top-[1%] [transform:translateZ(60px)]" aria-live="polite">
              <span
                key={greeting}
                className="relative block animate-pop whitespace-nowrap rounded-2xl rounded-bl-sm border border-white/15 bg-white px-[2.4cqw] py-[1.4cqw] font-display text-[3cqw] font-semibold text-ink-950 shadow-[0_10px_30px_-8px_rgba(118,171,174,0.6)]"
              >
                {greetings[greeting]}
              </span>
              <span className="mt-[1cqw] block text-left font-mono text-[2cqw] text-zinc-500 opacity-0 transition-opacity group-hover:opacity-100">
                click para otra
              </span>
            </span>
          </button>
        </div>
      </div>

      <MiniTerminal animated={!reducedMotion} />
    </div>
  );
}

function MiniTerminal({ animated }: { animated: boolean }) {
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState("");
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    if (!animated) return;
    const { command } = terminalScript[step];
    let index = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const typeNext = () => {
      index += 1;
      setTyped(command.slice(0, index));
      if (index < command.length) {
        timeout = setTimeout(typeNext, 70 + Math.random() * 60);
      } else {
        timeout = setTimeout(() => {
          setShowOutput(true);
          timeout = setTimeout(() => {
            setTyped("");
            setShowOutput(false);
            setStep((value) => (value + 1) % terminalScript.length);
          }, 2600);
        }, 350);
      }
    };
    timeout = setTimeout(typeNext, 600);
    return () => clearTimeout(timeout);
  }, [animated, step]);

  const current = terminalScript[step];

  return (
    <div className="absolute -left-10 top-[34%] hidden w-[12rem] overflow-hidden rounded-xl border border-white/10 bg-ink-950/85 font-mono text-[11px] shadow-2xl backdrop-blur-md sm:block lg:-left-6">
      <div className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-1.5 text-[10px] text-zinc-500">~/franco</span>
      </div>
      <div className="space-y-1 px-3 py-2.5" aria-hidden>
        {animated ? (
          <>
            <p className="text-zinc-200">
              <span className="text-accent">❯</span> {typed}
              {!showOutput && <span className="ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 animate-blink bg-accent-light" />}
            </p>
            <p className={`text-zinc-400 transition-opacity duration-300 ${showOutput ? "opacity-100" : "opacity-0"}`}>
              {current.output}
            </p>
          </>
        ) : (
          terminalScript.slice(0, 2).map((line) => (
            <div key={line.command}>
              <p className="text-zinc-200">
                <span className="text-accent">❯</span> {line.command}
              </p>
              <p className="text-zinc-400">{line.output}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
