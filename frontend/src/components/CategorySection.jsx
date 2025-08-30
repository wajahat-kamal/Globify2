import React from "react";
import BlogCard from "./BlogCard";

const categories = [
  "All",
  "Adventure",
  "Photography",
  "Food & Culture"
];

const blogs = [
  {
    id: 1,
    title: "Exploring the Hidden Waterfalls of Bali",
    description:
      "Discover the untouched beauty of Bali’s waterfalls and how to reach them.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    category: "Travel",
    author: "John Doe",
    authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
    createdAt: "2025-08-15",
  },
  {
    id: 2,
    title: "A Journey Through the Streets of Tokyo",
    description:
      "Experience the perfect blend of tradition and modernity in Tokyo’s neighborhoods.",
    image: "https://images.unsplash.com/photo-1549693578-d683be217e58",
    category: "Travel",
    author: "Emily Clark",
    authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
    createdAt: "2025-08-10",
  },
  {
    id: 3,
    title: "Discovering the Magic of Paris",
    description:
      "From the Eiffel Tower to hidden cafés, explore the romance of Paris.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    category: "Travel",
    author: "David Miller",
    authorImage: "https://randomuser.me/api/portraits/men/55.jpg",
    createdAt: "2025-07-28",
  },
  {
    id: 4,
    title: "Safari Adventure in Kenya",
    description:
      "Witness the Great Migration and explore Africa’s breathtaking wildlife.",
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2",
    category: "Travel",
    author: "Sophia Lee",
    authorImage: "https://randomuser.me/api/portraits/women/65.jpg",
    createdAt: "2025-07-15",
  },
  {
    id: 5,
    title: "Exploring the Streets of Istanbul",
    description:
      "Where East meets West: Discover the rich culture and flavors of Istanbul.",
    image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
    category: "Travel",
    author: "Michael Smith",
    authorImage: "https://randomuser.me/api/portraits/men/77.jpg",
    createdAt: "2025-07-05",
  },
  {
    id: 6,
    title: "Hiking the Swiss Alps",
    description:
      "Unforgettable mountain views and trails for nature lovers in Switzerland.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    category: "Travel",
    author: "Laura Wilson",
    authorImage: "https://randomuser.me/api/portraits/women/23.jpg",
    createdAt: "2025-06-25",
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
          {blogs.map((blog) => (
               <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
