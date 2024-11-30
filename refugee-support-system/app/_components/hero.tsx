"use client";

import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import { BackgroundGradient } from "../components/ui/background-gradient";

export function Hero() {
  const images = [
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80",
    "https://images.unsplash.com/photo-1551239262-61cf00f7f55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80",
    "https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2270&q=80",
    "https://images.unsplash.com/photo-1686937871123-3033860eb918?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80",
  ];

  return (
    <section className="min-h-[calc(100vh-4rem)] relative overflow-hidden">
      <BackgroundGradient images={images} />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 min-h-[calc(100vh-4rem)] flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Empowering Refugees, One Block at a Time
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              RefAid connects donors and refugees through blockchain, ensuring
              transparency, dignity, and efficiency in aid distribution.
            </p>
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              Join Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
