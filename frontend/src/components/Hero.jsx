import React from "react";
import { Link } from "react-router-dom";
import "../index.css"; // Custom CSS animations

function Hero() {
  return (
    <section className="relative w-full min-h-screen flex justify-center items-center text-white overflow-hidden">
      {/* Content */}
      <div className="relative z-10 w-full md:w-2/3 lg:w-1/2 text-center px-6 animate-slideLeft space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
          Explore the World <br />
          with{" "}
          <span className="text-amber-400 relative inline-block after:absolute after:w-full after:h-1 after:bg-amber-400 after:bottom-0 after:left-0 after:rounded-full">
            GLOBIFY
          </span>
        </h1>

        <p className="text-base md:text-lg text-blue-100 drop-shadow-md leading-relaxed">
          Discover breathtaking destinations and rich cultures from around the
          world — through stories, guides, and travel inspiration.
        </p>

        <p className="text-sm sm:text-base text-blue-200 italic drop-shadow-md">
          Your one-stop destination for all your travel blog needs.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 mt-8 justify-center">
          <Link to="/dashboard">
            <button className="bg-amber-500 text-blue-900 font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-amber-400 hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
              Get Started
            </button>
          </Link>
          <Link to="/about">
            <button className="border-2 border-amber-400 text-amber-400 font-semibold px-8 py-3 rounded-xl hover:bg-amber-400 hover:text-blue-900 hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
