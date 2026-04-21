import React, { useEffect, useRef, useState } from "react";
import "./CompanyOverview.css";

import AboutOverview1 from '../../../assets/images/About/AboutOverview1.jpeg';
import AboutOverview2 from '../../../assets/images/About/AboutOverview2.jpeg';
import AboutOverview3 from '../../../assets/images/About/AboutOverview3.jpeg';
import AboutOverview4 from '../../../assets/images/About/AboutOverview4.jpeg';

const CompanyOverview = () => {
  const sectionRef = useRef(null);

  const images = [
    { src: AboutOverview1, alt: "Rebar detailing" },
    { src: AboutOverview2, alt: "Construction site" },
    { src: AboutOverview3, alt: "Global projects" },
    { src: AboutOverview4, alt: "Structural engineering" }
  ];

  return (
    <section className="co-section" ref={sectionRef}>
      <div className="co-bg-circle co-bg-circle-1"></div>
      <div className="co-bg-circle co-bg-circle-2"></div>
      <div className="co-bg-dots"></div>

      <div className="co-container">
        {/* LEFT CONTENT – unchanged */}
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

        {/* RIGHT SIDE – new modern collage */}
        <div className="co-right co-fade-right">
          <div className="co-collage-grid">
            {images.map((img, idx) => (
              <div 
                key={idx} 
                className="co-collage-item"
                style={{ animationDelay: `${idx * 0.1}s` }}
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