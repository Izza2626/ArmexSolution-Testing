import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing');

  useEffect(() => {
    const texts = [
      'Initializing', 'Loading Modules', 'Preparing Interface', 
      'Almost Ready', 'Welcome to ARMEX'
    ];
    
    let currentProgress = 0;
    let textIndex = 0;
    
    const interval = setInterval(() => {
      if (currentProgress < 100) {
        currentProgress += 2;
        setProgress(currentProgress);
        
        if (currentProgress % 20 === 0 && textIndex < texts.length - 1) {
          textIndex++;
          setLoadingText(texts[textIndex]);
        }
      } else {
        clearInterval(interval);
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-container">
      {/* Background */}
      <div className="loader-bg">
        <div className="loader-bg-gradient"></div>
        <div className="loader-bg-pattern"></div>
      </div>
      
      {/* Main Loader Content */}
      <div className="loader-content">
        {/* Logo Animation */}
        <div className="loader-logo">
          <div className="loader-logo-ring loader-ring-gold"></div>
          <div className="loader-logo-ring loader-ring-teal"></div>
          <div className="loader-logo-text">
            <span>A</span><span>R</span><span>M</span><span>E</span><span>X</span>
          </div>
        </div>
        
        {/* Loading Bar */}
        <div className="loader-bar-container">
          <div className="loader-bar">
            <div className="loader-bar-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="loader-percentage">{progress}%</div>
        </div>
        
        {/* Loading Text */}
        <div className="loader-text">
          <span className="loader-status">{loadingText}</span>
          <div className="loader-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        {/* Particles */}
        <div className="loader-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="loader-particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 5}s`
            }}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;