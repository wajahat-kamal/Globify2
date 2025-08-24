import React from "react";

function BlogCard() {
  return (
    <div className="bg-gray-900/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-amber-500/20 hover:-translate-y-2 transition-all duration-500 max-w-[360px] border border-gray-700 group">
      {/* Blog Image */}
      <div className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Maldives Beach"
          className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

        {/* Date Badge */}
        <span className="absolute bottom-3 left-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          August 20, 2025
        </span>
      </div>

      {/* Blog Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2 text-gray-100 group-hover:text-amber-400 transition-colors duration-300 cursor-pointer line-clamp-2">
          Discover the Serenity of Maldives: A Tropical Paradise
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
          Escape to the Maldives, where crystal-clear waters meet golden sands.
          Experience island life, relax under palm trees, and dive into vibrant
          coral reefs.
        </p>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-amber-500/80 via-amber-400/60 to-amber-500/80 my-3"></div>

        {/* Author Info */}
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="Sophia Bennett"
            className="w-10 h-10 rounded-full border-2 border-amber-500 object-cover shadow-sm"
          />
          <div>
            <h4 className="font-medium text-gray-200 text-sm">
              Sophia Bennett
            </h4>
            <p className="text-xs text-gray-400">Travel Blogger & Photographer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
