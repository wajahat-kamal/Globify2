import React from "react";
import { Pencil } from "lucide-react";

const CreateBlog = () => {
  return (
    <div className="p-6 pt-25 md:ml-[300px] bg-gray-900 min-h-screen text-white">
      <form className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl space-y-3 border border-white/10">
        {/* Heading */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <Pencil className="w-7 h-7 text-blue-400" />
          <h1 className="text-2xl md:text-3xl font-extrabold text-center">
            Write a New Blog
          </h1>
        </div>

        {/* Blog Title */}
        <div>
          <label className="block text-sm font-semibold mb-2">Blog Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter blog title..."
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        {/* Blog Image URL */}
        <div>
          <label className="block text-sm font-semibold mb-2">Image URL</label>
          <input
            type="text"
            name="image"
            placeholder="Paste image URL..."
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Blog Description */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Blog Content
          </label>
          <textarea
            name="description"
            placeholder="Write your blog content here..."
            rows="6"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition text-lg font-semibold shadow-md"
        >
          🚀 Publish Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
