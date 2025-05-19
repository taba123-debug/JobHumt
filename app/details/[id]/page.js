import React from "react";
import Image from "next/image";
import Link from "next/link";

async function page({ params }) {
  const { id } = params;

  const response = await fetch("http://localhost:1337/api/jobs?populate=*");
  const data = await response.json();
  const jobs = data.data;

  const selectedJob = jobs.find((job) => job.ID_data == id);

  if (!selectedJob) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-bold">Job Not Found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-20 flex flex-col lg:flex-row gap-8">
    
      <div className="w-full lg:w-2/3 mt-11 bg-white border-blue-800 border-2 rounded-2xl shadow-md p-6 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#6C5CE7] mb-4">
          {selectedJob.JobTitle}
        </h1>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Company:</strong> {selectedJob.company}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Location:</strong> {selectedJob.location}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Salary:</strong> {selectedJob.Salary}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Type:</strong> {selectedJob.Type}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Date posted:</strong> {selectedJob.date}
        </p>

        <div className="my-6">
          <h2 className="text-2xl font-semibold text-[#6C5CE7] mb-2">
            Job Description
          </h2>
          <p className="text-gray-600">{selectedJob.description}</p>
        </div>

        {selectedJob.requirements && selectedJob.requirements.length > 0 && (
          <div className="my-6">
            <h2 className="text-2xl font-semibold text-[#6C5CE7] mb-2">
              Requirements
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {selectedJob.requirements[0].children.map((item, index) => (
                <li key={index}>{item.children[0]?.text}</li>
              ))}
            </ul>
          </div>
        )}

        <Link
          href={`/applied/${selectedJob.ID_data}`}
          className="inline-block mt-6 px-6 py-3 bg-[#6C5CE7] text-white font-medium rounded-full hover:bg-[#5946d2] transition duration-200"
        >
          Apply Now
        </Link>
      </div>
       <div className="w-full lg:w-2/3 mt-14 flex flex-col items-center lg:items-start">
        <Image
          src="/images/illustion_1.png"
          alt="Job Illustration"
          width={700}
          height={200}
          className="w-full max-w-md h-auto rounded-2xl object-contain"
        />
        <p className="text-gray-500 text-2xl mt-4 px-2 text-center lg:text-left">
          <strong>Note:</strong> Ensure to check the job requirements before applying.
        </p>
      </div>
    </div>
  );
}

export default page;
