import React from 'react'
import About from '~/components/About'
import Burner from '~/components/Burner'
import ContactUs from '~/components/ContactUs'
import Hero from '~/components/Hero'
import HowItWorks from '~/components/HowItWorks'
import ImageCarousel from '~/components/ImageCarousel'
import Rates from '~/components/rates'
import Services from '~/components/Services'
import Testimonials from '~/components/Testimonials'
import WhyUs from '~/components/WhyUs'
import { useBookingModal } from '~/context/BookingModalContext'

const home = () => {
  const { openModal } = useBookingModal()

  return (
    <div>
      <ImageCarousel onOpenModal={openModal} />

      <About />
      <Rates />
      <Services />
      <Hero />
      <Burner />
      <HowItWorks />
      <WhyUs />
      {/* <Testimonials/> */}
      {/* <ContactUs/> */}
    </div>
  )
}

export default home
