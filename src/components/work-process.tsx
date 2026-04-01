"use client";

import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import {
  Search,
  Users,
  BarChart3,
  FileText,
  Palette,
  Layers,
  Component,
  Smartphone,
  Code2,
  Plug,
  Sparkles,
  Zap,
  ShieldCheck,
  Globe,
  MonitorSmartphone,
  Gauge,
  Rocket,
  TrendingUp,
  Activity,
  BookOpen,
} from "lucide-react";

/* ── helpers ── */

function FeatureCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
}) {
  return (
    <div className="group relative rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-5 transition-all hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-lg">
      <div className="mb-3 inline-flex rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-2.5">
        <Icon className="size-5 text-blue-600 dark:text-blue-400" />
      </div>
      <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
        {title}
      </h4>
      <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
        {desc}
      </p>
    </div>
  );
}

function StepBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 ring-1 ring-inset ring-blue-500/20 mb-4">
      {label}
    </span>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
      {children}
    </p>
  );
}

const imgShadow =
  "rounded-xl object-cover h-32 md:h-48 lg:h-56 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]";

/* ── data ── */

const timelineData = [
  {
    title: "Брифинг",
    content: (
      <div>
        <StepBadge label="Этап 01 · Исследование" />
        <Heading>
          Погружаемся в ваш бизнес, изучаем аудиторию и конкурентов.
          На выходе — чёткое ТЗ и дорожная карта проекта.
        </Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <FeatureCard
            icon={Search}
            title="Анализ бизнеса"
            desc="Глубокое погружение в цели, метрики и болевые точки"
          />
          <FeatureCard
            icon={Users}
            title="Целевая аудитория"
            desc="Портреты пользователей, CJM и сценарии использования"
          />
          <FeatureCard
            icon={BarChart3}
            title="Конкурентный анализ"
            desc="Бенчмарки, лучшие практики и точки роста"
          />
          <FeatureCard
            icon={FileText}
            title="ТЗ и роадмап"
            desc="Детальная спецификация с таймлайнами и милестоунами"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
            alt="Team briefing session"
            width={500}
            height={500}
            className={imgShadow}
          />
          <Image
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800"
            alt="Whiteboard planning"
            width={500}
            height={500}
            className={imgShadow}
          />
        </div>
      </div>
    ),
  },
  {
    title: "Дизайн",
    content: (
      <div>
        <StepBadge label="Этап 02 · Визуальная концепция" />
        <Heading>
          От вайрфреймов к пиксельно-точному дизайну. Каждый экран
          проходит через итерации с вашей обратной связью.
        </Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <FeatureCard
            icon={Palette}
            title="UI-дизайн"
            desc="Финальные макеты в Figma с анимациями и состояниями"
          />
          <FeatureCard
            icon={Layers}
            title="Прототипы"
            desc="Интерактивные прототипы для проверки гипотез"
          />
          <FeatureCard
            icon={Component}
            title="Дизайн-система"
            desc="Переиспользуемые компоненты, токены и гайдлайны"
          />
          <FeatureCard
            icon={Smartphone}
            title="Адаптивность"
            desc="Корректное отображение на всех размерах экранов"
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Image
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800"
            alt="UI design"
            width={500}
            height={500}
            className={imgShadow + " col-span-2"}
          />
          <Image
            src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=800"
            alt="Figma mockups"
            width={500}
            height={500}
            className={imgShadow}
          />
        </div>
      </div>
    ),
  },
  {
    title: "Разработка",
    content: (
      <div>
        <StepBadge label="Этап 03 · Код и архитектура" />
        <Heading>
          Превращаем дизайн в рабочий продукт. Чистый, типизированный
          код на современном стеке с фокусом на производительности.
        </Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <FeatureCard
            icon={Code2}
            title="Frontend"
            desc="React, Next.js, TypeScript, Tailwind CSS"
          />
          <FeatureCard
            icon={Plug}
            title="Интеграции"
            desc="REST / GraphQL API, CMS, платёжные системы"
          />
          <FeatureCard
            icon={Sparkles}
            title="Анимации"
            desc="Framer Motion, GSAP, CSS-анимации, 3D-эффекты"
          />
          <FeatureCard
            icon={Zap}
            title="Производительность"
            desc="Lighthouse 90+, lazy loading, code splitting"
          />
        </div>

        {/* Code snippet card */}
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-950 p-5 mb-6 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto">
          <div className="flex items-center gap-2 mb-3">
            <div className="size-3 rounded-full bg-red-500/80" />
            <div className="size-3 rounded-full bg-yellow-500/80" />
            <div className="size-3 rounded-full bg-green-500/80" />
            <span className="text-neutral-500 ml-2 text-xs font-sans">app/page.tsx</span>
          </div>
          <pre className="text-neutral-300">
            <code>{`import { Hero } from '@/components/hero'
import { Gallery } from '@/components/gallery'

export default function Home() {
  return (
    <main>
      <Hero />
      <Gallery items={projects} />
    </main>
  )
}`}</code>
          </pre>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
            alt="Code editor"
            width={500}
            height={500}
            className={imgShadow}
          />
          <Image
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800"
            alt="Development"
            width={500}
            height={500}
            className={imgShadow}
          />
        </div>
      </div>
    ),
  },
  {
    title: "Тестирование",
    content: (
      <div>
        <StepBadge label="Этап 04 · Контроль качества" />
        <Heading>
          Полный цикл QA: от ручного тестирования до нагрузочных тестов.
          Ни один баг не доберётся до продакшна.
        </Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <FeatureCard
            icon={ShieldCheck}
            title="QA тестирование"
            desc="Ручное и автоматизированное покрытие всех сценариев"
          />
          <FeatureCard
            icon={Globe}
            title="Кроссбраузерность"
            desc="Chrome, Firefox, Safari, Edge — везде одинаково"
          />
          <FeatureCard
            icon={MonitorSmartphone}
            title="Устройства"
            desc="Реальные тесты на iOS, Android, планшетах"
          />
          <FeatureCard
            icon={Gauge}
            title="Производительность"
            desc="Web Vitals, LCP, CLS, INP — всё в зелёной зоне"
          />
        </div>

        {/* Metrics bar */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          {[
            { label: "Performance", value: "98" },
            { label: "Accessibility", value: "100" },
            { label: "Best Practices", value: "95" },
            { label: "SEO", value: "100" },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-4 text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-green-500 mb-1">
                {m.value}
              </div>
              <div className="text-[10px] md:text-xs text-neutral-500 uppercase tracking-wider">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
            alt="Testing"
            width={500}
            height={500}
            className={imgShadow}
          />
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            alt="Analytics"
            width={500}
            height={500}
            className={imgShadow}
          />
        </div>
      </div>
    ),
  },
  {
    title: "Запуск",
    content: (
      <div>
        <StepBadge label="Этап 05 · Продакшн" />
        <Heading>
          Деплоим, настраиваем мониторинг и передаём вам полный контроль.
          Проект готов масштабироваться.
        </Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <FeatureCard
            icon={Rocket}
            title="Деплой"
            desc="CI/CD, Vercel / AWS, нулевой даунтайм"
          />
          <FeatureCard
            icon={TrendingUp}
            title="SEO"
            desc="Мета-теги, Schema.org, Core Web Vitals"
          />
          <FeatureCard
            icon={Activity}
            title="Мониторинг"
            desc="Real-time аналитика, алерты, логирование ошибок"
          />
          <FeatureCard
            icon={BookOpen}
            title="Документация"
            desc="Гайды для команды, API-документация, поддержка"
          />
        </div>

        {/* Launch CTA */}
        <div className="rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 p-6 md:p-8 text-white mb-6">
          <div className="flex items-center gap-3 mb-3">
            <Rocket className="size-6" />
            <span className="text-lg font-semibold">Проект в продакшне</span>
          </div>
          <p className="text-sm text-blue-100 leading-relaxed max-w-md">
            После запуска мы остаёмся на связи: мониторим метрики, 
            оперативно реагируем на фидбек и помогаем с развитием продукта.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
            alt="Launch dashboard"
            width={500}
            height={500}
            className={imgShadow}
          />
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
            alt="Team"
            width={500}
            height={500}
            className={imgShadow}
          />
        </div>
      </div>
    ),
  },
];

export function WorkProcess() {
  return <Timeline data={timelineData} />;
}
