import React, { useEffect, useState } from 'react';
import './Loader.css';
import logo from '../../assets/images/logo.png';

const Loader = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHide(true);
    }, 3500); // duration of animation
  }, []);

  return (
    <div className={`loader ${hide ? 'fade-out' : ''}`}>
      
      {/* Logo Animation */}
      <div className="logo-container">
        <img src={logo} className="logo base" alt="logo" />
        <img src={logo} className="logo layer layer1" alt="" />
        <img src={logo} className="logo layer layer2" alt="" />
        <img src={logo} className="logo layer layer3" alt="" />
      </div>

      {/* Loading Text */}
      <p className="loading-text">Loading Experience...</p>

    </div>
  );
};

export default Loader;