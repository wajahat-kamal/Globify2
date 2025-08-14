import React from "react";

function Blog() {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-[350px] border border-gray-200">
      {/* Blog Image */}
      <div className="overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Maldives Beach"
          className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Blog Content */}
      <div className="p-4">
        <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900 hover:text-[#ff7b54] transition-colors duration-300 cursor-pointer">
          Discover the Serenity of Maldives: A Tropical Paradise
        </h3>
        <p className="text-xs text-gray-600 leading-relaxed">
          Escape to the Maldives, where crystal-clear waters meet golden sands.
          Experience island life, relax under palm trees, and dive into vibrant
          coral reefs.
        </p>

        {/* Author Info */}
        <div className="flex items-center gap-3 mt-4">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="Sophia Bennett"
            className="w-10 h-10 rounded-full border-2 border-[#ff7b54] object-cover"
          />
          <div>
            <h4 className="font-medium text-gray-900 text-sm">
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
