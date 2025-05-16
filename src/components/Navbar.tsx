
import React, { useState, useEffect } from 'react';
import { Waves, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
      
      // Update active link based on scroll position
      const sections = ['home', 'how-it-works', 'benefits', 'contact'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-sm shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2 group">
          <div className="relative overflow-hidden p-1">
            <div className="absolute inset-0 bg-gradient-to-r from-shore-teal via-shore-electric to-shore-blue opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full"></div>
            <Waves className={`h-8 w-8 transition-colors duration-500 ${
              isScrolled ? 'text-shore-blue' : 'text-white'
            } group-hover:text-shore-electric animate-float`} />
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-shore-teal via-shore-electric to-shore-blue transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
          </div>
          <span className={`text-2xl font-bold transition-colors duration-500 ${
            isScrolled ? 'text-shore-blue' : 'text-white'
          } group-hover:text-shore-electric gradient-text-cool relative overflow-hidden`}>
            Shore Energy
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-shore-aqua via-shore-electric to-shore-purple transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
          </span>
        </div>

        {/* Desktop Navigation with enhanced effects */}
        <div className="hidden md:flex space-x-8">
          {[
            {name: 'Home', href: 'home'},
            {name: 'How It Works', href: 'how-it-works'},
            {name: 'Benefits', href: 'benefits'},
            {name: 'Contact', href: 'contact'}
          ].map((item, index) => (
            <a 
              key={item.name} 
              href={`#${item.href}`} 
              className={`nav-link font-medium transition-all duration-300 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              } hover:text-shore-electric relative group`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setActiveLink(item.href)}
            >
              {item.name}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 transform transition-transform duration-300 ${
                activeLink === item.href 
                  ? 'scale-x-100 bg-gradient-to-r from-shore-teal to-shore-electric' 
                  : 'scale-x-0 bg-shore-electric group-hover:scale-x-100'
              }`}></span>
              
              {/* Hover effect dots */}
              <span className="absolute -top-1 -right-1 w-1 h-1 rounded-full bg-shore-teal opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              <span className="absolute -bottom-1 -left-1 w-1 h-1 rounded-full bg-shore-electric opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button with enhanced animations */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className={`transition-colors duration-300 ${isScrolled ? 'text-shore-blue' : 'text-white'} hover:text-shore-electric hover:bg-transparent relative overflow-hidden`}
            onClick={toggleMenu}
          >
            <div className="absolute inset-0 bg-white/10 rounded-full scale-0 transition-transform duration-300 hover:scale-100"></div>
            {isMenuOpen ? 
              <X className="h-6 w-6 animate-spin-once" /> : 
              <Menu className="h-6 w-6 transition-transform duration-300 hover:rotate-90" />
            }
          </Button>
        </div>

        <Button 
          className={`hidden md:flex bg-gradient-to-r from-shore-blue to-shore-electric hover:from-shore-teal hover:to-shore-indigo text-white px-6 py-2 rounded-md transition-all duration-500 shadow-md hover:shadow-lg hover:scale-105 ${
            isScrolled ? 'opacity-100' : 'opacity-90 hover:opacity-100'
          } relative overflow-hidden group`}
          style={{ backdropFilter: 'blur(4px)' }}
        >
          <span className="relative z-10">Join Us</span>
          <span className="absolute inset-0 rounded-md overflow-hidden">
            <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
          </span>
          
          {/* Animated dots in the button */}
          <span className="absolute top-1 right-1 w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-70 transition-opacity duration-300 delay-100"></span>
          <span className="absolute bottom-1 left-1 w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-70 transition-opacity duration-300 delay-200"></span>
          <span className="absolute top-1 left-1 w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-70 transition-opacity duration-300 delay-300"></span>
          <span className="absolute bottom-1 right-1 w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-70 transition-opacity duration-300"></span>
        </Button>
      </div>

      {/* Enhanced Mobile Menu with animations */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="bg-gradient-to-b from-shore-blue/95 to-shore-navy/95 backdrop-blur-sm shadow-lg animate-slide-down">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {[
                {name: 'Home', href: 'home'},
                {name: 'How It Works', href: 'how-it-works'},
                {name: 'Benefits', href: 'benefits'},
                {name: 'Contact', href: 'contact'}
              ].map((item, index) => (
                <a 
                  key={item.name} 
                  href={`#${item.href}`} 
                  className="block py-2 text-white font-medium hover:text-shore-aqua transition-colors duration-300 animate-fade-in relative pl-4 overflow-hidden"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveLink(item.href);
                  }}
                >
                  <span className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-shore-teal to-shore-electric transition-all duration-300 ${
                    activeLink === item.href ? 'opacity-100' : 'opacity-0'
                  }`}></span>
                  {item.name}
                  
                  {/* Animated trail effect */}
                  <span className="absolute inset-0 bg-white/10 scale-x-0 origin-left hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              ))}
              <Button 
                className="w-full bg-gradient-to-r from-shore-teal to-shore-electric text-white py-2 rounded-md transition-all duration-300 hover:shadow-lg animate-fade-in hover:scale-105 relative overflow-hidden group"
                style={{ animationDelay: '0.5s' }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">Get Started</span>
                
                {/* Add shimmer effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform"></span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
