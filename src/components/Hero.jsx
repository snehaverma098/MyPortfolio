import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Download, 
  Sparkles, 
  Mail, 
  Copy, 
  Check, 
  ExternalLink, 
  Terminal, 
  ChevronDown, 
  Code2, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  ArrowUpRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Hero = () => {
  const canvasRef = useRef(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState('projects'); // 'projects' | 'stack' | 'contact'
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.4 });
  const mouseTargetRef = useRef({ x: 0.5, y: 0.4 });
  const currentMouseRef = useRef({ x: 0.5, y: 0.4 });

  // Curated real projects data for the interactive showcase console
  const featuredProjects = [
    {
      id: 'mindedu',
      title: 'MindEdu AI',
      category: 'AI & Mental Wellness',
      tagline: 'NLP Reflective Journaling & Adaptive Study Scheduler',
      metrics: '88% Wellness Index • Flask & NLP Engine',
      summary: 'Analyzes student reflections to gauge cognitive fatigue and autonomously adjusts weekly study blocks to prevent academic burnout.',
      tech: ['Python', 'Flask', 'NLP Sentiment', 'Chart.js'],
      link: '#projects'
    },
    {
      id: 'votewise',
      title: 'VoteWise AI',
      category: 'Civic Data & GenAI',
      tagline: 'Objective Political Policy Comparator',
      metrics: 'Multi-Candidate Analysis • 100% Non-Partisan',
      summary: 'Distills complex, multi-page election manifestos into transparent, structured comparison matrices to empower informed voter decisions.',
      tech: ['Python', 'Generative AI', 'REST APIs', 'FastAPI'],
      link: '#projects'
    },
    {
      id: 'nailedit',
      title: 'NailEdit.frr',
      category: 'Commercial Web Craft',
      tagline: 'Bespoke Boutique E-Commerce Customizer',
      metrics: 'Sub-Second Load • Live Shape & Finish Picker',
      summary: 'Handcrafted luxury commerce experience for an independent brand, featuring interactive live product customizer with zero bloat.',
      tech: ['React 19', 'Vite', 'Tailwind CSS', 'Modular UI'],
      link: '#projects'
    }
  ];

  const techArsenal = [
    { name: 'Python & FastAPI', category: 'Backend & ML Services' },
    { name: 'React 19 & Vite', category: 'Modern Frontend Architecture' },
    { name: 'NLP & Transformers', category: 'Sentiment & Language Models' },
    { name: 'Tailwind CSS', category: 'Precision Editorial Design' },
    { name: 'Data Structures & C++', category: 'Computational Problem Solving' },
    { name: 'Git & Open Source', category: 'Collaborative CI/CD Workflows' }
  ];

  // -------------------------------------------------------------
  // HIGH-DEFINITION CINEMATIC LIGHTING ENGINE
  // Uses sub-pixel rendering, smooth physics interpolation,
  // and pure continuous volumetric curves (Zero pixelation/cracking).
  // -------------------------------------------------------------
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // Crisp high-DPI
      width = parent.offsetWidth;
      height = parent.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    let time = 0;

    const render = () => {
      time += 0.008;

      // Smooth lag-free mouse interpolation (organic camera / spotlight glide)
      currentMouseRef.current.x += (mouseTargetRef.current.x - currentMouseRef.current.x) * 0.05;
      currentMouseRef.current.y += (mouseTargetRef.current.y - currentMouseRef.current.y) * 0.05;
      const mx = currentMouseRef.current.x * width;
      const my = currentMouseRef.current.y * height;

      ctx.clearRect(0, 0, width, height);

      // 1. Deep Burgundy Theatrical Canvas Gradient (#5C1F2E with velvet depth)
      const baseGrad = ctx.createLinearGradient(0, 0, width * 0.3, height);
      baseGrad.addColorStop(0, '#421420'); // Deep wine noir
      baseGrad.addColorStop(0.4, '#5C1F2E'); // Deep Burgundy base
      baseGrad.addColorStop(0.8, '#4A1724'); // Saturated velvet
      baseGrad.addColorStop(1, '#2B0B13'); // Deep plum shadow
      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Cursor-Tracking Soft Blush Volumetric Light Spot (#F7E6E1)
      const mouseSpot = ctx.createRadialGradient(
        mx, my, 0,
        mx, my, Math.max(width * 0.45, 360)
      );
      mouseSpot.addColorStop(0, 'rgba(247, 230, 225, 0.22)'); // Soft Blush focal glow
      mouseSpot.addColorStop(0.35, 'rgba(181, 71, 106, 0.15)'); // Rose halo
      mouseSpot.addColorStop(0.7, 'rgba(232, 201, 160, 0.06)'); // Warm champagne rim
      mouseSpot.addColorStop(1, 'transparent');
      ctx.fillStyle = mouseSpot;
      ctx.fillRect(0, 0, width, height);

      // 3. Floating Ambient Silk Light Orbs (Breathing Atmospheric Bloom)
      // Left Ambient Orb: Warm Champagne (#E8C9A0)
      const orb1X = width * 0.15 + Math.sin(time * 0.9) * 50;
      const orb1Y = height * 0.3 + Math.cos(time * 0.7) * 40;
      const orb1 = ctx.createRadialGradient(orb1X, orb1Y, 0, orb1X, orb1Y, width * 0.35);
      orb1.addColorStop(0, 'rgba(232, 201, 160, 0.18)');
      orb1.addColorStop(0.5, 'rgba(181, 71, 106, 0.10)');
      orb1.addColorStop(1, 'transparent');
      ctx.fillStyle = orb1;
      ctx.fillRect(0, 0, width, height);

      // Right Ambient Orb: Soft Blush (#F7E6E1) & Rose (#B5476A)
      const orb2X = width * 0.85 + Math.cos(time * 0.8) * 60;
      const orb2Y = height * 0.65 + Math.sin(time * 0.6) * 45;
      const orb2 = ctx.createRadialGradient(orb2X, orb2Y, 0, orb2X, orb2Y, width * 0.4);
      orb2.addColorStop(0, 'rgba(247, 230, 225, 0.16)');
      orb2.addColorStop(0.45, 'rgba(92, 31, 46, 0.25)');
      orb2.addColorStop(1, 'transparent');
      ctx.fillStyle = orb2;
      ctx.fillRect(0, 0, width, height);

      // 4. Silky Mathematical Harmonic Caustics (Smooth continuous Bezier waves - Zero jaggedness)
      ctx.save();
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        const yBase = height * (0.8 + i * 0.06);
        const waveSpeed = time * (0.8 + i * 0.3);
        const waveAmp = 28 - i * 6;
        
        ctx.moveTo(0, yBase);
        // Smooth cubic bezier ribbon curves across width
        ctx.bezierCurveTo(
          width * 0.25, yBase + Math.sin(waveSpeed) * waveAmp,
          width * 0.5, yBase - Math.cos(waveSpeed * 0.8) * waveAmp,
          width * 0.75, yBase + Math.sin(waveSpeed * 1.2) * (waveAmp * 0.8)
        );
        ctx.bezierCurveTo(
          width * 0.88, yBase - Math.sin(waveSpeed * 0.7) * (waveAmp * 0.6),
          width * 0.95, yBase + Math.cos(waveSpeed) * (waveAmp * 0.4),
          width, yBase
        );

        ctx.lineWidth = 1.6;
        ctx.strokeStyle = i === 0 
          ? 'rgba(232, 201, 160, 0.22)' // Champagne
          : i === 1 
            ? 'rgba(181, 71, 106, 0.18)' // Rose
            : 'rgba(247, 230, 225, 0.14)'; // Soft blush
        ctx.stroke();
      }
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseTargetRef.current = { x, y };
  };

  const smoothScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('snehpreet9846@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2600);
  };

  return (
    <section 
      id="hero" 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-[#5C1F2E] text-[#F7E6E1] overflow-hidden flex flex-col justify-between selection:bg-[#B5476A] selection:text-white"
    >
      {/* ---------------- BACKGROUND CINEMATIC CANVAS ---------------- */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none z-0" 
      />

      {/* ---------------- 1. INTEGRATED HAUTE NAVIGATION BAR ---------------- */}
      <header className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-4 flex items-center justify-between">
        
        {/* Bespoke Monogram: S in Warm Champagne (#E8C9A0), V in Rose (#B5476A) */}
        <a 
          href="#hero" 
          onClick={(e) => smoothScrollTo(e, 'hero')}
          className="flex items-center gap-3.5 group focus:outline-none"
          aria-label="Sneha Verma - Return to top"
        >
          <div className="relative w-11 h-11 rounded-full bg-[#3B131D]/90 border border-[#E8C9A0]/35 flex items-center justify-center shadow-lg shadow-black/30 backdrop-blur-md group-hover:border-[#B5476A] group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(181,71,106,0.35)] transition-all duration-300">
            <span className="font-playfair text-xl font-bold tracking-tight select-none">
              <span className="text-[#E8C9A0]">S</span>
              <span className="text-[#B5476A] italic">V</span>
            </span>
            {/* Luminous Champagne Corner Accent */}
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#E8C9A0] shadow-[0_0_8px_#E8C9A0]" />
          </div>

          <div className="flex flex-col text-left">
            <span className="font-playfair font-bold text-base tracking-wide text-[#F7E6E1] group-hover:text-[#E8C9A0] transition-colors">
              Sneha <span className="text-[#B5476A] italic font-serif">Verma</span>
            </span>
            <span className="text-[10px] font-mono tracking-widest text-[#E8C9A0]/80 uppercase">
              AI Systems & Software Craft
            </span>
          </div>
        </a>

        {/* Center Editorial Nav Links with Rose Hover Transition */}
        <nav className="hidden lg:flex items-center gap-1.5 px-6 py-2 rounded-full bg-[#3B131D]/70 border border-[#E8C9A0]/20 backdrop-blur-xl shadow-xl shadow-black/25">
          {[
            { label: 'Overview', id: 'hero' },
            { label: 'About', id: 'about' },
            { label: 'Projects', id: 'projects' },
            { label: 'Skills', id: 'skills' },
            { label: 'Journey', id: 'journey' },
            { label: 'Contact', id: 'contact' },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => smoothScrollTo(e, item.id)}
              className="px-4 py-1.5 rounded-full text-xs font-medium tracking-wide text-[#F7E6E1]/85 hover:text-white hover:bg-[#B5476A]/25 hover:border-[#B5476A]/40 border border-transparent transition-all duration-200 relative group"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#B5476A] group-hover:w-3/5 rounded-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Right Direct Call-to-Action */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => smoothScrollTo(e, 'contact')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider text-[#F7E6E1] bg-[#3B131D]/80 border border-[#E8C9A0]/40 shadow-lg shadow-black/20 backdrop-blur-md hover:bg-[#B5476A] hover:border-[#E8C9A0] hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 group"
          >
            <span>Let's Talk</span>
            <Sparkles className="w-3.5 h-3.5 text-[#E8C9A0] group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
          </a>
        </div>
      </header>

      {/* ---------------- 2. THE MAIN CINEMATIC THEATRE STAGE ---------------- */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        
        {/* LEFT COLUMN: Grand Editorial Typography & Direct Contact Hub (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-7">
          
          {/* Live Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#3B131D]/80 border border-[#E8C9A0]/35 shadow-md backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8C9A0] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E8C9A0]" />
            </span>
            <span className="text-[11px] font-mono tracking-wider text-[#E8C9A0] uppercase font-semibold">
              ✦ Open for Summer 2026 Engineering Internships
            </span>
          </div>

          {/* Defining Grand Name Headline */}
          <div className="space-y-3">
            <h1 className="font-playfair font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.96] text-[#F7E6E1]">
              Sneha{' '}
              <span className="text-[#B5476A] italic font-serif relative inline-block transition-transform duration-300 hover:scale-[1.02]">
                Verma
                {/* Handcrafted Warm Champagne Underline Flourish */}
                <svg 
                  className="absolute -bottom-2 sm:-bottom-3.5 left-0 w-full h-3.5 sm:h-4 text-[#E8C9A0]/85" 
                  viewBox="0 0 200 12" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path 
                    d="M2 9.5C65 3.2 135 2.8 198 8.5" 
                    stroke="currentColor" 
                    strokeWidth="3.4" 
                    strokeLinecap="round" 
                  />
                </svg>
              </span>
            </h1>

            {/* Sub-headline with Warm Champagne Highlight */}
            <p className="font-playfair text-xl sm:text-2xl lg:text-3xl font-normal tracking-wide text-[#E8C9A0] pt-1">
              AI Systems Engineer & Full-Stack Developer
            </p>
          </div>

          {/* Authentic Human Narrative */}
          <p className="font-sans text-base sm:text-lg text-[#F7E6E1]/90 max-w-xl leading-relaxed font-light">
            Computer Science undergraduate at{' '}
            <span className="text-[#E8C9A0] font-medium border-b border-[#E8C9A0]/50">
              Lovely Professional University
            </span>{' '}
            specializing in AI/ML. Blending mathematical rigor with bespoke digital craft to build intuitive software that solves real human problems.
          </p>

          {/* High-Conversion Contact Command Bar (Recruiter Magnet) */}
          <div className="w-full max-w-xl space-y-3.5 pt-1">
            
            {/* Primary Action Row: Initiate Reach & Download CV */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#contact"
                onClick={(e) => smoothScrollTo(e, 'contact')}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white bg-[#B5476A] hover:bg-[#9E3658] border border-[#E8C9A0]/45 shadow-xl shadow-[#3B131D]/80 hover:shadow-[0_0_24px_rgba(181,71,106,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
              >
                <span>Initiate Collaboration</span>
                <ArrowRight className="w-4 h-4 text-[#E8C9A0] group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>

              <a
                href="/sneha_verma_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Sneha_Verma_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide text-[#F7E6E1] bg-[#3B131D]/80 hover:bg-[#B5476A]/30 border border-[#E8C9A0]/35 hover:border-[#E8C9A0] backdrop-blur-md hover:-translate-y-0.5 transition-all duration-300 shadow-md group"
              >
                <Download className="w-4 h-4 text-[#E8C9A0] group-hover:text-white transition-colors" />
                <span>Download Résumé</span>
              </a>

              {/* Direct Profile Links */}
              <div className="flex items-center gap-2 pl-1">
                <a
                  href="https://github.com/snehaverma098"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#3B131D]/80 hover:bg-[#B5476A] border border-[#E8C9A0]/30 hover:border-[#E8C9A0] text-[#F7E6E1] hover:text-white transition-all duration-200"
                  aria-label="GitHub Profile"
                  title="View GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/in/snehaverma-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#3B131D]/80 hover:bg-[#B5476A] border border-[#E8C9A0]/30 hover:border-[#E8C9A0] text-[#F7E6E1] hover:text-white transition-all duration-200"
                  aria-label="LinkedIn Profile"
                  title="View LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Instant One-Click Email Copy Strip with Tactile Feedback */}
            <div className="p-2 sm:p-2.5 rounded-2xl bg-[#3B131D]/70 border border-[#E8C9A0]/25 backdrop-blur-md flex items-center justify-between gap-3 shadow-inner">
              <div className="flex items-center gap-2.5 pl-2 overflow-hidden">
                <Mail className="w-4 h-4 text-[#B5476A] shrink-0" />
                <span className="font-mono text-xs sm:text-sm text-[#F7E6E1]/90 truncate">
                  snehpreet9846@gmail.com
                </span>
              </div>

              <button
                onClick={handleCopyEmail}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-mono text-xs font-semibold transition-all duration-200 shrink-0 ${
                  copiedEmail
                    ? 'bg-[#176B50] text-white shadow-md'
                    : 'bg-[#5C1F2E] hover:bg-[#B5476A] text-[#E8C9A0] hover:text-white border border-[#E8C9A0]/30'
                }`}
                title="Click to copy direct email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Verified Credential Ribbon */}
          <div className="pt-2 grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-xl border-t border-[#E8C9A0]/20 pt-5">
            <div className="p-3 sm:p-3.5 rounded-2xl bg-[#3B131D]/60 border border-[#E8C9A0]/20 backdrop-blur-sm group hover:border-[#B5476A] hover:bg-[#3B131D]/90 transition-all">
              <span className="block font-playfair font-bold text-2xl sm:text-3xl text-[#E8C9A0]">
                8.0
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono text-[#F7E6E1]/75 tracking-wider uppercase">
                CGPA · CSE AI/ML
              </span>
            </div>

            <div className="p-3 sm:p-3.5 rounded-2xl bg-[#3B131D]/60 border border-[#E8C9A0]/20 backdrop-blur-sm group hover:border-[#B5476A] hover:bg-[#3B131D]/90 transition-all">
              <span className="block font-playfair font-bold text-2xl sm:text-3xl text-[#E8C9A0]">
                3+
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono text-[#F7E6E1]/75 tracking-wider uppercase">
                Featured Systems
              </span>
            </div>

            <div className="p-3 sm:p-3.5 rounded-2xl bg-[#3B131D]/60 border border-[#E8C9A0]/20 backdrop-blur-sm group hover:border-[#B5476A] hover:bg-[#3B131D]/90 transition-all">
              <span className="block font-playfair font-bold text-2xl sm:text-3xl text-[#B5476A]">
                GSSoC
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono text-[#F7E6E1]/75 tracking-wider uppercase">
                '26 Contributor
              </span>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Realistic Cinematic Showcase Reel (5 cols) */}
        <div className="lg:col-span-5 relative flex justify-center">
          
          {/* Subtle Champagne & Rose Ambient Bloom behind the card */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#B5476A]/25 via-[#E8C9A0]/20 to-[#5C1F2E]/30 rounded-3xl blur-2xl pointer-events-none" />

          {/* Main Glassmorphic Showcase Reel (Tangible & Realistic, NO AI boilerplate) */}
          <div className="relative w-full max-w-md rounded-3xl bg-[#3B131D]/90 border border-[#E8C9A0]/35 shadow-2xl shadow-black/60 backdrop-blur-2xl overflow-hidden transition-all duration-300 hover:border-[#E8C9A0]/60">
            
            {/* Top Deck Bar with Mode Selector */}
            <div className="px-5 py-3.5 border-b border-[#E8C9A0]/20 flex items-center justify-between bg-[#280911]/80">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B5476A] shadow-[0_0_6px_#B5476A]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#E8C9A0] shadow-[0_0_6px_#E8C9A0]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F7E6E1]/60" />
                <span className="ml-2 font-mono text-[11px] text-[#E8C9A0]/80 tracking-widest uppercase font-semibold">
                  SNEHA.SHOWCASE
                </span>
              </div>

              {/* Mode Switcher Tabs */}
              <div className="flex items-center gap-1 bg-[#1F070D] p-1 rounded-full border border-[#E8C9A0]/20 text-[10px] font-mono">
                <button
                  onClick={() => setActiveTab('projects')}
                  className={`px-3 py-1 rounded-full transition-all ${
                    activeTab === 'projects'
                      ? 'bg-[#B5476A] text-white font-semibold shadow-xs'
                      : 'text-[#F7E6E1]/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Works
                </button>
                <button
                  onClick={() => setActiveTab('stack')}
                  className={`px-3 py-1 rounded-full transition-all ${
                    activeTab === 'stack'
                      ? 'bg-[#B5476A] text-white font-semibold shadow-xs'
                      : 'text-[#F7E6E1]/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Arsenal
                </button>
              </div>
            </div>

            {/* Console Stage Body */}
            <div className="p-6 space-y-5 text-left">
              
              {activeTab === 'projects' ? (
                <>
                  {/* Project Selector Pills */}
                  <div className="flex items-center justify-between border-b border-[#E8C9A0]/15 pb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#E8C9A0] font-semibold">
                      // SELECTED CASE STUDIES
                    </span>
                    <span className="text-[10px] font-mono text-[#F7E6E1]/60">
                      0{activeProjectIdx + 1} of 03
                    </span>
                  </div>

                  {/* Project Switcher Bar */}
                  <div className="grid grid-cols-3 gap-1.5 p-1 rounded-2xl bg-[#1F070D]/80 border border-[#E8C9A0]/20 text-xs font-mono">
                    {featuredProjects.map((proj, idx) => (
                      <button
                        key={proj.id}
                        onClick={() => setActiveProjectIdx(idx)}
                        className={`py-2 px-1 text-center rounded-xl transition-all truncate text-[11px] ${
                          activeProjectIdx === idx
                            ? 'bg-[#B5476A] text-white font-bold shadow-xs'
                            : 'text-[#F7E6E1]/75 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {proj.title}
                      </button>
                    ))}
                  </div>

                  {/* Active Project Highlight Card */}
                  <div className="p-5 rounded-2xl bg-[#280911]/90 border border-[#E8C9A0]/25 space-y-3.5 shadow-inner">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-mono text-[#E8C9A0] font-semibold block uppercase">
                          {featuredProjects[activeProjectIdx].category}
                        </span>
                        <h2 className="font-playfair font-bold text-xl text-[#F7E6E1] leading-tight">
                          {featuredProjects[activeProjectIdx].title}
                        </h2>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-[#B5476A]/20 border border-[#B5476A]/40 text-[10px] font-mono text-[#E8C9A0] font-semibold shrink-0">
                        Verified
                      </span>
                    </div>

                    <p className="text-xs font-sans text-[#F7E6E1]/85 leading-relaxed">
                      {featuredProjects[activeProjectIdx].summary}
                    </p>

                    {/* Architectural Performance Spec */}
                    <div className="p-2.5 rounded-xl bg-[#1F070D]/70 border border-[#E8C9A0]/15 flex items-center gap-2 text-[11px] font-mono text-[#E8C9A0]">
                      <Zap className="w-3.5 h-3.5 text-[#B5476A] shrink-0" />
                      <span className="truncate">{featuredProjects[activeProjectIdx].metrics}</span>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {featuredProjects[activeProjectIdx].tech.map((t) => (
                        <span 
                          key={t}
                          className="px-2.5 py-0.5 rounded-full bg-[#3B131D] border border-[#E8C9A0]/25 text-[10px] font-mono text-[#F7E6E1]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Jump to Case Study Deep Dive */}
                  <div className="pt-2 flex items-center justify-between border-t border-[#E8C9A0]/15">
                    <a
                      href="#projects"
                      onClick={(e) => smoothScrollTo(e, 'projects')}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#E8C9A0] hover:text-white transition-colors group"
                    >
                      <span>Explore Full Project Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#B5476A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>

                    <span className="text-[10px] font-mono text-[#F7E6E1]/50">
                      Live Simulators Below
                    </span>
                  </div>
                </>
              ) : (
                /* TECHNICAL ARSENAL VIEW */
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#E8C9A0]/15 pb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#E8C9A0] font-semibold">
                      // CORE COMPETENCIES & STACK
                    </span>
                    <span className="text-[10px] font-mono text-[#F7E6E1]/60">
                      Production Ready
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {techArsenal.map((tech) => (
                      <div 
                        key={tech.name}
                        className="p-3 rounded-xl bg-[#280911]/80 border border-[#E8C9A0]/20 hover:border-[#B5476A] hover:bg-[#B5476A]/20 transition-all flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B5476A]" />
                          <span className="font-mono text-xs font-semibold text-[#F7E6E1]">
                            {tech.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-[#E8C9A0]/80">
                          {tech.category}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-[#E8C9A0]/15">
                    <a
                      href="#skills"
                      onClick={(e) => smoothScrollTo(e, 'skills')}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#E8C9A0] hover:text-white transition-colors"
                    >
                      <span>Inspect Full Technical Matrix</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}

            </div>

          </div>

          {/* Floating Luxury Satellite Badge */}
          <div className="hidden sm:flex absolute -bottom-5 -left-6 px-4 py-2.5 rounded-2xl bg-[#3B131D]/90 border border-[#E8C9A0]/40 shadow-xl backdrop-blur-xl items-center gap-3">
            <div className="p-2 rounded-xl bg-[#B5476A]/30 text-[#E8C9A0]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-mono font-bold text-[#F7E6E1]">
                Verified Credentials
              </span>
              <span className="text-[10px] text-[#E8C9A0]/80">
                12th PCM 99.40% • IBM Certified
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* ---------------- 3. BOTTOM CINEMATIC SCROLL BAR ---------------- */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E8C9A0]/20 text-xs font-mono text-[#F7E6E1]/70">
        
        {/* Scroll Indicator */}
        <a 
          href="#about"
          onClick={(e) => smoothScrollTo(e, 'about')}
          className="inline-flex items-center gap-2 text-[#E8C9A0] hover:text-white transition-colors group"
        >
          <div className="w-4 h-7 rounded-full border border-[#E8C9A0]/40 flex items-start justify-center p-1">
            <span className="w-1 h-2 rounded-full bg-[#B5476A] animate-pulse" />
          </div>
          <span className="tracking-widest uppercase text-[10px] font-semibold">
            Scroll to explore portfolio
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-[#E8C9A0] group-hover:translate-y-0.5 transition-transform" />
        </a>

        {/* Cinematic Editorial Motto */}
        <div className="italic font-playfair text-sm text-[#E8C9A0]/90 text-center sm:text-left">
          "Bridging computational AI rigor with bespoke digital craftsmanship."
        </div>

        {/* Location & Timezone Beacon */}
        <div className="flex items-center gap-2 text-[10px] tracking-wider uppercase text-[#F7E6E1]/60">
          <span className="w-1.5 h-1.5 rounded-full bg-[#176B50]" />
          <span>Punjab, India • IST (UTC+5:30)</span>
        </div>

      </div>

    </section>
  );
};

export default Hero;