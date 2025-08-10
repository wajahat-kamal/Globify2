import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="px-4 md:px-6 lg:px-8 bg-[#1E1E2E] text-white">
      {/* <div className="px-4 md:px-6 lg:px-8 bg-[#d8e3f0] text-gray-800"> */}
      <div className="max-w-7xl mx-auto md:mx-20 min-h-[600px] flex flex-col-reverse md:flex-row items-center justify-between text-center md:text-left py-10">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-3 mt-5 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Explore the World <br />
            with <span>WK Globify</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg mx-auto md:mx-0 w-[90%] md:w-full">
            Discover breathtaking destinations and rich cultures from around the
            world — through stories, guides, and travel inspiration.
          </p>

          <p className="text-sm sm:text-base ">
            Your one-stop destination for all your blog needs.
          </p>

          <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0 mt-4 justify-center md:justify-start">
            <Link to="/dachbord">
              <button className="bg-gray-700 text-white font-semibold px-6 py-2 rounded-md hover:bg-gray-600 transition duration-300 w-full sm:w-auto">
                Get Started
              </button>
            </Link>
            <Link to="/about">
              <button className="border border-gray-700 text-gray-700 font-semibold px-6 py-2 rounded-md hover:bg-gray-600 hover:text-white transition duration-300 w-full sm:w-auto">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-[80%] md:w-[40%]">
          <img
            src="/main-heroSection.png"
            alt="Hero section illustration"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
