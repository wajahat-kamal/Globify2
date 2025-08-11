import React from "react";
import Hero from "../components/Hero";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>WK Globify</title>
      </Helmet>
      <div className="mt-15">
        <Hero />
      </div>
    </>
  );
}

export default Home;
