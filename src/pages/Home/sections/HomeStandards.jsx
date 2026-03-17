import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  GiEarthAmerica,
  GiMaterialsScience,
  GiGearHammer
} from "react-icons/gi";

import {
  FaFlag,
  FaAward,
  FaCertificate,
  FaCheckCircle
} from "react-icons/fa";

import { MdOutlineVerified } from "react-icons/md";

import "./HomeStandards.css";

const standards = [
  {
    code: "BS 8666",
    name: "British Standards",
    icon: <FaFlag />,
  },
  {
    code: "ACI 318",
    name: "American Concrete Institute",
    icon: <GiEarthAmerica />,
  },
  {
    code: "EUROCODE 2",
    name: "European Structural Code",
    icon: <GiGearHammer />,
  },
  {
    code: "ASTM",
    name: "Testing & Materials",
    icon: <GiMaterialsScience />,
  },
  {
    code: "IS 456",
    name: "Indian Standards",
    icon: <FaFlag />,
  },
  {
    code: "ISO 9001",
    name: "Quality Management",
    icon: <FaAward />,
  }
];

const certifications = [
  { name: "ISO 9001:2015", icon: <FaCertificate /> },
  { name: "BIM Level 2", icon: <MdOutlineVerified /> },
  { name: "CHAS Approved", icon: <FaCheckCircle /> },
  { name: "Industry Certified", icon: <FaAward /> }
];

const HomeStandards = () => {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section className="standardsSection" ref={ref}>

      <div className="standardsContainer">

        <motion.div
          className="standardsHeader"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: .6 }}
        >
          <span className="standardsTag">
            GLOBAL COMPLIANCE
          </span>

          <h2>
            Built on <span>International Standards</span>
          </h2>

          <p>
            Our engineering and detailing processes follow globally
            recognised construction and quality frameworks.
          </p>
        </motion.div>


        <div className="standardsGrid">

          {standards.map((item, i) => (

            <motion.div
              key={i}
              className="standardCard"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * .08 }}
            >

              <div className="cardGlow"></div>

              <div className="standardIcon">
                {item.icon}
              </div>

              <h3>{item.code}</h3>
              <p>{item.name}</p>

            </motion.div>

          ))}

        </div>


        <motion.div
          className="certifications"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: .5 }}
        >

          {certifications.map((item, i) => (

            <div className="certBadge" key={i}>
              {item.icon}
              <span>{item.name}</span>
            </div>

          ))}

        </motion.div>

      </div>

    </section>
  );
};

export default HomeStandards;