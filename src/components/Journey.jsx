import React from 'react';
import { GraduationCap, Award, Briefcase, Code2, Cpu, GitBranch, Rocket } from 'lucide-react';

const Journey = () => {
  const milestones = [
    {
      period: '2024',
      tag: 'ACADEMIC FOUNDATION',
      title: 'Class XII Graduation (PCM 99.40%)',
      subtitle: 'T.S.S.M Sr. Sec. School, Ludhiana',
      desc: 'Graduated with 99.40% in physics, chemistry, and mathematics (following 98.46% in Class X). Solidified the analytical and mathematical discipline that underlies modern machine learning.',
      icon: GraduationCap,
      color: '#F45168', // Coral Red
    },
    {
      period: 'Aug 2025 – Present',
      tag: 'UNDERGRADUATE DEGREE',
      title: 'B.Tech in CSE (AI & Machine Learning)',
      subtitle: 'Lovely Professional University, Punjab',
      desc: 'Immersed in core computer science, discrete math, data structures, and foundational neural networks. Maintaining an 8.0 CGPA while building practical software outside the classroom.',
      icon: Code2,
      color: '#2855D9', // Cobalt Blue
    },
    {
      period: 'Oct – Dec 2025',
      tag: 'INDUSTRY CERTIFICATIONS',
      title: 'Python Foundations & Career Edge',
      subtitle: 'TCS iON & IBM SkillsBuild',
      desc: 'Completed TCS iON Career Edge (Young Professional) and the IBM SkillsBuild Winter Program, followed by Infosys Programming Fundamentals in Python.',
      icon: Award,
      color: '#7546C8', // Rich Violet
    },
    {
      period: 'Mar – Apr 2026',
      tag: 'VIRTUAL INTERNSHIP',
      title: 'AI Strategy & Business Intelligence Virtual Internship',
      subtitle: 'IBM SkillsBuild & CSRBOX (in association with AICTE)',
      desc: 'Completed a 6-week intensive program analyzing real-world enterprise use cases, data-informed decision architectures, and AI adoption strategy.',
      icon: Briefcase,
      color: '#D96B35', // Burnt Orange
    },
    {
      period: 'May – July 2026',
      tag: 'PROJECT SHIPMENTS',
      title: 'VoteWise AI, MindEdu AI & NailEdit.frr',
      subtitle: 'Applied AI Prototyping & Client Delivery',
      desc: 'Shipped two AI systems (VoteWise civic comparison engine & MindEdu student sentiment analytics) and engineered a bespoke client web experience in React and Tailwind CSS.',
      icon: Cpu,
      color: '#176B50', // Forest Green
    },
    {
      period: '2026',
      tag: 'OPEN SOURCE FELLOWSHIP',
      title: 'GirlScript Summer of Code (GSSoC 2026)',
      subtitle: 'Selected Contributor — Open Source & AI/Agents Tracks',
      desc: 'Collaborating across community repositories, submitting pull requests, and building practical tooling alongside global open source developers.',
      icon: GitBranch,
      color: '#2855D9', // Cobalt Blue
    },
    {
      period: 'Target: Summer 2026',
      tag: 'ACTIVE PURSUIT',
      title: 'Software Engineering & AI/ML Internships',
      subtitle: 'Open to Industry Opportunities',
      desc: 'Targeting software engineering and AI internship roles to tackle production-scale distributed systems and collaborate with experienced engineering teams.',
      icon: Rocket,
      color: '#F45168', // Coral Red
    },
  ];

  return (
    <section 
      id="journey" 
      className="py-24 sm:py-32 relative bg-white border-t border-[#38231F]/10 overflow-hidden"
    >
      <div id="experience" className="absolute -top-16 left-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-20 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-caveat text-2xl sm:text-3xl text-[#7546C8] font-bold -rotate-1">
              how I got here
            </span>
            <svg className="w-6 h-6 text-[#7546C8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFDF8] border border-[#38231F]/15 text-xs font-mono mb-4 text-[#38231F] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#7546C8]" />
            <span className="font-bold">05 // VERIFIED MILESTONES</span>
          </div>

          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl text-[#38231F] tracking-tight leading-[1.08] mb-4 max-w-4xl">
            My Journey: <span className="italic font-normal text-[#7546C8]">A Chronology of Growth</span>.
          </h2>
          
          <p className="text-[#38231F]/75 text-base sm:text-lg max-w-2xl font-sans leading-relaxed">
            A chronological timeline of verified academic milestones, project releases, corporate internships, and open source participation.
          </p>
        </div>

        {/* Refined Thin Editorial Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Central Connecting Line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-[#38231F]/15" />

          <div className="space-y-12">
            {milestones.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={item.title}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } group`}
                >
                  
                  {/* Timeline Node Marker */}
                  <div 
                    className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-4 z-10 w-10 h-10 rounded-full bg-white border-2 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform"
                    style={{ borderColor: item.color, color: item.color }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Card Content Block */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] ml-14 sm:ml-0 ${
                    isEven ? 'sm:mr-auto sm:pr-6 text-left' : 'sm:ml-auto sm:pl-6 text-left'
                  }`}>
                    <div className="p-6 sm:p-7 rounded-2xl bg-[#FFFDF8] border-2 border-[#38231F]/12 hover:border-[#38231F]/25 hover:shadow-md transition-all duration-300 shadow-xs space-y-3">
                      
                      {/* Period & Tag Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-[#38231F]/10">
                        <span 
                          className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full"
                          style={{ backgroundColor: `${item.color}15`, color: item.color }}
                        >
                          {item.period}
                        </span>
                        <span className="font-mono text-[10px] text-[#38231F]/60 uppercase tracking-wider font-bold">
                          {item.tag}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <div>
                        <h3 className="font-playfair font-bold text-xl text-[#38231F] group-hover:text-[#F45168] transition-colors">
                          {item.title}
                        </h3>
                        <span className="text-[#38231F]/70 text-xs font-mono block mt-0.5 font-semibold">
                          {item.subtitle}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-[#38231F]/75 text-xs sm:text-sm leading-relaxed font-sans">
                        {item.desc}
                      </p>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Journey;
