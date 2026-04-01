"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "лет на рынке" },
  { value: "200+", label: "реализованных объектов" },
  { value: "50+", label: "специалистов в команде" },
  { value: "12", label: "регионов присутствия" },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 sm:py-32">
      <div className="mx-auto w-full px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
              О компании
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-zinc-900 md:text-4xl lg:text-5xl">
              Архитектура, в&nbsp;которой
              <br />
              хочется жить
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-zinc-600 md:text-lg">
              <p>
                «Витрувий Инжиниринг» — архитектурное бюро полного цикла,
                основанное в&nbsp;2010 году. Мы проектируем жилые дома,
                коммерческие объекты и&nbsp;общественные пространства, создаём
                интерьеры и&nbsp;ландшафты.
              </p>
              <p>
                Наша миссия — проектировать среду, в&nbsp;которой людям комфортно
                жить и&nbsp;работать. Мы верим, что хорошая архитектура начинается
                с&nbsp;внимания к&nbsp;человеку, его привычкам и&nbsp;потребностям.
              </p>
            </div>
          </motion.div>

          {/* Right — stats grid */}
          <div className="grid grid-cols-2 gap-6 self-center sm:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8"
              >
                <div className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-zinc-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
