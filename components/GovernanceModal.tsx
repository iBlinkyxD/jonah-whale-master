import React from 'react';
import { X, Scale, ShieldCheck, Users, Info } from 'lucide-react';

interface GovernanceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PRINCIPLES = [
  {
    title: 'Radical Transparency',
    desc: 'Every initiative undergoes bi-annual audits to ensure capital is flowing directly toward impact targets.',
    icon: Info,
  },
  {
    title: 'Generational Equity',
    desc: 'Decisions are made based on a 50-year horizon, prioritizing long-term stability over short-term yields.',
    icon: Scale,
  },
  {
    title: 'Systemic Integrity',
    desc: 'The ecosystem maintains a zero-compromise policy on ethical AI and data sovereignty for its students.',
    icon: ShieldCheck,
  },
];

const ADVISORS = [
  {
    name: "Dr. Elena Vance",
    role: "Lead Ethics Counsel",
    desc: "Former UN Advisor on Digital Sovereignty and Educational Reform.",
    image: "https://i.pravatar.cc/150?u=elena"
  },
  {
    name: "Marcus Thorne",
    role: "Urban Strategy Lead",
    desc: "Distinguished Fellow at the Institute for Sustainable Urbanism.",
    image: "https://i.pravatar.cc/150?u=marcus"
  },
  {
    name: "Sarah Lindell",
    role: "Financial Steward",
    desc: "Architect of the Generational Wealth Protocol for emerging markets.",
    image: "https://i.pravatar.cc/150?u=sarah"
  }
];

const GovernanceModal: React.FC<GovernanceModalProps> = React.memo(({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-end sm:items-center justify-center sm:p-4">
      <div className="absolute inset-0 bg-[#02040a]/95" onClick={onClose} />

      <div className="relative w-full sm:max-w-6xl glass-morphism rounded-t-[32px] sm:rounded-[50px] flex flex-col border border-white/10 max-h-[92vh] sm:max-h-[90vh]"
        style={{ animation: 'slideUp 0.4s cubic-bezier(0.16,1,0.3,1)' }}
      >
        {/* Sticky header — always visible, not part of scroll */}
        <div className="sticky top-0 z-10 shrink-0 flex items-center justify-between px-5 pt-3 pb-2 sm:px-8 sm:pt-5 sm:pb-3 rounded-t-[32px] sm:rounded-t-[50px]" style={{ background: 'rgba(8,12,24,0.95)', backdropFilter: 'blur(12px)' }}>
          <div className="w-10 h-1 rounded-full bg-white/20 sm:hidden" />
          <div className="hidden sm:block" />
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white/70 hover:text-white"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1 flex flex-col sm:flex-row">

          {/* Left — Principles */}
          <div className="w-full sm:w-1/2 px-5 pt-4 pb-5 sm:p-10 lg:p-16 bg-white/[0.02] sm:border-r border-white/5 border-b sm:border-b-0 shrink-0">
            <div className="flex items-center gap-3 mb-4 sm:mb-10">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <Scale className="w-4 h-4 text-blue-400" />
              </div>
              <span className="text-[9px] font-black tracking-[0.5em] text-blue-400 uppercase">Stewardship Protocol</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-lexend font-black text-white leading-none tracking-tighter mb-3 sm:mb-8">
              GOVERNANCE<br /><span className="text-white/30">OF VISION</span>
            </h2>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-12 max-w-md">
              Jonah operates under a strict governance framework designed to ensure that the "Whale" ecosystem remains true to its founding mission.
            </p>

            <div className="space-y-4 sm:space-y-8">
              {PRINCIPLES.map((p, i) => (
                <div key={i} className="flex gap-4 sm:gap-6 group">
                  <div className="shrink-0 w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                    <p.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 group-hover:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-[10px] sm:text-sm font-black text-white tracking-widest uppercase mb-1">{p.title}</h4>
                    <p className="text-slate-500 text-[9px] sm:text-xs leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Advisory Board */}
          <div className="w-full sm:w-1/2 px-5 pt-5 pb-6 sm:p-10 lg:p-16 bg-[#0c1222]/50">
            <div className="flex items-center gap-3 mb-4 sm:mb-10">
              <Users className="w-3.5 h-3.5 text-amber-500" />
              <span className="text-[9px] font-black tracking-[0.5em] text-amber-500 uppercase">Appointed Council</span>
            </div>

            <p className="text-[8px] sm:text-xs font-bold text-slate-500 tracking-[0.2em] uppercase mb-4 sm:mb-6">
              Reporting to the Board of Stewards
            </p>

            <div className="grid gap-3 sm:gap-6">
              {ADVISORS.map((advisor, i) => (
                <div key={i} className="p-3 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/5 flex items-center gap-4 sm:gap-6 hover:bg-white/[0.05] transition-all">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl object-cover grayscale hover:grayscale-0 transition-all border border-white/10 shrink-0"
                  />
                  <div className="min-w-0">
                    <h3 className="text-white text-sm sm:text-base font-bold tracking-tight">{advisor.name}</h3>
                    <p className="text-blue-400 text-[8px] sm:text-[10px] font-black uppercase tracking-widest mb-0.5 sm:mb-1">{advisor.role}</p>
                    <p className="text-slate-500 text-[9px] sm:text-[11px] leading-tight">{advisor.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 sm:mt-12 pt-4 sm:pt-8 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[8px] sm:text-[9px] font-black text-white/30 tracking-widest uppercase">Ethics Compliance Active</span>
              </div>
              <button className="text-[8px] sm:text-[9px] font-black text-blue-400 tracking-widest uppercase hover:underline">
                Download Charter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default GovernanceModal;
