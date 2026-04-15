import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './HomeIntro.css';

import HomeIntro1 from '../../../assets/images/Home/HomeIntro1.jpg'
import HomeIntro2 from '../../../assets/images/Home/HomeIntro2.jpg'
import HomeIntro3 from '../../../assets/images/Home/HomeIntro3.jpg'

const HomeIntro = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="homeIntro" ref={ref}>
      {/* Pure White Background */}
      <div className="homeIntro-whiteBg"></div>
      <div className="homeIntro-container">
        {/* Left Column - Image Collage */}
        <motion.div 
          className="homeIntro-imageCollage"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="homeIntro-collageGrid">
            <motion.div 
              className="homeIntro-collageItem homeIntro-collageMain"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={HomeIntro1} alt="Rebar construction" />
              <div className="homeIntro-imageOverlay"></div>
            </motion.div>
            <motion.div 
              className="homeIntro-collageItem homeIntro-collageSmall"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={HomeIntro2} alt="Steel reinforcement" />
            </motion.div>
            <motion.div 
              className="homeIntro-collageItem homeIntro-collageSmall"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={HomeIntro3} alt="Construction worker" />
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div 
          className="homeIntro-content"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          
          <motion.h2 
            className="homeIntro-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Precision in <span>Every Bar</span>
          </motion.h2>
          
          <motion.p 
            className="homeIntro-text"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            ARMEX SOLUTIONS delivers accurate, code-compliant rebar detailing 
            for global construction projects. Advanced BIM workflows ensure 
            clash-free coordination every time.
          </motion.p>

          {/* Mini Stats */}
          <motion.div 
            className="homeIntro-miniStats"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="homeIntro-miniStat">
              <span className="homeIntro-miniNumber" style={{ color: "#C9A22D" }}>100+</span>
              <span className="homeIntro-miniLabel">Projects</span>
            </div>
            <div className="homeIntro-miniStat">
              <span className="homeIntro-miniNumber" style={{ color: "#243F88" }}>10+</span>
              <span className="homeIntro-miniLabel">Countries</span>
            </div>
            <div className="homeIntro-miniStat">
              <span className="homeIntro-miniNumber" style={{ color: "#C9A22D" }}>99.9%</span>
              <span className="homeIntro-miniLabel">Accuracy</span>
            </div>
          </motion.div>

          {/* Standards */}
          <motion.div 
            className="homeIntro-standards"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <span className="homeIntro-standard" style={{ borderColor: "#C9A22D", color: "#C9A22D" }}>BS 8666</span>
            <span className="homeIntro-standard" style={{ borderColor: "#243F88", color: "#243F88" }}>ACI 318</span>
            <span className="homeIntro-standard" style={{ borderColor: "#C9A22D", color: "#C9A22D" }}>EUROCODE</span>
            <span className="homeIntro-standard" style={{ borderColor: "#243F88", color: "#243F88" }}>ISO 9001</span>
          </motion.div>

          {/* CTA Button */}
          <motion.button 
            className="homeIntro-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explore Services</span>
            <span className="homeIntro-ctaArrow">→</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeIntro;