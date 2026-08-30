import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'projects', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'SKILLS', href: '#skills', id: 'skills' },
    { name: 'PROJECTS', href: '#projects', id: 'projects' },
    { name: 'JOURNEY', href: '#journey', id: 'journey' },
    { name: 'CONTACT ME', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Floating Rounded Pill Container */}
        <div className="glass-pill-nav rounded-full px-6 sm:px-8 py-3.5 flex items-center justify-between shadow-2xl">
          
          {/* Logo / Brand Name */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-heading font-extrabold text-lg sm:text-xl tracking-wider text-white group-hover:text-amber-400 transition-colors">
              SNEHA<span className="text-amber-400">.</span>VERMA
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-xs font-semibold tracking-wider">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-colors duration-200 uppercase relative py-1 ${
                    isActive ? 'text-amber-400 font-bold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 rounded-full shadow-glow" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Golden Yellow HIRE ME Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full text-xs font-extrabold text-black bg-amber-400 hover:bg-amber-300 transition-all duration-200 shadow-lg shadow-amber-400/25 hover:shadow-amber-400/40 hover:scale-105 active:scale-95 tracking-wide"
            >
              HIRE ME
            </a>

            {/* Hamburger Button for Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-slate-900 border border-white/10 text-slate-200 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-black/95 border border-white/15 rounded-3xl p-6 backdrop-blur-2xl shadow-2xl space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl font-mono text-sm font-semibold tracking-wider ${
                activeSection === link.id ? 'text-amber-400 bg-amber-400/10' : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
