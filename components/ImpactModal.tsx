import React from 'react';
import { X, Globe, Users, Laptop, Heart, GraduationCap, TrendingUp } from 'lucide-react';

interface ImpactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const IMPACT_METRICS = [
  {
    icon: Users,
    label: 'Lives Impacted',
    value: '12.4K+',
    desc: 'Transitioned into high-growth tech careers.',
    color: 'text-blue-400',
  },
  {
    icon: GraduationCap,
    label: 'Students Taught',
    value: '45K',
    desc: 'Completed Future Leadership digital modules.',
    color: 'text-indigo-400',
  },
  {
    icon: Laptop,
    label: 'Resources',
    value: '3,200',
    desc: 'Computers provided to underserved rural schools.',
    color: 'text-cyan-400',
  },
];

const ImpactModal: React.FC<ImpactModalProps> = React.memo(({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-end sm:items-center justify-center sm:p-4">
      <div className="absolute inset-0 bg-[#02040a]/95" onClick={onClose} />

      <div className="relative w-full sm:max-w-5xl glass-morphism rounded-t-[32px] sm:rounded-[40px] overflow-hidden flex flex-col border border-white/10 max-h-[92vh] sm:max-h-[90vh]"
        style={{ animation: 'slideUp 0.4s cubic-bezier(0.16,1,0.3,1)' }}
      >
        {/* Drag handle — mobile only */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden shrink-0">
          <div className="w-10 h-1 rounded-full bg-white/20" />
        </div>

        {/* Header */}
        <div className="px-5 pt-4 pb-0 sm:px-8 sm:pt-8 flex justify-between items-start shrink-0">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <Globe className="w-3 h-3 text-blue-500" />
              <span className="text-[8px] font-black tracking-[0.4em] text-blue-500 uppercase">Stewardship Accountability</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-lexend font-black text-white leading-tight tracking-tighter">
              THE IMPACT <span className="text-white/30">BRIEFING</span>
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 sm:p-2.5 rounded-full bg-white/5 hover:bg-white/10 transition-all text-white/40 hover:text-white z-20 shrink-0 ml-4"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1 px-5 pt-4 pb-5 sm:px-8 sm:pt-6 sm:pb-8">

          {/* Metrics grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-6 mb-4 sm:mb-6">
            {IMPACT_METRICS.map((metric, idx) => (
              <div key={idx} className="p-3 sm:p-8 rounded-2xl sm:rounded-[32px] bg-white/[0.02] border border-white/5 flex flex-col">
                <div className="mb-2 sm:mb-6 flex justify-between items-start">
                  <div className="p-2 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 border border-white/5">
                    <metric.icon className={`w-3 h-3 sm:w-6 sm:h-6 ${metric.color}`} />
                  </div>
                  <TrendingUp className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-emerald-500/40" />
                </div>
                <span className="text-[6px] sm:text-[9px] font-black tracking-widest text-white/20 uppercase mb-0.5">{metric.label}</span>
                <h3 className="text-lg sm:text-4xl font-lexend font-black text-white tracking-tighter leading-none mb-1">{metric.value}</h3>
                <p className="text-slate-500 text-[7px] sm:text-xs leading-relaxed font-medium hidden sm:block">{metric.desc}</p>
              </div>
            ))}
          </div>

          {/* Systemic resonance */}
          <div className="p-4 sm:p-8 rounded-2xl sm:rounded-[32px] bg-blue-600/5 border border-blue-500/10">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-3 sm:gap-5">
                <div className="shrink-0 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
                  <Heart className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white fill-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold tracking-tight text-sm sm:text-base">Systemic Resonance</h4>
                  <p className="text-blue-400 text-[8px] sm:text-[10px] font-black uppercase tracking-widest">Generational impact across the Caribbean.</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 flex items-center gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-emerald-500" />
                  <span className="text-[8px] sm:text-[10px] font-black text-white/60 uppercase tracking-widest">Audited 2025</span>
                </div>
                <button className="px-4 sm:px-6 py-2 sm:py-2.5 bg-white text-[#02040a] rounded-lg text-[8px] sm:text-[10px] font-black tracking-widest uppercase hover:scale-105 transition-transform shadow-xl">
                  Full Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ImpactModal;
