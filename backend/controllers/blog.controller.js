import Blog from "../models/blog.model.js";

export const createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Blog title and content are required.",
      });
    }

    const blog = await Blog.create({
      title,
      content,
      author: req.id, 
    });

    return res.status(201).json({
      success: true,
      message: "Blog created successfully.",
      blog,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to create blog.",
    });
  }
};
