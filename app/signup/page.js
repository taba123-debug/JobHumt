import React from 'react';
import Link from 'next/link';
function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center  py-12 px-6 ">
      <div className="max-w-3xl w-full bg-white p-10 rounded-lg shadow-lg mt-20 border-2 border-blue-400">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Create your Job Hunt Account
        </h2>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Resume Headline</label>
            <input
              type="text"
              placeholder="Aspiring Backend Developer with a passion for Node.js..."
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Skills</label>
            <input
              type="text"
              placeholder="React, Python, Tailwind CSS..."
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Experience (Years)</label>
            <input
              type="number"
              placeholder="0"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <button className="bg-blue-600 text-xl text-white w-[250px] ml-60 py-3 rounded-full hover:bg-blue-700 transition">
            Sign Up
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-5">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Page;
