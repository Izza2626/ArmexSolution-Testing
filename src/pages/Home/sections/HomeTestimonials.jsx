import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./HomeTestimonials.css";

const testimonials = [
  {
    name: "James Walker",
    company: "Structural Project Manager, UK",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Armex Solutions provided highly accurate rebar detailing and bar bending schedules for our residential tower project. Their drawings were clear, fabrication-ready, and helped our site team avoid costly errors.",
  },
  {
    name: "Michael Anderson",
    company: "Senior Structural Engineer, USA",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "We partnered with Armex Solutions for reinforcement detailing and BIM coordination. Their attention to detail and quick turnaround made the entire construction workflow much smoother.",
  },
  {
    name: "Daniel Cooper",
    company: "Construction Director, Europe",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    text: "Armex Solutions delivered precise shop drawings and rebar detailing that met international standards. Their support helped our fabrication team work efficiently and meet strict project deadlines.",
  },
];

const HomeTestimonials = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const changeSlide = (newIndex) => {
    setFade(false);

    setTimeout(() => {
      setIndex(newIndex);
      setFade(true);
    }, 250);
  };

  const prevSlide = () => {
    const newIndex = index === 0 ? testimonials.length - 1 : index - 1;
    changeSlide(newIndex);
  };

  const nextSlide = () => {
    const newIndex = index === testimonials.length - 1 ? 0 : index + 1;
    changeSlide(newIndex);
  };

  useEffect(() => {
    const auto = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(auto);
  }, [index]);

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">

        <h2 className="testimonial-title">Client Testimonials</h2>

        <div className="slider">

          <button className="slider-btn left" onClick={prevSlide}>
            <FiChevronLeft />
          </button>

          <div className={`slide-card ${fade ? "fade-in" : "fade-out"}`}>

            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="client-image"
            />

            <p className="testimonial-text">
              "{testimonials[index].text}"
            </p>

            <div className="stars">
              <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
            </div>

            <h4>{testimonials[index].name}</h4>
            <span>{testimonials[index].company}</span>

          </div>

          <button className="slider-btn right" onClick={nextSlide}>
            <FiChevronRight />
          </button>

        </div>

        <div className="dots">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={i === index ? "dot active" : "dot"}
              onClick={() => changeSlide(i)}
            ></span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeTestimonials;