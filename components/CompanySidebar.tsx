import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

interface Initiative {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
  icon?: React.ElementType;
}

interface CompanySidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const BUSINESS_VENTURES: Initiative[] = [
  {
    title: "Royal Home Solutions",
    subtitle: "President",
    description:
      "Leading innovative residential development and strategic real estate solutions.",
    image: "/assets/business/royal-home.jpeg",
    tag: "Real Estate",
  },
  {
    title: "Hero Homes University",
    subtitle: "Partner",
    description:
      "Architecting a new standard for real estate education and professional scaling.",
    image: "/assets/business/hero-homes.jpeg",
    tag: "Education",
  },
  {
    title: "Apollo-E",
    subtitle: "Investor",
    description:
      "Backing high-impact ventures that define the next generation of global impact.",
    image: "/assets/business/apollo-e.jpeg",
    tag: "Capital",
  },
  {
    title: "DAIA",
    subtitle: "Dominican AI Association",
    description:
      "Dominican AI Association. Bridging the gap for Dominican students entering the global AI workforce.",
    image: "/assets/education/edu-daia.jpeg",
    tag: "Dominican Republic",
  },
];

const CompanySidebar: React.FC<CompanySidebarProps> = React.memo(({ isOpen, onClose }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const slideClass = isMobile
    ? isOpen ? "translate-y-0" : "translate-y-full"
    : isOpen ? "translate-x-0" : "-translate-x-full";

  const positionClass = isMobile
    ? "bottom-0 left-0 right-0"
    : "top-0 left-0 h-screen";

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

      <div
        className={`fixed ${positionClass} z-[70] bg-[#0c1222] shadow-[0_0_100px_rgba(0,0,0,0.5)] transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${
          isMobile
            ? "w-full max-h-[92vh] border-t border-white/10 rounded-t-[32px]"
            : "w-full max-w-lg border-r border-white/10"
        } ${slideClass}`}
      >
        {/* Drag handle — mobile only */}
        {isMobile && (
          <div className="flex justify-center pt-3 pb-1 shrink-0">
            <div className="w-10 h-1 rounded-full bg-white/20" />
          </div>
        )}

        <div className={`relative px-8 pb-4 flex flex-col shrink-0 ${isMobile ? "pt-4" : "pt-10"}`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-6 p-2 rounded-full hover:bg-white/10 transition-colors group"
          >
            <X className="w-5 h-5 text-white/40 group-hover:text-white" />
          </button>

          <div className="mb-6">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-[2px] bg-cyan-600" />
              <span className="text-[9px] font-black tracking-[0.4em] uppercase text-cyan-400">
                Enterprise Network
              </span>
            </div>
            <h2 className="text-3xl font-lexend font-black text-white leading-none tracking-tighter">
              Companies Hub
            </h2>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-8 pb-12 no-scrollbar">
          <div className="space-y-4">
            {BUSINESS_VENTURES.map((item, idx) => (
              <div
                key={idx}
                className="group p-5 rounded-[28px] bg-white/[0.04] border border-white/5 hover:bg-white/[0.08] transition-all cursor-pointer"
              >
                <div className="flex items-center space-x-5">
                  <div className="relative shrink-0 w-20 h-20 rounded-xl overflow-hidden border border-white/10 bg-[#02040a]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {item.icon && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <item.icon className="w-8 h-8 text-white/20 group-hover:text-white/60 transition-colors" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-lg font-bold text-white tracking-tight truncate">
                        {item.title}
                      </h3>
                      <span className="text-[7px] font-black tracking-widest text-white/20 uppercase bg-white/5 px-1.5 py-0.5 rounded-sm">
                        {item.tag}
                      </span>
                    </div>
                    <h4 className="text-[8px] font-bold text-cyan-400 uppercase tracking-widest mb-1 truncate">
                      {item.subtitle}
                    </h4>
                    <p className="text-slate-400 text-[11px] leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 pt-4 shrink-0 bg-gradient-to-t from-[#0c1222] to-transparent">
          <div className="flex justify-between items-center text-[7px] font-bold text-white/10 uppercase tracking-[0.2em]">
            <span>Ecosystem Alpha v6.4</span>
            <span>© 2025 JONAH</span>
          </div>
        </div>
      </div>
    </>
  );
});

export default CompanySidebar;
