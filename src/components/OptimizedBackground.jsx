import React, { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const OptimizedBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef([]);

  // Optimized particle system with fewer particles and better performance
  const initParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const particleCount = window.innerWidth < 768 ? 15 : 25; // Reduced count for better performance
    particlesRef.current = [];

    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3, // Reduced velocity
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5, // Smaller particles
        opacity: Math.random() * 0.3 + 0.1, // Lower opacity
        color: Math.random() > 0.5 ? '#A259FF' : '#00F5D4',
        life: Math.random() * 100 + 100
      });
    }
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles with optimized calculations
    particlesRef.current.forEach((particle, index) => {
      // Simple physics without heavy mouse interaction
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life--;

      // Boundary bounce
      if (particle.x <= 0 || particle.x >= canvas.width) {
        particle.vx *= -0.8;
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
      }
      if (particle.y <= 0 || particle.y >= canvas.height) {
        particle.vy *= -0.8;
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      }

      // Respawn particle if life ended
      if (particle.life <= 0) {
        particle.x = Math.random() * canvas.width;
        particle.y = Math.random() * canvas.height;
        particle.vx = (Math.random() - 0.5) * 0.3;
        particle.vy = (Math.random() - 0.5) * 0.3;
        particle.life = Math.random() * 100 + 100;
        particle.opacity = Math.random() * 0.3 + 0.1;
      }

      // Draw particle with better performance
      ctx.save();
      ctx.globalAlpha = particle.opacity;
      ctx.fillStyle = particle.color;
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    // Draw connections only between nearby particles (optimized)
    for (let i = 0; i < particlesRef.current.length; i++) {
      for (let j = i + 1; j < particlesRef.current.length; j++) {
        const dx = particlesRef.current[i].x - particlesRef.current[j].x;
        const dy = particlesRef.current[i].y - particlesRef.current[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 80) { // Reduced connection distance
          const opacity = (80 - distance) / 80 * 0.1;
          ctx.save();
          ctx.globalAlpha = opacity;
          ctx.strokeStyle = '#A259FF';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
          ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
  }, [initParticles]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set initial size
    handleResize();

    // Start animation
    animate();

    // Add resize listener
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [handleResize, animate]);

  return (
    <>
      {/* Optimized Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />

      {/* CSS-only floating orbs for additional ambiance */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              background: `radial-gradient(circle, ${i % 2 ? '#A259FF' : '#00F5D4'} 0%, transparent 70%)`,
            }}
            animate={{
              x: [0, window.innerWidth - 200, 0],
              y: [0, window.innerHeight - 200, 0],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </>
  );
};

export default OptimizedBackground;
