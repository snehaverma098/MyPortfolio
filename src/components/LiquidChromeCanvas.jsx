import React, { useEffect, useRef, useState } from 'react';

const LiquidChromeCanvas = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [metrics, setMetrics] = useState({ fps: 60, angle: '0°' });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let isVisible = true;
    let width = 0;
    let height = 0;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersReducedMotion = mediaQuery.matches;

    let time = 0;
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const resize = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();

    // Floating neural particles along the chrome fluid path
    const particleCount = 28;
    const particles = Array.from({ length: particleCount }, (_, i) => ({
      u: (i / particleCount) * Math.PI * 2,
      speed: 0.003 + (i % 3) * 0.0015,
      size: 2.5 + (i % 4) * 1.2,
      pulse: Math.random() * Math.PI * 2,
    }));

    let frameCount = 0;
    let lastFpsUpdate = performance.now();

    const render = (now) => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      frameCount++;
      if (now - lastFpsUpdate > 1000) {
        setMetrics({
          fps: Math.round((frameCount * 1000) / (now - lastFpsUpdate)),
          angle: `${Math.round((time * 25) % 360)}°`,
        });
        frameCount = 0;
        lastFpsUpdate = now;
      }

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation for 3D tilt effect
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      if (!prefersReducedMotion) {
        time += 0.012;
      }

      const centerX = width / 2;
      const centerY = height / 2;
      const baseRadius = Math.min(width, height) * 0.34;
      const tubeRadius = baseRadius * 0.32;

      // Draw background ambient light aura
      const auraGradient = ctx.createRadialGradient(
        centerX + mouse.x * 30,
        centerY + mouse.y * 30,
        baseRadius * 0.2,
        centerX,
        centerY,
        baseRadius * 1.5
      );
      auraGradient.addColorStop(0, 'rgba(212, 179, 255, 0.28)');
      auraGradient.addColorStop(0.5, 'rgba(111, 78, 55, 0.25)');
      auraGradient.addColorStop(1, 'transparent');
      ctx.fillStyle = auraGradient;
      ctx.fillRect(0, 0, width, height);

      // Parametric Liquid Chrome Torus / Fluid Ribbon
      // Overlapping fluid metallic ribbons with Platinum & Lavender specular shading
      const ribbonCount = 7;
      const stepCount = 120;

      for (let r = 0; r < ribbonCount; r++) {
        const ribbonOffset = (r / ribbonCount) * Math.PI * 2;
        const currentTubeRadius = tubeRadius * (0.65 + Math.sin(time * 0.8 + r) * 0.25);

        ctx.beginPath();
        let firstPoint = null;

        for (let i = 0; i <= stepCount; i++) {
          const u = (i / stepCount) * Math.PI * 2;
          
          // Organic fluid wave modulation
          const wave1 = Math.sin(u * 3 + time * 1.5 + ribbonOffset) * (tubeRadius * 0.35);
          const wave2 = Math.cos(u * 2 - time * 1.2) * (tubeRadius * 0.25);
          const rMod = baseRadius + wave1 + wave2;

          // 3D Perspective projection influenced by mouse
          const tiltX = (mouse.x / width - 0.5) * 1.2;
          const tiltY = (mouse.y / height - 0.5) * 1.2;

          const x3D = Math.cos(u) * rMod;
          const y3D = Math.sin(u) * rMod * 0.55 + Math.sin(u * 2 + time) * (tubeRadius * 0.3);
          const z3D = Math.sin(u) * rMod * 0.8;

          // Project to 2D
          const screenX = centerX + x3D + tiltX * z3D * 0.4;
          const screenY = centerY + y3D + tiltY * z3D * 0.4;

          if (i === 0) {
            ctx.moveTo(screenX, screenY);
            firstPoint = { x: screenX, y: screenY };
          } else {
            ctx.lineTo(screenX, screenY);
          }
        }

        ctx.closePath();

        // Liquid Platinum & Vivid Lavender Specular Gradient
        const chromeGrad = ctx.createLinearGradient(
          centerX - baseRadius + mouse.x * 40,
          centerY - baseRadius + mouse.y * 40,
          centerX + baseRadius,
          centerY + baseRadius
        );

        if (r % 2 === 0) {
          // Metallic Liquid Platinum dominant with Vivid Lavender specular highlight
          chromeGrad.addColorStop(0, 'rgba(85, 55, 38, 0.45)'); // Deep Mocha shadow
          chromeGrad.addColorStop(0.2, 'rgba(215, 212, 222, 0.9)'); // Liquid Platinum Silver
          chromeGrad.addColorStop(0.45, 'rgba(255, 255, 255, 1.0)'); // Specular White Flare
          chromeGrad.addColorStop(0.65, 'rgba(212, 179, 255, 0.95)'); // Rich Lavender Glint
          chromeGrad.addColorStop(0.85, 'rgba(229, 228, 226, 0.85)'); // Platinum Chrome
          chromeGrad.addColorStop(1, 'rgba(95, 65, 46, 0.5)'); // Mocha Ambient
          ctx.strokeStyle = chromeGrad;
          ctx.lineWidth = 3.8 + Math.sin(r + time) * 1.5;
        } else {
          // Vivid Lavender liquid chrome trail
          chromeGrad.addColorStop(0, 'rgba(212, 179, 255, 0.45)');
          chromeGrad.addColorStop(0.5, 'rgba(240, 230, 255, 0.85)');
          chromeGrad.addColorStop(1, 'rgba(111, 78, 55, 0.35)');
          ctx.strokeStyle = chromeGrad;
          ctx.lineWidth = 2.2;
        }

        ctx.stroke();
      }

      // Draw floating interconnected computational neural nodes
      particles.forEach((p, idx) => {
        p.u += p.speed;
        p.pulse += 0.03;

        const u = p.u;
        const wave = Math.sin(u * 3 + time * 1.5) * (tubeRadius * 0.3);
        const rMod = baseRadius + wave;

        const tiltX = (mouse.x / width - 0.5) * 1.2;
        const tiltY = (mouse.y / height - 0.5) * 1.2;

        const x3D = Math.cos(u) * rMod;
        const y3D = Math.sin(u) * rMod * 0.55 + Math.sin(u * 2 + time) * (tubeRadius * 0.3);
        const z3D = Math.sin(u) * rMod * 0.8;

        const px = centerX + x3D + tiltX * z3D * 0.4;
        const py = centerY + y3D + tiltY * z3D * 0.4;

        // Outer Vivid Lavender Glow
        const halo = p.size * (2.0 + Math.sin(p.pulse) * 0.7);
        ctx.beginPath();
        ctx.arc(px, py, halo, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(212, 179, 255, 0.35)';
        ctx.fill();

        // Liquid Platinum Silver Core
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = idx % 2 === 0 ? '#D4B3FF' : '#FFFFFF';
        ctx.shadowColor = '#D4B3FF';
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Thin connector to neighbor particle
        if (idx > 0 && idx % 3 === 0) {
          const prev = particles[idx - 1];
          const prevWave = Math.sin(prev.u * 3 + time * 1.5) * (tubeRadius * 0.3);
          const prevR = baseRadius + prevWave;
          const prevX = centerX + Math.cos(prev.u) * prevR + tiltX * (Math.sin(prev.u) * prevR * 0.8) * 0.4;
          const prevY = centerY + Math.sin(prev.u) * prevR * 0.55 + Math.sin(prev.u * 2 + time) * (tubeRadius * 0.3) + tiltY * (Math.sin(prev.u) * prevR * 0.8) * 0.4;

          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(prevX, prevY);
          ctx.strokeStyle = 'rgba(212, 179, 255, 0.35)';
          ctx.lineWidth = 1.0;
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.targetX = width / 2;
      mouse.targetY = height / 2;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    const resizeObserver = new ResizeObserver(() => {
      resize();
    });
    if (container) resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );
    if (container) intersectionObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
        resizeObserver.disconnect();
        intersectionObserver.disconnect();
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] rounded-3xl glass-lavender overflow-hidden flex items-center justify-center group shadow-2xl shadow-[#9D72DE]/25"
      aria-label="Liquid Platinum & Pale Lavender Interactive 3D Fluid Sculpture"
    >
      {/* Background soft lighting glow */}
      <div className="absolute inset-0 bg-radial-gradient from-[#D4B3FF]/15 via-transparent to-transparent pointer-events-none" />

      {/* HTML5 Canvas */}
      <canvas 
        ref={canvasRef} 
        className="w-full h-full block cursor-grab active:cursor-grabbing"
      />

      {/* High Fashion Editorial Telemetry Top Overlay in Lavender Glass */}
      <div className="absolute top-4 left-5 right-5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#E5E4E2] pointer-events-none select-none border-b border-white/20 pb-2.5">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D4B3FF] status-indicator-lavender shadow-md shadow-[#D4B3FF]" />
          <span className="font-bold tracking-wider text-[#FFFFFF]">LIQUID PLATINUM CHROMIUM</span>
          <span className="text-[#D4B3FF] hidden sm:inline">•</span>
          <span className="text-[#EBDCFF] hidden sm:inline">3D Fluid Sculpture</span>
        </div>
        <div className="flex items-center gap-3">
          <span>fps: <strong className="text-[#D4B3FF] font-bold">{metrics.fps}</strong></span>
          <span className="hidden sm:inline">tilt: <strong className="text-white">{metrics.angle}</strong></span>
        </div>
      </div>

      {/* High Fashion Editorial Telemetry Bottom Overlay */}
      <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#EBDCFF] pointer-events-none select-none border-t border-white/20 pt-2.5">
        <div className="flex items-center gap-2">
          <span className="text-[#E5E4E2]/80">SPECULAR:</span>
          <span className="text-[#D4B3FF] font-bold">VIVID LAVENDER REFLECTIONS</span>
        </div>
        <div className="text-white tracking-wider hidden sm:block">
          INTERACTIVE: <span className="text-[#D4B3FF] font-bold">CURSOR DYNAMICS</span>
        </div>
      </div>
    </div>
  );
};

export default LiquidChromeCanvas;
