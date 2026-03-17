import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import "./HomeServices.css";

const services = [
  {
    title: "Rebar Detailing",
    subtitle: "Precision reinforcement detailing",
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
    title: "Shop Drawings",
    subtitle: "Constructible RC drawings",
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
          <motion.div
            className="serviceCard largeCard"
            whileHover={{ scale: 1.02 }}
          >
            <img src={services[0].image} alt="" />

            <div className="serviceOverlay">
              <div>
                <h3>{services[0].title}</h3>
                <p>{services[0].subtitle}</p>
              </div>

              <button className="serviceBtn">
                <FiArrowUpRight />
              </button>
            </div>
          </motion.div>

          {/* Right Grid */}
          <div className="smallGrid">

            <motion.div
              className="serviceCard"
              whileHover={{ scale: 1.02 }}
            >
              <img src={services[1].image} alt="" />

              <div className="serviceOverlay">
                <div>
                  <h3>{services[1].title}</h3>
                  <p>{services[1].subtitle}</p>
                </div>

                <button className="serviceBtn">
                  <FiArrowUpRight />
                </button>
              </div>
            </motion.div>

            <motion.div
              className="serviceCard"
              whileHover={{ scale: 1.02 }}
            >
              <img src={services[2].image} alt="" />

              <div className="serviceOverlay">
                <div>
                  <h3>{services[2].title}</h3>
                  <p>{services[2].subtitle}</p>
                </div>

                <button className="serviceBtn">
                  <FiArrowUpRight />
                </button>
              </div>
            </motion.div>

            <motion.div
              className="serviceCard wideCard"
              whileHover={{ scale: 1.02 }}
            >
              <img src={services[3].image} alt="" />

              <div className="serviceOverlay">
                <div>
                  <h3>{services[3].title}</h3>
                  <p>{services[3].subtitle}</p>
                </div>

                <button className="serviceBtn">
                  <FiArrowUpRight />
                </button>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeServices;