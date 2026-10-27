"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Sparkles, Lock } from "lucide-react";

interface HeroProps {
  onOpenDevModal?: (name: string) => void;
}

export default function Hero({ onOpenDevModal }: HeroProps) {
  const handleBrowseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenDevModal) {
      onOpenDevModal("Complete Exotic Species & Animal Catalog");
    }
  };

  return (
    <section className="relative min-h-[580px] sm:min-h-[720px] lg:min-h-[780px] flex items-center overflow-hidden" id="home">
      {/* Photorealistic Dinosaur & Exotic Animals Wallpaper */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_dino_wallpaper.jpg"
          alt="Prehistoric dinosaur surrounded by scarlet macaw, python, and iguana in lush jungle at Animal Atlanta"
          fill
          priority
          className="object-cover object-[70%_top] sm:object-center brightness-105 contrast-105 transition-all duration-700"
        />
        {/* Soft, light gradient overlay to let vibrant wallpaper shine while keeping text legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050a08]/80 via-[#050a08]/30 to-transparent sm:bg-gradient-to-r sm:from-[#050a08]/65 sm:via-[#050a08]/25 sm:to-transparent z-10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-20 py-10 sm:py-20">
        <div className="max-w-xl sm:max-w-2xl">
          
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#050a08]/85 backdrop-blur-md border border-[#e2b763]/40 text-[#e2b763] text-[10px] sm:text-xs font-semibold tracking-wide uppercase mb-3 sm:mb-4 shadow-lg">
            <Sparkles className="w-3 h-3 text-[#e2b763] shrink-0" />
            <span className="truncate">Exotic Pets &bull; Feeders &bull; Woodstock, GA</span>
          </div>

          <h1 className="font-heading text-2xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-3 sm:mb-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] tracking-tight">
            Atlanta’s Premier
            <span className="block mt-1 bg-gradient-to-r from-[#00d37f] via-[#46e6a3] to-[#80ffc7] bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
              Exotic Pet Destination
            </span>
          </h1>

          <p className="text-white text-xs sm:text-base leading-relaxed mb-5 sm:mb-7 max-w-lg drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] font-normal">
            <strong className="text-white font-bold">Welcome to Animal Atlanta!</strong> Your trusted destination for healthy captive-bred reptiles, hand-raised birds, small exotic pets, and live feeder supplies in Woodstock, Georgia.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 mb-5 sm:mb-8">
            <button
              onClick={handleBrowseClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00d37f] to-[#00b86c] hover:brightness-110 active:scale-[0.98] text-[#04190f] font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-[0_4px_16px_rgba(0,211,127,0.25)] transition-all cursor-pointer"
            >
              <span>Browse Available Pets</span>
              <ArrowRight className="w-4 h-4 text-[#04190f]" />
            </button>

            <Link
              href="#visit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0e1713]/90 hover:bg-[#15231c] active:scale-[0.98] text-white font-medium text-xs sm:text-sm px-5 py-3 rounded-xl border border-white/15 transition-all text-center"
            >
              <MapPin className="w-4 h-4 text-[#00d37f]" />
              <span>Visit Woodstock Store</span>
            </Link>
          </div>

          {/* Clean Mobile-Optimized Stats Bar */}
          <div className="grid grid-cols-3 divide-x divide-white/10 bg-[#0e1713]/85 backdrop-blur-md p-2.5 sm:p-4 rounded-xl border border-white/10 shadow-xl max-w-md">
            <div className="text-center px-1 sm:px-2">
              <div className="font-heading text-sm sm:text-lg font-bold text-white tracking-tight">
                10am<span className="text-[#00d37f]">-</span>7pm
              </div>
              <div className="text-[9px] sm:text-[10px] uppercase text-gray-400 tracking-wider mt-0.5 font-semibold">
                Mon &ndash; Sat
              </div>
            </div>

            <div className="text-center px-1 sm:px-2">
              <div className="font-heading text-sm sm:text-lg font-bold text-white tracking-tight">
                12pm<span className="text-[#00d37f]">-</span>5pm
              </div>
              <div className="text-[9px] sm:text-[10px] uppercase text-gray-400 tracking-wider mt-0.5 font-semibold">
                Sunday
              </div>
            </div>

            <div className="text-center px-1 sm:px-2">
              <div className="font-heading text-sm sm:text-lg font-bold text-white tracking-tight">
                100<span className="text-[#00d37f]">%</span>
              </div>
              <div className="text-[9px] sm:text-[10px] uppercase text-gray-400 tracking-wider mt-0.5 font-semibold">
                Fresh Feeders
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
