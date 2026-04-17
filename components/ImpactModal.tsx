
import React from 'react';
import { X, Globe, Users, Laptop, Heart, GraduationCap, TrendingUp } from 'lucide-react';

interface ImpactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const IMPACT_METRICS = [
  {
    icon: Users,
    label: "Lives Impacted",
    value: "12.4K+",
    desc: "Transitioned into high-growth tech careers.",
    color: "text-blue-400"
  },
  {
    icon: GraduationCap,
    label: "Students Taught",
    value: "45K",
    desc: "Completed Future Leadership digital modules.",
    color: "text-indigo-400"
  },
  {
    icon: Laptop,
    label: "Resources",
    value: "3,200",
    desc: "Computers provided to underserved rural schools.",
    color: "text-cyan-400"
  }
];

const ImpactModal: React.FC<ImpactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#02040a]/95 backdrop-blur-2xl" onClick={onClose} />

      <div className="relative w-full max-w-5xl glass-morphism rounded-[40px] overflow-hidden flex flex-col animate-in zoom-in-95 duration-500 border border-white/10">

        <div className="p-6 md:p-8 pb-0 flex justify-between items-start shrink-0">
          <div className="space-y-1.5">
            <div className="flex items-center space-x-2">
              <Globe className="w-3 h-3 md:w-3.5 md:h-3.5 text-blue-500" />
              <span className="text-[7px] md:text-[9px] font-black tracking-[0.4em] text-blue-500 uppercase">Stewardship Accountability</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-lexend font-black text-white leading-tight tracking-tighter">
              THE IMPACT <span className="text-white/30">BRIEFING</span>
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 transition-all text-white/40 hover:text-white z-20"
          >
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
            {IMPACT_METRICS.map((metric, idx) => (
              <div key={idx} className="group p-4 md:p-6 lg:p-8 rounded-[24px] md:rounded-[32px] bg-white/[0.02] border border-white/5 transition-all duration-500">
                <div className="mb-4 md:mb-6 flex justify-between items-start">
                  <div className={`p-3 md:p-4 rounded-xl bg-white/5 border border-white/5 shadow-xl`}>
                    <metric.icon className={`w-4 h-4 md:w-6 md:h-6 ${metric.color}`} />
                  </div>
                  <TrendingUp className="w-3 h-3 text-emerald-500/40" />
                </div>

                <div className="space-y-1.5 md:space-y-2">
                  <span className="text-[7px] md:text-[9px] font-black tracking-widest text-white/20 uppercase">{metric.label}</span>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-lexend font-black text-white tracking-tighter">{metric.value}</h3>
                  <p className="text-slate-500 text-[9px] md:text-xs leading-relaxed font-medium">
                    {metric.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 md:p-6 lg:p-8 rounded-[24px] md:rounded-[32px] bg-blue-600/5 border border-blue-500/10 flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6 mt-4 md:mt-auto">
            <div className="flex items-center space-x-4 md:space-x-5">
              <div className="shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
                <Heart className="w-3.5 h-3.5 md:w-5 md:h-5 text-white fill-white" />
              </div>
              <div>
                <h4 className="text-white font-bold tracking-tight text-sm md:text-base">Systemic Resonance</h4>
                <p className="text-blue-400 text-[7px] md:text-[10px] font-black uppercase tracking-widest leading-relaxed">Generational impact across the Caribbean.</p>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-white/5 border border-white/5 flex items-center space-x-2">
                <div className="w-1 h-1 rounded-full bg-emerald-500" />
                <span className="text-[7px] md:text-[10px] font-black text-white/60 uppercase tracking-widest">Audited 2025</span>
              </div>
              <button className="px-5 md:px-6 py-2 md:py-2.5 bg-white text-[#02040a] rounded-lg text-[8px] md:text-[10px] font-black tracking-widest uppercase hover:scale-105 transition-transform shadow-xl">
                Full Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactModal;
