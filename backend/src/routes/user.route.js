import { Router } from "express";
import { getAllUsers, getMessages } from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", protectRoute, getAllUsers);
router.get("/messages/:otherUserId", protectRoute, getMessages);

export default router;
