import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

function Footer() {
    const [email, setEmail] = useState('');
    const [subscriptionStatus, setSubscriptionStatus] = useState('');
  
    const handleSubscribe = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:5000/api/newsletter/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email })
        });
  
        const data = await response.json();
  
        if (data.success) {
          setSubscriptionStatus('Successfully subscribed to newsletter!');
          setEmail('');
        } else {
          setSubscriptionStatus(data.error || 'Failed to subscribe. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        setSubscriptionStatus('Failed to subscribe. Please try again.');
      }
    };
  
    return (
      <footer className="advanced-footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Company Info Section */}
            <div className="footer-section company-info">
              <h3>Electragen</h3>
              <p>Innovative solutions for a sustainable future. Transforming energy landscapes with cutting-edge technology and commitment to environmental excellence.</p>
              <div className="social-links">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href="https://twitter.com/login" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="footer-section quick-links">
              <h4>Quick Links</h4>
              <div className="links-grid">
                <div>
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/#about">About Us</Link></li>
                    <li><Link to="/#service">Services</Link></li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li><Link to="/#portfolio">Portfolio</Link></li>
                    <li><Link to="/join-us">Join Us</Link></li>
                    <li><Link to="/#contact">Contact</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="footer-section contact-details">
              <h4>Contact Us</h4>
              <div className="contact-info">
                <p><FaMapMarkerAlt /> Sri Eshwar College of Engineering, Kinathukadavu, Coimbatore</p>
                <p><FaPhone /> +91 7845878331</p>
                <p><FaEnvelope /> riti2005g@gmail.com</p>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="footer-section newsletter">
              <h4>Stay Updated</h4>
              <p>Subscribe to our newsletter for the latest updates and innovations.</p>
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">Subscribe</button>
              </form>
              {subscriptionStatus && <div className="subscription-status">{subscriptionStatus}</div>}
            </div>
          </div>

          {/* Copyright Section */}
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Electragen. All Rights Reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-conditions">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer; 