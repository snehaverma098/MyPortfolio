import React, { useState } from 'react';
import { Code, Layout, Server, Cpu, Wrench } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const skillCategories = [
    {
      name: 'Languages',
      icon: Code,
      accent: 'text-amber-400',
      bg: 'bg-amber-400/10',
      skills: ['C++', 'Python', 'C', 'JavaScript', 'HTML', 'CSS', 'SQL']
    },
    {
      name: 'Frontend',
      icon: Layout,
      accent: 'text-yellow-400',
      bg: 'bg-yellow-400/10',
      skills: ['React.js', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3']
    },
    {
      name: 'Backend',
      icon: Server,
      accent: 'text-amber-300',
      bg: 'bg-amber-500/10',
      skills: ['FastAPI', 'Flask', 'REST APIs']
    },
    {
      name: 'AI / ML',
      icon: Cpu,
      accent: 'text-amber-400',
      bg: 'bg-amber-400/10',
      skills: ['Generative AI', 'AI Agents', 'Sentiment Analysis', 'Machine Learning']
    },
    {
      name: 'Developer Tools',
      icon: Wrench,
      accent: 'text-yellow-500',
      bg: 'bg-yellow-500/10',
      skills: ['Git', 'GitHub', 'VS Code', 'Cursor AI', 'Vercel', 'Supabase']
    }
  ];

  const categoriesList = ['All', ...skillCategories.map(c => c.name)];

  const filteredCategories = activeCategory === 'All'
    ? skillCategories
    : skillCategories.filter(c => c.name === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-[#000000] border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E0E0E] border border-white/10 text-amber-400 text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>03 // CORE CAPABILITIES</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Technical <span className="text-amber-gradient">Stack</span>
          </h2>
          
          <p className="text-slate-400 text-base sm:text-lg max-w-xl">
            Technologies, frameworks, programming languages and tools I work with daily.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 bg-[#0D0D0D] p-1.5 rounded-full border border-white/10 backdrop-blur-md w-fit">
          {categoriesList.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-xs font-semibold font-mono transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-amber-400 text-black font-bold shadow-lg shadow-amber-400/20'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Categories & Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.name}
                className="glass-card-dark p-6 rounded-3xl border border-white/10 bg-[#0D0D0D] flex flex-col justify-between group hover:border-amber-400/40 shadow-xl"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2.5 rounded-xl ${cat.bg} border border-white/10 ${cat.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-white group-hover:text-amber-400 transition-colors">
                      {cat.name}
                    </h3>
                  </div>

                  {/* Skills Tag Cloud */}
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill}
                        className="px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 text-slate-200 text-xs sm:text-sm font-medium hover:border-amber-400/50 hover:text-white hover:bg-slate-800 transition-all duration-200"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtle Card Footer Indicator */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{cat.skills.length} MODULES</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
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
