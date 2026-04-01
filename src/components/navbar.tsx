"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MenuBar, type MenuBarItem } from "@/components/ui/bottom-menu";

const services = [
  {
    title: "Проект дома «под ключ»",
    href: "/services/turnkey",
    description: "Полный цикл проектирования от концепции до рабочей документации.",
  },
  {
    title: "Дизайн фасада дома",
    href: "/services/facade",
    description: "Разработка внешнего облика здания с подбором материалов и цветовых решений.",
  },
  {
    title: "Планировочное решение",
    href: "/services/layout",
    description: "Оптимальная компоновка помещений с учётом функциональности и комфорта.",
  },
  {
    title: "Дизайн интерьера дома",
    href: "/services/interior",
    description: "Создание стильного и эргономичного внутреннего пространства.",
  },
  {
    title: "Архитектурный надзор",
    href: "/services/supervision",
    description: "Контроль соответствия строительства проектной документации.",
  },
];

const projectComposition = [
  {
    title: "Эскизный проект дома",
    href: "/services/sketch",
    description: "Визуализация идеи: планировки, фасады, 3D-модель будущего дома.",
  },
  {
    title: "Архитектурный проект",
    href: "/services/architectural",
    description: "Детальная проработка объёмно-планировочных и стилевых решений.",
  },
  {
    title: "Конструктивный проект",
    href: "/services/structural",
    description: "Расчёт несущих конструкций, фундаментов, перекрытий и узлов.",
  },
  {
    title: "Инженерный проект",
    href: "/services/engineering",
    description: "Проектирование всех инженерных систем: отопление, водоснабжение, электрика.",
  },
];

const mobileMenuItems: MenuBarItem[] = [
  {
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </svg>
    ),
    label: "Главная",
    href: "/",
  },
  {
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
        <path d="M17 18h1" /><path d="M12 18h1" /><path d="M7 18h1" />
      </svg>
    ),
    label: "Проекты",
    href: "#",
  },
  {
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    label: "Услуги",
    href: "#",
  },
  {
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    label: "О нас",
    href: "/#about",
  },
  {
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "Контакты",
    href: "#",
  },
];

