import React, { useState } from 'react';
import { X, Star, ShieldCheck, User } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = React.memo(({ isOpen, onClose }) => {
  const [imageError, setImageError] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-4">
      <div className="absolute inset-0 bg-[#02040a]/92" onClick={onClose} />

      <div className="relative w-full sm:max-w-5xl bg-white rounded-t-[32px] sm:rounded-[40px] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.7)] max-h-[92vh] sm:max-h-[90vh] flex flex-col"
        style={{ animation: 'slideUp 0.4s cubic-bezier(0.16,1,0.3,1)' }}
      >
        {/* Mobile: hero image banner */}
        <div className="sm:hidden relative w-full h-44 bg-slate-100 overflow-hidden shrink-0">
          {!imageError ? (
            <img
              src="/assets/temp.png"
              alt="Jonah Portrait"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-slate-300">
              <User className="w-16 h-16" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/60" />

          {/* Official steward badge */}
          <div className="absolute bottom-4 left-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-black/80 backdrop-blur border border-white/20 rounded-xl">
              <div className="p-0.5 rounded bg-amber-400/20">
                <ShieldCheck className="w-3 h-3 text-amber-400" />
              </div>
              <span className="text-[9px] font-black tracking-[0.3em] text-white uppercase">OFFICIAL STEWARD</span>
            </div>
          </div>

          {/* Mobile close button over image */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur text-white/80 hover:text-white transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Desktop: side-by-side layout */}
        <div className="hidden sm:flex flex-row flex-1 overflow-hidden">

          {/* Portrait */}
          <div className="relative w-5/12 overflow-hidden bg-slate-100 flex items-center justify-center shrink-0">
            {!imageError ? (
              <img
                src="/assets/temp.png"
                alt="Jonah Portrait"
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-slate-300">
                <User className="w-32 h-32" />
                <span className="text-[10px] font-black tracking-widest uppercase mt-4">Asset Unavailable</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 pointer-events-none" />
            <div className="absolute bottom-6 left-6">
              <div className="flex items-center gap-2 px-5 py-2.5 bg-black/90 backdrop-blur border border-white/20 rounded-xl">
                <div className="p-1 rounded bg-amber-400/20">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-[10px] font-black tracking-[0.3em] text-white uppercase">OFFICIAL STEWARD</span>
              </div>
            </div>
          </div>

          {/* Briefing */}
          <div className="relative w-7/12 p-8 lg:p-12 bg-white flex flex-col justify-center overflow-y-auto">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-50 hover:bg-slate-100 transition-all group z-20"
            >
              <X className="w-4 h-4 text-slate-300 group-hover:text-slate-900" />
            </button>
            <BriefingContent onClose={onClose} />
          </div>
        </div>

        {/* Mobile: scrollable briefing content */}
        <div className="sm:hidden flex-1 overflow-y-auto px-5 pt-5 pb-6 bg-white">
          <BriefingContent onClose={onClose} />
        </div>
      </div>
    </div>
  );
});

function BriefingContent({ onClose }: { onClose: () => void }) {
  return (
    <div className="space-y-5 sm:space-y-8">
      <div className="flex items-center gap-3">
        <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 fill-amber-500" />
        <span className="text-[9px] sm:text-[11px] font-black tracking-[0.4em] text-amber-600/80 uppercase">
          ECOSYSTEM VISIONARY LEADERSHIP
        </span>
      </div>

      <div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-lexend font-black text-[#0c1222] tracking-tighter leading-none mb-3">
          Jonah <span className="text-slate-200">Stevens</span>
        </h2>
        <div className="flex items-center gap-4">
          <div className="h-[2px] w-10 bg-amber-500/40" />
          <span className="text-[9px] sm:text-[11px] font-black tracking-[0.4em] text-amber-600/60 uppercase">
            FOUNDER & CHIEF ARCHITECT
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-slate-600 text-sm leading-relaxed font-medium">
          Jonah serves as the primary architect and bridge for global change. A visionary leader with roots in the classrooms of New York City, he combines decades of educational advocacy with high-stakes strategic growth.
        </p>
        <p className="text-slate-600 text-sm leading-relaxed font-medium">
          At the heart of his mission is a profound commitment to family values. As a dedicated family man, Jonah believes that true stewardship begins at home.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-8 pt-5 border-t border-slate-100">
        <div>
          <span className="block text-[8px] sm:text-[10px] font-black text-slate-400 tracking-widest uppercase mb-0.5">BASE OF OPERATIONS</span>
          <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">Miami / Santo Domingo</span>
        </div>
        <div>
          <span className="block text-[8px] sm:text-[10px] font-black text-slate-400 tracking-widest uppercase mb-0.5">ACCESS CLEARANCE</span>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-base sm:text-lg font-bold text-emerald-600 tracking-tight">Global Steward</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-50">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-amber-500" />
          <span className="text-[8px] sm:text-[10px] font-black text-slate-400 tracking-widest uppercase">
            STRIKING BALANCE SINCE 1998
          </span>
        </div>
        <button
          onClick={onClose}
          className="px-5 sm:px-8 py-3 sm:py-4 bg-[#0c1222] hover:bg-slate-800 text-white rounded-xl text-[9px] sm:text-[11px] font-black tracking-[0.3em] uppercase transition-all shadow-xl whitespace-nowrap"
        >
          Close Briefing
        </button>
      </div>
    </div>
  );
}

export default AboutModal;
