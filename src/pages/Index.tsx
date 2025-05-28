
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProcessSection from '@/components/ProcessSection';
import BenefitsSection from '@/components/BenefitsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Add enhanced scroll reveal functionality
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          
          // Add cascading animation to child elements
          if (entry.target.classList.contains('cascade-children')) {
            const children = entry.target.querySelectorAll('.cascade-item');
            children.forEach((child, index) => {
              const element = child as HTMLElement;
              element.style.animationDelay = `${index * 0.1 + 0.2}s`;
              element.classList.add('revealed');
            });
          }
        }
      });
    }, observerOptions);
    
    const revealElements = document.querySelectorAll('.reveal-on-scroll, .reveal-left, .reveal-right, .reveal-scale, .cascade-children');
    revealElements.forEach(el => observer.observe(el));
    
    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Enhanced parallax effect for mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const parallaxElements = document.querySelectorAll('.parallax-effect');
      const mouseX = e.clientX / window.innerWidth - 0.5;
      const mouseY = e.clientY / window.innerHeight - 0.5;
      
      parallaxElements.forEach((el) => {
        const element = el as HTMLElement;
        const depth = parseFloat(element.getAttribute('data-depth') || '0.05');
        const moveX = mouseX * depth * 50;
        const moveY = mouseY * depth * 50;
        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
      
      // Add color shift effect on mouse move
      const colorShiftElements = document.querySelectorAll('.color-shift-bg');
      colorShiftElements.forEach((el) => {
        const element = el as HTMLElement;
        const gradientX = (e.clientX / window.innerWidth) * 100;
        const gradientY = (e.clientY / window.innerHeight) * 100;
        element.style.background = `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(45, 212, 191, 0.2), rgba(59, 130, 246, 0.2), rgba(13, 148, 136, 0.1))`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-shore-navy via-white to-white opacity-5 pointer-events-none"></div>
      
      {/* Enhanced background with color shift */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none color-shift-bg"></div>
      
      {/* Animated background elements */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <div className="bubble-group">
          {Array.from({length: 25}).map((_, i) => (
            <div 
              key={`bubble-sm-${i}`}
              className="bubble-small" 
              style={{
                left: `${Math.random() * 100}%`,
                bottom: `-20px`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 5 + 5}s`
              }}
            />
          ))}
          {Array.from({length: 15}).map((_, i) => (
            <div 
              key={`bubble-md-${i}`}
              className="bubble-medium" 
              style={{
                left: `${Math.random() * 100}%`,
                bottom: `-30px`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 7 + 7}s`
              }}
            />
          ))}
          {Array.from({length: 8}).map((_, i) => (
            <div 
              key={`bubble-lg-${i}`}
              className="bubble-large" 
              style={{
                left: `${Math.random() * 100}%`,
                bottom: `-40px`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 8 + 9}s`
              }}
            />
          ))}
        </div>
        
        {/* Enhanced sparkles with more variety */}
        {Array.from({length: 30}).map((_, i) => (
          <div 
            key={`sparkle-${i}`}
            className={`
              ${Math.random() > 0.6 ? 'sparkle-gold' : Math.random() > 0.4 ? 'sparkle-blue' : Math.random() > 0.2 ? 'sparkle-teal' : 'sparkle-purple'}
            `}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Floating geometric shapes */}
        {Array.from({length: 6}).map((_, i) => (
          <div 
            key={`geo-shape-${i}`}
            className="geo-shape"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              animationDelay: `${Math.random() * 3}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
              opacity: 0.1 + Math.random() * 0.2
            }}
          >
            <div className={`shape-${i % 3}`}></div>
          </div>
        ))}
      </div>
      
      <Navbar />
      <HeroSection />
      <ProcessSection />
      <BenefitsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
