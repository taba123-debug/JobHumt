import React from "react";
import Link from "next/link";

async function getAllJobs() {
  let response = await fetch("http://localhost:1337/api/jobs");
  let res = await response.json();
  return res.data;
}

async function page() {
  const jobs = await getAllJobs();

  return (
    <div className="min-h-screen py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl mt-20 font-bold text-center mb-20 text-[#2C2C54]">
          APPLY FOR YOUR DREAM{" "}
          <span className="text-[#6C5CE7] mt-5 text-5xl font-extrabold">
            JOBS
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobs.map((singlejob) => (
            <div
              key={singlejob.id}
              className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-1 transition-all duration-600"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-semibold text-[#6C5CE7]">
                  {singlejob.JobTitle}
                </h3>
                <span className="text-sm text-white bg-[#6C5CE7] px-3 py-1 rounded-full">
                  {singlejob.Type}
                </span>
              </div>
              <p className="text-gray-500 mb-2">
                <strong>Company: </strong> {singlejob.company}
              </p>
              <p className="text-gray-500 mb-2">
                <strong>Location:</strong> {singlejob.location}
              </p>
              <p className="text-gray-500 mb-4">{singlejob.description}</p>
              <Link
                href={`/details/${singlejob.ID_data}`}
                className="inline-block border-2xl p-2 bg-[#6C5CE7] text-white rounded-full hover:cursor-pointer hover:text-black"
              >
                View More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
