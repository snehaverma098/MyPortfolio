import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Activity, 
  Search, 
  Palette,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // --- Interactive Demo States ---
  // 1. VoteWise query demo
  const [voteTopic, setVoteTopic] = useState('Healthcare');
  const voteComparisons = {
    Healthcare: {
      candidateA: 'Proposes public health clinic subsidies and prescription price caps.',
      candidateB: 'Advocates private market incentives and health savings account expansion.',
      sentiment: '88% Public Interest Priority',
    },
    Economy: {
      candidateA: 'Prioritizes small business grants and progressive corporate brackets.',
      candidateB: 'Focuses on deregulation, flat corporate incentives, and venture capital tax credits.',
      sentiment: '94% Economic Index Focus',
    },
    Climate: {
      candidateA: 'Mandates renewable transition deadlines and EV municipal transit conversion.',
      candidateB: 'Promotes hybrid energy initiatives and industrial carbon offset markets.',
      sentiment: '81% Sustainability Focus',
    },
  };

  // 2. MindEdu sentiment demo
  const [journalInput, setJournalInput] = useState(
    "Finished the machine learning assignment today! Felt challenging at first, but finally understood backpropagation."
  );
  const [sentimentResult, setSentimentResult] = useState({
    polarity: 'Positive (+0.82)',
    mood: 'Focused & Accomplished',
    wellnessScore: '86/100',
    recommendation: 'Target next 45-min deep session on Neural Networks optimization.',
  });
  const [analyzing, setAnalyzing] = useState(false);

  const handleAnalyzeJournal = () => {
    setAnalyzing(true);
    setTimeout(() => {
      const lower = journalInput.toLowerCase();
      if (lower.includes('tired') || lower.includes('overwhelmed') || lower.includes('stress') || lower.includes('burnout')) {
        setSentimentResult({
          polarity: 'Vulnerable (-0.48)',
          mood: 'Fatigue Detected',
          wellnessScore: '42/100',
          recommendation: 'Recommend 20-min mindful break before resuming. Pace study modules into 25-min Pomodoro increments.',
        });
      } else {
        setSentimentResult({
          polarity: 'Positive (+0.84)',
          mood: 'High Focus & Resilient',
          wellnessScore: '88/100',
          recommendation: 'Optimal cognitive state for complex tasks. Suggested next: Dive into transformer math exercises.',
        });
      }
      setAnalyzing(false);
    }, 400);
  };

  // 3. NailEdit customizer demo
  const [nailShape, setNailShape] = useState('Almond');
  const [nailFinish, setNailFinish] = useState('Velvet Matte');
  const [nailColor, setNailColor] = useState('#F45168');

  const projectsData = [
    {
      id: 'mindedu',
      index: '01',
      title: 'MindEdu AI',
      subtitle: 'Student Wellness & Adaptive Study Plan Platform',
      timeline: "June '26",
      category: 'AI • Education • Sentiment NLP • Python',
      overview:
        'An integrated student intelligence platform combining daily reflective journal sentiment analysis with automated, personalized study schedule generation. Designed to recognize academic burnout early while keeping students on track with core coursework.',
      problem:
        'Engineering students frequently juggle demanding coursework without tools that correlate their mental well-being with actual study performance, leading to stress cycles and irregular study schedules.',
      solution:
        'Built an NLP-based sentiment analysis pipeline linked with a personalized Study Plan Generator. Students input daily reflections, while the system tracks emotional sentiment trends, generates structured study blocks, and provides interactive visual progress tracking.',
      techStack: ['Python', 'Flask', 'CSS', 'Chart.js', 'NLP Sentiment Engine', 'GenAI'],
      image: '/images/mindedu.jpg',
      highlights: [
        'Sentiment polarity evaluation engine analyzing student reflective journal entries',
        'Personalized Study Plan Generator adapting study sessions to emotional energy levels',
        'Interactive analytics visualizer tracking study hours, engagement, and wellness scores using Chart.js',
        'Modular Flask Python backend microservice architecture'
      ],
      githubUrl: 'https://github.com/snehaverma098',
      liveUrl: null,
      learnings:
        'Constructed end-to-end Flask REST endpoints for NLP pipelines, model score normalization, and dynamic frontend charting via Chart.js.'
    },
    {
      id: 'votewise',
      index: '02',
      title: 'VoteWise AI',
      subtitle: 'Civic Data Intelligence & Informed Election Assistant',
      timeline: "May '26",
      category: 'AI / ML • Civic Technology • Generative AI',
      overview:
        'An AI-driven platform built to demystify complex election policies, candidate track records, and civic legislation. VoteWise breaks down dense political manifestos into transparent, structured comparison matrices to help voters make informed decisions.',
      problem:
        'Voters often face hundreds of pages of opaque policy documents and fragmented media narratives, making objective comparison across candidate stances difficult and time-consuming.',
      solution:
        'Engineered an information pipeline that indexes policy positions across key civic issues, utilizing Generative AI summarization and NLP fact-checking to generate balanced comparison briefs.',
      techStack: ['Python', 'AI/ML', 'Generative AI', 'JavaScript', 'REST APIs'],
      image: '/images/votewise.jpg',
      highlights: [
        'Structured candidate policy comparison matrices across economy, healthcare, and education',
        'AI-driven civic data summarization engine delivering non-partisan policy digests',
        'Transparent voter sentiment trend visualization and issue weighting indicators',
        'Mobile-first accessible interface designed for rapid public comprehension'
      ],
      githubUrl: 'https://github.com/snehaverma098',
      liveUrl: null,
      learnings:
        'Deepened understanding of prompt temperature control, hallucination guardrails in civic information retrieval, and building clean UI matrices for multi-candidate comparisons.'
    },
    {
      id: 'nailedit',
      index: '03',
      title: 'NailEdit.frr',
      subtitle: 'Client E-Commerce Web Experience & Customizer',
      timeline: "July '26",
      category: 'Frontend Engineering • Client Project • React & Vite',
      overview:
        'A bespoke, mobile-first e-commerce web application engineered for an independent nail-extension brand based on direct client specifications. Focused on distinctive boutique branding, catalog exploration, and bespoke nail customization options.',
      problem:
        'The client needed an engaging digital showcase that went beyond flat photo grids to showcase nail shapes, hand-applied textures, and custom sizing options with seamless mobile navigation.',
      solution:
        'Developed a high-performance web experience in React and Vite with Tailwind CSS. Included interactive collection galleries, custom length/shape selectors, and responsive checkout inquiry flows.',
      techStack: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'Responsive UI'],
      image: '/images/client_project.jpg',
      highlights: [
        'Engineered interactive product showcase featuring custom nail shapes, finishes, and palettes',
        'Designed a high-contrast luxury boutique aesthetic optimized for mobile browsing',
        'Achieved sub-second page loads through Vite asset optimization and lightweight modular React components',
        'Collaborated directly with client to translate branding goals into code'
      ],
      githubUrl: 'https://github.com/snehaverma098',
      liveUrl: null,
      learnings:
        'Gained firsthand experience handling client design revisions, responsive typography hierarchy, and crafting performant component state without external bloat.'
    }
  ];

  return (
    <section 
      id="projects" 
      className="py-24 sm:py-32 relative bg-[#FFFDF8] border-t border-[#38231F]/10 overflow-hidden"
    >
      {/* Background Soft Dotted Grid */}
      <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-20 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-caveat text-2xl sm:text-3xl text-[#2855D9] font-bold -rotate-1">
              handcrafted work
            </span>
            <svg className="w-6 h-6 text-[#2855D9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#38231F]/15 text-xs font-mono mb-4 text-[#38231F] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#2855D9]" />
            <span className="font-bold">02 // SELECTED CASE STUDIES</span>
          </div>

          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl text-[#38231F] tracking-tight leading-[1.08] mb-4 max-w-4xl">
            Projects built with <span className="italic font-normal text-[#2855D9]">curiosity, code,</span> and care.
          </h2>
          
          <p className="text-[#38231F]/75 text-base sm:text-lg max-w-2xl font-sans leading-relaxed">
            Real software, tested interfaces, and honest takeaways. Explore the featured applications below with live interactive simulators.
          </p>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            PROJECT 01: MindEdu AI (FEATURED CASE STUDY — EXPANSIVE PRESENCE)
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="mb-24 p-6 sm:p-10 lg:p-12 rounded-3xl bg-white border-2 border-[#38231F]/15 shadow-xl relative overflow-hidden text-left">
          {/* Featured Top Badge Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#38231F]/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold px-3.5 py-1 rounded-full bg-[#F45168] text-white shadow-xs">
                FEATURED CASE STUDY // 01
              </span>
              <span className="font-mono text-xs text-[#38231F]/70 font-semibold">
                June 2026 Release
              </span>
            </div>
            
            <div className="flex items-center gap-2 font-mono text-xs text-[#F45168] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#F45168]" />
              <span>Student Wellness & Sentiment NLP</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left 6 Cols: Narrative, Problem/Solution, Verified Tech */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h3 className="font-playfair font-bold text-3xl sm:text-4xl text-[#38231F] tracking-tight mb-2">
                  MindEdu AI
                </h3>
                <p className="text-[#F45168] font-mono text-xs sm:text-sm font-semibold">
                  NLP journal sentiment evaluation & adaptive study scheduling
                </p>
              </div>

              <p className="text-[#38231F]/80 text-sm sm:text-base leading-relaxed font-sans">
                Academic success in engineering isn't just about cramming hours — it's about cognitive pacing. MindEdu AI provides a dual-purpose dashboard that evaluates student journal entries for emotional fatigue and dynamically recalibrates weekly study plans before burnout occurs.
              </p>

              {/* Problem vs Solution Micro Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-4 rounded-xl bg-[#FFFDF8] border border-[#38231F]/12 shadow-2xs">
                  <span className="font-mono text-[10px] text-[#F45168] uppercase font-bold block mb-1">
                    The Challenge
                  </span>
                  <p className="text-[#38231F]/80 text-xs leading-relaxed font-sans">
                    Demanding engineering schedules trigger burnout cycles without students noticing early cognitive fatigue.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FFFDF8] border border-[#38231F]/12 shadow-2xs">
                  <span className="font-mono text-[10px] text-[#176B50] uppercase font-bold block mb-1">
                    The Engineered Fix
                  </span>
                  <p className="text-[#38231F]/80 text-xs leading-relaxed font-sans">
                    NLP sentiment extraction recalibrates study blocks into sustainable 25-minute Pomodoro sessions.
                  </p>
                </div>
              </div>

              {/* Verified Tech Stack */}
              <div className="space-y-2 pt-1">
                <span className="font-mono text-[10px] text-[#38231F]/60 uppercase tracking-wider block font-bold">
                  VERIFIED STACK
                </span>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Flask', 'CSS', 'Chart.js', 'NLP Sentiment', 'GenAI'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 rounded-full bg-[#FFFDF8] border border-[#38231F]/15 font-mono text-xs text-[#38231F] font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setSelectedProject(projectsData[0])}
                  className="btn-coral text-sm"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href="https://github.com/snehaverma098"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-espresso text-sm"
                >
                  <GithubIcon className="w-4 h-4 text-[#38231F]" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

            {/* Right 6 Cols: Screenshot & Live Journal Sentiment Simulator */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Real Dashboard Screenshot in Offset Editorial Frame */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#38231F] bg-[#F8F6F0] p-1.5 shadow-md group">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-white">
                  <img 
                    src="/images/mindedu.jpg" 
                    alt="MindEdu AI Dashboard Interface" 
                    className="w-full h-full object-cover object-top group-hover:scale-[1.01] transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-full bg-white/95 border border-[#38231F]/15 font-mono text-[10px] text-[#38231F] font-bold shadow-xs">
                    Flask + Chart.js
                  </div>
                </div>
              </div>

              {/* Interactive Journal Sentiment Simulator */}
              <div className="p-6 rounded-2xl bg-[#FFFDF8] border border-[#38231F]/15 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#38231F] flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-[#F45168]" />
                    <span>LIVE JOURNAL NLP SIMULATOR</span>
                  </span>
                  <span className="font-mono text-[10px] text-[#F45168] font-bold">Type or test text</span>
                </div>

                <div className="space-y-2">
                  <textarea
                    value={journalInput}
                    onChange={(e) => setJournalInput(e.target.value)}
                    rows={2}
                    className="w-full p-3.5 rounded-xl bg-white border border-[#38231F]/20 text-xs text-[#38231F] placeholder:text-[#38231F]/40 focus:outline-none focus:border-[#F45168] font-sans resize-none shadow-2xs"
                    placeholder="Enter student reflection journal entry..."
                  />

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex gap-2 text-[10px] font-mono text-[#38231F]/70">
                      <button 
                        onClick={() => setJournalInput("Finished the machine learning assignment today! Felt challenging at first, but finally understood backpropagation.")}
                        className="hover:text-[#F45168] underline font-bold"
                      >
                        Sample: Positive
                      </button>
                      <span>•</span>
                      <button 
                        onClick={() => setJournalInput("Feeling quite overwhelmed and tired with three midterm exams scheduled in two days.")}
                        className="hover:text-[#F45168] underline font-bold"
                      >
                        Sample: Fatigue
                      </button>
                    </div>

                    <button
                      onClick={handleAnalyzeJournal}
                      disabled={analyzing}
                      className="px-4 py-1.5 rounded-full bg-[#38231F] hover:bg-[#181818] text-white font-mono font-bold text-xs shadow-xs transition-colors disabled:opacity-50"
                    >
                      {analyzing ? 'Evaluating...' : 'Run Sentiment NLP'}
                    </button>
                  </div>
                </div>

                {/* Analysis Output Result */}
                <div className="p-4 rounded-xl bg-white border border-[#38231F]/12 space-y-2 text-xs">
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-[#38231F]/70">Polarity: <strong className="text-[#F45168]">{sentimentResult.polarity}</strong></span>
                    <span className="text-[#38231F]/70">Wellness: <strong className="text-[#176B50]">{sentimentResult.wellnessScore}</strong></span>
                  </div>
                  <div className="text-[#38231F] font-medium text-xs">
                    State: <strong className="text-[#F45168]">{sentimentResult.mood}</strong>
                  </div>
                  <div className="text-[#38231F]/90 text-xs bg-[#FFFDF8] p-3 rounded-lg border border-[#38231F]/10">
                    <strong className="text-[#F45168] font-mono block text-[10px] mb-0.5 font-bold">ADAPTIVE STUDY PLANNER:</strong>
                    {sentimentResult.recommendation}
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            PROJECT 02: VoteWise AI (EDITORIAL COMPOSITION)
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="mb-24 p-6 sm:p-10 lg:p-12 rounded-3xl bg-white border-2 border-[#38231F]/15 shadow-xl relative overflow-hidden text-left">
          {/* Top Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#38231F]/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold px-3.5 py-1 rounded-full bg-[#2855D9] text-white shadow-xs">
                CASE STUDY // 02
              </span>
              <span className="font-mono text-xs text-[#38231F]/70 font-semibold">
                May 2026 Release
              </span>
            </div>
            
            <div className="flex items-center gap-2 font-mono text-xs text-[#2855D9] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#2855D9]" />
              <span>Civic Intelligence & Generative AI</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left 6 Cols: Screenshot & Interactive Policy Comparator */}
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#38231F] bg-[#F8F6F0] p-1.5 shadow-md group">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-white">
                  <img 
                    src="/images/votewise.jpg" 
                    alt="VoteWise AI Interface Screenshot" 
                    className="w-full h-full object-cover object-top group-hover:scale-[1.01] transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-full bg-white/95 border border-[#38231F]/15 font-mono text-[10px] text-[#38231F] font-bold shadow-xs">
                    Candidate Comparator UI
                  </div>
                </div>
              </div>

              {/* Interactive Policy Query Simulator */}
              <div className="p-6 rounded-2xl bg-[#FFFDF8] border border-[#38231F]/15 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#38231F] flex items-center gap-1.5">
                    <Search className="w-4 h-4 text-[#2855D9]" />
                    <span>INTERACTIVE POLICY SIMULATOR</span>
                  </span>
                  <span className="font-mono text-[10px] text-[#2855D9] font-bold">Click topic to test</span>
                </div>

                {/* Topic Selector Tabs */}
                <div className="flex gap-2">
                  {['Healthcare', 'Economy', 'Climate'].map((topic) => (
                    <button
                      key={topic}
                      onClick={() => setVoteTopic(topic)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
                        voteTopic === topic
                          ? 'bg-[#2855D9] text-white shadow-xs'
                          : 'bg-white border border-[#38231F]/15 text-[#38231F] hover:bg-[#F8F6F0]'
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>

                {/* Comparison Preview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                  <div className="p-3.5 rounded-xl bg-white border border-[#38231F]/15 space-y-1 text-left">
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#38231F]/60">
                      <span className="font-bold">CANDIDATE A</span>
                      <span className="text-[#2855D9] font-bold">Verified</span>
                    </div>
                    <p className="text-[#38231F] leading-relaxed font-sans">
                      {voteComparisons[voteTopic].candidateA}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-[#38231F]/15 space-y-1 text-left">
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#38231F]/60">
                      <span className="font-bold">CANDIDATE B</span>
                      <span className="text-[#2855D9] font-bold">Verified</span>
                    </div>
                    <p className="text-[#38231F] leading-relaxed font-sans">
                      {voteComparisons[voteTopic].candidateB}
                    </p>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-[#38231F]/70 flex items-center justify-between pt-1 border-t border-[#38231F]/10">
                  <span>METRIC: <strong className="text-[#38231F]">{voteComparisons[voteTopic].sentiment}</strong></span>
                  <span className="text-[#2855D9] font-bold">Real-time simulation</span>
                </div>
              </div>

            </div>

            {/* Right 6 Cols: Narrative, Tech Stack, Links */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div>
                <h3 className="font-playfair font-bold text-3xl sm:text-4xl text-[#38231F] tracking-tight mb-2">
                  VoteWise AI
                </h3>
                <p className="text-[#2855D9] font-mono text-xs sm:text-sm font-semibold">
                  AI-driven platform for objective election policy comparison
                </p>
              </div>

              <p className="text-[#38231F]/80 text-sm sm:text-base leading-relaxed font-sans">
                Voting-related information is often distributed across dense multi-page PDFs and partisan debate transcripts. VoteWise was conceived to parse, summarize, and categorize policy positions across key voter interests into structured, accessible matrices.
              </p>

              {/* Highlights Micro List */}
              <div className="space-y-2.5 pt-1">
                {[
                  'Structured candidate policy comparison matrices across economy, healthcare, and education',
                  'AI-driven civic data summarization engine delivering non-partisan policy digests',
                  'Transparent voter sentiment trend visualization and issue weighting indicators',
                  'Mobile-first accessible interface designed for rapid public comprehension'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#38231F]/80 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-[#2855D9] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Verified Tech Stack */}
              <div className="space-y-2 pt-1">
                <span className="font-mono text-[10px] text-[#38231F]/60 uppercase tracking-wider block font-bold">
                  VERIFIED STACK
                </span>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'AI/ML', 'Generative AI', 'JavaScript', 'REST APIs'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 rounded-full bg-[#FFFDF8] border border-[#38231F]/15 font-mono text-xs text-[#38231F] font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setSelectedProject(projectsData[1])}
                  className="btn-espresso text-sm"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href="https://github.com/snehaverma098"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-espresso text-sm"
                >
                  <GithubIcon className="w-4 h-4 text-[#38231F]" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            PROJECT 03: NailEdit.frr (CREATIVE COMMERCE SHOWCASE)
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-white border-2 border-[#38231F]/15 shadow-xl relative overflow-hidden text-left">
          {/* Top Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#38231F]/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold px-3.5 py-1 rounded-full bg-[#176B50] text-white shadow-xs">
                CASE STUDY // 03
              </span>
              <span className="font-mono text-xs text-[#38231F]/70 font-semibold">
                July 2026 Client Delivery
              </span>
            </div>
            
            <div className="flex items-center gap-2 font-mono text-xs text-[#176B50] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#176B50]" />
              <span>Commercial Web Craft & Interactive UI</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left 6 Cols: Narrative, Client Context */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h3 className="font-playfair font-bold text-3xl sm:text-4xl text-[#38231F] tracking-tight mb-2">
                  NailEdit.frr
                </h3>
                <p className="text-[#176B50] font-mono text-xs sm:text-sm font-semibold">
                  Client E-Commerce Web Experience & Interactive Style Showcase
                </p>
              </div>

              <p className="text-[#38231F]/80 text-sm sm:text-base leading-relaxed font-sans">
                Designed and built for an independent nail-extension brand based on specific client requirements. Demonstrates my interest in creating visually compelling digital experiences, handling real client revisions, and engineering responsive product customizers.
              </p>

              {/* Client Brief & Architecture */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-4 rounded-xl bg-[#FFFDF8] border border-[#38231F]/12 shadow-2xs">
                  <span className="font-mono text-[10px] text-[#176B50] uppercase font-bold block mb-1">
                    Brand Experience
                  </span>
                  <p className="text-[#38231F]/80 text-xs leading-relaxed font-sans">
                    Elevated boutique visual identity with smooth micro-interactions and high-contrast photography.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FFFDF8] border border-[#38231F]/12 shadow-2xs">
                  <span className="font-mono text-[10px] text-[#38231F] uppercase font-bold block mb-1">
                    Architecture
                  </span>
                  <p className="text-[#38231F]/80 text-xs leading-relaxed font-sans">
                    Modular React component tree built on Vite and Tailwind CSS for rapid mobile rendering.
                  </p>
                </div>
              </div>

              {/* Verified Stack */}
              <div className="space-y-2 pt-1">
                <span className="font-mono text-[10px] text-[#38231F]/60 uppercase tracking-wider block font-bold">
                  VERIFIED STACK
                </span>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'Responsive UI'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 rounded-full bg-[#FFFDF8] border border-[#38231F]/15 font-mono text-xs text-[#38231F] font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setSelectedProject(projectsData[2])}
                  className="btn-espresso text-sm"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href="https://github.com/snehaverma098"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-espresso text-sm"
                >
                  <GithubIcon className="w-4 h-4 text-[#38231F]" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

            {/* Right 6 Cols: Interactive Collection Customizer Widget */}
            <div className="lg:col-span-6 space-y-5">
              
              <div className="p-6 rounded-2xl bg-[#FFFDF8] border border-[#38231F]/15 shadow-xs space-y-6 text-left">
                <div className="flex items-center justify-between pb-3 border-b border-[#38231F]/10">
                  <span className="font-mono text-xs font-bold text-[#38231F] flex items-center gap-1.5">
                    <Palette className="w-4 h-4 text-[#176B50]" />
                    <span>INTERACTIVE COLLECTION CUSTOMIZER</span>
                  </span>
                  <span className="font-mono text-[10px] text-[#176B50] font-bold">Client Demo Feature</span>
                </div>

                {/* Shape Switcher */}
                <div className="space-y-2">
                  <span className="font-mono text-[10px] text-[#38231F]/70 uppercase tracking-wider block font-bold">
                    1. SELECT SHAPE ARCHETYPE
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {['Almond', 'Coffin', 'Stiletto'].map((shape) => (
                      <button
                        key={shape}
                        onClick={() => setNailShape(shape)}
                        className={`p-3 rounded-xl font-mono text-xs font-bold transition-all ${
                          nailShape === shape
                            ? 'bg-[#176B50] text-white shadow-xs'
                            : 'bg-white border border-[#38231F]/15 text-[#38231F] hover:bg-[#F8F6F0]'
                        }`}
                      >
                        {shape}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Finish Switcher */}
                <div className="space-y-2">
                  <span className="font-mono text-[10px] text-[#38231F]/70 uppercase tracking-wider block font-bold">
                    2. SURFACE TEXTURE / FINISH
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {['Velvet Matte', 'High Gloss', 'Chrome Pearl'].map((finish) => (
                      <button
                        key={finish}
                        onClick={() => setNailFinish(finish)}
                        className={`p-3 rounded-xl font-mono text-xs font-bold transition-all ${
                          nailFinish === finish
                            ? 'bg-[#176B50] text-white shadow-xs'
                            : 'bg-white border border-[#38231F]/15 text-[#38231F] hover:bg-[#F8F6F0]'
                        }`}
                      >
                        {finish}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Palette Switcher */}
                <div className="space-y-2">
                  <span className="font-mono text-[10px] text-[#38231F]/70 uppercase tracking-wider block font-bold">
                    3. PALETTE TONE
                  </span>
                  <div className="flex items-center gap-3">
                    {[
                      { name: 'Coral Red', hex: '#F45168' },
                      { name: 'Mocha Brown', hex: '#6F4E37' },
                      { name: 'Rich Violet', hex: '#7546C8' },
                      { name: 'Forest Green', hex: '#176B50' },
                      { name: 'Deep Espresso', hex: '#38231F' },
                    ].map((col) => (
                      <button
                        key={col.name}
                        onClick={() => setNailColor(col.hex)}
                        className={`w-9 h-9 rounded-full border-2 transition-transform ${
                          nailColor === col.hex ? 'scale-115 border-[#38231F] ring-4 ring-[#176B50]/30 shadow-md' : 'border-[#38231F]/20'
                        }`}
                        style={{ backgroundColor: col.hex }}
                        title={col.name}
                        aria-label={`Select ${col.name}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Live Preview Card */}
                <div className="p-4 rounded-xl bg-white border border-[#38231F]/15 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-mono text-[10px] text-[#38231F]/60 uppercase block font-bold">Configured Spec</span>
                    <strong className="text-[#38231F] block font-semibold text-sm">
                      {nailShape} Shape • {nailFinish}
                    </strong>
                  </div>
                  <div className="flex items-center gap-2">
                    <span 
                      className="w-5 h-5 rounded-full border border-[#38231F]/20 shadow-xs"
                      style={{ backgroundColor: nailColor }}
                    />
                    <span className="font-mono text-[#176B50] text-xs font-bold">Ready for Order</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Case Study Deep-Dive Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;
