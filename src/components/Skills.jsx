import React, { useState } from 'react';
import { Code, Layout, Cpu, Wrench } from 'lucide-react';

const Skills = () => {
  const [filterMode, setFilterMode] = useState('All');
  const [selectedTech, setSelectedTech] = useState(null);

  const skillsData = [
    {
      category: 'Programming Languages',
      icon: Code,
      accentColor: '#2855D9', // Cobalt Blue
      tagBg: '#2855D912',
      items: [
        { name: 'Python', status: 'Used in projects', note: 'Primary language for MindEdu AI, VoteWise AI, and NLP data pipelines' },
        { name: 'C++', status: 'Core fundamentals', note: 'Data structures, algorithmic problem solving, and academic coursework' },
        { name: 'C', status: 'Core fundamentals', note: 'Procedural systems programming baseline and memory management' },
        { name: 'JavaScript (ES6+)', status: 'Used in projects', note: 'Interactive web applications, DOM APIs, and React component logic' },
        { name: 'SQL', status: 'Core fundamentals', note: 'Relational schema design and data querying' },
      ],
    },
    {
      category: 'AI & Machine Learning',
      icon: Cpu,
      accentColor: '#7546C8', // Rich Violet
      tagBg: '#7546C812',
      items: [
        { name: 'Generative AI & LLMs', status: 'Used in projects', note: 'Applied prompt engineering, temperature controls, and study schedule synthesis' },
        { name: 'NLP & Sentiment Analysis', status: 'Used in projects', note: 'Student reflection journal polarity evaluation in MindEdu AI' },
        { name: 'AI Agents & Tool Calling', status: 'Practicing', note: 'Exploring agentic orchestration and multi-step reasoning workflows' },
        { name: 'Data Visualization', status: 'Used in projects', note: 'Chart.js metrics dashboards for student academic wellness' },
      ],
    },
    {
      category: 'Web & Microservices',
      icon: Layout,
      accentColor: '#F45168', // Coral Red
      tagBg: '#F4516812',
      items: [
        { name: 'React.js', status: 'Used in projects', note: 'NailEdit.frr client web app and portfolio architectures' },
        { name: 'Vite', status: 'Used in projects', note: 'Modern frontend tooling and lightning-fast HMR builds' },
        { name: 'Tailwind CSS', status: 'Used in projects', note: 'Utility-first responsive design systems and typography scales' },
        { name: 'Flask', status: 'Used in projects', note: 'Python backend REST service powering MindEdu AI' },
        { name: 'FastAPI', status: 'Practicing', note: 'Building high-throughput asynchronous APIs' },
        { name: 'HTML5 & Modern CSS', status: 'Core fundamentals', note: 'Semantic web standards, accessibility, and micro-interactions' },
      ],
    },
    {
      category: 'Developer Tools & Workflow',
      icon: Wrench,
      accentColor: '#176B50', // Forest Green
      tagBg: '#176B5012',
      items: [
        { name: 'Git & GitHub', status: 'Used in projects', note: 'Version control, branch management, and GSSoC 2026 collaboration' },
        { name: 'VS Code & Cursor AI', status: 'Used in projects', note: 'Daily development environment and agent-assisted workflows' },
        { name: 'REST APIs & JSON', status: 'Used in projects', note: 'Client-server contracts and data serialization' },
      ],
    },
  ];

  const statusBadgeStyles = {
    'Used in projects': 'bg-[#176B50]/10 text-[#176B50] border border-[#176B50]/20 font-bold',
    'Practicing': 'bg-[#2855D9]/10 text-[#2855D9] border border-[#2855D9]/20 font-bold',
    'Core fundamentals': 'bg-[#38231F]/10 text-[#38231F] border border-[#38231F]/20 font-bold',
  };

  const filterOptions = ['All', 'Used in projects', 'Practicing', 'Core fundamentals'];

  return (
    <section 
      id="skills" 
      className="py-24 sm:py-32 relative bg-white border-t border-[#38231F]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-caveat text-2xl sm:text-3xl text-[#176B50] font-bold -rotate-1">
              honest toolbox
            </span>
            <svg className="w-6 h-6 text-[#176B50]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFDF8] border border-[#38231F]/15 text-xs font-mono mb-4 text-[#38231F] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#176B50]" />
            <span className="font-bold">03 // CAPABILITIES & RIGOR</span>
          </div>

          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl text-[#38231F] tracking-tight leading-[1.08] mb-4 max-w-4xl">
            Technologies I <span className="italic font-normal text-[#176B50]">genuinely build with</span>.
          </h2>
          
          <p className="text-[#38231F]/75 text-base sm:text-lg max-w-2xl font-sans leading-relaxed">
            No arbitrary 99% progress bars. Here is an authentic inventory of languages, frameworks, and tools I have actively applied in code or am diligently practicing.
          </p>
        </div>

        {/* Filter Pills Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-12 p-1.5 rounded-full bg-[#FFFDF8] border border-[#38231F]/15 w-fit shadow-xs">
          <span className="px-3 font-mono text-[11px] text-[#38231F]/60 uppercase hidden sm:inline font-bold">
            FILTER BY STATUS:
          </span>
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setFilterMode(opt)}
              className={`px-4 py-1.5 rounded-full font-mono text-xs font-semibold transition-all ${
                filterMode === opt
                  ? 'bg-[#38231F] text-white shadow-xs'
                  : 'text-[#38231F]/70 hover:text-[#38231F] hover:bg-white'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Grid of Categories in White Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((cat) => {
            const Icon = cat.icon;
            const filteredSkills = filterMode === 'All'
              ? cat.items
              : cat.items.filter((item) => item.status === filterMode);

            if (filteredSkills.length === 0) return null;

            return (
              <div 
                key={cat.category}
                className="p-7 sm:p-9 rounded-3xl bg-[#FFFDF8] border-2 border-[#38231F]/12 shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-left"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#38231F]/10">
                    <div className="flex items-center gap-3">
                      <div 
                        className="p-3 rounded-2xl shadow-xs"
                        style={{ backgroundColor: cat.tagBg, color: cat.accentColor }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-playfair font-bold text-2xl text-[#38231F]">
                          {cat.category}
                        </h3>
                        <span 
                          className="font-mono text-[10px] uppercase font-bold"
                          style={{ color: cat.accentColor }}
                        >
                          {filteredSkills.length} Verified Modules
                        </span>
                      </div>
                    </div>

                    <span 
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: cat.accentColor }}
                    />
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {filteredSkills.map((item) => (
                      <div
                        key={item.name}
                        onClick={() => setSelectedTech(selectedTech === item.name ? null : item.name)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer bg-white ${
                          selectedTech === item.name
                            ? 'border-2 shadow-sm'
                            : 'border-[#38231F]/10 hover:border-[#38231F]/30'
                        }`}
                        style={selectedTech === item.name ? { borderColor: cat.accentColor } : {}}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <strong className="text-[#38231F] font-semibold text-sm">
                            {item.name}
                          </strong>
                          <span className={`px-2.5 py-0.5 rounded-full font-mono text-[10px] ${statusBadgeStyles[item.status]}`}>
                            {item.status}
                          </span>
                        </div>
                        <p className="text-[#38231F]/70 text-xs mt-1.5 leading-relaxed font-sans">
                          {item.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-[#38231F]/10 flex items-center justify-between text-[11px] font-mono text-[#38231F]/60">
                  <span>Verified in codebase & coursework</span>
                  <span className="font-caveat text-sm text-[#176B50] font-bold">✓ authentic</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
