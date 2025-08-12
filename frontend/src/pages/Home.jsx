import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import Blogs from "../components/Blogs";

function Home() {
  return (
    <>
      <Helmet>
        <title>WK Globify</title>
      </Helmet>
      <div className="mt-15">
        <Hero />
        <Blogs />
      </div>
    </>
  );
}

export default Home;
