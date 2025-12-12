import React from 'react';

const Navbar = ({ activePage, onNavigate }) => {
  const navItems = [
    { key: 'home', label: 'Home' },
    { key: 'services', label: 'Services' },
    { key: 'doctors', label: 'Find a Doctor' },
    { key: 'patients', label: 'Patients' },
    { key: 'appointments', label: 'Appointments' },
    { key: 'contact', label: 'Contact' },
    { key: 'blog', label: 'Blog' },
  ];

  return (
    <header>
      <div className="top-bar">
        <div className="top-bar-left">
          <span className="top-bar-emergency">
            24/7 Emergency: <a href="tel:108">108</a>
          </span>
          <span className="top-bar-phone">
            Call us: <a href="tel:+919876543210">+91-98765-43210</a>
          </span>
        </div>
        <div className="top-bar-right">
        </div>
      </div>

      <nav className="navbar">
        <div className="navbar-inner">
          <button
            type="button"
            className="navbar-brand navbar-brand-button"
            onClick={() => onNavigate('home')}
          >
            <div className="brand-mark">SH</div>
            <div className="brand-text">
              <span className="brand-title">Swarup Hospital</span>
            </div>
          </button>

          <div className="navbar-actions">
            <ul className="nav-link-list">
              {navItems.map((item) => (
                <li key={item.key}>
                  <button
                    type="button"
                    className={`nav-link nav-link-button$\
                      {activePage === item.key ? ' nav-link-active' : ''}`}
                    onClick={() => onNavigate(item.key)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="nav-cta"
              onClick={() => onNavigate('appointments')}
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
