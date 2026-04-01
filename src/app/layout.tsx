import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Витрувий Инжиниринг — Архитектурное бюро в Москве",
  description:
    "Архитектурное проектирование жилых домов, коммерческих объектов и интерьеров. Полный цикл — от эскиза до авторского надзора за строительством. Более 200 реализованных проектов.",
  keywords: [
    "архитектурное бюро",
    "проектирование домов",
    "дизайн интерьера",
    "архитектурный проект",
    "строительство домов",
    "ландшафтный дизайн",
    "авторский надзор",
    "Москва",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        {/* Syncopate — display font for the Halide Topo Hero */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
