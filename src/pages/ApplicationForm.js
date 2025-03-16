import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/ApplicationForm.css';

function ApplicationForm() {
  const { position } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    position: position,
    experience: '',
    details: '',
    resume: null
  });

  const positionTitles = {
    'web-designer': 'Web Designer',
    'web-developer': 'Web Developer',
    'mobile-designer': 'Mobile App Designer',
    'mobile-developer': 'Mobile App Developer',
    'digital-marketer': 'Digital Marketer'
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      const response = await fetch('http://localhost:5000/api/careers', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Application submitted successfully!');
        navigate('/join-us');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to submit application. Please try again.');
    }
  };

  return (
    <>
      <Header />
      <div className="application-form-wrapper">
        <div className="application-form-container">
          <div className="application-form-header">
            <h2>Apply for {positionTitles[position]}</h2>
            <p>Fill out the form below to submit your application</p>
          </div>
          
          <form onSubmit={handleSubmit} className="application-form">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="form-input"
                  style={{ fontSize: '1.8rem' }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="10-digit phone number"
                  pattern="[0-9]{10}"
                  maxLength="10"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="form-input"
                  style={{ fontSize: '1.8rem' }}
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="form-input"
                  style={{ fontSize: '1.8rem' }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="experience">Years of Experience</label>
                <input
                  type="number"
                  id="experience"
                  name="experience"
                  placeholder="Total years of experience"
                  required
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  className="form-input"
                  style={{ fontSize: '1.8rem' }}
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="details">About Yourself</label>
                <textarea
                  id="details"
                  name="details"
                  placeholder="Tell us about your background, skills, and motivation..."
                  required
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                  className="form-textarea"
                  style={{ fontSize: '1.8rem', minHeight: '150px' }}
                ></textarea>
              </div>

              <div className="form-group full-width file-upload">
                <label>Upload Resume</label>
                <div className="file-input-wrapper">
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setFormData({...formData, resume: e.target.files[0]})}
                    required
                    id="resume-upload"
                    className="file-input"
                  />
                  <label 
                    htmlFor="resume-upload" 
                    className="file-upload-btn"
                    style={{ fontSize: '1.8rem' }}
                  >
                    {formData.resume ? formData.resume.name : 'Choose File'}
                  </label>
                </div>
              </div>
            </div>

            <div className="form-actions">
              <button 
                type="submit" 
                className="submit-application-btn"
                style={{ fontSize: '2rem' }}
              >
                Submit Application
              </button>
              <button 
                type="button" 
                className="cancel-btn"
                onClick={() => navigate('/join-us')}
                style={{ fontSize: '2rem' }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ApplicationForm; 