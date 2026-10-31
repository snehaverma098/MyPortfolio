import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';

const Collaborations = () => {
  const collaborationTracks = [
    {
      title: 'Interactive Digital Experiences',
      desc: 'Bespoke microsites, dynamic web visualizers, and interactive brand storytelling powered by modern React, Vite, and performance-tuned CSS.',
      tag: 'CREATIVE FRONTEND',
      color: '#F45168', // Coral Red
    },
    {
      title: 'AI-Assisted Experiments',
      desc: 'Collaborative technical prototypes integrating small language models, custom NLP agents, and generative web ergonomics.',
      tag: 'APPLIED AI',
      color: '#7546C8', // Rich Violet
    },
    {
      title: 'Engineering Sprints & Hackathons',
      desc: 'Partnering on ambitious student developer initiatives, open-source project incubators, and technical hackathon builds.',
      tag: 'COLLABORATIVE BUILDS',
      color: '#2855D9', // Cobalt Blue
    },
  ];

  return (
    <section className="py-20 relative bg-[#FFFDF8] border-t border-[#38231F]/10 overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Restrained Container in Editorial Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border-2 border-[#38231F]/12 shadow-sm relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 7 Columns: Context & Objective */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFDF8] border border-[#38231F]/15 font-mono text-[11px] font-bold uppercase tracking-wider text-[#38231F]">
                <Sparkles className="w-3.5 h-3.5 text-[#F45168]" />
                <span>BEYOND TRADITIONAL ENGINEERING</span>
              </div>

              <h3 className="font-playfair font-bold text-3xl sm:text-4xl text-[#38231F] tracking-tight leading-snug">
                Creative Collaborations & <span className="italic font-normal text-[#F45168]">Digital Projects</span>
              </h3>

              <p className="text-[#38231F]/80 text-sm sm:text-base leading-relaxed font-sans">
                Beyond software engineering internships, I welcome technology-led creative collaborations with independent brands, designers, and developer communities. Whether it's an interactive campaign microsite, an AI prototype, or an ambitious hackathon team, I bring technical discipline and thoughtful aesthetic sensibility.
              </p>

              {/* Tracks in White Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                {collaborationTracks.map((track) => (
                  <div key={track.title} className="p-4 rounded-2xl bg-[#FFFDF8] border border-[#38231F]/12 space-y-1.5 shadow-2xs">
                    <span 
                      className="font-mono text-[9px] uppercase font-bold block"
                      style={{ color: track.color }}
                    >
                      {track.tag}
                    </span>
                    <strong className="font-playfair font-bold text-base text-[#38231F] block leading-snug">
                      {track.title}
                    </strong>
                    <p className="text-[#38231F]/70 text-[11px] leading-relaxed font-sans">
                      {track.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 Columns: Clear Pathway Call to Action */}
            <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center">
              <div className="p-7 rounded-2xl bg-[#FFFDF8] border border-[#38231F]/15 w-full max-w-sm space-y-4 shadow-sm">
                <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-[#38231F]/10">
                  <span className="text-[#38231F]/60 font-bold">STATUS:</span>
                  <span className="text-[#176B50] font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#176B50] animate-pulse" />
                    Open to select projects
                  </span>
                </div>

                <p className="text-xs text-[#38231F]/80 leading-relaxed font-sans">
                  Have an innovative digital concept or technology-focused project in mind? Let's discuss requirements and feasibility.
                </p>

                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#38231F] hover:bg-[#181818] text-white font-sans text-xs font-semibold shadow-xs transition-all hover:scale-[1.01]"
                >
                  <span>Propose a Collaboration</span>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Collaborations;
