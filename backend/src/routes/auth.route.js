import express from "express";
import {loginWithEmail, loginWithPhone, logout, signup , updateProfile, updateProfilePic } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router()

router.post("/signup",signup)
router.post("/login-email",loginWithEmail)
router.post("/login-phone",loginWithPhone)
router.post("/logout",logout)
router.put("/update-profile" , protectRoute , updateProfile)
router.put("/update-profile-pic" , protectRoute , updateProfilePic)


export default router;