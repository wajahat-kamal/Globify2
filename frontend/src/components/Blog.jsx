import React from "react";

function Blog() {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 max-w-[350px] border border-gray-200 group">
      {/* Blog Image */}
      <div className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Maldives Beach"
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Date Badge (Hidden until hover) */}
        <span className="absolute bottom-3 left-3 bg-gradient-to-r from-green-600 via-yellow-500 to-blue-800 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-md opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          August 20, 2025
        </span>
      </div>

      {/* Blog Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 text-gray-900 hover:text-[#ff7b54] transition-colors duration-300 cursor-pointer line-clamp-2">
          Discover the Serenity of Maldives: A Tropical Paradise
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
          Escape to the Maldives, where crystal-clear waters meet golden sands.
          Experience island life, relax under palm trees, and dive into vibrant
          coral reefs.
        </p>

        {/* Author Info */}
        <div className="flex items-center gap-3 mt-5">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="Sophia Bennett"
            className="w-11 h-11 rounded-full border-2 border-[#ff7b54] object-cover shadow-sm"
          />
          <div>
            <h4 className="font-semibold text-gray-900 text-sm">
              Sophia Bennett
            </h4>
            <p className="text-gray-500 text-xs">
              Travel Blogger & Photographer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
