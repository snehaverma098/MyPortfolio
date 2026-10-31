import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'projects', 'skills', 'focus', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
    { name: 'Focus', href: '#focus', id: 'focus' },
    { name: 'Journey', href: '#journey', id: 'journey' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#38231F]/10 py-3.5' 
          : 'bg-white/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Wordmark */}
        <a 
          href="#hero" 
          className="flex items-center gap-2.5 group"
          aria-label="Sneha Verma - Return to top"
        >
          <div className="flex items-baseline gap-1">
            <span className="font-playfair text-xl sm:text-2xl font-bold text-[#38231F] tracking-tight group-hover:text-[#F45168] transition-colors">
              Sneha Verma
            </span>
            <span className="w-2 h-2 rounded-full bg-[#F45168]" />
          </div>
          <span className="hidden xl:inline-block font-caveat text-base text-[#7546C8] font-semibold -rotate-2 ml-1">
            developer & builder
          </span>
        </a>

        {/* Desktop Nav Links (Clean, readable Inter with subtle indicators) */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2 font-sans text-sm" role="navigation" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full transition-all duration-200 relative font-medium ${
                  isActive 
                    ? 'text-[#38231F] font-bold bg-[#F8F6F0]' 
                    : 'text-[#38231F]/70 hover:text-[#38231F] hover:bg-[#F8F6F0]/60'
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-[#F45168] rounded-full" />
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
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-sans text-xs font-semibold text-[#38231F] bg-white border border-[#38231F]/20 hover:border-[#38231F] hover:bg-[#F8F6F0] transition-all shadow-xs"
            title="Download verified resume"
          >
            <Download className="w-3.5 h-3.5 text-[#38231F]" />
            <span>Résumé</span>
          </a>

          {/* Contact Action */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full font-sans text-xs font-semibold text-white bg-[#38231F] hover:bg-[#181818] transition-all shadow-sm hover:scale-[1.02]"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="#contact"
            className="px-3.5 py-1.5 rounded-full font-sans text-xs font-semibold text-white bg-[#38231F]"
          >
            Contact
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#38231F] hover:bg-[#F8F6F0] transition-colors"
            aria-label="Toggle navigation drawer"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#38231F]/10 px-6 py-6 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-3 font-sans text-base">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-xl transition-colors font-medium flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-[#F8F6F0] text-[#38231F] font-bold'
                    : 'text-[#38231F]/80 hover:bg-[#F8F6F0]'
                }`}
              >
                <span>{link.name}</span>
                {activeSection === link.id && (
                  <span className="w-2 h-2 rounded-full bg-[#F45168]" />
                )}
              </a>
            ))}

            <div className="pt-4 border-t border-[#38231F]/10 flex flex-col gap-3">
              <a
                href="/sneha_verma_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Sneha_Verma_Resume.pdf"
                className="w-full py-2.5 rounded-full text-center font-sans text-sm font-semibold border border-[#38231F]/20 text-[#38231F] flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
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
