"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Команда Витрувий спроектировала наш загородный дом с нуля. Всё продумано до мелочей — от планировки до инженерных систем. Живём уже второй год и не нарадуемся.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Андрей Козлов",
    role: "Владелец частного дома",
  },
  {
    text: "Обратились за дизайном интерьера квартиры. Ребята предложили решения, о которых мы даже не думали. Результат превзошёл все ожидания.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Елена Морозова",
    role: "Заказчик интерьера",
  },
  {
    text: "Авторский надзор на высшем уровне. Контролировали каждый этап стройки, вовремя замечали отклонения. Благодаря этому уложились в бюджет.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Дмитрий Волков",
    role: "Инвестор",
  },
  {
    text: "Заказывали проект коммерческого здания. Сроки соблюдены, документация прошла экспертизу с первого раза. Профессионалы своего дела.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    name: "Игорь Петренко",
    role: "Генеральный директор",
  },
  {
    text: "Ландшафтный дизайн участка полностью преобразил нашу территорию. Террасирование, подсветка, зоны отдыха — всё как мечтали.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Ольга Сидорова",
    role: "Владелец загородного участка",
  },
  {
    text: "Работаем с Витрувий уже на третьем объекте. Ценим за индивидуальный подход и честные сроки. Рекомендуем всем партнёрам.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    name: "Артём Новиков",
    role: "Девелопер",
  },
  {
    text: "Реконструкция нашего исторического здания потребовала особого подхода. Команда бережно сохранила фасад и при этом сделала современное внутреннее пространство.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    name: "Марина Белова",
    role: "Директор галереи",
  },
  {
    text: "Проект энергоэффективного дома — лучшее решение. Расходы на отопление в три раза ниже, чем у соседей. Спасибо за грамотный расчёт.",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    name: "Сергей Кузнецов",
    role: "Владелец эко-дома",
  },
  {
    text: "Обратились за планировочным решением и получили гораздо больше — целую концепцию пространства с продуманной эргономикой.",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
    name: "Наталья Федорова",
    role: "Заказчик квартиры",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-16 sm:py-32">
      <div className="mx-auto w-full z-10 px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-zinc-700 py-1 px-4 rounded-lg text-sm text-zinc-400">
              Отзывы
            </div>
          </div>

          <h2 className="mt-5 text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-5xl">
            Что говорят наши клиенты
          </h2>
          <p className="mt-4 max-w-2xl text-center text-sm leading-relaxed text-zinc-400 md:text-base">
            Реальные отзывы заказчиков о сотрудничестве с нами.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} className="mx-auto max-w-xs md:mx-0" />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
