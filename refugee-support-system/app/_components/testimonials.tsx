"use client";

import { ScrollAnimation } from "../components/ui/scroll-animation";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "The transparency of blockchain technology gives me confidence in my donations. I can track every step of my contribution and see the real impact it makes.",
      author: "Sarah Johnson",
      role: "Regular Donor",
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      quote:
        "The blockchain-based system has revolutionized our aid distribution process. We can now help more refugees with improved efficiency and accountability.",
      author: "Michael Chen",
      role: "NGO Partner",
      image: "https://i.pravatar.cc/150?img=2",
    },
    {
      quote:
        "This platform has transformed how we deliver aid to refugees. The transparency and efficiency of the blockchain system is exactly what we needed.",
      author: "Emma Rodriguez",
      role: "Aid Worker",
      image: "https://i.pravatar.cc/150?img=3",
    },
    {
      quote:
        "Being able to track donations through blockchain technology ensures transparency. The platform's efficiency has made a significant impact on aid delivery.",
      author: "David Kim",
      role: "Corporate Donor",
      image: "https://i.pravatar.cc/150?img=4",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-slate-900 to-slate-800"
    >
      <div className="container mx-auto px-4">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-slate-300">
            Hear from our community of donors and partners
          </p>
        </ScrollAnimation>

        <div className="relative">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}
