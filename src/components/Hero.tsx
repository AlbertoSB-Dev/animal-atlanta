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
    <section className="relative min-h-[640px] sm:min-h-[720px] lg:min-h-[800px] flex items-center overflow-hidden" id="home">
      {/* Photorealistic Dinosaur & Exotic Animals Wallpaper */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_dino_wallpaper.jpg"
          alt="Prehistoric dinosaur surrounded by scarlet macaw, python, and iguana in lush jungle at Animal Atlanta"
          fill
          priority
          className="object-cover object-[68%_center] sm:object-center transition-all duration-700"
        />
        {/* Responsive dark gradient overlay: subtle vertical fade on mobile, left-to-right fade on desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050a08] via-[#050a08]/80 to-[#050a08]/30 sm:bg-gradient-to-r sm:from-[#050a08] sm:via-[#050a08]/85 sm:to-transparent z-10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-20 py-16 sm:py-24">
        <div className="max-w-2xl">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#050a08]/85 backdrop-blur-md border border-[#e2b763]/40 text-[#e2b763] text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-4 shadow-xl">
            <Sparkles className="w-3 h-3 text-[#e2b763]" />
            <span>Exotic Pets &bull; Feeders &bull; Woodstock, GA</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-4 drop-shadow-xl">
            Atlanta’s Premier <br />
            <span className="bg-gradient-to-r from-[#00d37f] via-[#46e6a3] to-[#80ffc7] bg-clip-text text-transparent">
              Exotic Pet Destination
            </span>
          </h1>

          <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-6 max-w-xl drop-shadow">
            <strong className="text-white">Welcome to Animal Atlanta!</strong> Your trusted destination for healthy captive-bred reptiles, hand-raised birds, small exotic mammals, and live feeder supplies in Woodstock, Georgia.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 mb-6 sm:mb-8">
            <button
              onClick={handleBrowseClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00d37f] hover:bg-[#20e695] active:scale-[0.98] text-[#04190f] font-bold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-[0_4px_20px_rgba(0,211,127,0.3)] transition-all cursor-pointer"
            >
              <span>Browse Available Pets</span>
              <ArrowRight className="w-4 h-4 text-[#04190f]" />
            </button>

            <Link
              href="#visit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0e1713]/90 hover:bg-[#15231c] active:scale-[0.98] text-white font-medium text-sm sm:text-base px-6 py-3.5 rounded-full border border-white/20 transition-all text-center"
            >
              <MapPin className="w-4 h-4 text-[#00d37f]" />
              <span>Visit Woodstock Store</span>
            </Link>
          </div>

          {/* Clean Mobile-Optimized Stats Bar */}
          <div className="flex items-center justify-between divide-x divide-white/10 bg-[#0e1713]/85 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/10 shadow-xl max-w-lg">
            <div className="text-center flex-1 px-2">
              <div className="font-heading text-base sm:text-xl font-extrabold text-white">
                10am<span className="text-[#00d37f]">-</span>7pm
              </div>
              <div className="text-[9px] sm:text-[10px] uppercase text-gray-400 tracking-wider mt-0.5 font-semibold">
                Mon &ndash; Sat
              </div>
            </div>

            <div className="text-center flex-1 px-2">
              <div className="font-heading text-base sm:text-xl font-extrabold text-white">
                12pm<span className="text-[#00d37f]">-</span>5pm
              </div>
              <div className="text-[9px] sm:text-[10px] uppercase text-gray-400 tracking-wider mt-0.5 font-semibold">
                Sunday
              </div>
            </div>

            <div className="text-center flex-1 px-2">
              <div className="font-heading text-base sm:text-xl font-extrabold text-white">
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
