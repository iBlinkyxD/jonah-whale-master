
import React, { useRef } from 'react';
import { X, ArrowRight, Globe, BookOpen, Users, Briefcase, TrendingUp, Zap, Laptop } from 'lucide-react';

interface Initiative {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  tag: string;
}

interface InitiativeModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'education' | 'business';
}

const EDUCATION_DATA: Initiative[] = [
  { 
    title: "Impact Miami", 
    subtitle: "Empowering Underserved Youth", 
    description: "Mentorship and career pathways for Miami's next generation of tech leaders.", 
    icon: Users,
    tag: "Social Impact"
  },
  { 
    title: "DIA", 
    subtitle: "Dominican AI Association", 
    description: "Creating pipelines for Dominican students to access international AI training.", 
    icon: Globe,
    tag: "Global Reach"
  },
  { 
    title: "NYC Educator Legacy", 
    subtitle: "Foundational Teaching", 
    description: "Focusing on urban pedagogy and teacher empowerment in New York City.", 
    icon: BookOpen,
    tag: "Direct Role"
  },
  { 
    title: "The Whale Digital", 
    subtitle: "Scalable Learning Platform", 
    description: "Proprietary digital ecosystem delivering adaptive learning tools worldwide.", 
    icon: Laptop,
    tag: "Digital Program"
  }
];

const BUSINESS_DATA: Initiative[] = [
  { 
    title: "Visionary Ventures", 
    subtitle: "Seed & Growth Capital", 
    description: "Investing in minority-led startups that prioritize social equity.", 
    icon: Briefcase,
    tag: "Investment"
  },
  { 
    title: "Strategic Resonance", 
    subtitle: "Growth Consultancy", 
    description: "Advising on ethical scaling and human-centric corporate culture.", 
    icon: TrendingUp,
    tag: "Consulting"
  },
  { 
    title: "The Hub Miami", 
    subtitle: "Innovation Ecosystem", 
    description: "Co-working spaces fostering tech and creative cross-pollination.", 
    icon: Zap,
    tag: "Real Estate"
  },
  { 
    title: "Future-Proof Media", 
    subtitle: "Cinema & Stories", 
    description: "Production house dedicated to highlighting global changemakers.", 
    icon: Globe,
    tag: "Media"
  }
];

const InitiativeModal: React.FC<InitiativeModalProps> = ({ isOpen, onClose, type }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const data = type === 'education' ? EDUCATION_DATA : BUSINESS_DATA;
  const mainTitle = type === 'education' ? "Academic Stewardship" : "Enterprise & Vision";
  const themeColor = type === 'education' ? 'text-blue-400' : 'text-cyan-400';
  const themeBorder = type === 'education' ? 'border-blue-500/30' : 'border-cyan-500/30';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-[#02040a]/90 backdrop-blur-2xl" 
        onClick={onClose} 
      />
      
      <div className="relative w-full max-w-7xl h-auto max-h-[92vh] glass-morphism rounded-[48px] overflow-hidden flex flex-col animate-in zoom-in-95 duration-500 border border-white/5">
        
        <div className="px-10 pt-10 pb-6 flex justify-between items-end shrink-0">
          <div>
            <div className="flex items-center space-x-3 mb-2">
               <div className={`w-8 h-[1.5px] ${type === 'education' ? 'bg-blue-500' : 'bg-cyan-500'}`} />
               <span className={`text-[8px] font-black tracking-[0.4em] uppercase ${themeColor}`}>
                 {type === 'education' ? "Wisdom Framework" : "Economic Architecture"}
               </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-lexend font-black text-white tracking-tighter leading-none">{mainTitle}</h2>
          </div>
          
          <button 
            onClick={onClose} 
            className="group flex items-center space-x-3 p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all"
          >
            <span className="text-[9px] font-bold text-white/40 group-hover:text-white uppercase tracking-widest">Close</span>
            <X className="w-4 h-4 text-white/40 group-hover:text-white" />
          </button>
        </div>

        <div className="px-10 pb-6 shrink-0">
          <div className="inline-flex items-center space-x-3 py-2 px-5 rounded-xl bg-white/5 border border-white/5 max-w-xl">
            <Users className={`w-3.5 h-3.5 ${themeColor}`} />
            <p className="text-[11px] font-medium text-slate-300 leading-relaxed italic">
              "Strategic oversight and sustainable funding for global impact."
            </p>
          </div>
        </div>

        <div className="flex-1 px-10 pb-12 overflow-hidden">
          <div 
            ref={scrollRef}
            className="h-full flex space-x-6 overflow-x-auto pb-4 snap-x no-scrollbar"
            style={{ scrollBehavior: 'smooth' }}
          >
            {data.map((item, idx) => (
              <div 
                key={idx} 
                className="flex-none w-[300px] h-full snap-start group relative"
              >
                <div className={`h-full flex flex-col p-8 rounded-[32px] bg-white/[0.03] border border-white/5 hover:${themeBorder} transition-all duration-500`}>
                  
                  <div className="flex justify-between items-start mb-8">
                    <div className={`p-4 rounded-2xl bg-white/5 border border-white/5 shadow-xl`}>
                      <item.icon className={`w-6 h-6 ${themeColor}`} />
                    </div>
                    <span className="text-[8px] font-black tracking-widest text-white/20 uppercase">
                      {item.tag}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h4 className="text-[8px] font-black tracking-[0.2em] text-blue-400 uppercase mb-2">{item.subtitle}</h4>
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight tracking-tight">{item.title}</h3>
                    <p className="text-slate-400 text-[11px] leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                    <button className="flex items-center space-x-2 text-[8px] font-black tracking-widest text-white uppercase group/btn">
                      <span>Explore</span>
                      <ArrowRight className="w-2.5 h-2.5 text-blue-400" />
                    </button>
                    <div className="flex -space-x-1.5">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-5 h-5 rounded-full border border-slate-900 bg-slate-800 overflow-hidden">
                           <img src={`https://i.pravatar.cc/100?u=${item.title}${i}`} alt="user" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 left-10 right-10 flex items-center justify-between pointer-events-none">
           <div className="flex space-x-1.5">
              {data.map((_, i) => (
                <div key={i} className={`h-0.5 rounded-full transition-all duration-500 ${i === 0 ? 'w-6 bg-blue-500' : 'w-1.5 bg-white/10'}`} />
              ))}
           </div>
           <span className="text-[7px] text-white/10 uppercase tracking-[0.2em] font-bold">Swipe to navigate the depths</span>
        </div>
      </div>
    </div>
  );
};

export default InitiativeModal;
