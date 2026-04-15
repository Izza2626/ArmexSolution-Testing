import React from 'react'
import AboutHero from './sections/AboutHero'
import CompanyOverview from './sections/CompanyOverview'
import OurExpertise from './sections/OurPresence'
import OurTeam from './sections/OurTeam'
import FAQ from './sections/FAQ'
import WhoWeAre from './sections/WhoWeAre'
import VisionMission from './sections/VisionMission'
import QualityProcess from './sections/QualityProcess'

const AboutUs = () => {
  return (
    <div>
      <AboutHero/>
      <WhoWeAre/>
      <CompanyOverview/>
      <VisionMission/>
      <QualityProcess/>
      <OurExpertise/>
      {/* <OurTeam/> */}
      <FAQ/>
    </div>
  )
}

export default AboutUs
