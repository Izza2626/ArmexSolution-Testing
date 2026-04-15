import React, { useEffect, useRef, useState } from "react";
import "./CompanyOverview.css";

import AboutOverview1 from '../../../assets/images/About/AboutOverview1.jpeg';
import AboutOverview2 from '../../../assets/images/About/AboutOverview2.jpeg';
import AboutOverview3 from '../../../assets/images/About/AboutOverview3.jpeg';
import AboutOverview4 from '../../../assets/images/About/AboutOverview4.jpeg';

const CompanyOverview = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const images = [
    { src: AboutOverview1, alt: "Rebar detailing" },
    { src: AboutOverview2, alt: "Construction site" },
    { src: AboutOverview3, alt: "Global projects" },
    { src: AboutOverview4, alt: "Structural engineering" }
  ];

  const handlePieceClick = (index) => {
    // Toggle: click same image to reset, click another to switch
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="co-section" ref={sectionRef}>
      <div className="co-bg-circle co-bg-circle-1"></div>
      <div className="co-bg-circle co-bg-circle-2"></div>
      <div className="co-bg-dots"></div>

      <div className="co-container">
        {/* LEFT CONTENT - unchanged */}
        <div className="co-left co-fade-left">
          <span className="co-badge co-slide-down">OVERVIEW</span>
          <h2 className="co-title">
            Delivering <span>Reliability in Reinforcement</span> Engineering
          </h2>
          <p className="co-desc co-slide-up">
            We deliver professional rebar detailing and BIM modelling services
            that transform structural designs into clear, accurate, and
            buildable reinforcement documentation.
          </p>
          <p className="co-desc co-slide-up">
            By combining engineering expertise with advanced technology, we
            support construction teams in achieving efficient coordination,
            improved constructability, and reliable project delivery.
          </p>
        </div>

        {/* RIGHT SIDE - puzzle square (2x2 grid) */}
        <div className="co-right co-fade-right">
          <div className="co-puzzle-square">
            {images.map((img, idx) => (
              <div
                key={idx}
                className={`co-puzzle-tile ${activeIndex === idx ? "active" : ""} ${
                  activeIndex !== null && activeIndex !== idx ? "disabled" : ""
                }`}
                onClick={() => handlePieceClick(idx)}
              >
                <img src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;