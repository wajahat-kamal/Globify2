import React from "react";
import BlogCard from "./BlogCard";

const categories = [
  "All",
  "Adventure",
  "Photography",
  "Food & Culture"
];



function CategoriesSection() {
  return (
    <section className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Categories Nav */}
        <nav className="flex items-center justify-center gap-6 md:gap-10 py-4 overflow-x-auto scrollbar-hide">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className="text-gray-700 font-medium hover:text-blue-600 transition relative group"
            >
              {cat}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </nav>

        {/* Blog Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 py-10">
          {blogs.map((blog) => (
               <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
