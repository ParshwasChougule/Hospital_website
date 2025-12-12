import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { departments } from '../data/departments';
import { FiActivity, FiCheckCircle, FiCpu, FiUsers, FiArrowRight } from 'react-icons/fi';
import './DepartmentPage.css';

const servicesAZ = [
  'Angioplasty & heart stent procedures',
  'Cancer screening & oncology support',
  'Childhood vaccinations',
  'Diabetes management clinic',
  'Emergency & trauma care',
  'Joint replacement surgery',
  'Maternity & newborn care',
  'Neurosciences & stroke care',
  'Physiotherapy & rehabilitation',
  'Preventive health checkups',
];

const DepartmentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedDepartmentId, setSelectedDepartmentId] = useState(
    location.state?.departmentId || departments[0].id
  );

  useEffect(() => {
    if (location.state?.departmentId) {
      setSelectedDepartmentId(location.state.departmentId);
    }
  }, [location.state]);

  const selectedDepartment =
    departments.find((dept) => dept.id === selectedDepartmentId) || departments[0];

  return (
    <div className="services-page-wrapper">
      <header className="services-header">
        <h1>Services & Specialties</h1>
        <p>
          Explore the departments and services that support you and your family, from everyday care
          to complex treatments.
        </p>
      </header>

      <div className="services-container">
        {/* Sidebar Navigation */}
        <aside className="services-sidebar">
          <h3>Centres of Excellence</h3>
          {departments.map((dept) => (
            <button
              key={dept.id}
              className={`dept-nav-item ${selectedDepartmentId === dept.id ? 'active' : ''}`}
              onClick={() => setSelectedDepartmentId(dept.id)}
            >
              <span className="dept-nav-icon">{dept.icon}</span>
              {dept.name}
            </button>
          ))}
        </aside>

        {/* Detail Content */}
        <main className="service-detail-card">
          <div className="detail-header">
            <h2>{selectedDepartment.name}</h2>
            <p className="detail-subtitle">{selectedDepartment.description}</p>
          </div>

          <div className="detail-section">
            <h3><FiActivity /> Overview</h3>
            <p>
              {selectedDepartment.overview || (
                <>
                  Our {selectedDepartment.name} department is dedicated to providing comprehensive care using the latest medical advancements.
                  We focus on accurate diagnosis, personalized treatment plans, and holistic recovery to ensure the best outcomes for our patients.
                </>
              )}
            </p>
          </div>

          <div className="detail-section">
            <h3><FiCheckCircle /> Key Treatments</h3>
            <ul className="detail-list">
              {selectedDepartment.keyTreatments ? (
                selectedDepartment.keyTreatments.map((treatment, index) => (
                  <li key={index}>{treatment}</li>
                ))
              ) : (
                <>
                  <li>Advanced diagnostic screenings and assessments</li>
                  <li>Minimally invasive surgical procedures</li>
                  <li>Comprehensive rehabilitation and follow-up care</li>
                  <li>24/7 emergency support for related conditions</li>
                </>
              )}
            </ul>
          </div>

          <div className="detail-section">
            <h3><FiCpu /> Technology & Facilities</h3>
            <p>
              We are equipped with state-of-the-art technology to support our specialists.
              From high-resolution imaging to robotic-assisted surgery systems, we invest in tools that improve precision and safety.
            </p>
          </div>

          <div className="cta-box">
            <h4>Need to see a specialist?</h4>
            <p>Our team of experts is ready to help you on your path to recovery.</p>
            <button
              className="cta-btn"
              onClick={() => navigate('/appointments')}
            >
              Book an Appointment <FiArrowRight style={{ marginLeft: '8px' }} />
            </button>
          </div>
        </main>
      </div>

      {/* A-Z Services */}
      <section className="az-section">
        <div className="section-header">
          <h2 className="section-title" style={{ color: '#0f172a' }}>Services A to Z</h2>
          <p className="section-subtitle">
            A quick alphabetical guide to many of the services available at our hospital.
          </p>
        </div>
        <div className="az-grid">
          {servicesAZ.map((service) => (
            <span key={service} className="az-item">
              {service}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DepartmentPage;
