
import React from 'react';
import { X, RefreshCw, GraduationCap, Users, TrendingUp, Zap, ArrowRight } from 'lucide-react';

interface FlywheelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FLYWHEEL_STEPS = [
  {
    icon: GraduationCap,
    title: "Academic Stewardship",
    desc: "Building a foundation of knowledge and futuristic skills through specialized courses.",
    color: "text-blue-400"
  },
  {
    icon: Users,
    title: "Community Impact",
    desc: "Deploying talent and initiatives like Impact Miami to create tangible social change.",
    color: "text-indigo-400"
  },
  {
    icon: TrendingUp,
    title: "Strategic Innovation",
    desc: "Venture capital and consultancy that scales impact into profitable, sustainable models.",
    color: "text-cyan-400"
  },
  {
    icon: Zap,
    title: "Re-investment",
    desc: "Capital and resources flow back into education, closing the loop and accelerating the cycle.",
    color: "text-amber-400"
  }
];

const FlywheelModal: React.FC<FlywheelModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      <div className="absolute inset-0 bg-[#02040a]/95 backdrop-blur-2xl" onClick={onClose} />

      <div className="relative w-full max-w-6xl glass-morphism rounded-[40px] md:rounded-[60px] p-8 md:p-12 lg:p-16 overflow-hidden animate-in zoom-in-95 duration-700 shadow-2xl border border-white/5 flex flex-col justify-center">

        {/* Decorative Background Flywheel */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] border-[1px] border-white/5 rounded-full pointer-events-none animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] border-[1px] border-white/10 rounded-full border-dashed pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-6 right-6 md:top-8 md:right-10 lg:top-12 lg:right-12 p-2.5 md:p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all group z-20"
        >
          <X className="w-5 h-5 md:w-6 md:h-6 text-white/40 group-hover:text-white" />
        </button>

        <div className="text-center mb-10 md:mb-12 lg:mb-20 relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-3 md:mb-4">
            <RefreshCw className="w-4 h-4 md:w-5 md:h-5 text-blue-500 animate-spin" style={{ animationDuration: '4s' }} />
            <span className="text-[8px] md:text-[10px] font-black tracking-[0.6em] text-blue-500 uppercase">Systemic Alignment</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-lexend font-black text-white leading-none tracking-tighter">
            THE ECOSYSTEM FLYWHEEL
          </h2>
          <p className="mt-4 md:mt-6 text-slate-400 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed px-4 md:px-0">
            Our model isn't just about separate ventures; it's a closed-loop system where education powers impact, impact generates value, and value fuels further growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 relative z-10">
          {FLYWHEEL_STEPS.map((step, idx) => (
            <div key={idx} className="group relative">
              <div className="h-full p-6 lg:p-8 rounded-[32px] md:rounded-[40px] bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 flex flex-col items-center text-center">
                <div className={`p-4 md:p-5 lg:p-6 rounded-[20px] md:rounded-[24px] bg-white/5 border border-white/5 mb-4 md:mb-6 lg:mb-8 shadow-xl group-hover:scale-110 transition-transform`}>
                  <step.icon className={`w-6 h-6 lg:w-8 lg:h-8 ${step.color}`} />
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-white mb-2 md:mb-4 tracking-tight">{step.title}</h3>
                <p className="text-slate-400 text-[10px] md:text-xs leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  {step.desc}
                </p>

                {idx < FLYWHEEL_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-1/3 -right-6 translate-x-1/2 text-white/10 group-hover:text-blue-500 transition-colors">
                    <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Circular Bottom Navigation/Indicator */}
        <div className="mt-10 md:mt-12 lg:mt-20 flex justify-center">
          <div className="px-6 md:px-8 py-2 md:py-3 rounded-full border border-white/10 bg-white/5 flex items-center space-x-4 md:space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-[7px] md:text-[8px] font-black text-white/60 uppercase tracking-widest">Growth Phase</span>
            </div>
            <div className="w-[1px] h-3 bg-white/10" />
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-cyan-500" />
              <span className="text-[7px] md:text-[8px] font-black text-white/60 uppercase tracking-widest">Sustainability Protocol</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default FlywheelModal;
