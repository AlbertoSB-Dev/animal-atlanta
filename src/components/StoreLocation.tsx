"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, ExternalLink } from "lucide-react";

export default function StoreLocation() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
    }, 800);
  };

  return (
    <section className="py-20 bg-[#080f0c]" id="visit">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Official Store Info */}
          <div className="lg:col-span-5 bg-[#0e1713] border border-white/10 rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#e2b763] mb-4">
                <MapPin className="w-3.5 h-3.5" />
                <span>Woodstock / Metro Atlanta</span>
              </div>

              <h2 className="font-heading text-3xl font-extrabold text-white mb-6">
                Visit Animal Atlanta
              </h2>

              <div className="space-y-6 mb-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#00d37f]/10 border border-[#00d37f]/30 flex items-center justify-center text-[#00d37f] shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">Official Store Address</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <strong>1910 Eagle Dr #1500</strong><br />
                      Woodstock, GA 30189<br />
                      <span className="text-xs text-gray-500">
                        (Serving Woodstock, Canton, Marietta, Roswell, and Greater Atlanta)
                      </span>
                    </p>
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#00d37f]/10 border border-[#00d37f]/30 flex items-center justify-center text-[#00d37f] shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">Direct Contact</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Phone:{" "}
                      <a href="tel:7705910007" className="text-[#00d37f] font-bold hover:underline">
                        (770) 591-0007
                      </a>
                      <br />
                      Email:{" "}
                      <a href="mailto:AnimalAtl13@gmail.com" className="text-white hover:underline">
                        AnimalAtl13@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#00d37f]/10 border border-[#00d37f]/30 flex items-center justify-center text-[#00d37f] shrink-0 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <h4 className="font-bold text-white text-sm mb-2">Showroom Hours</h4>
                    <table className="w-full text-xs text-gray-300">
                      <tbody>
                        <tr className="border-b border-white/5 py-1">
                          <td className="py-1 text-gray-400">Monday &ndash; Saturday</td>
                          <td className="py-1 text-right font-bold text-white">10:00 AM &ndash; 7:00 PM</td>
                        </tr>
                        <tr className="py-1">
                          <td className="py-1 text-gray-400">Sunday</td>
                          <td className="py-1 text-right font-bold text-white">12:00 PM &ndash; 5:00 PM</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=1910+Eagle+Dr+1500+Woodstock+GA+30189"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm py-3 px-6 rounded-full border border-white/10 hover:border-white/20 transition-all mt-4"
            >
              <ExternalLink className="w-4 h-4 text-[#00d37f]" />
              <span>Open Directions in Google Maps</span>
            </a>
          </div>

          {/* Right Column: Interactive Visit & Inquiry Form */}
          <div className="lg:col-span-7 bg-[#0e1713] border border-[#00d37f]/30 rounded-2xl p-8 sm:p-10 shadow-2xl flex flex-col justify-between">
            {formSubmitted ? (
              <div className="my-auto text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#00d37f]/20 border border-[#00d37f] text-[#00d37f] flex items-center justify-center mx-auto mb-4">
                  <Send className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">
                  Thank You! We Received Your Message
                </h3>
                <p className="text-gray-300 text-sm max-w-md mx-auto mb-6">
                  Our Woodstock store handlers will review your note and contact you shortly at the provided number.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="bg-[#00d37f]/15 hover:bg-[#00d37f] text-[#00d37f] hover:text-[#04190f] text-xs font-bold px-6 py-2.5 rounded-full border border-[#00d37f]/40 transition-all"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <div>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">
                  Contact Store / Request Animal Hold
                </h3>
                <p className="text-gray-300 text-sm mb-6">
                  Have a question about bird grooming, live feeder supply, or available species? Drop us a note!
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Smith"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00d37f] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(770) 000-0000"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00d37f] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00d37f] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                        I am Interested In
                      </label>
                      <select
                        className="w-full bg-[#0a130f] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00d37f] transition-colors"
                      >
                        <option value="Live Feeders">The Feeder Bar (Insects / Rodents)</option>
                        <option value="Birds">Exotic Birds &amp; Parrots</option>
                        <option value="Reptiles">Reptiles &amp; Pythons</option>
                        <option value="Grooming">Bird Grooming (Wings/Nails/Beak)</option>
                        <option value="Boarding">Pet Boarding / Babysitting</option>
                        <option value="Arachnids">Tarantulas &amp; Inverts</option>
                        <option value="Small Animals">Small Animals (Bunnies, Guinea Pigs)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                        Planned Visit Date
                      </label>
                      <input
                        type="date"
                        required
                        className="w-full bg-[#0a130f] border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-[#00d37f] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                      Special Questions or Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us what size feeder, species, or service you are inquiring about..."
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00d37f] transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#00b86c] hover:bg-[#00d37f] text-[#04190f] font-bold text-sm py-3.5 rounded-full flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(0,211,127,0.35)] transition-all hover:shadow-[0_6px_25px_rgba(0,211,127,0.5)] cursor-pointer mt-2"
                  >
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message to Woodstock Store</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>

        </div>

        {/* Interactive Google Maps Embed for Animal Atlanta */}
        <div className="mt-12 w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0e1713]">
          <div className="px-6 py-4 bg-[#0a130f] border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <MapPin className="w-4 h-4 text-[#00d37f]" />
              <span>Animal Atlanta &bull; 1910 Eagle Dr #1500, Woodstock, GA 30189</span>
            </div>
            <a
              href="https://maps.google.com/?q=1910+Eagle+Dr+1500+Woodstock+GA+30189"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#e2b763] hover:text-[#edd08c] flex items-center gap-1.5 transition-colors"
            >
              <span>Open in Google Maps App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d446665.12574338017!2d-85.09568793979243!3d34.04174032502661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f56a224524a6a1%3A0xc7b18c38de72cdf8!2sAnimal%20Atlanta!5e1!3m2!1spt-BR!2sbr!4v1793074264791!5m2!1spt-BR!2sbr"
            width="100%"
            height="420"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Animal Atlanta Google Maps Location"
          />
        </div>

      </div>
    </section>
  );
}
