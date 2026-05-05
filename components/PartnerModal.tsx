import React from 'react';
import { X, Handshake, ShieldCheck, Users, Info } from 'lucide-react';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ROLES = [
  {
    tag: 'Mentor',
    name: 'Natalya DelValle',
    title: 'Entrepreneur & Business Strategist · via Minnect',
    desc: 'Manage your scholars, answer wisdom questions, set scholarship rates, and track your mentorship impact.',
    image: 'https://i.pravatar.cc/150?u=natalya',
    accent: '#C9A84C',
    accentBorder: 'rgba(201,168,76,0.2)',
  },
  {
    tag: 'Minnect Admin',
    name: 'Patrick Bet-David',
    title: 'Founder & CEO · Valuetainment / Minnect',
    desc: 'Executive overview of the full DAIA × Minnect partnership — mentors, scholars, analytics, and expansion pipeline.',
    image: 'https://i.pravatar.cc/150?u=patrick',
    accent: '#D56B5B',
    accentBorder: 'rgba(213,107,91,0.2)',
  },
  {
    tag: 'Scholar · Parent',
    name: 'Yulina & Family',
    title: 'Scholar · Escuela Primaria Jesús Maestro · Age 8',
    desc: 'A simple, welcoming space to connect with your mentor, ask questions, and track your wisdom journey.',
    image: 'https://i.pravatar.cc/150?u=yulina',
    accent: '#5B9BD5',
    accentBorder: 'rgba(91,155,213,0.2)',
  },
  {
    tag: 'Institution',
    name: 'Escuela Jesús Maestro',
    title: 'School Administrator · Santo Domingo, DR',
    desc: 'Monitor enrolled scholars, access wisdom reports, and nominate new students for the scholarship program.',
    image: 'https://i.pravatar.cc/150?u=escuela',
    accent: '#4CAF8A',
    accentBorder: 'rgba(76,175,138,0.2)',
  },
];

const PartnerModal: React.FC<PartnerModalProps> = React.memo(({ isOpen, onClose }) => {
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
          <div className="w-full sm:w-1/2 px-5 pt-4 pb-5 sm:p-10 lg:p-16 sm:border-r border-white/0 border-b sm:border-b-0 shrink-0">
            <div className="flex items-center gap-3 mb-4 sm:mb-10">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <Handshake className="w-4 h-4 text-blue-400" />
              </div>
              <span className="text-[9px] font-black tracking-[0.5em] text-blue-400 uppercase">Stewardship Protocol</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-lexend font-black text-white leading-none tracking-tighter mb-3 sm:mb-8">
              PARTNERS
            </h2>
          </div>

          {/* Right — Partner Roles */}
          <div className="w-full sm:w-1/2 px-5 pt-5 pb-6 sm:p-10 lg:p-16 bg-[#0c1222]/50">

            <div className="flex flex-col gap-3">
              {ROLES.map((role, i) => (
                <div
                  key={i}
                  className="relative p-4 rounded-2xl border bg-white/[0.03] hover:bg-white/[0.06] transition-all"
                  style={{ borderColor: role.accentBorder }}
                >
                  {/* Tag — top right */}
                  <span
                    className="absolute top-4 right-4 text-[8px] font-black tracking-[0.2em] uppercase px-2.5 py-1 rounded-full border"
                    style={{ color: role.accent, borderColor: role.accentBorder, background: `${role.accent}12` }}
                  >
                    {role.tag}
                  </span>

                  {/* Avatar + name row */}
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={role.image}
                      alt={role.name}
                      className="w-11 h-11 rounded-full object-cover border-2 shrink-0"
                      style={{ borderColor: role.accentBorder }}
                    />
                    <div className="min-w-0 pr-16">
                      <h3 className="text-white text-sm font-bold tracking-tight leading-tight">{role.name}</h3>
                      <p className="text-[10px] font-semibold leading-tight truncate" style={{ color: role.accent }}>
                        {role.title}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-[11px] leading-relaxed">{role.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 sm:mt-8 pt-4 border-t border-white/5 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[8px] sm:text-[9px] font-black text-white/30 tracking-widest uppercase">Partnership Network Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default PartnerModal;
