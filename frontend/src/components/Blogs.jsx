import React from "react";
import Blog from "./Blog";

function Blogs() {
  return (
    <section
      className="relative w-full min-h-screen px-4 md:px-8 lg:px-12 py-16 mt-10 text-white bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('main-bg.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">
            Recent <span className="text-amber-400">Blogs</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore the latest travel stories, guides, and tips from around the
            world.
          </p>
          <div className="w-24 h-1 bg-amber-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Blog Cards Container */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
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
