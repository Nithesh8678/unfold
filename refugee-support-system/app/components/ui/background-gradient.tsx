"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface BackgroundGradientProps {
  images: string[];
}

export const BackgroundGradient: React.FC<BackgroundGradientProps> = ({
  images,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    let currentIndex = 0;
    
    const animate = async () => {
      while (true) {
        await controls.start({
          opacity: [0, 1, 1, 0],
          scale: [1.1, 1, 1, 1.1],
          transition: {
            duration: 8,
            times: [0, 0.2, 0.8, 1],
          },
        });
        
        currentIndex = (currentIndex + 1) % images.length;
      }
    };

    if (isInView) {
      animate();
    }

    return () => {
      controls.stop();
    };
  }, [controls, images.length, isInView]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((image, index) => (
        <motion.div
          key={index}
          ref={ref}
          animate={controls}
          initial={{ opacity: index === 0 ? 1 : 0 }}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="absolute inset-0"
        />
      ))}
    </div>
  );
}; 