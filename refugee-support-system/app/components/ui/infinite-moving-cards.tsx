"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

interface Item {
  quote?: string;
  author?: string;
  role?: string;
  image?: string;
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: Item[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      setStart(true);
    }
  }

  const getSpeed = () => {
    switch (speed) {
      case "fast":
        return "30s";
      case "normal":
        return "40s";
      case "slow":
        return "50s";
      default:
        return "40s";
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={
          {
            "--animation-duration": getSpeed(),
            animationDirection: direction === "left" ? "normal" : "reverse",
          } as React.CSSProperties
        }
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[350px] max-w-full relative flex-shrink-0 rounded-2xl border border-slate-700 px-8 py-6 md:w-[450px] bg-white/10 backdrop-blur-sm 
                     hover:bg-white/20 transition-colors duration-300"
          >
            <div className="flex flex-col gap-4">
              {item.image && (
                <div className="flex items-center gap-4">
                  <img 
                    src={item.image} 
                    alt={item.author} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.author}</h3>
                    <p className="text-sm text-slate-300">{item.role}</p>
                  </div>
                </div>
              )}
              <p className="text-slate-300 italic">&ldquo;{item.quote}&rdquo;</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}; 


