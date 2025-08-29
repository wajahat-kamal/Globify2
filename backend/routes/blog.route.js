import express from "express"
import { isAuthenticated } from "../middleware/isAuthenticated.js"
import { singleUpload } from "../middleware/multer.js"
import { createBlog, updateBlog, viewBlog } from "../controllers/blog.controller.js"
const router = express.Router()

router.route("/")
.post(isAuthenticated, createBlog)
.get(viewBlog)

router.route("/:blogId").put(isAuthenticated, singleUpload, updateBlog)


export default router;