import React from "react";

const categories = [
  "All",
  "Adventure",
  "Photography",
  "Food & Culture",
  "Travel Guides",
  "Lifestyle",
];

const blogs = [
  {
    title: "Exploring the Hidden Gems of Northern Areas",
    category: "Adventure",
    image: "https://source.unsplash.com/600x400/?mountains,travel",
  },
  {
    title: "Street Foods You Must Try Once in Your Life",
    category: "Food & Culture",
    image: "https://source.unsplash.com/600x400/?food,street",
  },
  {
    title: "10 Tips for Stunning Travel Photography",
    category: "Photography",
    image: "https://source.unsplash.com/600x400/?camera,photography",
  },
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
          {blogs.map((blog, idx) => (
            <div className="bg-gray-900/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-amber-500/30 hover:-translate-y-2 transition-all duration-500 w-full h-110 max-w-sm border border-gray-800 group">
              {/* Blog Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={
                    blog.image ||
                    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                  }
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Date Badge */}
                <span className="absolute bottom-4 left-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {blog.createdAt
                    ? new Date(blog.createdAt).toDateString()
                    : "Unknown"}
                </span>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-100 group-hover:text-amber-400 transition-colors duration-300 cursor-pointer line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 mb-4">
                  {blog.description}
                </p>

                {/* Divider */}
                <div className="h-[1px] bg-gradient-to-r from-amber-500/70 via-amber-400/50 to-amber-500/70 mb-4"></div>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={blog.authorImage || "/user-avatar.png"}
                    alt={blog.author || "Author"}
                    className="w-10 h-10 rounded-full border-2 border-amber-500 object-cover shadow-sm"
                  />
                  <div>
                    <h4 className="font-medium text-gray-200 text-sm">
                      {blog.author || "Unknown Author"}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
