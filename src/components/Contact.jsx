import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUp, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = "snehpreet9846@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-24 relative bg-[#000000] border-t border-white/10 overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Container */}
        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 lg:p-16 bg-[#0D0D0D] border border-white/10 shadow-2xl text-center relative overflow-hidden group text-white">
          
          {/* Subtle Grid Background inside CTA */}
          <div className="absolute inset-0 bg-grid-minimal opacity-30 pointer-events-none" />

          {/* Small Top Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>LET'S CONNECT</span>
          </div>

          {/* Large Heading */}
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-6 leading-tight">
            Have an idea <span className="text-amber-gradient">worth building?</span>
          </h2>

          {/* Subheading */}
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            I'm always interested in learning, building and collaborating on meaningful AI and web technology projects.
          </p>

          {/* Social / Email Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            
            {/* Email Direct Action */}
            <a
              href={`mailto:${emailAddress}`}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-extrabold text-sm text-black bg-amber-400 hover:bg-amber-300 transition-all duration-200 shadow-lg shadow-amber-400/25 hover:scale-105"
            >
              <Mail className="w-4 h-4 text-black" />
              <span>Email Me</span>
            </a>

            {/* GitHub Button */}
            <a
              href="https://github.com/snehaverma098"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-sm text-slate-200 bg-slate-900 border border-white/10 hover:border-white hover:text-white transition-all duration-200 hover:scale-105"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/snehaverma-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-sm text-slate-200 bg-slate-900 border border-white/10 hover:border-white hover:text-white transition-all duration-200 hover:scale-105"
            >
              <LinkedinIcon className="w-4 h-4 text-amber-400" />
              <span>LinkedIn</span>
            </a>

            {/* Download Resume Button */}
            <a
              href="/sneha_verma_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Sneha_Verma_Resume.pdf"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-sm text-slate-200 bg-slate-900 border border-white/20 hover:border-amber-400 hover:text-white transition-all duration-200 hover:scale-105"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>Resume PDF</span>
            </a>

          </div>

          {/* Copy Email Helper Pill */}
          <div className="inline-flex items-center gap-3 p-2 px-4 rounded-full bg-black border border-white/10 text-xs font-mono text-slate-400">
            <span>{emailAddress}</span>
            <button
              onClick={handleCopyEmail}
              className="p-1 rounded-full hover:bg-slate-900 text-slate-300 hover:text-white transition-colors"
              title="Copy email to clipboard"
            >
              {copied ? (
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <Check className="w-3.5 h-3.5" /> Copied!
                </span>
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

        </div>

        {/* Minimal Footer */}
        <footer className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div>
            © 2026 <span className="text-white font-semibold">Sneha Verma</span>. All rights reserved.
          </div>

          <div className="text-slate-500">
            Built with curiosity + code.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors p-2 rounded-full hover:bg-slate-900 border border-transparent hover:border-white/10"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </footer>

      </div>
    </section>
  );
};

export default Contact;
