import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import '../styles/JoinUs.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
function JoinUs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    position: 'Web Designer',
    experience: '',
    details: '',
    resume: null
  });
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const navigate = useNavigate();
  const positions = [
    {
      title: "Web Designer",
      icon: "🎨",
      description: "Create stunning user interfaces and experiences",
      path: "web-designer"
    },
    {
      title: "Web Developer",
      icon: "💻",
      description: "Build robust and scalable web applications",
      path: "web-developer"
    },
    {
      title: "Mobile App Designer",
      icon: "📱",
      description: "Design intuitive mobile experiences",
      path: "mobile-designer"
    },
    {
      title: "Mobile App Developer",
      icon: "⚡",
      description: "Develop cutting-edge mobile applications",
      path: "mobile-developer"
    },
    {
      title: "Digital Marketer",
      icon: "📊",
      description: "Drive growth through digital channels",
      path: "digital-marketer"
    }
  ];
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      const file = files[0];
      setFormData(prev => ({
        ...prev,
        [name]: file
      }));
      if (file) {
        setPreviewUrl(file.name);
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
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
        setFormData({
          name: '',
          phone: '',
          email: '',
          position: 'Web Designer',
          experience: '',
          details: '',
          resume: null
        });
        setPreviewUrl(null);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  const handlePositionClick = (path) => {
    navigate(`/join-us/${path}`);
  };
  return (
    <>
      <Header />
      <section className="joinus-section">
        <h1 className="heading">Join Our Team</h1>
        <div className="positions-container">
          {positions.map((pos, index) => (
            <div 
              className="position-card" 
              key={index}
              onClick={() => handlePositionClick(pos.path)}
            >
              <span className="position-icon">{pos.icon}</span>
              <h3>{pos.title}</h3>
              <p>{pos.description}</p>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
export default JoinUs; 