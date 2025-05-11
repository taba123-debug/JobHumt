"use client";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }

    try {
      const res = await fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: email,
          password: password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Login successful!");
        localStorage.setItem("jwt", data.jwt);
        setTimeout(() => {
          router.push("/jobs");
        }, 1500);
      } else {
        toast.error(data?.error?.message || "Login failed");
      }
    } catch (err) {
      toast.error("Something went wrong. Try again.");
    }
  };

  return (
    <div className="flex min-h-screen font-sans mt-20">
      <ToastContainer />
      <div className="w-1/2 flex flex-col justify-center ml-20 items-center p-12 shadow-2xl border-blue-800 mt-10 rounded-lg">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
            Login to continue
          </h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 p-3 w-full border border-gray-500 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-6 p-3 w-full border border-gray-500 rounded-md"
          />
          
            <button
              onClick={handleLogin}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md w-full transition duration-200"
            >
              Login
            </button>
        

          <p className="text-lg text-center text-gray-600 mt-6">
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign up to start
            </a>
          </p>
        </div>
      </div>

      <div className="w-1/2 hidden md:block">
        <img
          src="/images/illustion_1.png"
          alt="Login Visual"
          className="object-cover mt-30 ml-20 w-[500px] h-[500px]"
        />
      </div>
    </div>
  );
}

export default LoginPage;
