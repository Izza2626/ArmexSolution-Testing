import React, { useEffect, useRef } from "react";
import { FiMessageCircle, FiCheckCircle, FiArrowRight, FiMail, FiPhone,FiUsers, FiMapPin } from "react-icons/fi";
import "./ConnectSection.css";

const ConnectSection = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("cn-image-visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const reasons = [
    "10+ years experience",
    "2 hour response",
    "500+ projects",
    "Global standards"
  ];

  const images = [
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Team meeting",
      delay: "0s"
    },
    {
      url: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Engineer working",
      delay: "0.2s"
    },
    {
      url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Construction site",
      delay: "0.4s"
    }
  ];

  return (
    <section className="cn-section">
      {/* Background Pattern */}
      <div className="cn-bg-pattern"></div>
      
      <div className="cn-container">
        
        {/* Left - Image Collage */}
        <div className="cn-collage">
          {images.map((img, index) => (
            <div
              key={index}
              className={`cn-collage-item cn-item-${index + 1}`}
              ref={el => imageRefs.current[index] = el}
              style={{ animationDelay: img.delay }}
            >
              <img src={img.url} alt={img.alt} />
              <div className="cn-item-overlay">
                {index === 0 && <FiUsers className="cn-overlay-icon" />}
                {index === 1 && <FiMail className="cn-overlay-icon" />}
                {index === 2 && <FiMapPin className="cn-overlay-icon" />}
              </div>
            </div>
          ))}

          {/* Floating Contact Cards */}
          <div className="cn-float-card cn-float-1">
            <FiMessageCircle />
            <span>Let's Talk</span>
          </div>
          <div className="cn-float-card cn-float-2">
            <FiPhone />
            <span>24/7 Support</span>
          </div>
        </div>

        {/* Right - Content */}
        <div className="cn-content">
          <div className="cn-content-wrapper">
            <span className="cn-subtitle">CONNECT WITH US</span>
            <h2 className="cn-title">
              Ready to start <span>your project?</span>
            </h2>
            
            <p className="cn-desc">
              Share your requirements with us and get expert assistance within 2 hours
            </p>

            <div className="cn-reasons">
              {reasons.map((reason, index) => (
                <div key={index} className="cn-reason-item">
                  <FiCheckCircle className="cn-reason-icon" />
                  <span>{reason}</span>
                </div>
              ))}
            </div>

            <div className="cn-stats-mini">
              <div className="cn-stat-mini">
                <span className="cn-stat-number">24/7</span>
                <span className="cn-stat-label">Support</span>
              </div>
              <div className="cn-stat-mini">
                <span className="cn-stat-number">2h</span>
                <span className="cn-stat-label">Response</span>
              </div>
              <div className="cn-stat-mini">
                <span className="cn-stat-number">100%</span>
                <span className="cn-stat-label">Satisfaction</span>
              </div>
            </div>

            <div className="cn-hint">
              <span>Fill the form below</span>
              <FiArrowRight className="cn-hint-icon" />
              <div className="cn-hint-glow"></div>
            </div>
          </div>
        </div>

      </div>

      {/* Animated Particles */}
      <div className="cn-particles">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="cn-particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`
          }}></div>
        ))}
      </div>
    </section>
  );
};

export default ConnectSection;