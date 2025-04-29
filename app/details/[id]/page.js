import React from 'react';
import Image from 'next/image';
// This is a Server Component (async)
async function page({ params }) {
   const { id } = params;

  const response = await fetch("http://localhost:1337/api/jobs?populate=*");
  const data = await response.json();
  const jobs = data.data;

  const selectedJob = jobs.find((job) => job.ID_data == id
  );

  if (!selectedJob) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-bold">Job Not Found</h2>
      </div>
    );
  }
  console.log(selectedJob);
  const req=selectedJob.requirements
  console.log(req);

  return (
    <div className="min-h-screen py-15 px-20 md:px-12 flex justify-center ">
      <div className="ml-2 mx-auto w-[750px]  p-10 mt-25 border-blue-800 border-2 rounded-2xl shadow-sm  hover:cursor-pointer">
        <h1 className="text-4xl font-bold text-[#6C5CE7] mb-4">{selectedJob.JobTitle}</h1>
        <p className="text-lg text-gray-700 mb-2"><strong>Company:</strong> {selectedJob.company}</p>
        <p className="text-lg text-gray-700 mb-2"><strong>Location:</strong> {selectedJob.location}</p>
        <p className="text-lg text-gray-700 mb-2"><strong>Type:</strong> {selectedJob.Type}</p>
        <p className="text-lg text-gray-700 mb-2"><strong>Date posted:</strong> {selectedJob.date}</p>

        <div className="my-6">
          <h2 className="text-2xl font-semibold text-[#6C5CE7] mb-2">Job Description</h2>
          <p className="text-gray-600">{selectedJob.description}</p>
        </div>
       
       {selectedJob.requirements && selectedJob.requirements.length > 0 && (
  <div className="my-6">
    <h2 className="text-2xl font-semibold text-[#6C5CE7] mb-2">Requirements</h2>
    
    {(() => {
      const req = selectedJob.requirements[0].children ; // extract list items
      return (
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {req.map((item, index) => (
            <li key={index}>{item.children[0]?.text}</li>
          ))}
        </ul>
      );
    })()}
  </div>
  
)}
        <button className="mt-8 bg-[#6C5CE7] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#5B4DD9] transition">
          Apply Now
        </button>
      </div>
         <div className="mt-30 md:w-1/2 flex justify-center">
              <Image 
                src="/images/illustion_1.png" 
                alt="About Illustration" 
                width={700} 
                height={200} 
                className="rounded-2xl "
              />
            </div>
    </div>
  );
}

export default page;
