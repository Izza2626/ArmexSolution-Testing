import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import "./HomeServices.css";

const services = [
  {
    title: "Shop Drawings",
    subtitle: "Constructible RO drawings",
    image:
      "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "BIM Modeling",
    subtitle: "3D reinforcement modeling",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Bar Bending Schedule",
    subtitle: "Fabrication ready BBS",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Bar Bending Schedule",
    subtitle: "Fabrication ready BBS",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200&auto=format&fit=crop",
  },
];

// 🔥 Reusable Card Component
const ServiceCard = ({ data, className = "" }) => (
  <motion.div className={`serviceCard ${className}`} whileHover={{ scale: 1.02 }}>
    <img src={data.image} alt="" />

    <div className="serviceOverlay">
      <div>
        <h3>{data.title}</h3>
        <p>{data.subtitle}</p>
      </div>

      <button className="serviceBtn">
        <FiArrowUpRight />
      </button>
    </div>
  </motion.div>
);

const HomeServices = () => {
  return (
    <section className="homeServices">
      <div className="homeServices-container">

        <div className="homeServices-header">
          <span>POPULAR</span>
          <h2>Our Most Requested Services</h2>
        </div>

        <div className="homeServices-layout">

          {/* Large Card */}
          <ServiceCard data={services[0]} className="largeCard" />

          {/* Right Grid */}
          <div className="smallGrid">
            <ServiceCard data={services[1]} />
            <ServiceCard data={services[2]} />
            <ServiceCard data={services[3]} className="wideCard" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeServices;