"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-black">
          <span className="text-[#6C5CE7]">.Jobs^</span>Hunt.
        </Link>

        {/* Hamburger Icon (mobile only) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 text-2xl">
          <Link href="/" className="text-black hover:text-blue-500">Home</Link>
          <Link href="/jobs" className="text-black hover:text-blue-500">Jobs</Link>
          <Link href="/support" className="text-black hover:text-blue-500">Support</Link>
          <Link href="/contact" className="text-black hover:text-blue-500">FeedBack</Link>
          <Link href="/login" className="text-black hover:text-blue-500">Login</Link>
          <Link href="/signup" className="bg-[#6C5CE7] text-white px-4 py-2 rounded-md hover:bg-[#594bdb] transition">
            Sign Up
          </Link>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden px-4 pt-4 pb-6 space-y-3 bg-white shadow-md text-xl">
          <Link href="/" onClick={toggleMenu} className="block text-black hover:text-blue-500">Home</Link>
          <Link href="/jobs" onClick={toggleMenu} className="block text-black hover:text-blue-500">Jobs</Link>
          <Link href="/support" onClick={toggleMenu} className="block text-black hover:text-blue-500">Support</Link>
          <Link href="/contact" onClick={toggleMenu} className="block text-black hover:text-blue-500">Contact</Link>
          <Link href="/login" onClick={toggleMenu} className="block text-black hover:text-blue-500">Login</Link>
          <Link href="/signup" onClick={toggleMenu} className="block bg-[#6C5CE7] text-white px-4 py-2 rounded-md hover:bg-[#594bdb] transition">
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}
