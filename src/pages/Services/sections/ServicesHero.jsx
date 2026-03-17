import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./ServicesHero.css";

const services = [
  {
    title: "3D REBAR",
    subtitle: "MODELLING",
    description:
      "Intelligent 3D reinforcement models with clash detection and constructability validation for complex structures.",
    bg: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    card: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "2D SHOP",
    subtitle: "DRAWINGS",
    description:
      "Fabrication-ready reinforcement shop drawings with clear bar placement, spacing, and bending details.",
    bg: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    card: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "BAR BENDING",
    subtitle: "SCHEDULES",
    description:
      "Accurate bar bending schedules with bar marks, shape codes, cutting lengths, and quantities for fabrication.",
    bg: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    card: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "REBAR",
    subtitle: "ESTIMATION",
    description:
      "Precise rebar quantity takeoffs and weight calculations for project planning and cost management.",
    bg: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    card: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "GA",
    subtitle: "DRAWINGS",
    description:
      "Clear general arrangement drawings showing overall reinforcement layout and structural configuration.",
    bg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    card: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "SITE",
    subtitle: "SUPPORT",
    description:
      "Technical support for on-site implementation, drawing clarifications, and quantity reconciliation.",
    bg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    card: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];

export default function ServiceHero() {
  const [startIndex, setStartIndex] = useState(0);
  const [active, setActive] = useState(0);
  const cardsPerPage = 4;

  const nextSlide = () => {
    const newActive = (active + 1) % services.length;
    setActive(newActive);

    if (newActive >= startIndex + cardsPerPage) {
      setStartIndex(newActive - cardsPerPage + 1);
    }
  };

  const prevSlide = () => {
    const newActive = (active - 1 + services.length) % services.length;
    setActive(newActive);

    if (newActive < startIndex) {
      setStartIndex(newActive);
    }
  };

  const visibleServices = services.slice(startIndex, startIndex + cardsPerPage);

  return (
    <section className="sh-hero">
      {/* Background Image */}
      <div
        className="sh-bg"
        style={{ backgroundImage: `url(${services[active].bg})` }}
      ></div>

      <div className="sh-overlay"></div>

      <div className="sh-container">
        {/* LEFT CONTENT */}
        <div className="sh-content">
          <span className="sh-subtitle">{services[active].subtitle}</span>

          <h1 className="sh-title">{services[active].title}</h1>

          <p className="sh-desc">{services[active].description}</p>

          <button className="sh-btn">Explore Service</button>
        </div>

        {/* CARDS */}
        <div className="sh-cards">
          {visibleServices.map((service, index) => {
            const actualIndex = startIndex + index;

            return (
              <div
                key={actualIndex}
                className={`sh-card ${
                  active === actualIndex ? "sh-active" : ""
                }`}
                onClick={() => setActive(actualIndex)}
              >
                <img
                  src={service.card}
                  alt={service.title}
                  className="sh-card-img"
                />

                <div className="sh-card-overlay"></div>

                <div className="sh-card-content">
                  <span className="sh-card-title">{service.title}</span>
                  <span className="sh-card-subtitle">{service.subtitle}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* NAVIGATION BUTTONS */}
        <div className="sh-nav-bottom">
          <button className="sh-nav-circle" onClick={prevSlide}>
            <FiChevronLeft />
          </button>

          <button className="sh-nav-circle" onClick={nextSlide}>
            <FiChevronRight />
          </button>
        </div>  
      </div>
    </section>
  );
}