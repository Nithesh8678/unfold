"use client";

import { useState, useEffect } from "react";
import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { Features } from "./_components/features";
import { HowItWorks } from "./_components/how-it-works";
import { Impact } from "./_components/impact";
import { Testimonials } from "./_components/testimonials";
import { Partners } from "./_components/partners";
import { Footer } from "./_components/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Impact />
        <Testimonials />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
