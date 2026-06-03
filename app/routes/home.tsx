import React from 'react'
import About from '~/components/About'
import Burner from '~/components/Burner'
import ContactUs from '~/components/ContactUs'
import Hero from '~/components/Hero'
import HowItWorks from '~/components/HowItWorks'
import ImageCarousel from '~/components/ImageCarousel'
import Services from '~/components/Services'
import Testimonials from '~/components/Testimonials'
import WhyUs from '~/components/WhyUs'

const home = () => {
  return (
    <div>
      <ImageCarousel onOpenModal={() => {}} />
     <About/>
    <Services/>
     <Hero/>
     <Burner/>
     <HowItWorks/>
     <WhyUs/>
     {/* <Testimonials/> */}
     {/* <ContactUs/> */}
    </div>
  )
}

export default home
