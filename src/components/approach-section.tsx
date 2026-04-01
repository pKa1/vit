"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Знакомство и бриф",
    description:
      "Выезжаем на участок, изучаем условия, обсуждаем ваши пожелания, бюджет и сроки. Формируем техническое задание.",
  },
  {
    number: "02",
    title: "Концепция",
    description:
      "Разрабатываем эскизный проект: планировки, фасады, 3D-визуализацию. Согласовываем стилистику и материалы.",
  },
  {
    number: "03",
    title: "Проектирование",
    description:
      "Создаём полный комплект рабочей документации: архитектурный, конструктивный и инженерный разделы.",
  },
  {
    number: "04",
    title: "Согласование",
    description:
      "Подготавливаем документацию к экспертизе, сопровождаем процесс получения всех необходимых разрешений.",
  },
  {
    number: "05",
    title: "Авторский надзор",
    description:
      "Контролируем соответствие строительства проекту, выезжаем на объект, решаем вопросы на месте до полной сдачи.",
  },
];

export function ApproachSection() {
  return (
    <section id="approach" className="bg-white py-16 sm:py-32">
      <div className="mx-auto w-full px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
              Подход к работе
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-zinc-900 md:text-4xl lg:text-5xl">
              От идеи до&nbsp;ключей
              <br />
              за&nbsp;5&nbsp;шагов
            </h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-500 md:text-lg">
              Прозрачный процесс, в&nbsp;котором вы участвуете на каждом этапе.
              Никаких сюрпризов — только чёткий план и&nbsp;предсказуемый
              результат.
            </p>
          </motion.div>

          {/* Right — timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-zinc-200 sm:left-[23px]" />

            <div className="space-y-10 sm:space-y-12">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={{ once: true }}
                  className="relative flex gap-6"
                >
                  {/* Dot */}
                  <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-zinc-900 bg-white text-xs font-bold text-zinc-900 sm:h-12 sm:w-12 sm:text-sm">
                    {step.number}
                  </div>

                  <div className="pt-1 sm:pt-2">
                    <h3 className="text-lg font-semibold text-zinc-900 sm:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-500 sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
