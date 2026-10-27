"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import TrustPillars from "@/components/TrustPillars";
import FeederBar from "@/components/FeederBar";
import ServicesSection from "@/components/ServicesSection";
import StoreLocation from "@/components/StoreLocation";
import Footer from "@/components/Footer";
import DevModal from "@/components/DevModal";

export default function Home() {
  const [devFeature, setDevFeature] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section with Dinosaur & Exotic Animals Wallpaper */}
      <Hero onOpenDevModal={(feature) => setDevFeature(feature)} />

      {/* 4 Main Categories (Birds, Reptiles, Arachnids, Small Animals) */}
      <Categories onOpenDevModal={(feature) => setDevFeature(feature)} />

      {/* 4 Trust Pillars */}
      <TrustPillars />

      {/* The Feeder Bar (Insects & Rodents Pricing) */}
      <FeederBar />

      {/* Specialized Grooming & Boarding Services */}
      <ServicesSection />

      {/* Real Store Location, Hours & Direct Contact Form */}
      <StoreLocation />

      {/* Footer */}
      <Footer />

      {/* Development After Negotiation Modal */}
      <DevModal
        isOpen={!!devFeature}
        featureName={devFeature || ""}
        onClose={() => setDevFeature(null)}
      />
    </div>
  );
}
