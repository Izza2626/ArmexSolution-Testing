import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './HomeWhyUs.css';

import HomeWhy from '../../../assets/images/Home/HomeWhy.jpg'

const HomeWhyUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: "10+", label: "Years Experience", delay: 0.3 },
    { number: "100+", label: "Projects", delay: 0.4 },
    { number: "10+", label: "Countries Served", delay: 0.5 },
    { number: "99.9%", label: "Accuracy Rate", delay: 0.6 }
  ];

  return (
    <section className="homeWhyUs" ref={ref}>
      {/* Background Image with Dark Overlay */}
      <div className="homeWhyUs-bg">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Construction site background"
        />
        <div className="homeWhyUs-overlay"></div>
      </div>

      {/* Compact Banner Container */}
      <div className="homeWhyUs-banner">
        <div className="homeWhyUs-container">
          {/* Left Content */}
          <motion.div 
            className="homeWhyUs-left"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="homeWhyUs-tag">WHY CHOOSE US</span>
            <h2 className="homeWhyUs-title">
              Engineering Excellence <span>You Can Trust</span>
            </h2>
            <p className="homeWhyUs-description">
              With over a decade of experience in rebar detailing, we've built a reputation for precision, reliability, and innovation.
            </p>
            <br />
            <p className="homeWhyUs-description">
              Our commitment to quality ensures your projects are built on a solid foundation.
            </p>
          </motion.div>

          {/* Right Content - Stats with Animation */}
          <motion.div 
            className="homeWhyUs-right"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="homeWhyUs-stat"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: stat.delay,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.span 
                  className="homeWhyUs-statNumber"
                  animate={inView ? { 
                    scale: [1, 1.2, 1],
                    textShadow: [
                      "0 0 20px rgba(201, 162, 45, 0.3)",
                      "0 0 40px rgba(201, 162, 45, 0.7)",
                      "0 0 20px rgba(201, 162, 45, 0.3)"
                    ]
                  } : {}}
                  transition={{ 
                    duration: 2, 
                    delay: stat.delay + 0.3,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  {stat.number}
                </motion.span>
                <span className="homeWhyUs-statLabel">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeWhyUs;