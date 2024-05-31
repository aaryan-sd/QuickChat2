import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsers, getLoggedInUser } from "../controllers/user.controllers.js";

const router = express.Router();

router.get("/", protectRoute , getUsers);
router.get("/getLoggedInUser", protectRoute, getLoggedInUser);

export default router;