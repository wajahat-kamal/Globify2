import React from "react";
import BlogCard from "./BlogCard";

function Blogs() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black py-12">
      {/* Hero Section */}
      <div
        className="relative flex flex-col justify-center items-center text-center w-full h-72 md:h-75 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('main-bg.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>

        <div className="relative z-10 px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-amber-300 bg-clip-text text-transparent drop-shadow-lg">
            Recent Blogs
          </h1>
          <p className="mt-3 text-base md:text-lg text-amber-100/90 max-w-2xl mx-auto leading-relaxed">
            Explore the latest travel stories, guides, and tips from around the
            world.
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-12">
        {/* Section Heading */}
        <div className="mb-6 text-start">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-300">
            Blog Posts
          </h2>
          <div className="w-28 md:w-38 mt-1 h-1 bg-gradient-to-r from-emerald-400 via-amber-100 to-amber-400 rounded-full"></div>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </section>
  );
}

export default Blogs;
