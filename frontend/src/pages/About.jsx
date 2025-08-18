import React from "react";

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-16 mt-5">
      {/* Header */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        About Us
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl text-center mb-12">
        Welcome to our travel blog! We’re passionate about exploring the world
        and sharing travel stories, photography, and tips to help you plan your
        perfect journey. From hidden gems to breathtaking landscapes, we cover
        it all.
      </p>

      {/* Section 1: Mission */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mb-16">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Travel"
          className="w-full md:w-1/2 rounded-xl shadow-lg object-cover transform hover:scale-105 transition-transform duration-300"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 mb-4">
            We believe travel changes perspectives, connects cultures, and
            brings joy. Our mission is to inspire and guide travelers with
            authentic experiences and helpful resources.
          </p>
          <p className="text-gray-600">
            Whether you’re backpacking solo or enjoying a luxury getaway, we
            have content tailored for all kinds of explorers.
          </p>
        </div>
      </div>

      {/* Section 2: Author Bio */}
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl w-full text-center mb-16">
        <img
          src="https://avatars.githubusercontent.com/u/000000?v=4" // Replace with your profile image
          alt="Author"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-400 shadow-md"
        />
        <h3 className="text-xl font-semibold text-gray-800">Wajahat Kamal</h3>
        <p className="text-gray-500 mb-4">MERN Stack Developer & Travel Enthusiast</p>
        <p className="text-gray-600 mb-6">
          Hi! I’m Wajahat, the creator of this blog. I love building web
          applications and exploring new destinations. Through this platform, I
          share my adventures and help others plan their travels.
        </p>
        <a
          href="https://wajahatkamal-dev.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-600 transition-colors"
        >
          Visit My Portfolio
        </a>
      </div>

    </div>
  );
}

export default About;
