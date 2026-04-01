"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, CalendarDays } from "lucide-react";

const articles = [
  {
    slug: "etapy-proektirovaniya-chastnogo-doma",
    title: "Этапы проектирования частного дома: от идеи до рабочей документации",
    excerpt:
      "Разбираем полный цикл проектирования: предпроектный анализ, эскизный проект, архитектурные и конструктивные решения, инженерные системы и подготовку к строительству.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=500&fit=crop&auto=format&q=80",
    date: "12 февраля 2026",
    readTime: "8 мин",
    tag: "Проектирование",
  },
  {
    slug: "kak-vybrat-material-dlya-fasada",
    title: "Как выбрать материал для фасада: кирпич, штукатурка или дерево?",
    excerpt:
      "Сравниваем популярные фасадные материалы по долговечности, стоимости, эстетике и теплоизоляции. Практические рекомендации от наших архитекторов.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop&auto=format&q=80",
    date: "5 февраля 2026",
    readTime: "6 мин",
    tag: "Материалы",
  },
  {
    slug: "oshibki-pri-planirovke-doma",
    title: "7 ошибок при планировке дома, которые дорого обходятся",
    excerpt:
      "Неправильная ориентация окон, тесные коридоры, забытые подсобные помещения — разбираем типичные просчёты и показываем, как их избежать на этапе проекта.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop&auto=format&q=80",
    date: "28 января 2026",
    readTime: "7 мин",
    tag: "Планировка",
  },
  {
    slug: "energoeffektivnyj-dom",
    title: "Энергоэффективный дом: как сократить расходы на отопление вдвое",
    excerpt:
      "Утепление, рекуперация, тепловые насосы и правильная ориентация здания — комплексный подход к проектированию дома с минимальными эксплуатационными затратами.",
    image:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&h=500&fit=crop&auto=format&q=80",
    date: "20 января 2026",
    readTime: "10 мин",
    tag: "Инженерия",
  },
  {
    slug: "avtorskij-nadzor-zachem-nuzhen",
    title: "Авторский надзор: зачем он нужен и что в него входит",
    excerpt:
      "Объясняем, почему контроль архитектора на стройке — не лишняя трата, а страховка от ошибок, переделок и перерасхода бюджета.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop&auto=format&q=80",
    date: "14 января 2026",
    readTime: "5 мин",
    tag: "Строительство",
  },
  {
    slug: "trendy-interiera-2026",
    title: "Тренды интерьера 2026: природные материалы, мягкий минимализм и свет",
    excerpt:
      "Какие решения в дизайне интерьера будут актуальны в этом году: натуральный камень, тёплое дерево, скрытые системы хранения и работа с естественным освещением.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=500&fit=crop&auto=format&q=80",
    date: "8 января 2026",
    readTime: "6 мин",
    tag: "Интерьер",
  },
];

export function ArticlesSection() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <section className="bg-zinc-50 py-16 sm:py-32">
      <div className="mx-auto w-full px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
              Блог
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-zinc-900 md:text-4xl lg:text-5xl">
              Статьи о&nbsp;проектировании
            </h2>
            <p className="mt-3 max-w-xl text-base text-zinc-500 md:text-lg">
              Делимся опытом, разбираем частые ошибки и&nbsp;рассказываем, как
              сделать дом удобнее, красивее и&nbsp;экономичнее.
            </p>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium text-zinc-900 transition-colors hover:text-zinc-600"
          >
            Все статьи
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Featured + grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Featured article */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-zinc-900 backdrop-blur">
                  {featured.tag}
                </span>
              </div>
              <div className="mt-5">
                <div className="flex items-center gap-4 text-xs text-zinc-400">
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {featured.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {featured.readTime}
                  </span>
                </div>
                <h3 className="mt-2 text-xl font-semibold text-zinc-900 transition-colors group-hover:text-zinc-600 sm:text-2xl">
                  {featured.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-500">
                  {featured.excerpt}
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Smaller cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:gap-5">
            {rest.map((article, i) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/blog/${article.slug}`}
                  className="group flex gap-4 rounded-xl bg-white p-3 transition-shadow hover:shadow-md sm:p-4"
                >
                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg sm:h-28 sm:w-28">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-1.5 top-1.5 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-medium text-zinc-800 backdrop-blur">
                      {article.tag}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-[11px] text-zinc-400">
                      <span className="inline-flex items-center gap-1">
                        <CalendarDays className="h-3 w-3" />
                        {article.date}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="mt-1.5 line-clamp-2 text-sm font-semibold text-zinc-900 transition-colors group-hover:text-zinc-600">
                      {article.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