export function Navbar() {
  const [mounted, setMounted] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const getShouldShowSolidNav = () => {
      const hero = document.querySelector(".halide-body");
      if (!hero) return window.scrollY > 24;

      const heroBottom = hero.getBoundingClientRect().bottom;
      const navActivationOffset = 72;
      return heroBottom <= navActivationOffset;
    };

    const handleScroll = () => {
      const next = getShouldShowSolidNav();
      setIsScrolled((prev) => (prev === next ? prev : next));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={cn("halide-navbar", isScrolled && "halide-navbar-scrolled")}
      >
        <style>{`
          .halide-navbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 200;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1.25rem 2.5rem;
            pointer-events: none;
            font-family: var(--font-geist-sans), sans-serif;
            overflow: visible;
            transition: background-color 0.25s ease, backdrop-filter 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          }

          .halide-navbar.halide-navbar-scrolled {
            background: rgba(10, 10, 10, 0.72);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border-bottom: 1px solid rgba(224, 224, 224, 0.1);
            box-shadow: 0 8px 28px rgba(0, 0, 0, 0.35);
          }

          .halide-navbar > * {
            pointer-events: auto;
          }

          html {
            overflow-x: hidden;
            overflow-y: auto;
          }

          .halide-navbar-logo {
            font-family: 'Syncopate', sans-serif;
            font-weight: 700;
            font-size: 0.85rem;
            letter-spacing: 0.15em;
            color: #e0e0e0;
            text-decoration: none;
            transition: color 0.3s;
          }

          .halide-navbar-logo:hover {
            color: #ff3c00;
          }

          .halide-navbar [data-radix-collection-item],
          .halide-navbar [role="menuitem"],
          .halide-navbar button {
            background: transparent !important;
            color: rgba(224, 224, 224, 0.85) !important;
            font-size: 0.8rem;
            letter-spacing: 0.04em;
            font-weight: 500;
            border: none;
          }

          .halide-navbar.halide-navbar-scrolled [data-radix-collection-item],
          .halide-navbar.halide-navbar-scrolled [role="menuitem"],
          .halide-navbar.halide-navbar-scrolled button,
          .halide-navbar.halide-navbar-scrolled .halide-nav-link,
          .halide-navbar.halide-navbar-scrolled .halide-navbar-logo {
            color: rgba(245, 245, 245, 0.95) !important;
          }

          .halide-navbar [data-radix-collection-item]:hover,
          .halide-navbar [role="menuitem"]:hover,
          .halide-navbar button:hover {
            background: rgba(255, 255, 255, 0.08) !important;
            color: #ffffff !important;
          }

          .halide-navbar [data-state="open"] > button {
            background: rgba(255, 255, 255, 0.06) !important;
            color: #ffffff !important;
          }

          .halide-navbar .nav-menu-viewport {
            background: rgba(15, 15, 15, 0.97);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid rgba(224, 224, 224, 0.12);
            box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
            color: #e0e0e0;
          }

          .halide-navbar ul {
            background: transparent;
          }

          .halide-dropdown-item {
            display: block;
            user-select: none;
            border-radius: 0.375rem;
            padding: 0.75rem;
            line-height: 1;
            text-decoration: none;
            outline: none;
            transition: background 0.2s, color 0.2s;
          }

          .halide-dropdown-item:hover,
          .halide-dropdown-item:focus {
            background: rgba(255, 255, 255, 0.06);
          }

          .halide-dropdown-item .halide-item-title {
            font-size: 0.85rem;
            font-weight: 500;
            line-height: 1;
            color: #e0e0e0;
          }

          .halide-dropdown-item:hover .halide-item-title {
            color: #ffffff;
          }

          .halide-dropdown-item .halide-item-desc {
            font-size: 0.75rem;
            line-height: 1.4;
            color: rgba(224, 224, 224, 0.5);
            margin-top: 0.35rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .halide-featured-card {
            display: flex;
            height: 100%;
            width: 100%;
            flex-direction: column;
            justify-content: flex-end;
            border-radius: 0.375rem;
            padding: 1.5rem;
            text-decoration: none;
            outline: none;
            background: linear-gradient(135deg, rgba(255, 60, 0, 0.15), rgba(15, 15, 15, 0.9));
            border: 1px solid rgba(255, 60, 0, 0.2);
            transition: border-color 0.3s;
            user-select: none;
          }

          .halide-featured-card:hover {
            border-color: rgba(255, 60, 0, 0.5);
          }

          .halide-featured-card:focus {
            box-shadow: 0 0 0 2px rgba(255, 60, 0, 0.3);
          }

          .halide-featured-card .halide-card-title {
            font-size: 1.1rem;
            font-weight: 600;
            color: #e0e0e0;
            margin-bottom: 0.5rem;
            margin-top: 1rem;
          }

          .halide-featured-card .halide-card-desc {
            font-size: 0.8rem;
            line-height: 1.4;
            color: rgba(224, 224, 224, 0.6);
          }

          .halide-nav-link {
            display: inline-flex;
            height: 2.25rem;
            width: max-content;
            align-items: center;
            justify-content: center;
            border-radius: 0.375rem;
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
            font-weight: 500;
            letter-spacing: 0.04em;
            color: rgba(224, 224, 224, 0.85);
            background: transparent;
            text-decoration: none;
            transition: background 0.2s, color 0.2s;
          }

          .halide-nav-link:hover {
            background: rgba(255, 255, 255, 0.08);
            color: #ffffff;
          }

          .halide-desktop-nav {
            display: flex;
          }

          @media (max-width: 768px) {
            .halide-navbar {
              padding: 1rem 1.25rem;
            }
            .halide-desktop-nav {
              display: none;
            }
            .halide-navbar-logo {
              font-size: 0.65rem;
            }
          }
        `}</style>

        <Link href="/" className="halide-navbar-logo">
          Витрувий Инжиниринг
        </Link>

        {/* Desktop navigation */}
        <div className="halide-desktop-nav">
          {!mounted ? (
            <nav className="flex items-center gap-1">
              <Link href="/#about" className="halide-nav-link">О компании</Link>
              <Link href="/services" className="halide-nav-link">Услуги</Link>
              <Link href="/portfolio" className="halide-nav-link">Портфолио</Link>
              <Link href="/docs" className="halide-nav-link">Для бизнеса</Link>
            </nav>
          ) : (
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>О компании</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a className="halide-featured-card" href="/#about">
                            <div className="halide-card-title">Витрувий</div>
                            <p className="halide-card-desc">
                              Архитектурное бюро полного цикла — от концепции до
                              авторского надзора.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/#about" title="О нас">
                        История компании, миссия и ценности нашей команды.
                      </ListItem>
                      <ListItem href="/#team" title="Команда">
                        Архитекторы, инженеры и дизайнеры с опытом более 15 лет.
                      </ListItem>
                      <ListItem href="/#approach" title="Подход к работе">
                        Индивидуальный подход к каждому проекту на всех этапах.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Услуги</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[500px] grid-cols-2 gap-1 p-4 md:w-[600px] lg:w-[700px]">
                      <div>
                        <div className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                          Услуги
                        </div>
                        <ul className="grid gap-1">
                          {services.map((item) => (
                            <ListItem key={item.title} title={item.title} href={item.href}>
                              {item.description}
                            </ListItem>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                          Состав проекта дома
                        </div>
                        <ul className="grid gap-1">
                          {projectComposition.map((item) => (
                            <ListItem key={item.title} title={item.title} href={item.href}>
                              {item.description}
                            </ListItem>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className="halide-nav-link">
                    <Link href="/portfolio">Портфолио</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className="halide-nav-link">
                    <Link href="/docs">Для бизнеса</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          )}
        </div>
      </header>

      {/* Mobile bottom menu bar — visible only on small screens */}
      {mounted && (
        <div className="fixed bottom-6 left-0 right-0 z-[200] flex justify-center md:hidden">
          <MenuBar items={mobileMenuItems} />
        </div>
      )}
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn("halide-dropdown-item", className)}
          {...props}
        >
          <div className="halide-item-title">{title}</div>
          <p className="halide-item-desc">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
