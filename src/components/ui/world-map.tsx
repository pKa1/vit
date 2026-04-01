"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import DottedMap from "dotted-map";

type MapPoint = {
  lat: number;
  lng: number;
  label?: string;
  title?: string;
  description?: string;
  image?: string;
  href?: string;
};

interface MapProps {
  dots?: Array<{
    start: MapPoint;
    end: MapPoint;
  }>;
  lineColor?: string;
}

export function WorldMap({ dots = [], lineColor = "#0ea5e9" }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.35 });
  const [hasDrawnPaths, setHasDrawnPaths] = useState(false);
  const [activePointKey, setActivePointKey] = useState<string | null>(null);
  const svgMap = useMemo(() => {
    // Slightly lower map density for better runtime paint performance.
    const map = new DottedMap({ height: 80, grid: "diagonal" });
    return map.getSVG({
      radius: 0.22,
      color: "#00000040",
      shape: "circle",
      backgroundColor: "white",
    });
  }, []);

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  useEffect(() => {
    if (isInView) {
      setHasDrawnPaths(true);
    }
  }, [isInView]);

  const mappedDots = useMemo(
    () =>
      dots.map((dot) => ({
        start: { point: dot.start, projected: projectPoint(dot.start.lat, dot.start.lng) },
        end: { point: dot.end, projected: projectPoint(dot.end.lat, dot.end.lng) },
      })),
    [dots]
  );

  const points = useMemo(() => {
    const deduped = new Map<string, MapPoint>();

    dots.forEach((dot) => {
      [dot.start, dot.end].forEach((point) => {
        const key = `${point.lat}:${point.lng}:${point.label ?? ""}`;
        if (!deduped.has(key)) {
          deduped.set(key, point);
        }
      });
    });

    return Array.from(deduped.entries()).map(([key, point]) => ({
      key,
      ...point,
      projected: projectPoint(point.lat, point.lng),
    }));
  }, [dots]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[2/1] w-full bg-white font-sans dark:bg-black"
    >
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="pointer-events-none h-full w-full select-none"
        alt="world map"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="pointer-events-none absolute inset-0 h-full w-full select-none"
      >
        {mappedDots.map((dot, i) => {
          const startPoint = dot.start.projected;
          const endPoint = dot.end.projected;
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: hasDrawnPaths ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.5 * i, ease: "easeOut" }}
              />
            </g>
          );
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {mappedDots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            <g key={`start-${i}`}>
              <circle
                cx={dot.start.projected.x}
                cy={dot.start.projected.y}
                r="2"
                fill={lineColor}
              />
            </g>
            <g key={`end-${i}`}>
              <circle
                cx={dot.end.projected.x}
                cy={dot.end.projected.y}
                r="2"
                fill={lineColor}
              />
            </g>
          </g>
        ))}
      </svg>

      {/* Point labels + hover cards */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {points.map((point) => {
          const left = `${(point.projected.x / 800) * 100}%`;
          const top = `${(point.projected.y / 400) * 100}%`;
          const isActive = activePointKey === point.key;
          const horizontalPositionClass =
            point.projected.x > 560 ? "right-5" : "left-5";
          const verticalPositionClass =
            point.projected.y > 280 ? "bottom-5" : "top-5";

          return (
            <div
              key={point.key}
              className="absolute z-20 h-10 w-10 cursor-pointer pointer-events-auto md:h-12 md:w-12"
              style={{ left, top, transform: "translate(-50%, -50%)" }}
              onMouseEnter={() => setActivePointKey(point.key)}
              onMouseLeave={() => setActivePointKey(null)}
              onClick={() => setActivePointKey((prev) => prev === point.key ? null : point.key)}
              onFocus={() => setActivePointKey(point.key)}
              onBlur={() => setActivePointKey(null)}
              tabIndex={0}
            >
              {/* Larger invisible hit area for reliable hover/focus */}
              <span className="absolute inset-0 rounded-full" />

              {point.label && (
                <div className="pointer-events-none absolute left-3 top-[-14px] hidden whitespace-nowrap rounded-md border border-zinc-300 bg-white/95 px-2 py-1 text-[10px] font-medium text-zinc-700 shadow-sm sm:block">
                  {point.label}
                </div>
              )}

              <AnimatePresence>
                {isActive && (point.title || point.description) && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className={`absolute z-30 w-48 sm:w-64 rounded-xl border border-zinc-200 bg-white p-2 sm:p-3 shadow-xl ${horizontalPositionClass} ${verticalPositionClass}`}
                  >
                    {point.image && (
                      <div className="mb-2 overflow-hidden rounded-lg">
                        <img
                          src={point.image}
                          alt={point.title ?? point.label ?? "location"}
                          className="h-24 w-full object-cover"
                        />
                      </div>
                    )}
                    {point.title && (
                      <div className="text-sm font-semibold text-zinc-900">
                        {point.title}
                      </div>
                    )}
                    {point.description && (
                      <p className="mt-1 text-xs leading-relaxed text-zinc-600">
                        {point.description}
                      </p>
                    )}
                    <div className="mt-3">
                      <a
                        href={point.href ?? "#"}
                        className="inline-flex items-center rounded-md bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white transition-opacity hover:opacity-90"
                      >
                        Перейти
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
