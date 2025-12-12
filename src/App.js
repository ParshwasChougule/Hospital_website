import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import PillNav from './components/PillNav';
import Home from './pages/Home';
import About from './pages/About';
import DepartmentPage from './pages/DepartmentPage';
import DoctorsPage from './pages/DoctorsPage';
import PatientsPage from './pages/PatientsPage';
import AppointmentPage from './pages/AppointmentPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';


function AppContent() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      '/': 'Swarup Hospital',
      '/about': 'About Us | Swarup Hospital',
      '/services': 'Services & Specialties | Swarup Hospital',
      '/doctors': 'Find a Doctor | Swarup Hospital',
      '/patients': 'Patients & Visitors | Swarup Hospital',
      '/appointments': 'Appointments | Swarup Hospital',
      '/blog': 'Health Blog & Resources | Swarup Hospital',
      '/contact': 'Locations & Contact | Swarup Hospital',
    };

    document.title = titles[location.pathname] || 'Swarup Hospital';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <div className="App">
      <div style={{ position: 'absolute', width: '100%', top: 0, zIndex: 100 }}>
        <PillNav
          logo="/assets/images/NavLogo.png"
          logoAlt="Swarup Hospital"
          items={[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Services', href: '/services' },
            { label: 'Doctors', href: '/doctors' },
            { label: 'Patients', href: '/patients' },
            { label: 'Appointments', href: '/appointments' },
            { label: 'Contact', href: '/contact' },
            { label: 'Blog', href: '/blog' }
          ]}
          activeHref={location.pathname}
          className="custom-nav"
          baseColor="#000000"
          pillColor="rgba(0, 0, 0, 0.5)"
          activePillColor="#000000"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#ffffff"
        />
      </div>
      <main className="App-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<DepartmentPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/patients" element={<PatientsPage />} />
          <Route path="/appointments" element={<AppointmentPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
