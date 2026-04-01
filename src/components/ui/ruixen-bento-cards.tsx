"use client";

import React, { type ReactNode } from "react";
import Link from "next/link";
import {
  Layers,
  Fingerprint,
  Route,
  Leaf,
  Award,
} from "lucide-react";

import { cn } from "@/lib/utils";

const cardContents: {
  title: string;
  description: string;
  icon: ReactNode;
}[] = [
  {
    title: "Комплексный подход",
    description:
      "Ведём проект от первого эскиза до сдачи объекта: архитектура, конструктив, инженерия, интерьер — всё в одних руках.",
    icon: <Layers className="size-6" />,
  },
  {
    title: "Индивидуальные решения",
    description:
      "Не используем типовые проекты. Каждый дом проектируется под участок, климат и образ жизни заказчика.",
    icon: <Fingerprint className="size-6" />,
  },
  {
    title: "Как мы работаем",
    description:
      "Знакомство и бриф — обсуждаем пожелания, бюджет и участок. Концепция — эскизный проект с 3D-визуализацией и планировками. Проектирование — рабочая документация по всем разделам: АР, КР, инженерия. Согласование — подготовка и прохождение экспертизы. Авторский надзор — сопровождаем строительство до полной сдачи объекта.",
    icon: <Route className="size-6" />,
  },
  {
    title: "Энергоэффективность",
    description:
      "Проектируем с учётом современных стандартов энергосбережения, экологичных материалов и технологий «умного дома».",
    icon: <Leaf className="size-6" />,
  },
  {
    title: "15+ лет опыта",
    description:
      "Более 200 реализованных объектов в России и за рубежом. Жилые дома, коммерческие здания, интерьеры и ландшафт.",
    icon: <Award className="size-6" />,
  },
];

const PlusCard: React.FC<{
  className?: string;
  title: string;
  description: string;
  icon?: ReactNode;
}> = ({ className = "", title, description, icon }) => {
  return (
    <div
      className={cn(
        "relative min-h-[200px] rounded-lg border border-dashed border-zinc-400 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-950",
        "flex flex-col justify-between",
        className
      )}
    >
      <div>
        <CornerPlusIcons />
        <div className="relative z-10 space-y-3">
          {icon && (
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
              {icon}
            </div>
          )}
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

const CornerPlusIcons = () => (
  <>
    <PlusIcon className="absolute -left-3 -top-3" />
    <PlusIcon className="absolute -right-3 -top-3" />
    <PlusIcon className="absolute -bottom-3 -left-3" />
    <PlusIcon className="absolute -bottom-3 -right-3" />
  </>
);

const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    strokeWidth="1"
    stroke="currentColor"
    className={`size-6 text-black dark:text-white ${className}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);

export default function RuixenBentoCards() {
  return (
    <section className="border-y border-gray-200 bg-white py-16 sm:py-32 dark:border-gray-800 dark:bg-black dark:bg-transparent">
      <div className="mx-auto w-full border-y border-gray-200 border-t-0 px-4 py-12 sm:px-8 lg:px-12 dark:border-gray-800">
        <div className="grid auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          <PlusCard {...cardContents[0]} className="lg:col-span-3 lg:row-span-2" />
          <PlusCard {...cardContents[1]} className="lg:col-span-2 lg:row-span-2" />
          <PlusCard {...cardContents[2]} className="lg:col-span-4 lg:row-span-1" />
          <PlusCard {...cardContents[3]} className="lg:col-span-2 lg:row-span-1" />
          <PlusCard {...cardContents[4]} className="lg:col-span-2 lg:row-span-1" />
        </div>

        <div className="ml-auto mt-10 max-w-2xl px-4 text-right">
          <h2 className="mb-4 text-3xl font-medium tracking-tight text-black dark:text-white md:text-4xl lg:text-5xl">
            Проектируем для жизни.<br />Строим на совесть.
          </h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 md:text-base">
            Мы создаём архитектуру, в которой продуманы свет, пространство и
            инженерия. Каждый проект — это баланс эстетики, функциональности
            и долговечности.
          </p>
        </div>
      </div>
    </section>
  );
}
