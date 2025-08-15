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
      title: "A Weekend in Skardu",
      description:
        "Discover the beauty of Skardu’s landscapes, from crystal-clear lakes to rugged mountain trails.",
      image:
        "https://i.dawn.com/large/2015/12/567d1ca45aabe.jpg",
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
    <div className="p-6 pt-20 md:ml-[300px] bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Your Travel Blogs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition flex flex-col"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4 flex-1 flex flex-col">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 flex-1">{blog.description}</p>
              <p className="text-gray-400 text-sm mt-2">📅 {blog.date}</p>

              <div className="flex justify-end gap-3 mt-4">
                <button className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                  <Pencil size={16} /> Edit
                </button>
                <button className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                  <Trash2 size={16} /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourBlogs;
