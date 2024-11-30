"use client";

import { ScrollAnimation } from "../components/ui/scroll-animation";
import { motion } from "framer-motion";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Connect Your Wallet",
      description:
        "Set up your digital wallet to start making secure donations through blockchain technology.",
      icon: "💳",
    },
    {
      number: "02",
      title: "Choose Your Impact",
      description:
        "Select from verified refugee aid programs and decide how you want to make a difference.",
      icon: "🎯",
    },
    {
      number: "03",
      title: "Track Your Donation",
      description:
        "Follow your contribution's journey in real-time through our transparent blockchain system.",
      icon: "📊",
    },
    {
      number: "04",
      title: "See Real Results",
      description:
        "Receive updates and see the direct impact of your support on refugee communities.",
      icon: "✨",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Making aid distribution transparent and efficient
          </p>
        </ScrollAnimation>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          {steps.map((step, index) => (
            <ScrollAnimation
              key={index}
              className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-lg transition-all duration-700 transform hover:-translate-y-[2px]"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 rounded-lg p-3">
                  <span className="text-4xl">{step.icon}</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">
                    Step {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <svg
                    className="w-8 h-8 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </ScrollAnimation>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
