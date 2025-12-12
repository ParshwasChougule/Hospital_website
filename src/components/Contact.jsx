import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section section-alt contact-section">
      <div className="section-header">
        <h2 className="section-title">Visit or reach us anytime</h2>
        <p className="section-subtitle">
          Whether you have a quick question or need directions, we are here to help you get the
          care you need.
        </p>
      </div>

      <div className="contact-layout">
        <div id="locations" className="contact-block">
          <h3 className="contact-heading">Our main hospital</h3>
          <p className="contact-detail">Swarup Hospital</p>
          <p className="contact-detail">Pune - 411001, Maharashtra, India</p>
          <p className="contact-detail">Landmark: Near City Central Park</p>
        </div>

        <div className="contact-block">
          <h3 className="contact-heading">Contact details</h3>
          <p className="contact-detail">
            Phone: <a href="tel:+919876543210">+91-98765-43210</a>
          </p>
          <p className="contact-detail">
            Email: <a href="mailto:care@swaruphospital.com">care@swaruphospital.com</a>
          </p>
          <p className="contact-detail">
            Emergency: <a href="tel:108">108</a> (24/7)
          </p>
        </div>


      </div>
    </section>
  );
};

export default Contact;
