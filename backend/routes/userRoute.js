import express from "express";
import { loginUser, registeredUser,logoutUser } from "../controllers/userController.js";
import { isAunthenticated } from "../middleware/isAuthenticated.js";
import { checkAuth } from "../controllers/userController.js";

const userRouter = express.Router()

userRouter.post("/register", registeredUser);
userRouter.post("/login", loginUser);
userRouter.post("/logout", logoutUser);
userRouter.get('/check', isAunthenticated, checkAuth);

export default userRouter;