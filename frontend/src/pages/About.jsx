import React from "react";
import { Helmet } from "react-helmet";

function About() {
  return (
    <>
      <Helmet>
        <title>About | Globify</title>
      </Helmet>

      {/* Main Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-gray-900 via-gray-950 to-black">
        {/* Hero Section */}
        <div
          className="relative flex flex-col justify-center items-center mt-12 w-full h-72 md:h-80 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('main-bg.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>

          <div className="relative z-10 px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white drop-shadow-md">
              About Globify
            </h1>
            <p className="mt-3 text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Your one-stop destination for all your travel adventures.
            </p>
          </div>
        </div>

        {/* Content Card */}
        <div className="relative z-10 max-w-4xl my-7 mx-6 text-gray-100 backdrop-blur-xl bg-gray-900/70 border border-gray-700/40 shadow-2xl rounded-3xl p-8 md:p-12 space-y-6 text-center animate-fadeIn">
          <p className="leading-relaxed text-lg text-gray-300">
            Welcome to{" "}
            <span className="font-semibold text-amber-400">Globify</span> – your
            space to explore, learn, and share ideas with the world. At Globify,
            we believe that knowledge has no borders, and stories connect us
            across cultures, industries, and experiences.
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
          <div className="pt-4 text-sm text-gray-400 transition duration-300 hover:text-amber-400">
            🌍 Globify – Connecting Ideas, Inspiring Minds
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
