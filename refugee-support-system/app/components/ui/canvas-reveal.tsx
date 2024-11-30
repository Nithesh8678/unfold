"use client";

import { cn } from "@/utils/cn";
import { useEffect, useRef, useState } from "react";

interface CanvasRevealProps {
  children?: React.ReactNode;
  className?: string;
  revealClassName?: string;
}

export function CanvasReveal({
  children,
  className,
  revealClassName,
}: CanvasRevealProps) {
  const [isHovered, setIsHovered] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [particles, setParticles] = useState<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
  }>>([]);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      setContext(ctx);
    }
  }, []);

  useEffect(() => {
    if (isHovered && context && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const newParticles = [];
      const particleCount = 50;

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() - 0.5) * 1,
          vy: (Math.random() - 0.5) * 1,
          size: Math.random() * 3 + 1,
          color: `hsla(${Math.random() * 360}, 70%, 70%, 0.8)`,
        });
      }

      setParticles(newParticles);
    } else {
      setParticles([]);
    }
  }, [isHovered, context]);

  useEffect(() => {
    if (!context || !containerRef.current || particles.length === 0) return;

    let animationFrameId: number;

    const animate = () => {
      if (!context || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      context.canvas.width = rect.width;
      context.canvas.height = rect.height;
      context.clearRect(0, 0, rect.width, rect.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > rect.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > rect.height) particle.vy *= -1;

        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fillStyle = particle.color;
        context.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [context, particles]);

  return (
    <div
      ref={containerRef}
      className={cn("relative group", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
      />
      <div className={cn("relative z-20", revealClassName)}>{children}</div>
    </div>
  );
} 