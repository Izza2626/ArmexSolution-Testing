import React, { useEffect } from 'react';
import CareerHero from './sections/CareerHero';
import WhyJoinUs from './sections/WhyJoinUs';
import UploadCV from './sections/UploadCV';
import './Career.css';

const Career = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <main className="career-page">
      <CareerHero />
      <WhyJoinUs />
      <UploadCV />
    </main>
  );
};

export default Career;