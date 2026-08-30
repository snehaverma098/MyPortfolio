import React from 'react';
import { Rocket, Code2, Cpu, GitBranch } from 'lucide-react';

const Journey = () => {
  const milestones = [
    {
      year: '2025',
      title: 'Started B.Tech CSE',
      desc: 'Began my journey in Computer Science with a focus on Artificial Intelligence & Machine Learning.',
      icon: Code2,
      badge: 'Academics',
      accent: 'border-amber-400/40 text-amber-400 bg-amber-400/10'
    },
    {
      year: '2026',
      title: 'Web Development',
      desc: 'Built a foundation in Python, HTML, CSS and JavaScript, then moved into React, Vite and Tailwind CSS.',
      icon: Code2,
      badge: 'Frontend & Stack',
      accent: 'border-yellow-400/40 text-yellow-400 bg-yellow-400/10'
    },
    {
      year: '2026',
      title: 'AI Projects',
      desc: 'Started building practical AI-powered projects including MindEdu AI and VoteWise AI.',
      icon: Cpu,
      badge: 'Applied AI',
      accent: 'border-amber-300/40 text-amber-300 bg-amber-500/10'
    },
    {
      year: '2026',
      title: 'Open Source',
      desc: 'Selected for GSSoC 2026 in the Open Source and AI/Agents tracks.',
      icon: GitBranch,
      badge: 'GSSoC 2026',
      accent: 'border-amber-400/40 text-amber-400 bg-amber-400/10'
    },
    {
      year: 'Next →',
      title: 'Future Horizons',
      desc: 'Building stronger AI/ML projects, contributing to open source and preparing for industry opportunities.',
      icon: Rocket,
      badge: 'Goals',
      accent: 'border-yellow-500/40 text-yellow-400 bg-yellow-500/10'
    }
  ];

  return (
    <section id="journey" className="py-24 relative bg-[#000000] border-t border-white/10">
      {/* Background ambient glow */}
      <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E0E0E] border border-white/10 text-amber-400 text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>04 // TIMELINE</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            My <span className="text-amber-gradient">Journey</span>
          </h2>
          
          <p className="text-slate-400 text-base sm:text-lg max-w-xl">
            A chronological roadmap of my academic milestones, technical projects and open source participation.
          </p>
        </div>

        {/* Clean Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Glowing Connecting Line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-amber-400/60 via-amber-500/20 to-slate-900" />

          <div className="space-y-12">
            {milestones.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } group`}
                >
                  
                  {/* Timeline Dot Marker */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-4 z-10 w-8 h-8 rounded-full bg-black border border-amber-400 flex items-center justify-center text-amber-400 shadow-lg shadow-amber-400/20 group-hover:scale-110 transition-all">
                    <Icon className="w-3.5 h-3.5" />
                  </div>

                  {/* Card Content Block */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] ml-12 sm:ml-0 ${
                    isEven ? 'sm:mr-auto sm:pr-4 text-left' : 'sm:ml-auto sm:pl-4 text-left'
                  }`}>
                    <div className="glass-card-dark p-6 rounded-3xl border border-white/10 bg-[#0D0D0D] hover:border-amber-400/40 transition-all shadow-xl">
                      
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span className="font-mono text-sm font-bold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                          {item.year}
                        </span>
                        <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${item.accent}`}>
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-amber-400 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-slate-300 text-sm leading-relaxed">
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
