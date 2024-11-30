"use client";

import { ScrollAnimation } from "../components/ui/scroll-animation";
import Image from "next/image";

export function Partners() {
  const partners = [
    {
      name: "UNHCR",
      logo: "/unhcr.webp",
      link: "https://www.unhcr.org/",
    },
    {
      name: "Red Cross",
      logo: "/red-cross.webp",
      link: "https://www.icrc.org/",
    },
    {
      name: "Doctors Without Borders",
      logo: "/msf.webp",
      link: "https://www.msf.org/",
    },
    {
      name: "World Food Programme",
      logo: "/wfp.webp",
      link: "https://www.wfp.org/",
    },
    {
      name: "UNICEF",
      logo: "/unicef.webp",
      link: "https://www.unicef.org/",
    },
    {
      name: "Save the Children",
      logo: "/save-children.webp",
      link: "https://www.savethechildren.org/",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Partners
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Working together with leading humanitarian organizations
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <ScrollAnimation key={index} className="flex justify-center">
              <a
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-48 h-24">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain dark:brightness-0 dark:invert transition-transform group-hover:scale-105 duration-300"
                  />
                </div>
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500/20 dark:group-hover:border-blue-400/20 transition-colors duration-300" />
              </a>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
