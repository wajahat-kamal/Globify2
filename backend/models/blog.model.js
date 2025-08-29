import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      minlength: 20,
    },
    image: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", // default thumbnail
    },
    author: {
      type: String,
      trim: true,
    },
    authorImage: {
      type: String,
      default: "/user-avatar.png",
    },
  
  },
  { timestamps: true } // automatically adds createdAt & updatedAt
);

export const Blog = mongoose.model("Blog", blogSchema);

