import React from 'react'
import HeroSection from './components/HeroSection'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import About from './components/About'
function page() {
  return (
    <div>
      <HeroSection/>
      <About/>
      <Features/>
      <Testimonials/>
    </div>
  )
}

export default page
