import React, { useState } from 'react';
import { Copy, Check, Sparkles } from 'lucide-react';

const VisualIdentity = () => {
  const [copiedHex, setCopiedHex] = useState(null);

  const primaryColors = [
    {
      name: 'Mocha Brown',
      hex: '#6F4E37',
      role: 'Primary · Accent',
      sub: 'Buttons · Highlights',
      bgClass: 'bg-[#6F4E37]',
      textLight: true,
    },
    {
      name: 'Platinum Silver',
      hex: '#E5E4E2',
      role: 'Text · Icons · Borders',
      sub: 'Surfaces · Lines',
      bgClass: 'bg-[#E5E4E2]',
      textLight: false,
    },
    {
      name: 'Pale Lavender',
      hex: '#E6E0F0',
      role: 'Secondary · Highlights',
      sub: 'Interactive Elements',
      bgClass: 'bg-[#E6E0F0]',
      textLight: false,
    },
  ];

  const supportingShades = [
    { name: 'Espresso', hex: '#211A18' },
    { name: 'Dark Mocha', hex: '#30231F' },
    { name: 'Charcoal', hex: '#4A3A2F' },
    { name: 'Warm Taupe', hex: '#8B6B5A' },
    { name: 'Cream Beige', hex: '#D8D3D0' },
    { name: 'Lavender Mist', hex: '#F3ECF8' },
    { name: 'Soft Lavender', hex: '#C9B8E8' },
    { name: 'Muted Purple', hex: '#A78BCB' },
  ];

  const gradients = [
    {
      label: 'Mocha → Lavender',
      sub: '#6F4E37 → #E6E0F0',
      gradient: 'linear-gradient(90deg, #6F4E37 0%, #E6E0F0 100%)',
    },
    {
      label: 'Brown → Silver',
      sub: '#4A3A2F → #E5E4E2',
      gradient: 'linear-gradient(90deg, #4A3A2F 0%, #E5E4E2 100%)',
    },
    {
      label: 'Lavender → Silver',
      sub: '#E6E0F0 → #E5E4E2',
      gradient: 'linear-gradient(90deg, #E6E0F0 0%, #E5E4E2 100%)',
    },
    {
      label: 'Soft Ambient',
      sub: '#2E241F → #4A3A2F',
      gradient: 'linear-gradient(90deg, #2E241F 0%, #4A3A2F 100%)',
    },
  ];

  const handleCopy = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <section className="py-20 relative bg-[#211A18] border-t border-[#E5E4E2]/15 overflow-hidden text-left">
      {/* Soft Ambient Radiance */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#6F4E37]/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#C9B8E8]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Aligned to Specification Sheet */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 pb-6 border-b border-[#E5E4E2]/15">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#30231F] border border-[#E5E4E2]/20 font-mono text-[11px] text-[#E6E0F0] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9B8E8]" />
              <span>THE COLOR PALETTE</span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-5xl text-[#E5E4E2] font-normal tracking-tight">
              A refined blend of warmth, elegance and creativity.
            </h2>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-[#E5E4E2]/70">
            <span className="px-3 py-1 rounded-full bg-[#30231F] border border-[#E5E4E2]/15">
              Calm · Premium · Creative · Focused
            </span>
          </div>
        </div>

        {/* Top Split: 3 Core Swatches + Gradients Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Core 3 Swatches (7 cols) */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-[#30231F]/90 border border-[#E5E4E2]/20 backdrop-blur-xl shadow-xl flex flex-col justify-between">
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#E5E4E2]/15">
              <span className="font-mono text-xs uppercase tracking-wider text-[#E5E4E2]/80 font-semibold">
                PRIMARY IDENTITY TOKENS
              </span>
              <span className="font-mono text-[11px] text-[#C9B8E8]">
                Click any hex to copy
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {primaryColors.map((color) => (
                <button
                  type="button"
                  key={color.name}
                  onClick={() => handleCopy(color.hex)}
                  className="group text-left p-4 rounded-2xl bg-[#211A18]/80 border border-[#E5E4E2]/15 hover:border-[#C9B8E8] transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 rounded-full ${color.bgClass} shadow-md border-2 border-white/20`} />
                    <span className="font-mono text-xs text-[#E5E4E2]/70 group-hover:text-white flex items-center gap-1">
                      {copiedHex === color.hex ? <Check className="w-3.5 h-3.5 text-[#C9B8E8]" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{color.hex}</span>
                    </span>
                  </div>
                  <strong className="block font-playfair text-lg text-white font-normal mb-1">
                    {color.name}
                  </strong>
                  <span className="block font-mono text-[11px] text-[#E5E4E2]/80">
                    {color.role}
                  </span>
                  <span className="block font-mono text-[10px] text-[#8B6B5A]">
                    {color.sub}
                  </span>
                </button>
              ))}
            </div>

            {/* Supporting Shades Mini Swatches */}
            <div className="mt-8 pt-6 border-t border-[#E5E4E2]/15">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#E5E4E2]/70 block mb-3 font-semibold">
                Supporting Shades
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {supportingShades.map((shade) => (
                  <button
                    key={shade.name}
                    onClick={() => handleCopy(shade.hex)}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#211A18] border border-[#E5E4E2]/15 hover:border-[#C9B8E8] transition-all group"
                    title={`Copy ${shade.name} (${shade.hex})`}
                  >
                    <span 
                      className="w-3.5 h-3.5 rounded-full shadow-inner border border-white/20" 
                      style={{ backgroundColor: shade.hex }}
                    />
                    <span className="font-mono text-[11px] text-[#E5E4E2]/80 group-hover:text-white">
                      {shade.name}
                    </span>
                    <span className="font-mono text-[10px] text-[#8B6B5A]">
                      {shade.hex}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Gradients Showcase (4 cols) */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-[#30231F]/90 border border-[#E5E4E2]/20 backdrop-blur-xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#E5E4E2]/15">
                <span className="font-mono text-xs uppercase tracking-wider text-[#E5E4E2]/80 font-semibold">
                  GRADIENTS
                </span>
                <Sparkles className="w-3.5 h-3.5 text-[#C9B8E8]" />
              </div>

              <div className="space-y-4">
                {gradients.map((grad) => (
                  <div key={grad.label} className="space-y-1.5">
                    <div className="flex items-center justify-between font-mono text-[11px]">
                      <span className="text-white font-medium">{grad.label}</span>
                      <span className="text-[#8B6B5A] text-[10px]">{grad.sub}</span>
                    </div>
                    <div 
                      className="w-full h-7 rounded-xl border border-white/15 shadow-sm"
                      style={{ background: grad.gradient }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Typography Callout */}
            <div className="mt-6 pt-5 border-t border-[#E5E4E2]/15 flex items-center justify-between text-xs font-mono text-[#E5E4E2]/80">
              <div>
                <span className="block text-[#C9B8E8] font-bold">Playfair Display</span>
                <span className="text-[10px] text-[#8B6B5A]">Headings (Serif)</span>
              </div>
              <div className="text-right">
                <span className="block text-white font-bold">Inter</span>
                <span className="text-[10px] text-[#8B6B5A]">Body Text (Sans)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Accent Elements & Philosophy Banner (from image) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Quote Block from image */}
          <div className="p-6 rounded-3xl bg-[#30231F]/80 border border-[#E5E4E2]/20 flex flex-col justify-between">
            <span className="font-serif text-5xl text-[#C9B8E8] leading-none mb-2">“</span>
            <p className="font-playfair text-xl sm:text-2xl text-[#E5E4E2] leading-snug">
              Small steps build big dreams.
            </p>
            <div className="mt-4 pt-3 border-t border-[#E5E4E2]/15 flex items-center justify-between font-mono text-[10px] text-[#8B6B5A]">
              <span>PHILOSOPHY // 01</span>
              <span className="text-[#C9B8E8]">✦</span>
            </div>
          </div>

          {/* Interactive Tag Pills from image */}
          <div className="p-6 rounded-3xl bg-[#30231F]/80 border border-[#E5E4E2]/20 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-[#E5E4E2]/70 uppercase tracking-wider block mb-3 font-semibold">
                ACCENT ELEMENTS
              </span>
              <div className="flex flex-wrap gap-2.5 mb-4">
                {['Learning', 'Building', 'Exploring'].map((tag) => (
                  <span 
                    key={tag}
                    className="px-4 py-1.5 rounded-full bg-[#E5E4E2]/15 border border-[#E5E4E2]/30 text-white font-mono text-xs hover:border-[#C9B8E8] transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="font-mono text-xs text-[#E5E4E2]/75">
              Small details, big impact.
            </p>
          </div>

          {/* Mood & Vibe Callout from image */}
          <div className="p-6 rounded-3xl bg-[#30231F]/80 border border-[#E5E4E2]/20 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-[#E5E4E2]/70 uppercase tracking-wider block mb-3 font-semibold">
                MOOD & VIBE
              </span>
              <h3 className="font-playfair italic text-2xl text-[#C9B8E8] mb-1">
                Where technology meets creativity.
              </h3>
            </div>
            <div className="pt-3 border-t border-[#E5E4E2]/15 flex items-center justify-between font-mono text-[11px] text-[#E5E4E2]/70">
              <span>Sneha Verma</span>
              <span className="text-white">CSE AI / ML</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VisualIdentity;
