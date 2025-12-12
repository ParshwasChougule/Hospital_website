import React from 'react';
import { useNavigate } from 'react-router-dom';
import { doctors } from '../data/doctors';

const Doctors = () => {
  const navigate = useNavigate();

  return (
    <section id="find-doctor" className="section section-alt">
      <div className="section-header">
        <h2 className="section-title">Our Team of Experts</h2>
        <p className="section-subtitle">
          We have some of the best specialists from around the country.
        </p>
      </div>

      <div className="doctors-grid">
        {doctors.map((doctor) => (
          <article key={doctor.id} className="doctor-card">
            {doctor.image ? (
              <img
                src={process.env.PUBLIC_URL + doctor.image}
                alt={doctor.name}
                className="doctor-img"
              />
            ) : (
              <div className="doctor-img-placeholder" />
            )}
            <div className="doctor-info">
              <h3 className="doctor-name">{doctor.name}</h3>
              <p className="doctor-specialty">{doctor.specialty}</p>
              <p className="doctor-meta">
                <span>{doctor.experience}</span> • <span>{doctor.location}</span>
              </p>
              <div className="doctor-actions">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => navigate('/appointments')}
                >
                  Book Appointment
                </button>
                <button type="button" className="btn btn-outline">
                  View Profile
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Doctors;
