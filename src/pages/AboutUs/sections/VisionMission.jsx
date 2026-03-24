import React from "react";
import { FiEye, FiTarget, FiCheckCircle } from "react-icons/fi";
import "./VisionMission.css";

const VisionMission = () => {
  return (
    <section className="vm-section">
      <div className="vm-container">

        {/* HEADER */}
        <div className="vm-header">
          <span className="vm-badge">OUR PURPOSE</span>
          <h2 className="vm-title">
            Vision <span>&</span> Mission
          </h2>
          <p className="vm-desc">
            Driving excellence in reinforcement detailing through innovation and precision
          </p>
        </div>

        {/* CARDS */}
        <div className="vm-grid">

          {/* VISION */}
          <div className="vm-card">
            <div className="vm-icon">
              <FiEye />
            </div>

            <h3>Our Vision</h3>

            <p>
              To be a globally recognized leader in reinforcement detailing,
              delivering precision-driven solutions that strengthen structures
              and set new benchmarks for quality, accuracy, and compliance.
              We aim to continuously expand our expertise and technological
              capabilities to support efficient project execution worldwide.
            </p>

            <div className="vm-points">
              <span><FiCheckCircle /> Global Leadership</span>
              <span><FiCheckCircle /> Innovation Driven</span>
              <span><FiCheckCircle /> Industry Standards</span>
            </div>
          </div>

          {/* MISSION */}
          <div className="vm-card">
            <div className="vm-icon">
              <FiTarget />
            </div>

            <h3>Our Mission</h3>

            <p>
              Our mission is to deliver high-precision reinforcement detailing
              and BIM solutions that meet international standards. Through
              structured workflows and technical excellence, we help clients
              achieve efficient, accurate, and cost-effective project outcomes.
            </p>

            <div className="vm-points">
              <span><FiCheckCircle /> Technical Excellence</span>
              <span><FiCheckCircle /> Quality Focused</span>
              <span><FiCheckCircle /> Efficient Delivery</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VisionMission;