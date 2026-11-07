import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Show floating navbar only when user has scrolled down past the hero banner
      const heroEl = document.getElementById('hero');
      const threshold = heroEl ? Math.min(heroEl.offsetHeight * 0.7, 400) : 250;
      setScrolled(window.scrollY > threshold);

      const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'focus', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sectionId === 'journey' ? 'experience' : sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Focus', href: '#focus', id: 'focus' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
        scrolled 
          ? 'opacity-100 translate-y-0 pointer-events-auto bg-[#5C1F2E]/95 backdrop-blur-xl shadow-xl shadow-black/40 border-b border-[#E8C9A0]/20 py-3.5' 
          : 'opacity-0 -translate-y-full pointer-events-none py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Monogram Wordmark */}
        <a 
          href="#hero" 
          className="flex items-center gap-2.5 group"
          aria-label="Sneha Verma - Return to top"
        >
          <div className="w-8 h-8 rounded-full bg-[#2D0C15] border border-[#E8C9A0]/30 flex items-center justify-center font-playfair font-bold text-sm">
            <span className="text-[#E8C9A0]">S</span>
            <span className="text-[#B5476A] italic">V</span>
          </div>
          <span className="font-playfair text-lg font-bold text-[#F7E6E1] tracking-tight group-hover:text-[#E8C9A0] transition-colors">
            Sneha <span className="text-[#B5476A] italic">Verma</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1.5 font-sans text-sm" role="navigation" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full transition-all duration-200 relative text-xs font-medium tracking-wide ${
                  isActive 
                    ? 'text-[#E8C9A0] font-bold bg-[#B5476A]/25 border border-[#E8C9A0]/30' 
                    : 'text-[#F7E6E1]/80 hover:text-[#E8C9A0] hover:bg-[#B5476A]/15'
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-0.5 bg-[#B5476A] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Resume Action */}
          <a
            href="/sneha_verma_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Sneha_Verma_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-sans text-xs font-semibold text-[#F7E6E1] bg-[#2D0C15]/80 border border-[#E8C9A0]/30 hover:border-[#E8C9A0] hover:bg-[#B5476A]/25 transition-all shadow-xs"
            title="Download verified resume"
          >
            <Download className="w-3.5 h-3.5 text-[#E8C9A0]" />
            <span>Résumé</span>
          </a>

          {/* Contact Action */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full font-sans text-xs font-semibold text-white bg-[#B5476A] hover:bg-[#9E3658] border border-[#E8C9A0]/40 transition-all shadow-md hover:scale-105"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#E8C9A0]" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="#contact"
            className="px-3 py-1.5 rounded-full font-sans text-xs font-semibold text-white bg-[#B5476A]"
          >
            Contact
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#F7E6E1] hover:bg-[#2D0C15] transition-colors"
            aria-label="Toggle navigation drawer"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#2D0C15] border-b border-[#E8C9A0]/20 px-6 py-6 shadow-2xl animate-fadeIn text-[#F7E6E1]">
          <nav className="flex flex-col space-y-3 font-sans text-base">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-xl transition-colors font-medium flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-[#B5476A]/25 text-[#E8C9A0] font-bold border border-[#E8C9A0]/30'
                    : 'text-[#F7E6E1]/80 hover:bg-[#B5476A]/10'
                }`}
              >
                <span>{link.name}</span>
                {activeSection === link.id && (
                  <span className="w-2 h-2 rounded-full bg-[#B5476A]" />
                )}
              </a>
            ))}

            <div className="pt-4 border-t border-[#E8C9A0]/20 flex flex-col gap-3">
              <a
                href="/sneha_verma_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Sneha_Verma_Resume.pdf"
                className="w-full py-2.5 rounded-full text-center font-sans text-sm font-semibold border border-[#E8C9A0]/40 text-[#F7E6E1] bg-[#5C1F2E] flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-[#E8C9A0]" />
                <span>Download Résumé</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
