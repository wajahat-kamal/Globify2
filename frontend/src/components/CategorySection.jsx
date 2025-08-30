import React from "react";

const categories = [
  "All",
  "Adventure",
  "Photography",
  "Food & Culture",
  "Travel Guides",
  "Lifestyle",
];

function CategoriesSection() {
  return (
    <section className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <nav className="flex items-center justify-center gap-6 md:gap-10 py-4 overflow-x-auto scrollbar-hide">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className="text-gray-700 font-medium hover:text-blue-600 transition relative group"
            >
              {cat}
              {/* Active underline effect on hover */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
}

export default CategoriesSection;
