import React, { useState, useEffect } from "react";
import {
  X,
  ArrowLeft,
  Clock,
  Award,
  Wallet,
  CheckCircle2,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  duration: string;
  level: string;
  description: string;
  price: number;
  outcomes: string[];
  image: string;
  heroText: string;
}

interface CoursesSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const EDUCATION_COURSES: Course[] = [
  {
    id: "re-101",
    title: "Real Estate 101",
    duration: "8 Weeks",
    level: "Foundational",
    description:
      "Mastering the fundamentals of property acquisition, valuation, and portfolio growth in the modern era.",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400",
    heroText:
      "In this course, you will dive into and learn how to identify high-yield property opportunities, navigate complex zoning laws, and master the art of the multi-unit acquisition.",
    outcomes: ["Market Analysis", "Valuation Models", "Closing Strategies"],
  },
  {
    id: "pl-raising",
    title: "Private Lending",
    duration: "10 Weeks",
    level: "Advanced",
    description:
      "Strategic frameworks for raising capital from private networks and managing multi-staged funding rounds.",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400",
    heroText:
      "In this course, you will dive into and learn how to build a network of sophisticated lenders, structure debt-to-equity ratios for maximum leverage, and secure capital for massive project scaling.",
    outcomes: ["Lender Psychology", "Compliance Docs", "Scalable Sourcing"],
  },
];

const CoursesSidebar: React.FC<CoursesSidebarProps> = React.memo(({ isOpen, onClose }) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const slideClass = isMobile
    ? isOpen ? "translate-y-0" : "translate-y-full"
    : isOpen ? "translate-x-0" : "translate-x-full";

  const positionClass = isMobile
    ? "bottom-0 left-0 right-0"
    : "top-0 right-0 h-screen";

  const handleClose = () => {
    onClose();
    setTimeout(() => setSelectedCourse(null), 500);
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={handleClose}
      />

      <div
        className={`fixed ${positionClass} z-[70] bg-[#0c1222] shadow-[0_0_100px_rgba(0,0,0,0.5)] transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${
          isMobile
            ? "w-full max-h-[92vh] border-t border-white/10 rounded-t-[32px]"
            : "w-full max-w-lg border-l border-white/10"
        } ${slideClass}`}
      >
        {/* Course detail overlay */}
        {selectedCourse && (
          <div className="absolute inset-0 z-50 bg-[#0c1222] animate-in slide-in-from-right duration-500 flex flex-col overflow-hidden">
            <div className="relative w-full h-72 shrink-0 overflow-hidden">
              <img
                src={selectedCourse.image}
                alt={selectedCourse.title}
                className="w-full h-full object-cover"
                style={{
                  WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                  maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1222] via-[#0c1222]/50 to-transparent" />
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-6 left-6 flex items-center space-x-3 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/80 hover:text-white transition-colors z-10"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-[10px] font-black tracking-widest uppercase">Back</span>
              </button>
            </div>

            <div className="flex-1 px-10 py-6 overflow-y-auto no-scrollbar">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
                <Award className="w-3 h-3 text-blue-400" />
                <span className="text-[8px] font-black tracking-widest text-white/60 uppercase">
                  {selectedCourse.level} Module
                </span>
              </div>

              <h3 className="text-3xl font-lexend font-black text-white leading-tight mb-3 tracking-tighter">
                {selectedCourse.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-bold italic">
                {selectedCourse.heroText}
              </p>

              <div className="space-y-4 mb-8">
                <span className="text-[9px] font-black tracking-widest text-white/20 uppercase">
                  Key Learning Outcomes
                </span>
                <div className="grid gap-3">
                  {selectedCourse.outcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      <span className="text-xs font-semibold">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-[32px] bg-white/[0.03] border border-white/5 flex items-center justify-between mt-auto">
                <div>
                  <span className="block text-[8px] font-black text-white/20 uppercase tracking-widest mb-1">
                    Tuition Investment
                  </span>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-3xl font-lexend font-black text-white">
                      ${selectedCourse.price}
                    </span>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                      USD
                    </span>
                  </div>
                </div>
                <button className="flex items-center space-x-3 px-6 py-4 rounded-2xl bg-blue-600 text-white text-[10px] font-black tracking-widest uppercase shadow-2xl hover:scale-105 transition-transform active:scale-95">
                  <ShoppingCart className="w-4 h-4" />
                  <span>Secure Access</span>
                </button>
              </div>
            </div>

            <p className="text-center text-[7px] font-black text-white/10 uppercase tracking-[0.2em] py-4">
              Cohorts filling fast • 2025 Cycle
            </p>
          </div>
        )}

        {/* Drag handle — mobile only */}
        {isMobile && (
          <div className="flex justify-center pt-3 pb-1 shrink-0">
            <div className="w-10 h-1 rounded-full bg-white/20" />
          </div>
        )}

        <div className={`relative px-8 pb-4 flex flex-col shrink-0 ${isMobile ? "pt-4" : "pt-10"}`}>
          <button
            onClick={handleClose}
            className={`absolute top-4 ${isMobile ? 'right-6' : 'left-6'} p-2 rounded-full hover:bg-white/10 transition-colors group`}
          >
            <X className="w-5 h-5 text-white/40 group-hover:text-white" />
          </button>

          <div className="mb-6">
            <div className={`flex items-center space-x-3 mb-2 ${isMobile ? '' : 'flex-row-reverse space-x-reverse'}`}>
              <div className="w-8 h-[2px] bg-blue-600" />
              <span className="text-[9px] font-black tracking-[0.4em] uppercase text-blue-400">
                Academic Stewardship
              </span>
            </div>
            <h2 className={`text-3xl font-lexend font-black text-white leading-none tracking-tighter ${isMobile ? '' : 'text-right'}`}>
              Courses
            </h2>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-8 pb-12 no-scrollbar">
          <div className="space-y-4">
            {EDUCATION_COURSES.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedCourse(item)}
                className="group p-4 rounded-[28px] bg-white/[0.04] border border-white/5 hover:bg-white/[0.08] transition-all cursor-pointer relative overflow-hidden"
              >
                <div className="flex items-center space-x-4">
                  <div className="relative shrink-0 w-24 h-24 rounded-2xl overflow-hidden border border-white/5 shadow-inner">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2 text-[7px] font-bold text-slate-500 uppercase tracking-widest">
                        <Clock className="w-2.5 h-2.5" />
                        <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-white font-black text-sm tracking-tight">
                        <Wallet className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-lg text-glow font-lexend">${item.price}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1 tracking-tight truncate">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-[10px] leading-tight mb-3 line-clamp-1">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-1.5">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-4 h-4 rounded-full border border-slate-900 bg-slate-800" />
                        ))}
                      </div>
                      <button className="flex items-center space-x-1 text-[7px] font-black text-white/40 group-hover:text-white uppercase tracking-widest transition-colors">
                        <span>Brief</span>
                        <ArrowRight className="w-2.5 h-2.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 pt-4 shrink-0 bg-gradient-to-t from-[#0c1222] to-transparent">
          <div className="flex justify-between items-center flex-row-reverse text-[7px] font-bold text-white/10 uppercase tracking-[0.2em]">
            <span>Ecosystem Alpha v6.4</span>
            <span>© 2025 JONAH</span>
          </div>
        </div>
      </div>
    </>
  );
});

export default CoursesSidebar;
