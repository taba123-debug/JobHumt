import React from 'react';

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
  const requirements=[selectedJob.requirements]
  console.log(requirements);
  return (
    <div className="min-h-screen py-15 px-20 md:px-12 bg-gray-50 ">
      <div className="max-w-4xl mx-auto  p-10 mt-25 rounded-3xl shadow-2xs bg-white">
        <h1 className="text-4xl font-bold text-[#6C5CE7] mb-4">{selectedJob.JobTitle}</h1>
        <p className="text-lg text-gray-700 mb-2"><strong>Company:</strong> {selectedJob.company}</p>
        <p className="text-lg text-gray-700 mb-2"><strong>Location:</strong> {selectedJob.location}</p>
        <p className="text-lg text-gray-700 mb-2"><strong>Type:</strong> {selectedJob.Type}</p>

        <div className="my-6">
          <h2 className="text-2xl font-semibold text-[#6C5CE7] mb-2">Job Description</h2>
          <p className="text-gray-600">{selectedJob.description}</p>
        </div>
       {/* const requirements=[selectedJob.requirements] */}
        {/* {selectedJob.requirements && (
          <div className="my-6">
            <h2 className="text-2xl font-semibold text-[#6C5CE7] mb-2">Requirements</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {selectedJob.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        )} */}

        <button className="mt-8 bg-[#6C5CE7] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#5B4DD9] transition">
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default page;
