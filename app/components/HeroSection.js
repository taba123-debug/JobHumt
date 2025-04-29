import React from 'react'

function HeroSection() {
  return (
    <div>
      <section className="bg-white text-center py-24 px-4">
      <div className="max-w-3xl mx-auto mt-24">
        <h1 className="text-5xl font-extrabold text-[#2C2C54] mb-6 ">
          DISCOVER THE WORLD OF </h1>
        <h1 
        className="text-[#6C5CE7] mt-5 text-5xl font-extrabold">BUSINESS DEVELOPMENT .
        </h1>
        <p className="text-lg text-gray-700 mb-8 mt-10">
          ''Discover top-tier remote roles, hand-picked for business  professionals , support leads. 
          Job Hunt made easy — powered by smart admin posting & curated opportunities.''
        </p>
        {/* <button className="bg-gray-300  mr-10 text-black px-6 py-3  font-semibold  hover:text-[#6C5CE7] transition">
          Get Started
        </button> */}
        <button className="bg-gray-300 text-black px-6 py-3 rounded-2xl font-semibold hover:bg-[#6C5CE7] hover:text-white transition">
          Explore Jobs
        </button>
      </div>
    </section>
    </div>
  )
}
export default HeroSection

