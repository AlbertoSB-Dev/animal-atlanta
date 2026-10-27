import React from "react";
import Image from "next/image";
import { Scissors, Dna, Sparkles, Home, Heart, ShieldCheck } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Scissors,
      title: "Bird Grooming & Trims",
      desc: "Professional Bird Wing Trims, Nail Trims, and Beak Trims to keep your feathered friends healthy, safe, and comfortable.",
      badge: "Wings • Nails • Beaks",
    },
    {
      icon: Dna,
      title: "Bird DNA Sexing",
      desc: "Accurate DNA testing to determine the gender of your parrots, conures, and exotic birds with safe, certified testing.",
      badge: "Certified Lab Results",
    },
    {
      icon: Sparkles,
      title: "Reptile & Small Pet Trims",
      desc: "Gentle nail trims for lizards, bearded dragons, guinea pigs, rabbits, and small mammals done safely by trained handlers.",
      badge: "Reptiles & Mammals",
    },
    {
      icon: Home,
      title: "Pet Boarding / Babysitting",
      desc: "Going out of town? We provide reliable boarding and babysitting for birds, reptiles, and small pets in our monitored facility.",
      badge: "Daily Care • Feeding",
    },
  ];

  return (
    <section className="py-20 bg-[#080f0c]" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00d37f]/10 border border-[#00d37f]/30 text-[#00d37f] text-xs font-bold uppercase tracking-wider mb-4">
            <Heart className="w-3.5 h-3.5 text-[#00d37f]" />
            <span>Professional Care</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Specialized Grooming &amp; Boarding Services
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            We provide hands-on, attentive care for birds, reptiles, and small exotic pets with experienced handlers and compassionate specialists.
          </p>
        </div>

        {/* Panoramic Care & Services Showcase Image */}
        <div className="relative w-full h-[190px] sm:h-[320px] md:h-[420px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.7)] mb-8 sm:mb-10 group">
          <Image
            src="/images/services_care_showcase.jpg"
            alt="Animal Atlanta specialized grooming, bird DNA sexing, reptile nail trimming, and pet boarding specialists"
            fill
            className="object-cover object-center group-hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050a08]/80 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between gap-2 bg-[#050a08]/85 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 text-[11px] sm:text-xs">
            <span className="font-semibold text-white truncate">
              Specialized Care &bull; Birds, Reptiles &amp; Mammals
            </span>
            <span className="shrink-0 text-[10px] font-bold text-[#e2b763] uppercase">
              In-Store
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-[#0e1713] border border-white/10 hover:border-[#00d37f]/40 rounded-2xl p-4 sm:p-6 flex flex-col transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#00d37f]/10 border border-[#00d37f]/30 flex items-center justify-center text-[#00d37f] mb-3">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="font-heading text-base sm:text-lg font-bold text-white mb-1.5">
                  {s.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 flex-grow">
                  {s.desc}
                </p>
                <div className="pt-2.5 border-t border-white/5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#e2b763]">
                  {s.badge}
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-gray-500 mt-8">
          *Disclaimer: We offer free basic wellness checks and experienced husbandry support; our specialists are not licensed veterinarians.
        </p>
      </div>
    </section>
  );
}
