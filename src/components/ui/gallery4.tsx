"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items?: Gallery4Item[];
}

const defaultData: Gallery4Item[] = [
  {
    id: "residential",
    title: "Проектирование жилых домов",
    description:
      "От эскизной концепции до рабочей документации — создаём дома, в которых продуманы свет, пространство и связь с природой.",
    href: "/portfolio",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1080&h=1440&fit=crop&crop=entropy&auto=format&q=80",
  },
  {
    id: "interior",
    title: "Дизайн интерьеров",
    description:
      "Функциональные и стильные интерьеры, где каждый элемент подчинён единой концепции — от планировки до подбора материалов.",
    href: "/portfolio",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1080&h=1440&fit=crop&crop=entropy&auto=format&q=80",
  },
  {
    id: "commercial",
    title: "Коммерческая архитектура",
    description:
      "Офисные комплексы, торговые центры и общественные пространства — проекты, которые работают на бизнес и создают комфорт для людей.",
    href: "/portfolio",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1080&h=1440&fit=crop&crop=entropy&auto=format&q=80",
  },
  {
    id: "landscape",
    title: "Ландшафтный дизайн",
    description:
      "Гармоничное озеленение, террасирование и водные элементы — превращаем участок в продолжение архитектуры дома.",
    href: "/portfolio",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1080&h=1440&fit=crop&crop=entropy&auto=format&q=80",
  },
  {
    id: "reconstruction",
    title: "Реконструкция и реставрация",
    description:
      "Бережное обновление исторических зданий с сохранением архитектурного наследия и интеграцией современных инженерных решений.",
    href: "/portfolio",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1080&h=1440&fit=crop&crop=entropy&auto=format&q=80",
  },
];

const Gallery4 = ({
  title = "Направления",
  description = "Мы проектируем жилые и коммерческие объекты, создаём интерьеры и ландшафты. Каждый проект — это индивидуальное решение, основанное на потребностях заказчика и особенностях участка.",
  items = defaultData,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-16 sm:py-32">
      <div className="mx-auto w-full px-6 sm:px-8 lg:px-12">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col">
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {description}
            </p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="basis-[85vw] pl-4 sm:basis-[70vw] md:basis-[50vw] lg:basis-[40vw] xl:basis-[33vw]"
              >
                <a href={item.href} className="group block rounded-xl">
                  <div className="group relative h-full min-h-[27rem] overflow-hidden rounded-xl md:min-h-[30rem] lg:aspect-[3/4]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                      <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                        {item.title}
                      </div>
                      <div className="mb-8 line-clamp-2 text-white/80 md:mb-12 lg:mb-9">
                        {item.description}
                      </div>
                      <div className="flex items-center text-sm text-white">
                        Подробнее{" "}
                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-primary" : "bg-primary/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Перейти к слайду ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
