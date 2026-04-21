import SEO from '../../seo/SEO'
import HomeHero from './sections/HomeHero';
import HomeIntro from './sections/HomeIntro';
import HomeWhyUs from './sections/HomeWhyUs';
import HomeServices from './sections/HomeServices';
import WhatsApart from './sections/WhatsApart';
import './Home.css';

const Home = () => {
  return (
    <>
      <SEO page="home" />

      <HomeHero />
      <HomeIntro />
      <HomeWhyUs />
      <HomeServices />
      <WhatsApart />
    </>
  );
};

export default Home;