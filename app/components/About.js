import React from 'react';
import Image from 'next/image';
async function getAboutData() {
  const result = await fetch("http://localhost:1337/api/abouts");

  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }

  const json = await result.json();
  return json.data;
}
async function About() {
  const aboutData = await getAboutData();
  const description_Data = aboutData?.[0]?.HeroAbout || "No  Hero description is not  available.";


  return (
    <div className="bg-white text-black py-20 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20">
        
        {/* About content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-[#2C2C54]">About Remote Job Hunt</h2>
          <p className="text-gray-600 mb-4 text-lg leading-relaxed">
            {description_Data}
          </p>
       
          <div className="mt-8">
            <button className="bg-[#6C5CE7] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#5A4CD9] transition">
              Get Started  Now
            </button>
          </div>
        </div>

        {/* Image content */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image 
            src="/images/illustion_1.png" 
            alt="About Illustration" 
            width={500} 
            height={500} 
            className="rounded-2xl "
          />
        </div>

      </div>
    </div>
  );
}

export default About;
