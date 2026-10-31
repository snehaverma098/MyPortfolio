import React from 'react';

const Hero = () => {
  const smoothScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <section 
      id="hero" 
      className="relative w-full bg-[#948276] flex items-center justify-center overflow-hidden select-none"
    >
      {/* Hidden SEO & Accessibility semantic tree */}
      <div className="sr-only">
        <h1>Sneha Verma — AI & Full Stack Developer</h1>
        <p>I craft intelligent and elegant web experiences, blending code with creativity.</p>
        <div>
          <span>3+ Projects Built</span>
          <span>8+ CGPA (Expected)</span>
          <span>Hackathons Participated</span>
        </div>
      </div>

      {/* Hero 16:9 Aspect Ratio Frame (1024 x 576 Native Resolution) */}
      <div className="relative w-full max-w-[1920px] aspect-[1024/576] mx-auto overflow-hidden shadow-2xl">
        
        {/* Exact Visual Artwork with Zero Modification */}
        <img 
          src="/images/hero_exact.png" 
          alt="Sneha Verma - AI & Full Stack Developer editorial portfolio hero section" 
          className="w-full h-full object-cover block pointer-events-none"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
        />

        {/* ---------------- INTERACTIVE HOTSPOT OVERLAYS ---------------- */}

        {/* 1. SV Brand Monogram Logo (Top-Left) -> Scrolls to Hero */}
        <a
          href="#hero"
          onClick={(e) => smoothScrollTo(e, 'hero')}
          className="absolute z-20 cursor-pointer rounded-md transition-all hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[#38231F]/30"
          style={{
            left: '3.40%',
            top: '3.40%',
            width: '4.20%',
            height: '5.60%',
          }}
          title="Sneha Verma (SV) - Top of page"
          aria-label="Sneha Verma - Return to top"
        >
          <span className="sr-only">Sneha Verma</span>
        </a>

        {/* 2. Top Nav: Home */}
        <a
          href="#hero"
          onClick={(e) => smoothScrollTo(e, 'hero')}
          className="absolute z-20 cursor-pointer rounded-md transition-all hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-[#38231F]/30"
          style={{
            left: '32.00%',
            top: '3.40%',
            width: '4.60%',
            height: '5.40%',
          }}
          title="Home"
          aria-label="Home section"
        >
          <span className="sr-only">Home</span>
        </a>

        {/* 3. Top Nav: About */}
        <a
          href="#about"
          onClick={(e) => smoothScrollTo(e, 'about')}
          className="absolute z-20 cursor-pointer rounded-md transition-all hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-[#38231F]/30"
          style={{
            left: '38.00%',
            top: '3.40%',
            width: '4.60%',
            height: '5.40%',
          }}
          title="About"
          aria-label="About section"
        >
          <span className="sr-only">About</span>
        </a>

        {/* 4. Top Nav: Projects */}
        <a
          href="#projects"
          onClick={(e) => smoothScrollTo(e, 'projects')}
          className="absolute z-20 cursor-pointer rounded-md transition-all hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-[#38231F]/30"
          style={{
            left: '43.80%',
            top: '3.40%',
            width: '5.20%',
            height: '5.40%',
          }}
          title="Projects"
          aria-label="Projects section"
        >
          <span className="sr-only">Projects</span>
        </a>

        {/* 5. Top Nav: Skills */}
        <a
          href="#skills"
          onClick={(e) => smoothScrollTo(e, 'skills')}
          className="absolute z-20 cursor-pointer rounded-md transition-all hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-[#38231F]/30"
          style={{
            left: '50.40%',
            top: '3.40%',
            width: '4.20%',
            height: '5.40%',
          }}
          title="Skills"
          aria-label="Skills section"
        >
          <span className="sr-only">Skills</span>
        </a>

        {/* 6. Top Nav: Experience */}
        <a
          href="#experience"
          onClick={(e) => smoothScrollTo(e, 'experience')}
          className="absolute z-20 cursor-pointer rounded-md transition-all hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-[#38231F]/30"
          style={{
            left: '55.80%',
            top: '3.40%',
            width: '6.60%',
            height: '5.40%',
          }}
          title="Experience & Milestones"
          aria-label="Experience section"
        >
          <span className="sr-only">Experience</span>
        </a>

        {/* 7. Top Nav: Contact */}
        <a
          href="#contact"
          onClick={(e) => smoothScrollTo(e, 'contact')}
          className="absolute z-20 cursor-pointer rounded-md transition-all hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-[#38231F]/30"
          style={{
            left: '63.80%',
            top: '3.40%',
            width: '5.20%',
            height: '5.40%',
          }}
          title="Contact"
          aria-label="Contact section"
        >
          <span className="sr-only">Contact</span>
        </a>

        {/* 8. Top Nav Action: "Let's Talk ✦" Pill Button */}
        <a
          href="#contact"
          onClick={(e) => smoothScrollTo(e, 'contact')}
          className="absolute z-20 cursor-pointer rounded-full transition-all hover:ring-2 hover:ring-white/40 hover:bg-white/10 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white/60"
          style={{
            left: '86.40%',
            top: '3.00%',
            width: '11.80%',
            height: '6.20%',
          }}
          title="Let's Talk - Get in Touch"
          aria-label="Let's Talk - Contact Sneha Verma"
        >
          <span className="sr-only">Let's Talk</span>
        </a>

        {/* 9. Hero Primary CTA: "View My Work →" Dark Maroon Pill Button */}
        <a
          href="#projects"
          onClick={(e) => smoothScrollTo(e, 'projects')}
          className="absolute z-20 cursor-pointer rounded-full transition-all hover:ring-2 hover:ring-[#8E2838]/60 hover:bg-[#8E2838]/20 hover:shadow-lg hover:shadow-black/30 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#8E2838]"
          style={{
            left: '5.40%',
            top: '64.80%',
            width: '12.80%',
            height: '6.80%',
          }}
          title="View My Work - Featured Engineering Projects"
          aria-label="View My Work"
        >
          <span className="sr-only">View My Work</span>
        </a>

        {/* 10. Hero Secondary CTA: "Download Resume ↓" Underlined Action */}
        <a
          href="/sneha_verma_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="Sneha_Verma_Resume.pdf"
          className="absolute z-20 cursor-pointer rounded-sm transition-all hover:bg-black/5 hover:ring-1 hover:ring-[#38231F]/30 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#38231F]/40"
          style={{
            left: '20.40%',
            top: '65.40%',
            width: '11.40%',
            height: '5.80%',
          }}
          title="Download Sneha Verma's Resume (PDF)"
          aria-label="Download Resume"
        >
          <span className="sr-only">Download Resume</span>
        </a>

        {/* 11. Stat Item: "3+ Projects Built" */}
        <a
          href="#projects"
          onClick={(e) => smoothScrollTo(e, 'projects')}
          className="absolute z-20 cursor-pointer rounded-md transition-all hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-[#38231F]/30"
          style={{
            left: '5.40%',
            top: '78.80%',
            width: '8.50%',
            height: '7.60%',
          }}
          title="3+ Featured Projects Built - Click to explore"
          aria-label="3+ Projects Built"
        >
          <span className="sr-only">3+ Projects Built</span>
        </a>

        {/* 12. Stat Item: "8+ CGPA (Expected)" */}
        <a
          href="#about"
          onClick={(e) => smoothScrollTo(e, 'about')}
          className="absolute z-20 cursor-pointer rounded-md transition-all hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-[#38231F]/30"
          style={{
            left: '17.80%',
            top: '78.80%',
            width: '8.50%',
            height: '7.60%',
          }}
          title="8+ CGPA (Expected) in B.Tech CSE AI & ML - Click for education background"
          aria-label="8+ CGPA Expected"
        >
          <span className="sr-only">8+ CGPA (Expected)</span>
        </a>

        {/* 13. Stat Item: "Hackathons Participated" */}
        <a
          href="#experience"
          onClick={(e) => smoothScrollTo(e, 'experience')}
          className="absolute z-20 cursor-pointer rounded-md transition-all hover:bg-black/5 focus:outline-none focus:ring-1 focus:ring-[#38231F]/30"
          style={{
            left: '31.00%',
            top: '78.80%',
            width: '11.00%',
            height: '7.60%',
          }}
          title="Hackathons Participated & Open Source - Click for experience chronology"
          aria-label="Hackathons Participated"
        >
          <span className="sr-only">Hackathons Participated</span>
        </a>

        {/* 14. Bottom "Scroll to explore" Button */}
        <a
          href="#about"
          onClick={(e) => smoothScrollTo(e, 'about')}
          className="absolute z-20 cursor-pointer rounded-sm transition-all hover:opacity-75 focus:outline-none focus:ring-1 focus:ring-[#38231F]/30"
          style={{
            left: '5.60%',
            top: '92.60%',
            width: '8.80%',
            height: '4.80%',
          }}
          title="Scroll down to explore About section"
          aria-label="Scroll to explore"
        >
          <span className="sr-only">Scroll to explore</span>
        </a>

      </div>
    </section>
  );
};

export default Hero;
