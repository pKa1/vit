"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const Warp = dynamic(
  () => import("@paper-design/shaders-react").then((mod) => mod.Warp),
  { ssr: false }
);

export default function WarpShaderHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.35 });
  const [shouldRenderWarp, setShouldRenderWarp] = useState(false);
  const [disableShader, setDisableShader] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const lowCpu = navigator.hardwareConcurrency
      ? navigator.hardwareConcurrency <= 4
      : false;
    const lowMemory =
      "deviceMemory" in navigator
        ? (navigator as Navigator & { deviceMemory?: number }).deviceMemory !==
            undefined &&
          (navigator as Navigator & { deviceMemory?: number }).deviceMemory! <=
            4
        : false;

    if (prefersReducedMotion || lowCpu || lowMemory) {
      setDisableShader(true);
    }
  }, []);

  useEffect(() => {
    if (disableShader) {
      setShouldRenderWarp(false);
      return;
    }

    if (isInView) {
      const id = window.setTimeout(() => setShouldRenderWarp(true), 120);
      return () => window.clearTimeout(id);
    }

    // Unmount shader when banner leaves viewport to stop GPU work.
    setShouldRenderWarp(false);
  }, [isInView, disableShader]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[360px] w-full overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "360px" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        {shouldRenderWarp ? (
          <Warp
            style={{ height: "100%", width: "100%" }}
            proportion={0.45}
            softness={1}
            distortion={0.25}
            swirl={0.8}
            swirlIterations={10}
            shape="checks"
            shapeScale={0.1}
            scale={1}
            rotation={0}
            speed={1}
            colors={[
              "hsl(200, 100%, 20%)",
              "hsl(160, 100%, 75%)",
              "hsl(180, 90%, 30%)",
              "hsl(170, 100%, 80%)",
            ]}
          />
        ) : (
          <div className="h-full w-full bg-[radial-gradient(120%_80%_at_30%_20%,hsl(170,100%,80%),transparent_45%),radial-gradient(100%_90%_at_70%_40%,hsl(180,90%,30%),transparent_50%),radial-gradient(120%_100%_at_50%_100%,hsl(200,100%,20%),hsl(180,90%,24%))]" />
        )}
      </div>

      <div className="relative z-10 flex h-full items-center justify-center px-8">
        <div className="w-full max-w-4xl space-y-5 text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-5xl">
            Готовы начать проект?
          </h2>

          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-white/90 md:text-base">
            Оставьте заявку — мы свяжемся с вами, обсудим задачу и предложим
            оптимальное решение. Консультация бесплатна.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
            <button className="rounded-full border border-white/30 bg-white/20 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/30">
              Оставить заявку
            </button>
            <button className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-gray-800 transition-transform duration-300 hover:scale-105">
              Смотреть портфолио
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
