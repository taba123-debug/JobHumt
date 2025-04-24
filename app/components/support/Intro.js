import React from 'react';
import Image from 'next/image';
// import supportIllustration from '/images/illustion_1.png'

function Intro() {
  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mt-20">
       {/* Text:Content for Help ? */}
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-snug">
            Need Help? <span className="text-[#6C5CE7]">We’ve Got You Covered.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Whether you're applying for jobs or managing your profile, our support center helps you get the most out of Job Junction.
          </p>
          <p className="text-md text-gray-500">
            Explore FAQs, visual guides, and direct support — everything tailored to help you thrive in your job hunt.
          </p>
        </div>

        {/*  Illustration */}
        <div className="w-full h-full flex justify-center">
          <Image 
            src="/images/illustion_1.png"
            alt="Support Illustration" 
            width={500} 
            height={500} 
            className="w-full max-w-sm object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Intro;
