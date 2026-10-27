"use client";

import React from "react";
import { X, Sparkles, ShieldAlert } from "lucide-react";

interface DevModalProps {
  isOpen: boolean;
  featureName: string;
  onClose: () => void;
}

export default function DevModal({ isOpen, featureName, onClose }: DevModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md bg-[#0e1713] border border-[#e2b763]/50 rounded-2xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(226,183,99,0.15)] text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center border border-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="w-14 h-14 rounded-full bg-[#e2b763]/15 border border-[#e2b763] text-[#e2b763] flex items-center justify-center mx-auto mb-4">
          <Sparkles className="w-7 h-7" />
        </div>

        <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
          Desenvolvimento Após Negociação do Projeto
        </h3>

        <p className="text-sm text-[#00d37f] font-medium mb-6">
          Development upon project negotiation.
        </p>

        <button
          onClick={onClose}
          className="w-full bg-[#e2b763] hover:bg-[#edd08c] text-[#050a08] font-bold text-sm py-3 rounded-full transition-all cursor-pointer shadow-lg"
        >
          OK &bull; Fechar
        </button>
      </div>
    </div>
  );
}
