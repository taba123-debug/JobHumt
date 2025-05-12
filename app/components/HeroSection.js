import React from 'react';
import Link from 'next/link';

async function getAboutData() {
  const result = await fetch("http://localhost:1337/api/abouts");

  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }

  const json = await result.json();
  return json.data;
}

async function HeroSection() {
  const aboutData = await getAboutData();

  const description = aboutData?.[0]?.AboutDescription || "No description is available.";

  return (
    <div>
      <section className="bg-white text-center py-16 px-4 sm:py-20 md:py-24">
        <div className="max-w-3xl mx-auto mt-20 sm:mt-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2C2C54] mb-4 sm:mb-6">
            DISCOVER THE WORLD OF
          </h1>
          <h1 className="text-[#6C5CE7] text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 sm:mt-5">
            BUSINESS DEVELOPMENT.
          </h1>

          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 mt-6 sm:mt-10 px-2 sm:px-4">
            {description}
          </p>

          <Link href="/login">
            <button className="bg-gray-300 text-black px-6 py-3 rounded-2xl font-semibold hover:bg-[#6C5CE7] hover:text-white transition text-sm sm:text-base">
              Explore Jobs
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
