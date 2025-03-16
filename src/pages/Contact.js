import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style.css';

function Contact() {
    const [formData, setFormData] = useState({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus(''); // Clear previous status
      
      if (!formData.name || !formData.email || !formData.message) {
        setStatus('Please fill in all required fields.');
        return;
      }
  
      try {
        // First check if the server is reachable
        const response = await fetch('http://localhost:5000/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
          // Add timeout to prevent long waiting
          signal: AbortSignal.timeout(5000)
        });
  
        const data = await response.json();
  
        if (response.ok && data.success) {
          setStatus('Message sent successfully!');
          setFormData({ name: '', phone: '', email: '', message: '' });
        } else {
          setStatus(data.message || 'Failed to send message. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        if (error.name === 'TimeoutError') {
          setStatus('Server is not responding. Please try again later.');
        } else if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
          setStatus('Unable to connect to the server. Please ensure the backend service is running.');
        } else {
          setStatus('An unexpected error occurred. Please try again later.');
        }
      }
    };
  
    return (
      <>
        <Header />
        <section className="contact" id="contact">
          <div className="contact-background">
            <div className="contact-overlay"></div>
          </div>
          <div className="container">
            <h1 className="heading">Get In Touch</h1>
            {status && <div className={`status-message ${status.includes('successfully') ? 'success' : 'error'}`}>{status}</div>}
            <div className="contact-in">
              <div className="contact-map">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2876277880215!2d77.03546637479!3d11.029999189843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f7e2b21a6d63%3A0x4e0db4e09f3aaa4f!2sR3H6%2B56%20Kondampatty%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1694534567890!5m2!1sen!2sin" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Electragen - R3H6+56 Kondampatty Location"
                ></iframe>
              </div>
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name" 
                      placeholder="Your Name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone" 
                      placeholder="Your Phone Number" 
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      placeholder="Your Email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea 
                      id="message"
                      name="message" 
                      placeholder="Type your message here..." 
                      required
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button type="submit" className="contact-form-btn">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
  
export default Contact;