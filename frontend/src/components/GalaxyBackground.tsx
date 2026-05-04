"use client";

import React, { useEffect, useRef } from 'react';

const GalaxyBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let mouse = { x: -1000, y: -1000 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      color: string;
      density: number;
      angle: number;
      velocity: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 2 + 0.5;
        this.density = (Math.random() * 30) + 1;
        this.angle = Math.random() * Math.PI * 2;
        this.velocity = Math.random() * 0.02 + 0.005;

        // Galaxy colors: blues, purples, cyans
        const colors = ['#00d2ff', '#3a7bd5', '#bb67ff', '#c9ff3b', '#ffffff'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update(time: number) {
        // Organic Wave Movement (layered sine functions)
        const waveX = Math.sin(time * 0.001 + this.angle) * 20;
        const waveY = Math.cos(time * 0.0005 + this.angle) * 50;
        
        // Target position based on waves
        let targetX = this.baseX + waveX;
        let targetY = this.baseY + waveY;

        // Mouse Interaction (Repel)
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = 150;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < maxDistance) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          // Slowly return to base wave position
          if (this.x !== targetX) {
            let dx = this.x - targetX;
            this.x -= dx / 20;
          }
          if (this.y !== targetY) {
            let dy = this.y - targetY;
            this.y -= dy / 20;
          }
        }
      }
    }

    const initParticles = () => {
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 1500;
      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    };

    const animate = (time: number) => {
      ctx.fillStyle = 'rgba(9, 9, 11, 0.2)'; // Fading trail effect for motion blur
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Apply hue rotation for "living" feel
      canvas.style.filter = `hue-rotate(${time * 0.01}deg)`;

      particles.forEach(particle => {
        particle.update(time);
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    
    resize();
    animate(0);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: '#090911',
        pointerEvents: 'none' // Allow clicking through to the site
      }}
    />
  );
};

export default GalaxyBackground;
