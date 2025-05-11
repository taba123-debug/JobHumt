import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-100 text-black py-10 mt-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Branding */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-[#2C2C54]">Remote Job Hunt</h3>
          <p className="text-gray-600 text-sm">
            Connecting top business development professionals with remote-first companies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-black  font-semibold mb-3">Direct Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[#6C5CE7]">Home</Link></li>
            <li><Link href="/contact" className="hover:text-[#6C5CE7]">Contact</Link></li>
            <li><Link href="/jobs" className="hover:text-[#6C5CE7]">Jobs</Link></li>
            <li><Link href="/support" className="hover:text-[#6C5CE7]">Support</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Stay Connected</h4>
          <p className="text-gray-600 text-xl mb-3">Follow us on:</p>
          <div className="flex items-center space-x-4 text-[#2C2C54] text-xl"> 
            <a href="#" aria-label="Twitter" className="hover:text-[#6C5CE7]">
              <FaTwitter  />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#6C5CE7]">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-[#6C5CE7]">
              <FaGithub  />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} Remote Job Hunt. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
