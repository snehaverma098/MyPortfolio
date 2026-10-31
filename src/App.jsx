import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Focus from './components/Focus';
import Journey from './components/Journey';
import Collaborations from './components/Collaborations';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-white text-[#181818] selection:bg-[#F45168] selection:text-white">
      {/* Main Header / Navigation */}
      <Navbar />

      {/* Editorial Magazine / Creative Journal Flow */}
      <main className="bg-transparent">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Focus />
        <Journey />
        <Collaborations />
        <Contact />
      </main>
    </div>
  );
}

export default App;

