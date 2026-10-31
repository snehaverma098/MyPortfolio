import React from 'react';
import { Target, Sparkles, BookOpen, GitMerge, Briefcase } from 'lucide-react';

const Focus = () => {
  const focusAreas = [
    {
      index: '01',
      title: 'Deepening ML Foundations & SLMs',
      desc: 'Investigating transformer architectures, attention mechanisms, and small language model (SLM) quantization for edge deployment.',
      status: 'Active Study',
      icon: Target,
      color: '#7546C8', // Rich Violet
    },
    {
      index: '02',
      title: 'Building Agentic Tool-Calling Workflows',
      desc: 'Developing modular Python services where AI models autonomously invoke structured APIs, query databases, and validate intermediate reasoning steps.',
      status: 'Prototyping',
      icon: Sparkles,
      color: '#F45168', // Coral Red
    },
    {
      index: '03',
      title: 'Data Structures & Algorithms in C++',
      desc: 'Reinforcing fundamental algorithmic problem solving, graph theory, and dynamic programming for competitive performance and technical interview readiness.',
      status: 'Daily Practice',
      icon: BookOpen,
      color: '#2855D9', // Cobalt Blue
    },
    {
      index: '04',
      title: 'Open Source in GSSoC 2026',
      desc: 'Submitting pull requests, writing documentation, and collaborating with maintainers across open source repositories and AI agent community tracks.',
      status: 'In Progress',
      icon: GitMerge,
      color: '#176B50', // Forest Green
    },
    {
      index: '05',
      title: 'Software Engineering & AI/ML Internships',
      desc: 'Actively seeking 2026 internship roles where I can contribute to high-impact production codebases and learn from experienced engineering mentors.',
      status: 'Open to Roles',
      icon: Briefcase,
      color: '#D96B35', // Burnt Orange
    },
  ];

  return (
    <section 
      id="focus" 
      className="py-24 sm:py-32 relative bg-[#FFFDF8] border-t border-[#38231F]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-caveat text-2xl sm:text-3xl text-[#D96B35] font-bold -rotate-1">
              current trajectory
            </span>
            <svg className="w-6 h-6 text-[#D96B35]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#38231F]/15 text-xs font-mono mb-4 text-[#38231F] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#D96B35]" />
            <span className="font-bold">04 // CURRENT DIRECTION</span>
          </div>

          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl text-[#38231F] tracking-tight leading-[1.08] mb-4 max-w-4xl">
            What am I working <span className="italic font-normal text-[#D96B35]">toward right now?</span>
          </h2>
          
          <p className="text-[#38231F]/75 text-base sm:text-lg max-w-2xl font-sans leading-relaxed">
            A transparent look at my daily engineering discipline, active learning curriculum, and the milestones I am currently tackling.
          </p>
        </div>

        {/* Structured Focus Cards Grid in White Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.index}
                className="p-7 rounded-3xl bg-white border-2 border-[#38231F]/12 hover:border-[#38231F]/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between group text-left hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#38231F]/10">
                    <span 
                      className="font-mono text-xs font-bold"
                      style={{ color: item.color }}
                    >
                      FOCUS // {item.index}
                    </span>
                    <span 
                      className="px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold"
                      style={{ backgroundColor: `${item.color}15`, color: item.color }}
                    >
                      {item.status}
                    </span>
                  </div>

                  <div className="flex items-start gap-3.5 mb-3">
                    <div 
                      className="p-2.5 rounded-2xl shrink-0 mt-0.5"
                      style={{ backgroundColor: `${item.color}15`, color: item.color }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-playfair font-bold text-xl text-[#38231F] group-hover:text-[#F45168] transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-[#38231F]/75 text-xs sm:text-sm leading-relaxed pl-10 font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#38231F]/10 flex items-center justify-between text-[11px] font-mono text-[#38231F]/60 pl-10">
                  <span>Active Sprint Goal</span>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Focus;
