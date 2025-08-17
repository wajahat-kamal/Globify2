import express from "express"
import { login, logout, signup, updateProfile } from "../controllers/user.controller.js"
import { isAuthenticated } from "../middleware/isAuthenticated.js"
import { singleUpload } from "../middleware/multer.js"
const router = express.Router()

router.route("/signup").post(signup)
router.route("/login").post(login)
router.route("/logout").get(logout)
router.route("/profile/update").put(isAuthenticated, singleUpload, updateProfile)

export default router;