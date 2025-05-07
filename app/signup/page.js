'use client';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

function Page() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

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
     
    } else {
      toast.error(data.error?.message || 'Signup failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-6 ">
      <div className="max-w-3xl w-full bg-white p-10 rounded-lg shadow-lg mt-20 border-2 border-blue-400">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Create your Job Hunt Account
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

          <button
            type="submit"
            className="bg-blue-600 text-xl text-white w-[250px] ml-60 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
