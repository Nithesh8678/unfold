"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import { Moon, Sun } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const scrollToSection = (elementId: string) => {
    setIsOpen(false); // Close mobile menu if open
    const element = document.getElementById(elementId);
    if (element) {
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 shadow-sm backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl flex-shrink-0 font-bold text-blue-600 dark:text-blue-400"
        >
          RefAid
        </Link>

        <div className="hidden md:flex space-x-8 flex-grow justify-center">
          <button
            onClick={() => scrollToSection("features")}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection("impact")}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Impact
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Stories
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
          <Button
            variant="bordered"
            size="md"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <Sun className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem]" />
            )}
          </Button>
          <Button>Get Started</Button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6 text-gray-600 dark:text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white dark:bg-gray-800 shadow-md"
        >
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
            <button
              onClick={() => scrollToSection("features")}
              className="text-left text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-left text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("impact")}
              className="text-left text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Impact
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-left text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Stories
            </button>
            <div className="flex items-center space-x-2 pt-2 border-t border-gray-200 dark:border-gray-700">
              <Button
                variant="bordered"
                size="sm"
                onClick={() => setDarkMode(!darkMode)}
                className="w-full"
              >
                {darkMode ? (
                  <div className="flex items-center justify-center space-x-2">
                    <Sun className="h-[1.2rem] w-[1.2rem]" />
                    <span>Light Mode</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Moon className="h-[1.2rem] w-[1.2rem]" />
                    <span>Dark Mode</span>
                  </div>
                )}
              </Button>
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
