import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import Blogs from "../components/Blogs";
import Background from "../components/Background";

function Home() {
  return (
    <>
      <Helmet>
        <title>Globify</title>
      </Helmet>

      <Background>
        <Hero />
      </Background>
    </>
  );
}

export default Home;
