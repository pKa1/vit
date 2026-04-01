"use client";

import { BentoPricing } from "@/components/ui/bento-pricing";
import { cn } from "@/lib/utils";

export function BentoPricingSection() {
  return (
    <section className="bg-[radial-gradient(35%_80%_at_50%_0%,--theme(--color-foreground/.1),transparent)] relative flex w-full items-center justify-center py-16 sm:py-32">
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 -z-10 size-full",
          "bg-[radial-gradient(color-mix(in_oklab,--theme(--color-foreground/.2)30%,transparent)_1px,transparent_1px)]",
          "bg-[size:12px_12px]"
        )}
      />

      <div
        aria-hidden
        className="absolute inset-0 isolate -z-10 opacity-80 contain-strict"
      >
        <div className="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,--theme(--color-foreground/.06)_0,hsla(0,0%,55%,.02)_50%,--theme(--color-foreground/.01)_80%)] absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full" />
        <div className="bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full" />
        <div className="bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 rounded-full" />
      </div>

      <div className="mx-auto w-full px-6 sm:px-8 lg:px-12">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            Стоимость услуг
          </h2>
          <p className="text-muted-foreground mt-4 text-sm leading-relaxed md:text-base">
            Прозрачное ценообразование без скрытых платежей. Выберите пакет,
            подходящий под масштаб вашего проекта — от консультации до полного
            цикла проектирования.
          </p>
        </div>
        <BentoPricing />
      </div>
    </section>
  );
}
