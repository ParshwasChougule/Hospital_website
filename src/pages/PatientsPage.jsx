import React from 'react';
import { FiBriefcase, FiFileText, FiCreditCard, FiClock, FiCoffee, FiWifi, FiLock, FiMonitor } from 'react-icons/fi';
import './PatientsPage.css';

const PatientsPage = () => {
  return (
    <div className="patients-page-wrapper">
      <header className="patients-header">
        <h1>Patients & Visitors</h1>
        <p>
          Clear, simple information to help you and your loved ones feel prepared and supported
          before, during, and after your visit.
        </p>
      </header>

      {/* Planning & Guides Grid */}
      <div className="info-grid">
        <div className="info-card">
          <div className="card-icon"><FiBriefcase /></div>
          <h3>Planning Your Stay</h3>
          <p>A little preparation can make your time with us more comfortable.</p>
          <ul className="info-list">
            <li><strong>Bring:</strong> ID proof, insurance card, current medicines.</li>
            <li><strong>Pre-admission:</strong> Confirm room type & paperwork.</li>
            <li><strong>Comfort:</strong> Slippers, reading material, light jacket.</li>
          </ul>
        </div>

        <div className="info-card">
          <div className="card-icon"><FiFileText /></div>
          <h3>Patient Guides</h3>
          <p>What to expect during your visit.</p>
          <ul className="info-list">
            <li><strong>Inpatient:</strong> Admission, rounds, meals, discharge.</li>
            <li><strong>Outpatient:</strong> Registration, consultation, tests.</li>
            <li><strong>Family:</strong> Updates and staying in touch.</li>
          </ul>
        </div>

        <div className="info-card">
          <div className="card-icon"><FiCreditCard /></div>
          <h3>Billing & Insurance</h3>
          <p>Keeping financial questions clear and stress-free.</p>
          <ul className="info-list">
            <li>Cost estimates provided before admission.</li>
            <li>Guidance on cashless insurance & reimbursement.</li>
            <li>We accept major insurance plans & cards.</li>
          </ul>
        </div>
      </div>

      {/* Visiting Hours */}
      <section className="visiting-section">
        <div className="visiting-container">
          <div className="visiting-content">
            <h2 className="section-title">Visiting Hours & Policies</h2>
            <p className="section-subtitle">
              Designed to balance rest, recovery, and family support.
            </p>
            <div className="visiting-hours-box">
              <span className="visiting-time">4:00 PM – 7:00 PM</span>
              <span>Standard visiting hours (All Days)</span>
            </div>
            <ul className="info-list" style={{ marginTop: '20px' }}>
              <li>Only two visitors per patient at a time.</li>
              <li>Please avoid visiting if you have a cold or fever.</li>
              <li>Children under 12 are generally not permitted in wards.</li>
            </ul>
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <FiClock style={{ fontSize: '10rem', color: '#e2e8f0' }} />
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="amenities-section">
        <div className="section-header">
          <h2 className="section-title">Amenities for You</h2>
          <p className="section-subtitle">Thoughtful conveniences for your comfort.</p>
        </div>
        <div className="amenities-grid">
          <div className="amenity-item">
            <FiCoffee className="amenity-icon" />
            <span className="amenity-text">Cafeteria</span>
          </div>
          <div className="amenity-item">
            <FiWifi className="amenity-icon" />
            <span className="amenity-text">Free Wi-Fi</span>
          </div>
          <div className="amenity-item">
            <FiBriefcase className="amenity-icon" />
            <span className="amenity-text">Pharmacy</span>
          </div>
          <div className="amenity-item">
            <FiLock className="amenity-icon" />
            <span className="amenity-text">Safe Lockers</span>
          </div>
        </div>
      </section>


    </div>
  );
};

export default PatientsPage;
