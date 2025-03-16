import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import JoinUs from './pages/JoinUs';
import ApplicationForm from './pages/ApplicationForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <ToastContainer position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/join-us/:position" element={<ApplicationForm />} />
      </Routes>
    </Router>
  );
}
function AppStyles() {
  return (
    <style jsx global>{`
      .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: #003366;
        padding: 1rem 7%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 1000;
        height: 70px;
      }

      .header .logo {
        display: flex;
      }

      .header .logo img {
        height: 100px;
        width: auto;
        object-fit: contain;
      }
      
      /* Add additional CSS from your original style.css file here */
      /* This would include styles for all the components */

      .status-message {
        padding: 10px;
        margin: 10px 0;
        border-radius: 4px;
        text-align: center;
        background-color: #4CAF50;
        color: white;
      }

      .subscription-status {
        padding: 8px;
        margin: 8px 0;
        border-radius: 4px;
        text-align: center;
        background-color: #4CAF50;
        color: white;
      }

      /* Add error state */
      .status-message.error,
      .subscription-status.error {
        background-color: #f44336;
      }
    `}</style>
  );
}

export default App;