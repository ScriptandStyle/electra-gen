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
  FaUserPlus, 
  FaMoon, 
  FaSun 
} from 'react-icons/fa';
import Logo from '../images/logo.png'; // Import the logo image
import '../style.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Apply dark mode preference
    document.body.classList.toggle('dark-mode', isDarkMode);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDarkMode]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
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
    <header className={`advanced-header ${isScrolled ? 'scrolled' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img 
              src={Logo} 
              alt="ElectraGen Logo" 
              className="logo-image"
            />
          </Link>
        </div>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <div className="nav-links">
            {navLinks.map((link, index) => (
              <Link 
                key={index} 
                to={link.to} 
                className={`nav-link ${link.className || ''}`} 
                onClick={closeMobileMenu}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </nav>

        <div className="header-actions">
          <div 
            className="dark-mode-toggle" 
            onClick={toggleDarkMode}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </div>

          <div 
            className="mobile-menu-toggle" 
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header; 