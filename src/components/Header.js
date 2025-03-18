import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaBars, 
  FaTimes, 
  FaHome, 
  FaInfoCircle, 
  FaCog, 
  FaImage, 
  FaEnvelope, 
  FaUserPlus 
} from 'react-icons/fa';
import Logo from '../images/logo.png'; // Import the logo image
import '../style.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'visible';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'visible';
  };

  const navLinks = [
    { to: '/', label: 'Home', icon: <FaHome /> },
    { to: '/about', label: 'About', icon: <FaInfoCircle /> },
    { to: '/services', label: 'Services', icon: <FaCog /> },
    { to: '/portfolio', label: 'Portfolio', icon: <FaImage /> },
    { to: '/contact', label: 'Contact', icon: <FaEnvelope /> },
    { to: '/join-us', label: 'Join Us', icon: <FaUserPlus />, className: 'nav-cta' }
  ];

  return (
    <header className={`advanced-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo Section */}
        <div className="header-logo-section">
          <Link to="/" className="logo-link">
            <img 
              src={Logo} 
              alt="ElectraGen Logo" 
              className="logo-image"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="header-nav-section">
          <nav className="nav-menu">
            <div className="nav-links">
              {navLinks.map((link, index) => (
                <Link 
                  key={index} 
                  to={link.to} 
                  className={`nav-link ${link.className || ''}`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'show' : ''}`}>
        {navLinks.map((link, index) => (
          <Link 
            key={index} 
            to={link.to} 
            className={`mobile-nav-link ${link.className || ''}`}
            onClick={closeMobileMenu}
          >
            {link.icon}
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </header>
  );
}

export default Header; 