import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import CategoriesSection from "../components/CategorySection";

function Home() {
  return (
    <>
      <Helmet>
        <title>Globify</title>
      </Helmet>

      <Hero />
      <CategoriesSection/>
    </>
  );
}

export default Home;
