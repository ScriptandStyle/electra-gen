
import React, { useEffect, useState } from 'react';
import { Waves, Droplet, Sun, Zap } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate random bubbles
  const bubbles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 80 + 10}%`,
    size: `${Math.random() * 20 + 10}px`,
    delay: `${Math.random() * 5}s`,
    duration: `${Math.random() * 5 + 5}s`
  }));
  
  // Generate random sparkles
  const sparkles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 80 + 10}%`,
    top: `${Math.random() * 80 + 10}%`,
    delay: `${Math.random() * 2}s`
  }));

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 overflow-hidden relative bg-gradient-to-br from-shore-navy via-shore-blue to-blue-50">
      {/* Background bubbles */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble absolute opacity-30"
          style={{
            left: bubble.left,
            bottom: '-50px',
            width: bubble.size,
            height: bubble.size,
            animationDelay: bubble.delay,
            animationDuration: bubble.duration
          }}
        />
      ))}
      
      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="sparkle-dot absolute"
          style={{
            left: sparkle.left,
            top: sparkle.top,
            animationDelay: sparkle.delay
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6" style={{ 
            opacity: 0,
            animation: 'fade-in 0.8s ease-out forwards'
          }}>
            <div className="inline-block p-2 px-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 animate-slide-down" style={{ animationDelay: '0.2s' }}>
              <span className="text-white flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-shore-teal animate-pulse"></span>
                Sustainable Water-to-Energy Technology
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">Turning Ocean Water Into </span>
              <span className="bg-gradient-to-r from-shore-teal via-shore-aqua to-shore-electric bg-clip-text text-transparent">Sustainable Energy</span>
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl">
              Shore Energy harnesses the power of seawater and sand to create clean, renewable electricity through our innovative desalination and thermal conversion process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-gradient-to-r from-shore-blue to-shore-teal text-white font-medium px-6 py-3 rounded-md transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg hover:translate-y-1 ripple-effect glow-teal shimmer">
                Learn More
              </button>
              <button className="border-2 border-shore-lightblue text-white hover:bg-shore-blue/30 font-medium px-6 py-3 rounded-md transition-all duration-300 hover:scale-105 hover:border-shore-electric hover:text-shore-aqua hover:translate-y-1 ripple-effect">
                Contact Us
              </button>
            </div>
          </div>
          
          <div className="relative flex justify-center" style={{ 
            opacity: 0,
            animation: 'fade-in 0.8s ease-out forwards',
            animationDelay: '0.3s'
          }}>
            <div 
              className="relative w-full max-w-lg aspect-square bg-white/10 backdrop-blur-lg rounded-full shadow-xl p-8 overflow-hidden hover-card floating-element"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg)`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/10 via-cyan-100/10 to-teal-100/10 rounded-full"></div>
              
              {/* Animated gradient background */}
              <div 
                className="absolute inset-0 rounded-full opacity-30"
                style={{
                  background: 'linear-gradient(45deg, #0c4a6e, #0d9488, #3b82f6, #7dd3fc)',
                  backgroundSize: '400% 400%',
                  animation: 'gradient-shift 8s ease infinite'
                }}
              ></div>
              
              {/* Animation elements */}
              <div className="relative w-full h-full">
                {/* Seawater at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-r from-shore-blue/70 to-shore-lightblue/50 rounded-b-full overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-3 bg-white/30 animate-wave"></div>
                  
                  {/* Water ripples */}
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i}
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white/20"
                      style={{
                        animation: `water-ripple 3s infinite linear`,
                        animationDelay: `${i * 0.7}s`
                      }}
                    />
                  ))}
                </div>
                
                {/* Sand in the center with enhanced colors */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[20%] w-1/2 h-1/4 bg-gradient-to-r from-shore-amber/80 to-shore-gold/80 rounded-full animate-pulse-glow"></div>
                
                {/* Heat pulse rings with better colors */}
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[20%] w-1/2 h-1/4 rounded-full border border-shore-coral/50"
                    style={{
                      animation: `pulse-ring 2s infinite linear`,
                      animationDelay: `${i * 0.6}s`
                    }}
                  />
                ))}
                
                {/* Icons with animations */}
                <Waves className="absolute bottom-10 left-10 h-12 w-12 text-shore-lightblue animate-wave" />
                <Droplet className="absolute top-1/3 left-1/4 h-10 w-10 text-shore-turquoise animate-bounce-subtle" />
                <Sun className="absolute top-1/4 right-1/4 h-14 w-14 text-shore-gold animate-pulse-glow" />
                
                <Zap className="absolute top-10 right-10 h-12 w-12 text-shore-electric animate-pulse" />
                
                {/* Electric pulse rings with more vibrant colors */}
                {[1, 2].map((i) => (
                  <div 
                    key={i}
                    className="absolute top-10 right-10 w-12 h-12 rounded-full border border-shore-electric/70"
                    style={{
                      animation: `pulse-ring 1.5s infinite linear`,
                      animationDelay: `${i * 0.5}s`
                    }}
                  />
                ))}
                
                {/* Connecting lines as energy flow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full border-4 border-dashed border-cyan-200/30 animate-rotate-glow"></div>
                
                {/* Outer glow */}
                <div className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-700 hover:opacity-70"
                  style={{
                    boxShadow: '0 0 40px 10px rgba(59, 130, 246, 0.6)',
                    animation: 'pulse-glow 3s infinite'
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-auto" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillOpacity="0.2" fill="#FFFFFF" d="M0,96L48,80C96,64,192,32,288,32C384,32,480,64,576,69.3C672,75,768,53,864,53.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          <path fillOpacity="0.3" fill="#FFFFFF" d="M0,96L48,90.7C96,85,192,75,288,64C384,53,480,43,576,48C672,53,768,75,864,90.7C960,107,1056,117,1152,112C1248,107,1344,85,1392,74.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
