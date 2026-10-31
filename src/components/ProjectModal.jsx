import React, { useEffect } from 'react';
import { X, Layers, CheckCircle2, Lightbulb, AlertCircle } from 'lucide-react';
import { GithubIcon } from './Icons';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#181818]/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl overflow-y-auto shadow-2xl flex flex-col text-[#181818] border-2 border-[#38231F]/20">
        
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 px-6 sm:px-8 py-4 bg-white/95 backdrop-blur-md border-b border-[#38231F]/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-[#FFFDF8] border border-[#38231F]/15 text-[#38231F] text-xs font-semibold font-mono">
              {project.category}
            </span>
            <span className="text-[#38231F]/60 font-mono text-xs hidden sm:inline-block">
              {project.timeline}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#FFFDF8] border border-[#38231F]/15 text-[#38231F] hover:bg-[#38231F] hover:text-white transition-colors"
            aria-label="Close modal dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 lg:p-10 space-y-8 text-left font-sans">
          
          {/* Main Title & Subtitle in Editorial Serif */}
          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full font-mono text-xs text-[#F45168] bg-[#F45168]/10 font-bold uppercase tracking-wider inline-block mb-1">
              DETAILED CASE STUDY
            </span>
            <h2 id="modal-title" className="font-playfair font-bold text-3xl sm:text-5xl text-[#38231F]">
              {project.title}
            </h2>
            <p className="text-[#38231F]/70 text-sm sm:text-base font-normal">
              {project.subtitle}
            </p>
          </div>

          {/* Screenshot Preview */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-[#38231F]/15 bg-[#F8F6F0] aspect-video shadow-md">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Problem & Solution Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#FFFDF8] border border-[#38231F]/15 space-y-2">
              <span className="font-mono text-xs font-semibold text-[#F45168] uppercase tracking-wider flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-[#F45168]" />
                <span>The Core Problem</span>
              </span>
              <p className="text-[#38231F]/80 text-xs sm:text-sm leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFDF8] border border-[#38231F]/15 space-y-2">
              <span className="font-mono text-xs font-semibold text-[#176B50] uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#176B50]" />
                <span>Engineered Solution</span>
              </span>
              <p className="text-[#38231F]/80 text-xs sm:text-sm leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architectural Highlights */}
          <div className="p-6 rounded-2xl bg-white border border-[#38231F]/15 space-y-4 shadow-2xs">
            <h3 className="font-mono text-xs font-bold text-[#38231F] uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#7546C8]" />
              <span>Key Architectural Decisions & Implementation</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#38231F]/80">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#176B50] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Learnings & Takeaways */}
          <div className="p-5 rounded-2xl bg-[#FFFDF8] border border-[#38231F]/15 space-y-2">
            <span className="font-mono text-xs font-semibold text-[#2855D9] uppercase tracking-wider flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5 text-[#2855D9]" />
              <span>What I Learned Building This</span>
            </span>
            <p className="text-[#38231F]/85 text-xs sm:text-sm leading-relaxed">
              {project.learnings}
            </p>
          </div>

          {/* Technologies Used */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] text-[#38231F]/60 uppercase tracking-wider block font-bold">
              VERIFIED TECHNOLOGIES
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span 
                  key={tech}
                  className="px-3.5 py-1.5 rounded-full bg-[#FFFDF8] border border-[#38231F]/15 text-[#38231F] font-mono text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* External Action Bar */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#38231F]/10">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-espresso text-sm shadow-md"
              >
                <span>Explore on GitHub</span>
                <GithubIcon className="w-4 h-4 text-white" />
              </a>
            )}

            <button
              onClick={onClose}
              className="btn-outline-espresso text-sm"
            >
              Close Case Study
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
