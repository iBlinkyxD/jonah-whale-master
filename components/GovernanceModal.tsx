
import React from 'react';
import { X, Scale, ShieldCheck, Users, Info } from 'lucide-react';

interface GovernanceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PRINCIPLES = [
  {
    title: "Radical Transparency",
    desc: "Every initiative undergoes bi-annual audits to ensure capital is flowing directly toward impact targets.",
    icon: Info
  },
  {
    title: "Generational Equity",
    desc: "Decisions are made based on a 50-year horizon, prioritizing long-term stability over short-term yields.",
    icon: Scale
  },
  {
    title: "Systemic Integrity",
    desc: "The ecosystem maintains a zero-compromise policy on ethical AI and data sovereignty for its students.",
    icon: ShieldCheck
  }
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

const GovernanceModal: React.FC<GovernanceModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#02040a]/95 backdrop-blur-2xl" onClick={onClose} />

      <div className="relative w-full max-w-6xl glass-morphism rounded-[40px] md:rounded-[50px] flex flex-col md:flex-row animate-in slide-in-from-bottom-8 duration-700 shadow-3xl border border-white/10">

        {/* Left Side: Principles & Protocol */}
        <div className="w-full md:w-1/2 p-6 md:p-10 lg:p-16 bg-white/[0.02] border-r border-white/5">
          <div className="flex items-center space-x-3 mb-6 md:mb-10">
            <div className="p-2 rounded-lg bg-blue-500/20">
              <Scale className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
            </div>
            <span className="text-[9px] md:text-[10px] font-black tracking-[0.5em] text-blue-400 uppercase">Stewardship Protocol</span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-5xl font-lexend font-black text-white leading-none tracking-tighter mb-4 md:mb-8 text-balance">
            GOVERNANCE <br /><span className="text-white/30">OF VISION</span>
          </h2>

          <p className="text-slate-400 text-[10px] md:text-sm leading-relaxed mb-6 md:mb-12 max-w-md">
            Jonah operates under a strict governance framework designed to ensure that the "Whale" ecosystem remains true to its founding mission.
          </p>

          <div className="space-y-4 md:space-y-8">
            {PRINCIPLES.map((p, i) => (
              <div key={i} className="flex space-x-4 md:space-x-6 group">
                <div className="shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                  <p.icon className="w-4 h-4 md:w-5 md:h-5 text-white/40 group-hover:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-[10px] md:text-sm font-black text-white tracking-widest uppercase mb-1">{p.title}</h4>
                  <p className="text-slate-500 text-[9px] md:text-xs leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: The Advisory Board */}
        <div className="w-full md:w-1/2 p-6 md:p-10 lg:p-16 bg-[#0c1222]/50">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-8 md:right-8 p-2.5 rounded-full hover:bg-white/10 transition-all text-white/30 hover:text-white z-20"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <div className="flex items-center space-x-3 mb-6 md:mb-10">
            <Users className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber-500" />
            <span className="text-[9px] md:text-[10px] font-black tracking-[0.5em] text-amber-500 uppercase">Appointed Council</span>
          </div>

          <div className="space-y-4 md:space-y-6">
            <p className="text-[8px] md:text-xs font-bold text-slate-500 tracking-[0.2em] uppercase mb-2 md:mb-6">Reporting to the Board of Stewards</p>

            <div className="grid gap-3 md:gap-6">
              {ADVISORS.map((advisor, i) => (
                <div key={i} className="p-3 md:p-6 rounded-2xl md:rounded-3xl bg-white/[0.03] border border-white/5 flex items-center space-x-4 md:space-x-6 hover:bg-white/[0.05] transition-all">
                  <img src={advisor.image} alt={advisor.name} className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl grayscale hover:grayscale-0 transition-all border border-white/10 shrink-0" />
                  <div>
                    <h3 className="text-white text-xs md:text-base font-bold tracking-tight">{advisor.name}</h3>
                    <p className="text-blue-400 text-[8px] md:text-[10px] font-black uppercase tracking-widest mb-0.5 md:mb-2">{advisor.role}</p>
                    <p className="text-slate-500 text-[9px] md:text-[11px] leading-tight">{advisor.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 md:mt-12 pt-4 md:pt-8 border-t border-white/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[7px] md:text-[9px] font-black text-white/30 tracking-widest uppercase">Ethics Compliance Active</span>
              </div>
              <button className="text-[7px] md:text-[9px] font-black text-blue-400 tracking-widest uppercase hover:underline">Download Charter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernanceModal;
