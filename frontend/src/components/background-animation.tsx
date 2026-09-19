"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  color: string;
}

export function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    // Mouse tracking for interactive connection
    const mouse = {
      x: -2000,
      y: -2000,
      radius: 150,
    };

    const handlePointerMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handlePointerLeave = () => {
      mouse.x = -2000;
      mouse.y = -2000;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);

    // Color palette matching portfolio (warm gold, champagne, amber, slate)
    const colors = [
      "rgba(212, 175, 122,", // Gold #d4af7a
      "rgba(247, 215, 163,", // Champagne #f7d7a3
      "rgba(168, 107, 61,",  // Bronze #a86b3d
      "rgba(148, 163, 184,", // Slate #94a3b8
    ];

    let particles: Particle[] = [];

    const initParticles = () => {
      const particleCount = Math.floor(Math.min(width * 0.045, 60));
      particles = [];

      for (let i = 0; i < particleCount; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.38,
          vy: (Math.random() - 0.5) * 0.38,
          radius: Math.random() * 1.4 + 0.8,
          baseAlpha: Math.random() * 0.32 + 0.18,
          color,
        });
      }
    };

    initParticles();

    let isVisible = true;
    const handleVisibilityChange = () => {
      isVisible = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Update & Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges smoothly
        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        // Interactive mouse connection
        const dxMouse = mouse.x - p.x;
        const dyMouse = mouse.y - p.y;
        const distMouse = Math.hypot(dxMouse, dyMouse);

        if (distMouse < mouse.radius) {
          const force = (mouse.radius - distMouse) / mouse.radius;
          p.x -= (dxMouse / distMouse) * force * 1.2;
          p.y -= (dyMouse / distMouse) * force * 1.2;

          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(247, 215, 163, ${0.32 * (1 - distMouse / mouse.radius)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${p.baseAlpha})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 115) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - dist / 115) * 0.12;
            ctx.strokeStyle = `rgba(212, 175, 122, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
      {/* Base Deep Obsidian Background */}
      <div className="absolute inset-0 bg-[#0B0F17]" />

      {/* Dynamic Animated Aurora Glow Spheres */}
      <motion.div
        animate={{
          x: [0, 45, -35, 0],
          y: [0, -35, 30, 0],
          scale: [1, 1.12, 0.95, 1],
          opacity: [0.35, 0.52, 0.35],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-20 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(212,175,122,0.18)_0%,_transparent_70%)] blur-[110px]"
      />

      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 45, -35, 0],
          scale: [1, 1.15, 0.92, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute top-[18%] right-[-10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,_rgba(168,107,61,0.15)_0%,_transparent_70%)] blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, 40, -45, 0],
          y: [0, -30, 35, 0],
          opacity: [0.12, 0.26, 0.12],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute top-[52%] left-[-15%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,_rgba(56,189,248,0.09)_0%,_rgba(99,102,241,0.06)_40%,_transparent_70%)] blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -35, 30, 0],
          y: [0, 35, -30, 0],
          opacity: [0.2, 0.38, 0.2],
        }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[8%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(212,175,122,0.14)_0%,_transparent_70%)] blur-[110px]"
      />

      {/* High-Tech Animated Engineering Grid */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212, 175, 122, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 122, 0.12) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          backgroundPosition: "center center",
          maskImage: "radial-gradient(ellipse 90% 80% at 50% 35%, black 30%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 35%, black 30%, transparent 95%)",
        }}
      />

      {/* Sweeping Radiant Light Beam */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div
          className="absolute -left-1/4 -right-1/4 h-[2px] bg-gradient-to-r from-transparent via-[#d4af7a] to-transparent animate-beam-scan"
          style={{
            boxShadow: "0 0 24px 3px rgba(212, 175, 122, 0.7)",
          }}
        />
      </div>

      {/* Interactive Constellation Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-75"
      />
    </div>
  );
}
