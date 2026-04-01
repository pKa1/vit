"use client"

import * as React from "react"
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function Footerdemo() {
  return (
    <div>
      <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
        <div className="mx-auto w-full px-6 py-12 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-8 sm:gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative">
              <h2 className="mb-4 text-2xl font-medium tracking-tight sm:text-3xl">Будьте в курсе</h2>
              <p className="mb-6 text-muted-foreground">
                Подпишитесь на рассылку — новые проекты, статьи и специальные предложения.
              </p>
              <form className="relative">
                <Input
                  type="email"
                  placeholder="Ваш email"
                  className="pr-12 backdrop-blur-sm"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
                >
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Подписаться</span>
                </Button>
              </form>
              <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Навигация</h3>
              <nav className="space-y-2 text-sm">
                <a href="/" className="block transition-colors hover:text-primary">
                  Главная
                </a>
                <a href="/about" className="block transition-colors hover:text-primary">
                  О компании
                </a>
                <a href="/services" className="block transition-colors hover:text-primary">
                  Услуги
                </a>
                <a href="/portfolio" className="block transition-colors hover:text-primary">
                  Портфолио
                </a>
                <a href="#contacts" className="block transition-colors hover:text-primary">
                  Контакты
                </a>
              </nav>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Контакты</h3>
              <address className="space-y-2 text-sm not-italic">
                <p>г. Москва, ул. Архитектурная, 12</p>
                <p>Офис 301, 3 этаж</p>
                <p>Тел: +7 (495) 123-45-67</p>
                <p>Email: info@vitruviy.ru</p>
              </address>
            </div>

            <div className="relative">
              <h3 className="mb-4 text-lg font-semibold">Мы в соцсетях</h3>
              <div className="mb-6 flex space-x-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Facebook className="h-4 w-4" />
                        <span className="sr-only">Facebook</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Facebook</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Twitter className="h-4 w-4" />
                        <span className="sr-only">Twitter</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Twitter</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Instagram className="h-4 w-4" />
                        <span className="sr-only">Instagram</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Instagram</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>LinkedIn</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2026 Витрувий Инжиниринг. Все права защищены.
            </p>
            <nav className="flex gap-4 text-sm">
              <a href="#" className="transition-colors hover:text-primary">
                Политика конфиденциальности
              </a>
              <a href="#" className="transition-colors hover:text-primary">
                Пользовательское соглашение
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

export { Footerdemo }
