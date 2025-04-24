 'use client';
import React from 'react';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50  shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-black">
            <span className="text-purple-500">Jobs</span>Hunt
        </Link>
        <div className="space-x-6 text-2xl">
          <Link href="/about" className="text-black hover:text-purple-500 transition">
            Jobs
          </Link>
          <Link href="/jobs" className="text-black hover:text-purple-500 transition">
            Support
          </Link>
          <Link href="/contact" className="text-black hover:text-purple-500 transition">
          Blog 
          </Link>
          <Link href="/contact" className="text-black hover:text-purple-500 transition">
            Contact
          </Link>
          <Link href="/contact" className="text-black hover:text-purple-500 transition">
            Login
          </Link>
          <Link href="/contact" className="text-black hover:text-purple-500 transition">
            <button className="bg-gray-300 text-black px-4 py-2 rounded-3xl hover:bg-purple-700 hover:text-white transition">
                Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}


