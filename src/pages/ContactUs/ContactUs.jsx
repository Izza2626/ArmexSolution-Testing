import React from 'react'
import SEO from '../../seo/SEO'

import ContactHero from './sections/ContactHero.jsx';
import './ContactUs.css';
import ConnectSection from './sections/ConnectSection.jsx';
import ContactForm from './sections/ContactForm.jsx';


const Contact = () => {
  return (
    <>
      <SEO page="contact" />

      <ContactHero />
      <ConnectSection/>
      <ContactForm/>
    </>
  )
}

export default Contact


