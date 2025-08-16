import React from "react";
import { Pencil, Trash2 } from "lucide-react";

const YourBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Exploring the Mountains of Hunza",
      description:
        "A breathtaking journey through the snow-capped peaks, serene lakes, and warm hospitality of Hunza Valley.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/5e/84/76/count-the-jeeps-on-lake.jpg?w=1200&h=700&s=1",
      date: "August 12, 2025",
    },
    {
      id: 2,
      title: "A Relaxing Weekend in Skardu Valley",
      description:
        "Discover the beauty of Skardu’s landscapes, from crystal-clear lakes to rugged mountain trails.",
      image: "https://i.dawn.com/large/2015/12/567d1ca45aabe.jpg",
      date: "August 7, 2025",
    },
    {
      id: 3,
      title: "Karachi to Gwadar Coastal Road Trip",
      description:
        "An unforgettable drive along Pakistan’s stunning coastal highway, with stops at pristine beaches and fishing towns.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYRVZy1uc2hgGaQ3f0FFywly8KL32PvcqMLA&s",
      date: "August 1, 2025",
    },
  ];

  return (
    <div className="p-6 pt-20 md:ml-[300px] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen text-white">
      <h1 className="text-4xl font-extrabold mb-10 text-center md:text-left">
        🌍 Your Travel Blogs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 border border-white/10"
          >
            {/* Blog Image */}
            <div className="relative w-full h-56 overflow-hidden group">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
                loading="lazy"
              />
              <span className="absolute bottom-3 left-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-4 py-1 rounded-full shadow-md">
                {blog.date}
              </span>
            </div>

            {/* Blog Content */}
            <div className="p-3 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-1">
                {blog.title}
              </h3>
              <p className="text-gray-300 text-sm flex-1 leading-relaxed">
                {blog.description}
              </p>

              {/* Action Buttons */}
              <div className="flex items-center mt-3">
                <div className="flex gap-3 justify-between w-full">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow hover:from-blue-600 hover:to-blue-800 transition">
                    <Pencil size={16} /> Edit
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg shadow hover:from-red-600 hover:to-red-800 transition">
                    <Trash2 size={16} /> Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourBlogs;
