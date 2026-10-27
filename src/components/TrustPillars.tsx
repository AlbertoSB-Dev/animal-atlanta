import React from "react";
import { ShieldCheck, HeartHandshake, Box, MapPin } from "lucide-react";

export default function TrustPillars() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Ethically Bred & Raised",
      desc: "Healthy animals, responsible sourcing, and properly acclimatized captive pets.",
    },
    {
      icon: HeartHandshake,
      title: "Expert Husbandry Care",
      desc: "Specialized grooming, DNA sexing, nail trims, and free basic wellness checks.",
    },
    {
      icon: Box,
      title: "Full Supply & Habitats",
      desc: "Parrot cages with play pens, bioactive terrariums, substrate, lighting & decor.",
    },
    {
      icon: MapPin,
      title: "Woodstock & Metro Atlanta",
      desc: "1910 Eagle Dr #1500, Woodstock, GA 30189. Open 7 days a week.",
    },
  ];

  return (
    <section className="py-6 sm:py-12 border-y border-white/10 bg-[#0a130f]/60">
      <div className="container mx-auto px-3.5 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 p-3 rounded-xl bg-white/[0.03] sm:bg-transparent border border-white/5 sm:border-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#00d37f]/10 border border-[#00d37f]/30 flex items-center justify-center text-[#00d37f] shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-xs sm:text-base font-bold text-white mb-0.5 tracking-tight">
                    {p.title}
                  </h4>
                  <p className="text-gray-400 text-[10px] sm:text-xs leading-relaxed line-clamp-2 sm:line-clamp-none">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
