import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  alpha: number;
  maxAlpha: number;
  pulseSpeed: number;
}

export const AmbientEnvironment: React.FC = React.memo(() => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [systemLogIndex, setSystemLogIndex] = useState(0);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const isReducedMotion = useRef(false);

  const systemLogs = [
    'XENUS_CORE // OPERATIONAL',
    'CYPHER_LATENCY: 0.04ms',
    'QUANTUM_NODES: 8/8 ONLINE',
    'ATMOSPHERE // STABLE',
    'GRID_POLYGON_INDEX: 0x8F3A',
    'SECURITY_PROTOCOLS: ENFORCED',
    'ENCRYPTED_CHANNEL: ACTIVE',
  ];

  // System log rotation ticker
  useEffect(() => {
    const logInterval = setInterval(() => {
      setSystemLogIndex((prev) => (prev + 1) % systemLogs.length);
    }, 5000);
    return () => clearInterval(logInterval);
  }, [systemLogs.length]);

  useEffect(() => {
    const checkMotion = () => {
      isReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    };
    checkMotion();

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth - 0.5) * 30;
      mouseRef.current.targetY = (e.clientY / window.innerHeight - 0.5) * 30;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Floating particles (reduced count for mobile efficiency)
    const colors = ['#E60012', '#00E5FF', '#00FF88', '#FFFFFF'];
    const particleCount = window.innerWidth < 768 ? 12 : 30;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: -Math.random() * 0.4 - 0.15,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.2,
        maxAlpha: Math.random() * 0.5 + 0.3,
        pulseSpeed: Math.random() * 0.015 + 0.005,
      });
    }

    let scanlineY = 0;
    let isTabVisible = true;

    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const render = () => {
      if (!isTabVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      if (!isReducedMotion.current) {
        // Fast lightweight particles drawing (no expensive shadowBlur)
        particles.forEach((p) => {
          p.x += p.speedX;
          p.y += p.speedY;

          if (p.y < -10) p.y = height + 10;
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;

          p.alpha += p.pulseSpeed;
          if (p.alpha > p.maxAlpha || p.alpha < 0.1) {
            p.pulseSpeed = -p.pulseSpeed;
          }

          const px = p.x + mouseRef.current.x * (p.size * 0.2);
          const py = p.y + mouseRef.current.y * (p.size * 0.2);

          ctx.beginPath();
          ctx.arc(px, py, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha;
          ctx.fill();
        });

        ctx.globalAlpha = 1.0;

        // Slow subtle scanline beam
        scanlineY = (scanlineY + 0.5) % height;
        ctx.fillStyle = 'rgba(0, 229, 255, 0.02)';
        ctx.fillRect(0, scanlineY, width, 2);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
      <div className="absolute inset-0 bg-stripes opacity-10 pointer-events-none" />

      <div className="fixed bottom-3 left-4 z-40 hidden sm:flex items-center gap-2 font-space text-[10px] text-gray-500/80 bg-black/60 backdrop-blur-xs px-2.5 py-1 border border-white/10 skew-x-[-8deg] pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88] animate-ping" />
        <span className="text-[#00FF88] font-bold tracking-widest uppercase">
          {systemLogs[systemLogIndex]}
        </span>
      </div>
    </div>
  );
});
