"use client";

import { motion } from "framer-motion";
import { WorldMap } from "@/components/ui/world-map";

export function WorldMapSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-32 dark:bg-black">
      <div className="mx-auto w-full px-6 text-center sm:px-8 lg:px-12">
        <p className="text-3xl font-medium tracking-tight text-black dark:text-white md:text-4xl lg:text-5xl">
          География{" "}
          <span className="text-neutral-400">
            {"проектов".split("").map((char, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-500 md:text-base">
          Реализуем проекты по всей России и за рубежом. От Калининграда до
          Владивостока, от загородных резиденций до коммерческих объектов —
          работаем там, где нужны наши решения.
        </p>
      </div>

      <div className="w-full">
        <WorldMap
          dots={[
            {
              start: {
                lat: 64.2008,
                lng: -149.4937,
                label: "Alaska Hub",
                title: "Arctic Monitoring Station",
                description:
                  "Remote production and telemetry node used for high-latency field operations.",
                image:
                  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
                href: "#",
              },
              end: {
                lat: 34.0522,
                lng: -118.2437,
                label: "Los Angeles",
                title: "LA Delivery Office",
                description:
                  "Creative operations and final delivery team for West Coast clients.",
                image:
                  "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&q=80&w=800",
                href: "#",
              },
            },
            {
              start: { lat: 64.2008, lng: -149.4937, label: "Alaska Hub" },
              end: {
                lat: -15.7975,
                lng: -47.8919,
                label: "Brasilia",
                title: "Brazil Operations",
                description:
                  "Regional coordination point for LATAM implementation and support.",
                image:
                  "https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&q=80&w=800",
                href: "#",
              },
            },
            {
              start: { lat: -15.7975, lng: -47.8919, label: "Brasilia" },
              end: {
                lat: 38.7223,
                lng: -9.1393,
                label: "Lisbon",
                title: "EU Client Success",
                description:
                  "Handles onboarding and optimization for European enterprise accounts.",
                image:
                  "https://images.unsplash.com/photo-1513735492246-483525079686?auto=format&fit=crop&q=80&w=800",
                href: "#",
              },
            },
            {
              start: {
                lat: 51.5074,
                lng: -0.1278,
                label: "London",
                title: "Strategy Team",
                description:
                  "Product strategy and consulting unit for global expansion projects.",
                image:
                  "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800",
                href: "#",
              },
              end: {
                lat: 28.6139,
                lng: 77.209,
                label: "New Delhi",
                title: "Engineering Center",
                description:
                  "Core development and integrations team for platform features.",
                image:
                  "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800",
                href: "#",
              },
            },
            {
              start: { lat: 28.6139, lng: 77.209, label: "New Delhi" },
              end: {
                lat: 43.1332,
                lng: 131.9113,
                label: "Vladivostok",
                title: "APAC Relay",
                description:
                  "Transit point for regional deployments and infrastructure handoffs.",
                image:
                  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=800",
                href: "#",
              },
            },
            {
              start: { lat: 28.6139, lng: 77.209, label: "New Delhi" },
              end: {
                lat: -1.2921,
                lng: 36.8219,
                label: "Nairobi",
                title: "East Africa Node",
                description:
                  "Supports rollout, training, and post-launch optimization in the region.",
                image:
                  "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=800",
                href: "#",
              },
            },
          ]}
        />
      </div>
    </section>
  );
}
