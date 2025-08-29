import { Blog } from "../models/blog.model.js";
import cloudinary from "../utils/cloudinary.js";
import getDataUri from "../utils/datauri.js";

export const createBlog = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Blog title are required.",
      });
    }

    const blog = await Blog.create({
      title,
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

export const updateBlog = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const { title, description } = req.body;
    const file = req.file;

    let blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    let thumbnail = blog.thumbnail; // pehle ka thumbnail agar file na ho to wahi rahe
    if (file) {
      const fileUri = getDataUri(file);
      const uploadedImage = await cloudinary.uploader.upload(fileUri);
      thumbnail = uploadedImage.secure_url;
    }

    const updateData = {
      title,
      description,
      author: req.id,
      thumbnail,
    };

    blog = await Blog.findByIdAndUpdate(blogId, updateData, {
      new: true,
      runValidators: true,
    });

    return res.status(200).json({
      success: true,
      message: "Blog updated successfully..",
      blog,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to update blog.",
      error: error.message,
    });
  }
};


export const viewBlog = async (req, res) => {
  try {
    const blogs = await Blog.find(); 
    res.json(blogs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: err.message });
  }
}