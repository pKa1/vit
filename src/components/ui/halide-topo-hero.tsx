"use client";

import React, { useEffect, useRef, useCallback } from "react";

const HalideLanding: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<HTMLDivElement[]>([]);

  const setLayerRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      if (el) {
        layersRef.current[index] = el;
      }
    },
    []
  );

  useEffect(() => {
    const hero = heroRef.current;
    const canvas = canvasRef.current;
    if (!canvas || !hero) return;
    let rafId: number | null = null;
    const isHeroInViewRef = { current: true };

    // Mouse Parallax Logic
    const handleMouseMove = (e: MouseEvent) => {
      if (!isHeroInViewRef.current) return;

      const x = (window.innerWidth / 2 - e.pageX) / 25;
      const y = (window.innerHeight / 2 - e.pageY) / 25;

      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        // Rotate the 3D Canvas
        canvas.style.transform = `rotateX(${55 + y / 2}deg) rotateZ(${-25 + x / 2}deg)`;

        // Apply depth shift to layers
        layersRef.current.forEach((layer, index) => {
          if (!layer) return;
          const depth = (index + 1) * 15;
          const moveX = x * (index + 1) * 0.2;
          const moveY = y * (index + 1) * 0.2;
          layer.style.transform = `translateZ(${depth}px) translate(${moveX}px, ${moveY}px)`;
        });

        rafId = null;
      });
    };

    // Entrance Animation
    canvas.style.opacity = "0";
    canvas.style.transform = "rotateX(90deg) rotateZ(0deg) scale(0.8)";

    const timeout = setTimeout(() => {
      canvas.style.transition = "all 2.5s cubic-bezier(0.16, 1, 0.3, 1)";
      canvas.style.opacity = "1";
      canvas.style.transform = "rotateX(55deg) rotateZ(-25deg) scale(1)";
    }, 300);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isHeroInViewRef.current = entry.isIntersecting;
      },
      { threshold: 0.25 }
    );
    observer.observe(hero);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <style>{`
        :root {
          --halide-bg: #0a0a0a;
          --halide-silver: #e0e0e0;
          --halide-accent: #ff3c00;
          --halide-grain-opacity: 0.15;
        }

        .halide-body {
          background-color: var(--halide-bg);
          color: var(--halide-silver);
          font-family: var(--font-syncopate), 'Syncopate', sans-serif;
          overflow: hidden;
          height: 100vh;
          width: 100vw;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .halide-grain {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          pointer-events: none;
          z-index: 20;
          opacity: var(--halide-grain-opacity);
        }

        .halide-viewport {
          perspective: 2000px;
          width: 100vw; height: 100vh;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
        }

        .halide-canvas-3d {
          position: relative;
          width: 800px; height: 500px;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .halide-layer {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(224, 224, 224, 0.1);
          background-size: cover;
          background-position: center;
          transition: transform 0.5s ease;
        }

        .halide-layer-1 {
          background-image: url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200');
          filter: grayscale(1) contrast(1.2) brightness(0.5);
        }

        .halide-layer-2 {
          background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200');
          filter: grayscale(1) contrast(1.1) brightness(0.7);
          opacity: 0.6;
          mix-blend-mode: screen;
        }

        .halide-layer-3 {
          background-image: url('https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=1200');
          filter: grayscale(1) contrast(1.3) brightness(0.8);
          opacity: 0.4;
          mix-blend-mode: overlay;
        }

        .halide-contours {
          position: absolute;
          width: 200%; height: 200%;
          top: -50%; left: -50%;
          background-image: repeating-radial-gradient(
            circle at 50% 50%,
            transparent 0,
            transparent 40px,
            rgba(255, 255, 255, 0.05) 41px,
            transparent 42px
          );
          transform: translateZ(120px);
          pointer-events: none;
        }

        .halide-interface-grid {
          position: absolute;
          inset: 0;
          padding: 4rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto 1fr auto;
          z-index: 10;
          pointer-events: none;
        }

        .halide-hero-title {
          grid-column: 1 / -1;
          align-self: center;
          font-size: clamp(3rem, 10vw, 10rem);
          line-height: 0.85;
          letter-spacing: -0.04em;
          mix-blend-mode: difference;
          font-family: var(--font-syncopate), 'Syncopate', sans-serif;
          font-weight: 700;
          margin: 0;
        }

        .halide-hero-subtitle {
          grid-column: 1 / -1;
          max-width: 540px;
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.6;
          color: rgba(224, 224, 224, 0.55);
          font-family: var(--font-geist-sans), sans-serif;
          font-weight: 400;
          letter-spacing: 0.01em;
        }

        .halide-cta-button {
          pointer-events: auto;
          background: var(--halide-silver);
          color: var(--halide-bg);
          padding: 1rem 2rem;
          text-decoration: none;
          font-weight: 700;
          font-family: var(--font-syncopate), 'Syncopate', sans-serif;
          clip-path: polygon(0 0, 100% 0, 100% 70%, 85% 100%, 0 100%);
          transition: 0.3s;
          border: none;
          cursor: pointer;
          font-size: 0.85rem;
          letter-spacing: 0.05em;
        }

        .halide-cta-button:hover {
          background: var(--halide-accent);
          color: white;
          transform: translateY(-5px);
        }

        .halide-scroll-hint {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, var(--halide-silver), transparent);
          animation: halide-flow 2s infinite ease-in-out;
          z-index: 15;
        }

        @keyframes halide-flow {
          0%, 100% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
        }

        @media (max-width: 768px) {
          .halide-interface-grid {
            padding: 1.5rem;
            grid-template-rows: auto 1fr auto;
          }
          .halide-canvas-3d {
            width: 320px;
            height: 240px;
          }
          .halide-hero-title {
            font-size: clamp(2rem, 12vw, 5rem);
          }
          .halide-hero-subtitle {
            font-size: 0.8rem;
            max-width: 360px;
          }
          .halide-cta-button {
            padding: 0.75rem 1.25rem;
            font-size: 0.7rem;
          }
          .halide-bottom-bar {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start !important;
          }
        }

        @media (max-width: 480px) {
          .halide-canvas-3d {
            width: 260px;
            height: 200px;
          }
          .halide-hero-title {
            font-size: clamp(1.75rem, 14vw, 3.5rem);
          }
        }
      `}</style>

      <div className="halide-body" ref={heroRef}>
        {/* SVG Filter for Grain */}
        <svg
          style={{ position: "absolute", width: 0, height: 0 }}
          aria-hidden="true"
        >
          <filter id="halide-grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </svg>

        <div
          className="halide-grain"
          style={{ filter: "url(#halide-grain)" }}
        />

        <div className="halide-interface-grid">
          {/* Top row reserved for navbar — spacer */}
          <div />
          <div
            style={{
              textAlign: "right",
              fontFamily: "monospace",
              color: "var(--halide-accent)",
              fontSize: "0.7rem",
              paddingTop: "0.5rem",
            }}
          >
            <div>МОСКВА: 55.7558&deg; N</div>
            <div>ОСНОВАНО: 2010</div>
          </div>

          <h1 className="halide-hero-title">
            ВИТРУВИЙ
            <br />
            ИНЖИНИРИНГ
          </h1>

          <p className="halide-hero-subtitle">
            Архитектурное проектирование жилых домов, коммерческих объектов
            и&nbsp;интерьеров. Полный цикл&nbsp;&mdash; от&nbsp;эскиза
            до&nbsp;авторского надзора за&nbsp;строительством.
          </p>

          <div
            className="halide-bottom-bar"
            style={{
              gridColumn: "1 / -1",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div style={{ fontFamily: "monospace", fontSize: "0.75rem" }}>
              <p style={{ margin: "0 0 0.25rem" }}>[ АРХИТЕКТУРНОЕ БЮРО ]</p>
              <p style={{ margin: 0 }}>
                ПРОЕКТИРОВАНИЕ &amp; СТРОИТЕЛЬСТВО
              </p>
            </div>
            <a href="/portfolio" className="halide-cta-button">
              СМОТРЕТЬ ПРОЕКТЫ
            </a>
          </div>
        </div>

        <div className="halide-viewport">
          <div className="halide-canvas-3d" ref={canvasRef}>
            <div
              className="halide-layer halide-layer-1"
              ref={setLayerRef(0)}
            />
            <div
              className="halide-layer halide-layer-2"
              ref={setLayerRef(1)}
            />
            <div
              className="halide-layer halide-layer-3"
              ref={setLayerRef(2)}
            />
            <div className="halide-contours" />
          </div>
        </div>

        <div className="halide-scroll-hint" />
      </div>
    </>
  );
};

export default HalideLanding;
