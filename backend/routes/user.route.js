import express from "express"
import { login, logout, signup } from "../controllers/user.controller.js"
const router = express.Router()

router.route("/signup").post(signup)
router.route("/login").post(login)
router.route("/logout").get(logout)

export default router;