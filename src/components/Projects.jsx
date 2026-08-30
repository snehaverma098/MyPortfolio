import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectData = [
    {
      id: 'mindedu',
      num: 'PROJECT 01',
      title: 'MindEdu AI',
      category: 'AI • Education • Generative AI',
      description: 'An AI-powered education and mental wellness platform combining journal analysis, sentiment tracking and personalized study plan generation.',
      technologies: ['Python', 'Flask', 'CSS', 'Chart.js', 'GenAI'],
      image: '/images/mindedu.jpg',
      highlights: [
        'Integrated Generative AI for customized study plan generation',
        'NLP sentiment analysis engine evaluating student reflection journals',
        'Interactive analytics visualizer built with Chart.js',
        'Modular Flask backend API structure'
      ]
    },
    {
      id: 'votewise',
      num: 'PROJECT 02',
      title: 'VoteWise AI',
      category: 'AI • Information • Web',
      description: 'An AI-driven platform designed to make voting-related information transparent, accessible, and easy to understand for informed decision making.',
      technologies: ['Python', 'AI/ML', 'Generative AI', 'JavaScript'],
      image: '/images/votewise.jpg',
      highlights: [
        'AI-driven civic data summarization engine',
        'Interactive candidate policy comparison matrix',
        'Clean, accessible mobile-first interface design',
        'Structured information query architecture'
      ]
    },
    {
      id: 'nailedit',
      num: 'PROJECT 03',
      title: 'NailEdit.frr (Client Web Project)',
      category: 'Web Development • Client Project',
      description: 'A responsive e-commerce style web application built for a nail-extension brand based on specific client requirements, featuring attractive branding and smooth navigation.',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
      image: '/images/client_project.jpg',
      highlights: [
        'Designed interactive sections to showcase nail collections, styles & customization options',
        'Implemented a mobile-first, visually appealing interface using React, Vite & Tailwind CSS',
        'Optimized navigation flow and responsive layouts across all screen sizes',
        'Clean, maintainable modular codebase structure'
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-[#000000] border-t border-white/10">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E0E0E] border border-white/10 text-amber-400 text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>02 // FEATURED WORK</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Selected <span className="text-amber-gradient">Work</span>
          </h2>
          
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl">
            A collection of projects I've built while exploring AI, software development and web applications.
          </p>
        </div>

        {/* Large Premium Project Cards Stack */}
        <div className="space-y-12">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="glass-card-dark rounded-3xl overflow-hidden border border-white/10 bg-[#0D0D0D] hover:border-amber-400/40 transition-all duration-300 group shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                
                {/* Visual Preview Side (Large image preview) */}
                <div className="lg:col-span-7 relative overflow-hidden bg-black min-h-[280px] sm:min-h-[340px] flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/10">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                  
                  {/* Category Pill Tag Overlay */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-amber-300 font-mono text-xs font-semibold shadow-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="font-mono text-xs font-bold text-slate-500 tracking-wider">
                      {project.num}
                    </span>
                    
                    <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      "{project.description}"
                    </p>

                    {/* Technologies Tags */}
                    <div className="pt-2">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-lg bg-slate-900 border border-white/10 text-slate-300 font-mono text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Buttons Action Bar */}
                  <div className="pt-8 mt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs text-black bg-white hover:bg-slate-200 transition-all duration-200 group/btn shadow-md hover:scale-105"
                    >
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-black group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>

                    <a
                      href="https://github.com/snehaverma098"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs text-slate-300 bg-slate-900 border border-white/10 hover:border-white hover:text-white transition-colors"
                    >
                      <span>GitHub</span>
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Detail Modal */}
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
