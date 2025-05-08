"use client"; 

import React, { useEffect, useState } from 'react';
import { staticImages } from '../data/static_images';

function Testimonials() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    async function fetchFeedbacks() {
      try {
        // res=>fetch data from API
        // data=>convert to json
        // formattedData=>map data to new array with name, email, message
        // data=>setFeedbacks to formattedData
        // data.data=>map data to new array with name, email, message
        // item is the current item in the array
        // each item is an object with name, email, message properties
        // why item is used? because data is an array of objects
        // item is object with name , email , message and each object is an item in the array , like item[0], item[1], item[2] etc
        // item[0] has name, email, message properties , 
        // means each index of array is an object with name, email, message properties
        const res = await fetch("http://localhost:1337/api/feedbacks-infos?pagination[limit]=4");
        const data = await res.json();
    
        const formattedData = data.data.map(item => ({
          name: item.name,
          email: item.email,
          message: item.message
        }));
  
        setFeedbacks(formattedData);
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      }
    }
  
    fetchFeedbacks();
  }, []);
  

  return (
    <div className="text-black px-4 py-20 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#2C2C54]">
        What Our Users Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {feedbacks.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-xl border-blue-500 hover:shadow-md cursor-pointer transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={staticImages[i % staticImages.length]} // move image to image one by one
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="text-lg font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.email}</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm italic">"{t.message}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
