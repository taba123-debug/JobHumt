import React from 'react';
import Link from 'next/link';
function Page() {
  return (
    <div className="flex min-h-screen font-sans mt-20 ">

      <div className="w-1/2 flex flex-col justify-center ml-20 items-center bg-gray-100 p-12 shadow-md mt-10 rounded-lg">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Login to continue</h1>
          <input
            type="email"
            placeholder="Email"
            className="mb-4 p-3 w-full border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-6 p-3 w-full border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md w-[100px] ml-50 transition duration-200">
            Login
          </button>
          <p className="text-lg text-center text-gray-600 mt-6">
            Don’t have an account?{' '}
            <Link href="/signup" className="text-blue-500 hover:underline ">
              Sign up to start
            </Link>
          </p>
        </div>
      </div>

      {/* Right - Image */}
      <div className="w-1/2 hidden md:block">
        <img
          src="/images/illustion_1.png"
          alt="Login Visual"
          className="object-cover mt-30 ml-20  w-[500px] h-[500px]"
        />
      </div>
    </div>
  );
}

export default Page;
