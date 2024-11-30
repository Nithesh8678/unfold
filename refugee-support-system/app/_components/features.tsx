"use client";

import { ScrollAnimation } from "../components/ui/scroll-animation";
import { motion } from "framer-motion";

export function Features() {
  const features = [
    {
      title: "Transparent Aid Distribution",
      description:
        "Track every donation in real-time through blockchain technology.",
      icon: "🔍",
    },
    {
      title: "Direct Impact",
      description:
        "Connect directly with refugees and see how your support makes a difference.",
      icon: "🤝",
    },
    {
      title: "Secure Transactions",
      description:
        "Blockchain-powered security ensures safe and traceable aid delivery.",
      icon: "🔒",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <ScrollAnimation className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Innovative solutions for effective aid distribution
          </p>
        </ScrollAnimation>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {features.map((feature, index) => (
            <ScrollAnimation
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </ScrollAnimation>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
