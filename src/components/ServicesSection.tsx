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
    <section className="py-10 sm:py-20 bg-[#080f0c]" id="services">
      <div className="container mx-auto px-3.5 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00d37f]/10 border border-[#00d37f]/30 text-[#00d37f] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5">
            <Heart className="w-3 h-3 text-[#00d37f]" />
            <span>Professional Care</span>
          </div>
          <h2 className="font-heading text-xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-2 tracking-tight">
            Specialized Grooming &amp; Boarding Services
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            Attentive care for birds, reptiles, and small exotic pets by trained handlers and passionate specialists.
          </p>
        </div>

        {/* Panoramic Care & Services Showcase Image */}
        <div className="relative w-full h-[210px] sm:h-[320px] md:h-[420px] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.6)] mb-6 sm:mb-10 group">
          <Image
            src="/images/services_care_showcase.jpg"
            alt="Animal Atlanta specialized grooming, bird DNA sexing, reptile nail trimming, and pet boarding specialists"
            fill
            className="object-cover object-[center_20%] group-hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050a08]/85 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between gap-2 bg-[#050a08]/85 backdrop-blur-md px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border border-white/10 text-[10px] sm:text-xs">
            <span className="font-semibold text-white truncate">
              Specialized Care &bull; Birds, Reptiles &amp; Mammals
            </span>
            <span className="shrink-0 text-[9px] sm:text-[10px] font-bold text-[#e2b763] uppercase">
              In-Store
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-[#0e1713] border border-white/10 hover:border-[#00d37f]/40 rounded-xl sm:rounded-2xl p-3 sm:p-5 flex flex-col transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#00d37f]/10 border border-[#00d37f]/30 flex items-center justify-center text-[#00d37f] mb-2 sm:mb-3">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="font-heading text-xs sm:text-base font-bold text-white mb-1 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-gray-300 text-[10px] sm:text-xs leading-relaxed mb-3 flex-grow line-clamp-2 sm:line-clamp-none">
                  {s.desc}
                </p>
                <div className="pt-2 border-t border-white/5 text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-[#e2b763]">
                  {s.badge}
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-[11px] text-gray-500 mt-6 sm:mt-8">
          *Disclaimer: We offer free basic wellness checks and experienced husbandry support; our specialists are not licensed veterinarians.
        </p>
      </div>
    </section>
  );
}
