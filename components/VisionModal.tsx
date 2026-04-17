
import React, { useState } from 'react';
import { X, Star, ShieldCheck, User } from 'lucide-react';

interface VisionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VisionModal: React.FC<VisionModalProps> = ({ isOpen, onClose }) => {
  const [imageError, setImageError] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#02040a]/92 backdrop-blur-2xl" onClick={onClose} />

      <div className="relative w-full max-w-5xl flex flex-col md:flex-row bg-white rounded-[40px] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.7)] animate-in zoom-in-95 duration-700">

        {/* Portrait Section */}
        <div className="relative w-full md:w-5/12 h-48 md:h-auto overflow-hidden bg-slate-100 flex items-center justify-center shrink-0">
          {!imageError ? (
            <img
              src="/assets/image.png"
              alt="Jonah Portrait"
              onError={() => setImageError(true)}
              className="w-full h-full object-contain scale-[1.2] md:scale-[1.4] -translate-x-8 md:-translate-x-20 transition-transform duration-1000"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-slate-300">
              <User className="w-20 h-20 md:w-32 md:h-32" />
              <span className="text-[8px] md:text-[10px] font-black tracking-widest uppercase mt-4">Asset Unavailable</span>
            </div>
          )}

          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
            <div className="flex items-center space-x-2 px-4 py-2 md:px-5 md:py-2.5 bg-black/90 backdrop-blur-xl border border-white/20 rounded-xl">
              <div className="p-1 rounded bg-amber-400/20">
                <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 text-amber-400" />
              </div>
              <span className="text-[8px] md:text-[10px] font-black tracking-[0.3em] text-white uppercase">OFFICIAL STEWARD</span>
            </div>
          </div>
        </div>

        {/* Briefing Section */}
        <div className="relative w-full md:w-7/12 p-6 md:p-8 lg:p-12 bg-white flex flex-col justify-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-slate-50 hover:bg-slate-100 transition-all group z-20"
          >
            <X className="w-4 h-4 text-slate-300 group-hover:text-slate-900" />
          </button>

          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="flex items-center space-x-3">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="text-[9px] md:text-[11px] font-black tracking-[0.4em] text-amber-600/80 uppercase">ECOSYSTEM VISIONARY LEADERSHIP</span>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-lexend font-black text-[#0c1222] tracking-tighter leading-none mb-3">
                Jonah <span className="text-slate-200">Stevens</span>
              </h2>
              <div className="flex items-center space-x-4">
                <div className="h-[2px] w-10 bg-amber-500/40" />
                <span className="text-[9px] md:text-[11px] font-black tracking-[0.4em] text-amber-600/60 uppercase">
                  FOUNDER & CHIEF ARCHITECT
                </span>
              </div>
            </div>

            <div className="space-y-3 md:space-y-4">
              <p className="text-slate-600 text-xs md:text-sm lg:text-[15px] leading-relaxed font-medium">
                Jonah serves as the primary architect and bridge for global change. A visionary leader with roots in the classrooms of New York City, he combines decades of educational advocacy with high-stakes strategic growth.
              </p>
              <p className="text-slate-600 text-xs md:text-sm lg:text-[15px] leading-relaxed font-medium">
                At the heart of his mission is a profound commitment to family values. As a dedicated family man, Jonah believes that true stewardship begins at home.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-8 pt-6 border-t border-slate-100">
              <div className="space-y-0.5">
                <span className="block text-[8px] md:text-[10px] font-black text-slate-400 tracking-widest uppercase">BASE OF OPERATIONS</span>
                <span className="text-sm md:text-base lg:text-lg font-bold text-slate-900 tracking-tight">Miami / Santo Domingo</span>
              </div>
              <div className="space-y-0.5">
                <span className="block text-[8px] md:text-[10px] font-black text-slate-400 tracking-widest uppercase">ACCESS CLEARANCE</span>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm md:text-base lg:text-lg font-bold text-emerald-600 tracking-tight">Global Steward</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-10 lg:mt-12 flex items-center justify-between pt-6 border-t border-slate-50">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="text-[8px] lg:text-[10px] font-black text-slate-400 tracking-widest uppercase">STRIKING BALANCE SINCE 1998</span>
            </div>
            <button
              onClick={onClose}
              className="px-6 md:px-8 py-3 md:py-4 bg-[#0c1222] hover:bg-slate-800 text-white rounded-xl text-[9px] md:text-[11px] font-black tracking-[0.3em] uppercase transition-all shadow-xl whitespace-nowrap"
            >
              Close Briefing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionModal;
