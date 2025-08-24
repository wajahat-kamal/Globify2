import React from "react";
import Blog from "./Blog";

function Blogs() {
  return (
    <section className="relative w-full min-h-screen bg-gray-400 py-12">
      {/* Hero Section */}
      <div
        className="relative flex flex-col justify-center items-center text-center w-full h-72 md:h-80 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('main-bg.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>

        <div className="relative z-10 px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white drop-shadow-md">
            Recent Blogs
          </h1>
          <p className="mt-3 text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore the latest travel stories, guides, and tips from around the world.
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-9 ">
        {/* Section Heading */}
        <div className="mb-3 ml-4 text-start">
          <h2 className="text-2xl font-bold text-amber-400">
            Blog Posts
          </h2>
          <div className="w-32 mt-1 h-1 bg-amber-500 rounded-full"></div>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
        </div>
      </div>
    </section>
  );
}

export default Blogs;
