import React from "react";
import Blog from "./Blog";

function Blogs() {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-16 text-gray-800">
      {/* Heading */}
      <h1 className="text-start text-3xl md:text-4xl font-extrabold mb-12">
        Recent <span className="text-indigo-600">Blogs</span>
      </h1>

      {/* Blog Cards Container */}
      <div className="flex flex-col md:flex-row justify-center flex-wrap items-center gap-5">
        {/* Blog Card */}
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  );
}

export default Blogs;
