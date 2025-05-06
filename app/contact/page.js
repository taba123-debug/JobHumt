"use client";
import React, { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); 

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = {
      data: {
        name,
        email,
        message,
      },
    };
  
    try {
      const res = await fetch("http://localhost:1337/api/feedback-infos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await res.json();
      console.log("Strapi backend response:", result);
  
      if (res.ok) {
        setStatus("Thank you! Your feedback has been submitted.");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Oops! Something went wrong.");
        // console.error("Strapi error:", result);
      }
    } catch (error) {
      setStatus("Server error. Please try again later.");
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <div className="min-h-screen py-16 px-6 md:px-20 mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="images/illustion_1.png"
            alt="Contact illustration"
            className="w-full max-w-md mx-auto md:mx-0"
          />
          <h2 className="text-3xl font-extrabold text-blue-600 mt-8 text-center md:text-left">
            We’d love to hear from you!
          </h2>
          <p className="text-gray-700 mt-4 text-center md:text-left">
            Share your feedback, questions, or suggestions. Your voice helps us grow and improve Remote Job Hunt.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xl font-medium text-gray-800">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              />
            </div>

            <div>
              <label className="block text-xl font-medium text-gray-800">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              />
            </div>

            <div>
              <label className="block text-xl font-medium text-gray-800">Message</label>
              <textarea
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your feedback..."
                required
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-200 text-white font-bold py-3 rounded-lg transition duration-300"
            >
              Submit Feedback
            </button>

            {status && (
              <p className="mt-4 text-center text-sm text-green-600">{status}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
