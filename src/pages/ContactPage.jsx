import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiAlertCircle } from 'react-icons/fi';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page-wrapper">
      <header className="contact-header">
        <h1>Locations & Contact</h1>
        <p>
          Find the right way to reach us, whether you need directions, phone numbers, or general
          assistance.
        </p>
      </header>

      <div className="contact-container">
        {/* Left Column: Contact Info */}
        <div className="contact-info-column">
          {/* Emergency Banner */}
          <div className="emergency-banner">
            <div className="emergency-icon"><FiAlertCircle /></div>
            <div className="emergency-text">
              <h4>Medical Emergency?</h4>
              <p>Call <strong>108</strong> or <strong>+91-98765-43210</strong> immediately.</p>
            </div>
          </div>

          {/* Address Card */}
          <div className="contact-card">
            <div className="icon-wrapper"><FiMapPin /></div>
            <h3>Main Hospital</h3>
            <ul className="contact-details-list">
              <li>Swarup Hospital</li>
              <li>Near City Central Park, Shivajinagar</li>
              <li>Pune - 411005, Maharashtra, India</li>
            </ul>
          </div>

          {/* Contact Details Card */}
          <div className="contact-card">
            <div className="icon-wrapper"><FiPhone /></div>
            <h3>Get in Touch</h3>
            <ul className="contact-details-list">
              <li>
                <span>General Enquiry:</span>
                <a href="tel:+912012345678">+91 9373674641</a>
              </li>
              <li>
                <span>Appointments:</span>
                <a href="tel:+919876543210">+91 9373674641</a>
              </li>
              <li>
                <span>Email:</span>
                <a href="mailto:care@swaruphospital.com">swaruphospital154.com</a>
              </li>
            </ul>
          </div>

          {/* Hours Card */}
          <div className="contact-card">
            <div className="icon-wrapper"><FiClock /></div>
            <h3>Opening Hours</h3>
            <ul className="contact-details-list">
              <li><strong>Emergency:</strong> 24/7 Open</li>
              <li><strong>OPD:</strong> Mon - Sat, 9:00 AM - 8:00 PM</li>
              <li><strong>Pharmacy:</strong> 24/7 Open</li>
              <li><strong>Visiting:</strong> 4:00 PM - 7:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Map & Form */}
        <div className="contact-main-column">
          {/* Map Placeholder */}
          <div className="map-container">
            <iframe
              title="Hospital Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.5761030862254!2d74.21511307543375!3d16.69808262229596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1aaa00fcfffbf%3A0x705713fa5e4af103!2sSwarup%20Hospital!5e0!3m2!1sen!2sin!4v1765534745951!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Message Form */}
          <div className="message-form-card">
            <h3 className="form-title">Send us a message</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="form-group">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-input" placeholder="John" />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-input" placeholder="Doe" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-input" placeholder="john@example.com" />
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <select className="form-input">
                  <option>General Enquiry</option>
                  <option>Feedback</option>
                  <option>Billing Query</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-textarea" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <FiSend style={{ marginRight: '8px' }} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
