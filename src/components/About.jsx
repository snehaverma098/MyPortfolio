import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Compass, 
  Layers, 
  ArrowUpRight, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

const About = () => {
  const learningPillars = [
    {
      label: 'Learning by Building',
      desc: 'Instead of staying within textbook exercises, I write code that tackles concrete human scenarios — such as student mental wellness (MindEdu AI) or democratic information clarity (VoteWise AI).',
      tag: 'ETHOS',
      color: '#F45168',
    },
    {
      label: 'Analytical Foundations',
      desc: '99.40% in 12th PCM established a rigorous mathematical and logical baseline that now informs my study of linear algebra, calculus, and neural network optimization.',
      tag: 'FOUNDATION',
      color: '#2855D9',
    },
    {
      label: 'Open Source Community',
      desc: 'Selected contributor in GirlScript Summer of Code (GSSoC 2026), actively collaborating across community repositories and AI agent tracks.',
      tag: 'COMMUNITY',
      color: '#176B50',
    },
  ];

  const currentExplorations = [
    'Transformer Attention Mechanisms & SLMs',
    'Tool-Calling Autonomous Agents in Python',
    'Asynchronous FastAPI & Microservice Architecture',
    'Data Structures & Algorithms in C++ & Python',
    'Micro-interactions & Accessible Frontend Systems'
  ];

  return (
    <section 
      id="about" 
      className="py-24 sm:py-32 relative bg-white border-t border-[#38231F]/10 overflow-hidden"
    >
      {/* Subtle Warm Background Ambient Circles */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#FFFDF8] rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-[#F45168]/[0.03] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Handwritten Annotation */}
        <div className="flex flex-col items-start mb-16 text-left">
          
          <div className="flex items-center gap-2 mb-3">
            <span className="font-caveat text-2xl sm:text-3xl text-[#F45168] font-bold -rotate-1">
              behind the code
            </span>
            <svg className="w-6 h-6 text-[#F45168]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFDF8] border border-[#38231F]/15 text-xs font-mono mb-4 text-[#38231F] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#F45168]" />
            <span className="font-bold">01 // PERSONAL STORY & CONTEXT</span>
          </div>

          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl text-[#38231F] tracking-tight leading-[1.08] max-w-4xl">
            Curiosity driven by <span className="italic font-normal text-[#F45168]">practical engineering</span> and thoughtful craft.
          </h2>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Authentic Human Story & Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            <div className="space-y-5 text-[#38231F]/85 text-base sm:text-lg leading-relaxed font-sans">
              <p>
                My journey into technology began with a deep curiosity about how systems reason and solve problems. In school, a disciplined focus on physics, chemistry, and mathematics earned me a <strong className="text-[#38231F] font-semibold underline decoration-[#F45168] decoration-2 underline-offset-4">99.40% in senior secondary</strong> — establishing the analytical discipline I rely on every day.
              </p>

              <p>
                In 2025, I joined <strong className="text-[#38231F] font-semibold">Lovely Professional University</strong> to pursue my <strong className="text-[#7546C8] font-semibold">B.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning</strong> (currently maintaining an 8.0 CGPA).
              </p>

              <p>
                As I coded in Python, C++, and modern JavaScript, I discovered that theoretical knowledge comes alive only when you put it to work. That conviction led to <strong className="text-[#38231F] font-semibold">MindEdu AI</strong>, which uses sentiment NLP to support student wellness, and <strong className="text-[#38231F] font-semibold">VoteWise AI</strong>, an accessible engine designed to make civic information comprehensible.
              </p>

              <p>
                I recently completed a 6-week virtual internship in <strong className="text-[#38231F] font-semibold">AI Strategy & Business Intelligence with IBM SkillsBuild</strong> (CSRBOX/AICTE) and was selected as a contributor for <strong className="text-[#176B50] font-semibold">GirlScript Summer of Code (GSSoC 2026)</strong>. My goal is straightforward: build reliable, intelligent systems that solve real human challenges.
              </p>
            </div>

            {/* Editorial Philosophy Quote Block with Handwritten Marginalia */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-6 rounded-2xl bg-[#FFFDF8] border-2 border-[#38231F]/15 relative shadow-xs">
                <span className="font-playfair text-4xl text-[#F45168] leading-none shrink-0 block mb-2">“</span>
                <p className="font-playfair text-lg text-[#38231F] font-bold leading-snug">
                  Small steps build big dreams.
                </p>
                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#38231F]/10">
                  <span className="w-2 h-2 rounded-full bg-[#7546C8]" />
                  <span className="font-caveat text-base text-[#7546C8] font-bold">
                    personal compass
                  </span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#FFFDF8] border-2 border-[#38231F]/15 flex flex-col justify-between shadow-xs">
                <div>
                  <span className="font-mono text-[11px] text-[#38231F]/60 uppercase tracking-wider block mb-2 font-bold">
                    CORE DISCIPLINES
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {['Learning', 'Building', 'Exploring'].map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white border border-[#38231F]/15 text-[#38231F] font-mono text-xs font-semibold shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="font-caveat text-sm text-[#176B50] font-semibold mt-3">
                  ✓ daily hands-on practice
                </span>
              </div>
            </div>

            {/* Three Learning Principles in Editorial Cards */}
            <div className="pt-6 border-t border-[#38231F]/10 space-y-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#38231F] tracking-wider uppercase font-bold">
                  HOW I APPROACH MY WORK
                </span>
                <span className="font-caveat text-lg text-[#F45168] font-bold">
                  principles I live by
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {learningPillars.map((pillar) => (
                  <div 
                    key={pillar.label}
                    className="p-5 rounded-2xl bg-white border border-[#38231F]/15 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group hover:-translate-y-1"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span 
                          className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: `${pillar.color}15`, color: pillar.color }}
                        >
                          {pillar.tag}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: pillar.color }} />
                      </div>
                      <h3 className="font-playfair font-bold text-[#38231F] text-lg mb-2">
                        {pillar.label}
                      </h3>
                      <p className="text-[#38231F]/75 text-xs leading-relaxed font-sans">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What I'm Exploring Right Now */}
            <div className="p-6 rounded-2xl bg-[#FFFDF8] border border-[#38231F]/15 shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <Compass className="w-4 h-4 text-[#7546C8]" />
                <span className="font-mono text-xs font-bold text-[#38231F] uppercase tracking-wider">
                  What I'm exploring right now
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentExplorations.map((item) => (
                  <span 
                    key={item}
                    className="px-3.5 py-1.5 rounded-full bg-white border border-[#38231F]/15 font-mono text-xs text-[#38231F] hover:border-[#7546C8] hover:text-[#7546C8] transition-all cursor-default shadow-2xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Photo Composition & Verified Academic Dossier (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Illustrated Studio Composition with Editorial Frame */}
            <div className="relative">
              
              {/* Handwritten Note atop illustration */}
              <div className="absolute -top-7 right-4 z-20 hidden sm:flex items-center gap-1.5">
                <span className="font-caveat text-xl text-[#7546C8] font-bold rotate-2">
                  student & software creator
                </span>
                <span className="text-[#7546C8]">✦</span>
              </div>

              {/* Offset Color Block Frame */}
              <div className="absolute -inset-2 bg-[#7546C8] rounded-3xl rotate-1 opacity-80" />
              <div className="absolute -inset-2 bg-[#F45168] rounded-3xl -rotate-1 opacity-90" />

              <div className="relative rounded-2xl overflow-hidden bg-white border-2 border-[#38231F] p-2.5 z-10 shadow-xl">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#F8F6F0] relative">
                  <img 
                    src="/images/sneha_illustration.jpg" 
                    alt="Sneha Verma - Creative Developer Studio Illustration" 
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 border border-[#38231F]/15 font-mono text-[10px] text-[#38231F] font-bold shadow-xs">
                    Sneha Verma • 2nd Year CSE
                  </div>
                </div>

                <div className="pt-3 pb-1 px-2 flex items-center justify-between text-left">
                  <div>
                    <span className="font-mono text-[10px] text-[#38231F]/60 uppercase tracking-wider block font-bold">
                      CREATIVE IDENTITY
                    </span>
                    <strong className="font-playfair text-base text-[#38231F]">
                      Applied AI × Thoughtful Frontend
                    </strong>
                  </div>
                  <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#176B50]/10 text-[#176B50] border border-[#176B50]/20">
                    Verified Student
                  </span>
                </div>
              </div>

            </div>

            {/* Verified Academic Dossier Card */}
            <div className="p-7 rounded-2xl bg-[#FFFDF8] border-2 border-[#38231F]/15 shadow-sm space-y-5 text-left">
              <div className="flex items-center justify-between pb-3.5 border-b border-[#38231F]/10">
                <span className="font-mono text-xs text-[#38231F] font-bold uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#F45168]" />
                  <span>ACADEMIC DOSSIER</span>
                </span>
                <span className="font-mono text-[11px] text-[#176B50] font-bold px-2 py-0.5 rounded-full bg-[#176B50]/10">
                  VERIFIED
                </span>
              </div>

              <div className="space-y-4 text-xs font-sans">
                {/* LPU */}
                <div className="flex items-start justify-between gap-4 pb-3 border-b border-[#38231F]/5">
                  <div className="flex items-start gap-2.5">
                    <GraduationCap className="w-4 h-4 text-[#7546C8] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#38231F] block font-semibold text-sm">Lovely Professional University</strong>
                      <span className="text-[#38231F]/70">B.Tech CSE (AI & Machine Learning) • 2025–2029</span>
                    </div>
                  </div>
                  <span className="font-mono text-[#38231F] font-bold shrink-0 bg-white border border-[#38231F]/20 px-2.5 py-1 rounded-full text-xs shadow-2xs">
                    8.0 CGPA
                  </span>
                </div>

                {/* School */}
                <div className="flex items-start justify-between gap-4 pb-3 border-b border-[#38231F]/5">
                  <div className="flex items-start gap-2.5">
                    <BookOpen className="w-4 h-4 text-[#F45168] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#38231F] block font-semibold text-sm">T.S.S.M Sr. Sec. School</strong>
                      <span className="text-[#38231F]/70">Class XII (Physics, Chemistry, Math)</span>
                    </div>
                  </div>
                  <span className="font-mono text-[#F45168] font-bold shrink-0 bg-[#F45168]/10 border border-[#F45168]/20 px-2.5 py-1 rounded-full text-xs">
                    99.40%
                  </span>
                </div>

                {/* IBM Internship */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-2.5">
                    <Layers className="w-4 h-4 text-[#2855D9] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#38231F] block font-semibold text-sm">IBM SkillsBuild Internship</strong>
                      <span className="text-[#38231F]/70">AI Strategy & Business Intelligence</span>
                    </div>
                  </div>
                  <span className="font-mono text-[#2855D9] text-[11px] shrink-0 font-bold bg-[#2855D9]/10 px-2.5 py-1 rounded-full">
                    CSRBOX / AICTE
                  </span>
                </div>
              </div>

              {/* View PDF Resume Button */}
              <div className="pt-3 border-t border-[#38231F]/10">
                <a
                  href="/sneha_verma_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#38231F] text-white font-sans text-xs font-semibold hover:bg-[#181818] transition-all shadow-xs hover:scale-[1.01]"
                >
                  <span>View Official PDF Résumé</span>
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

export default About;
