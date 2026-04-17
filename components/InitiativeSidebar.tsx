
import React, { useState } from 'react';
import { X, ArrowLeft, Clock, Award, Wallet, CheckCircle2, ShoppingCart, ArrowRight, Home, GraduationCap, Cpu, Rocket } from 'lucide-react';

interface Initiative {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
  icon?: React.ElementType;
}

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

interface InitiativeSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'education' | 'business';
  side: 'left' | 'right';
}

const EDUCATION_INITIATIVES: Initiative[] = [
  {
    title: "Impact Miami",
    subtitle: "Youth Mentorship",
    description: "Technology access and career pathways for Miami's inner-city youth.",
    image: "/assets/education/edu-miami.jpeg",
    tag: "Miami, FL"
  },
  {
    title: "DAIA",
    subtitle: "Dominican AI Association",
    description: "Dominican AI Association. Bridging the gap for Dominican students entering the global AI workforce.",
    image: "/assets/education/edu-daia.jpeg",
    tag: "Dominican Republic"
  },
  {
    title: "Teach For America",
    subtitle: "Urban Innovation",
    description: "Empowering New York City teachers with modern urban pedagogy tools.",
    image: "/assets/education/edu-america.jpeg",
    tag: "New York, NY"
  }
];

const EDUCATION_COURSES: Course[] = [
  {
    id: "re-101",
    title: "Real Estate 101",
    duration: "8 Weeks",
    level: "Foundational",
    description: "Mastering the fundamentals of property acquisition, valuation, and portfolio growth in the modern era.",
    price: 799,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400",
    heroText: "In this course, you will dive into and learn how to identify high-yield property opportunities, navigate complex zoning laws, and master the art of the multi-unit acquisition.",
    outcomes: ["Market Analysis", "Valuation Models", "Closing Strategies"]
  },
  {
    id: "pl-raising",
    title: "Private Lending",
    duration: "10 Weeks",
    level: "Advanced",
    description: "Strategic frameworks for raising capital from private networks and managing multi-staged funding rounds.",
    price: 799,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400",
    heroText: "In this course, you will dive into and learn how to build a network of sophisticated lenders, structure debt-to-equity ratios for maximum leverage, and secure capital for massive project scaling.",
    outcomes: ["Lender Psychology", "Compliance Docs", "Scalable Sourcing"]
  }
];

const BUSINESS_VENTURES: Initiative[] = [
  {
    title: "Royal Home Solutions",
    subtitle: "President",
    description: "Leading innovative residential development and strategic real estate solutions.",
    image: "/assets/business/royal-home.jpeg",
    tag: "Real Estate",

  },
  {
    title: "Hero Homes University",
    subtitle: "Partner",
    description: "Architecting a new standard for real estate education and professional scaling.",
    image: "/assets/business/hero-homes.jpeg",
    tag: "Education",

  },
  {
    title: "Apollo-E",
    subtitle: "Investor",
    description: "Backing high-impact ventures that define the next generation of global impact.",
    image: "/assets/business/apollo-e.jpeg",
    tag: "Capital",

  }
];

const BUSINESS_CONSULTANCY: Course[] = [
  {
    id: "sys-scale",
    title: "1:1 Phone Consultation (1hr)",
    duration: "Self-Paced",
    level: "Executive",
    description: "Strategies for growth that prioritize planetary health and ethical workforce expansion.",
    price: 499,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400",
    heroText: "In this course, you will dive into and learn how to implement regenerative business frameworks that drive profit while simultaneously healing local ecosystems and communities.",
    outcomes: ["ESG Integration", "Viral Growth", "Legacy Planning"]
  }
];

