
import React from 'react';
import { ShieldAlert, Globe } from 'lucide-react';

interface HeaderProps {
  onPartnerClick?: () => void;
  onImpactClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onPartnerClick, onImpactClick }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-12 py-8 flex justify-between items-center">
      <div className="flex flex-col">
         <span className="text-[10px] tracking-[0.5em] text-blue-400 font-bold uppercase mb-1">Legacy of the Depths</span>
         <div className="w-12 h-[2px] bg-blue-500/50"></div>
      </div>

      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-black tracking-[-0.05em] text-white drop-shadow-2xl font-lexend leading-none">
          JONAH <span className="text-blue-500">&</span> THE WHALE
        </h1>
        <p className="text-[10px] font-medium tracking-[0.4em] uppercase mt-3 text-slate-400">
          Empowering Minds <span className="mx-2 text-slate-700">•</span> Shaping the Futures
        </p>
      </div>

      <nav className="flex items-center">
        <div className="flex items-center space-x-10 text-[11px] font-black tracking-[0.3em]">
          <button 
            onClick={onImpactClick}
            className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors group"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>IMPACT</span>
          </button>

          <button 
            onClick={onPartnerClick}
            className="flex items-center space-x-2 text-blue-400/70 hover:text-blue-400 transition-colors group"
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>PARTNERS</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
