"use client";

import { ScrollAnimation } from "../components/ui/scroll-animation";
import { CountAnimation } from "../components/ui/count-animation";

export function Impact() {
  const stats = [
    {
      number: 50000,
      label: "Refugees Supported",
      prefix: "",
      suffix: "+",
    },
    {
      number: 1000000,
      label: "Aid Distributed",
      prefix: "$",
      suffix: "",
    },
    {
      number: 98,
      label: "Success Rate",
      prefix: "",
      suffix: "%",
    },
    {
      number: 75,
      label: "Partner Organizations",
      prefix: "",
      suffix: "+",
    },
  ];

  return (
    <section id="impact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Impact
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Making a real difference in refugee communities
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
          {stats.map((stat, index) => (
            <ScrollAnimation key={index} className="relative group h-full">
              <div
                className="h-full flex flex-col justify-center p-4 md:p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg 
                            transition-all duration-300 hover:shadow-xl hover:scale-105 
                            border border-gray-100 dark:border-gray-700"
              >
                <div className="text-center flex flex-col justify-between h-full">
                  <div
                    className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 
                                dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-2 md:mb-3"
                  >
                    <CountAnimation
                      end={stat.number}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      duration={2500}
                    />
                  </div>
                  <p className="text-xs sm:text-sm md:text-base font-medium text-gray-600 dark:text-gray-300 line-clamp-2">
                    {stat.label}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
