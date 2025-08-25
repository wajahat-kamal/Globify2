import React from "react";
import { Helmet } from "react-helmet";
import BlogPage from "../Blogs";

function Blogs() {
  return (
    <>
      <Helmet>
        <title>Blogs | Globify</title>
      </Helmet>
      <div>
        <BlogPage />
      </div>
    </>
  );
}

export default Blogs;
