import React, { useState } from "react";
import { 
  FiMapPin, 
  FiMail, 
  FiPhone, 
  FiClock, 
  FiUser, 
  FiSend,
  FiMessageSquare,
  FiCheckCircle
} from "react-icons/fi";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you! We'll contact you within 2 hours."
    });
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormStatus({ submitted: false, success: false, message: "" });
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FiMapPin />,
      title: "Visit Us",
      line1: "Chennai, Tamil Nadu, India - 600001",
      color: "#C9A22D"
    },
    {
      icon: <FiMail />,
      title: "Email Us",
      line1: "admin@armexsolutions.com",
      link: "mailto:admin@armexsolutions.com"
    },
    {
      icon: <FiPhone />,
      title: "Call Us",
      line1: "+91-98400 00000",
      link: "tel:+919840000000"
    },
    {
      icon: <FiClock />,
      title: "Working Hours",
      line1: "Mon - Fri, 9:00 AM - 6:00 PM IST"
    }
  ];

  const services = [
    "3D Rebar Modelling",
    "2D Shop Drawings",
    "Bar Bending Schedules",
    "Rebar Estimation",
    "GA Drawings",
    "Site Support"
  ];

  return (
    <section className="cf-section">
      {/* Background Elements with Gold Gradient */}
      <div className="cf-bg-gradient"></div>
      
      {/* Animated Shapes */}
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
          
          {/* Left - Contact Info Cards */}
          <div className="cf-info">
            <h3 className="cf-info-title">Contact Information</h3>
            
            <div className="cf-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="cf-info-card">
                  <div className="cf-info-icon-wrapper">
                    <div className="cf-info-icon">{info.icon}</div>
                  </div>
                  <div className="cf-info-content">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="cf-info-link">
                        {info.line1}
                      </a>
                    ) : (
                      <p className="cf-info-text">{info.line1}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info - makes box taller to match form */}
            <div className="cf-info-footer">
              <p className="cf-info-response">⏱️ Average response: within 2 hours</p>
              <p className="cf-info-support">🌍 Serving clients across USA, UK, UAE & India</p>
            </div>
          </div>

          {/* Right - Form */}
          <div className="cf-form-wrapper">
            <div className="cf-form-card">
              <h3 className="cf-form-title">Send us a Message</h3>
              
              {formStatus.submitted ? (
                <div className="cf-success">
                  <FiCheckCircle className="cf-success-icon" />
                  <p>{formStatus.message}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="cf-form">
                  
                  {/* Name Field */}
                  <div className="cf-field">
                    <label htmlFor="name">Full Name *</label>
                    <div className="cf-field-input">
                      <FiUser className="cf-field-icon" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="cf-field">
                    <label htmlFor="email">Email Address *</label>
                    <div className="cf-field-input">
                      <FiMail className="cf-field-icon" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="cf-field">
                    <label htmlFor="phone">Phone Number</label>
                    <div className="cf-field-input">
                      <FiPhone className="cf-field-icon" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98400 00000"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="cf-field">
                    <label htmlFor="service">Service Interested In</label>
                    <div className="cf-field-input">
                      <FiMessageSquare className="cf-field-icon" />
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="cf-field cf-field-full">
                    <label htmlFor="message">Your Message *</label>
                    <div className="cf-field-input cf-textarea">
                      <FiMessageSquare className="cf-field-icon" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        rows="4"
                        required
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="cf-submit-btn">
                    <span>Send Message</span>
                    <FiSend className="cf-submit-icon" />
                    <div className="cf-btn-glare"></div>
                  </button>

                  {/* Privacy Note */}
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