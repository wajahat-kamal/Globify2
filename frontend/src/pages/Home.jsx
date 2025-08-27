import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import Blogs from "../components/Blogs";

function Home() {
  return (
    <>
      <Helmet>
        <title>Globify</title>
      </Helmet>

      <Hero />
      <Blogs/>
    </>
  );
}

export default Home;
