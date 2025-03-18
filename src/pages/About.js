import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style.css';

function About() {
    const [activeCard, setActiveCard] = useState(null);

    const teamMembers = [
        {
            id: 1,
            name: "Rittish G", 
            role: "Founder | Team Lead | Sustainable Energy",
            img: "/images/rittish.jpg",
            bio: "A visionary leader transforming sustainable energy landscapes through innovative technology and strategic leadership.",
            skills: ["Project Management", "React", "Energy Optimization", "Strategic Planning"],
            achievements: [
                "Led 5+ sustainable energy projects",
                "Developed innovative energy management platforms",
                "Speaker at Global Energy Innovation Summit"
            ],
            email: "riti2005g@gmail.com",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/rittish-g-a89752282/",
                github: "https://github.com/rittish"
            }
        },
        {
            id: 2,
            name: "Bharath Kishore T", 
            role: "Co-Founder | Web Developer | Energy Analyst",
            img: "/images/bharath.jpg",
            bio: "Innovative developer creating cutting-edge web solutions for sustainable energy ecosystems.",
            skills: ["React", "Node.js", "Energy Analytics", "Cloud Computing"],
            achievements: [
                "Developed AI-powered energy consumption tracker",
                "Implemented machine learning models for energy prediction",
                "Open-source contributor to green tech projects"
            ],
            email: "bharath701031@gmail.com",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/bharath-kishore-80420a2bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                github: "https://github.com/bharath"
            }
        },
        {
            id: 3,
            name: "Santhossh KG", 
            role: "Cheif Operations Officer | UI/UX Designer | Innovation Architect",
            img: "/images/santhossh.jpg",
            bio: "Design visionary transforming complex ideas into intuitive, impactful user experiences.",
            skills: ["UI/UX Design", "React Native", "Design Thinking", "User Experience"],
            achievements: [
                "Award-winning UX design for energy management app",
                "Created intuitive interfaces for complex systems",
                "Keynote speaker on design innovation"
            ],
            email: "kgsanthossh2307@gmail.com",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/santhossh-k-g-a0bb47349/",
                github: "https://github.com/santhossh"
            }
        },
        {
            id: 4,
            name: "Yeswanth S", 
            role: "Cheif Technology Officer | FullStack Developer",
            img: "/images/Yeswanth.jpg",
            bio: "Technical maestro specializing in end-to-end software solutions for next-generation energy technologies.",
            skills: ["Full Stack Development", "Cloud Computing", "DevOps", "Microservices"],
            achievements: [
                "Architected scalable cloud infrastructure",
                "Developed distributed energy management systems",
                "Expert in serverless computing solutions"
            ],
            email: "yeswanth.s@electragen.com",
            socialLinks: {
                linkedin: "https://linkedin.com/in/yeswanth",
                github: "https://github.com/yeswanth"
            }
        }
    ];

    return (
      <>
      <Header />
      <div className="about-background">
        <section className="about" id="about">
          <div className="container">
            <div className="section-head">
              <h1 className="heading">About Us</h1>
              <p>Empowering The Future With Reliable Energy Solutions</p>
            </div>
            
            <div className="about-container">
              <div className="about-item">
                <span className="icon">🎯</span>
                <h6>Our Mission</h6>
                <p>At <span className="company-name">ElectraGen</span>, we are a team of innovators, engineers, and visionaries dedicated to revolutionizing the energy industry.</p>
              </div>
              
              <div className="about-item">
                <span className="icon">👁️</span>
                <h6>Our Vision</h6>
                <p>With our combined expertise, we deliver sustainable, efficient, and tailored energy solutions that power businesses and communities across the globe.</p>
              </div>
              
              <div className="about-item">
                <span className="icon">⚡</span>
                <h6>Our Commitment</h6>
                <p>We are committed to excellence in everything we do, providing innovative solutions and outstanding customer service all the time.</p>
              </div>
            </div>

            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-icon">⏱️</span>
                <h3>1+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <span className="stat-icon">🎯</span>
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
              <div className="stat-item">
                <span className="stat-icon">⚡</span>
                <h3>24/7</h3>
                <p>Support</p>
              </div>
            </div>
          </div>
        </section>

        <section className="team" id="team">
          <div className="container">
            <div className="section-head">
              <h1 className="heading">Our Innovative Team</h1>
              <p>The Visionaries Powering Tomorrow's Energy Solutions</p>
            </div>
            
            <div className="team-container">
              {teamMembers.map((member) => (
                <div 
                  key={member.id} 
                  className={`team-member-card ${activeCard === member.id ? 'card-active' : ''}`}
                  onMouseEnter={() => setActiveCard(member.id)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className="member-image-container">
                    <img src={member.img} alt={member.name} className="member-image" />
                    <div className="member-overlay">
                      <div className="overlay-content">
                        <h4>Achievements</h4>
                        <ul>
                          {member.achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="member-details">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <p className="member-bio">{member.bio}</p>
                    
                    <div className="member-skills">
                      <h4>Key Skills</h4>
                      <div className="skills-list">
                        {member.skills.map((skill, index) => (
                          <span key={index} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="member-contact">
                      <p className="member-email">
                        <i className="fas fa-envelope"></i> {member.email}
                      </p>
                    </div>
                    
                    <div className="member-social-links">
                      {Object.entries(member.socialLinks).map(([platform, link]) => (
                        <a 
                          key={platform} 
                          href={link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={`social-link ${platform}`}
                        >
                          <i className={`fab fa-${platform}`}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
      </>
    );
}

export default About;