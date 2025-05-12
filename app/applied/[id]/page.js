"use client";
import React, { useState } from "react";

const ApplyPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    message("Application submitted successfully!");
  };

  return (
    <div className="min-h-full flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-2xl mt-30 bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-900">
          Job Application Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-4">
            <label
              htmlFor="resume"
              className="block text-lg font-medium text-gray-700"
            >
              Resume (PDF)
            </label>
            <div className="relative">
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                id="resume"
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer opacity-0 absolute top-0 left-0"
              />
              <div
                className={`w-full p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50 text-gray-700 flex justify-between items-center ${
                  formData.resume ? "bg-blue-100" : ""
                }`}
              >
                <span>
                  {formData.resume ? formData.resume.name : "No file chosen"}
                </span>
                <span>
                  <button
                  className={`text-sm font-medium px-4 py-2 rounded-lg transition 
      ${
        formData.resume
          ? "bg-blue-600 text-white hover:bg-blue-800"
          : "bg-blue-100 text-blue-700 hover:bg-blue-200"
      }`}
                  >
                    {formData.resume ? "✔ File selected" : "📁 Click to choose"}
                  </button>
                </span>
              </div>
            </div>
          </div>

          {/* <div>
            <textarea
              name="coverLetter"
              rows="5"
              placeholder="Cover Letter / Message"
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div> */}
            <div className="space-y-4">
            <label
              htmlFor="cover letter"
              className="block text-lg font-medium text-gray-700"
            >
              Cover Letter (PDF)
            </label>
            <div className="relative">
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                id="resume"
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer opacity-0 absolute top-0 left-0"
              />
              <div
                className={`w-full p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50 text-gray-700 flex justify-between items-center ${
                  formData.resume ? "bg-blue-100" : ""
                }`}
              >
                <span>
                  {formData.resume ? formData.resume.name : "No file chosen"}
                </span>
                <span>
                  <button
                  className={`text-sm font-medium px-4 py-2 rounded-lg transition 
      ${
        formData.resume
          ? "bg-blue-600 text-white hover:bg-blue-800"
          : "bg-blue-100 text-blue-700 hover:bg-blue-200"
      }`}
                  >
                    {formData.resume ? "✔ File selected" : "📁 Click to choose"}
                  </button>
                </span>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyPage;
