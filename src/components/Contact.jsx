import React, { useState } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  ArrowUp, 
  Download, 
  Send, 
  ExternalLink,
  Sparkles 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('Software Engineering Internship');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderMessage, setSenderMessage] = useState('');
  const [formFeedback, setFormFeedback] = useState(null);

  const emailAddress = "snehpreet9846@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleComposerSubmit = (e) => {
    e.preventDefault();
    if (!senderEmail || !senderMessage) {
      setFormFeedback({ type: 'error', text: 'Please provide both your email address and a brief message.' });
      return;
    }

    const subject = encodeURIComponent(`[Portfolio Inquiry - ${selectedSubject}] from ${senderName || 'Collaborator'}`);
    const body = encodeURIComponent(
      `Hi Sneha,\n\nName: ${senderName || 'N/A'}\nEmail: ${senderEmail}\nInterest: ${selectedSubject}\n\nMessage:\n${senderMessage}\n\nSent from your portfolio contact studio.`
    );
    
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    setFormFeedback({ 
      type: 'success', 
      text: 'Opening your default mail client with the prepared message draft!' 
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const inquiryTopics = [
    'Software Engineering Internship',
    'AI / ML Opportunity',
    'Open Source Collaboration',
    'Freelance Technical Build',
    'Creative Digital Project',
  ];

  return (
    <section 
      id="contact" 
      className="py-24 sm:py-32 relative bg-[#38231F] text-white overflow-hidden text-left"
    >
      {/* Subtle Warm Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#F45168]/[0.08] rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#7546C8]/[0.10] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-caveat text-2xl sm:text-3xl text-[#F45168] font-bold -rotate-1">
              let's talk
            </span>
            <svg className="w-6 h-6 text-[#F45168]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono mb-4 text-[#FFFDF8]">
            <span className="w-2 h-2 rounded-full bg-[#F45168]" />
            <span className="font-bold">06 // INITIATE CONVERSATION</span>
          </div>

          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] mb-4 max-w-4xl">
            Have something <span className="italic font-normal text-[#F45168]">meaningful to build?</span>
          </h2>
          
          <p className="text-white/75 text-base sm:text-lg max-w-2xl font-sans leading-relaxed">
            Whether you are recruiting for software engineering or AI/ML internships, looking for an open-source collaborator, or discussing a technical project — my inbox is always open.
          </p>
        </div>

        {/* 2-Column Contact Studio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column (5 cols): Verified Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Action Card: Direct Email */}
            <div className="p-7 sm:p-8 rounded-3xl bg-white/10 border border-white/20 space-y-5 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/15">
                <span className="font-mono text-xs text-[#F45168] font-bold uppercase tracking-wider">
                  DIRECT EMAIL INBOX
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#F45168] animate-pulse" />
              </div>

              <div>
                <span className="text-white/60 text-xs font-mono block mb-1">Sneha Verma</span>
                <a 
                  href={`mailto:${emailAddress}`}
                  className="font-playfair font-bold text-2xl sm:text-3xl text-white hover:text-[#F45168] transition-colors break-all"
                >
                  {emailAddress}
                </a>
              </div>

              {/* Action Buttons Row */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={`mailto:${emailAddress}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#F45168] hover:bg-[#e03a52] text-white font-sans text-xs font-semibold shadow-md transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Direct Email</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="p-3 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-white transition-colors"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-[#F45168]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copied && (
                <div className="p-2.5 rounded-xl bg-white/15 border border-[#F45168]/40 text-[#FFFDF8] font-mono text-[11px] text-center font-semibold">
                  ✓ Copied {emailAddress} to clipboard
                </div>
              )}
            </div>

            {/* Verified Profiles List */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white/5 border border-white/15 space-y-4">
              <span className="font-mono text-xs text-white/80 uppercase tracking-wider block pb-2 border-b border-white/10 font-bold">
                VERIFIED PROFILES & ARCHIVES
              </span>

              <div className="space-y-3 font-sans">
                <a
                  href="https://www.linkedin.com/in/snehaverma-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-4 h-4 text-[#F45168]" />
                    <div>
                      <strong className="text-white block text-xs font-semibold">LinkedIn Profile</strong>
                      <span className="text-white/60 text-[11px] font-mono">snehaverma-ai</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                </a>

                <a
                  href="https://github.com/snehaverma098"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-4 h-4 text-white" />
                    <div>
                      <strong className="text-white block text-xs font-semibold">GitHub Repositories</strong>
                      <span className="text-white/60 text-[11px] font-mono">snehaverma098</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                </a>

                <a
                  href="/sneha_verma_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Sneha_Verma_Resume.pdf"
                  className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Download className="w-4 h-4 text-[#F45168]" />
                    <div>
                      <strong className="text-white block text-xs font-semibold">Verified Résumé (PDF)</strong>
                      <span className="text-white/60 text-[11px] font-mono">Updated October 2026</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Location & Timezone Note */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono text-white/80">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#176B50]" />
                <span>Base: Punjab, India (IST / UTC+5:30)</span>
              </span>
              <span className="text-[#F45168] font-bold">Fast Response</span>
            </div>

          </div>

          {/* Right Column (7 cols): Interactive Message Composer Draft Studio */}
          <div className="lg:col-span-7">
            <form 
              onSubmit={handleComposerSubmit}
              className="p-7 sm:p-10 rounded-3xl bg-white/10 border border-white/20 space-y-6 text-left shadow-xl"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/15">
                <div>
                  <h3 className="font-playfair font-bold text-2xl sm:text-3xl text-white">
                    Direct Inquiry Composer
                  </h3>
                  <span className="text-white/60 text-xs font-mono">
                    Select a topic and prepare a direct drafted email
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full font-mono text-xs text-[#F45168] bg-[#F45168]/20 font-bold">
                  INTERACTIVE
                </span>
              </div>

              {/* Topic Selector */}
              <div className="space-y-2">
                <label className="font-mono text-xs text-white/80 uppercase tracking-wider block font-bold">
                  1. What is this regarding?
                </label>
                <div className="flex flex-wrap gap-2">
                  {inquiryTopics.map((topic) => (
                    <button
                      type="button"
                      key={topic}
                      onClick={() => setSelectedSubject(topic)}
                      className={`px-3.5 py-1.5 rounded-full font-mono text-xs transition-all ${
                        selectedSubject === topic
                          ? 'bg-[#F45168] text-white font-bold shadow-xs'
                          : 'bg-white/10 text-white/80 hover:bg-white/20 border border-white/15'
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="sender-name" className="font-mono text-xs text-white/80 uppercase tracking-wider block font-bold">
                    Your Name / Organization
                  </label>
                  <input
                    id="sender-name"
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g., Alex Morgan / Tech Team"
                    className="w-full p-3.5 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#F45168] font-sans px-4"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="sender-email" className="font-mono text-xs text-white/80 uppercase tracking-wider block font-bold">
                    Your Email Address *
                  </label>
                  <input
                    id="sender-email"
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full p-3.5 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#F45168] font-sans px-4"
                  />
                </div>
              </div>

              {/* Message Area */}
              <div className="space-y-1.5">
                <label htmlFor="sender-message" className="font-mono text-xs text-white/80 uppercase tracking-wider block font-bold">
                  Project Details / Inquiry Brief *
                </label>
                <textarea
                  id="sender-message"
                  required
                  rows={4}
                  value={senderMessage}
                  onChange={(e) => setSenderMessage(e.target.value)}
                  placeholder={`Hi Sneha, I'd like to talk about ${selectedSubject.toLowerCase()}...`}
                  className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#F45168] font-sans resize-none"
                />
              </div>

              {/* Feedback Note */}
              {formFeedback && (
                <div className={`p-3 rounded-xl font-mono text-xs ${
                  formFeedback.type === 'success' 
                    ? 'bg-emerald-500/20 text-emerald-200 border border-emerald-500/40' 
                    : 'bg-rose-500/20 text-rose-200 border border-rose-500/40'
                }`}>
                  {formFeedback.text}
                </div>
              )}

              {/* Submit & Disclaimer */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#F45168] hover:bg-[#e03a52] text-white font-sans text-sm font-semibold shadow-lg transition-all hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>Format & Open Mail Draft</span>
                </button>

                <span className="font-mono text-[10px] text-white/60 leading-tight">
                  Routes directly to <strong className="text-white">{emailAddress}</strong>
                </span>
              </div>
            </form>
          </div>

        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            GLOBAL REFINED FOOTER BAR
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <footer className="mt-28 pt-10 border-t border-white/15 space-y-6">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-white/75 pb-6 border-b border-white/10">
            <div className="flex items-center gap-2 text-white font-bold">
              <span>Sneha Verma</span>
              <span className="text-[#F45168]">✦</span>
              <span>Personal Portfolio</span>
            </div>

            <div className="font-playfair italic text-sm text-[#F45168] tracking-wide">
              Build · Create · Innovate
            </div>

            <div className="text-[11px] text-white/50">
              Aesthetic × Functional × Impactful
            </div>
          </div>

          {/* Bottom Utility Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70 font-mono">
            <span>
              B.Tech CSE (AI & ML) • Lovely Professional University
            </span>

            <div className="flex items-center gap-6">
              <a 
                href="https://github.com/snehaverma098" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#F45168] transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/snehaverma-ai/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#F45168] transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="/sneha_verma_resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#F45168] transition-colors"
              >
                Résumé PDF
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span>© {new Date().getFullYear()}</span>
              <button
                onClick={scrollToTop}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-colors"
                aria-label="Back to top"
                title="Return to top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </footer>

      </div>
    </section>
  );
};

export default Contact;
