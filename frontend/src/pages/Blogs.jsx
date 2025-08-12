import React from "react";
import { Helmet } from "react-helmet";
import BlogPage from "../components/Blogs";

function Blogs() {
  return (
    <>
      <Helmet>
        <title>Blogs | WK Globify</title>
      </Helmet>
      <div className="mt-10 bg-gradient-to-r from-[#d8e3f0] to-[#f0f4fa] text-gray-800">
        <BlogPage />
      </div>
    </>
  );
}

export default Blogs;
