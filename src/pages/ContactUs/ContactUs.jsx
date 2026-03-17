import React from 'react';
import ContactHero from './sections/ContactHero.jsx';
// import ContactInfo from './Sections/ContactInfo';
// import ContactForm from './Sections/ContactForm';
// import Map from './Sections/Map';
import './ContactUs.css';
import ConnectSection from './sections/ConnectSection.jsx';
import ContactForm from './sections/ContactForm.jsx';

const Contact = () => {
  return (
    <>
      {/* SEO removed since component doesn't exist */}
      
      <main className="contact-page">
        <ContactHero />
        <ConnectSection/>
        <ContactForm/>
      </main>
    </>
  );
};

export default Contact;