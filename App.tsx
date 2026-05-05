import React, { useState, useEffect } from 'react';
import CompanySidebar from './components/CompanySidebar';
import CoursesSidebar from './components/CoursesSidebar';
import AboutModal from './components/AboutModal';
import SocialModal from './components/SocialModal';
import PartnerModal from './components/PartnerModal';
import ImpactModal from './components/ImpactModal';
import MobileMenu from './components/MobileMenu';
import { Menu, MessageCircle } from 'lucide-react';

const TICKER = ['IMPACT MIAMI', 'DAIA', 'TEACH FOR AMERICA', 'ROYAL HOME SOLUTIONS', 'APOLLO-E', 'HERO HOMES UNIV'];

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeSidebar, setActiveSidebar] = useState<'company' | 'courses' | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);
  const [isImpactOpen, setIsImpactOpen] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const menuActions: [string, () => void][] = [
    ['Companies',   () => { setActiveSidebar('company');  closeMenu(); }],
    ['Courses',  () => { setActiveSidebar('courses'); closeMenu(); }],
    ['Partners', () => { setIsPartnerOpen(true);     closeMenu(); }],
    ['Impact',     () => { setIsImpactOpen(true);         closeMenu(); }],
    ['About', () => { setIsAboutOpen(true);         closeMenu(); }],
    ['Socials',    () => { setIsSocialOpen(true);       closeMenu(); }],
    ['Governance',    () => { setIsPartnerOpen(true);       closeMenu(); }],
  ];

  /* ─── MOBILE LAYOUT ─────────────────────────────────────────────────── */
  if (isMobile) {
    return (
      <div className="relative h-screen w-screen overflow-hidden select-none bg-[#02040a]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>


        <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} menuActions={menuActions} />

        {/* Minimal nav */}
        <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-[18px]">
          <div className="flex items-center gap-2">
            <img src="/favicon.png" alt="" className="w-4 h-4 object-contain" />
            <span className="text-white/90 text-[11px] font-extrabold tracking-[0.15em] uppercase">JONAH & THE WHALE</span>
          </div>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="bg-white/[0.08] border border-white/[0.12] rounded-lg text-white cursor-pointer px-2 py-1.5 flex items-center"
          >
            <Menu size={20} />
          </button>
        </div>

        {/* Headline + WHALE + tagline stacked */}
        <div className="absolute top-[14%] left-0 right-0 z-10 pointer-events-none pl-5 overflow-hidden">
          <div
            className="font-black text-white uppercase whitespace-nowrap leading-[0.88] tracking-[-0.01em]"
            style={{ fontSize: '13vw' }}
          >
            JONAH & THE
          </div>
          <div
            className="font-black uppercase whitespace-nowrap leading-[0.9] tracking-[-0.03em] mt-1"
            style={{ fontSize: '24vw', color: 'rgba(17,45,110,0.7)', WebkitTextStroke: '0.5px rgba(99,160,255,1)' }}
          >
            WHALE
          </div>
          <p className="text-blue-500 text-[0.7rem] font-bold leading-[1.5] mt-[10px] mb-0 tracking-[0.04em]">
            // SHAPING FUTURES ACROSS GENERATIONS
          </p>
        </div>

        {/* Jonah image — below WHALE text, fills to bottom */}
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10 pointer-events-none w-full"
          style={{ top: 'calc(14% + 34vw + 36px)' }}
        >
          <img
            src="/assets/jonah.png"
            alt="Jonah"
            className="w-full h-full object-cover object-top"
            style={{
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))',
              WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 95%)',
              maskImage: 'linear-gradient(to bottom, black 55%, transparent 95%)',
            }}
          />
        </div>

        {/* Bottom content block */}
        <div className="absolute bottom-0 left-0 right-0 z-30 px-5 pt-0" style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 34px) + 120px)' }}>
          <p className="text-white/35 text-[0.6rem] font-bold leading-[1.8] mb-5 tracking-[0.04em] uppercase">
            // JONAH STEVENS — ECOSYSTEM ARCHITECT<br />
            EDUCATING COMMUNITIES AND BUILDING<br />
            GENERATIONAL WEALTH GLOBALLY
          </p>

          <button
            onClick={() => window.open('https://calendly.com/jobo2769/20min', '_blank')}
            className="flex items-center justify-center gap-2.5 bg-blue-500 border-0 rounded-full px-6 py-[17px] text-white text-[11px] font-extrabold tracking-[0.18em] cursor-pointer uppercase w-full shadow-[0_0_32px_rgba(59,130,246,0.4)] mb-2.5"
          >
            <MessageCircle size={16} />
            BOOK A CALL
          </button>

          <div className="flex gap-2.5">
            <button
              onClick={() => setIsAboutOpen(true)}
              className="flex-1 bg-white/[0.06] border border-white/[0.12] rounded-full py-3.5 px-3 text-white/80 text-[10px] font-extrabold tracking-[0.18em] cursor-pointer uppercase"
            >
              ABOUT
            </button>
            <button
              onClick={() => setIsSocialOpen(true)}
              className="flex-1 bg-white/[0.06] border border-white/[0.12] rounded-full py-3.5 px-3 text-white/80 text-[10px] font-extrabold tracking-[0.18em] cursor-pointer uppercase"
            >
              SOCIALS
            </button>
          </div>
        </div>

        {/* Sidebars & Modals */}
        <CompanySidebar isOpen={activeSidebar === 'company'} onClose={() => setActiveSidebar(null)} />
        <CoursesSidebar isOpen={activeSidebar === 'courses'}  onClose={() => setActiveSidebar(null)} />
        <AboutModal     isOpen={isAboutOpen}     onClose={() => setIsAboutOpen(false)} />
        <SocialModal   isOpen={isSocialOpen}   onClose={() => setIsSocialOpen(false)} />
        <PartnerModal isOpen={isPartnerOpen} onClose={() => setIsPartnerOpen(false)} />
        <ImpactModal     isOpen={isImpactOpen}     onClose={() => setIsImpactOpen(false)} />
      </div>
    );
  }

  /* ─── DESKTOP LAYOUT ────────────────────────────────────────────────── */
  return (
    <div className="relative h-screen w-screen overflow-hidden select-none bg-[#02040a]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>

      {/* WHALE — anchored below headline, container sized to text so only sides clip */}
      <div
        className="absolute left-0 right-0 z-[5] pointer-events-none overflow-hidden"
        style={{ top: 'calc(10% + 11.44vw)', height: '34vw' }}
      >
        <span
          className="absolute left-1/2 -translate-x-1/2 font-black uppercase whitespace-nowrap leading-none tracking-[-0.04em]"
          style={{ fontSize: '34vw', color: 'rgba(59,130,246,0.08)' }}
        >
          WHALE
        </span>
      </div>

      {/* Editorial Nav */}
      <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5">
        <div className="flex items-center gap-2">
          <img src="/favicon.png" alt="" className="w-4 h-4 object-contain" />
          <span className="text-white/90 text-[11px] font-extrabold tracking-[0.15em] uppercase">JONAH & THE WHALE</span>
        </div>

        <nav className="flex gap-9">
          {(
            [
              ['Organizations',  () => setActiveSidebar('company')],
              ['Courses', () => setActiveSidebar('courses')],
              ['Partners',    () => setIsPartnerOpen(true)],
              ['Impact',() => setIsImpactOpen(true)],
            ] as [string, () => void][]
          ).map(([label, fn]) => (
            <button
              key={label}
              onClick={fn}
              className="bg-transparent border-0 text-white/50 text-[11px] font-extrabold tracking-[0.18em] cursor-pointer uppercase transition-colors duration-200 hover:text-white"
            >
              {label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => window.open('https://calendly.com/jobo2769/20min', '_blank')}
          className="flex items-center gap-2.5 bg-transparent rounded-full px-5 py-2 text-white text-[11px] font-extrabold tracking-[0.15em] cursor-pointer uppercase transition-all duration-200 hover:bg-blue-500/15"
          style={{ border: '1.5px solid rgba(59,130,246,0.4)' }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = '#3b82f6')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)')}
        >
          BOOK A CALL
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Large Headline */}
      <div className="absolute top-[10%] left-0 right-0 z-[15] pointer-events-none">
        <div
          className="font-black text-white uppercase whitespace-nowrap text-center leading-[0.88] tracking-[0.08em]"
          style={{ fontSize: '13vw' }}
        >
          JONAH & THE
        </div>
      </div>

      {/* Photo + overlaid content — vh-based so it scales consistently across screen sizes */}
      <div className="absolute bottom-0 left-0 right-0 z-[25]" style={{ height: '78vh' }}>

        {/* Photo — centered, scales with viewport height */}
        <img
          src="/assets/jonah.png"
          alt="Jonah"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 object-contain object-top pointer-events-none"
          style={{ height: '78vh', filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.35))' }}
        />

        {/* Right tagline */}
        <div className="absolute right-[5%] top-[45%] text-left pointer-events-none">
          <p className="text-blue-500 text-[1.05rem] font-bold leading-[1.5] m-0">
            // SHAPING FUTURES<br />ACROSS GENERATIONS
          </p>
        </div>

        {/* Bottom-left descriptor */}
        <div className="absolute bottom-[13%] left-[4%] z-30">
          <p className="text-white/35 text-[0.65rem] font-bold leading-[1.8] m-0 tracking-[0.04em] uppercase">
            // JONAH STEVENS — ECOSYSTEM ARCHITECT<br />
            EDUCATING COMMUNITIES AND BUILDING<br />
            GENERATIONAL WEALTH GLOBALLY
          </p>
        </div>

        {/* Bottom-right action buttons */}
        <div className="absolute bottom-[13%] right-[4%] z-30 flex gap-3">
          {(
            [
              ['ABOUT', () => setIsAboutOpen(true)],
              ['SOCIALS',   () => setIsSocialOpen(true)],
            ] as [string, () => void][]
          ).map(([label, fn]) => (
            <button
              key={label}
              onClick={fn}
              className="rounded-full px-6 py-2.5 text-white text-[10px] font-extrabold tracking-[0.2em] cursor-pointer uppercase backdrop-blur-sm transition-all duration-200"
              style={{ background: 'rgba(59,130,246,0.1)', border: '1.5px solid rgba(59,130,246,0.3)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(59,130,246,0.25)'; e.currentTarget.style.borderColor = '#3b82f6'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(59,130,246,0.1)'; e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)'; }}
            >
            {label}
            </button>
          ))}
        </div>

      </div>
      {/* End photo + overlaid content wrapper */}

      {/* Bottom Ticker */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[35] border-t overflow-hidden"
        style={{ borderColor: 'rgba(59,130,246,0.2)', background: 'rgba(2,4,10,0.8)' }}
      >
        <div className="animate-marquee flex w-max py-[14px]">
          {[...TICKER, ...TICKER, ...TICKER, ...TICKER].map((name, i) => (
            <span
              key={i}
              className="shrink-0 mx-8 text-white/30 text-[0.7rem] font-extrabold tracking-[0.12em] uppercase whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* Sidebars & Modals */}
      <CompanySidebar isOpen={activeSidebar === 'company'} onClose={() => setActiveSidebar(null)} />
      <CoursesSidebar isOpen={activeSidebar === 'courses'}  onClose={() => setActiveSidebar(null)} />
      <AboutModal     isOpen={isAboutOpen}     onClose={() => setIsAboutOpen(false)} />
      <SocialModal   isOpen={isSocialOpen}   onClose={() => setIsSocialOpen(false)} />
      <PartnerModal isOpen={isPartnerOpen} onClose={() => setIsPartnerOpen(false)} />
      <ImpactModal     isOpen={isImpactOpen}     onClose={() => setIsImpactOpen(false)} />
    </div>
  );
};

export default App;
