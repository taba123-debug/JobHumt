import React from 'react';
import { FaLaptop } from 'react-icons/fa';

const guides = [
  {
    icon: <FaLaptop className="h-10 w-10 text-[#6C5CE7]" />,
    title: 'How to Use Job Hunt ?',
    description: 'Create your profile, browse jobs, and apply directly. It’s built for remote job seekers and startup-ready talent.',
  },
  {
    icon: <FaLaptop className="h-10 w-10 text-[#6C5CE7]" />,
    title: 'Write Better Applications',
    description: 'Customize your cover letter and focus on real impact. Tailored applications get noticed first.',
  },
  {
    icon: <FaLaptop className="h-10 w-10 text-[#6C5CE7]" />,
    title: 'Get Noticed by Employers',
    description: 'Complete your profile, verify skills, and showcase relevant work or GitHub links for visibility.',
  },
];

function Guides() {
  return (
    <section className=" py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
        <span className='text-[#6C5CE7]'>Visual Guides </span>  to Get Started
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="bg-gray-50 shadow-xl p-6 rounded-xl  hover:shadow-lg transition cursor-pointer text-left"
            >
              <div className="mb-4">{guide.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{guide.title}</h3>
              <p className="text-gray-600 text-sm">{guide.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Guides;
