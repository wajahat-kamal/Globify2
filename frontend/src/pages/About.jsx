import React from "react";
import { Helmet } from "react-helmet";

function About() {
  return (
    <>
    <Helmet>
    <title>About | Globify</title>
    </Helmet>
    
    <div className="min-h-screen flex flex-col items-center px-6 py-16 mt-5">
      {/* Header */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        About Globify
      </h1>

      {/* Content */}
      <div className="max-w-3xl text-gray-700 leading-relaxed text-lg space-y-6">
        <p>
          Welcome to <span className="font-semibold">Globify</span> – your space 
          to explore, learn, and share ideas with the world. At Globify, we 
          believe that knowledge has no borders, and stories connect us across 
          cultures, industries, and experiences.
        </p>

        <p>
          Our mission is to create a platform where curious minds can discover 
          valuable insights, fresh perspectives, and inspiring content from 
          around the globe. Whether it’s technology, lifestyle, travel, or 
          personal growth – Globify is here to amplify voices and spark 
          meaningful conversations.
        </p>

        <p>
          We are more than just a blog – we’re a growing community of writers, 
          creators, and readers who believe in the power of sharing ideas. 
          Every post you read here is written with the aim of informing, 
          inspiring, and empowering our audience.
        </p>

        <p>
          Thank you for being part of this journey. Together, let’s keep 
          learning, connecting, and growing – one story at a time.
        </p>
      </div>

      {/* Footer note */}
      <div className="mt-10 text-center text-gray-600 text-sm">
        <p>🌍 Globify – Connecting Ideas, Inspiring Minds</p>
      </div>
    </div>
    </>
  );
}

export default About;
