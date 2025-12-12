import React, { useState } from 'react';
import '../pages/AppointmentPage.css';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    dob: '',
    gender: 'Select Gender',
    department: 'Select Department',
    date: '',
    time: 'Morning (9 AM - 12 PM)',
    reason: ''
  });

  const [status, setStatus] = useState(null); // null, 'sending', 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch("https://formsubmit.co/ajax/digisahyadriit@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          "--- PATIENT DETAILS ---": "",
          "Patient Name": `${formData.firstName} ${formData.lastName}`,
          "Patient Phone": formData.phone,
          "Patient Email": formData.email,
          "Date of Birth": formData.dob,
          "Gender": formData.gender,
          "--- APPOINTMENT DETAILS ---": "",
          "Department": formData.department,
          "Preferred Date": formData.date,
          "Preferred Time": formData.time,
          "Reason / Symptoms": formData.reason,
          _subject: `New Appointment Request - ${formData.firstName} ${formData.lastName}`,
          _template: 'table',
          _captcha: "false"
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          dob: '',
          gender: 'Select Gender',
          department: 'Select Department',
          date: '',
          time: 'Morning (9 AM - 12 PM)',
          reason: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
    }
  };

  return (
    <form className="apt-form-wrapper" onSubmit={handleSubmit}>
      <h2 className="apt-form-title text-center">Patient Details</h2>

      <div className="apt-grid">
        <div>
          <label className="apt-label">First Name</label>
          <input
            type="text"
            name="firstName"
            className="apt-input"
            placeholder="John"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="apt-label">Last Name</label>
          <input
            type="text"
            name="lastName"
            className="apt-input"
            placeholder="Doe"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="apt-grid">
        <div>
          <label className="apt-label">Phone Number</label>
          <input
            type="tel"
            name="phone"
            className="apt-input"
            placeholder="+91 98765 43210"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="apt-label">Email Address</label>
          <input
            type="email"
            name="email"
            className="apt-input"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="apt-grid">
        <div>
          <label className="apt-label">Date of Birth</label>
          <input
            type="date"
            name="dob"
            className="apt-input"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="apt-label">Gender</label>
          <select
            name="gender"
            className="apt-select"
            value={formData.gender}
            onChange={handleChange}
          >
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <h2 className="apt-form-title text-center" style={{ marginTop: '20px' }}>Appointment Details</h2>

      <div className="apt-grid">
        <div className="apt-full-width">
          <label className="apt-label">Department</label>
          <select
            name="department"
            className="apt-select"
            value={formData.department}
            onChange={handleChange}
          >
            <option>Select Department</option>
            <option>Cardiology</option>
            <option>Orthopedics</option>
            <option>Neurology</option>
            <option>Pediatrics</option>
            <option>General Medicine</option>
            <option>Gynecology</option>
            <option>Dermatology</option>
            <option>ENT</option>
          </select>
        </div>
      </div>

      <div className="apt-grid">
        <div>
          <label className="apt-label">Preferred Date</label>
          <input
            type="date"
            name="date"
            className="apt-input"
            required
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="apt-label">Preferred Time</label>
          <select
            name="time"
            className="apt-select"
            value={formData.time}
            onChange={handleChange}
          >
            <option>Morning (9 AM - 12 PM)</option>
            <option>Afternoon (12 PM - 4 PM)</option>
            <option>Evening (4 PM - 8 PM)</option>
          </select>
        </div>
      </div>

      <div className="apt-full-width" style={{ marginBottom: '20px' }}>
        <label className="apt-label">Reason for Visit / Symptoms</label>
        <textarea
          name="reason"
          className="apt-textarea"
          placeholder="Briefly describe your problem..."
          rows="3"
          value={formData.reason}
          onChange={handleChange}
        ></textarea>
      </div>

      <button
        type="submit"
        className="apt-btn-submit"
        disabled={status === 'sending'}
        style={{ opacity: status === 'sending' ? 0.7 : 1 }}
      >
        {status === 'sending' ? 'Sending Request...' : 'Confirm Appointment'}
      </button>

      {status === 'success' && (
        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#dcfce7', color: '#166534', borderRadius: '8px', textAlign: 'center' }}>
          ✅ Appointment request sent successfully! We will contact you shortly.
        </div>
      )}

      {status === 'error' && (
        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#fee2e2', color: '#991b1b', borderRadius: '8px', textAlign: 'center' }}>
          ❌ Something went wrong. Please try again or call us directly.
        </div>
      )}

      <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '15px', textAlign: 'center' }}>
        By clicking confirm, you accept our Terms & Conditions.
      </p>
    </form>
  );
};

export default AppointmentForm;
