
import React, { useState } from 'react';
import Header from './components/Header';
import InteractiveHotspot from './components/InteractiveHotspot';
import InitiativeSidebar from './components/InitiativeSidebar';
import VisionModal from './components/VisionModal';
import FlywheelModal from './components/FlywheelModal';
import GovernanceModal from './components/GovernanceModal';
import ImpactModal from './components/ImpactModal';
import { getWhaleWisdom } from './services/geminiService';
import { Sparkles, MessageCircle, X, Send, Loader2, User } from 'lucide-react';

const App: React.FC = () => {
  const [wisdom, setWisdom] = useState<string>("");
  const [isLoadingWisdom, setIsLoadingWisdom] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [imageError, setImageError] = useState(false);

  // Navigation & UI States
  const [activeSidebar, setActiveSidebar] = useState<'education' | 'business' | null>(null);
  const [isVisionOpen, setIsVisionOpen] = useState(false);
  const [isFlywheelOpen, setIsFlywheelOpen] = useState(false);
  const [isGovernanceOpen, setIsGovernanceOpen] = useState(false);
  const [isImpactOpen, setIsImpactOpen] = useState(false);

  const handleAskWisdom = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const topic = query.trim() || "the future of humanity";
    setIsLoadingWisdom(true);
    setQuery("");
    const result = await getWhaleWisdom(topic);
    setWisdom(result);
    setIsLoadingWisdom(false);
    if (!isAiOpen) setIsAiOpen(true);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#02040a] font-inter select-none flex flex-col">

      {/* Background Atmospheric Layers */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128] via-[#02040a] to-[#02040a]" />

        {/* Cinematic Dynamic Light Rays */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full h-[130%] flex justify-center opacity-30 ray">
          <div className="w-[100vw] h-full bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.2)_0%,_transparent_70%)] blur-[120px]" />
        </div>

        {/* Floating Particles for Depth */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-subtle-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                opacity: Math.random() * 0.4
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <Header
        onGovernanceClick={() => setIsGovernanceOpen(true)}
        onImpactClick={() => setIsImpactOpen(true)}
      />

      <main className="relative flex-1 z-10 w-full flex flex-col items-center justify-center">

        {/* Title Aura */}
        <div className="absolute top-[12%] left-1/2 transform -translate-x-1/2 w-full h-[35vh] flex items-center justify-center pointer-events-none opacity-40">
          <div className="relative animate-subtle-float">
            <div className="w-[600px] h-32 bg-blue-500/15 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-[9px] tracking-[2.2em] text-blue-200/30 uppercase font-black ml-[2.2em]">VISIONARY LEADERSHIP</div>
            </div>
          </div>
        </div>

        {/* Central Focal Headshot - Main Feature */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 w-[70vh] h-[70vh] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

          <div className="relative group cursor-pointer pointer-events-auto mt-20" onClick={() => setIsAiOpen(true)}>
            {!imageError ? (
              <img
                src="/assets/jonah.png"
                alt="Jonah"
                onError={() => setImageError(true)}
                className="h-[60vh] object-contain drop-shadow-[0_20px_100px_rgba(0,0,0,0.8)] transition-all duration-1000 group-hover:scale-[1.03]"
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 95%)',
                  maskImage: 'linear-gradient(to bottom, black 50%, transparent 95%)'
                }}
              />
            ) : (
              <div className="h-[65vh] w-[450px] flex flex-col items-center justify-center space-y-8 bg-white/5 rounded-[120px] border border-white/5 backdrop-blur-3xl">
                <User className="w-40 h-40 text-white/5" />
                <div className="text-center px-12">
                  <p className="text-[11px] font-black tracking-[0.5em] text-white/20 uppercase mb-2">Asset Missing</p>
                  <p className="text-[8px] text-blue-500/40 font-bold uppercase tracking-widest leading-relaxed">Ensure 'jonah.png' is in the root directory.</p>
                </div>
              </div>
            )}

            {/* Interaction Call-to-Action */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-morphism px-12 py-5 rounded-full border border-blue-400/20 opacity-0 group-hover:opacity-100 transition-all translate-y-10 group-hover:translate-y-[-50%] shadow-[0_0_60px_rgba(59,130,246,0.35)] pointer-events-none">
              <span className="text-[10px] text-white tracking-[1.1em] font-black uppercase flex items-center whitespace-nowrap ml-[1.1em]">
                COMMUNE <MessageCircle className="ml-5 w-5 h-5 text-blue-400" />
              </span>
            </div>
          </div>
        </div>

        {/* Navigational Hotspots */}
        <InteractiveHotspot
          label="Education"
          type="education"
          onClick={() => setActiveSidebar('education')}
          position={{ top: '50%', left: '18%' }}
        />

        <InteractiveHotspot
          label="Business"
          type="innovation"
          onClick={() => setActiveSidebar('business')}
          position={{ top: '50%', left: '82%' }}
        />

        {/* Footer Action Buttons */}
        <div className="absolute bottom-12 left-0 w-full flex justify-center space-x-10 z-40 px-12">
          <button
            onClick={() => setIsVisionOpen(true)}
            className="group relative px-20 py-6 rounded-full glass-morphism overflow-hidden transition-all duration-500 hover:border-white/30 active:scale-95 shadow-2xl"
          >
            <span className="relative z-10 text-[11px] font-black tracking-[0.6em] text-white/50 group-hover:text-white uppercase transition-colors ml-[0.6em]">THE VISION</span>
          </button>

          <button
            onClick={() => setIsFlywheelOpen(true)}
            className="group relative px-20 py-6 rounded-full bg-blue-600 border border-blue-400/30 transition-all duration-500 hover:shadow-[0_0_70px_rgba(59,130,246,0.5)] hover:scale-105 active:scale-95 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/20 to-blue-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative z-10 text-[11px] font-black tracking-[0.6em] text-white uppercase ml-[0.6em]">ECOSYSTEM FLYWHEEL</span>
          </button>
        </div>
      </main>

      {/* AI Intelligence Interaction Hub */}
      <div className={`fixed right-12 bottom-32 z-50 w-[480px] transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) transform ${isAiOpen ? 'translate-y-0 opacity-100' : 'translate-y-40 opacity-0 pointer-events-none'}`}>
        <div className="glass-morphism p-12 rounded-[64px] border border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.6)]">
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center space-x-5">
              <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                <Sparkles className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="font-lexend font-black text-white uppercase text-[11px] tracking-widest mb-1">Spirit Frequency</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-[9px] text-blue-400/60 font-bold uppercase tracking-[0.2em]">Deep Resonance Active</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsAiOpen(false)} className="p-3 hover:bg-white/10 rounded-full transition-all group">
              <X className="w-6 h-6 text-white/20 group-hover:text-white" />
            </button>
          </div>

          <div className="min-h-[160px] mb-10 text-[16px] font-medium text-slate-300 leading-relaxed tracking-wide">
            {isLoadingWisdom ? (
              <div className="flex flex-col items-center justify-center h-full py-10 space-y-6">
                <Loader2 className="w-12 h-12 animate-spin text-blue-500/40" />
                <span className="text-[10px] uppercase tracking-[0.5em] text-blue-400/50">Synthesizing Depths...</span>
              </div>
            ) : wisdom ? (
              <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000">
                <p className="text-white/90 italic border-l-2 border-blue-500/30 pl-8 py-3 text-lg leading-relaxed">"{wisdom}"</p>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-white/20 text-[11px] uppercase tracking-[0.6em] mb-4 leading-loose text-center">Inquire regarding the collective future of humanity</p>
                <div className="w-12 h-[1px] bg-white/10 mx-auto" />
              </div>
            )}
          </div>

          <form onSubmit={handleAskWisdom} className="relative group">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Query the depths..."
              className="w-full bg-white/5 border border-white/10 rounded-full px-12 py-7 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/40 focus:bg-white/[0.08] transition-all"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-5 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-all shadow-2xl active:scale-90"
            >
              <Send className="w-6 h-6" />
            </button>
          </form>
        </div>
      </div>

      {/* Floating Commune Trigger */}
      <button
        onClick={() => setIsAiOpen(!isAiOpen)}
        className="fixed bottom-12 right-12 z-50 bg-[#0a1128] border border-blue-500/20 p-8 rounded-full shadow-[0_0_60px_rgba(0,0,0,0.6)] hover:scale-110 active:scale-95 transition-all group overflow-hidden"
      >
        <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <MessageCircle className="text-white w-9 h-9 relative z-10 transition-transform group-hover:rotate-12" />
      </button>

      {/* Dynamic Overlays */}
      <InitiativeSidebar isOpen={activeSidebar === 'education'} onClose={() => setActiveSidebar(null)} type="education" side="left" />
      <InitiativeSidebar isOpen={activeSidebar === 'business'} onClose={() => setActiveSidebar(null)} type="business" side="right" />
      <VisionModal isOpen={isVisionOpen} onClose={() => setIsVisionOpen(false)} />
      <FlywheelModal isOpen={isFlywheelOpen} onClose={() => setIsFlywheelOpen(false)} />
      <GovernanceModal isOpen={isGovernanceOpen} onClose={() => setIsGovernanceOpen(false)} />
      <ImpactModal isOpen={isImpactOpen} onClose={() => setIsImpactOpen(false)} />
    </div>
  );
};

export default App;
