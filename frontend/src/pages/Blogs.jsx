import React from "react";
import { Helmet } from "react-helmet";
import BlogPage from "../components/Blogs";

function Blogs() {
  return (
    <>
      <Helmet>
        <title>Blogs | WK Globify</title>
      </Helmet>
      <div className="mt-10 text-gray-800">
        <BlogPage />
      </div>
    </>
  );
}

export default Blogs;
