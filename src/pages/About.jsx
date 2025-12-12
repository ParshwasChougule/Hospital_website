import React from 'react';
import { FiTarget, FiEye, FiUsers, FiAward, FiCheckCircle, FiHeart, FiActivity, FiShield } from 'react-icons/fi';
import './About.css';

const StatCounter = ({ end, suffix, duration = 2000 }) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!isVisible) return;
    let startTime;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };
    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const About = () => {
  return (
    <div className="about-page-wrapper">
      {/* Header Section */}
      <header className="about-header">
        <h1>About Swarup Hospital</h1>
        <p>
          We are a community-focused hospital committed to combining advanced medicine with
          compassionate, patient-first care.
        </p>
      </header>

      {/* Mission & Vision */}
      <section className="mission-section">
        <div className="section-header">
          <h2 className="section-title">Our Purpose</h2>
          <p className="section-subtitle">
            Driven by a commitment to excellence and a passion for healing.
          </p>
        </div>
        <div className="mission-grid">
          <div className="mission-card">
            <FiTarget className="mission-icon" />
            <h3>Our Mission</h3>
            <p>
              To provide safe, high-quality healthcare that is easy to understand,
              respectful, and close to home for every patient we serve.
            </p>
          </div>
          <div className="mission-card">
            <FiEye className="mission-icon" />
            <h3>Our Vision</h3>
            <p>
              To be the most trusted health partner for our community, setting the standard
              for patient-centered care and clinical excellence.
            </p>
          </div>
          <div className="mission-card">
            <FiHeart className="mission-icon" />
            <h3>Our Values</h3>
            <p>
              Integrity, Compassion, Excellence, and Respect are at the core of everything
              we do, every single day.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="leadership-section">
        <div className="section-header">
          <h2 className="section-title">Leadership & Team</h2>
          <p className="section-subtitle">
            Guided by experienced professionals dedicated to your well-being.
          </p>
        </div>
        <div className="leadership-grid">
          <div className="leader-card">
            <div className="leader-icon"><FiUsers /></div>
            <div className="leader-info">
              <h4>Hospital Director</h4>
              <p>Provides overall strategic direction and ensures a superior patient experience.</p>
            </div>
          </div>
          <div className="leader-card">
            <div className="leader-icon"><FiActivity /></div>
            <div className="leader-info">
              <h4>Medical Director</h4>
              <p>Guides clinical quality, safety protocols, and medical excellence across departments.</p>
            </div>
          </div>
          <div className="leader-card">
            <div className="leader-icon"><FiHeart /></div>
            <div className="leader-info">
              <h4>Nursing Leadership</h4>
              <p>Ensures compassionate, consistent, and high-quality bedside care 24/7.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Accreditations */}
      <section className="stats-strip">
        <div className="stats-grid">
          <div className="stat-item">
            <h3>NABH</h3>
            <p>Accredited Standards</p>
          </div>
          <div className="stat-item">
            <h3><StatCounter end={15} suffix="+" duration={2000} /></h3>
            <p>Years of Service</p>
          </div>
          <div className="stat-item">
            <h3><StatCounter end={50} suffix="k+" duration={2500} /></h3>
            <p>Happy Patients</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Emergency Support</p>
          </div>
        </div>
      </section>

      {/* Quality & Safety */}
      <section className="values-section">
        <div className="section-header">
          <h2 className="section-title">Quality & Patient Safety</h2>
          <p className="section-subtitle">
            Your safety is our top priority. We leave nothing to chance.
          </p>
        </div>
        <div className="values-list">
          <div className="value-item">
            <FiCheckCircle className="value-check" />
            <span className="value-text">Rigorous checklists for medicines, procedures, and surgeries.</span>
          </div>
          <div className="value-item">
            <FiShield className="value-check" />
            <span className="value-text">Dedicated infection-prevention teams and regular safety training.</span>
          </div>
          <div className="value-item">
            <FiCheckCircle className="value-check" />
            <span className="value-text">Clear communication of your care plan in language you understand.</span>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="community-section">
        <div className="community-content">
          <h2 className="section-title">Community Involvement</h2>
          <p className="section-subtitle">
            We see ourselves as part of the neighbourhood, not separate from it.
          </p>
          <div className="community-grid">
            <div className="community-box">
              <FiAward className="mission-icon" style={{ fontSize: '2rem' }} />
              <h4>Health Camps</h4>
              <p>Regular free camps for blood pressure, diabetes, and eye checks.</p>
            </div>
            <div className="community-box">
              <FiUsers className="mission-icon" style={{ fontSize: '2rem' }} />
              <h4>Public Talks</h4>
              <p>Webinars and sessions on heart health, women's wellness, and more.</p>
            </div>
            <div className="community-box">
              <FiActivity className="mission-icon" style={{ fontSize: '2rem' }} />
              <h4>Outreach</h4>
              <p>School and workplace training on first-aid and emergency preparedness.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
