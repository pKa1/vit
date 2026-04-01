"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Алексей Витрувьев",
    role: "Основатель, главный архитектор",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    name: "Мария Соколова",
    role: "Ведущий архитектор",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    name: "Дмитрий Орлов",
    role: "Главный инженер-конструктор",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    name: "Екатерина Лебедева",
    role: "Руководитель дизайн-студии",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    name: "Андрей Волков",
    role: "Ландшафтный архитектор",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    name: "Ольга Николаева",
    role: "Руководитель проектного отдела",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=faces&auto=format&q=80",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="bg-zinc-950 py-16 sm:py-32">
      <div className="mx-auto w-full px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Команда
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-5xl">
            Люди, которые создают
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400 md:text-base">
            Архитекторы, инженеры и дизайнеры с опытом работы над проектами
            разного масштаба — от частных резиденций до общественных пространств.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:mt-16 sm:gap-8 md:grid-cols-3 lg:grid-cols-6">
          {team.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              className="group text-center"
            >
              <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border-2 border-zinc-800 sm:h-32 sm:w-32">
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-white">
                {person.name}
              </h3>
              <p className="mt-1 text-xs text-zinc-500">{person.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
