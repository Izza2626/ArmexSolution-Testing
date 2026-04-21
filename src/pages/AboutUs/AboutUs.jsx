import React from 'react'
import SEO from '../../seo/SEO'; // ✅ SEO IMPORT

import AboutHero from './sections/AboutHero'
import CompanyOverview from './sections/CompanyOverview'
import OurExpertise from './sections/OurPresence'
import FAQ from './sections/FAQ'
import WhoWeAre from './sections/WhoWeAre'
import VisionMission from './sections/VisionMission'
import QualityProcess from './sections/QualityProcess'

const AboutUs = () => {
  return (
    <>
      {/* ✅ SEO ADDED */}
      <SEO page="about" />

      <div>
        <AboutHero/>
        <WhoWeAre/>
        <CompanyOverview/>
        <VisionMission/>
        <QualityProcess/>
        <OurExpertise/>
        <FAQ/>
      </div>
    </>
  )
}

export default AboutUs;