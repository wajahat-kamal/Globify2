import React from "react";
import { Helmet } from "react-helmet";

function About() {
  return (
    <>
      <Helmet>
        <title>About | Globify</title>
      </Helmet>

      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-8 pt-20">
        {/* Header */}
        <h1 className="text-5xl font-extrabold text-gray-900 mb-8 text-center transition duration-700 ease-in-out hover:scale-105">
          About <span className="text-indigo-600">Globify</span>
        </h1>

        {/* Content Card */}
        <div className="max-w-4xl shadow-lg rounded-2xl p-10 space-y-5 transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
          <p className="text-gray-700 leading-relaxed text-lg transition duration-500 hover:text-gray-900">
            Welcome to{" "}
            <span className="font-semibold text-indigo-600">Globify</span> –
            your space to explore, learn, and share ideas with the world. At
            Globify, we believe that knowledge has no borders, and stories
            connect us across cultures, industries, and experiences.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg transition duration-500 hover:text-gray-900">
            Our mission is to create a platform where curious minds can discover
            valuable insights, fresh perspectives, and inspiring content from
            around the globe. Whether it’s technology, lifestyle, travel, or
            personal growth – Globify is here to amplify voices and spark
            meaningful conversations.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg transition duration-500 hover:text-gray-900">
            We are more than just a blog – we’re a growing community of writers,
            creators, and readers who believe in the power of sharing ideas.
            Every post you read here is written with the aim of informing,
            inspiring, and empowering our audience.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg transition duration-500 hover:text-gray-900">
            Thank you for being part of this journey. Together, let’s keep
            learning, connecting, and growing – one story at a time.
          </p>
        </div>

        {/* Footer note */}
        <div className="mt-7 text-center text-gray-600 text-sm transition duration-700 hover:text-indigo-600">
          <p>🌍 Globify – Connecting Ideas, Inspiring Minds</p>
        </div>
      </div>
    </>
  );
}

export default About;
