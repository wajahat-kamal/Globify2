import React from "react";
import BlogCard from "./BlogCard";

function Blogs() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black py-12">
      {/* Hero Section */}
      <div
        className="relative flex flex-col justify-center items-center text-center w-full h-72 md:h-80 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('main-bg.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] animate-fadeIn"></div>

        <div className="relative z-10 px-4 animate-fadeInUp">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white drop-shadow-md">
            Recent Blogs
          </h1>
          <p className="mt-3 text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore the latest travel stories, guides, and tips from around the
            world.
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-9 animate-fadeInUp">
        {/* Section Heading */}
        <div
          className="mb-3 ml-4 text-start animate-fadeInUp"
          style={{ animationDelay: "0.2s" }}
        >
          <h2 className="text-2xl font-bold text-amber-400">Blog Posts</h2>
          <div className="w-32 mt-1 h-1 bg-amber-500 rounded-full"></div>
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
