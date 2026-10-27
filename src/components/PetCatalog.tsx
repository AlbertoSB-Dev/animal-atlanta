"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface PetItem {
  id: string;
  name: string;
  category: "birds" | "reptiles" | "arachnids" | "small-animals";
  categoryLabel: string;
  tag: string;
  tagType: "ready" | "rare";
  spec1: string;
  spec2: string;
  note: string;
  image: string;
}

const petsData: PetItem[] = [
  {
    id: "1",
    name: "Emerald Tree Python (Morelia viridis)",
    category: "reptiles",
    categoryLabel: "Reptiles • Pythons",
    tag: "In Stock",
    tagType: "ready",
    spec1: "Frozen/Thawed Rodents",
    spec2: "Intermediate Display",
    note: "Bioactive Ready",
    image: "/images/reptiles_python.jpg",
  },
  {
    id: "2",
    name: "Scarlet Macaw (Juvenile)",
    category: "birds",
    categoryLabel: "Exotic Birds",
    tag: "Hand Raised Baby",
    tagType: "rare",
    spec1: "DNA Sexed • Weaned",
    spec2: "Social & Affectionate",
    note: "Cage Packages Available",
    image: "/images/birds_macaw.jpg",
  },
  {
    id: "3",
    name: "Mexican Redknee Tarantula (B. hamorii)",
    category: "arachnids",
    categoryLabel: "Arachnids",
    tag: "Docile Species",
    tagType: "ready",
    spec1: "Calm • Great First Pet",
    spec2: "Crickets & Dubia Roaches",
    note: "Habitat Kits in Stock",
    image: "/images/arachnids_tarantula.jpg",
  },
  {
    id: "4",
    name: "Sugar Glider Joeys (Pair)",
    category: "small-animals",
    categoryLabel: "Small Animals",
    tag: "Bonded Joeys",
    tagType: "ready",
    spec1: "Best Kept in Pairs",
    spec2: "Nectar & Feeder Insects",
    note: "Bonding Pouch Included",
    image: "/images/small_animals_glider.jpg",
  },
  {
    id: "5",
    name: "Biak Green Tree Python",
    category: "reptiles",
    categoryLabel: "Reptiles • Pythons",
    tag: "Select Bloodline",
    tagType: "rare",
    spec1: "Live/Frozen Rodents",
    spec2: "Captive Bred",
    note: "Verified Healthy Eater",
    image: "/images/hero_python.jpg",
  },
  {
    id: "6",
    name: "Bioactive Rainforest Terrarium",
    category: "reptiles",
    categoryLabel: "Habitats & Systems",
    tag: "Custom Setup",
    tagType: "ready",
    spec1: "Misting System & LED",
    spec2: "Live Tropical Epiphytes",
    note: "Built to Order",
    image: "/images/terrarium_showcase.jpg",
  },
];

interface PetCatalogProps {
  onSelectPet: (petName: string) => void;
}

export default function PetCatalog({ onSelectPet }: PetCatalogProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredPets =
    activeFilter === "all"
      ? petsData
      : petsData.filter((p) => p.category === activeFilter);

  return (
    <section className="py-20 bg-gradient-to-b from-[#080f0c] via-[#0d2118]/50 to-[#080f0c]" id="catalog">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Currently Available Companions &amp; Habitats
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            Explore healthy pets, hand-raised babies, and custom bioactive setups available in our Woodstock showroom.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {[
            { id: "all", label: "All Species" },
            { id: "birds", label: "Exotic Birds" },
            { id: "reptiles", label: "Reptiles & Pythons" },
            { id: "arachnids", label: "Arachnids" },
            { id: "small-animals", label: "Small Animals" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === tab.id
                  ? "bg-[#00b86c] text-[#04190f] shadow-[0_4px_15px_rgba(0,211,127,0.3)]"
                  : "bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPets.map((pet) => (
            <div
              key={pet.id}
              className="bg-[#0e1713] border border-white/10 hover:border-[#00d37f]/50 rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Pet Image */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={pet.image}
                  alt={pet.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <span
                  className={`absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md ${
                    pet.tagType === "ready"
                      ? "bg-[#00d37f]/20 border border-[#00d37f] text-[#8cffc8]"
                      : "bg-[#e2b763]/20 border border-[#e2b763] text-[#ffd88a]"
                  }`}
                >
                  {pet.tag}
                </span>
              </div>

              {/* Pet Info */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#e2b763] mb-1">
                  {pet.categoryLabel}
                </span>
                <h3 className="font-heading text-lg font-bold text-white mb-3">
                  {pet.name}
                </h3>

                <div className="flex flex-col gap-1 text-xs text-gray-400 mb-6">
                  <div>
                    <span className="text-gray-500">Diet/Specs:</span>{" "}
                    <span className="text-gray-300 font-medium">{pet.spec1}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Profile:</span>{" "}
                    <span className="text-gray-300 font-medium">{pet.spec2}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                  <span className="text-xs font-semibold text-[#00d37f] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {pet.note}
                  </span>

                  <button
                    onClick={() => onSelectPet(pet.name)}
                    className="inline-flex items-center gap-1.5 bg-[#00d37f]/15 hover:bg-[#00d37f] text-[#00d37f] hover:text-[#04190f] text-xs font-bold px-3.5 py-1.5 rounded-full border border-[#00d37f]/40 transition-all"
                  >
                    <span>Inquire / Hold</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
