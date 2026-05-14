import React from 'react'
import aboutImg from "../../public/about.jpg"
const About = () => {
  return (
    <section id='about-us' className='scroll-mt-24 py-10'>
      <div className="w-container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
    
              <h2
            className="text-xl md:text-3xl font-bold mb-6"
            style={{ color: "#1a3a50", lineHeight: 1.2 }}
          >
            Looking for a{" "}
            <span style={{ color: "#2f7bb4", fontStyle: "italic" }}>cleaner you can trust?</span>
          </h2>
          <p>At First Choice Domestic, our staff are experienced, reliable, insured and police checked so you can feel completely at ease in your own home. We offer flexible services tailored to fit your schedule and needs.

</p>

        </div>
        <div>
          <img src={aboutImg} alt="About us" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  )
}

export default About