const InitiativeSidebar: React.FC<InitiativeSidebarProps> = ({ isOpen, onClose, type, side }) => {
  const [activeTab, setActiveTab] = useState<'initiatives' | 'courses'>('initiatives');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const initiatives = type === 'education' ? EDUCATION_INITIATIVES : BUSINESS_VENTURES;
  const courses = type === 'education' ? EDUCATION_COURSES : BUSINESS_CONSULTANCY;
  const themeColor = type === 'education' ? 'text-blue-400' : 'text-cyan-400';
  const themeBg = type === 'education' ? 'bg-blue-600' : 'bg-cyan-600';

  const slideClass = side === 'left'
    ? (isOpen ? 'translate-x-0' : '-translate-x-full')
    : (isOpen ? 'translate-x-0' : 'translate-x-full');

  const positionClass = side === 'left' ? 'left-0 border-r' : 'right-0 border-l';

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSelectedCourse(null);
      setActiveTab('initiatives');
    }, 500);
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-[2px] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={handleClose}
      />

      <div className={`fixed top-0 ${positionClass} z-[70] h-screen w-full max-w-lg bg-[#0c1222]/98 backdrop-blur-3xl border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${slideClass}`}>

        {/* Course Preview Overlay Layer */}
        {selectedCourse && (
          <div className="absolute inset-0 z-50 bg-[#0c1222] animate-in slide-in-from-right duration-500 flex flex-col overflow-hidden">
            <div className="relative w-full h-72 shrink-0 overflow-hidden">
              <img
                src={selectedCourse.image}
                alt={selectedCourse.title}
                className="w-full h-full object-cover"
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                  maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
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
              <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4`}>
                <Award className={`w-3 h-3 ${themeColor}`} />
                <span className="text-[8px] font-black tracking-widest text-white/60 uppercase">{selectedCourse.level} Module</span>
              </div>

              <h3 className="text-3xl font-lexend font-black text-white leading-tight mb-3 tracking-tighter">
                {selectedCourse.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-bold italic">
                {selectedCourse.heroText}
              </p>

              <div className="space-y-4 mb-8">
                <span className="text-[9px] font-black tracking-widest text-white/20 uppercase">Key Learning Outcomes</span>
                <div className="grid gap-3">
                  {selectedCourse.outcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-slate-300">
                      <CheckCircle2 className={`w-4 h-4 ${themeColor}`} />
                      <span className="text-xs font-semibold">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-[32px] bg-white/[0.03] border border-white/5 flex items-center justify-between mt-auto">
                <div>
                  <span className="block text-[8px] font-black text-white/20 uppercase tracking-widest mb-1">Tuition Investment</span>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-3xl font-lexend font-black text-white">${selectedCourse.price}</span>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">USD</span>
                  </div>
                </div>
                <button className={`flex items-center space-x-3 px-6 py-4 rounded-2xl ${themeBg} text-white text-[10px] font-black tracking-widest uppercase shadow-2xl hover:scale-105 transition-transform active:scale-95`}>
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

        <div className="relative p-8 pt-12 flex flex-col shrink-0">
          <button
            onClick={handleClose}
            className={`absolute top-6 ${side === 'left' ? 'right-6' : 'left-6'} p-2 rounded-full hover:bg-white/10 transition-colors group`}
          >
            <X className="w-5 h-5 text-white/40 group-hover:text-white" />
          </button>

          <div className="mb-6">
            <div className={`flex items-center space-x-3 mb-2 ${side === 'left' ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
              <div className={`w-8 h-[2px] ${themeBg}`} />
              <span className={`text-[9px] font-black tracking-[0.4em] uppercase ${themeColor}`}>
                {type === 'education' ? "Academic Stewardship" : "Enterprise Network"}
              </span>
            </div>
            <h2 className={`text-3xl font-lexend font-black text-white leading-none tracking-tighter ${side === 'right' ? 'text-right' : ''}`}>
              {type === 'education' ? "Learning Ecosystem" : "Business Hub"}
            </h2>
          </div>

          <div className="flex space-x-1 p-1 bg-white/5 rounded-xl border border-white/5">
            <button
              onClick={() => setActiveTab('initiatives')}
              className={`flex-1 py-2 px-3 rounded-lg text-[9px] font-black tracking-widest uppercase transition-all ${activeTab === 'initiatives' ? 'bg-white/10 text-white shadow-xl' : 'text-white/30 hover:text-white/60'}`}
            >
              {type === 'education' ? "Initiatives" : "Ventures"}
            </button>
            <button
              onClick={() => setActiveTab('courses')}
              className={`flex-1 py-2 px-3 rounded-lg text-[9px] font-black tracking-widest uppercase transition-all ${activeTab === 'courses' ? 'bg-white/10 text-white shadow-xl' : 'text-white/30 hover:text-white/60'}`}
            >
              {type === 'education' ? "Courses" : "Consultancy"}
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-8 pb-12 no-scrollbar">
          <div className="space-y-4">
            {activeTab === 'initiatives' ? (
              initiatives.map((item, idx) => (
                <div key={idx} className="group p-5 rounded-[28px] bg-white/[0.04] border border-white/5 hover:bg-white/[0.08] transition-all cursor-pointer">
                  <div className="flex items-center space-x-5">
                    <div className="relative shrink-0 w-20 h-20 rounded-xl overflow-hidden border border-white/10 bg-[#02040a]">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      {item.icon && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <item.icon className="w-8 h-8 text-white/20 group-hover:text-white/60 transition-colors" />
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-lg font-bold text-white tracking-tight truncate">{item.title}</h3>
                        <span className="text-[7px] font-black tracking-widest text-white/20 uppercase bg-white/5 px-1.5 py-0.5 rounded-sm">{item.tag}</span>
                      </div>
                      <h4 className={`text-[8px] font-bold ${themeColor} uppercase tracking-widest mb-1 truncate`}>{item.subtitle}</h4>
                      <p className="text-slate-400 text-[11px] leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              courses.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedCourse(item)}
                  className="group p-4 rounded-[28px] bg-white/[0.04] border border-white/5 hover:bg-white/[0.08] transition-all cursor-pointer relative overflow-hidden"
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative shrink-0 w-24 h-24 rounded-2xl overflow-hidden border border-white/5 shadow-inner">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
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
                      <h3 className="text-lg font-bold text-white mb-1 tracking-tight truncate">{item.title}</h3>
                      <p className="text-slate-400 text-[10px] leading-tight mb-3 line-clamp-1">{item.description}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex -space-x-1.5">
                          {[1, 2, 3].map(i => <div key={i} className="w-4 h-4 rounded-full border border-slate-900 bg-slate-800" />)}
                        </div>
                        <button className="flex items-center space-x-1 text-[7px] font-black text-white/40 group-hover:text-white uppercase tracking-widest transition-colors">
                          <span>Brief</span>
                          <ArrowRight className="w-2.5 h-2.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="p-8 pt-4 shrink-0 bg-gradient-to-t from-[#0c1222] to-transparent">
          <div className={`flex justify-between items-center text-[7px] font-bold text-white/10 uppercase tracking-[0.2em] ${side === 'right' ? 'flex-row-reverse' : ''}`}>
            <span>Ecosystem Alpha v6.4</span>
            <span>© 2025 JONAH</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default InitiativeSidebar;
