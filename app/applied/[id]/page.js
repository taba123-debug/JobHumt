'use client';

import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from 'next/navigation';

const ApplyPage = () => {
  const router = useRouter();  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: null,
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
    toast.success("Application submitted successfully!");
    
   
    setTimeout(() => {
      router.push("/contact"); 
    }, 1500);  
    // so toast has some time
  };

  return (
    <div className="min-h-full flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-xl mt-10 p-8">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-900">
          Job Application Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Info */}
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

          {/* Resume Upload */}
          <div className="space-y-2">
            <label htmlFor="resume" className="block text-lg font-medium text-gray-700">
              Resume (PDF or Word)
            </label>
            <div className="relative">
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                id="resume"
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm opacity-0 absolute top-0 left-0 cursor-pointer"
              />
              <div className={`w-full p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50 flex justify-between items-center ${formData.resume ? "bg-blue-100" : ""}`}>
                <span>{formData.resume ? formData.resume.name : "No file chosen"}</span>
                <button
                  type="button"
                  className={`text-sm font-medium px-4 py-2 rounded-lg transition ${
                    formData.resume
                      ? "bg-blue-600 text-white hover:bg-blue-800"
                      : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                  }`}
                >
                  {formData.resume ? "✔ File selected" : "📁 Click to choose"}
                </button>
              </div>
            </div>
          </div>

          {/* Cover Letter Upload */}
          <div className="space-y-2">
            <label htmlFor="coverLetter" className="block text-lg font-medium text-gray-700">
              Cover Letter (PDF or Word)
            </label>
            <div className="relative">
              <input
                type="file"
                name="coverLetter"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                id="coverLetter"
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm opacity-0 absolute top-0 left-0 cursor-pointer"
              />
              <div className={`w-full p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50 flex justify-between items-center ${formData.coverLetter ? "bg-blue-100" : ""}`}>
                <span>{formData.coverLetter ? formData.coverLetter.name : "No file chosen"}</span>
                <button
                  type="button"
                  className={`text-sm font-medium px-4 py-2 rounded-lg transition ${
                    formData.coverLetter
                      ? "bg-blue-600 text-white hover:bg-blue-800"
                      : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                  }`}
                >
                  {formData.coverLetter ? "✔ File selected" : "📁 Click to choose"}
                </button>
              </div>
            </div>
          </div>

          {/* Submit Button */}
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
