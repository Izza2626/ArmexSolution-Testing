import React, { useState } from "react";
import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiClock,
  FiUser,
  FiSend,
  FiMessageSquare,
  FiCheckCircle,
  FiGlobe
} from "react-icons/fi";
import "./ContactForm.css";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: ""
};

const contactInfo = [
  {
    icon: <FiMapPin />,
    title: "Corporate Office",
    line1: "Chennai, Tamil Nadu, India - 600001",
    color: "#C9A22D"
  },
  {
    icon: <FiMail />,
    title: "Mail Us",
    line1: "admin@armexsolutions.com",
    link: "mailto:admin@armexsolutions.com"
  },
  {
    icon: <FiPhone />,
    title: "Call Us",
    line1: "+91 93427 61826",
    link: "tel:+919840000000"
  },
  {
    icon: <FiClock />,
    title: "Working Hours",
    line1: "Mon - Fri, 9:00 AM - 6:00 PM IST"
  }
];

const services = [
  "BIM-Driven 3D Rebar Modelling",
  "Precision 2D Reinforcement Detailing & Shop Drawings",
  "Optimized Bar Bending Schedules (BBS)",
  "Model-Based Rebar Estimation & Quantity Intelligence",
  "Integrated GA Drawings & Structural Coordination",
  "Site Support & Reinforcement Reconciliation"
];

const ContactForm = () => {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ submitted: false, message: "" });

  const handleChange = ({ target: { name, value } }) =>
    setFormData(prev => ({ ...prev, [name]: value }));

  const handleSubmit = e => {
    e.preventDefault();

    setStatus({
      submitted: true,
      message: "Thank you! We'll contact you within 2 hours."
    });

    setTimeout(() => {
      setStatus({ submitted: false, message: "" });
      setFormData(initialForm);
    }, 3000);
  };

  return (
    <section className="cf-section" id="contactF">
      <div className="cf-bg-gradient"></div>
      <div className="cf-shape cf-shape-1"></div>
      <div className="cf-shape cf-shape-2"></div>
      <div className="cf-shape cf-shape-3"></div>

      <div className="cf-container">

        {/* Header */}
        <div className="cf-header">
          <span className="cf-subtitle">CONTACT US</span>
          <h2 className="cf-title">
            Get In <span>Touch</span>
          </h2>
          <p className="cf-desc">
            Have a question or ready to start your project? Reach out to us
          </p>
        </div>

        <div className="cf-grid">

          {/* Contact Info */}
          <div className="cf-info">
            <h3 className="cf-info-title">Contact Information</h3>

            <div className="cf-info-grid">
              {contactInfo.map((item, i) => (
                <div key={i} className="cf-info-card">
                  <div className="cf-info-icon-wrapper">
                    <div className="cf-info-icon">{item.icon}</div>
                  </div>

                  <div className="cf-info-content">
                    <h4>{item.title}</h4>
                    {item.link ? (
                      <a href={item.link} className="cf-info-link">
                        {item.line1}
                      </a>
                    ) : (
                      <p className="cf-info-text">{item.line1}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

              <div className="cf-info-footer">
                <p className="cf-info-response">
                  <FiClock className="cf-footer-icon" />
                  Average response: within 2 hours
                </p>
                <p className="cf-info-support">
                  <FiGlobe className="cf-footer-icon" />
                  Serving clients across USA, UK, UAE & India
                </p>
              </div>
          </div>

          {/* Form */}
          <div className="cf-form-wrapper">
            <div className="cf-form-card">
              <p className="cf-form-title">
                Our Experts Can Help You Get the Best Out of Our Your Business
              </p>

              {status.submitted ? (
                <div className="cf-success">
                  <FiCheckCircle className="cf-success-icon" />
                  <p>{status.message}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="cf-form">

                  {/* Input Helper */}
                  {[
                    { label: "Full Name *", name: "name", icon: <FiUser />, type: "text", required: true, placeholder: "Full Name" },
                    { label: "Email Address *", name: "email", icon: <FiMail />, type: "email", required: true, placeholder: "abc@example.com" },
                    { label: "Phone Number", name: "phone", icon: <FiPhone />, type: "tel", placeholder: "+91 98400 00000" }
                  ].map((field, i) => (
                    <div key={i} className="cf-field">
                      <label>{field.label}</label>
                      <div className="cf-field-input">
                        {field.icon}
                        <input
                          {...field}
                          value={formData[field.name]}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  ))}

                  {/* Service */}
                  <div className="cf-field">
                    <label>Service Interested In</label>
                    <div className="cf-field-input">
                      <FiMessageSquare className="cf-field-icon" />
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service</option>
                        {services.map((s, i) => (
                          <option key={i} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="cf-field cf-field-full">
                    <label>Your Message *</label>
                    <div className="cf-field-input cf-textarea">
                      <FiMessageSquare className="cf-field-icon" />
                      <textarea
                        name="message"
                        rows="4"
                        required
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <button type="submit" className="cf-submit-btn">
                    <span>Send Message</span>
                    <FiSend className="cf-submit-icon" />
                    <div className="cf-btn-glare"></div>
                  </button>

                  <p className="cf-privacy">
                    By submitting, you agree to our privacy policy.
                    We'll respond within 2 hours.
                  </p>

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;