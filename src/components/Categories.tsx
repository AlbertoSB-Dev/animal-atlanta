"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Lock } from "lucide-react";

const categories = [
  {
    id: "birds",
    title: "Birds",
    desc: "From tiny finches & canaries to conures, amazons & macaws. Hand-raised babies with unique personalities.",
    image: "/images/birds_macaw.jpg",
    action: "View Birds Department",
  },
  {
    id: "reptiles",
    title: "Reptiles",
    desc: "From geckos, bearded dragons, and tortoises to docile pythons & boas. Complete habitats and expert advice.",
    image: "/images/reptiles_python.jpg",
    action: "View Reptiles Department",
  },
  {
    id: "arachnids",
    title: "Arachnids",
    desc: "Think tarantulas are terrifying? Think again! Over 1,000 species worldwide with stunning colors and calm temperaments.",
    image: "/images/arachnids_tarantula.jpg",
    action: "View Arachnids Collection",
  },
  {
    id: "small-animals",
    title: "Small Animals",
    desc: "Bunnies, guinea pigs, chinchillas, pet fancy rats, hamsters, and gerbils for your next little loving friend.",
    image: "/images/small_animals_glider.jpg",
    action: "View Small Animals",
  },
];

interface CategoriesProps {
  onOpenDevModal?: (name: string) => void;
}

export default function Categories({ onOpenDevModal }: CategoriesProps) {
  const handleClick = (name: string) => {
    if (onOpenDevModal) {
      onOpenDevModal(`${name} Department (Full Catalog)`);
    }
  };

  return (
    <section className="py-16" id="categories">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleClick(cat.title)}
              className="group relative bg-[#0e1713] border border-white/10 hover:border-[#00d37f]/50 rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.6),0_0_25px_rgba(0,211,127,0.15)] cursor-pointer"
            >
              {/* Image Box */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-[#050a08]/80 backdrop-blur-md border border-white/10 text-[10px] font-semibold text-gray-300 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Lock className="w-2.5 h-2.5 text-[#e2b763]" />
                  Post-Negotiation
                </span>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-[#00d37f] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                  {cat.desc}
                </p>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between mt-auto">
                  <span className="text-xs font-semibold text-[#00d37f]">
                    {cat.action}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#00d37f] border border-white/10 group-hover:border-[#00d37f] flex items-center justify-center text-white group-hover:text-[#04190f] transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
