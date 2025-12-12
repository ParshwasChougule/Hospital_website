import React from 'react';
import AppointmentForm from '../components/AppointmentForm';
import './AppointmentPage.css';

const AppointmentPage = () => {
  return (
    <div className="apt-page-wrapper">
      {/* Header Banner */}
      <header className="apt-header">
        <h1>Book an Appointment</h1>
        <p>
          Schedule your visit with our expert doctors. Quick, easy, and secure booking.
        </p>
      </header>

      <div className="apt-container">
        {/* Left Side: Info Cards */}
        <div className="apt-sidebar-left">

          {/* Card 1: Need Help */}
          <div className="apt-card">
            <h3>
              <span className="apt-card-icon">📞</span> Need Help?
            </h3>
            <p style={{ color: '#475569', marginBottom: '15px' }}>
              If you are facing issues booking online, our support team is here to assist you.
            </p>
            <div className="apt-contact-item">
              <span>Call:</span>
              <a href="tel:1066">1066 (Emergency)</a>
            </div>
            <div className="apt-contact-item">
              <span>Support:</span>
              <a href="tel:+919876543210">+91-98765-43210</a>
            </div>
          </div>

          {/* Card 2: Why Choose Us */}
          <div className="apt-card">
            <h3>
              <span className="apt-card-icon">🏥</span> Why Choose Us?
            </h3>
            <ul className="apt-list">
              <li>Top-rated specialists</li>
              <li>Advanced medical technology</li>
              <li>24/7 Emergency support</li>
              <li>Patient-centric care</li>
            </ul>
          </div>

          {/* Card 3: Checklist */}
          <div className="apt-card">
            <h3>
              <span className="apt-card-icon">📝</span> Checklist
            </h3>
            <ul className="apt-list">
              <li>Government ID Proof</li>
              <li>Insurance Card (if applicable)</li>
              <li>Previous Medical Reports</li>
              <li>List of current medications</li>
            </ul>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="apt-form-section">
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
