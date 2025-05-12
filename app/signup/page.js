'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // App Router
import { toast } from 'react-hot-toast';

function Page() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const router = useRouter(); // Router instance

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:1337/api/auth/local/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: formData.fullName,  
        email: formData.email,
        password: formData.password,
      }),
    });

    const data = await res.json();
    console.log('Signup Response:', data);

    if (data.jwt) {
      toast.success('User registered successfully!');
      router.push('/jobs'); // ✅ Redirect here
    } else {
      toast.error(data.error?.message || 'Signup failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl w-full bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row mt-20">
        
        {/* Left Side Illustration */}
        <div className="md:w-1/2 bg-blue-100 flex items-center justify-center p-6">
          <div className="text-center">
            <img 
              src="avatar/avatar_2.png" 
              alt="Signup illustration"
              className="w-56 mx-auto mb-6"
            />
            <h3 className="text-2xl font-bold text-blue-800 mb-2 font-serif">Welcome to Jobs Hunt!</h3>
            <p className="text-gray-700 text-md font-serif">
              Discover job opportunities, apply with ease, and build your career.
            </p>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="md:w-1/2 w-full p-8 sm:p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Create your Account
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-1">Full Name</label>
              <input
                name="fullName"
                type="text"
                placeholder="John Doe"
                className="w-full p-3 border border-gray-300 rounded-md"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Email Address</label>
              <input
                name="email"
                type="email"
                placeholder="john@example.com"
                className="w-full p-3 border border-gray-300 rounded-md"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                name="password"
                type="password"
                placeholder="••••••••"
                className="w-full p-3 border border-gray-300 rounded-md"
                onChange={handleChange}
                required
              />
            </div>
           
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
