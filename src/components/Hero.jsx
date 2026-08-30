import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-screen pt-28 pb-10 lg:pt-32 lg:pb-8 flex items-center justify-center bg-[#000000] bg-grid-minimal overflow-hidden">
      
      {/* Golden Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Social Media Vertical Sidebar (Far Left Desktop) */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-5 text-slate-400">
        <a
          href="https://github.com/snehaverma098"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-[#0E0E0E] border border-white/10 text-slate-400 hover:text-amber-400 hover:border-amber-400/50 hover:bg-amber-400/10 transition-all duration-200"
          aria-label="GitHub Profile"
        >
          <GithubIcon className="w-4 h-4" />
        </a>

        <a
          href="https://www.linkedin.com/in/snehaverma-ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-[#0E0E0E] border border-white/10 text-slate-400 hover:text-amber-400 hover:border-amber-400/50 hover:bg-amber-400/10 transition-all duration-200"
          aria-label="LinkedIn Profile"
        >
          <LinkedinIcon className="w-4 h-4" />
        </a>

        <a
          href="mailto:snehpreet9846@gmail.com"
          className="p-2.5 rounded-full bg-[#0E0E0E] border border-white/10 text-slate-400 hover:text-amber-400 hover:border-amber-400/50 hover:bg-amber-400/10 transition-all duration-200"
          aria-label="Email Sneha"
        >
          <Mail className="w-4 h-4" />
        </a>

        <div className="w-0.5 h-12 bg-gradient-to-b from-white/20 to-transparent rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Column (45% Width): Typography & Action Buttons */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left space-y-3 z-20">
            
            {/* Greeting */}
            <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl text-white font-semibold tracking-tight">
              Hi, I'm
            </h3>

            {/* Main Name Heading (STRICT 1 LINE ON DESKTOP) */}
            <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-6xl xl:text-[76px] tracking-tight text-amber-400 leading-none whitespace-nowrap">
              Sneha Verma,
            </h1>

            {/* Outlined Ghost Typography Title (STRICT 1 LINE ON DESKTOP) */}
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-5xl xl:text-[66px] uppercase tracking-wider text-stroke-hero leading-none whitespace-nowrap">
              AI/ML DEVELOPER
            </h2>

            {/* Professional Concise Description */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed font-normal pt-1 pb-1">
              I build intelligent, scalable applications using AI, machine learning, Python, and modern web technologies.
            </p>

            {/* Pill-Shaped CTA Buttons Row */}
            <div className="pt-2 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              
              {/* View My Work */}
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-black bg-white hover:bg-slate-200 transition-all duration-200 shadow-lg hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                <span>View My Work →</span>
              </a>

              {/* Hire Me */}
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-white border border-white hover:bg-white/10 transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                <span>Hire Me</span>
              </a>

              {/* Download Resume (Direct PDF Download & Open) */}
              <a
                href="/sneha_verma_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Sneha_Verma_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-xs sm:text-sm text-slate-200 border border-white/40 hover:border-white hover:text-white transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap bg-white/5 hover:bg-white/10"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>Download Resume</span>
              </a>

            </div>

            {/* Small Specialization Line */}
            <div className="pt-3 flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Specializing in Generative AI & AI Agents</span>
            </div>

            {/* Mobile Social Icons Row */}
            <div className="flex md:hidden items-center gap-4 pt-4 border-t border-white/10 w-full">
              <a
                href="https://github.com/snehaverma098"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#0E0E0E] border border-white/10 text-slate-300 hover:text-amber-400"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/snehaverma-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#0E0E0E] border border-white/10 text-slate-300 hover:text-amber-400"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:snehpreet9846@gmail.com"
                className="p-2.5 rounded-full bg-[#0E0E0E] border border-white/10 text-slate-300 hover:text-amber-400"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column (55% Width): CYBERNETIC AI HEAD GRAPHIC */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-end justify-center lg:justify-end mt-4 lg:mt-0">
            <img 
              src="/images/sneha_unboxed.jpg" 
              alt="Sneha Verma - Cybernetic AI Visual Asset" 
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain pointer-events-none drop-shadow-[0_10px_35px_rgba(245,158,11,0.2)] hover:scale-[1.01] transition-transform duration-300"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
