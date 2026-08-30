import React from 'react';
import { X, Layers, CheckCircle2, Terminal } from 'lucide-react';
import { GithubIcon } from './Icons';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0E0E0E] border border-white/15 rounded-3xl overflow-y-auto shadow-2xl flex flex-col text-white">
        
        {/* Modal Header Bar */}
        <div className="sticky top-0 z-20 px-6 py-4 bg-black/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 font-mono text-xs font-semibold">
              {project.category}
            </span>
            <span className="text-slate-400 font-mono text-xs hidden sm:inline-block">
              {project.num}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-amber-400 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Project Image Preview */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-950 aspect-video group">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Title & Description */}
          <div className="space-y-4">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white">
              {project.title}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              "{project.description}"
            </p>
          </div>

          {/* Technical Specs Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl bg-black border border-white/10">
            <div className="space-y-3">
              <h3 className="font-mono text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>Architecture Highlights</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs font-semibold text-amber-300 uppercase tracking-wider flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span>Tech Stack</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-slate-200 font-mono text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* External Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-black bg-amber-400 hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/20"
            >
              <span>GitHub Repository</span>
              <GithubIcon className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-slate-300 bg-slate-900 border border-white/10 hover:border-white hover:text-white transition-colors"
            >
              Close Details
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
