"use client"

import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery"

const mediaItems = [
  {
    id: 1,
    type: "image",
    title: "Фасад виллы",
    desc: "Современный минимализм",
    url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
    span: "col-span-1 row-span-1 sm:col-span-1 sm:row-span-2 md:col-span-1 md:row-span-3",
  },
  {
    id: 2,
    type: "image",
    title: "Панорамное остекление",
    desc: "Свет и пространство",
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    span: "col-span-2 row-span-1 sm:col-span-2 sm:row-span-2 md:col-span-2 md:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "Интерьер гостиной",
    desc: "Натуральные материалы",
    url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    span: "col-span-1 row-span-1 sm:col-span-2 sm:row-span-2 md:col-span-1 md:row-span-3",
  },
  {
    id: 4,
    type: "image",
    title: "Ландшафтный дизайн",
    desc: "Гармония с природой",
    url: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
    span: "col-span-1 row-span-1 sm:col-span-1 sm:row-span-2 md:col-span-2 md:row-span-2",
  },
  {
    id: 5,
    type: "image",
    title: "Бизнес-центр",
    desc: "Коммерческая архитектура",
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    span: "col-span-1 row-span-1 sm:col-span-1 sm:row-span-2 md:col-span-1 md:row-span-3",
  },
  {
    id: 6,
    type: "image",
    title: "Терраса с видом",
    desc: "Загородная резиденция",
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    span: "col-span-1 row-span-1 sm:col-span-1 sm:row-span-2 md:col-span-2 md:row-span-2",
  },
  {
    id: 7,
    type: "image",
    title: "Шале у озера",
    desc: "Дерево и камень",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    span: "col-span-2 row-span-1 sm:col-span-1 sm:row-span-2 md:col-span-1 md:row-span-3",
  },
]

export function InteractiveBentoGallerySection() {
  return (
    <section className="w-full bg-white pt-8 pb-16 sm:pt-16 sm:pb-32">
      <InteractiveBentoGallery
        mediaItems={mediaItems}
        title="Наши проекты в деталях"
        description="Листайте галерею реализованных объектов"
      />
    </section>
  )
}
