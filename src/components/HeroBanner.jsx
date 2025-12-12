import React from 'react';
import './HeroBanner.css';

const HeroBanner = () => {

  return (
    <section
      className="hb-wrapper"
      style={{
        background: `linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 100%), url(${process.env.PUBLIC_URL}/assets/images/_H4A6714.JPG)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="hb-container">
        {/* LEFT CONTENT: Text & Value Prop */}
        <div className="hb-content">
          <span className="hb-tag">World-Class Healthcare</span>
          <h1 className="hb-title">
            Advanced Care, <br />
            <span>Right by Your Side</span>
          </h1>
          <p className="hb-desc">
            Experience the highest standard of healthcare with our team of expert specialists
            and state-of-the-art technology at Swarup Hospital.
          </p>

          <div className="hb-stats-bar">
            <div className="hb-stat">
              <div className="hb-stat-icon">🏥</div>
              <div className="hb-stat-info">
                <h4>1</h4>
                <p>Hospital</p>
              </div>
            </div>
            <div className="hb-stat">
              <div className="hb-stat-icon">👨‍⚕️</div>
              <div className="hb-stat-info">
                <h4>30+</h4>
                <p>Doctors</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default HeroBanner;
