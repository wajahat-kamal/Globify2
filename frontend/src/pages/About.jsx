import React from "react";
import { Helmet } from "react-helmet";

function About() {
  return (
    <>
      <Helmet>
        <title>About | Globify</title>
      </Helmet>

      {/* Full background image section */}
      <div
        className="relative min-h-screen flex items-center justify-center px-6 pt-20 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('main-bg.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

        {/* Content Card */}
        <div className="relative max-w-4xl text-gray-100 backdrop-blur-lg bg-white/5 border border-white/10 shadow-xl rounded-3xl p-8 md:p-12 space-y-6 text-center animate-fadeIn">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent tracking-wide">
            About Globify
          </h1>

          <p className="leading-relaxed text-lg text-gray-300">
            Welcome to{" "}
            <span className="font-semibold text-indigo-400">Globify</span> –
            your space to explore, learn, and share ideas with the world. At
            Globify, we believe that knowledge has no borders, and stories
            connect us across cultures, industries, and experiences.
          </p>

          <p className="leading-relaxed text-lg text-gray-300">
            Our mission is to create a platform where curious minds can discover
            valuable insights, fresh perspectives, and inspiring content from
            around the globe. Whether it’s technology, lifestyle, travel, or
            personal growth – Globify is here to amplify voices and spark
            meaningful conversations.
          </p>

          <p className="leading-relaxed text-lg text-gray-300">
            Thank you for being part of this journey. Together, let’s keep
            learning, connecting, and growing – one story at a time.
          </p>

          {/* Footer note */}
          <div className="pt-4 text-sm text-gray-400 transition duration-500 hover:text-indigo-400">
            🌍 Globify – Connecting Ideas, Inspiring Minds
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
