"useclient";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Search, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-[#042517] via-[#0b3d27] to-[#042517] border-b border-[#00d37f]/25 py-2 px-4 text-center text-xs md:text-sm font-medium text-[#92eec4]">
        <div className="container mx-auto flex items-center justify-center gap-3">
          <span className="bg-[#00d37f] text-[#042013] text-[11px] font-bold uppercase px-2.5 py-0.5 rounded-full">
            New Owners &amp; Location
          </span>
          <span>
            Now Open at 1910 Eagle Dr #1500, Woodstock, GA! Call{" "}
            <a href="tel:7705910007" className="underline font-bold text-white hover:text-[#00d37f]">
              (770) 591-0007
            </a>
          </span>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md border-b ${
          isScrolled
            ? "bg-[#050a08]/95 border-white/10 shadow-xl"
            : "bg-[#080f0c]/85 border-white/5"
        }`}
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#1a382c] to-[#0a1812] border-2 border-[#e2b763] flex items-center justify-center shadow-[0_0_15px_rgba(226,183,99,0.25)] group-hover:scale-105 group-hover:border-[#00d37f] transition-all">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 stroke-[#e2b763] group-hover:stroke-[#00d37f] transition-colors"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93V17c0 .55-.45 1-1 1s-1-.45-1-1v-.07C8.06 16.48 6 14.02 6 11c0-.55.45-1 1-1s1 .45 1 1c0 2.21 1.79 4 4 4s4-1.79 4-4c0-.55.45-1 1-1s1 .45 1 1c0 3.02-2.06 5.48-5 5.93zM12 4c1.66 0 3 1.34 3 3 0 1.31-.83 2.42-2 2.83V11c0 .55-.45 1-1 1s-1-.45-1-1V9.83C9.83 9.42 9 8.31 9 7c0-1.66 1.34-3 3-3z"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl font-extrabold tracking-wider uppercase bg-gradient-to-r from-white via-white to-[#e2b763] bg-clip-text text-transparent">
                Animal Atlanta
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#00d37f] font-semibold">
                Exotics &bull; Feeders &bull; Care
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link href="#home" className="text-sm font-medium text-white hover:text-[#00d37f] transition-colors">
              Home
            </Link>
            <Link href="#birds" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Birds
            </Link>
            <Link href="#reptiles" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Reptiles
            </Link>
            <Link href="#arachnids" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Arachnids
            </Link>
            <Link href="#small-animals" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Small Animals
            </Link>
            <Link href="#feeders" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              The Feeder Bar
            </Link>
            <Link href="#services" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="#visit" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Visit Us
            </Link>
          </nav>

          {/* Header Right Phone Badge */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="tel:7705910007"
              className="flex items-center gap-2 sm:gap-3 bg-white/5 hover:bg-[#00d37f]/15 border border-white/10 hover:border-[#00d37f]/40 p-2 sm:py-2 sm:px-4 rounded-full transition-all group"
              title="Call Animal Atlanta (770) 591-0007"
            >
              <div className="w-7 h-7 rounded-full bg-[#00d37f]/15 flex items-center justify-center text-[#00d37f] group-hover:scale-110 transition-transform shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div className="hidden sm:flex flex-col text-left">
                <span className="text-[10px] uppercase text-gray-400 font-semibold tracking-wider">Call Store Direct</span>
                <span className="text-xs md:text-sm font-bold text-white tracking-wide">(770) 591-0007</span>
              </div>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-300 hover:text-white p-2 rounded-lg bg-white/5 border border-white/10"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#080f0c] border-b border-white/10 px-6 py-4 flex flex-col gap-4">
            <Link onClick={() => setMobileMenuOpen(false)} href="#home" className="text-sm font-medium text-white">Home</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="#birds" className="text-sm font-medium text-gray-300">Birds</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="#reptiles" className="text-sm font-medium text-gray-300">Reptiles</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="#arachnids" className="text-sm font-medium text-gray-300">Arachnids</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="#small-animals" className="text-sm font-medium text-gray-300">Small Animals</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="#feeders" className="text-sm font-medium text-gray-300">The Feeder Bar</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="#services" className="text-sm font-medium text-gray-300">Services</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="#visit" className="text-sm font-medium text-gray-300">Visit &amp; Contact</Link>
          </div>
        )}
      </header>
    </>
  );
}
