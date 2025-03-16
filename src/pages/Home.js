import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import '../style.css';

function Home() {
  return (
    <>
      <Header />
      <section className="home" id="home">
        <div className="content">
          <h1 className="home-title">WELCOME TO ELECTRAGEN</h1>
          <p className="home-subtitle">Powering the Future with Innovative Solutions</p>
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="home-buttons">
            <Link 
              to="/services" 
              className="btn btn-primary"
              aria-label="Explore Our Services"
            >
              <div className="btn-content">
                <span className="btn-icon">🔧</span>
                <span className="btn-text">Our Services</span>
              </div>
            </Link>
            <Link 
              to="/contact" 
              className="btn btn-secondary"
              aria-label="Contact ElectraGen"
            >
              <div className="btn-content">
                <span className="btn-icon">📞</span>
                <span className="btn-text">Get in Touch</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home; 