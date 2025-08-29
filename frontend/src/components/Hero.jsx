import React from "react";
import { Search } from "lucide-react";
import "../index.css"; // Custom CSS animations

function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex justify-center items-center overflow-hidden text-white bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('main-bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 w-full md:w-3/4 lg:w-2/3 text-center px-6 animate-slideLeft">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-snug tracking-tight">
          <span className="block text-white drop-shadow-md">
            Explore the World
          </span>
          <span className="relative inline-block text-amber-300">
            GLOBIFY
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-emerald-400 via-amber-100 to-amber-400 rounded-full"></span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-sky-100/90 drop-shadow-md leading-relaxed max-w-2xl mx-auto mt-4">
          Discover breathtaking destinations, vibrant cultures, and hidden gems
          around the globe — through stories, guides, and travel inspiration.
        </p>

        <p className="text-sm sm:text-base text-emerald-200 italic drop-shadow-md mt-3">
          Your one-stop destination for all your travel adventures.
        </p>

        {/* Search Bar */}
        <div className="mt-6 flex justify-center">
          <div className="flex items-center w-full sm:w-3/4 lg:w-2/3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-4 py-2 shadow-lg">
            <Search className="text-emerald-400 mr-3" />
            <input
              type="text"
              placeholder="Search destinations, guides, or blogs..."
              className="w-full bg-transparent outline-none text-white placeholder:text-sky-200/70"
            />
            <button className="bg-amber-500 text-gray-900 font-bold px-5 py-2 rounded-full shadow-md hover:bg-amber-400 hover:scale-105 transition-all duration-300">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
