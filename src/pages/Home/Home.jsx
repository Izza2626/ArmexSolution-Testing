import { Helmet } from 'react-helmet-async';
import HomeHero from './sections/HomeHero';
import HomeIntro from './sections/HomeIntro';
// Import other sections
import './Home.css';
import HomeStandards from './sections/HomeStandards';
import HomeWhyUs from './sections/HomeWhyUs';
import HomeServices from './sections/HomeServices';
import HomeTestimonials from './sections/HomeTestimonials';
import WhatsApart from './sections/WhatsApart';



const Home = () => {
  return (
    <>
      <Helmet>
        <title>ARMEX SOLUTIONS - Premier Rebar Detailing Services | BIM Experts</title>
        <meta name="description" content="ARMEX SOLUTIONS provides accurate, code-compliant rebar detailing services globally. Advanced BIM workflows, 3D modeling, and RC shop drawings for streamlined construction." />
        <meta name="keywords" content="rebar detailing, rebar detailing services, reinforcement detailing, BIM rebar modeling, rebar detailing company, 3D rebar modeling services, bar bending schedules BBS, RC shop drawings" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="ARMEX SOLUTIONS - Premier Rebar Detailing Services" />
        <meta property="og:description" content="Accurate, constructible, and code-compliant rebar detailing services for global construction projects." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://armexsolutions.com" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ARMEX SOLUTIONS - Rebar Detailing Experts" />
        <meta name="twitter:description" content="Precision rebar detailing with advanced BIM workflows. BS, ACI, Eurocode compliant." />
        <meta name="twitter:image" content="/twitter-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://armexsolutions.com" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="ARMEX SOLUTIONS" />
      </Helmet>
      
      <HomeHero />
      <HomeIntro />
      <HomeWhyUs/>
      <HomeServices/>
      <HomeStandards/>
      <HomeTestimonials/>
      <WhatsApart/>
    </>
  );
};

export default Home;