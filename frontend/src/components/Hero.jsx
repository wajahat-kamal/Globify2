import React from "react";
import { Link } from "react-router-dom";
import "../index.css"; // Import custom CSS animations

function Hero() {
  return (
    <div className="px-4 md:px-6 lg:px-8 bg-gradient-to-r from-[#d8e3f0] to-[#f0f4fa] text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto md:mx-20 min-h-[600px] flex flex-col-reverse md:flex-row items-center justify-between text-center md:text-left py-14">
        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-5 mt-8 md:mt-0 animate-slideLeft">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Explore the World <br />
            with{" "}
            <span className="text-[#ff7b54] relative inline-block after:absolute after:w-full after:h-1 after:bg-[#ff7b54] after:bottom-0 after:left-0 after:rounded-full">
              WK Globify
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-700 w-[90%] md:w-full">
            Discover breathtaking destinations and rich cultures from around the
            world — through stories, guides, and travel inspiration.
          </p>

          <p className="text-sm sm:text-base text-gray-500 italic">
            Your one-stop destination for all your travel blog needs.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 mt-6 justify-center md:justify-start">
            <Link to="/dashboard">
              <button className="bg-[#ff7b54] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-[#ff5c33] transition-all duration-300 w-full sm:w-auto">
                Get Started
              </button>
            </Link>
            <Link to="/about">
              <button className="border border-[#ff7b54] text-[#ff7b54] font-semibold px-8 py-3 rounded-lg hover:bg-[#ff7b54] hover:text-white transition-all duration-300 w-full sm:w-auto">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-[85%] md:w-[45%] relative group animate-slideRight">
          <img
            src="/main-heroSection.png"
            alt="Hero section illustration"
            className="w-full h-auto object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
          />
          {/* Decorative Glow Effect */}
          <div className="absolute -z-10 top-6 left-6 w-full h-full rounded-xl bg-[#ff7b54] opacity-10 blur-2xl"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
