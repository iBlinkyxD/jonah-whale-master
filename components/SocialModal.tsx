import React from 'react';
import { X } from 'lucide-react';

interface SocialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const SOCIAL_ACCOUNTS = [
  {
    platform: 'Instagram',
    handle: '@jonahstevens',
    desc: 'Daily insights on education, wealth & legacy.',
    url: 'https://instagram.com',
    accent: '#E1306C',
    accentBg: 'rgba(225,48,108,0.12)',
    icon: <InstagramIcon />,
  },
  {
    platform: 'X',
    handle: '@jonahstevens',
    desc: 'Real-time thoughts on markets, community & growth.',
    url: 'https://x.com',
    accent: '#ffffff',
    accentBg: 'rgba(255,255,255,0.08)',
    icon: <XIcon />,
  },
  {
    platform: 'Facebook',
    handle: 'Jonah Stevens',
    desc: 'Community updates, events & ecosystem news.',
    url: 'https://facebook.com',
    accent: '#1877F2',
    accentBg: 'rgba(24,119,242,0.12)',
    icon: <FacebookIcon />,
  },
  {
    platform: 'LinkedIn',
    handle: 'Jonah Stevens',
    desc: 'Professional milestones, partnerships & thought leadership.',
    url: 'https://linkedin.com',
    accent: '#0A66C2',
    accentBg: 'rgba(10,102,194,0.12)',
    icon: <LinkedInIcon />,
  },
  {
    platform: 'Telegram',
    handle: '@jonahstevens',
    desc: 'Exclusive community channel — direct access to the ecosystem.',
    url: 'https://t.me',
    accent: '#2AABEE',
    accentBg: 'rgba(42,171,238,0.12)',
    icon: <TelegramIcon />,
  },
];

const SocialModal: React.FC<SocialModalProps> = React.memo(({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-4">
      <div className="absolute inset-0 bg-[#02040a]/95" onClick={onClose} />

      <div
        className="relative w-full sm:max-w-4xl glass-morphism rounded-t-[32px] sm:rounded-[48px] overflow-hidden border border-white/5 shadow-2xl flex flex-col max-h-[92vh] sm:max-h-[88vh]"
        style={{ animation: 'slideUp 0.4s cubic-bezier(0.16,1,0.3,1)' }}
      >
        {/* Sticky header */}
        <div
          className="sticky top-0 z-10 shrink-0 flex items-center justify-between px-5 pt-3 pb-3 sm:px-10 sm:pt-7 sm:pb-5 rounded-t-[32px] sm:rounded-t-[48px]"
          style={{ background: 'rgba(8,12,24,0.95)', backdropFilter: 'blur(12px)' }}
        >
          <div className="w-10 h-1 rounded-full bg-white/20 sm:hidden" />
          <div className="hidden sm:flex flex-col gap-1">
            <span className="text-[9px] font-black tracking-[0.5em] text-blue-400 uppercase">Stay Connected</span>
            <h2 className="text-2xl lg:text-3xl font-lexend font-black text-white leading-none tracking-tighter">
              FOLLOW JONAH
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white/70 hover:text-white"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1 px-5 pb-6 sm:px-10 sm:pb-10">

          {/* Mobile title */}
          <div className="sm:hidden pt-4 pb-5">
            <span className="text-[9px] font-black tracking-[0.5em] text-blue-400 uppercase">Stay Connected</span>
            <h2 className="text-2xl font-lexend font-black text-white leading-none tracking-tighter mt-1">
              FOLLOW JONAH
            </h2>
          </div>

          {/* Social cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {SOCIAL_ACCOUNTS.map((account) => (
              <a
                key={account.platform}
                href={account.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 sm:flex-col sm:items-start p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/5 hover:border-white/15 transition-all duration-300 cursor-pointer"
                style={{ background: account.accentBg }}
              >
                {/* Icon */}
                <div
                  className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform"
                  style={{ background: `${account.accent}20`, color: account.accent }}
                >
                  {account.icon}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0 sm:mt-2">
                  <div className="flex items-center justify-between sm:block">
                    <div>
                      <p className="text-white font-black text-sm sm:text-base tracking-tight leading-none">{account.platform}</p>
                      <p className="text-[10px] sm:text-[11px] font-bold mt-0.5" style={{ color: account.accent }}>
                        {account.handle}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-500 text-[10px] sm:text-xs leading-relaxed mt-1.5 sm:mt-2 line-clamp-2 hidden sm:block">
                    {account.desc}
                  </p>
                </div>

                {/* Follow pill — desktop */}
                <div
                  className="hidden sm:flex items-center gap-1.5 mt-4 px-4 py-2 rounded-full text-[10px] font-black tracking-widest uppercase transition-all group-hover:opacity-100 opacity-60"
                  style={{ border: `1px solid ${account.accent}40`, color: account.accent }}
                >
                  Follow
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Arrow — mobile */}
                <svg className="sm:hidden w-4 h-4 shrink-0 opacity-30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default SocialModal;
