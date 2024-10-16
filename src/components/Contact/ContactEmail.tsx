import React from 'react'
import ContactSection from './ContactSection';

export default function ContactEmail() {
  return (
    <>
      <div className="lg:flex lg:flex-row flex-wrap pt-12 text-center dark:text-[#e5dede] md:justify-between md:pt-24 lg:justify-around sm:flex-col sm:justify-between">
        <ContactSection
          title="Contact Support"
          email="contact@femstech.com"
          tel="+491783585315"
        />
        <ContactSection
          title="Contact Careers"
          email="contact@femstech.com"
          tel="+491783585315"
        />
        <ContactSection
          title="Contact Press"
          email="contact@femstech.com"
          tel="+491783585315"
        />
      </div>
    </>
  );
}
