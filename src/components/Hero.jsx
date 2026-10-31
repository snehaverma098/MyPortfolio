import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] pt-32 sm:pt-40 pb-20 lg:pb-28 bg-white flex flex-col justify-center items-center overflow-hidden text-center"
    >
      {/* Subtle Warm Background Ambience */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#FFFDF8] rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F45168]/[0.03] rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-32 left-10 w-80 h-80 bg-[#7546C8]/[0.02] rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Floating Left Socials Rail (Desktop) */}
      <div className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-4 text-[#38231F]">
        <span className="font-mono text-[9px] tracking-widest text-[#38231F]/60 -rotate-90 mb-4 uppercase font-bold">
          CONNECT
        </span>
        <div className="w-px h-8 bg-[#38231F]/20" />
        
        <a
          href="https://github.com/snehaverma098"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-white border border-[#38231F]/15 hover:border-[#38231F] text-[#38231F] hover:bg-[#38231F] hover:text-white transition-all shadow-xs hover:-translate-x-1"
          aria-label="GitHub Profile"
        >
          <GithubIcon className="w-4 h-4" />
        </a>

        <a
          href="https://www.linkedin.com/in/snehaverma-ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-white border border-[#38231F]/15 hover:border-[#2855D9] text-[#2855D9] hover:bg-[#2855D9] hover:text-white transition-all shadow-xs hover:-translate-x-1"
          aria-label="LinkedIn Profile"
        >
          <LinkedinIcon className="w-4 h-4" />
        </a>

        <a
          href="mailto:snehpreet9846@gmail.com"
          className="p-2.5 rounded-full bg-white border border-[#38231F]/15 hover:border-[#F45168] text-[#F45168] hover:bg-[#F45168] hover:text-white transition-all shadow-xs hover:-translate-x-1"
          aria-label="Send Email"
        >
          <Mail className="w-4 h-4" />
        </a>

        <div className="w-px h-12 bg-[#38231F]/20" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
        
        {/* Playful Handwritten Greeting */}
        <div className="inline-flex items-center justify-center gap-2 mb-3">
          <span className="font-caveat text-3xl sm:text-4xl text-[#F45168] font-bold -rotate-2">
            Hello there! I'm
          </span>
          <svg className="w-7 h-7 text-[#F45168]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
          </svg>
        </div>

        {/* ENORMOUS, BOLDER NAME: THE DEFINING STAR OF THE PORTFOLIO */}
        <div className="space-y-2 mb-4">
          <h1 className="font-playfair font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.95] text-[#38231F]">
            Sneha{' '}
            <span className="text-[#F45168] relative inline-block">
              Verma
              {/* Playful Hand-drawn style underline */}
              <svg 
                className="absolute -bottom-2 sm:-bottom-4 left-0 w-full h-4 sm:h-6 text-[#F45168]" 
                viewBox="0 0 200 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path 
                  d="M2 9.5C50 3.5 150 2 198 8.5" 
                  stroke="currentColor" 
                  strokeWidth="4.5" 
                  strokeLinecap="round" 
                />
              </svg>
            </span>
          </h1>
        </div>

        {/* BOLDER, CONFIDENT ACADEMIC & TECHNICAL SUBTITLE */}
        <div className="pt-3 pb-2 space-y-4 max-w-3xl mx-auto">
          <h2 className="font-sans font-bold text-xl sm:text-2xl md:text-3xl text-[#38231F] leading-snug">
            Second-year B.Tech Computer Science Engineering student focused on{' '}
            <span className="text-[#7546C8] font-extrabold underline decoration-[#7546C8]/30 decoration-2 underline-offset-4">
              Artificial Intelligence & Machine Learning
            </span>{' '}
            at Lovely Professional University.
          </h2>

          <p className="font-sans font-semibold text-base sm:text-lg text-[#38231F]/85 max-w-2xl mx-auto leading-relaxed">
            Learning to build practical software, explore applied machine learning, and create thoughtful, well-crafted digital experiences.
          </p>
        </div>

        {/* Bolder Authentic Credentials Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-3 pb-3">
          <span className="px-4 py-2 rounded-full bg-[#FFFDF8] border-2 border-[#38231F]/20 font-mono text-xs sm:text-sm font-bold text-[#38231F] flex items-center gap-2 shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#176B50]" />
            <span>8.0 CGPA • CSE (AI & ML)</span>
          </span>

          <span className="px-4 py-2 rounded-full bg-[#FFFDF8] border-2 border-[#7546C8]/40 font-mono text-xs sm:text-sm font-bold text-[#7546C8] shadow-xs">
            GSSoC '26 Contributor
          </span>

          <span className="px-4 py-2 rounded-full bg-[#FFFDF8] border-2 border-[#D96B35]/40 font-mono text-xs sm:text-sm font-bold text-[#D96B35] shadow-xs">
            IBM SkillsBuild AI
          </span>
        </div>

        {/* Primary Centered Calls to Action */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#projects"
            className="btn-espresso group text-base sm:text-lg font-bold px-8 py-3.5 shadow-md hover:scale-105"
          >
            <span>Explore My Projects</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
          </a>

          <a
            href="#contact"
            className="btn-outline-espresso text-base sm:text-lg font-bold px-8 py-3.5 shadow-xs hover:scale-105"
          >
            <span>Contact Me</span>
          </a>
        </div>

        {/* Handwritten footnote centered */}
        <div className="flex items-center justify-center gap-2 pt-4">
          <span className="font-caveat text-xl sm:text-2xl text-[#176B50] font-bold">
            ✓ Currently open for summer 2026 software & AI/ML internships
          </span>
        </div>

      </div>
    </section>
  );
};

export default Hero;
