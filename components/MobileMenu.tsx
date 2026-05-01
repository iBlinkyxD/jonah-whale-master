import React from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuActions: [string, () => void][];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, menuActions }) => (
  <div
    className="fixed inset-0 z-[90] flex flex-col justify-center px-8 py-10 backdrop-blur-[24px]"
    style={{
      background: 'rgba(2,4,10,0.97)',
      transition: 'opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1)',
      opacity: isOpen ? 1 : 0,
      transform: isOpen ? 'translateY(0)' : 'translateY(-16px)',
      pointerEvents: isOpen ? 'auto' : 'none',
    }}
  >
    <button
      onClick={onClose}
      className="absolute top-5 right-5 bg-transparent border-0 text-white/40 cursor-pointer p-2"
    >
      <X size={24} />
    </button>

    <div className="mb-12 flex items-center gap-2">
      <img src="/favicon.png" alt="" className="w-4 h-4 object-contain" />
      <span className="text-white/40 text-[10px] font-extrabold tracking-[0.15em] uppercase">
        JONAH & THE WHALE
      </span>
    </div>

    <nav className="flex flex-col gap-1">
      {menuActions.map(([label, fn]) => (
        <button
          key={label}
          onClick={fn}
          className="bg-transparent border-0 border-b border-white/5 text-left text-white/70 text-[2rem] font-extrabold tracking-[-0.02em] cursor-pointer py-2.5 transition-colors duration-200 hover:text-white"
        >
          {label}
        </button>
      ))}
    </nav>
  </div>
);

export default MobileMenu;
