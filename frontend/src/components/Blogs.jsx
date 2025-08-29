import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/v1/blog/");
      setBlogs(res.data);
    } catch (error) {
      console.log("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black py-16">
      {/* Hero Section */}
      <div
        className="relative flex flex-col justify-center items-center text-center w-full h-72 md:h-80 bg-cover bg-center bg-no-repeat overflow-hidden rounded-2xl shadow-lg"
        style={{ backgroundImage: "url('main-bg.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>

        <div className="relative z-10 px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-amber-400 via-amber-200 to-amber-400 bg-clip-text text-transparent drop-shadow-lg">
            Recent Blogs
          </h1>
          <p className="mt-4 text-base md:text-lg text-amber-100/90 max-w-2xl mx-auto leading-relaxed">
            Explore the latest travel stories, guides, and tips from around the
            world.
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-16">
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-amber-300">
            Blog Posts
          </h2>
          <div className="w-32 h-1 mx-auto mt-3 bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 rounded-full shadow-lg"></div>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {blogs.length > 0 ? (
            blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
          ) : (
            <p className="text-gray-400 col-span-full">No blogs found</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
