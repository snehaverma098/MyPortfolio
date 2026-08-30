import React, { useState } from 'react';
import { GraduationCap, Cpu, Code, GitPullRequest, ChevronRight } from 'lucide-react';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      num: '01',
      title: 'Education',
      primary: 'B.Tech CSE',
      secondary: 'AI & Machine Learning',
      details: 'Specializing in core computer science fundamentals, neural networks, machine learning algorithms, and software engineering principles.',
      icon: GraduationCap,
      accent: 'border-amber-500/30 text-amber-400 bg-amber-400/10'
    },
    {
      num: '02',
      title: 'Focus',
      primary: 'Artificial Intelligence',
      secondary: 'Generative AI & Agents',
      details: 'Deeply passionate about Large Language Models, Generative AI frameworks, autonomous AI agents, and practical AI integrations.',
      icon: Cpu,
      accent: 'border-yellow-500/30 text-yellow-400 bg-yellow-400/10'
    },
    {
      num: '03',
      title: 'Development',
      primary: 'React • JavaScript • Python',
      secondary: 'Flask • Tailwind CSS',
      icon: Code,
      details: 'Full-stack prototyping capabilities combining modern React frontends with modular Flask Python backend microservices.',
      accent: 'border-amber-500/30 text-amber-300 bg-amber-500/10'
    },
    {
      num: '04',
      title: 'Open Source',
      primary: 'GSSoC 2026',
      secondary: 'Contributor',
      details: 'Selected contributor in GirlScript Summer of Code 2026 actively working across Open Source and AI/Agents repository tracks.',
      icon: GitPullRequest,
      accent: 'border-amber-400/30 text-amber-400 bg-amber-400/10'
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-[#000000] border-t border-white/10">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* Left Column: Heading & Concise Bio */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              {/* Section Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E0E0E] border border-white/10 text-amber-400 text-xs font-mono mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>01 // ABOUT SNEHA</span>
              </div>

              {/* Main Section Heading */}
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-8">
                Turning ideas into <span className="text-amber-gradient">working products.</span>
              </h2>

              {/* Bio Quote Box */}
              <div className="p-8 rounded-2xl bg-[#0D0D0D] border border-white/10 shadow-xl relative overflow-hidden group mb-8">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-amber-400 to-amber-600" />
                <p className="text-slate-300 text-lg leading-relaxed font-normal">
                  "I'm a B.Tech CSE student specializing in Artificial Intelligence & Machine Learning, interested in building practical AI-powered products and modern web applications. I enjoy taking an idea from concept to prototype and continuously improving my skills through projects, hackathons and open-source contributions."
                </p>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="p-4 rounded-xl bg-[#0D0D0D] border border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                Status: B.Tech CSE (AI & ML)
              </span>
              <span className="text-white font-semibold">2025 – Present</span>
            </div>
          </div>

          {/* Right Column: Top-to-Down Vertical Menu */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider">
                KEY BACKGROUND PILLARS
              </span>
              <span className="font-mono text-xs text-amber-400 font-semibold">
                04 MODULES
              </span>
            </div>

            {/* Stacked Vertical Top-to-Down List */}
            <div className="space-y-4">
              {cards.map((card, idx) => {
                const Icon = card.icon;
                const isSelected = activeIndex === idx;

                return (
                  <div
                    key={card.num}
                    onClick={() => setActiveIndex(idx)}
                    className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border ${
                      isSelected 
                        ? 'bg-[#0D0D0D] border-amber-400 shadow-lg shadow-amber-400/10 -translate-y-0.5' 
                        : 'bg-[#0A0A0A] border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-xs font-bold text-slate-500">
                          {card.num}
                        </span>
                        
                        <div className={`p-2.5 rounded-xl ${card.accent} border border-white/10`}>
                          <Icon className="w-4 h-4" />
                        </div>

                        <div>
                          <span className="font-mono text-xs font-semibold text-slate-400 block">
                            {card.title}
                          </span>
                          <h3 className="font-heading font-bold text-lg text-white">
                            {card.primary}
                          </h3>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="hidden sm:inline-block font-mono text-xs font-semibold text-slate-300 bg-slate-900 px-2.5 py-1 rounded-md border border-white/10">
                          {card.secondary}
                        </span>
                        <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform ${
                          isSelected ? 'rotate-90 text-amber-400' : ''
                        }`} />
                      </div>
                    </div>

                    {/* Expandable Details on Click/Select */}
                    {isSelected && (
                      <div className="mt-4 pt-4 border-t border-white/10 text-xs sm:text-sm text-slate-300 leading-relaxed animate-fadeIn">
                        {card.details}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
