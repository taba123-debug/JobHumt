import React from 'react'
import testiminials from '../data/testiminials'
function Testimonials() {
  return (
    <div className=" text-black px-4 py-20 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#2C2C54]">
        What Our Users Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {testiminials.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-xl border-blue-500 hover:shadow-md cursor-pointer transition">
            <div className="flex items-center gap-4 mb-4">
              <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
              <div>
                <h4 className="text-lg font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.email}</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm italic">"{t.feedback}"</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
