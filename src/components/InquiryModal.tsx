"use client";

import React, { useState } from "react";
import { X, Send } from "lucide-react";

interface InquiryModalProps {
  isOpen: boolean;
  petName: string;
  onClose: () => void;
}

export default function InquiryModal({ isOpen, petName, onClose }: InquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 1500);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#0e1713] border border-[#00d37f]/40 rounded-2xl p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center border border-white/10"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-12 h-12 rounded-full bg-[#00d37f]/20 border border-[#00d37f] text-[#00d37f] flex items-center justify-center mx-auto mb-3">
              <Send className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-1">
              Inquiry Sent Successfully!
            </h3>
            <p className="text-xs text-gray-300">
              Our Woodstock handlers will check the status of <strong>{petName}</strong> and contact you soon.
            </p>
          </div>
        ) : (
          <div>
            <h3 className="font-heading text-xl font-bold text-white mb-1">
              Inquire / Reserve
            </h3>
            <p className="text-xs text-[#00d37f] font-semibold mb-4">
              Species: {petName}
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#00d37f]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(770) 591-0007"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#00d37f]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#00d37f]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                  Experience / Enclosure Questions
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us if you have an enclosure or need a complete setup..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#00d37f] resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#00b86c] hover:bg-[#00d37f] text-[#04190f] font-bold text-xs py-3 rounded-full flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                {loading ? "Sending..." : "Submit Reservation Inquiry"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
