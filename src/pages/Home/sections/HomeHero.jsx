import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './HomeHero.css';

    const heroSlides = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        title: 'REBAR',
        title2: 'DETAILING',
        badge: 'PREMIUM',
        expertise: 'BS 8666 • ACI 318',
        description: 'Precision reinforcement detailing for global construction projects. Code-compliant drawings with 99.9% accuracy.',
        button1: 'Explore More',
        button2: 'Contact Us',
        tag: 'REBAR SPECIALISTS'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        title: 'BIM',
        title2: 'MODELING',
        badge: 'LOD 400',
        expertise: 'CLASH-FREE • REVIT',
        description: '3D rebar modeling with clash detection for seamless construction. BIM coordination at its finest.',
        button1: 'Explore More',
        button2: 'Contact Us',
        tag: 'BIM EXPERTS'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        title: 'BAR',
        title2: 'BENDING',
        badge: 'SCHEDULES',
        expertise: '35% LESS WASTE',
        description: 'Accurate bar bending schedules for fabrication. Optimized layouts that reduce material waste and cost.',
        button1: 'Explore More',
        button2: 'Contact Us',
        tag: 'BBS EXPERTS'
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        title: 'SHOP',
        title2: 'DRAWINGS',
        badge: 'RC DETAILS',
        expertise: '100% BUILDABLE',
        description: 'Constructible RC shop drawings for contractors. Site-friendly details that eliminate conflicts.',
        button1: 'Explore More',
        button2: 'Contact Us',
        tag: 'DRAFTING PROS'
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        title: 'BIM',
        title2: 'COORDINATION',
        badge: 'INTEGRATED',
        expertise: '500+ PROJECTS',
        description: 'Advanced BIM workflows for streamlined construction. Coordinated models for perfect execution.',
        button1: 'Explore More',
        button2: 'Contact Us',
        tag: 'COORDINATION PROS'
    }
    ];

const HomeHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState(null);

  return (
    <section className="home-hero">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={1500}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => setSwiper(swiper)}
        className="hero-swiper"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="hero-slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Netflix-style gradient overlay - edge to edge */}
              <div className="overlay-gradient"></div>
              <div className="overlay-bottom"></div>
              
              {/* Content - positioned mid-bottom */}
              <div className="hero-content">
                {/* Tag */}
                <div className="hero-tag">{slide.tag}</div>

                {/* Title */}
                <div className="title-block">
                  <h1 className="title-line1">{slide.title}</h1>
                  <h1 className="title-line2">{slide.title2}</h1>
                </div>

                {/* Industry Info Row */}
                <div className="info-row">
                  <span className="badge">{slide.badge}</span>
                  <span className="expertise">{slide.expertise}</span>
                </div>

                {/* Description */}
                <p className="description">{slide.description}</p>

                {/* Button Row */}
                <div className="button-row">
                  <button className="btn-primary">
                    {slide.button1}
                    <span className="btn-arrow">→</span>
                  </button>
                </div>

                {/* Industry Standards */}
              </div>

              {/* Slide Counter */}
              <div className="slide-counter">
                <span className="counter-current">0{activeIndex + 1}</span>
                <span className="counter-total">/05</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Next | Prev Buttons at Bottom */}
      <div className="custom-nav">
        <button 
          className="nav-btn prev-btn" 
          onClick={() => swiper?.slidePrev()}
        >
          ← PREV
        </button>
        <span className="nav-divider">|</span>
        <button 
          className="nav-btn next-btn" 
          onClick={() => swiper?.slideNext()}
        >
          NEXT →
        </button>
      </div>
    </section>
  );
};

export default HomeHero;