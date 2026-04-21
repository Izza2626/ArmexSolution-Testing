import React from 'react'
import SEO from '../../seo/SEO'

import ServicesHero from './sections/ServicesHero'
import ServicesBanner from './sections/ServicesBanner'
import ServiceCategories from './sections/ServiceCategories'

const Services = () => {
  return (
    <>
      <SEO page="services" />

      <ServicesHero/>
      <ServicesBanner/>
      <ServiceCategories/>
    </>
  )
}

export default Services
