"use client";

import "./modal.css";

import { useState } from "react";

export default function LoginModal({ open, onClose }) {
  const [type, setType] = useState("signIn");

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <div className="relative bg-white rounded-xl shadow-xl w-[900px] max-w-full overflow-hidden">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-3xl font-bold text-gray-700 z-50"
        >
          ✕
        </button>

        {/* Main Container */}
        <div
          className={`container w-full h-full relative transition-all duration-700 ${
            type === "signUp" ? "right-panel-active" : ""
          }`}
        >
          {/* Sign Up Form */}
          <div className="sign-up-container absolute top-0 left-0 w-1/2 h-full flex items-center justify-center px-10 py-8 bg-white">
            <form className="flex flex-col gap-3 w-full max-w-sm">
              <h1 className="text-3xl text-black font-bold">Create Account</h1>

              <input type="text" placeholder="Name" className="bg-gray-100 text-black p-3 rounded-md" />
              <input type="email" placeholder="Email" className="bg-gray-100 text-black p-3 rounded-md" />
              <input type="password" placeholder="Password" className="bg-gray-100 text-black p-3 rounded-md" />

              <button className="bg-[#0fb6e3] text-white py-3 rounded-full font-bold">
                Sign Up
              </button>

            </form>
          </div>

          {/* Sign In Form */}
          <div className="sign-in-container absolute top-0 left-0 w-1/2 h-full flex items-center justify-center px-10 py-8 bg-white">
            <form className="flex flex-col gap-3 w-full max-w-sm">
              <h1 className="text-3xl text-black font-bold">Sign In</h1>

              <input type="email" placeholder="Email" className="bg-gray-100 text-black p-3 rounded-md" />
              <input type="password" placeholder="Password" className="bg-gray-100 text-black p-3 rounded-md" />

              <button className="bg-[#0fb6e3] text-white py-3 rounded-full font-bold">
                Sign In
              </button>
            </form>
          </div>

          {/* Overlay Section */}
          <div className="overlay-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-700 z-20">
            <div className="overlay bg-gradient-to-r from-[#0fb6e3] to-[#0a4d5f] text-white w-[200%] h-full absolute left-[-100%] flex">
              
              {/* Left Overlay */}
              <div className="overlay-panel overlay-left w-1/2 flex flex-col items-center justify-center text-center px-10">
                <h1 className="text-4xl font-bold">Welcome Back!</h1>
                <p className="mt-4 mb-6 text-sm">
                  To keep connected with us, please login with your info.
                </p>
                <button
                  onClick={() => setType("signIn")}
                  className="border border-white px-8 py-2 rounded-full font-bold"
                >
                  Sign In
                </button>
              </div>

              {/* Right Overlay */}
              <div className="overlay-panel overlay-right w-1/2 flex flex-col items-center justify-center text-center px-10">
                <h1 className="text-4xl font-bold">Hello, Friend!</h1>
                <p className="mt-4 mb-6 text-sm">
                  Enter your personal details and start your journey with us
                </p>
                <button
                  onClick={() => setType("signUp")}
                  className="border border-[#0fb6e3] px-8 py-2 rounded-full font-bold"
                >
                  Sign Up
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
