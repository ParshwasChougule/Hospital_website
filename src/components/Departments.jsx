import React from 'react';
import { useNavigate } from 'react-router-dom';
import { departments } from '../data/departments';

const Departments = () => {
  const navigate = useNavigate();

  const handleLearnMore = (deptId) => {
    navigate('/services', { state: { departmentId: deptId } });
  };

  return (
    <section id="services" className="section">
      <div className="section-header">
        <h2 className="section-title">Centres of Excellence</h2>
        <p className="section-subtitle">
          Combining the best specialists and equipment to provide you with nothing short of the best in healthcare.
        </p>
      </div>

      <div className="services-grid">
        {departments.map((dept) => (
          <article key={dept.id} className="service-card">
            <div className="service-icon" aria-hidden="true">{dept.icon}</div>
            <h3>{dept.name}</h3>
            <p>{dept.description}</p>
            <button
              className="service-link"
              onClick={() => handleLearnMore(dept.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit' }}
            >
              Learn More
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Departments;
