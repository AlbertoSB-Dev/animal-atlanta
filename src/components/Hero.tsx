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
    <section className="relative min-h-[720px] lg:min-h-[800px] flex items-center overflow-hidden" id="home">
      {/* Photorealistic Dinosaur & Exotic Animals Wallpaper */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_dino_wallpaper.jpg"
          alt="Prehistoric dinosaur surrounded by scarlet macaw, python, and iguana in lush jungle at Animal Atlanta"
          fill
          priority
          className="object-cover object-right md:object-center transition-all duration-700"
        />
        {/* Seamless dark overlay for readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050a08] via-[#050a08]/85 md:via-[#050a08]/70 to-transparent z-10 w-full lg:w-3/5" />
        {/* Soft top and bottom fades */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050a08] via-transparent to-[#050a08]/60 z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-20 py-24">
        <div className="max-w-2xl">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#050a08]/80 backdrop-blur-md border border-[#e2b763]/40 text-[#e2b763] text-xs font-bold tracking-wider uppercase mb-6 shadow-xl">
            <Sparkles className="w-3.5 h-3.5 text-[#e2b763]" />
            <span>Exotic Pets &bull; Prehistoric &bull; Woodstock, GA</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] mb-6 drop-shadow-xl">
            Atlanta’s Premier <br />
            <span className="bg-gradient-to-r from-[#00d37f] via-[#46e6a3] to-[#80ffc7] bg-clip-text text-transparent">
              Exotic Pet Destination
            </span>
          </h1>

          <div className="bg-[#050a08]/60 backdrop-blur-md border border-white/10 p-5 rounded-2xl mb-8 max-w-xl shadow-2xl">
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
              <strong className="text-white">Welcome to the New Animal Atlanta! New Owners. New Location.</strong>{" "}
              Endless adventure for you and your future companion. Healthy captive-bred reptiles, hand-raised birds, small mammals, live &amp; frozen feeders, and expert care in Woodstock, Georgia.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <button
              onClick={handleBrowseClick}
              className="inline-flex items-center justify-center gap-2.5 bg-[#00b86c] hover:bg-[#00d37f] text-[#04190f] font-bold text-base px-7 py-3.5 rounded-full shadow-[0_4px_25px_rgba(0,211,127,0.35)] hover:shadow-[0_8px_35px_rgba(0,211,127,0.5)] transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Browse Available Pets</span>
              <Lock className="w-4 h-4 text-[#04190f]" />
            </button>

            <Link
              href="#visit"
              className="inline-flex items-center justify-center gap-2.5 bg-[#050a08]/80 hover:bg-[#050a08] text-white font-semibold text-base px-6 py-3.5 rounded-full border border-white/20 hover:border-white/40 backdrop-blur-md transition-all hover:-translate-y-0.5"
            >
              <MapPin className="w-4 h-4 text-[#00d37f]" />
              <span>Visit Woodstock Store</span>
            </Link>
          </div>

          {/* Quick Stats Badges with Glassmorphism */}
          <div className="grid grid-cols-3 gap-4 max-w-lg bg-[#050a08]/75 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl">
            <div>
              <div className="font-heading text-xl sm:text-2xl font-extrabold text-white">
                10am<span className="text-[#00d37f]">-</span>7pm
              </div>
              <div className="text-[10px] uppercase text-gray-300 tracking-wider mt-0.5 font-semibold">
                Mon &ndash; Sat
              </div>
            </div>

            <div>
              <div className="font-heading text-xl sm:text-2xl font-extrabold text-white">
                12pm<span className="text-[#00d37f]">-</span>5pm
              </div>
              <div className="text-[10px] uppercase text-gray-300 tracking-wider mt-0.5 font-semibold">
                Sunday Hours
              </div>
            </div>

            <div>
              <div className="font-heading text-xl sm:text-2xl font-extrabold text-white">
                100<span className="text-[#00d37f]">%</span>
              </div>
              <div className="text-[10px] uppercase text-gray-300 tracking-wider mt-0.5 font-semibold">
                Live Feeders
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
