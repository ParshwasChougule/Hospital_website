import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-column">
          <h3 className="footer-title">Swarup Hospital</h3>
          <p className="footer-text">Pune - 411001, Maharashtra, India</p>
          <p className="footer-text">Near City Central Park</p>
          <p className="footer-text">
            Phone: <a href="tel:+919876543210">+91-98765-43210</a>
          </p>
          <p className="footer-text">
            Emergency: <a href="tel:108">108</a> (24/7)
          </p>
        </div>

        <div className="footer-column">
          <h4 className="footer-subtitle">Quick links</h4>
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/services" className="footer-link">
            Services & Specialties
          </Link>
          <Link to="/doctors" className="footer-link">
            Find a Doctor
          </Link>
          <Link to="/patients" className="footer-link">
            Patients & Visitors
          </Link>
          <Link to="/appointments" className="footer-link">
            Appointments
          </Link>
          <Link to="/contact" className="footer-link">
            Locations & Contact
          </Link>
        </div>

        <div className="footer-column">
          <h4 className="footer-subtitle">Stay connected</h4>
          <p className="footer-text">Email: care@swaruphospital.com</p>
          <p className="footer-text">Follow us on social media for updates and health tips.</p>
          <div className="footer-social-row" style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', fontSize: '1.5rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#1877F2'} onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}>
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', fontSize: '1.5rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#E4405F'} onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}>
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', fontSize: '1.5rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#FF0000'} onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}>
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright-column">
          <p className="footer-text">
            © {new Date().getFullYear()} Swarup Hospital. All rights reserved.
          </p>
          <p className="footer-text" style={{ fontSize: '0.9rem', marginTop: '5px' }}>
            Designed and Developed by <a href="https://www.digisahyadri.com" target="_blank" rel="noopener noreferrer" style={{ color: '#1877F2', fontWeight: 'bold' }}>DigiSahyadri</a>
          </p>
        </div>
        <div className="footer-bottom-links">
          <button type="button" className="footer-link">
            Privacy Policy
          </button>
          <button type="button" className="footer-link">
            Terms of Use
          </button>
          <button type="button" className="footer-link">
            Sitemap
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
