
import React from 'react';
import { GraduationCap, Zap, ArrowRight } from 'lucide-react';

interface HotspotProps {
  label: string;
  type: 'education' | 'innovation';
  onClick: () => void;
  position: { top: string; left: string };
}

const InteractiveHotspot: React.FC<HotspotProps> = ({ label, type, onClick, position }) => {
  const Icon = type === 'education' ? GraduationCap : Zap;

  return (
    <div 
      className="absolute z-40 transform -translate-x-1/2 -translate-y-1/2" 
      style={{ top: position.top, left: position.left }}
    >
      <div className="relative flex flex-col items-center">
        {/* Label always visible but subtle */}
        <div className="mb-6 opacity-40 group-hover:opacity-100 transition-opacity">
           <span className="text-[10px] font-black tracking-[0.5em] text-white uppercase">{label}</span>
        </div>

        {/* Pulsing Trigger */}
        <button 
          onClick={onClick}
          className={`
            group relative p-10 rounded-full transition-all duration-1000
            ${type === 'education' ? 'bg-blue-600/5 hover:bg-blue-500/10' : 'bg-cyan-600/5 hover:bg-cyan-500/10'}
            backdrop-blur-3xl border border-white/10 hover:border-white/30 hover:scale-110 active:scale-95
          `}
        >
          {/* Minimal Kinetic Ring */}
          <div className="absolute inset-0 rounded-full border border-white/5 scale-125 opacity-20 animate-pulse" />
          
          <Icon className="w-10 h-10 text-white transition-transform group-hover:-translate-y-1" />
          
          {/* Interaction Prompt */}
          <div className="absolute top-[130%] left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500">
             <div className="flex items-center space-x-3 text-blue-400">
                <span className="text-[8px] font-black tracking-[0.4em] uppercase">VIEW CLUSTER</span>
                <ArrowRight className="w-3 h-3" />
             </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default InteractiveHotspot;
