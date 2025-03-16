import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style.css';
function Services() {
    return (
      <>
      <Header />
      <section className="services" id="service">
        <div className="container">
          <div className="section-head">
            <h1 className="heading">Our Services</h1>
            <p>To revolutionize energy generation and distribution by providing sustainable, efficient, and reliable solutions tailored to meet the evolving needs of our customers.</p>
          </div>
          <div className="services-container">
            <div className="service-item">
              <span className="icon"><i className="fa fa-laptop"></i></span>
              <h6>Sustainable devices</h6>
              <p>We design energy meters, smart monitoring systems, and groundbreaking sand energy solutions. Our devices redefine efficiency and sustainability, driving a future powered by innovation and responsibility. Heading to solve world's major problem.</p>
            </div>
            
            <div className="service-item">
              <span className="icon"><i className="fa fa-android"></i></span>
              <h6>Tech Solutions</h6>
              <p>We Have Expertise In Creating Multi-Platform Mobile App Solutions For Both Android And IOS Devices. Using PhoneGap, Xamarin, And React Native, We Offer Custom Mobile App That Runs Smoothly On Multiple Platforms.</p>
            </div>
            
            <div className="service-item">
              <span className="icon"><i className="fa fa-magic"></i></span>
              <h6>Digitalizing sustainability</h6>
              <p>We combine technology and sustainability to deliver smart energy solutions. Our digital innovations help optimize efficiency, cut carbon footprints, and drive sustainable growth. Together, we're building a greener future.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      </>
    );
  }
  
export default Services; 