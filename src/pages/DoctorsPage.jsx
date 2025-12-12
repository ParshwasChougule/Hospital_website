import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doctors } from '../data/doctors';
import { FiSearch, FiMapPin, FiGlobe, FiUser, FiClock, FiX } from 'react-icons/fi';
import './DoctorsPage.css';

const DoctorsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  const specialties = useMemo(
    () => Array.from(new Set(doctors.map((doctor) => doctor.specialty))),
    []
  );

  const locations = useMemo(
    () => Array.from(new Set(doctors.map((doctor) => doctor.location))),
    []
  );

  const filteredDoctors = doctors.filter((doctor) => {
    const term = searchTerm.trim().toLowerCase();
    if (term) {
      const text = [doctor.name, doctor.specialty, ...(doctor.conditions || [])]
        .join(' ')
        .toLowerCase();
      if (!text.includes(term)) return false;
    }
    if (specialtyFilter && doctor.specialty !== specialtyFilter) return false;
    if (locationFilter && doctor.location !== locationFilter) return false;
    return true;
  });

  const selectedDoctor =
    doctors.find((doctor) => doctor.id === selectedDoctorId) || filteredDoctors[0];

  const handleDoctorClick = (id) => {
    setSelectedDoctorId(id);
    setShowMobileSidebar(true);
  };

  return (
    <div className="doctors-page-wrapper">
      <header className="doctors-header">
        <h1>Find a Doctor</h1>
        <p>
          Search for a doctor by name, specialty, condition, or location. Use the filters to find
          someone who matches your preferences.
        </p>
      </header>

      <div className="section">
        {/* Filters Section */}
        <div className="filters-section">
          <div className="filters-container">
            <div className="search-bar-row">
              <div className="search-input-wrapper">
                <FiSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search by name, specialty, or condition (e.g. Cardiologist, Knee pain)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="filters-row">
              <select
                className="filter-select"
                value={specialtyFilter}
                onChange={(e) => setSpecialtyFilter(e.target.value)}
              >
                <option value="">All Specialties</option>
                {specialties.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>

              <select
                className="filter-select"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              >
                <option value="">All Locations</option>
                {locations.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="doctors-content-layout">
          {/* Doctors List */}
          <div className="doctors-list">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className={`doc-card ${selectedDoctor?.id === doctor.id ? 'active' : ''}`}
                onClick={() => handleDoctorClick(doctor.id)}
              >
                <div className="doc-header">
                  <div className="doc-avatar">
                    <FiUser />
                  </div>
                  <div className="doc-info">
                    <h3>{doctor.name}</h3>
                    <p className="doc-specialty">{doctor.specialty}</p>
                    <p className="doc-exp">{doctor.experience} Experience</p>
                  </div>
                </div>

                <div className="doc-details">
                  <div className="doc-detail-item">
                    <FiMapPin /> {doctor.location}
                  </div>
                  <div className="doc-detail-item">
                    <FiGlobe /> {(doctor.languages || []).join(', ')}
                  </div>
                </div>

                <div className="doc-actions">
                  <button className="doc-btn doc-btn-outline">View Profile</button>
                  <button
                    className="doc-btn doc-btn-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate('/appointments', {
                        state: {
                          doctorName: doctor.name,
                          specialty: doctor.specialty,
                        },
                      });
                    }}
                  >
                    Book Appoinment
                  </button>
                </div>
              </div>
            ))}

            {filteredDoctors.length === 0 && (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: '#64748b' }}>
                <h3>No doctors found matching your criteria.</h3>
                <p>Try adjusting your filters or search terms.</p>
              </div>
            )}
          </div>

          {/* Profile Sidebar (Sticky) */}
          {selectedDoctor && (
            <>
              <div
                className={`sidebar-overlay ${showMobileSidebar ? 'open' : ''}`}
                onClick={() => setShowMobileSidebar(false)}
              />
              <aside className={`profile-sidebar ${showMobileSidebar ? 'open' : ''}`}>
                <div className="profile-header">
                  {/* Mobile Close Button */}
                  <div
                    style={{ position: 'absolute', top: '20px', right: '20px', cursor: 'pointer', display: window.innerWidth <= 1024 ? 'block' : 'none' }}
                    onClick={() => setShowMobileSidebar(false)}
                  >
                    <FiX size={24} />
                  </div>

                  <div className="profile-avatar-lg">
                    <FiUser />
                  </div>
                  <h2 className="profile-name">{selectedDoctor.name}</h2>
                  <p className="profile-specialty">{selectedDoctor.specialty}</p>
                </div>

                <div className="profile-section">
                  <h4>About</h4>
                  <p className="profile-bio">{selectedDoctor.bio || 'An experienced specialist dedicated to providing comprehensive care for patients.'}</p>
                </div>

                <div className="profile-section">
                  <h4>Expertise</h4>
                  <div className="profile-tags">
                    {(selectedDoctor.conditions || []).map((c) => (
                      <span key={c} className="profile-tag">{c}</span>
                    ))}
                  </div>
                </div>

                <div className="profile-section">
                  <h4>Availability</h4>
                  <div className="doc-detail-item" style={{ marginBottom: '8px' }}>
                    <FiClock /> {selectedDoctor.acceptingNewPatients ? 'Accepting New Patients' : 'Currently Full'}
                  </div>
                  <div className="doc-detail-item">
                    <FiMapPin /> {selectedDoctor.location}
                  </div>
                </div>

                <button
                  className="profile-book-btn"
                  onClick={() =>
                    navigate('/appointments', {
                      state: {
                        doctorName: selectedDoctor.name,
                        specialty: selectedDoctor.specialty,
                      },
                    })
                  }
                >
                  Book Appointment
                </button>
              </aside>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;
