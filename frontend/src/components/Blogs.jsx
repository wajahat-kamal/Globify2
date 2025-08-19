import React from "react";
import Blog from "./Blog";

function Blogs() {
  return (
    <section className="px-4 md:px-8 lg:px-12 py-10  text-white">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Recent <span className="text-amber-400">Blogs</span>
        </h1>
        <p className="mt-3 text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
          Explore the latest travel stories, guides, and tips from around the
          world.
        </p>
      </div>

      {/* Blog Cards Container */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
    </section>
  );
}

export default Blogs;
