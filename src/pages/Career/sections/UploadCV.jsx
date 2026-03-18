import React, { useState } from 'react';
import { 
  FiUpload, 
  FiFile, 
  FiCheckCircle, 
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend
} from 'react-icons/fi';
import './UploadCV.css';

const UploadCV = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: ''
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setUploadStatus('File selected: ' + file.name);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setUploadStatus('Application submitted successfully! We\'ll review your CV.');
    setTimeout(() => {
      setUploadStatus('');
      setSelectedFile(null);
      setFormData({ name: '', email: '', phone: '', position: '' });
    }, 3000);
  };

  return (
    <section className="ucv-section">
      <div className="ucv-container">
        
        {/* Header */}
        <div className="ucv-header">
          <span className="ucv-subtitle">APPLY NOW</span>
          <h2 className="ucv-title">
            Upload Your <span>CV</span>
          </h2>
          <p className="ucv-desc">
            No current openings? No problem. Send us your CV and we'll keep you in mind for future opportunities
          </p>
        </div>

        <div className="ucv-grid">
          
          {/* Left - Form */}
          <div className="ucv-form-card">
            <h3 className="ucv-form-title">Send Your Application</h3>
            
            <form onSubmit={handleSubmit} className="ucv-form">
              
              {/* Name */}
              <div className="ucv-field">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Email */}
              <div className="ucv-field">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                />
              </div>

              {/* Phone */}
              <div className="ucv-field">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 98400 00000"
                />
              </div>

              {/* Position */}
              <div className="ucv-field">
                <label>Position Interested In</label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                >
                  <option value="">Select a role</option>
                  <option value="Rebar Detailer">Rebar Detailer</option>
                  <option value="BIM Coordinator">BIM Coordinator</option>
                  <option value="Structural Engineer">Structural Engineer</option>
                  <option value="QA/QC Specialist">QA/QC Specialist</option>
                  <option value="Project Manager">Project Manager</option>
                </select>
              </div>

              {/* File Upload */}
              <div className="ucv-field">
                <label>Upload CV *</label>
                <div className="ucv-file-input">
                  <input
                    type="file"
                    id="cv-upload"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                  />
                  <label htmlFor="cv-upload" className="ucv-file-label">
                    <FiUpload className="ucv-upload-icon" />
                    <span>{selectedFile ? selectedFile.name : 'Choose file (PDF, DOC)'}</span>
                  </label>
                </div>
              </div>

              {/* Status Message */}
              {uploadStatus && (
                <div className="ucv-status">
                  <FiCheckCircle className="ucv-status-icon" />
                  <span>{uploadStatus}</span>
                </div>
              )}

              {/* Submit Button */}
              <button type="submit" className="ucv-submit-btn">
                <FiSend className="ucv-submit-icon" />
                Submit Application
              </button>

            </form>
          </div>

          {/* Right - Contact Info */}
          <div className="ucv-info-card">
            <h3 className="ucv-info-title">HR Contact</h3>
            
            <div className="ucv-info-list">
              <div className="ucv-info-item">
                <FiMail className="ucv-info-icon" />
                <div>
                  <span className="ucv-info-label">Email</span>
                  <a href="mailto:careers@armexsolutions.com">careers@armexsolutions.com</a>
                </div>
              </div>

              <div className="ucv-info-item">
                <FiPhone className="ucv-info-icon" />
                <div>
                  <span className="ucv-info-label">Phone</span>
                  <a href="tel:+919840000000">+91-98400 00000</a>
                </div>
              </div>

              <div className="ucv-info-item">
                <FiMapPin className="ucv-info-icon" />
                <div>
                  <span className="ucv-info-label">Office</span>
                  <span>Chennai, Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            <div className="ucv-note">
              <FiFile className="ucv-note-icon" />
              <p>
                We accept .pdf, .doc, .docx files (Max 5MB). 
                All applications are kept confidential and reviewed by our HR team.
              </p>
            </div>

            <div className="ucv-privacy">
              <FiCheckCircle className="ucv-privacy-icon" />
              <span>Your data is protected by our privacy policy</span>
            </div>
          </div>

        </div>

        {/* Bottom Note */}
        <div className="ucv-bottom-note">
          <p>
            By submitting your application, you agree to our 
            <a href="/privacy-policy"> Privacy Policy</a> and 
            <a href="/terms-conditions"> Terms of Service</a>.
          </p>
        </div>

      </div>
    </section>
  );
};

export default UploadCV;