import React, { useEffect, useRef, useState } from 'react';

const NeuralCanvas = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [activeMetrics, setActiveMetrics] = useState({
    fps: 60,
    loss: '0.038',
    activeNodes: 28,
    activeSynapses: 74,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let isVisible = true;
    let width = 0;
    let height = 0;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersReducedMotion = mediaQuery.matches;

    // Node & Synapse setup
    let nodes = [];
    let pulses = [];
    let mouse = { x: -1000, y: -1000, radius: 130 };

    const layersCount = 4;
    const nodesPerLayer = [4, 7, 6, 3];

    const initNetwork = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      nodes = [];
      pulses = [];

      const xPadding = width * 0.12;
      const usableWidth = width - xPadding * 2;
      const xStep = usableWidth / (layersCount - 1);

      nodesPerLayer.forEach((count, layerIdx) => {
        const x = xPadding + layerIdx * xStep;
        const yPadding = height * 0.15;
        const usableHeight = height - yPadding * 2;
        const yStep = count > 1 ? usableHeight / (count - 1) : 0;

        for (let i = 0; i < count; i++) {
          const y = count === 1 ? height / 2 : yPadding + i * yStep;
          nodes.push({
            id: `${layerIdx}-${i}`,
            layer: layerIdx,
            index: i,
            baseX: x,
            baseY: y,
            x: x + (Math.random() - 0.5) * 8,
            y: y + (Math.random() - 0.5) * 8,
            radius: layerIdx === 0 || layerIdx === layersCount - 1 ? 5 : 4,
            pulsePhase: Math.random() * Math.PI * 2,
            targetX: x,
            targetY: y,
            vx: 0,
            vy: 0,
            activity: 0.2 + Math.random() * 0.8,
          });
        }
      });
    };

    initNetwork();

    // Spawn pulses traveling along synaptic connections
    let lastPulseTime = 0;
    const spawnPulse = (time) => {
      if (time - lastPulseTime < 340) return;
      lastPulseTime = time;

      // Candidate from previous layers
      const candidateNodes = nodes.filter((n) => n.layer < layersCount - 1);
      if (candidateNodes.length === 0) return;
      const source = candidateNodes[Math.floor(Math.random() * candidateNodes.length)];
      
      const targetCandidates = nodes.filter((n) => n.layer === source.layer + 1);
      if (targetCandidates.length === 0) return;
      const target = targetCandidates[Math.floor(Math.random() * targetCandidates.length)];

      pulses.push({
        source,
        target,
        progress: 0,
        speed: 0.012 + Math.random() * 0.011,
        // Pale Lavender (#E6E0F0) and Platinum Silver (#E5E4E2)
        color: Math.random() > 0.45 ? '#E6E0F0' : '#E5E4E2',
        size: 2.2 + Math.random() * 1.6,
      });
    };

    // Render loop
    let frameCount = 0;
    let fpsTimer = 0;

    const render = (currentTime) => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      frameCount++;
      if (currentTime - fpsTimer > 1000) {
        setActiveMetrics((prev) => ({
          ...prev,
          fps: Math.round((frameCount * 1000) / (currentTime - fpsTimer)),
          loss: (0.035 + Math.sin(currentTime * 0.001) * 0.008).toFixed(3),
        }));
        frameCount = 0;
        fpsTimer = currentTime;
      }

      ctx.clearRect(0, 0, width, height);

      // Node subtle natural floating & mouse interaction
      nodes.forEach((node) => {
        if (!prefersReducedMotion) {
          node.pulsePhase += 0.02;
          const floatX = Math.cos(node.pulsePhase) * 2;
          const floatY = Math.sin(node.pulsePhase * 0.8) * 2;

          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 16;
            const angle = Math.atan2(dy, dx);
            node.x = node.baseX + floatX - Math.cos(angle) * force;
            node.y = node.baseY + floatY - Math.sin(angle) * force;
          } else {
            node.x += (node.baseX + floatX - node.x) * 0.1;
            node.y += (node.baseY + floatY - node.y) * 0.1;
          }
        }
      });

      // Draw Synaptic Connections in Mocha & Lavender Tints
      for (let i = 0; i < nodes.length; i++) {
        const source = nodes[i];
        for (let j = 0; j < nodes.length; j++) {
          const target = nodes[j];
          if (target.layer === source.layer + 1) {
            const dx = target.x - source.x;
            const dy = target.y - source.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < width * 0.45) {
              const alpha = Math.max(0.08, 0.28 - (dist / (width * 0.45)) * 0.2);
              ctx.beginPath();
              ctx.moveTo(source.x, source.y);
              ctx.lineTo(target.x, target.y);
              // Alternate subtle mocha and pale lavender lines
              ctx.strokeStyle = i % 2 === 0 
                ? `rgba(111, 78, 55, ${alpha * 1.5})` 
                : `rgba(230, 224, 240, ${alpha * 0.9})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }
      }

      // Draw and advance pulses in Pale Lavender & Platinum Silver
      if (!prefersReducedMotion) {
        spawnPulse(currentTime);

        for (let k = pulses.length - 1; k >= 0; k--) {
          const p = pulses[k];
          p.progress += p.speed;

          if (p.progress >= 1) {
            pulses.splice(k, 1);
            continue;
          }

          const curX = p.source.x + (p.target.x - p.source.x) * p.progress;
          const curY = p.source.y + (p.target.y - p.source.y) * p.progress;

          ctx.beginPath();
          ctx.arc(curX, curY, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 9;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // Draw Nodes: Mocha Brown core with Platinum Silver border & Pale Lavender spark
      nodes.forEach((node) => {
        // Outer halo in Pale Lavender
        const haloAlpha = 0.12 + Math.sin(node.pulsePhase) * 0.08;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(230, 224, 240, ${haloAlpha})`;
        ctx.fill();

        // Node circle in Mocha Brown
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#6F4E37';
        ctx.strokeStyle = '#E5E4E2';
        ctx.lineWidth = 1.4;
        ctx.fill();
        ctx.stroke();

        // Core dot in Pale Lavender
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 0.45, 0, Math.PI * 2);
        ctx.fillStyle = '#E6E0F0';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    // Mouse handlers
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    const resizeObserver = new ResizeObserver(() => {
      initNetwork();
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
      className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] rounded-2xl sm:rounded-3xl border border-[#6F4E37]/40 bg-[#1C1513]/85 backdrop-blur-md overflow-hidden flex items-center justify-center group shadow-2xl shadow-[#100B0A]"
      aria-label="Interactive Computational Neural Network Canvas"
    >
      {/* Background subtle radial gradient in soft Pale Lavender & Mocha */}
      <div className="absolute inset-0 bg-radial-gradient from-[#E6E0F0]/[0.06] via-transparent to-transparent pointer-events-none" />

      {/* HTML5 Canvas */}
      <canvas 
        ref={canvasRef} 
        className="w-full h-full block cursor-crosshair"
      />

      {/* Screen Reader Fallback */}
      <div className="sr-only">
        Interactive computational neural network canvas representing neural weights, backpropagation, and data flows using Mocha Brown, Platinum Silver, and Pale Lavender.
      </div>

      {/* Technical HUD Top Overlay in Platinum Silver & Pale Lavender */}
      <div className="absolute top-3.5 left-4 right-4 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#B4AEA8] pointer-events-none select-none border-b border-[#6F4E37]/25 pb-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#E6E0F0] status-indicator-lavender" />
          <span className="text-[#E5E4E2] font-semibold">NEURAL TOPOLOGY</span>
          <span className="text-[#6F4E37] hidden sm:inline">|</span>
          <span className="text-[#E6E0F0] hidden sm:inline">4-7-6-3 Feedforward</span>
        </div>
        <div className="flex items-center gap-3">
          <span>loss: <strong className="text-[#E6E0F0] font-bold">{activeMetrics.loss}</strong></span>
          <span className="hidden sm:inline">fps: <strong className="text-[#E5E4E2]">{activeMetrics.fps}</strong></span>
        </div>
      </div>

      {/* Technical HUD Bottom Overlay */}
      <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#B4AEA8] pointer-events-none select-none border-t border-[#6F4E37]/25 pt-2">
        <div className="flex items-center gap-2">
          <span className="text-[#8A6246]">SYNAPSE STATUS:</span>
          <span className="text-[#E5E4E2]">PROPAGATING</span>
        </div>
        <div className="text-[#E6E0F0] tracking-wider">
          POINTER GRAVITY: <span className="text-[#E5E4E2]">ACTIVE</span>
        </div>
      </div>
    </div>
  );
};

export default NeuralCanvas;
