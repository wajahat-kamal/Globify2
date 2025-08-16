import React from "react";
import { MessageCircle, Trash2 } from "lucide-react";

const YourComments = () => {
  const comments = [
    {
      id: 1,
      blogTitle: "Exploring the Mountains of Hunza",
      text: "This blog perfectly captured my experience in Hunza. Absolutely loved it! ⛰️",
      date: "August 13, 2025",
    },
    {
      id: 2,
      blogTitle: "A Relaxing Weekend in Skardu Valley",
      text: "Skardu is truly heaven on earth! Thanks for sharing such details.",
      date: "August 10, 2025",
    },
    {
      id: 3,
      blogTitle: "Karachi to Gwadar Coastal Road Trip",
      text: "Your description made me want to plan this trip right away 🚗✨",
      date: "August 5, 2025",
    },
  ];

  return (
    <div className="p-6 pt-20 md:ml-[300px] bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-extrabold mb-6 text-center md:text-left">
        💬 Your Comments
      </h1>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-white/10 backdrop-blur-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4"
          >
            {/* Blog Title */}
            <h2 className="text-md font-semibold text-blue-400 mb-1">
              <MessageCircle className="inline-block mr-1" size={16} />
              On: {comment.blogTitle}
            </h2>

            {/* Comment Text */}
            <p className="text-gray-200 text-sm leading-snug">{comment.text}</p>

            {/* Date + Actions */}
            <div className="flex justify-between items-center mt-3">
              <span className="text-gray-400 text-xs">📅 {comment.date}</span>
              <button className="flex items-center gap-1 px-2 py-1 bg-red-500 text-white text-xs rounded-md hover:bg-red-600 transition">
                <Trash2 size={14} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourComments;
