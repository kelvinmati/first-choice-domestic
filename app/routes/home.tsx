import React from 'react'
import About from '~/components/About'
import Burner from '~/components/Burner'
import ContactUs from '~/components/ContactUs'
import Hero from '~/components/Hero'
import HowItWorks from '~/components/HowItWorks'
import Services from '~/components/Services'
import WhyUs from '~/components/WhyUs'

const home = () => {
  return (
    <div>
     <Hero/>
     <About/>
    <Services/>
     {/* <Burner/> */}
     <HowItWorks/>
     <WhyUs/>
     {/* <ContactUs/> */}
    </div>
  )
}

export default home
