import React from 'react'
import features from '../data/features'
function Features() {
  return (
    <div>
       <div className="bg-white text-black px-4 py-20 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#2C2C54]">
        Services We Offer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className=" bg-white p-6 rounded-xl shadow-gray-400 shadow transition-all duration-300 
                hover:shadow-xl hover:-translate-y-1 active:scale-95 cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-[#6C5CE7] mb-2">{feature.title}</h3>
            <p className="text-gray-700 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Features
