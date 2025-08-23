import React from "react";
import Blog from "./Blog";

function Blogs() {
  return (
    <section className="relative bg-white/25 w-full min-h-screen  py-5">
      <div className="relative z-10">
        {/* Heading */}
        <div
          className="flex justify-center items-center flex-col mb-5 w-full h-80 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('main-bg.jpg')",
          }}
        >
        <div className="absolute inset-0 bg-black/40"></div>

          <h1 className="text-3xl  font-extrabold tracking-tight drop-shadow-lg text-white text-shadow-2xs">
            RECENT BLOGS
          </h1>
          <p className="text-base md:text-lg text-white max-w-2xl mx-auto leading-relaxed">
            Explore the latest travel stories, guides, and tips from around the
            world.
          </p>
        </div>

        {/* main content */}
        <div className="flex flex-col justify-start items-center gap-3">
          <div className="w-[86%]">
          <h1 className="text-[22px] font-extrabold tracking-tight drop-shadow-lg text-amber-400 ">BLOG POSTS</h1>
          <div className="w-32 h-1 bg-amber-400 rounded-full"></div>
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
      </div>
    </section>
  );
}

export default Blogs;
