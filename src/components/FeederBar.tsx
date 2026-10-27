"use client";

import React, { useState } from "react";
import { Bug, Sparkles } from "lucide-react";

export default function FeederBar() {
  const [activeTab, setActiveTab] = useState<"insects" | "rodents">("insects");

  return (
    <section className="py-10 sm:py-20 bg-gradient-to-b from-[#0c2016]/40 via-[#070e0b] to-[#050a08] border-t border-white/10" id="feeders">
      <div className="container mx-auto px-3.5 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00d37f]/10 border border-[#00d37f]/30 text-[#00d37f] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5">
            <span>🐍 The Feeder Bar 🦎</span>
          </div>
          <h2 className="font-heading text-xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-2 tracking-tight">
            Live &amp; Frozen Feeders Always in Stock
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
            Fresh feeder insects &amp; frozen rodents always ready. Need sizing advice? Our team is ready to help!
          </p>
        </div>

        {/* Mobile Tab Switcher */}
        <div className="flex lg:hidden items-center justify-center gap-2 mb-6 p-1 bg-[#0e1713] rounded-xl border border-white/10 max-w-xs mx-auto">
          <button
            onClick={() => setActiveTab("insects")}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
              activeTab === "insects"
                ? "bg-[#00d37f] text-[#04190f] shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            🦗 Insects
          </button>
          <button
            onClick={() => setActiveTab("rodents")}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
              activeTab === "rodents"
                ? "bg-[#e2b763] text-[#04190f] shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            🐭 Rodents
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
          
          {/* Insects Card - Visible if desktop OR activeTab === 'insects' */}
          <div className={`bg-[#0e1713] border border-white/10 hover:border-[#00d37f]/40 rounded-xl sm:rounded-2xl p-4 sm:p-7 transition-all shadow-lg ${
            activeTab === "insects" ? "block" : "hidden lg:block"
          }`}>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 flex-wrap gap-2">
              <h3 className="font-heading text-base sm:text-xl font-bold text-white flex items-center gap-2 tracking-tight">
                <span className="text-lg sm:text-2xl">🦗</span> Live Feeder Insects
              </h3>
              <span className="bg-[#00d37f]/15 border border-[#00d37f]/40 text-[#00d37f] text-[9px] sm:text-[11px] font-bold uppercase px-2 py-0.5 rounded-full">
                Fresh Batches
              </span>
            </div>

            <div className="overflow-x-auto -mx-2 px-2">
              <table className="w-full text-left border-collapse min-w-[320px]">
                <thead>
                  <tr className="text-xs uppercase tracking-wider text-gray-400 border-b border-white/5">
                    <th className="pb-3">Feeder Type</th>
                    <th className="pb-3">Quantity / Size</th>
                    <th className="pb-3 text-right">Price</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-white/5">
                  <tr>
                    <td className="py-2.5 font-semibold text-white">Dubia Roaches</td>
                    <td className="py-2.5 text-gray-300">Small (25 count)</td>
                    <td className="py-2.5 text-right font-bold text-[#00d37f]">$5.00</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-semibold text-white">Dubia Roaches</td>
                    <td className="py-2.5 text-gray-300">Medium (25 count)</td>
                    <td className="py-2.5 text-right font-bold text-[#00d37f]">$6.00</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-semibold text-white">Dubia Roaches</td>
                    <td className="py-2.5 text-gray-300">Large (25 count)</td>
                    <td className="py-2.5 text-right font-bold text-[#00d37f]">$7.00</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-semibold text-white">Feeder Crickets</td>
                    <td className="py-2.5 text-gray-300">Small, Medium or Large (per dozen)</td>
                    <td className="py-2.5 text-right font-bold text-[#00d37f]">$1.00</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-semibold text-white">Superworms</td>
                    <td className="py-2.5 text-gray-300">25 count cup</td>
                    <td className="py-2.5 text-right font-bold text-[#00d37f]">$3.00</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-semibold text-white">Mealworms</td>
                    <td className="py-2.5 text-gray-300">50 count cup</td>
                    <td className="py-2.5 text-right font-bold text-[#00d37f]">$4.00</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-semibold text-white">Wax Worms</td>
                    <td className="py-2.5 text-gray-300">50 count cup</td>
                    <td className="py-2.5 text-right font-bold text-[#00d37f]">$5.00</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-semibold text-white">Hornworms</td>
                    <td className="py-2.5 text-gray-300">Individual live worm</td>
                    <td className="py-2.5 text-right font-bold text-[#00d37f]">$1.00 / ea</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Rodents Card */}
          <div className={`bg-[#0e1713] border border-white/10 hover:border-[#00d37f]/40 rounded-xl sm:rounded-2xl p-4 sm:p-7 transition-all shadow-lg ${
            activeTab === "rodents" ? "block" : "hidden lg:block"
          }`}>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 flex-wrap gap-2">
              <h3 className="font-heading text-base sm:text-xl font-bold text-white flex items-center gap-2 tracking-tight">
                <span className="text-lg sm:text-2xl">🐭</span> Live &amp; Frozen Rodents
              </h3>
              <span className="bg-[#e2b763]/15 border border-[#e2b763] text-[#e2b763] text-[9px] sm:text-[11px] font-bold uppercase px-2 py-0.5 rounded-full">
                Frozen &amp; Live Available
              </span>
            </div>

            <div className="overflow-x-auto -mx-2 px-2">
              <table className="w-full text-left border-collapse min-w-[320px]">
                <thead>
                  <tr className="text-xs uppercase tracking-wider text-gray-400 border-b border-white/5">
                    <th className="pb-3">Category</th>
                    <th className="pb-3">Size Stage</th>
                    <th className="pb-3 text-right">Price</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-white/5">
                  <tr>
                    <td className="py-2.5 font-semibold text-white">Feeder Mice</td>
                    <td className="py-2.5 text-gray-300">Pinkie Mouse</td>
                    <td className="py-2.5 text-right font-bold text-[#00d37f]">$2.00</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-semibold text-white">Feeder Mice</td>
                    <td className="py-2.5 text-gray-300">Fuzzie Mouse</td>
                    <td className="py-2.5 text-right font-bold text-[#00d37f]">$2.00</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-semibold text-white">Feeder Mice</td>
                    <td className="py-2.5 text-gray-300">Adult Mouse</td>
                    <td className="py-2.5 text-right font-bold text-[#00d37f]">$3.50</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-semibold text-white">Feeder Rats</td>
                    <td className="py-2.5 text-gray-300">Pinkie / Fuzzie Rat</td>
                    <td className="py-2.5 text-right font-bold text-[#00d37f]">$4.00</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-semibold text-white">Feeder Rats</td>
                    <td className="py-2.5 text-gray-300">Crawler / Weanling Rat</td>
                    <td className="py-2.5 text-right font-bold text-[#00d37f]">$4.00</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-semibold text-white">Feeder Rats</td>
                    <td className="py-2.5 text-gray-300">Small Rat</td>
                    <td className="py-2.5 text-right font-bold text-[#00d37f]">$5.00</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-semibold text-white">Feeder Rats</td>
                    <td className="py-2.5 text-gray-300">Medium Rat</td>
                    <td className="py-2.5 text-right font-bold text-[#00d37f]">$7.00</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-semibold text-white">Feeder Rats</td>
                    <td className="py-2.5 text-gray-300">Large ($9) &bull; Jumbo ($12) &bull; Colossal ($13)</td>
                    <td className="py-2.5 text-right font-bold text-[#00d37f]">$9 &ndash; $13</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
